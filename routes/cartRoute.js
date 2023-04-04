const {
  addNewCart,
  updateCart,
  deleteCart,
  findCartById,
  findAllCarts
} = require("../controller/cartController");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

/**=========cart Create route============= */

router.post("/", verifyToken, addNewCart);

/**=========Update Cart route============= */

router.put("/update/:id", verifyTokenAndAuthorization, updateCart);

/**=========Delete Cart route============= */

router.get("/delete/:id", verifyTokenAndAuthorization, deleteCart);

/**=========Find Carts route============= */

router.get("/find/:userId", verifyTokenAndAuthorization, findCartById);

/**=========Get All carts route============= */

router.get("/find/all", verifyTokenAndAdmin, findAllCarts);

module.exports = router;
