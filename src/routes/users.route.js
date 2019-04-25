const express = require('express');
const userRouter = express.Router();
const asyncHandler = require('express-async-handler');

userRouter.post('/register', asyncHandler(async (req, res) => {
   res.send('NO USERS');
}));

module.exports = userRouter;