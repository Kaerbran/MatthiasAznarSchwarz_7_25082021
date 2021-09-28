import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";
import {User} from "./entity/User";

//Importation des routes
const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');

createConnection()
.then(async connection => {

    // create express app
    const app = express();

    //CROS resolved : permet de donner acces à notre serveur pour tous les origines
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        next();
    });

    //Ci-dessous on déclare l'ordre dans lequel on souhaite utiliser les middelwares
    app.use(bodyParser.json());

    // register express routes from defined application routes
    app.use('/api/posts', postRoutes);
    app.use('/api/auth', userRoutes);

    // setup express app here
    // ...

    // start express server
    app.listen(3000);
    
    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");

}).catch(error => console.log(error));
