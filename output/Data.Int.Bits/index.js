
// | This module defines bitwise operations for the `Int` type.
"use strict";
var $foreign = require("./foreign");
module.exports = {
    and: $foreign.and, 
    complement: $foreign.complement, 
    or: $foreign.or, 
    shl: $foreign.shl, 
    shr: $foreign.shr, 
    xor: $foreign.xor, 
    zshr: $foreign.zshr
};