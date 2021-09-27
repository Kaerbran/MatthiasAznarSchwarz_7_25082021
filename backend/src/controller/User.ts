import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";

//Import bcrypt
import {bcrypt} from 'bcrypt'

//Import token library
import {jwt} from 'jsonwebtoken'

//Import the entity model
import {User} from "../entity/User";

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

};