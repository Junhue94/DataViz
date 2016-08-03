// ROUTING

// Routes Variables
var index = require('../routes/index');
var test = require('../routes/test');


// Routes Connections
module.exports = function (app) {

    app.use('/', index);
    app.use('/test', test);
};
