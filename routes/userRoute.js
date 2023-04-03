const { updateUser, deleteUser, getUserDetails, getAllUserDetails, getUserStarts } = require("../controller/userController");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

/**=========Update User route============= */

router.put("/update/:id", verifyTokenAndAuthorization, updateUser);

/**=========Delete User route============= */

router.delete("/delete/:id", verifyTokenAndAuthorization, deleteUser);

/**=========Get User By Id route============= */

router.get("/find/:id", verifyTokenAndAdmin, getUserDetails);

/**=========Get All User route============= */

router.get("/users", verifyTokenAndAdmin, getAllUserDetails);

/**=========Get User starts============= */

router.get("/starts", verifyTokenAndAdmin, getUserStarts);





module.exports = router;
