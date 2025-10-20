// controllers/user.controller.js
const users= require("../db/user.json");
var jwt = require('jsonwebtoken');
 

const login = (phone, password) => {  
    console.log('Login attempt:', { phone, password }); // Add debugging
    let user = users.find((u) => u.phone === phone && u.password === password);
    if(!user){
        return null;
    }
    var token = jwt.sign({id: user.id, password: user.password, phone: user.phone }, process.env.SECRET_KEY, {
        expiresIn: "1d",
    });
    return token;
};

const userMe = (id) => {
    console.log('userMe attempt:', id);
    let user = users.find((el) => el.id === id);
    console.log("user", user);
    
    if (!user) return null;
    
    // Return only the required fields
    return {
        id: user.id,
        name: user.name,
        phone: user.phone,
        balance: user.balance
    };
}

module.exports={
    login,
    userMe
}