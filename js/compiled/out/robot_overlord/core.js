// Compiled by ClojureScript 1.7.122 {}
goog.provide('robot_overlord.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('om.core');
goog.require('om.dom');
cljs.core.enable_console_print_BANG_.call(null);
/**
 * Start the render cycle
 */
robot_overlord.core.start_cycle = (function robot_overlord$core$start_cycle(owner){
return om.core.refresh_BANG_.call(null,owner);
});
/**
 * Set visibility state of some element to true
 */
robot_overlord.core.make_visible_BANG_ = (function robot_overlord$core$make_visible_BANG_(cursor,visibility_key){
return om.core.update_BANG_.call(null,cursor,visibility_key,true);
});
/**
 * Correct duration to make whole sequence last the specified number of milliseconds
 */
robot_overlord.core.in_duration = (function robot_overlord$core$in_duration(duration,count,f){
var delay = Math.floor((duration / count));
return setTimeout(f,delay);
});
/**
 * Move the text zipper one iteration forward
 */
robot_overlord.core.zip_step_BANG_ = (function robot_overlord$core$zip_step_BANG_(duration,cursor,current,target){
return robot_overlord.core.in_duration.call(null,duration,cljs.core.count.call(null,[cljs.core.str(current),cljs.core.str(target)].join('')),(function (){
om.core.update_BANG_.call(null,cursor,new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str(current),cljs.core.str(cljs.core.get.call(null,target,(0)))].join(''));

return om.core.update_BANG_.call(null,cursor,new cljs.core.Keyword(null,"remain","remain",1399477086),cljs.core.subs.call(null,target,(1)));
}));
});
/**
 * Wait a period of time before setting the state to printable
 */
robot_overlord.core.delay_start_print_BANG_ = (function robot_overlord$core$delay_start_print_BANG_(cursor,delay,key){
return setTimeout((function (){
return om.core.update_BANG_.call(null,cursor,key,true);
}),delay);
});
/**
 * Run the state
 */
robot_overlord.core.state__GT_state_BANG_ = (function robot_overlord$core$state__GT_state_BANG_(cursor,printable,current,target,init_delay,duration){
if(cljs.core.not.call(null,printable)){
return robot_overlord.core.delay_start_print_BANG_.call(null,cursor,init_delay,new cljs.core.Keyword(null,"printable","printable",-928999004));
} else {
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,target))){
return robot_overlord.core.make_visible_BANG_.call(null,cursor,new cljs.core.Keyword(null,"subhead-visible","subhead-visible",-1877644474));
} else {
return robot_overlord.core.zip_step_BANG_.call(null,duration,cursor,current,target);

}
}
});
/**
 * Convert string to a zipper representation (for state)
 */
robot_overlord.core.string__GT_printable = (function robot_overlord$core$string__GT_printable(p__20120){
var vec__20122 = p__20120;
var head = cljs.core.nth.call(null,vec__20122,(0),null);
var tail = cljs.core.nthnext.call(null,vec__20122,(1));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),head,new cljs.core.Keyword(null,"remain","remain",1399477086),cljs.core.apply.call(null,cljs.core.str,tail),new cljs.core.Keyword(null,"printable","printable",-928999004),false], null);
});
if(typeof robot_overlord.core.app_state !== 'undefined'){
} else {
robot_overlord.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"logotype","logotype",-1561167237),robot_overlord.core.string__GT_printable.call(null,"Robot Overlord"),new cljs.core.Keyword(null,"contact","contact",609093372),robot_overlord.core.string__GT_printable.call(null,"Want to know more? Drop us a line!"),new cljs.core.Keyword(null,"who-we-are","who-we-are",-47925433),robot_overlord.core.string__GT_printable.call(null,"Meet Our Minions"),new cljs.core.Keyword(null,"what-we-do","what-we-do",351156968),robot_overlord.core.string__GT_printable.call(null,"Robot Overlord is a holistic tech product & consultancy firm, focusing on leading-edge technologies, data science, and AI, to create joyful experiences")], null));
}
/**
 * Dropcap first letter of a sentence
 */
robot_overlord.core.dropcap_sentence = (function robot_overlord$core$dropcap_sentence(p__20123){
var vec__20125 = p__20123;
var first = cljs.core.nth.call(null,vec__20125,(0),null);
var rest = cljs.core.nthnext.call(null,vec__20125,(1));
var text = vec__20125;
return React.DOM.span(null,React.DOM.span({"className": "capital drop"},first),rest);
});
/**
 * Text with a blinking cursor
 */
robot_overlord.core.oldschool = (function robot_overlord$core$oldschool(var_args){
var args__17385__auto__ = [];
var len__17378__auto___20132 = arguments.length;
var i__17379__auto___20133 = (0);
while(true){
if((i__17379__auto___20133 < len__17378__auto___20132)){
args__17385__auto__.push((arguments[i__17379__auto___20133]));

var G__20134 = (i__17379__auto___20133 + (1));
i__17379__auto___20133 = G__20134;
continue;
} else {
}
break;
}

var argseq__17386__auto__ = ((((1) < args__17385__auto__.length))?(new cljs.core.IndexedSeq(args__17385__auto__.slice((1)),(0))):null);
return robot_overlord.core.oldschool.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17386__auto__);
});

robot_overlord.core.oldschool.cljs$core$IFn$_invoke$arity$variadic = (function (text,p__20128){
var vec__20129 = p__20128;
var map__20130 = cljs.core.nth.call(null,vec__20129,(0),null);
var map__20130__$1 = ((((!((map__20130 == null)))?((((map__20130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20130):map__20130);
var dropcap = cljs.core.get.call(null,map__20130__$1,new cljs.core.Keyword(null,"dropcap","dropcap",-625456519));
return React.DOM.span(null,(cljs.core.truth_(dropcap)?robot_overlord.core.dropcap_sentence.call(null,text):text),React.DOM.span({"className": "blink"}));
});

robot_overlord.core.oldschool.cljs$lang$maxFixedArity = (1);

robot_overlord.core.oldschool.cljs$lang$applyTo = (function (seq20126){
var G__20127 = cljs.core.first.call(null,seq20126);
var seq20126__$1 = cljs.core.next.call(null,seq20126);
return robot_overlord.core.oldschool.cljs$core$IFn$_invoke$arity$variadic(G__20127,seq20126__$1);
});
/**
 * Scanline-style titles
 */
robot_overlord.core.scan_title = (function robot_overlord$core$scan_title(title){
return React.DOM.h1(null,React.DOM.span({"className": "scan text"}),robot_overlord.core.oldschool.call(null,title));
});
om.core.root.call(null,(function (p__20135,owner){
var map__20136 = p__20135;
var map__20136__$1 = ((((!((map__20136 == null)))?((((map__20136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20136):map__20136);
var logotype = cljs.core.get.call(null,map__20136__$1,new cljs.core.Keyword(null,"logotype","logotype",-1561167237));
var map__20138 = logotype;
var map__20138__$1 = ((((!((map__20138 == null)))?((((map__20138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20138):map__20138);
var text = cljs.core.get.call(null,map__20138__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var remain = cljs.core.get.call(null,map__20138__$1,new cljs.core.Keyword(null,"remain","remain",1399477086));
var subhead_visible = cljs.core.get.call(null,map__20138__$1,new cljs.core.Keyword(null,"subhead-visible","subhead-visible",-1877644474));
var printable = cljs.core.get.call(null,map__20138__$1,new cljs.core.Keyword(null,"printable","printable",-928999004));
if(typeof robot_overlord.core.t_robot_overlord$core20140 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDidUpdate}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
robot_overlord.core.t_robot_overlord$core20140 = (function (p__20135,owner,map__20136,logotype,map__20138,text,remain,subhead_visible,printable,meta20141){
this.p__20135 = p__20135;
this.owner = owner;
this.map__20136 = map__20136;
this.logotype = logotype;
this.map__20138 = map__20138;
this.text = text;
this.remain = remain;
this.subhead_visible = subhead_visible;
this.printable = printable;
this.meta20141 = meta20141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
robot_overlord.core.t_robot_overlord$core20140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20138,map__20138__$1,text,remain,subhead_visible,printable,map__20136,map__20136__$1,logotype){
return (function (_20142,meta20141__$1){
var self__ = this;
var _20142__$1 = this;
return (new robot_overlord.core.t_robot_overlord$core20140(self__.p__20135,self__.owner,self__.map__20136,self__.logotype,self__.map__20138,self__.text,self__.remain,self__.subhead_visible,self__.printable,meta20141__$1));
});})(map__20138,map__20138__$1,text,remain,subhead_visible,printable,map__20136,map__20136__$1,logotype))
;

robot_overlord.core.t_robot_overlord$core20140.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20138,map__20138__$1,text,remain,subhead_visible,printable,map__20136,map__20136__$1,logotype){
return (function (_20142){
var self__ = this;
var _20142__$1 = this;
return self__.meta20141;
});})(map__20138,map__20138__$1,text,remain,subhead_visible,printable,map__20136,map__20136__$1,logotype))
;

robot_overlord.core.t_robot_overlord$core20140.prototype.om$core$IDidMount$ = true;

robot_overlord.core.t_robot_overlord$core20140.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__20138,map__20138__$1,text,remain,subhead_visible,printable,map__20136,map__20136__$1,logotype){
return (function (_){
var self__ = this;
var ___$1 = this;
return robot_overlord.core.start_cycle.call(null,self__.owner);
});})(map__20138,map__20138__$1,text,remain,subhead_visible,printable,map__20136,map__20136__$1,logotype))
;

robot_overlord.core.t_robot_overlord$core20140.prototype.om$core$IDidUpdate$ = true;

robot_overlord.core.t_robot_overlord$core20140.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__20138,map__20138__$1,text,remain,subhead_visible,printable,map__20136,map__20136__$1,logotype){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return robot_overlord.core.state__GT_state_BANG_.call(null,self__.logotype,self__.printable,self__.text,self__.remain,(1500),(1500));
});})(map__20138,map__20138__$1,text,remain,subhead_visible,printable,map__20136,map__20136__$1,logotype))
;

robot_overlord.core.t_robot_overlord$core20140.prototype.om$core$IRender$ = true;

robot_overlord.core.t_robot_overlord$core20140.prototype.om$core$IRender$render$arity$1 = ((function (map__20138,map__20138__$1,text,remain,subhead_visible,printable,map__20136,map__20136__$1,logotype){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,React.DOM.h1(null,robot_overlord.core.oldschool.call(null,self__.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dropcap","dropcap",-625456519),true], null))),React.DOM.h2({"className": [cljs.core.str("fadeable "),cljs.core.str((cljs.core.truth_(self__.subhead_visible)?"visible":"invisible"))].join('')},"Computing with ",React.DOM.em(null,"humanity")));
});})(map__20138,map__20138__$1,text,remain,subhead_visible,printable,map__20136,map__20136__$1,logotype))
;

robot_overlord.core.t_robot_overlord$core20140.getBasis = ((function (map__20138,map__20138__$1,text,remain,subhead_visible,printable,map__20136,map__20136__$1,logotype){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__20135","p__20135",-1297182998,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__20136","map__20136",1572901717,null),new cljs.core.Symbol(null,"logotype","logotype",79364290,null),new cljs.core.Symbol(null,"map__20138","map__20138",1367212865,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"remain","remain",-1254958683,null),new cljs.core.Symbol(null,"subhead-visible","subhead-visible",-237112947,null),new cljs.core.Symbol(null,"printable","printable",711532523,null),new cljs.core.Symbol(null,"meta20141","meta20141",1939204942,null)], null);
});})(map__20138,map__20138__$1,text,remain,subhead_visible,printable,map__20136,map__20136__$1,logotype))
;

robot_overlord.core.t_robot_overlord$core20140.cljs$lang$type = true;

robot_overlord.core.t_robot_overlord$core20140.cljs$lang$ctorStr = "robot-overlord.core/t_robot_overlord$core20140";

robot_overlord.core.t_robot_overlord$core20140.cljs$lang$ctorPrWriter = ((function (map__20138,map__20138__$1,text,remain,subhead_visible,printable,map__20136,map__20136__$1,logotype){
return (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"robot-overlord.core/t_robot_overlord$core20140");
});})(map__20138,map__20138__$1,text,remain,subhead_visible,printable,map__20136,map__20136__$1,logotype))
;

robot_overlord.core.__GT_t_robot_overlord$core20140 = ((function (map__20138,map__20138__$1,text,remain,subhead_visible,printable,map__20136,map__20136__$1,logotype){
return (function robot_overlord$core$__GT_t_robot_overlord$core20140(p__20135__$1,owner__$1,map__20136__$2,logotype__$1,map__20138__$2,text__$1,remain__$1,subhead_visible__$1,printable__$1,meta20141){
return (new robot_overlord.core.t_robot_overlord$core20140(p__20135__$1,owner__$1,map__20136__$2,logotype__$1,map__20138__$2,text__$1,remain__$1,subhead_visible__$1,printable__$1,meta20141));
});})(map__20138,map__20138__$1,text,remain,subhead_visible,printable,map__20136,map__20136__$1,logotype))
;

}

return (new robot_overlord.core.t_robot_overlord$core20140(p__20135,owner,map__20136__$1,logotype,map__20138__$1,text,remain,subhead_visible,printable,cljs.core.PersistentArrayMap.EMPTY));
}),robot_overlord.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("logotype-app")], null));
om.core.root.call(null,(function (p__20143,owner){
var map__20144 = p__20143;
var map__20144__$1 = ((((!((map__20144 == null)))?((((map__20144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20144):map__20144);
var what_we_do = cljs.core.get.call(null,map__20144__$1,new cljs.core.Keyword(null,"what-we-do","what-we-do",351156968));
var map__20146 = what_we_do;
var map__20146__$1 = ((((!((map__20146 == null)))?((((map__20146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20146):map__20146);
var text = cljs.core.get.call(null,map__20146__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var remain = cljs.core.get.call(null,map__20146__$1,new cljs.core.Keyword(null,"remain","remain",1399477086));
var printable = cljs.core.get.call(null,map__20146__$1,new cljs.core.Keyword(null,"printable","printable",-928999004));
if(typeof robot_overlord.core.t_robot_overlord$core20148 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDidUpdate}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
robot_overlord.core.t_robot_overlord$core20148 = (function (p__20143,owner,map__20144,what_we_do,map__20146,text,remain,printable,meta20149){
this.p__20143 = p__20143;
this.owner = owner;
this.map__20144 = map__20144;
this.what_we_do = what_we_do;
this.map__20146 = map__20146;
this.text = text;
this.remain = remain;
this.printable = printable;
this.meta20149 = meta20149;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
robot_overlord.core.t_robot_overlord$core20148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20146,map__20146__$1,text,remain,printable,map__20144,map__20144__$1,what_we_do){
return (function (_20150,meta20149__$1){
var self__ = this;
var _20150__$1 = this;
return (new robot_overlord.core.t_robot_overlord$core20148(self__.p__20143,self__.owner,self__.map__20144,self__.what_we_do,self__.map__20146,self__.text,self__.remain,self__.printable,meta20149__$1));
});})(map__20146,map__20146__$1,text,remain,printable,map__20144,map__20144__$1,what_we_do))
;

robot_overlord.core.t_robot_overlord$core20148.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20146,map__20146__$1,text,remain,printable,map__20144,map__20144__$1,what_we_do){
return (function (_20150){
var self__ = this;
var _20150__$1 = this;
return self__.meta20149;
});})(map__20146,map__20146__$1,text,remain,printable,map__20144,map__20144__$1,what_we_do))
;

robot_overlord.core.t_robot_overlord$core20148.prototype.om$core$IDidMount$ = true;

robot_overlord.core.t_robot_overlord$core20148.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__20146,map__20146__$1,text,remain,printable,map__20144,map__20144__$1,what_we_do){
return (function (_){
var self__ = this;
var ___$1 = this;
return robot_overlord.core.start_cycle.call(null,self__.owner);
});})(map__20146,map__20146__$1,text,remain,printable,map__20144,map__20144__$1,what_we_do))
;

robot_overlord.core.t_robot_overlord$core20148.prototype.om$core$IDidUpdate$ = true;

robot_overlord.core.t_robot_overlord$core20148.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__20146,map__20146__$1,text,remain,printable,map__20144,map__20144__$1,what_we_do){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return robot_overlord.core.state__GT_state_BANG_.call(null,self__.what_we_do,self__.printable,self__.text,self__.remain,(2000),(1500));
});})(map__20146,map__20146__$1,text,remain,printable,map__20144,map__20144__$1,what_we_do))
;

robot_overlord.core.t_robot_overlord$core20148.prototype.om$core$IRender$ = true;

robot_overlord.core.t_robot_overlord$core20148.prototype.om$core$IRender$render$arity$1 = ((function (map__20146,map__20146__$1,text,remain,printable,map__20144,map__20144__$1,what_we_do){
return (function (_){
var self__ = this;
var ___$1 = this;
return robot_overlord.core.scan_title.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.what_we_do));
});})(map__20146,map__20146__$1,text,remain,printable,map__20144,map__20144__$1,what_we_do))
;

robot_overlord.core.t_robot_overlord$core20148.getBasis = ((function (map__20146,map__20146__$1,text,remain,printable,map__20144,map__20144__$1,what_we_do){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__20143","p__20143",1557287384,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__20144","map__20144",1908241895,null),new cljs.core.Symbol(null,"what-we-do","what-we-do",1991688495,null),new cljs.core.Symbol(null,"map__20146","map__20146",1713862513,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"remain","remain",-1254958683,null),new cljs.core.Symbol(null,"printable","printable",711532523,null),new cljs.core.Symbol(null,"meta20149","meta20149",-1880503251,null)], null);
});})(map__20146,map__20146__$1,text,remain,printable,map__20144,map__20144__$1,what_we_do))
;

robot_overlord.core.t_robot_overlord$core20148.cljs$lang$type = true;

robot_overlord.core.t_robot_overlord$core20148.cljs$lang$ctorStr = "robot-overlord.core/t_robot_overlord$core20148";

robot_overlord.core.t_robot_overlord$core20148.cljs$lang$ctorPrWriter = ((function (map__20146,map__20146__$1,text,remain,printable,map__20144,map__20144__$1,what_we_do){
return (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"robot-overlord.core/t_robot_overlord$core20148");
});})(map__20146,map__20146__$1,text,remain,printable,map__20144,map__20144__$1,what_we_do))
;

robot_overlord.core.__GT_t_robot_overlord$core20148 = ((function (map__20146,map__20146__$1,text,remain,printable,map__20144,map__20144__$1,what_we_do){
return (function robot_overlord$core$__GT_t_robot_overlord$core20148(p__20143__$1,owner__$1,map__20144__$2,what_we_do__$1,map__20146__$2,text__$1,remain__$1,printable__$1,meta20149){
return (new robot_overlord.core.t_robot_overlord$core20148(p__20143__$1,owner__$1,map__20144__$2,what_we_do__$1,map__20146__$2,text__$1,remain__$1,printable__$1,meta20149));
});})(map__20146,map__20146__$1,text,remain,printable,map__20144,map__20144__$1,what_we_do))
;

}

return (new robot_overlord.core.t_robot_overlord$core20148(p__20143,owner,map__20144__$1,what_we_do,map__20146__$1,text,remain,printable,cljs.core.PersistentArrayMap.EMPTY));
}),robot_overlord.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("what-we-do-app")], null));
om.core.root.call(null,(function (p__20151,owner){
var map__20152 = p__20151;
var map__20152__$1 = ((((!((map__20152 == null)))?((((map__20152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20152):map__20152);
var who_we_are = cljs.core.get.call(null,map__20152__$1,new cljs.core.Keyword(null,"who-we-are","who-we-are",-47925433));
var map__20154 = who_we_are;
var map__20154__$1 = ((((!((map__20154 == null)))?((((map__20154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20154):map__20154);
var text = cljs.core.get.call(null,map__20154__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var remain = cljs.core.get.call(null,map__20154__$1,new cljs.core.Keyword(null,"remain","remain",1399477086));
var printable = cljs.core.get.call(null,map__20154__$1,new cljs.core.Keyword(null,"printable","printable",-928999004));
if(typeof robot_overlord.core.t_robot_overlord$core20156 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDidUpdate}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
robot_overlord.core.t_robot_overlord$core20156 = (function (p__20151,owner,map__20152,who_we_are,map__20154,text,remain,printable,meta20157){
this.p__20151 = p__20151;
this.owner = owner;
this.map__20152 = map__20152;
this.who_we_are = who_we_are;
this.map__20154 = map__20154;
this.text = text;
this.remain = remain;
this.printable = printable;
this.meta20157 = meta20157;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
robot_overlord.core.t_robot_overlord$core20156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20154,map__20154__$1,text,remain,printable,map__20152,map__20152__$1,who_we_are){
return (function (_20158,meta20157__$1){
var self__ = this;
var _20158__$1 = this;
return (new robot_overlord.core.t_robot_overlord$core20156(self__.p__20151,self__.owner,self__.map__20152,self__.who_we_are,self__.map__20154,self__.text,self__.remain,self__.printable,meta20157__$1));
});})(map__20154,map__20154__$1,text,remain,printable,map__20152,map__20152__$1,who_we_are))
;

robot_overlord.core.t_robot_overlord$core20156.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20154,map__20154__$1,text,remain,printable,map__20152,map__20152__$1,who_we_are){
return (function (_20158){
var self__ = this;
var _20158__$1 = this;
return self__.meta20157;
});})(map__20154,map__20154__$1,text,remain,printable,map__20152,map__20152__$1,who_we_are))
;

robot_overlord.core.t_robot_overlord$core20156.prototype.om$core$IDidMount$ = true;

robot_overlord.core.t_robot_overlord$core20156.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__20154,map__20154__$1,text,remain,printable,map__20152,map__20152__$1,who_we_are){
return (function (_){
var self__ = this;
var ___$1 = this;
return robot_overlord.core.start_cycle.call(null,self__.owner);
});})(map__20154,map__20154__$1,text,remain,printable,map__20152,map__20152__$1,who_we_are))
;

robot_overlord.core.t_robot_overlord$core20156.prototype.om$core$IDidUpdate$ = true;

robot_overlord.core.t_robot_overlord$core20156.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__20154,map__20154__$1,text,remain,printable,map__20152,map__20152__$1,who_we_are){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return robot_overlord.core.state__GT_state_BANG_.call(null,self__.who_we_are,self__.printable,self__.text,self__.remain,(2000),(1500));
});})(map__20154,map__20154__$1,text,remain,printable,map__20152,map__20152__$1,who_we_are))
;

robot_overlord.core.t_robot_overlord$core20156.prototype.om$core$IRender$ = true;

robot_overlord.core.t_robot_overlord$core20156.prototype.om$core$IRender$render$arity$1 = ((function (map__20154,map__20154__$1,text,remain,printable,map__20152,map__20152__$1,who_we_are){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.h1(null,robot_overlord.core.oldschool.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.who_we_are)));
});})(map__20154,map__20154__$1,text,remain,printable,map__20152,map__20152__$1,who_we_are))
;

robot_overlord.core.t_robot_overlord$core20156.getBasis = ((function (map__20154,map__20154__$1,text,remain,printable,map__20152,map__20152__$1,who_we_are){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__20151","p__20151",-2018542943,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__20152","map__20152",423451618,null),new cljs.core.Symbol(null,"who-we-are","who-we-are",1592606094,null),new cljs.core.Symbol(null,"map__20154","map__20154",-1710753996,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"remain","remain",-1254958683,null),new cljs.core.Symbol(null,"printable","printable",711532523,null),new cljs.core.Symbol(null,"meta20157","meta20157",1293796875,null)], null);
});})(map__20154,map__20154__$1,text,remain,printable,map__20152,map__20152__$1,who_we_are))
;

robot_overlord.core.t_robot_overlord$core20156.cljs$lang$type = true;

robot_overlord.core.t_robot_overlord$core20156.cljs$lang$ctorStr = "robot-overlord.core/t_robot_overlord$core20156";

robot_overlord.core.t_robot_overlord$core20156.cljs$lang$ctorPrWriter = ((function (map__20154,map__20154__$1,text,remain,printable,map__20152,map__20152__$1,who_we_are){
return (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"robot-overlord.core/t_robot_overlord$core20156");
});})(map__20154,map__20154__$1,text,remain,printable,map__20152,map__20152__$1,who_we_are))
;

robot_overlord.core.__GT_t_robot_overlord$core20156 = ((function (map__20154,map__20154__$1,text,remain,printable,map__20152,map__20152__$1,who_we_are){
return (function robot_overlord$core$__GT_t_robot_overlord$core20156(p__20151__$1,owner__$1,map__20152__$2,who_we_are__$1,map__20154__$2,text__$1,remain__$1,printable__$1,meta20157){
return (new robot_overlord.core.t_robot_overlord$core20156(p__20151__$1,owner__$1,map__20152__$2,who_we_are__$1,map__20154__$2,text__$1,remain__$1,printable__$1,meta20157));
});})(map__20154,map__20154__$1,text,remain,printable,map__20152,map__20152__$1,who_we_are))
;

}

return (new robot_overlord.core.t_robot_overlord$core20156(p__20151,owner,map__20152__$1,who_we_are,map__20154__$1,text,remain,printable,cljs.core.PersistentArrayMap.EMPTY));
}),robot_overlord.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("who-we-are-app")], null));
om.core.root.call(null,(function (p__20159,owner){
var map__20160 = p__20159;
var map__20160__$1 = ((((!((map__20160 == null)))?((((map__20160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20160):map__20160);
var contact = cljs.core.get.call(null,map__20160__$1,new cljs.core.Keyword(null,"contact","contact",609093372));
var map__20162 = contact;
var map__20162__$1 = ((((!((map__20162 == null)))?((((map__20162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20162):map__20162);
var text = cljs.core.get.call(null,map__20162__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var remain = cljs.core.get.call(null,map__20162__$1,new cljs.core.Keyword(null,"remain","remain",1399477086));
var printable = cljs.core.get.call(null,map__20162__$1,new cljs.core.Keyword(null,"printable","printable",-928999004));
if(typeof robot_overlord.core.t_robot_overlord$core20164 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDidUpdate}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
robot_overlord.core.t_robot_overlord$core20164 = (function (p__20159,owner,map__20160,contact,map__20162,text,remain,printable,meta20165){
this.p__20159 = p__20159;
this.owner = owner;
this.map__20160 = map__20160;
this.contact = contact;
this.map__20162 = map__20162;
this.text = text;
this.remain = remain;
this.printable = printable;
this.meta20165 = meta20165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
robot_overlord.core.t_robot_overlord$core20164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20162,map__20162__$1,text,remain,printable,map__20160,map__20160__$1,contact){
return (function (_20166,meta20165__$1){
var self__ = this;
var _20166__$1 = this;
return (new robot_overlord.core.t_robot_overlord$core20164(self__.p__20159,self__.owner,self__.map__20160,self__.contact,self__.map__20162,self__.text,self__.remain,self__.printable,meta20165__$1));
});})(map__20162,map__20162__$1,text,remain,printable,map__20160,map__20160__$1,contact))
;

robot_overlord.core.t_robot_overlord$core20164.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20162,map__20162__$1,text,remain,printable,map__20160,map__20160__$1,contact){
return (function (_20166){
var self__ = this;
var _20166__$1 = this;
return self__.meta20165;
});})(map__20162,map__20162__$1,text,remain,printable,map__20160,map__20160__$1,contact))
;

robot_overlord.core.t_robot_overlord$core20164.prototype.om$core$IDidMount$ = true;

robot_overlord.core.t_robot_overlord$core20164.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__20162,map__20162__$1,text,remain,printable,map__20160,map__20160__$1,contact){
return (function (_){
var self__ = this;
var ___$1 = this;
return robot_overlord.core.start_cycle.call(null,self__.owner);
});})(map__20162,map__20162__$1,text,remain,printable,map__20160,map__20160__$1,contact))
;

robot_overlord.core.t_robot_overlord$core20164.prototype.om$core$IDidUpdate$ = true;

robot_overlord.core.t_robot_overlord$core20164.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__20162,map__20162__$1,text,remain,printable,map__20160,map__20160__$1,contact){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return robot_overlord.core.state__GT_state_BANG_.call(null,self__.contact,self__.printable,self__.text,self__.remain,(2000),(1000));
});})(map__20162,map__20162__$1,text,remain,printable,map__20160,map__20160__$1,contact))
;

robot_overlord.core.t_robot_overlord$core20164.prototype.om$core$IRender$ = true;

robot_overlord.core.t_robot_overlord$core20164.prototype.om$core$IRender$render$arity$1 = ((function (map__20162,map__20162__$1,text,remain,printable,map__20160,map__20160__$1,contact){
return (function (_){
var self__ = this;
var ___$1 = this;
return robot_overlord.core.scan_title.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.contact));
});})(map__20162,map__20162__$1,text,remain,printable,map__20160,map__20160__$1,contact))
;

robot_overlord.core.t_robot_overlord$core20164.getBasis = ((function (map__20162,map__20162__$1,text,remain,printable,map__20160,map__20160__$1,contact){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__20159","p__20159",380145139,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__20160","map__20160",-827903411,null),new cljs.core.Symbol(null,"contact","contact",-2045342397,null),new cljs.core.Symbol(null,"map__20162","map__20162",955092732,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"remain","remain",-1254958683,null),new cljs.core.Symbol(null,"printable","printable",711532523,null),new cljs.core.Symbol(null,"meta20165","meta20165",-1640713013,null)], null);
});})(map__20162,map__20162__$1,text,remain,printable,map__20160,map__20160__$1,contact))
;

robot_overlord.core.t_robot_overlord$core20164.cljs$lang$type = true;

robot_overlord.core.t_robot_overlord$core20164.cljs$lang$ctorStr = "robot-overlord.core/t_robot_overlord$core20164";

robot_overlord.core.t_robot_overlord$core20164.cljs$lang$ctorPrWriter = ((function (map__20162,map__20162__$1,text,remain,printable,map__20160,map__20160__$1,contact){
return (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"robot-overlord.core/t_robot_overlord$core20164");
});})(map__20162,map__20162__$1,text,remain,printable,map__20160,map__20160__$1,contact))
;

robot_overlord.core.__GT_t_robot_overlord$core20164 = ((function (map__20162,map__20162__$1,text,remain,printable,map__20160,map__20160__$1,contact){
return (function robot_overlord$core$__GT_t_robot_overlord$core20164(p__20159__$1,owner__$1,map__20160__$2,contact__$1,map__20162__$2,text__$1,remain__$1,printable__$1,meta20165){
return (new robot_overlord.core.t_robot_overlord$core20164(p__20159__$1,owner__$1,map__20160__$2,contact__$1,map__20162__$2,text__$1,remain__$1,printable__$1,meta20165));
});})(map__20162,map__20162__$1,text,remain,printable,map__20160,map__20160__$1,contact))
;

}

return (new robot_overlord.core.t_robot_overlord$core20164(p__20159,owner,map__20160__$1,contact,map__20162__$1,text,remain,printable,cljs.core.PersistentArrayMap.EMPTY));
}),robot_overlord.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("contact-app")], null));

//# sourceMappingURL=core.js.map?rel=1444406227815