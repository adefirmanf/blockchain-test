// Placeholder for GET /balance/:address route
// Implement logic using ethers.js to fetch ETH balance

const express = require('express');
const router = express.Router();
const balanceController = require('../controllers/balanceController');

router.get('/:address', balanceController.getBalance);
module.exports = router;