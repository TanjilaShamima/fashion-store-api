const { paymentCreate } = require('../controller/stripeController');
const router = require('express').Router;

router.post('/payment', paymentCreate)


module.exports = router;