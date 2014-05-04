var express = require('express'),
    swig = require('swig'),
    path = require('path');

module.exports = function (app) {
    
    app.configure(function () {

        app.engine('html', swig.renderFile);
        app.set('views', path.join(__dirname, '/../../client/views'));
        app.set('view engine', 'html');
        app.use('/client', express.static(path.join(__dirname, '/../../client')));

        app.use(app.router);
        
    });

};