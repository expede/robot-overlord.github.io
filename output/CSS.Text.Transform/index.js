"use strict";
var CSS_Common = require("../CSS.Common");
var CSS_Property = require("../CSS.Property");
var CSS_String = require("../CSS.String");
var CSS_Stylesheet = require("../CSS.Stylesheet");
var Data_Eq = require("../Data.Eq");
var Data_Function = require("../Data.Function");
var Data_Generic = require("../Data.Generic");
var Data_Maybe = require("../Data.Maybe");
var Data_Ord = require("../Data.Ord");
var Data_Ordering = require("../Data.Ordering");
var Data_Show = require("../Data.Show");
var Uppercase = (function () {
    function Uppercase() {

    };
    Uppercase.value = new Uppercase();
    return Uppercase;
})();
var Lowercase = (function () {
    function Lowercase() {

    };
    Lowercase.value = new Lowercase();
    return Lowercase;
})();
var Capitalize = (function () {
    function Capitalize() {

    };
    Capitalize.value = new Capitalize();
    return Capitalize;
})();
var None = (function () {
    function None() {

    };
    None.value = new None();
    return None;
})();
var Initial = (function () {
    function Initial() {

    };
    Initial.value = new Initial();
    return Initial;
})();
var Inherit = (function () {
    function Inherit() {

    };
    Inherit.value = new Inherit();
    return Inherit;
})();
var valTextTransform = new CSS_Property.Val(function (v) {
    if (v instanceof Uppercase) {
        return CSS_String.fromString(CSS_Property.isStringValue)("uppercase");
    };
    if (v instanceof Lowercase) {
        return CSS_String.fromString(CSS_Property.isStringValue)("lowercase");
    };
    if (v instanceof Capitalize) {
        return CSS_String.fromString(CSS_Property.isStringValue)("capitalize");
    };
    if (v instanceof None) {
        return CSS_String.fromString(CSS_Property.isStringValue)("none");
    };
    if (v instanceof Initial) {
        return CSS_String.fromString(CSS_Property.isStringValue)("initial");
    };
    if (v instanceof Inherit) {
        return CSS_String.fromString(CSS_Property.isStringValue)("inherit");
    };
    throw new Error("Failed pattern match at CSS.Text.Transform line 32, column 3 - line 33, column 3: " + [ v.constructor.name ]);
});
var uppercase = Uppercase.value;
var textTransform = CSS_Stylesheet.key(valTextTransform)(CSS_String.fromString(CSS_Property.isStringKey)("text-transform"));
var noneTextTransform = new CSS_Common.None(None.value);
var lowercase = Lowercase.value;
var initialTextTransform = new CSS_Common.Initial(Initial.value);
var inheritTextTransform = new CSS_Common.Inherit(Inherit.value);
var genericTextTransform = new Data_Generic.Generic(function (v) {
    if (v instanceof Data_Generic.SProd && (v.value0 === "CSS.Text.Transform.Uppercase" && v.value1.length === 0)) {
        return new Data_Maybe.Just(Uppercase.value);
    };
    if (v instanceof Data_Generic.SProd && (v.value0 === "CSS.Text.Transform.Lowercase" && v.value1.length === 0)) {
        return new Data_Maybe.Just(Lowercase.value);
    };
    if (v instanceof Data_Generic.SProd && (v.value0 === "CSS.Text.Transform.Capitalize" && v.value1.length === 0)) {
        return new Data_Maybe.Just(Capitalize.value);
    };
    if (v instanceof Data_Generic.SProd && (v.value0 === "CSS.Text.Transform.None" && v.value1.length === 0)) {
        return new Data_Maybe.Just(None.value);
    };
    if (v instanceof Data_Generic.SProd && (v.value0 === "CSS.Text.Transform.Initial" && v.value1.length === 0)) {
        return new Data_Maybe.Just(Initial.value);
    };
    if (v instanceof Data_Generic.SProd && (v.value0 === "CSS.Text.Transform.Inherit" && v.value1.length === 0)) {
        return new Data_Maybe.Just(Inherit.value);
    };
    return Data_Maybe.Nothing.value;
}, function ($dollarq) {
    return new Data_Generic.SigProd("CSS.Text.Transform.TextTransform", [ {
        sigConstructor: "CSS.Text.Transform.Uppercase", 
        sigValues: [  ]
    }, {
        sigConstructor: "CSS.Text.Transform.Lowercase", 
        sigValues: [  ]
    }, {
        sigConstructor: "CSS.Text.Transform.Capitalize", 
        sigValues: [  ]
    }, {
        sigConstructor: "CSS.Text.Transform.None", 
        sigValues: [  ]
    }, {
        sigConstructor: "CSS.Text.Transform.Initial", 
        sigValues: [  ]
    }, {
        sigConstructor: "CSS.Text.Transform.Inherit", 
        sigValues: [  ]
    } ]);
}, function (v) {
    if (v instanceof Uppercase) {
        return new Data_Generic.SProd("CSS.Text.Transform.Uppercase", [  ]);
    };
    if (v instanceof Lowercase) {
        return new Data_Generic.SProd("CSS.Text.Transform.Lowercase", [  ]);
    };
    if (v instanceof Capitalize) {
        return new Data_Generic.SProd("CSS.Text.Transform.Capitalize", [  ]);
    };
    if (v instanceof None) {
        return new Data_Generic.SProd("CSS.Text.Transform.None", [  ]);
    };
    if (v instanceof Initial) {
        return new Data_Generic.SProd("CSS.Text.Transform.Initial", [  ]);
    };
    if (v instanceof Inherit) {
        return new Data_Generic.SProd("CSS.Text.Transform.Inherit", [  ]);
    };
    throw new Error("Failed pattern match at CSS.Text.Transform line 29, column 1 - line 29, column 62: " + [ v.constructor.name ]);
});
var showTextTransform = new Data_Show.Show(Data_Generic.gShow(genericTextTransform));
var eqTextTransform = new Data_Eq.Eq(function (x) {
    return function (y) {
        if (x instanceof Uppercase && y instanceof Uppercase) {
            return true;
        };
        if (x instanceof Lowercase && y instanceof Lowercase) {
            return true;
        };
        if (x instanceof Capitalize && y instanceof Capitalize) {
            return true;
        };
        if (x instanceof None && y instanceof None) {
            return true;
        };
        if (x instanceof Initial && y instanceof Initial) {
            return true;
        };
        if (x instanceof Inherit && y instanceof Inherit) {
            return true;
        };
        return false;
    };
});
var ordTextTransform = new Data_Ord.Ord(function () {
    return eqTextTransform;
}, function (x) {
    return function (y) {
        if (x instanceof Uppercase && y instanceof Uppercase) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof Uppercase) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof Uppercase) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof Lowercase && y instanceof Lowercase) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof Lowercase) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof Lowercase) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof Capitalize && y instanceof Capitalize) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof Capitalize) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof Capitalize) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof None && y instanceof None) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof None) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof None) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof Initial && y instanceof Initial) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof Initial) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof Initial) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof Inherit && y instanceof Inherit) {
            return Data_Ordering.EQ.value;
        };
        throw new Error("Failed pattern match at CSS.Text.Transform line 28, column 1 - line 28, column 54: " + [ x.constructor.name, y.constructor.name ]);
    };
});
var capitalize = Capitalize.value;
module.exports = {
    capitalize: capitalize, 
    lowercase: lowercase, 
    textTransform: textTransform, 
    uppercase: uppercase, 
    eqTextTransform: eqTextTransform, 
    ordTextTransform: ordTextTransform, 
    genericTextTransform: genericTextTransform, 
    valTextTransform: valTextTransform, 
    showTextTransform: showTextTransform, 
    noneTextTransform: noneTextTransform, 
    initialTextTransform: initialTextTransform, 
    inheritTextTransform: inheritTextTransform
};