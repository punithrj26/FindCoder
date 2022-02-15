const { Router } = require("express");
const router = Router();

const { SignUp } = require("../controllers/auth");

router.route("/signup").post(SignUp);

module.exports = router;