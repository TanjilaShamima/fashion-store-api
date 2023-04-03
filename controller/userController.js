const User = require("../models/UserModel");
const CryptoJS = require("crypto-js");
const { response } = require("express");

/**================================Update User Controller============================ */

exports.updateUser = async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();

    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(400).json(err);
    }
  }
};


/**================================Delete User Controller============================ */

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted");
  } catch (err) {
    res.status(404).json(err);
  }
};

/**================================get User Controller============================ */

exports.getUserDetails = async (req, res) => {
  try {
    const userData = await User.findById(req.params.id);
    const { password, ...others } = userData._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(404).json(err);
  }
};


/**================================get Users Controller============================ */

exports.getAllUserDetails = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json(err);
  }
};
