"use strict";
var App_Events = require("../App.Events");
var App_State = require("../App.State");
var Control_Bind = require("../Control.Bind");
var Data_Function = require("../Data.Function");
var Pux_DOM_HTML = require("../Pux.DOM.HTML");
var Text_Smolder_HTML = require("../Text.Smolder.HTML");
var Text_Smolder_HTML_Attributes = require("../Text.Smolder.HTML.Attributes");
var Text_Smolder_Markup = require("../Text.Smolder.Markup");
var view = function (v) {
    return Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupMF)(Text_Smolder_HTML.section)(Text_Smolder_HTML_Attributes.id("homepage"))(Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupMF)(Text_Smolder_HTML.header)(Text_Smolder_HTML_Attributes.id("top-header"))(Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupMF)(Text_Smolder_HTML.div)(Text_Smolder_HTML_Attributes.id("inner-header"))(Control_Bind.discard(Control_Bind.discardUnit)(Text_Smolder_Markup.bindMarkupM)(Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupM)(Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupM)(Text_Smolder_HTML.img)(Text_Smolder_HTML_Attributes.id("logo")))(Text_Smolder_HTML_Attributes.src("/happybot.svg")))(function () {
        return Control_Bind.discard(Control_Bind.discardUnit)(Text_Smolder_Markup.bindMarkupM)(Text_Smolder_HTML.h1(Control_Bind.discard(Control_Bind.discardUnit)(Text_Smolder_Markup.bindMarkupM)(Text_Smolder_Markup.text("Robot"))(function () {
            return Control_Bind.discard(Control_Bind.discardUnit)(Text_Smolder_Markup.bindMarkupM)(Text_Smolder_HTML.br)(function () {
                return Text_Smolder_Markup.text("Overlord");
            });
        })))(function () {
            return Text_Smolder_HTML.h2(Text_Smolder_Markup.text("Changing the way the world writes software"));
        });
    }))));
};
module.exports = {
    view: view
};