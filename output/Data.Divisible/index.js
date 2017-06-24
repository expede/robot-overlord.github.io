// Generated by purs version 0.11.5
"use strict";
var Data_Comparison = require("../Data.Comparison");
var Data_Divide = require("../Data.Divide");
var Data_Equivalence = require("../Data.Equivalence");
var Data_Function = require("../Data.Function");
var Data_Monoid = require("../Data.Monoid");
var Data_Op = require("../Data.Op");
var Data_Ordering = require("../Data.Ordering");
var Data_Predicate = require("../Data.Predicate");
var Prelude = require("../Prelude");
var Divisible = function (Divide0, conquer) {
    this.Divide0 = Divide0;
    this.conquer = conquer;
};
var divisiblePredicate = new Divisible(function () {
    return Data_Divide.dividePredicate;
}, Data_Function["const"](true));
var divisibleOp = function (dictMonoid) {
    return new Divisible(function () {
        return Data_Divide.divideOp(dictMonoid.Semigroup0());
    }, Data_Op.Op(Data_Function["const"](Data_Monoid.mempty(dictMonoid))));
};
var divisibleEquivalence = new Divisible(function () {
    return Data_Divide.divideEquivalence;
}, Data_Equivalence.Equivalence(function (v) {
    return function (v1) {
        return true;
    };
}));
var divisibleComparison = new Divisible(function () {
    return Data_Divide.divideComparison;
}, Data_Comparison.Comparison(function (v) {
    return function (v1) {
        return Data_Ordering.EQ.value;
    };
}));
var conquer = function (dict) {
    return dict.conquer;
};
module.exports = {
    Divisible: Divisible, 
    conquer: conquer, 
    divisibleComparison: divisibleComparison, 
    divisibleEquivalence: divisibleEquivalence, 
    divisiblePredicate: divisiblePredicate, 
    divisibleOp: divisibleOp
};