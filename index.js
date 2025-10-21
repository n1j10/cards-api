// index.js

// Minimal Express starter for "cards-api" training (NO DB, NO file writes)

//NOTE: Due date for this assignment is 2 days onlyfrom assignment time.

// Data models (no DB):
// User: { id, name, phone, password, balance }
// Plan: { id, title, description, image, price, provider }
// Stock: { id, code, planId, status: 'ready' | 'sold' | 'error' }

// TODO: Keep data in memory (arrays). Instructor may paste sample data here.

const express = require("express");
const app = express();
const port = 3000;
const planRoutes = require("./routes/plans.route");
const userRoutes = require("./routes/user.route");
const purchaseRoutes = require("./routes/purchase.routes");
const stockRoutes = require("./routes/stock.route");


require('dotenv').config()
// TODO: Implement a simple auth by using JWT
// function auth(req,res,next){ /* read Authorization: Bearer <token> and set req.user */ }
// ===================== STUDENT TASKS (10 endpoints) =====================


// 5) POST /purchase  (Auth required)
// - Body: { planId }
// - Check user balance >= plan.price
// - Pick ONE stock item with status='ready' for this planId
// - Mark it 'sold' then return { plan, code }






// 6) GET /stock/:planId/available
// - Return available items for planId (status='ready')
// - Tip: mask codes in list responses (e.g., show last 4 chars only)




// 7) GET /plans/search?q=term

// - Search by title/provider (case-insensitive), return matches

// 8) GET /stock/summary
// - Group stock by planId: [{ planId, ready, sold, error }]    count count by status


// ===================== SERVER =====================
// Middleware to parse JSON bodies
app.use(express.json());
// Use post routes
app.use("/api/plans", planRoutes);
app.use("/api/user", userRoutes);
app.use("/api/", purchaseRoutes);
app.use("/api/stock", stockRoutes);


// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


// http://192.168.10.202:3000/api/plans/3
// http://192.168.10.202:3000/api/user/login
// http://192.168.10.202:3000/api/posts
