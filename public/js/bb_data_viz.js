
/*
// Data Object
Backbone.Model.prototype.idAttribute = "_id";

// Model
var DataViz = Backbone.Model.extend({
    defaults: {
        category: "",
        country: "",
        title: "",
        api: {
            link: "",
            weblink: "",
            username: "",
            password: ""
        }
    }
});

// Collection
var DataVizs = Backbone.Collection.extend({
    model: Data,
    url: 'http://localhost:3000/api/data'
});

// Instantiate a Collection
var datavizs = new DataVizs();
*/




$(document).ready(function () {
    $.noConflict(); // Run multiple versions of jQuery

    $('#add_viz_data_btn').click(function () {
        $('#form-add-new-data').slideToggle();
    });

    $('#data-table').dataTable();
});