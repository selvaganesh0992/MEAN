import { Server } from './config/server'
import { DB } from './config/dbConfig';

let api = new Server();

// start node process and listen to port
api.run();
// establish mongo DB connection for a particular DB
DB.getDBConnection();
// to initialize all the API
api.configureRoutes();