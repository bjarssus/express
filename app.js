"use strict";

var express = require("express");
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static("www"));

app.post("/post", function(req, res, next) {
    var foo = req.body.foo;
    var bar = req.body.bar;
    var baz = req.body.baz;
    res.send({
        success: true,
        foo: foo,
        bar: bar,
        baz: baz
    });
})

var server = app.listen(80, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Service on http://%s:%s", host, port);
});
