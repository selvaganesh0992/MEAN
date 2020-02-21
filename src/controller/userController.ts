import { Router, Request, Response, NextFunction } from 'express';
import { UserManager } from '../data.manager/user.manager';

export class UserController {
    public static route = '/user';
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    };

    private init() {
        this.router.get('/save', this.createUser);
    }

    // To create a new user --> 
    private createUser = (request: Request, response: Response, next: NextFunction) => {
        try {
            // Need to do - validate payload to create user
            // Validate(request.body)
            const manager = new UserManager();
            let userData = manager.saveUserData();
            // Need to do - validate response
            response.send(userData);
        } catch (error) {
            next(error);
        }
    }
}