const AuthSchema = require("../models/Auth");
const { success, error, info } = require("consola");


/*
    @Access PUBLIC
    @http request POST
    @url api/auth/signup
*/

exports.SignUp = async (req, res) => {

    // res.send("OK");
    // console.log(req.body);
    try {
        
        let { username, password, email, role } = req.body;
        let payload = new AuthSchema({ username, password, email, role });
        //save in db
        let data = await AuthSchema.create(payload);
        res.status(201).json({ message: "Successfully user registered", data });
    } catch (err) {
        error(err);
        res.status(501).json({ message: "SERVER ERROR" });
    }
};