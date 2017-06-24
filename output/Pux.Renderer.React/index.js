// Generated by purs version 0.11.5
"use strict";
var $foreign = require("./foreign");
var Control_Applicative = require("../Control.Applicative");
var Control_Bind = require("../Control.Bind");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Data_Array = require("../Data.Array");
var Data_CatList = require("../Data.CatList");
var Data_Function = require("../Data.Function");
var Data_Function_Uncurried = require("../Data.Function.Uncurried");
var Data_Functor = require("../Data.Functor");
var Data_List = require("../Data.List");
var Data_List_Types = require("../Data.List.Types");
var Data_Maybe = require("../Data.Maybe");
var Data_Nullable = require("../Data.Nullable");
var Data_Semigroup = require("../Data.Semigroup");
var Data_StrMap = require("../Data.StrMap");
var Data_Tuple = require("../Data.Tuple");
var Prelude = require("../Prelude");
var Pux_DOM_HTML = require("../Pux.DOM.HTML");
var Pux_DOM_HTML_Attributes = require("../Pux.DOM.HTML.Attributes");
var React = require("../React");
var Signal = require("../Signal");
var Signal_Channel = require("../Signal.Channel");
var Text_Smolder_Markup = require("../Text.Smolder.Markup");
var renderAttrs = function (input) {
    return function (attrs) {
        return function (handlers) {
            var toTupleH = function (v) {
                return new Data_Tuple.Tuple(v.value0, input(v.value1));
            };
            var toTupleA = function (v) {
                return new Data_Tuple.Tuple(v.value0, $foreign.reactAttr(v.value1));
            };
            var tuples = Data_Semigroup.append(Data_CatList.semigroupCatList)(Data_Functor.map(Data_CatList.functorCatList)(toTupleA)(attrs))(Data_Functor.map(Data_CatList.functorCatList)(toTupleH)(handlers));
            return Data_StrMap.fromFoldable(Data_CatList.foldableCatList)(tuples);
        };
    };
};
var renderNodes = function (input) {
    return function (v) {
        if (v instanceof Text_Smolder_Markup.Element && v.value1 instanceof Text_Smolder_Markup.Return) {
            return Data_Array.cons($foreign.reactElement(v, v.value0, renderAttrs(input)(v.value2)(v.value3), Data_Nullable.toNullable(Data_Maybe.Nothing.value)))(renderNodes(input)(v.value4));
        };
        if (v instanceof Text_Smolder_Markup.Element) {
            return Data_Array.cons($foreign.reactElement(v, v.value0, renderAttrs(input)(v.value2)(v.value3), Data_Nullable.toNullable(new Data_Maybe.Just(renderNodes(input)(v.value1)))))(renderNodes(input)(v.value4));
        };
        if (v instanceof Text_Smolder_Markup.Content) {
            return Data_Array.cons($foreign.reactText(v.value0))(renderNodes(input)(v.value1));
        };
        if (v instanceof Text_Smolder_Markup.Return) {
            return [  ];
        };
        throw new Error("Failed pattern match at Pux.Renderer.React line 107, column 1 - line 108, column 96: " + [ input.constructor.name, v.constructor.name ]);
    };
};
var reactClassWithProps = function (component) {
    return function (key$prime) {
        return function (props) {
            return function (children) {
                return $foreign.registerClass(component)(key$prime)(Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupM)(Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupM)(Text_Smolder_Markup.parent("reactclass")(children))($foreign.registerProps(props)(Pux_DOM_HTML_Attributes.data_("pux-react-props"))))(Pux_DOM_HTML_Attributes.data_("pux-react-class")(key$prime)));
            };
        };
    };
};
var reactClass = function (component) {
    return function (key$prime) {
        return function (children) {
            return $foreign.registerClass(component)(key$prime)(Text_Smolder_Markup["with"](Text_Smolder_Markup.attributableMarkupM)(Text_Smolder_Markup.parent("reactclass")(children))(Pux_DOM_HTML_Attributes.data_("pux-react-class")(key$prime)));
        };
    };
};
var hook = function (input) {
    return function (a) {
        return Signal_Channel.send(input)(Data_List.singleton(a));
    };
};
var renderToReact = function (markup) {
    return function (input) {
        return Control_Applicative.pure(Control_Monad_Eff.applicativeEff)($foreign.toReact(Signal.flippedMap(Signal.functorSignal)(markup)(renderNodes($foreign.reactHandler(hook(input))))));
    };
};
var renderToDOM = function (selector) {
    return function (markup) {
        return function (input) {
            return Control_Bind.bindFlipped(Control_Monad_Eff.bindEff)($foreign.renderToDOM_(selector))(renderToReact(markup)(input));
        };
    };
};
var renderToStaticMarkup = function (markup) {
    return function __do() {
        var v = Signal_Channel.channel(Data_List_Types.Nil.value)();
        return Control_Bind.bindFlipped(Control_Monad_Eff.bindEff)($foreign.renderToStaticMarkup_)(renderToReact(markup)(v))();
    };
};
var renderToString = function (markup) {
    return function __do() {
        var v = Signal_Channel.channel(Data_List_Types.Nil.value)();
        return Control_Bind.bindFlipped(Control_Monad_Eff.bindEff)($foreign.renderToString_)(renderToReact(markup)(v))();
    };
};
var dangerouslySetInnerHTML = Text_Smolder_Markup.attribute("dangerouslySetInnerHTML");
module.exports = {
    dangerouslySetInnerHTML: dangerouslySetInnerHTML, 
    reactClass: reactClass, 
    reactClassWithProps: reactClassWithProps, 
    renderToDOM: renderToDOM, 
    renderToReact: renderToReact, 
    renderToStaticMarkup: renderToStaticMarkup, 
    renderToString: renderToString
};