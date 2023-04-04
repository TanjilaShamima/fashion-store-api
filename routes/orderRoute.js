const {
  addNewOrder,
  updateOrder,
  deleteOrder,
  findOrderById,
  findAllOrders,
  getMonthlyIncome
} = require("../controller/orderController");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

/**=========Product Create route============= */

router.post("/", verifyToken, addNewOrder);

/**=========Update Order route============= */

router.put("/update/:id", verifyTokenAndAdmin, updateOrder);

/**=========Delete Order route============= */

router.get("/delete/:id", verifyTokenAndAdmin, deleteOrder);

/**=========Find Order route============= */

router.get("/find/:userId", verifyTokenAndAuthorization, findOrderById);

/**=========Get All orders route============= */

router.get("/find/all", verifyTokenAndAdmin, findAllOrders);

/**=========Get Monthly Income route============= */

router.get("/income", verifyTokenAndAdmin, getMonthlyIncome);

module.exports = router;
