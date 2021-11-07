const Database = require("expense-libs/utils/database");
const UserServices = require("expense-libs/services/users");
const Helper = require("expense-libs/utils/helper");
const HTTP_CODE = require("expense-libs/utils/constants");
const createUserSchema = require("expense-libs/schemas/createUsers");

let userService = new UserServices();
let helper = new Helper();
let db = new Database();
if (typeof client === 'undefined') var client = db.connect();
exports.lambdaHandler = async (event) => {
    try {
        //database

        console.log("inside create user");
        //code...
        let params = JSON.parse(event.body)

        const validation = createUserSchema.validate(params);

        if (validation.error) {
            return helper.getResponseObject(false, HTTP_CODE.BAD_REQUEST, validation.error, "Invalid request.");
        }

        const result = await userService.createUser(params);

        if (result) {
            return helper.getResponseObject(true, HTTP_CODE.SUCCESS, result, "User created successfully!");
        }
        return helper.getResponseObject(false, HTTP_CODE.INTERNAL_SERVER_ERROR, [], "Error while creating new User.");
    } catch (error) {
        console.log("error", error)
        return helper.getResponseObject(false, HTTP_CODE.INTERNAL_SERVER_ERROR, error, "Internal Server error.");
    }
}