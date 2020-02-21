import mongodb =  require('mongodb');
import { URLs } from '../constants/globalConstants';

class DBConnection {

    public dbConnection: any;
    
    // establish a DB connection
    public getDBConnection = async () => {
        try {
            const client = await mongodb.MongoClient.connect(URLs.mongoDBURL, { useUnifiedTopology: true, useNewUrlParser: true });
            const db = await client.db(URLs.mongoDB);
            this.dbConnection = db;
            console.log(`DB connected successfully`);
            return;
        } catch (error) {
            console.log(`Something went wrong --> ${error}`);
        }
    }
}

export const DB = new DBConnection();
