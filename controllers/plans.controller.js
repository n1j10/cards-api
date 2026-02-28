const plans = require("../db/plans.json");

const getAllPlans = () => {
  return plans;
};

// const searchPlans = (q) => {
//   const query = q.toLowerCase();
//   console.log("title", title);
//   return plans.find((plan) => plan.title === title);
//      // return plans.filter((plan) => plan.title.toLowerCase().includes(query));

// };


const searchPlans = (q) => {
  const query = q.toLowerCase();
    console.log("query", q);

  return plans.filter((plan) => plan.title.toLowerCase().includes(query) || plan.provider.toLowerCase().includes(query)

);
};



const getPlanById = (id) => {
  return plans.find((plan) => plan.id === id);
};




module.exports = {
  getAllPlans,
  getPlanById,
  searchPlans
};
