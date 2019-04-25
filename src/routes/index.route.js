const express = require('express');

const authRoutes = require('./auth.route');
const userRoutes = require('./users.route');

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/', (req, res) =>
  res.send('YOU ARE HERE!')
);

router.use('/auth', authRoutes);
router.use('/users', userRoutes);

module.exports = router;
