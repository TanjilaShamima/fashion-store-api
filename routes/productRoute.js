const {
  addNewProduct,
  updateProduct,
  deleteProduct,
  findProductById,
  findAllProducts,
} = require("../controller/productController");
const { verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

/**=========Product Create route============= */

router.post("/", verifyTokenAndAdmin, addNewProduct);

/**=========Update Product route============= */

router.put("/update/:id", verifyTokenAndAdmin, updateProduct);

/**=========Delete Product route============= */

router.put("/delete/:id", verifyTokenAndAdmin, deleteProduct);

/**=========Delete Product route============= */

router.put("/find/:id", findProductById);

/**=========Delete Product route============= */

router.put("/find", findAllProducts);

module.exports = router;
