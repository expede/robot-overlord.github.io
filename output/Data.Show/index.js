"use strict";
var $foreign = require("./foreign");

// | The `Show` type class represents those types which can be converted into

// | a human-readable `String` representation.

// |

// | While not required, it is recommended that for any expression `x`, the

// | string `show x` be executable PureScript code which evaluates to the same

// | value as the expression `x`.
var Show = function (show) {
    this.show = show;
};
var showString = new Show($foreign.showStringImpl);
var showNumber = new Show($foreign.showNumberImpl);
var showInt = new Show($foreign.showIntImpl);
var showChar = new Show($foreign.showCharImpl);
var showBoolean = new Show(function (v) {
    if (v) {
        return "true";
    };
    if (!v) {
        return "false";
    };
    throw new Error("Failed pattern match at Data.Show line 13, column 3 - line 14, column 3: " + [ v.constructor.name ]);
});

// | The `Show` type class represents those types which can be converted into

// | a human-readable `String` representation.

// |

// | While not required, it is recommended that for any expression `x`, the

// | string `show x` be executable PureScript code which evaluates to the same

// | value as the expression `x`.
var show = function (dict) {
    return dict.show;
};
var showArray = function (dictShow) {
    return new Show($foreign.showArrayImpl(show(dictShow)));
};
module.exports = {
    Show: Show, 
    show: show, 
    showBoolean: showBoolean, 
    showInt: showInt, 
    showNumber: showNumber, 
    showChar: showChar, 
    showString: showString, 
    showArray: showArray
};