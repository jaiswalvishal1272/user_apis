const User = require("../db/model/User");
const jwt = require('jsonwebtoken');

const createUser = async (req, resp) => {

        let user = new User(req.body);
        console.log(user);
        user = await user.save();
        resp.send(user);

    
};

const getUser = async (req, resp) => {
        const user = await User.findOne(req.body);
        
        if (!user) {
          return resp.send("Authentication failed");
        } 
        const token = jwt.sign({ userId: user._id }, 'secretKey', { expiresIn: '1h' });
        resp.send(token);
      
};

module.exports = {
    createUser,
    getUser
};