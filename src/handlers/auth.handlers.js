const jwt = require('jsonwebtoken');
const config = require('../config/database');
const authController = require('../controllers/auth.controller');

const register = async (req, res) => {
    let newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };
    try {
        const savedUser = await authController.addUser(newUser);
        res.json({
            success: true,
            msg: 'User registered successfully.',
            user: {
                id: savedUser._id,
                name: savedUser.name,
                email: savedUser.email
            }
        });
    } catch (err) {
        res.json({ success: false, msg: 'Failed to register user.' });
    }
};

const login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const user = await authController.getUserByEmail(email);
        if (!user) {
            return res.json({ success: false, msg: 'User not found.' })
        } else {
            const isMatch = await authController.comparePassword(password, user.password);
            if (isMatch) {
                const token = jwt.sign({ data: user }, config.secret, {
                    expiresIn: 604800 // token expires in 1 week (in seconds)
                });

                res.json({
                    success: true,
                    token: token,
                    user: {
                        id: user._id,
                        name: user.name,
                        email: user.email
                    }
                });

            } else {
                return res.json({ success: false, msg: 'Wrong password' })
            }
        }
    } catch (err) {
        res.json({ success: false, msg: 'Failed to authenicate user.' });
    }
};

module.exports = {
    register: register,
    login: login
}