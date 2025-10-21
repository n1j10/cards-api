// routes/codeRoutes.js
const express = require("express");
const router = express.Router();
const {   getAllstock,
  getStockById,
  getStocktByPlan,
  getStockByStatus,
  getStockSummary,
} = require("../controllers/stock.controller");

//  all codes
router.get("/", getAllstock);

// summary
router.get("/summary", getStockSummary);

// planId
router.get("/plan/:planId", getStocktByPlan);

//    statues
router.get("/status/:status", getStockByStatus);

// id
router.get("/:id", getStockById);

module.exports = router;
