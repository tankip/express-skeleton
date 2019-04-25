// import external variables
const app = require('./loaders/express');
const config = require('./config/config');
require('./loaders/mongoose');

// start server
app.listen(config.port, () => {
    console.log('SUCCESS: Server started on port: ' + config.port);
});