import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";
import {Post} from '../entity/Post';



//Import bcrypt
const bcrypt = require('bcrypt')

//Import token library
import {jwt} from 'jsonwebtoken'

//Import ValidateSchema
import {validateSchema} from '../entity/password'

export class UserController {

    private userRepository = getRepository(User);

    async all(request: any, response: any, next: any) {
        return this.userRepository.find();
    }

    signup(request: any, response: any, next: any) {
        const userRepo = getRepository(User);
        console.log(request.body);  //vide...
        bcrypt.hash(request.body.password, 10)
        .then((hash) => {
            const user = userRepo.create({
                Person_Login: request.body.login,
                Person_Email: request.body.email.toString().toLowerCase(),
                Person_Picture: "placeholder",
                Person_Password: hash
            })
            userRepo.save(user)
            .then(() => response.status(201).json({ message: 'Utilisateur créé !' }))
            .catch(error => response.status(400).json({ error }));
        })
        .catch(error => {
            console.log(`Aïe ça ne fonctionne pas`, error);
            response.status(500).json({ error })
        });       
    }
/*
    async signup_test(request: Request, response: Response, next: NextFunction) {
        
        try {
            const userRepo = getRepository(User);
            const created_hash = await bcrypt.hash(request.body.password, 10)
            
            const user = userRepo.create({
                Person_Login: request.body.login,
                Person_Email: request.body.email.toString().toLowerCase(),
                Person_Picture: "placeholder",
                Person_Password: created_hash
            })
            userRepo.save(user)
            .then(() => response.status(201).json({ message: 'Utilisateur créé !' }))
            .catch(error => response.status(400).json({ error }));
        } catch (error) {
            (error) => response.status(500).json({ error })
        }

    }*/

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        await this.userRepository.remove(userToRemove);
    }

}