// routes/plans.controller.js
const express = require("express");
const router = express.Router();
const planController = require('../controllers/plans.controller');
const authMiddleware = require("../middleware/auth");

// router.get('/search', searchPlans());

// GET all plans
router.get("/", (req, res) => {
  const plans = planController.getAllPlans();
  res.json(plans);
});



router.get("/search",  (req, res) => {
 let q = req.query.q;
   if (!q) {
    return res.status(400).json({ error: "Missing search query (?q=)" });
  }
 let plans = planController.searchPlans(q);
 res.json(plans);
});


// GET a single plan by ID
router.get("/:id",  authMiddleware, (req, res) => {
  let id = parseInt(req.params.id);
  let plan = planController.getPlanById(id);
  res.json(plan);
});








module.exports = router;













// let userId = parseInt(req.user.id);
  // if (userId !== plan.userId) {
  //   return res.status(401).json({ message: "لاتصير لوتي!...." });
  // }


  // if (plan) {
  //   res.json(plan);
  // } else {
  //   res.status(404).json({ message: "Post not found" });
  // }

