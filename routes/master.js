var express = require('express');
var router = express.Router();

// Data Models
var DataViz = require('../models/viz_model');


router.get('/', function(req, res, next) {
    res.render('master/index_master', {
        layout: 'dash_master',
        title: 'Dashboard',
        page_title: 'Dashboard'
    });
});


// API
router.get('api/data', function (req, res, next) {
    DataViz.dataviz_fn.getAllDataViz(function (err, api_data) {
        if (!err) {
            res.send(api_data);
        } else {
            console.log('Error:', 'route - master/api/data - get');
            res.render('error_page', {
                layout: 'main',
                title: 'Page Error'
            });
        }
    })
});


// Data
router.get('/data/viz', function(req, res, next) {
    res.render('master/dataviz_master', {
        layout: 'dash_master',
        title: 'Data - Viz',
        page_title: 'Data - Viz'
    });
});

router.post('/register', function (req, res, next) {
    var data_category = req.body['data-category'],
        data_country = req.body['data-country'],
        data_title = req.body['data-title'],
        data_api_link = req.body['data-api-link'],
        data_api_weblink = req.body['data-api-weblink'],
        data__api_username = req.body['data-api-username'],
        data_api_password = req.body['data-api-password'];

    var newDataViz = new DataViz({
        category: data_category,
        country: data_country,
        title: data_title,
        api: {
            link: data_api_link,
            weblink: data_api_weblink,
            username: data__api_username,
            password: data_api_password
        }
    });

    DataViz.dataviz_fn.createDataViz(newDataViz, function (err) {
        if (err) {
            console.log('Error:', 'route - master/register - post');
            res.render('error_page', {
                layout: 'main',
                title: 'Page Error'
            });
        } else {
            res.redirect('/master/data/viz');
        }
    });
});


module.exports = router;
