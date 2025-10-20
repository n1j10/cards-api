const express = require("express");
const router = express.Router();
const { purchasePlan } = require('../controllers/purchase.controller');
const authMiddleware = require("../middleware/auth");



router.post("/purchase", authMiddleware, purchasePlan);

module.exports = router;
