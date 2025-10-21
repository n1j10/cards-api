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

// 🟢 جلب ملخص الأسهم حسب planId مع عد الحالات
const getStockSummary = (req, res) => {
  const summary = stock.reduce((acc, item) => {
    const { planId, status } = item;
    if (!acc[planId]) {
      acc[planId] = { planId, ready: 0, sold: 0, error: 0 };
    }
    acc[planId][status]++;
    return acc;
  }, {});

  const result = Object.values(summary);
  res.json(result);
};

module.exports = {
  getAllstock,
  getStockById,
  getStocktByPlan,
  getStockByStatus,
  getStockSummary,
};
