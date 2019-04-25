// import external variables
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const routes = require('../routes/index.route');
const app = express();

require('../config/passport')(passport);

// cors middleware
app.use(cors());

// body parser middleware
app.use(bodyParser.json());

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/', routes);


module.exports = app;