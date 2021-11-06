exports.lambdaHandler = (event) => {
    try {
        return "hello from your first lambda"
    } catch (error) {
        console.log("error", error);
        return error;
    }
}