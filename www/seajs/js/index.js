"use strict";

define(function(require, exports, module) {
    alert("Index loaded, dependent on print!");
    var print = require("print");

    print.print("Hello print!");
});
