import { database } from '../../common/nodejs/node_modules/expense-libs/utils/database';
import { createUser } from '../../common/nodejs/node_modules/expense-libs/services/users';
exports.lambdaHandler = (event) => {
    try {
        //database
        const resultDB = database()
        //code...
        return event
    } catch (error) {
        console.log("error", error)
    }
}