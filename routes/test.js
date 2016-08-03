var express = require('express');
var router = express.Router();


router.get('/1', function(req, res, next) {
    res.render('test1', {
        title: 'Test1'
    });
});


module.exports = router;
