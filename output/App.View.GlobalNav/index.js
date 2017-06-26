"use strict";
var App_Events = require("../App.Events");
var App_Routes = require("../App.Routes");
var Control_Bind = require("../Control.Bind");
var Data_Function = require("../Data.Function");
var Pux_DOM_Events = require("../Pux.DOM.Events");
var Pux_DOM_HTML = require("../Pux.DOM.HTML");
var Text_Smolder_HTML = require("../Text.Smolder.HTML");
var Text_Smolder_HTML_Attributes = require("../Text.Smolder.HTML.Attributes");
var Text_Smolder_Markup = require("../Text.Smolder.Markup");

//----------
var view = Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupMF)(Text_Smolder_HTML.nav)(Text_Smolder_HTML_Attributes.id("global-nav"))(Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupMF)(Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupMF)(Text_Smolder_HTML.a)(Text_Smolder_HTML_Attributes.className("contact")))(Text_Smolder_HTML_Attributes.href("mailto:beep@robotoverlord.io"))(Text_Smolder_Markup.text("Contact Us")));
var navigate = function (dictEventable) {
    return function (dictAttributable) {
        return function (htmlElement) {
            return function (route) {
                return Text_Smolder_Markup.withEvent(dictEventable)(Text_Smolder_Markup["with"](dictAttributable)(htmlElement)(Text_Smolder_HTML_Attributes.href(App_Routes.fromRoute(route))))(Pux_DOM_Events.onClick(App_Events.Navigate.create(App_Routes.fromRoute(route))));
            };
        };
    };
};
module.exports = {
    navigate: navigate, 
    view: view
};
