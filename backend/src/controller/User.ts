import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";

//Import bcrypt
import {bcrypt} from 'bcrypt'

//Import token library
import {jwt} from 'jsonwebtoken'

//Import ValidateSchema
import {validateSchema} from '../entity/password'

//Import the entity model
import {User} from "../entity/User";
import {Post} from "../entity/Post";

exports.signup = (req, res, next) => {
    const userRepo = getRepository(User);
    bcrypt.hash(req.body.password, 10)
    .then((hash) => {
        const user = userRepo.create({
            Person_Login: req.body.login,
            Person_Email: req.body.email.toString().toLowerCase(),
            Person_Password: hash
        })
        userRepo.save(user)
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
    const userRepo = getRepository(User);
    userRepo.findOne({ Person_Email: req.body.user_email.toString().toLowerCase() })
    .then((user) => {
        console.log("User that logged in: ", user);
        if (!user) {
            return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        bcrypt.compare(req.body.password, user.Person_Password)
        .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            res.status(200).json({
              userId: user.Person_ID,
              token: jwt.sign(
                { userId: user.Person_ID },
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '24h' }
              )
            });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};