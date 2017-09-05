"use strict";

require(["print"], function(print) {
    alert("Index loaded, and dependent on print!");
    print.print("Hello print!");
});
