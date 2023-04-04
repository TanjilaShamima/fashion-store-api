const stripe = require("stripe")(process.env.STRIPE_KEY);

exports.paymentCreate = (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeError, stripeResponse) => {
      if (stripeError) {
        res.status(500).json(err);
      } else {
        res.status(200).json(stripeResponse);
      }
    }
  );
};
