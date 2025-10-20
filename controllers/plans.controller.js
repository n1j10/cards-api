const plans = require("../db/plans.json");

const getAllPlans = () => {
  return plans;
};

const getPlanById = (id) => {
  return plans.find((plan) => plan.id === id);
};

module.exports = {
  getAllPlans,
  getPlanById,
};
