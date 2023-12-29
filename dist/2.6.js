"use strict";
var twodotsix;
(function (twodotsix) {
    let strOrNum = "hello";
    strOrNum = 123;
    const arr4 = [1, "3", 5];
    function returnNumber(value) {
        if (typeof value == "string") {
            return parseInt(value);
        }
        return value;
    }
})(twodotsix || (twodotsix = {}));
