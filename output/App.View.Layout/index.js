// Generated by purs version 0.11.5
"use strict";
var App_Events = require("../App.Events");
var App_Routes = require("../App.Routes");
var App_State = require("../App.State");
var App_View_GlobalNav = require("../App.View.GlobalNav");
var App_View_Homepage = require("../App.View.Homepage");
var App_View_NotFound = require("../App.View.NotFound");
var App_View_Training = require("../App.View.Training");
var App_View_Work = require("../App.View.Work");
var Control_Bind = require("../Control.Bind");
var Data_Function = require("../Data.Function");
var Pux_DOM_Events = require("../Pux.DOM.Events");
var Pux_DOM_HTML = require("../Pux.DOM.HTML");
var Text_Smolder_HTML = require("../Text.Smolder.HTML");
var Text_Smolder_HTML_Attributes = require("../Text.Smolder.HTML.Attributes");
var Text_Smolder_Markup = require("../Text.Smolder.Markup");
var view = function (v) {
    return Text_Smolder_HTML.div(Control_Bind.discard(Control_Bind.discardUnit)(Text_Smolder_Markup.bindMarkupM)(App_View_GlobalNav.view)(function () {
        if (v.value0.route instanceof App_Routes.Home) {
            return App_View_Homepage.view(v);
        };
        if (v.value0.route instanceof App_Routes.About) {
            return App_View_Homepage.view(v);
        };
        if (v.value0.route instanceof App_Routes.OpenSource) {
            return App_View_Work.view(v);
        };
        if (v.value0.route instanceof App_Routes.Training) {
            return App_View_Training.view(v.value0.route.value0);
        };
        if (v.value0.route instanceof App_Routes.Contact) {
            return App_View_Work.view(v);
        };
        if (v.value0.route instanceof App_Routes.NotFound) {
            return App_View_NotFound.view(v);
        };
        throw new Error("Failed pattern match at App.View.Layout line 47, column 5 - line 53, column 44: " + [ v.value0.route.constructor.name ]);
    }));
};
module.exports = {
    view: view
};
