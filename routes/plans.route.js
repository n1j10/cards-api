// routes/plans.controller.js
const express = require("express");
const router = express.Router();
const planController = require('../controllers/plans.controller');
const authMiddleware = require("../middleware/auth");


// GET all plans
router.get("/", (req, res) => {
  const plans = planController.getAllPlans();
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

