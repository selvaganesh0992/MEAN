import express, { Request, Response, NextFunction } from 'express';
import * as bodyParser from 'body-parser';
import * as http from 'http';

// user-defined
import { UserController } from '../controller/userController';
import { URLs } from '../constants/globalConstants';

export class Server {
    public app: express.Express;
    public baseRoute = URLs.baseRoute;
    constructor() {
        this.app = express();
    }

    // listen to port
    public run() {
        let server = http.createServer(this.app);
        console.log(`listening on 3000`)
        server.listen(3000);
        server.on('error', (error => {
            console.log(error);
        }));
    }

    public configureRoutes() {
        // to parse incoming payload to JSON format
        this.app.use(bodyParser.json());
        this.app.use('/api'+ UserController.route, new UserController().router);
        
        // error handling middleware
        this.app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
            // write error to logger file
            res.status(500).send(`Something broke! --> ${err.message}  ${err.stack}`);
        });
    }
}