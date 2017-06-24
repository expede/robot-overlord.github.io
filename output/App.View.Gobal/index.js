"use strict";
var App_Events = require("../App.Events");
var App_Routes = require("../App.Routes");
var App_State = require("../App.State");
var App_View_Homepage = require("../App.View.Homepage");
var App_View_NotFound = require("../App.View.NotFound");
var App_View_Style = require("../App.View.Style");
var App_View_Training = require("../App.View.Training");
var App_View_Work = require("../App.View.Work");
var Control_Bind = require("../Control.Bind");
var Data_Function = require("../Data.Function");
var Pux_DOM_Events = require("../Pux.DOM.Events");
var Pux_DOM_HTML = require("../Pux.DOM.HTML");
var Text_Smolder_HTML = require("../Text.Smolder.HTML");
var Text_Smolder_HTML_Attributes = require("../Text.Smolder.HTML.Attributes");
var Text_Smolder_Markup = require("../Text.Smolder.Markup");
var navigate = function (dictEventable) {
    return function (dictAttributable) {
        return function (htmlElement) {
            return function (route) {
                return Text_Smolder_Markup.withEvent(dictEventable)(Text_Smolder_Markup["with"](dictAttributable)(htmlElement)(Text_Smolder_HTML_Attributes.href(App_Routes.fromRoute(route))))(Pux_DOM_Events.onClick(App_Events.Navigate.create(App_Routes.fromRoute(route))));
            };
        };
    };
};

//----------
var view = function (v) {
    return Text_Smolder_HTML.div(Control_Bind.discard(Control_Bind.discardUnit)(Text_Smolder_Markup.bindMarkupM)(Pux_DOM_HTML.style(App_View_Style.css))(function () {
        return Control_Bind.discard(Control_Bind.discardUnit)(Text_Smolder_Markup.bindMarkupM)(Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupMF)(Text_Smolder_HTML.nav)(Text_Smolder_HTML_Attributes.id("global-nav"))(Control_Bind.discard(Control_Bind.discardUnit)(Text_Smolder_Markup.bindMarkupM)(navigate(Text_Smolder_Markup.eventableMarkupMF)(Text_Smolder_Markup.attributableMarkupMF)(Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupMF)(Text_Smolder_HTML.a)(Text_Smolder_HTML_Attributes.className("training")))(new App_Routes.Training(App_Routes.TrainingHome.value))(Text_Smolder_Markup.text("Training")))(function () {
            return Control_Bind.discard(Control_Bind.discardUnit)(Text_Smolder_Markup.bindMarkupM)(navigate(Text_Smolder_Markup.eventableMarkupMF)(Text_Smolder_Markup.attributableMarkupMF)(Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupMF)(Text_Smolder_HTML.a)(Text_Smolder_HTML_Attributes.className("oss")))(App_Routes.OpenSource.value)(Text_Smolder_Markup.text("Open Source")))(function () {
                return navigate(Text_Smolder_Markup.eventableMarkupMF)(Text_Smolder_Markup.attributableMarkupMF)(Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupMF)(Text_Smolder_HTML.a)(Text_Smolder_HTML_Attributes.className("contact")))(App_Routes.Contact.value)(Text_Smolder_Markup.text("Contact Us"));
            });
        })))(function () {
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
            throw new Error("Failed pattern match at App.View.Gobal line 61, column 5 - line 67, column 49: " + [ v.value0.route.constructor.name ]);
        });
    }));
};
module.exports = {
    navigate: navigate, 
    view: view
};
