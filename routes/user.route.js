// routes/user.route.js

const express = require("express");
const router = express.Router();
const userController = require('../controllers/user.controller');
const authMiddleware = require("../middleware/auth");

router.post("/login", (req,res)=>{
    console.log('Received request body:', req.body);
    let {phone, password}= req.body;
    let token = userController.login(phone, password);

    if(!token){
        return res.status(401).json({message: 'invalid credentails'})
    }
    res.json({ token });
});

router.get("/me", authMiddleware, (req,res)=>{
    let userId = parseInt(req.user.id);
    let user = userController.userMe(userId);
    res.json(user);
})
module.exports= router;

