
const users= require("../db/user.json");
const plans = require('../db/plans.json');
const stock = require('../db/stock.json');

const purchasePlan = async (req, res) => {
  try {
    const userId = req.user?.id ; 
    const { planId } = req.body;

    // find user and plan
    const user = req.user;
    const plan = plans.find(p => p.id === planId);

    if (!plan) return res.status(404).json({ error: 'Plan not found' });
    if (!user) return res.status(404).json({ error: 'User not found' });
    if (user.balance < plan.price) return res.status(400).json({ error: 'Insufficient balance' });

    // find available stock
    const stockItem = stock.find(s => s.planId === planId && s.status === 'ready');

    if (!stockItem) return res.status(404).json({ error: 'No available stock' });
    // deduct balance
    user.balance -= plan.price;
    stockItem.status = 'sold';



    res.json({ plan, code: stockItem.code });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { purchasePlan };
