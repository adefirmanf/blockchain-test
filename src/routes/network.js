// Placeholder for GET /network route (bonus)
// Implement logic using ethers.js to fetch chain ID and network name
const express = require('express');
const router = express.Router();
const networkController = require('../controllers/networkController');

router.get('/', networkController.getNetwork);
module.exports = router;