import express, {Request, Response} from "express";

class Server {
    private app: express.Application;

    constructor() {
        this.app = express(); //init the application
        this.configuration();
        this.routes();
    }

    public configuration(){
        this.app.set('port', process.env.PORT || 3000);
    }

    public routes(){
        this.app.get("/", (req: Request, res: Response) => {
            res.send("Hello world");
        });
    }

    public start(){
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server is listening ${this.app.get('port')} port.`);
        });
    }
}

const server = new Server();    //Create server instance
server.start();                 // Execute the server