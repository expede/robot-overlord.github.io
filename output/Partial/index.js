
// | Some partial helper functions.
"use strict";
var $foreign = require("./foreign");

// | A partial function which crashes on any input with a default message.
var crash = function (dictPartial) {
    return $foreign.crashWith(dictPartial)("Partial.crash: partial function");
};
module.exports = {
    crash: crash, 
    crashWith: $foreign.crashWith
};