// Generated by purs version 0.11.5
"use strict";
var Control_Monad_Aff = require("../Control.Monad.Aff");
var Control_Monad_Eff_Class = require("../Control.Monad.Eff.Class");
var Control_Monad_Eff_Console = require("../Control.Monad.Eff.Console");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Prelude = require("../Prelude");
var warnShow = function (dictShow) {
    return function ($4) {
        return Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Control_Monad_Eff_Console.warnShow(dictShow)($4));
    };
};
var warn = function ($5) {
    return Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Control_Monad_Eff_Console.warn($5));
};
var logShow = function (dictShow) {
    return function ($6) {
        return Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Control_Monad_Eff_Console.logShow(dictShow)($6));
    };
};
var log = function ($7) {
    return Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Control_Monad_Eff_Console.log($7));
};
var infoShow = function (dictShow) {
    return function ($8) {
        return Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Control_Monad_Eff_Console.infoShow(dictShow)($8));
    };
};
var info = function ($9) {
    return Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Control_Monad_Eff_Console.info($9));
};
var errorShow = function (dictShow) {
    return function ($10) {
        return Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Control_Monad_Eff_Console.errorShow(dictShow)($10));
    };
};
var error = function ($11) {
    return Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Control_Monad_Eff_Console.error($11));
};
module.exports = {
    error: error, 
    errorShow: errorShow, 
    info: info, 
    infoShow: infoShow, 
    log: log, 
    logShow: logShow, 
    warn: warn, 
    warnShow: warnShow
};