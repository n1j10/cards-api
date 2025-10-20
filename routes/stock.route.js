// routes/codeRoutes.js
const express = require("express");
const router = express.Router();
const {   getAllstock,
  getStockById,
  getStocktByPlan,
  getStockByStatus,
} = require("../controllers/stock.controller");

//  all codes 
router.get("/", getAllstock);     

// id
router.get("/:id", getStockById);

// planId
router.get("/plan/:planId", getStocktByPlan);

//    statues
router.get("/status/:status", getStockByStatus);

module.exports = router;
