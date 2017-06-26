"use strict";
var CSS = require("../CSS");
var CSS_Background = require("../CSS.Background");
var CSS_Border = require("../CSS.Border");
var CSS_Common = require("../CSS.Common");
var CSS_Display = require("../CSS.Display");
var CSS_Elements = require("../CSS.Elements");
var CSS_Flexbox = require("../CSS.Flexbox");
var CSS_Font = require("../CSS.Font");
var CSS_Geometry = require("../CSS.Geometry");
var CSS_Property = require("../CSS.Property");
var CSS_Selector = require("../CSS.Selector");
var CSS_Size = require("../CSS.Size");
var CSS_String = require("../CSS.String");
var CSS_Stylesheet = require("../CSS.Stylesheet");
var CSS_Text = require("../CSS.Text");
var CSS_Text_Transform = require("../CSS.Text.Transform");
var CSS_TextAlign = require("../CSS.TextAlign");
var Color = require("../Color");
var Color_Scheme_X11 = require("../Color.Scheme.X11");
var Control_Bind = require("../Control.Bind");
var Data_Function = require("../Data.Function");
var Data_Maybe = require("../Data.Maybe");
var Data_NonEmpty = require("../Data.NonEmpty");
var globalNav = CSS_String.fromString(CSS_Selector.isStringSelector)("#global-nav");
var navLinks = CSS_Selector.child(globalNav)(CSS_Elements.a);
var fontStyle = CSS_Stylesheet.key(CSS_Property.valString)(CSS_String.fromString(CSS_Property.isStringKey)("font-style"));
var also = function (x) {
    return function (y) {
        return new CSS_Selector.Selector([  ], new CSS_Selector.Combined(x, y));
    };
};
var css = Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Stylesheet.importUrl("https://fonts.googleapis.com/css?family=Exo:900,900i|Open+Sans"))(function () {
    return Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Stylesheet.select(CSS_Elements.body)(Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Background.backgroundColor(Color.rgb(239)(239)(239)))(function () {
        return Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Font.color(Color.black))(function () {
            return Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Font.fontFamily([ "Open Sans" ])(new Data_NonEmpty.NonEmpty(CSS_Font.sansSerif, [  ])))(function () {
                return CSS_Font.fontSize(CSS_Size.px(14.0));
            });
        });
    })))(function () {
        return Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Stylesheet.select(also(also(CSS_Elements.h1)(CSS_Elements.h2))(navLinks))(Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Text_Transform.textTransform(CSS_Text_Transform.uppercase))(function () {
            return CSS_Font.fontFamily([ "Exo" ])(new Data_NonEmpty.NonEmpty(CSS_Font.sansSerif, [  ]));
        })))(function () {
            return Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Stylesheet.select(CSS_Elements.h1)(CSS_Font.fontSize(CSS_Size.em(3.0))))(function () {
                return Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Stylesheet.select(CSS_Elements.h2)(CSS_Font.fontSize(CSS_Size.em(2.0))))(function () {
                    return Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Stylesheet.select(globalNav)(Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Display.position(CSS_Display.absolute))(function () {
                        return Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Geometry.top(CSS_Size.em(1.0)))(function () {
                            return CSS_Geometry.right(CSS_Size.em(1.0));
                        });
                    })))(function () {
                        return Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Stylesheet.select(navLinks)(CSS_Font.fontSize(CSS_Size.em(1.25))))(function () {
                            return Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Stylesheet.select(CSS_Elements.a)(Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Border.borderRadius(CSS_Size.px(2.0))(CSS_Size.px(2.0))(CSS_Size.px(2.0))(CSS_Size.px(2.0)))(function () {
                                return Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Geometry.padding(CSS_Size.px(6.0))(CSS_Size.px(6.0))(CSS_Size.px(6.0))(CSS_Size.px(6.0)))(function () {
                                    return CSS_Text.textDecoration(CSS_Text.noneTextDecoration);
                                });
                            })))(function () {
                                return Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Stylesheet.select(CSS_String.fromString(CSS_Selector.isStringSelector)("#top-header"))(Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Geometry.width(CSS_Size.vw(100.0)))(function () {
                                    return Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Geometry.height(CSS_Size.vh(100.0)))(function () {
                                        return Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Display.display(CSS_Display.flex))(function () {
                                            return Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Flexbox.alignItems(CSS_Common.center(CSS_Flexbox.centerAlignItemsValue)))(function () {
                                                return CSS_Flexbox.justifyContent(CSS_Common.center(CSS_Flexbox.centerJustifyContentValue));
                                            });
                                        });
                                    });
                                })))(function () {
                                    return Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Stylesheet.select(CSS_String.fromString(CSS_Selector.isStringSelector)("#inner-header"))(CSS_Geometry.maxWidth(CSS_Size.pct(66.6))))(function () {
                                        return Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Stylesheet.select(CSS_String.fromString(CSS_Selector.isStringSelector)("#continue"))(Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Display.position(CSS_Display.absolute))(function () {
                                            return CSS_Geometry.top(CSS_Size.pct(95.0));
                                        })))(function () {
                                            return Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Stylesheet.select(CSS_String.fromString(CSS_Selector.isStringSelector)("#top-header h1"))(Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Font.fontSize(CSS_Size.em(8.0)))(function () {
                                                return Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Geometry.margin(CSS_Size.em(0.0))(CSS_Size.em(0.0))(CSS_Size.em(0.0))(CSS_Size.em(0.0)))(function () {
                                                    return fontStyle("italic");
                                                });
                                            })))(function () {
                                                return Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Stylesheet.select(CSS_String.fromString(CSS_Selector.isStringSelector)("#inner-header"))(Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Geometry.width(CSS_Size.em(80.0)))(function () {
                                                    return Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Display.display(CSS_Display.inlineBlock))(function () {
                                                        return CSS_TextAlign.textAlign(CSS_TextAlign.leftTextAlign);
                                                    });
                                                })))(function () {
                                                    return Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Stylesheet.select(CSS_String.fromString(CSS_Selector.isStringSelector)("#logo"))(CSS_Geometry.width(CSS_Size.em(25.0))))(function () {
                                                        return CSS_Stylesheet.select(CSS_String.fromString(CSS_Selector.isStringSelector)("#pagey"))(Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Border.borderLeft(CSS_Border.solid)(CSS_Size.em(3.0))(Color_Scheme_X11.red))(function () {
                                                            return Control_Bind.discard(Control_Bind.discardUnit)(CSS_Stylesheet.bindStyleM)(CSS_Background.backgroundColor(Color.white))(function () {
                                                                return CSS_Geometry.width(CSS_Size.pct(50.0));
                                                            });
                                                        }));
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
module.exports = {
    also: also, 
    css: css, 
    fontStyle: fontStyle, 
    globalNav: globalNav, 
    navLinks: navLinks
};
