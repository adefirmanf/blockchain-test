// Placeholder for GET /token-balance/:address/:tokenAddress route (bonus)
// Implement logic using ethers.js to fetch ERC-20 token balance
const express = require('express');
const router = express.Router();
const tokenBalanceController = require('../controllers/tokenBalanceController');

router.get('/:address/:tokenAddress', tokenBalanceController.getTokenBalance);
module.exports = router;