const bcrypt = require('bcryptjs');
const User = require('../models/users.model');

let addUser = async (newUser) => {
    let user = new User(newUser);
    try {
        user.password = bcrypt.hashSync(user.password, 10);
        return await user.save();
    } catch (err) {
        throw err;
    }
};

let getUserByEmail = async (email) => {
    const query = { email: email };
    try {
        return await User.findOne(query);
    } catch (err) {
        throw err;
    }
}

let comparePassword = async (inputPassword, dbPassword) => {
    
    try {
        const isMatch = bcrypt.compare(inputPassword, dbPassword);
        return await isMatch;
    } catch (err) {
        throw err;
    }

}

module.exports = {
    addUser: addUser,
    getUserByEmail: getUserByEmail,
    comparePassword: comparePassword
}