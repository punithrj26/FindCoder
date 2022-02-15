const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const AuthSchema = new Schema({
    username: {
        type: String,
        required: [true, "Please add Username"],
        minlength: [6, "Username should be min 6 char "],
    },
    email: {
        type: String,
        required: [true, "Please add Email id"],
        match:[/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/, 'Please fill a valid email address'],
        
    },
    password: {
        type: String,
        required: [true, "Please add Password"],
        minlength: [6, "Password should be min 6 char "],
        select:false,
    },
    role: {
        type: String,
        enum:["user","publisher"],
        default:"user",
    },
},
    { timestamps: true }
);

AuthSchema.pre("save", async function () {
    let salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

module.exports = model("user", AuthSchema);
