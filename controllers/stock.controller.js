// controllers/codeController.js
const stock = require("../db/stock.json");

const getAllstock = (req, res) => {
  res.json(stock);
};

const getStockById = (req, res) => {
  const id = parseInt(req.params.id);
  const stocks = stock.find((c) => c.id === id);
  if (!stocks) {
    return res.status(404).json({ message: "Code not found" });
  }
  res.json(stocks);
};
// 🟢 جلب الأكواد حسب planId
const getStocktByPlan = (req, res) => {
  const planId = parseInt(req.params.planId);
  const filtered = stock.filter((c) => c.planId === planId);

  if (filtered.length === 0) {
    return res.status(404).json({ message: "No codes found for this plan" });
  }
  res.json(filtered);
};
// 🟢 جلب الأكواد حسب الحالة (ready / sold / error)
const getStockByStatus = (req, res) => {
  const status = req.params.status.toLowerCase();
  const filtered = stock.filter(
    (c) => c.status.toLowerCase() === status
  );

  if (filtered.length === 0) {
    return res.status(404).json({ message: "No codes found with this status" });
  }

  res.json(filtered);
};

module.exports = {
  getAllstock,
  getStockById,
  getStocktByPlan,
  getStockByStatus,
};
