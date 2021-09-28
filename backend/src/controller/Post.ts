import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";

//Import the entity model
import {User} from "../entity/User";
import {Post} from "../entity/Post";

//Import de la librarie node qui permet de gerer les documents 
const fs = require('fs');

exports.createPost = (req, res, next) => {
    const postObject = JSON.parse(req.body.post);
    
    const postRepo = getRepository(Post);
    const post = postRepo.create({
        Post_Comment: postObject.comment,
        Post_Location: postObject.location,
        Post_Date_published: postObject.date,
        //imageURL à rajouter ici
    })
    postRepo.save(post)
    .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
    .catch(error => res.status(400).json({ error: error }));
};

exports.getOnePost = (req, res, next) => {
    const postRepo = getRepository(Post);

    postRepo.findOne({ Post_ID: req.params.id })
    .then((post) => {res.status(200).json(post);})
    .catch((error) => {res.status(404).json({error: error });});
};

exports.modifyPost = (req, res, next) => {
    
};

exports.deletePost = (req, res, next) => {
    
};

exports.getAllPosts = (req, res, next) => {
    const postRepo = getRepository(Post);
    postRepo.find({ select: ["Person_ID", "Post_Comment", "Post_Date_published", "Post_ID", "Post_Location", "Post_Picture", "User"] })
    .then((posts) => {res.status(200).json(posts);})
    .catch((error) => {res.status(400).json({error: error});});
};
