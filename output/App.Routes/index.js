"use strict";
var Control_Alt = require("../Control.Alt");
var Control_Apply = require("../Control.Apply");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_Maybe = require("../Data.Maybe");
var Data_Semigroup = require("../Data.Semigroup");
var Prelude = require("../Prelude");
var Pux_Router = require("../Pux.Router");
var TrainingHome = (function () {
    function TrainingHome() {

    };
    TrainingHome.value = new TrainingHome();
    return TrainingHome;
})();
var FP = (function () {
    function FP() {

    };
    FP.value = new FP();
    return FP;
})();
var Elixir = (function () {
    function Elixir() {

    };
    Elixir.value = new Elixir();
    return Elixir;
})();
var Elm = (function () {
    function Elm() {

    };
    Elm.value = new Elm();
    return Elm;
})();
var JavaScript = (function () {
    function JavaScript() {

    };
    JavaScript.value = new JavaScript();
    return JavaScript;
})();
var ComingSoon = (function () {
    function ComingSoon() {

    };
    ComingSoon.value = new ComingSoon();
    return ComingSoon;
})();
var Home = (function () {
    function Home() {

    };
    Home.value = new Home();
    return Home;
})();
var About = (function () {
    function About() {

    };
    About.value = new About();
    return About;
})();
var OpenSource = (function () {
    function OpenSource() {

    };
    OpenSource.value = new OpenSource();
    return OpenSource;
})();
var Contact = (function () {
    function Contact() {

    };
    Contact.value = new Contact();
    return Contact;
})();
var Training = (function () {
    function Training(value0) {
        this.value0 = value0;
    };
    Training.create = function (value0) {
        return new Training(value0);
    };
    return Training;
})();
var NotFound = (function () {
    function NotFound(value0) {
        this.value0 = value0;
    };
    NotFound.create = function (value0) {
        return new NotFound(value0);
    };
    return NotFound;
})();
var toTrainingRoute = Control_Alt.alt(Pux_Router.matchAlt)(Control_Alt.alt(Pux_Router.matchAlt)(Control_Alt.alt(Pux_Router.matchAlt)(Control_Alt.alt(Pux_Router.matchAlt)(Control_Alt.alt(Pux_Router.matchAlt)(Data_Functor.voidRight(Pux_Router.matchFunctor)(TrainingHome.value)(Pux_Router.end))(Control_Apply.applyFirst(Pux_Router.matchApply)(Data_Functor.voidRight(Pux_Router.matchFunctor)(FP.value)(Pux_Router.lit("fp")))(Pux_Router.end)))(Control_Apply.applyFirst(Pux_Router.matchApply)(Data_Functor.voidRight(Pux_Router.matchFunctor)(Elixir.value)(Pux_Router.lit("elixir")))(Pux_Router.end)))(Control_Apply.applyFirst(Pux_Router.matchApply)(Data_Functor.voidRight(Pux_Router.matchFunctor)(Elm.value)(Pux_Router.lit("elm")))(Pux_Router.end)))(Control_Apply.applyFirst(Pux_Router.matchApply)(Data_Functor.voidRight(Pux_Router.matchFunctor)(JavaScript.value)(Pux_Router.lit("javascript")))(Pux_Router.end)))(Control_Apply.applyFirst(Pux_Router.matchApply)(Data_Functor.voidRight(Pux_Router.matchFunctor)(ComingSoon.value)(Pux_Router.lit("comingsoon")))(Pux_Router.end));
var toRoute = Control_Alt.alt(Pux_Router.matchAlt)(Control_Alt.alt(Pux_Router.matchAlt)(Control_Alt.alt(Pux_Router.matchAlt)(Control_Alt.alt(Pux_Router.matchAlt)(Data_Functor.voidRight(Pux_Router.matchFunctor)(Home.value)(Pux_Router.end))(Control_Apply.applyFirst(Pux_Router.matchApply)(Data_Functor.voidRight(Pux_Router.matchFunctor)(About.value)(Pux_Router.lit("#about")))(Pux_Router.end)))(Control_Apply.applyFirst(Pux_Router.matchApply)(Data_Functor.voidRight(Pux_Router.matchFunctor)(OpenSource.value)(Pux_Router.lit("#opensource")))(Pux_Router.end)))(Control_Apply.applyFirst(Pux_Router.matchApply)(Data_Functor.voidRight(Pux_Router.matchFunctor)(Contact.value)(Pux_Router.lit("#contact")))(Pux_Router.end)))(Data_Functor.map(Pux_Router.matchFunctor)(Training.create)(Control_Apply.applySecond(Pux_Router.matchApply)(Pux_Router.lit("#training"))(toTrainingRoute)));

//-----------

// Routing --

//-----------
var match = function (url) {
    return Data_Maybe.fromMaybe(new NotFound(url))(Pux_Router.router(url)(toRoute));
};
var fromTrainingRoute = function (subroute) {
    if (subroute instanceof TrainingHome) {
        return "/";
    };
    if (subroute instanceof FP) {
        return "/fp";
    };
    if (subroute instanceof Elixir) {
        return "/elixir";
    };
    if (subroute instanceof Elm) {
        return "/elm";
    };
    if (subroute instanceof JavaScript) {
        return "/javascript";
    };
    if (subroute instanceof ComingSoon) {
        return "/comingsoon";
    };
    throw new Error("Failed pattern match at App.Routes line 76, column 3 - line 82, column 21: " + [ subroute.constructor.name ]);
};

//---------

// Links --

//---------
var fromRoute = function (route) {
    if (route instanceof Home) {
        return "/";
    };
    if (route instanceof About) {
        return "/#about";
    };
    if (route instanceof OpenSource) {
        return "/#opensource";
    };
    if (route instanceof Contact) {
        return "/#contact";
    };
    if (route instanceof Training) {
        return "/#training" + fromTrainingRoute(route.value0);
    };
    if (route instanceof NotFound) {
        return route.value0;
    };
    throw new Error("Failed pattern match at App.Routes line 66, column 3 - line 72, column 29: " + [ route.constructor.name ]);
};
module.exports = {
    Home: Home, 
    About: About, 
    OpenSource: OpenSource, 
    Contact: Contact, 
    Training: Training, 
    NotFound: NotFound, 
    TrainingHome: TrainingHome, 
    FP: FP, 
    Elixir: Elixir, 
    Elm: Elm, 
    JavaScript: JavaScript, 
    ComingSoon: ComingSoon, 
    fromRoute: fromRoute, 
    fromTrainingRoute: fromTrainingRoute, 
    match: match, 
    toRoute: toRoute, 
    toTrainingRoute: toTrainingRoute
};
