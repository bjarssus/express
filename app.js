"use strict";

var express = require("express");
var app = express();

app.use(express.static("www"));

var server = app.listen(80, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Service was on http://%s:%s", host, port);
})
