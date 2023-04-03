const { addNewCart } = require("../controller/cartController");
const { verifyToken } = require("./verifyToken");
  
  const router = require("express").Router();
  
  /**=========Product Create route============= */
  
  router.post("/", verifyToken, addNewCart);
  
//   /**=========Update Product route============= */
  
//   router.put("/update/:id", verifyTokenAndAdmin, updateProduct);
  
//   /**=========Delete Product route============= */
  
//   router.put("/delete/:id", verifyTokenAndAdmin, deleteProduct);
  
//   /**=========Delete Product route============= */
  
//   router.put("/find/:id", findProductById);
  
//   /**=========Delete Product route============= */
  
//   router.put("/find", findAllProducts);
  
  module.exports = router;
  