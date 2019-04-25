const express = require('express');
const authRouter = express.Router();
const asyncHandler = require('express-async-handler');

const authHandler = require('../handlers/auth.handlers');

authRouter.post('/register', asyncHandler(authHandler.register));
authRouter.post('/login', asyncHandler(authHandler.login));

module.exports = authRouter;