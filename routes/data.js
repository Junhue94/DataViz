var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('data/data_test', {
        layout: 'data_all',
        title: 'DataViz'
    });
});


module.exports = router;
