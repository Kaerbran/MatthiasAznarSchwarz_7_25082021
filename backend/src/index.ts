import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";



//const request = require("express");
//const response = require("express");

import {Routes} from "./routes";
import {User} from "./entity/User";

//Importation des routes
const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');

createConnection().then(async connection => {

    // create express app
    const app = express();

    //CROS resolved : permet de donner acces à notre serveur pour tous les origines
    app.use((request, response, next) => {
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
        response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        console.log(response);
        next();
    });

    app.use(bodyParser.json());

    // register express routes from defined application routes
    //app.use('/api/posts', postRoutes);
    //app.use('/api/auth', userRoutes);

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: any, res: any, next: any) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    }); 

    // setup express app here
    // ...

    // start express server
    app.listen(3000);

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");

}).catch(error => console.log(error));
