import { DB } from '../config/dbConfig';
import { UserQuery } from '../query/user.query';

export class UserManager {

    public saveUserData = async () => {
        let userCollection = DB.dbConnection.collection('users');
            let DBresponse = await userCollection.aggregate(UserQuery.createQuery)
        return DBresponse;
    }
}