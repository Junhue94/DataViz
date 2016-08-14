var mongoose = require('mongoose');

// DataViz Schema
var DataVizSchema = mongoose.Schema({
    category: {
        type: String
    },
    country: {
        type: String
    },
    title: {
        type: String
    },
    api: {
        link: {
            type: String
        },
        weblink: {
            type: String
        },
        username: {
            type: String
        },
        password: {
            type: String
        }
    }
});

// Compile schema into a model and export model
var DataViz = module.exports = mongoose.model('DataViz', DataVizSchema, 'data');

// Usable functions
module.exports.dataviz_fn = {
    createDataViz: function (newData, callback) {
        newData.save(callback);
    },
    getAllDataViz: function (callback) {
        DataViz.find(callback);
    },
    updateDataViz: function (data_id, update, callback) {
        var query = {_id: data_id};
        DataViz.update(query, update, callback);
    },
    deleteDataViz: function (data_id, callback) {
        var query = {_id: data_id};
        DataViz.remove(query, callback)
    }
};