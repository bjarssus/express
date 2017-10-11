"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config.json");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static("www"));

var server = app.listen(config.port || 8080, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Service on http://%s:%s", host, port);
});
