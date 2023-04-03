const router = require("express").Router();
const { registerNewUser, loginUser } = require("../controller/authController");

/**=========Registration route============= */

router.post("/register", registerNewUser);

/**=========login route============= */

router.post("/login", loginUser);

module.exports = router;
