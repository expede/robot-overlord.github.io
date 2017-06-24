"use strict";
var Data_Show = require("../Data.Show");

// | An uninhabited data type.

// |

// | `Void` is useful to eliminate the possibility of a value being created.

// | For example, a value of type `Either Void Boolean` can never have

// | a Left value created in PureScript.
var Void = function (x) {
    return x;
};
var absurd = function (a) {
    var spin = function ($copy_v) {
        var $tco_result;
        function $tco_loop(v) {
            $copy_v = v;
            return;
        };
        while (!false) {
            $tco_result = $tco_loop($copy_v);
        };
        return $tco_result;
    };
    return spin(a);
};
var showVoid = new Data_Show.Show(absurd);
module.exports = {
    absurd: absurd, 
    showVoid: showVoid
};