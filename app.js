(function () {
    'use strict';
    var express,
        app;

    express = require('express');

    app = express();

    app.get('/', function (req, res) {
        console.log('request: ', req, ' response: ', res);
        res.send('Hello World!');
    });

    app.listen(3001, function () {
        console.log('Example app listening on port 3001');
    });
}());
