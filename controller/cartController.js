const Cart = require("../models/CartModel");

/**================================new product Create Controller============================ */

exports.addNewCart = async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
};

// /**================================update Product Controller============================ */

// exports.updateProduct = async (req, res) => {
//   try {
//     const updateProduct = await Product.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );
//     res.status(200).json(updateProduct);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };

// /**================================delete Product Controller============================ */

// exports.deleteProduct = async (req, res) => {
//   try {
//     await Product.findByIdAndDelete(req.params.id);
//     res.status(200).json("This product is deleted");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };

// /**================================Find Product Controller============================ */

// exports.findProductById = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     res.status(200).json(product);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };

// /**================================Find Products Controller============================ */

// exports.findAllProducts = async (req, res) => {
//   const qNew = req.query.new;
//   const qCategory = req.query.category;
//   try {
//     let products;
//     if (qNew) {
//       products = await Product.find().sort({ createdAt: -1 }).limit(3);
//     } else if (qCategory) {
//       products = await Product.find({ categories: { $in: [qCategory] } });
//     } else {
//       products = await Product.find();
//     }

//     res.status(200).json(product);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };
