"use strict";
var Data_Function = require("../Data.Function");
var Pux_DOM_HTML = require("../Pux.DOM.HTML");
var Text_Smolder_HTML = require("../Text.Smolder.HTML");
var Text_Smolder_Markup = require("../Text.Smolder.Markup");
var view = function (st) {
    return Text_Smolder_HTML.div(Text_Smolder_HTML.h2(Text_Smolder_Markup.text("404 Not Found")));
};
module.exports = {
    view: view
};
