// Generated by purs version 0.11.5
"use strict";
var $foreign = require("./foreign");
var DOM_Event_Types = require("../DOM.Event.Types");
var Text_Smolder_Markup = require("../Text.Smolder.Markup");
var onWheel = Text_Smolder_Markup.on("onWheel");
var onWaiting = Text_Smolder_Markup.on("onWaiting");
var onVolumeChange = Text_Smolder_Markup.on("onVolumeChange");
var onTouchStart = Text_Smolder_Markup.on("onTouchStart");
var onTouchMove = Text_Smolder_Markup.on("onTouchMove");
var onTouchEnd = Text_Smolder_Markup.on("onTouchEnd");
var onTouchCancel = Text_Smolder_Markup.on("onTouchCancel");
var onTimeUpdate = Text_Smolder_Markup.on("onTimeUpdate");
var onSuspend = Text_Smolder_Markup.on("onSuspend");
var onSubmit = Text_Smolder_Markup.on("onSubmit");
var onStalled = Text_Smolder_Markup.on("onStalled");
var onSelect = Text_Smolder_Markup.on("onSelect");
var onSeeking = Text_Smolder_Markup.on("onSeeking");
var onSeeked = Text_Smolder_Markup.on("onSeeked");
var onScroll = Text_Smolder_Markup.on("onScroll");
var onRateChange = Text_Smolder_Markup.on("onRateChange");
var onProgress = Text_Smolder_Markup.on("onProgress");
var onPlaying = Text_Smolder_Markup.on("onPlaying");
var onPlay = Text_Smolder_Markup.on("onPlay");
var onPause = Text_Smolder_Markup.on("onPause");
var onPaste = Text_Smolder_Markup.on("onPaste");
var onMouseUp = Text_Smolder_Markup.on("onMouseUp");
var onMouseOver = Text_Smolder_Markup.on("onMouseOver");
var onMouseOut = Text_Smolder_Markup.on("onMouseOut");
var onMouseMove = Text_Smolder_Markup.on("onMouseMove");
var onMouseLeave = Text_Smolder_Markup.on("onMouseLeave");
var onMouseEnter = Text_Smolder_Markup.on("onMouseEnter");
var onMouseDown = Text_Smolder_Markup.on("onMouseDown");
var onLoadedMetadata = Text_Smolder_Markup.on("onLoadedMetadata");
var onLoadedData = Text_Smolder_Markup.on("onLoadedData");
var onLoadStart = Text_Smolder_Markup.on("onLoadStart");
var onLoad = Text_Smolder_Markup.on("onLoad");
var onKeyUp = Text_Smolder_Markup.on("onKeyUp");
var onKeyPress = Text_Smolder_Markup.on("onKeyPress");
var onKeyDown = Text_Smolder_Markup.on("onKeyDown");
var onInput = Text_Smolder_Markup.on("onInput");
var onFocus = Text_Smolder_Markup.on("onFocus");
var onError = Text_Smolder_Markup.on("onError");
var onEnded = Text_Smolder_Markup.on("onEnded");
var onEncrypted = Text_Smolder_Markup.on("onEncrypted");
var onEmptied = Text_Smolder_Markup.on("onEmptied");
var onDurationChange = Text_Smolder_Markup.on("onDurationChange");
var onDrop = Text_Smolder_Markup.on("onDrop");
var onDragStart = Text_Smolder_Markup.on("onDragStart");
var onDragOver = Text_Smolder_Markup.on("onDragOver");
var onDragLeave = Text_Smolder_Markup.on("onDragLeave");
var onDragExit = Text_Smolder_Markup.on("onDragExit");
var onDragEnter = Text_Smolder_Markup.on("onDragEnter");
var onDragEnd = Text_Smolder_Markup.on("onDragEnd");
var onDrag = Text_Smolder_Markup.on("onDrag");
var onDoubleClick = Text_Smolder_Markup.on("onDoubleClick");
var onCut = Text_Smolder_Markup.on("onCut");
var onCopy = Text_Smolder_Markup.on("onCopy");
var onContextMenu = Text_Smolder_Markup.on("onContextMenu");
var onCompositionUpdate = Text_Smolder_Markup.on("onCompositionUpdate");
var onCompositionStart = Text_Smolder_Markup.on("onCompositionStart");
var onCompositionEnd = Text_Smolder_Markup.on("onCompositionEnd");
var onClick = Text_Smolder_Markup.on("onClick");
var onChange = Text_Smolder_Markup.on("onChange");
var onCanPlayThrough = Text_Smolder_Markup.on("onCanPlayThrough");
var onCanPlay = Text_Smolder_Markup.on("onCanPlay");
var onBlur = Text_Smolder_Markup.on("onBlur");
var onAbort = Text_Smolder_Markup.on("onAbort");
var mapEventHandler = function (f) {
    return function (v) {
        return new Text_Smolder_Markup.EventHandler(v.value0, function (e) {
            return f(v.value1(e));
        });
    };
};
module.exports = {
    mapEventHandler: mapEventHandler, 
    onAbort: onAbort, 
    onBlur: onBlur, 
    onCanPlay: onCanPlay, 
    onCanPlayThrough: onCanPlayThrough, 
    onChange: onChange, 
    onClick: onClick, 
    onCompositionEnd: onCompositionEnd, 
    onCompositionStart: onCompositionStart, 
    onCompositionUpdate: onCompositionUpdate, 
    onContextMenu: onContextMenu, 
    onCopy: onCopy, 
    onCut: onCut, 
    onDoubleClick: onDoubleClick, 
    onDrag: onDrag, 
    onDragEnd: onDragEnd, 
    onDragEnter: onDragEnter, 
    onDragExit: onDragExit, 
    onDragLeave: onDragLeave, 
    onDragOver: onDragOver, 
    onDragStart: onDragStart, 
    onDrop: onDrop, 
    onDurationChange: onDurationChange, 
    onEmptied: onEmptied, 
    onEncrypted: onEncrypted, 
    onEnded: onEnded, 
    onError: onError, 
    onFocus: onFocus, 
    onInput: onInput, 
    onKeyDown: onKeyDown, 
    onKeyPress: onKeyPress, 
    onKeyUp: onKeyUp, 
    onLoad: onLoad, 
    onLoadStart: onLoadStart, 
    onLoadedData: onLoadedData, 
    onLoadedMetadata: onLoadedMetadata, 
    onMouseDown: onMouseDown, 
    onMouseEnter: onMouseEnter, 
    onMouseLeave: onMouseLeave, 
    onMouseMove: onMouseMove, 
    onMouseOut: onMouseOut, 
    onMouseOver: onMouseOver, 
    onMouseUp: onMouseUp, 
    onPaste: onPaste, 
    onPause: onPause, 
    onPlay: onPlay, 
    onPlaying: onPlaying, 
    onProgress: onProgress, 
    onRateChange: onRateChange, 
    onScroll: onScroll, 
    onSeeked: onSeeked, 
    onSeeking: onSeeking, 
    onSelect: onSelect, 
    onStalled: onStalled, 
    onSubmit: onSubmit, 
    onSuspend: onSuspend, 
    onTimeUpdate: onTimeUpdate, 
    onTouchCancel: onTouchCancel, 
    onTouchEnd: onTouchEnd, 
    onTouchMove: onTouchMove, 
    onTouchStart: onTouchStart, 
    onVolumeChange: onVolumeChange, 
    onWaiting: onWaiting, 
    onWheel: onWheel, 
    targetValue: $foreign.targetValue
};