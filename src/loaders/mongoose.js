const mongoose = require('mongoose');
const config = require('../config/database');

// connect to database
mongoose.connect(config.database, { useNewUrlParser: true, keepAlive: 1 } );

// 'on' connection
mongoose.connection.on('connected', () => {
    console.log('SUCCESS: Connected to Database!');
});

// 'on' connection
mongoose.connection.on('error', (err) => {
    console.log('FAIL: Database Error: ' + err);
});