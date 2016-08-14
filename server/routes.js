// ROUTING

// Routes Variables
var index = require('../routes/index');
var data = require('../routes/data');
var master = require('../routes/master');

var test = require('../routes/test');


// Routes Connections
module.exports = function (app) {

    app.use('/', index);
    app.use('/data', data);
    app.use('/master', master);

    app.use('/test', test);
};
