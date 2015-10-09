// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
if(typeof figwheel.client.autoload !== 'undefined'){
} else {
figwheel.client.autoload = cljs.core.atom.call(null,true);
}
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
return cljs.core.swap_BANG_.call(null,figwheel.client.autoload,cljs.core.not);
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25885__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25885 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25886__i = 0, G__25886__a = new Array(arguments.length -  0);
while (G__25886__i < G__25886__a.length) {G__25886__a[G__25886__i] = arguments[G__25886__i + 0]; ++G__25886__i;}
  args = new cljs.core.IndexedSeq(G__25886__a,0);
} 
return G__25885__delegate.call(this,args);};
G__25885.cljs$lang$maxFixedArity = 0;
G__25885.cljs$lang$applyTo = (function (arglist__25887){
var args = cljs.core.seq(arglist__25887);
return G__25885__delegate(args);
});
G__25885.cljs$core$IFn$_invoke$arity$variadic = G__25885__delegate;
return G__25885;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25888){
var map__25891 = p__25888;
var map__25891__$1 = ((((!((map__25891 == null)))?((((map__25891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25891):map__25891);
var message = cljs.core.get.call(null,map__25891__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__25891__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16320__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16320__auto__)){
return or__16320__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16308__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16308__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16308__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20605__auto___26039 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20605__auto___26039,ch){
return (function (){
var f__20606__auto__ = (function (){var switch__20540__auto__ = ((function (c__20605__auto___26039,ch){
return (function (state_26009){
var state_val_26010 = (state_26009[(1)]);
if((state_val_26010 === (7))){
var inst_26005 = (state_26009[(2)]);
var state_26009__$1 = state_26009;
var statearr_26011_26040 = state_26009__$1;
(statearr_26011_26040[(2)] = inst_26005);

(statearr_26011_26040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (1))){
var state_26009__$1 = state_26009;
var statearr_26012_26041 = state_26009__$1;
(statearr_26012_26041[(2)] = null);

(statearr_26012_26041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (4))){
var inst_25968 = (state_26009[(7)]);
var inst_25968__$1 = (state_26009[(2)]);
var state_26009__$1 = (function (){var statearr_26013 = state_26009;
(statearr_26013[(7)] = inst_25968__$1);

return statearr_26013;
})();
if(cljs.core.truth_(inst_25968__$1)){
var statearr_26014_26042 = state_26009__$1;
(statearr_26014_26042[(1)] = (5));

} else {
var statearr_26015_26043 = state_26009__$1;
(statearr_26015_26043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (15))){
var inst_25975 = (state_26009[(8)]);
var inst_25990 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25975);
var inst_25991 = cljs.core.first.call(null,inst_25990);
var inst_25992 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25991);
var inst_25993 = console.warn("Figwheel: Not loading code with warnings - ",inst_25992);
var state_26009__$1 = state_26009;
var statearr_26016_26044 = state_26009__$1;
(statearr_26016_26044[(2)] = inst_25993);

(statearr_26016_26044[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (13))){
var inst_25998 = (state_26009[(2)]);
var state_26009__$1 = state_26009;
var statearr_26017_26045 = state_26009__$1;
(statearr_26017_26045[(2)] = inst_25998);

(statearr_26017_26045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (6))){
var state_26009__$1 = state_26009;
var statearr_26018_26046 = state_26009__$1;
(statearr_26018_26046[(2)] = null);

(statearr_26018_26046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (17))){
var inst_25996 = (state_26009[(2)]);
var state_26009__$1 = state_26009;
var statearr_26019_26047 = state_26009__$1;
(statearr_26019_26047[(2)] = inst_25996);

(statearr_26019_26047[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (3))){
var inst_26007 = (state_26009[(2)]);
var state_26009__$1 = state_26009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26009__$1,inst_26007);
} else {
if((state_val_26010 === (12))){
var inst_25974 = (state_26009[(9)]);
var inst_25988 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25974,opts);
var state_26009__$1 = state_26009;
if(cljs.core.truth_(inst_25988)){
var statearr_26020_26048 = state_26009__$1;
(statearr_26020_26048[(1)] = (15));

} else {
var statearr_26021_26049 = state_26009__$1;
(statearr_26021_26049[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (2))){
var state_26009__$1 = state_26009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26009__$1,(4),ch);
} else {
if((state_val_26010 === (11))){
var inst_25975 = (state_26009[(8)]);
var inst_25980 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25981 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25975);
var inst_25982 = cljs.core.async.timeout.call(null,(1000));
var inst_25983 = [inst_25981,inst_25982];
var inst_25984 = (new cljs.core.PersistentVector(null,2,(5),inst_25980,inst_25983,null));
var state_26009__$1 = state_26009;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26009__$1,(14),inst_25984);
} else {
if((state_val_26010 === (9))){
var state_26009__$1 = state_26009;
var statearr_26022_26050 = state_26009__$1;
(statearr_26022_26050[(2)] = null);

(statearr_26022_26050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (5))){
var inst_25968 = (state_26009[(7)]);
var inst_25970 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25971 = (new cljs.core.PersistentArrayMap(null,2,inst_25970,null));
var inst_25972 = (new cljs.core.PersistentHashSet(null,inst_25971,null));
var inst_25973 = figwheel.client.focus_msgs.call(null,inst_25972,inst_25968);
var inst_25974 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25973);
var inst_25975 = cljs.core.first.call(null,inst_25973);
var inst_25976 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_26009__$1 = (function (){var statearr_26023 = state_26009;
(statearr_26023[(9)] = inst_25974);

(statearr_26023[(8)] = inst_25975);

return statearr_26023;
})();
if(cljs.core.truth_(inst_25976)){
var statearr_26024_26051 = state_26009__$1;
(statearr_26024_26051[(1)] = (8));

} else {
var statearr_26025_26052 = state_26009__$1;
(statearr_26025_26052[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (14))){
var inst_25986 = (state_26009[(2)]);
var state_26009__$1 = state_26009;
var statearr_26026_26053 = state_26009__$1;
(statearr_26026_26053[(2)] = inst_25986);

(statearr_26026_26053[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (16))){
var state_26009__$1 = state_26009;
var statearr_26027_26054 = state_26009__$1;
(statearr_26027_26054[(2)] = null);

(statearr_26027_26054[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (10))){
var inst_26001 = (state_26009[(2)]);
var state_26009__$1 = (function (){var statearr_26028 = state_26009;
(statearr_26028[(10)] = inst_26001);

return statearr_26028;
})();
var statearr_26029_26055 = state_26009__$1;
(statearr_26029_26055[(2)] = null);

(statearr_26029_26055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (8))){
var inst_25974 = (state_26009[(9)]);
var inst_25978 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25974,opts);
var state_26009__$1 = state_26009;
if(cljs.core.truth_(inst_25978)){
var statearr_26030_26056 = state_26009__$1;
(statearr_26030_26056[(1)] = (11));

} else {
var statearr_26031_26057 = state_26009__$1;
(statearr_26031_26057[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20605__auto___26039,ch))
;
return ((function (switch__20540__auto__,c__20605__auto___26039,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20541__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20541__auto____0 = (function (){
var statearr_26035 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26035[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20541__auto__);

(statearr_26035[(1)] = (1));

return statearr_26035;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20541__auto____1 = (function (state_26009){
while(true){
var ret_value__20542__auto__ = (function (){try{while(true){
var result__20543__auto__ = switch__20540__auto__.call(null,state_26009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20543__auto__;
}
break;
}
}catch (e26036){if((e26036 instanceof Object)){
var ex__20544__auto__ = e26036;
var statearr_26037_26058 = state_26009;
(statearr_26037_26058[(5)] = ex__20544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26059 = state_26009;
state_26009 = G__26059;
continue;
} else {
return ret_value__20542__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20541__auto__ = function(state_26009){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20541__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20541__auto____1.call(this,state_26009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20541__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20541__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20541__auto__;
})()
;})(switch__20540__auto__,c__20605__auto___26039,ch))
})();
var state__20607__auto__ = (function (){var statearr_26038 = f__20606__auto__.call(null);
(statearr_26038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20605__auto___26039);

return statearr_26038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20607__auto__);
});})(c__20605__auto___26039,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26060_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26060_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_26067 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26067){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26065 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26066 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26065,_STAR_print_newline_STAR_26066,base_path_26067){
return (function() { 
var G__26068__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26068 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26069__i = 0, G__26069__a = new Array(arguments.length -  0);
while (G__26069__i < G__26069__a.length) {G__26069__a[G__26069__i] = arguments[G__26069__i + 0]; ++G__26069__i;}
  args = new cljs.core.IndexedSeq(G__26069__a,0);
} 
return G__26068__delegate.call(this,args);};
G__26068.cljs$lang$maxFixedArity = 0;
G__26068.cljs$lang$applyTo = (function (arglist__26070){
var args = cljs.core.seq(arglist__26070);
return G__26068__delegate(args);
});
G__26068.cljs$core$IFn$_invoke$arity$variadic = G__26068__delegate;
return G__26068;
})()
;})(_STAR_print_fn_STAR_26065,_STAR_print_newline_STAR_26066,base_path_26067))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26066;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26065;
}}catch (e26064){if((e26064 instanceof Error)){
var e = e26064;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26067], null));
} else {
var e = e26064;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26067))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26071){
var map__26078 = p__26071;
var map__26078__$1 = ((((!((map__26078 == null)))?((((map__26078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26078):map__26078);
var opts = map__26078__$1;
var build_id = cljs.core.get.call(null,map__26078__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26078,map__26078__$1,opts,build_id){
return (function (p__26080){
var vec__26081 = p__26080;
var map__26082 = cljs.core.nth.call(null,vec__26081,(0),null);
var map__26082__$1 = ((((!((map__26082 == null)))?((((map__26082.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26082.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26082):map__26082);
var msg = map__26082__$1;
var msg_name = cljs.core.get.call(null,map__26082__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26081,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26081,map__26082,map__26082__$1,msg,msg_name,_,map__26078,map__26078__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26081,map__26082,map__26082__$1,msg,msg_name,_,map__26078,map__26078__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26078,map__26078__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26088){
var vec__26089 = p__26088;
var map__26090 = cljs.core.nth.call(null,vec__26089,(0),null);
var map__26090__$1 = ((((!((map__26090 == null)))?((((map__26090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26090):map__26090);
var msg = map__26090__$1;
var msg_name = cljs.core.get.call(null,map__26090__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26089,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26092){
var map__26102 = p__26092;
var map__26102__$1 = ((((!((map__26102 == null)))?((((map__26102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26102):map__26102);
var on_compile_warning = cljs.core.get.call(null,map__26102__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26102__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26102,map__26102__$1,on_compile_warning,on_compile_fail){
return (function (p__26104){
var vec__26105 = p__26104;
var map__26106 = cljs.core.nth.call(null,vec__26105,(0),null);
var map__26106__$1 = ((((!((map__26106 == null)))?((((map__26106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26106):map__26106);
var msg = map__26106__$1;
var msg_name = cljs.core.get.call(null,map__26106__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26105,(1));
var pred__26108 = cljs.core._EQ_;
var expr__26109 = msg_name;
if(cljs.core.truth_(pred__26108.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26109))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26108.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26109))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26102,map__26102__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20605__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20605__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20606__auto__ = (function (){var switch__20540__auto__ = ((function (c__20605__auto__,msg_hist,msg_names,msg){
return (function (state_26325){
var state_val_26326 = (state_26325[(1)]);
if((state_val_26326 === (7))){
var inst_26249 = (state_26325[(2)]);
var state_26325__$1 = state_26325;
if(cljs.core.truth_(inst_26249)){
var statearr_26327_26373 = state_26325__$1;
(statearr_26327_26373[(1)] = (8));

} else {
var statearr_26328_26374 = state_26325__$1;
(statearr_26328_26374[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26326 === (20))){
var inst_26319 = (state_26325[(2)]);
var state_26325__$1 = state_26325;
var statearr_26329_26375 = state_26325__$1;
(statearr_26329_26375[(2)] = inst_26319);

(statearr_26329_26375[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26326 === (27))){
var inst_26315 = (state_26325[(2)]);
var state_26325__$1 = state_26325;
var statearr_26330_26376 = state_26325__$1;
(statearr_26330_26376[(2)] = inst_26315);

(statearr_26330_26376[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26326 === (1))){
var inst_26242 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26325__$1 = state_26325;
if(cljs.core.truth_(inst_26242)){
var statearr_26331_26377 = state_26325__$1;
(statearr_26331_26377[(1)] = (2));

} else {
var statearr_26332_26378 = state_26325__$1;
(statearr_26332_26378[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26326 === (24))){
var inst_26317 = (state_26325[(2)]);
var state_26325__$1 = state_26325;
var statearr_26333_26379 = state_26325__$1;
(statearr_26333_26379[(2)] = inst_26317);

(statearr_26333_26379[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26326 === (4))){
var inst_26323 = (state_26325[(2)]);
var state_26325__$1 = state_26325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26325__$1,inst_26323);
} else {
if((state_val_26326 === (15))){
var inst_26321 = (state_26325[(2)]);
var state_26325__$1 = state_26325;
var statearr_26334_26380 = state_26325__$1;
(statearr_26334_26380[(2)] = inst_26321);

(statearr_26334_26380[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26326 === (21))){
var inst_26280 = (state_26325[(2)]);
var state_26325__$1 = state_26325;
var statearr_26335_26381 = state_26325__$1;
(statearr_26335_26381[(2)] = inst_26280);

(statearr_26335_26381[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26326 === (31))){
var inst_26304 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26325__$1 = state_26325;
if(cljs.core.truth_(inst_26304)){
var statearr_26336_26382 = state_26325__$1;
(statearr_26336_26382[(1)] = (34));

} else {
var statearr_26337_26383 = state_26325__$1;
(statearr_26337_26383[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26326 === (32))){
var inst_26313 = (state_26325[(2)]);
var state_26325__$1 = state_26325;
var statearr_26338_26384 = state_26325__$1;
(statearr_26338_26384[(2)] = inst_26313);

(statearr_26338_26384[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26326 === (33))){
var inst_26302 = (state_26325[(2)]);
var state_26325__$1 = state_26325;
var statearr_26339_26385 = state_26325__$1;
(statearr_26339_26385[(2)] = inst_26302);

(statearr_26339_26385[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26326 === (13))){
var inst_26263 = figwheel.client.heads_up.clear.call(null);
var state_26325__$1 = state_26325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26325__$1,(16),inst_26263);
} else {
if((state_val_26326 === (22))){
var inst_26284 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26285 = figwheel.client.heads_up.append_message.call(null,inst_26284);
var state_26325__$1 = state_26325;
var statearr_26340_26386 = state_26325__$1;
(statearr_26340_26386[(2)] = inst_26285);

(statearr_26340_26386[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26326 === (36))){
var inst_26311 = (state_26325[(2)]);
var state_26325__$1 = state_26325;
var statearr_26341_26387 = state_26325__$1;
(statearr_26341_26387[(2)] = inst_26311);

(statearr_26341_26387[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26326 === (29))){
var inst_26295 = (state_26325[(2)]);
var state_26325__$1 = state_26325;
var statearr_26342_26388 = state_26325__$1;
(statearr_26342_26388[(2)] = inst_26295);

(statearr_26342_26388[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26326 === (6))){
var inst_26244 = (state_26325[(7)]);
var state_26325__$1 = state_26325;
var statearr_26343_26389 = state_26325__$1;
(statearr_26343_26389[(2)] = inst_26244);

(statearr_26343_26389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26326 === (28))){
var inst_26291 = (state_26325[(2)]);
var inst_26292 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26293 = figwheel.client.heads_up.display_warning.call(null,inst_26292);
var state_26325__$1 = (function (){var statearr_26344 = state_26325;
(statearr_26344[(8)] = inst_26291);

return statearr_26344;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26325__$1,(29),inst_26293);
} else {
if((state_val_26326 === (25))){
var inst_26289 = figwheel.client.heads_up.clear.call(null);
var state_26325__$1 = state_26325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26325__$1,(28),inst_26289);
} else {
if((state_val_26326 === (34))){
var inst_26306 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26325__$1 = state_26325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26325__$1,(37),inst_26306);
} else {
if((state_val_26326 === (17))){
var inst_26271 = (state_26325[(2)]);
var state_26325__$1 = state_26325;
var statearr_26345_26390 = state_26325__$1;
(statearr_26345_26390[(2)] = inst_26271);

(statearr_26345_26390[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26326 === (3))){
var inst_26261 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26325__$1 = state_26325;
if(cljs.core.truth_(inst_26261)){
var statearr_26346_26391 = state_26325__$1;
(statearr_26346_26391[(1)] = (13));

} else {
var statearr_26347_26392 = state_26325__$1;
(statearr_26347_26392[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26326 === (12))){
var inst_26257 = (state_26325[(2)]);
var state_26325__$1 = state_26325;
var statearr_26348_26393 = state_26325__$1;
(statearr_26348_26393[(2)] = inst_26257);

(statearr_26348_26393[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26326 === (2))){
var inst_26244 = (state_26325[(7)]);
var inst_26244__$1 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_26325__$1 = (function (){var statearr_26349 = state_26325;
(statearr_26349[(7)] = inst_26244__$1);

return statearr_26349;
})();
if(cljs.core.truth_(inst_26244__$1)){
var statearr_26350_26394 = state_26325__$1;
(statearr_26350_26394[(1)] = (5));

} else {
var statearr_26351_26395 = state_26325__$1;
(statearr_26351_26395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26326 === (23))){
var inst_26287 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26325__$1 = state_26325;
if(cljs.core.truth_(inst_26287)){
var statearr_26352_26396 = state_26325__$1;
(statearr_26352_26396[(1)] = (25));

} else {
var statearr_26353_26397 = state_26325__$1;
(statearr_26353_26397[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26326 === (35))){
var state_26325__$1 = state_26325;
var statearr_26354_26398 = state_26325__$1;
(statearr_26354_26398[(2)] = null);

(statearr_26354_26398[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26326 === (19))){
var inst_26282 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26325__$1 = state_26325;
if(cljs.core.truth_(inst_26282)){
var statearr_26355_26399 = state_26325__$1;
(statearr_26355_26399[(1)] = (22));

} else {
var statearr_26356_26400 = state_26325__$1;
(statearr_26356_26400[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26326 === (11))){
var inst_26253 = (state_26325[(2)]);
var state_26325__$1 = state_26325;
var statearr_26357_26401 = state_26325__$1;
(statearr_26357_26401[(2)] = inst_26253);

(statearr_26357_26401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26326 === (9))){
var inst_26255 = figwheel.client.heads_up.clear.call(null);
var state_26325__$1 = state_26325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26325__$1,(12),inst_26255);
} else {
if((state_val_26326 === (5))){
var inst_26246 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26325__$1 = state_26325;
var statearr_26358_26402 = state_26325__$1;
(statearr_26358_26402[(2)] = inst_26246);

(statearr_26358_26402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26326 === (14))){
var inst_26273 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26325__$1 = state_26325;
if(cljs.core.truth_(inst_26273)){
var statearr_26359_26403 = state_26325__$1;
(statearr_26359_26403[(1)] = (18));

} else {
var statearr_26360_26404 = state_26325__$1;
(statearr_26360_26404[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26326 === (26))){
var inst_26297 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26325__$1 = state_26325;
if(cljs.core.truth_(inst_26297)){
var statearr_26361_26405 = state_26325__$1;
(statearr_26361_26405[(1)] = (30));

} else {
var statearr_26362_26406 = state_26325__$1;
(statearr_26362_26406[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26326 === (16))){
var inst_26265 = (state_26325[(2)]);
var inst_26266 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26267 = figwheel.client.format_messages.call(null,inst_26266);
var inst_26268 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26269 = figwheel.client.heads_up.display_error.call(null,inst_26267,inst_26268);
var state_26325__$1 = (function (){var statearr_26363 = state_26325;
(statearr_26363[(9)] = inst_26265);

return statearr_26363;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26325__$1,(17),inst_26269);
} else {
if((state_val_26326 === (30))){
var inst_26299 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26300 = figwheel.client.heads_up.display_warning.call(null,inst_26299);
var state_26325__$1 = state_26325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26325__$1,(33),inst_26300);
} else {
if((state_val_26326 === (10))){
var inst_26259 = (state_26325[(2)]);
var state_26325__$1 = state_26325;
var statearr_26364_26407 = state_26325__$1;
(statearr_26364_26407[(2)] = inst_26259);

(statearr_26364_26407[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26326 === (18))){
var inst_26275 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26276 = figwheel.client.format_messages.call(null,inst_26275);
var inst_26277 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26278 = figwheel.client.heads_up.display_error.call(null,inst_26276,inst_26277);
var state_26325__$1 = state_26325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26325__$1,(21),inst_26278);
} else {
if((state_val_26326 === (37))){
var inst_26308 = (state_26325[(2)]);
var state_26325__$1 = state_26325;
var statearr_26365_26408 = state_26325__$1;
(statearr_26365_26408[(2)] = inst_26308);

(statearr_26365_26408[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26326 === (8))){
var inst_26251 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26325__$1 = state_26325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26325__$1,(11),inst_26251);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20605__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20540__auto__,c__20605__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20541__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20541__auto____0 = (function (){
var statearr_26369 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26369[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20541__auto__);

(statearr_26369[(1)] = (1));

return statearr_26369;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20541__auto____1 = (function (state_26325){
while(true){
var ret_value__20542__auto__ = (function (){try{while(true){
var result__20543__auto__ = switch__20540__auto__.call(null,state_26325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20543__auto__;
}
break;
}
}catch (e26370){if((e26370 instanceof Object)){
var ex__20544__auto__ = e26370;
var statearr_26371_26409 = state_26325;
(statearr_26371_26409[(5)] = ex__20544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26410 = state_26325;
state_26325 = G__26410;
continue;
} else {
return ret_value__20542__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20541__auto__ = function(state_26325){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20541__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20541__auto____1.call(this,state_26325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20541__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20541__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20541__auto__;
})()
;})(switch__20540__auto__,c__20605__auto__,msg_hist,msg_names,msg))
})();
var state__20607__auto__ = (function (){var statearr_26372 = f__20606__auto__.call(null);
(statearr_26372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20605__auto__);

return statearr_26372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20607__auto__);
});})(c__20605__auto__,msg_hist,msg_names,msg))
);

return c__20605__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20605__auto___26473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20605__auto___26473,ch){
return (function (){
var f__20606__auto__ = (function (){var switch__20540__auto__ = ((function (c__20605__auto___26473,ch){
return (function (state_26456){
var state_val_26457 = (state_26456[(1)]);
if((state_val_26457 === (1))){
var state_26456__$1 = state_26456;
var statearr_26458_26474 = state_26456__$1;
(statearr_26458_26474[(2)] = null);

(statearr_26458_26474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (2))){
var state_26456__$1 = state_26456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26456__$1,(4),ch);
} else {
if((state_val_26457 === (3))){
var inst_26454 = (state_26456[(2)]);
var state_26456__$1 = state_26456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26456__$1,inst_26454);
} else {
if((state_val_26457 === (4))){
var inst_26444 = (state_26456[(7)]);
var inst_26444__$1 = (state_26456[(2)]);
var state_26456__$1 = (function (){var statearr_26459 = state_26456;
(statearr_26459[(7)] = inst_26444__$1);

return statearr_26459;
})();
if(cljs.core.truth_(inst_26444__$1)){
var statearr_26460_26475 = state_26456__$1;
(statearr_26460_26475[(1)] = (5));

} else {
var statearr_26461_26476 = state_26456__$1;
(statearr_26461_26476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (5))){
var inst_26444 = (state_26456[(7)]);
var inst_26446 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26444);
var state_26456__$1 = state_26456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26456__$1,(8),inst_26446);
} else {
if((state_val_26457 === (6))){
var state_26456__$1 = state_26456;
var statearr_26462_26477 = state_26456__$1;
(statearr_26462_26477[(2)] = null);

(statearr_26462_26477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (7))){
var inst_26452 = (state_26456[(2)]);
var state_26456__$1 = state_26456;
var statearr_26463_26478 = state_26456__$1;
(statearr_26463_26478[(2)] = inst_26452);

(statearr_26463_26478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (8))){
var inst_26448 = (state_26456[(2)]);
var state_26456__$1 = (function (){var statearr_26464 = state_26456;
(statearr_26464[(8)] = inst_26448);

return statearr_26464;
})();
var statearr_26465_26479 = state_26456__$1;
(statearr_26465_26479[(2)] = null);

(statearr_26465_26479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__20605__auto___26473,ch))
;
return ((function (switch__20540__auto__,c__20605__auto___26473,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20541__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20541__auto____0 = (function (){
var statearr_26469 = [null,null,null,null,null,null,null,null,null];
(statearr_26469[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20541__auto__);

(statearr_26469[(1)] = (1));

return statearr_26469;
});
var figwheel$client$heads_up_plugin_$_state_machine__20541__auto____1 = (function (state_26456){
while(true){
var ret_value__20542__auto__ = (function (){try{while(true){
var result__20543__auto__ = switch__20540__auto__.call(null,state_26456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20543__auto__;
}
break;
}
}catch (e26470){if((e26470 instanceof Object)){
var ex__20544__auto__ = e26470;
var statearr_26471_26480 = state_26456;
(statearr_26471_26480[(5)] = ex__20544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26481 = state_26456;
state_26456 = G__26481;
continue;
} else {
return ret_value__20542__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20541__auto__ = function(state_26456){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20541__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20541__auto____1.call(this,state_26456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20541__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20541__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20541__auto__;
})()
;})(switch__20540__auto__,c__20605__auto___26473,ch))
})();
var state__20607__auto__ = (function (){var statearr_26472 = f__20606__auto__.call(null);
(statearr_26472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20605__auto___26473);

return statearr_26472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20607__auto__);
});})(c__20605__auto___26473,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20605__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20605__auto__){
return (function (){
var f__20606__auto__ = (function (){var switch__20540__auto__ = ((function (c__20605__auto__){
return (function (state_26502){
var state_val_26503 = (state_26502[(1)]);
if((state_val_26503 === (1))){
var inst_26497 = cljs.core.async.timeout.call(null,(3000));
var state_26502__$1 = state_26502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26502__$1,(2),inst_26497);
} else {
if((state_val_26503 === (2))){
var inst_26499 = (state_26502[(2)]);
var inst_26500 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26502__$1 = (function (){var statearr_26504 = state_26502;
(statearr_26504[(7)] = inst_26499);

return statearr_26504;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26502__$1,inst_26500);
} else {
return null;
}
}
});})(c__20605__auto__))
;
return ((function (switch__20540__auto__,c__20605__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20541__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20541__auto____0 = (function (){
var statearr_26508 = [null,null,null,null,null,null,null,null];
(statearr_26508[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20541__auto__);

(statearr_26508[(1)] = (1));

return statearr_26508;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20541__auto____1 = (function (state_26502){
while(true){
var ret_value__20542__auto__ = (function (){try{while(true){
var result__20543__auto__ = switch__20540__auto__.call(null,state_26502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20543__auto__;
}
break;
}
}catch (e26509){if((e26509 instanceof Object)){
var ex__20544__auto__ = e26509;
var statearr_26510_26512 = state_26502;
(statearr_26510_26512[(5)] = ex__20544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26513 = state_26502;
state_26502 = G__26513;
continue;
} else {
return ret_value__20542__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20541__auto__ = function(state_26502){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20541__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20541__auto____1.call(this,state_26502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20541__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20541__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20541__auto__;
})()
;})(switch__20540__auto__,c__20605__auto__))
})();
var state__20607__auto__ = (function (){var statearr_26511 = f__20606__auto__.call(null);
(statearr_26511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20605__auto__);

return statearr_26511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20607__auto__);
});})(c__20605__auto__))
);

return c__20605__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26514){
var map__26521 = p__26514;
var map__26521__$1 = ((((!((map__26521 == null)))?((((map__26521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26521):map__26521);
var ed = map__26521__$1;
var formatted_exception = cljs.core.get.call(null,map__26521__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26521__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26521__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26523_26527 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26524_26528 = null;
var count__26525_26529 = (0);
var i__26526_26530 = (0);
while(true){
if((i__26526_26530 < count__26525_26529)){
var msg_26531 = cljs.core._nth.call(null,chunk__26524_26528,i__26526_26530);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26531);

var G__26532 = seq__26523_26527;
var G__26533 = chunk__26524_26528;
var G__26534 = count__26525_26529;
var G__26535 = (i__26526_26530 + (1));
seq__26523_26527 = G__26532;
chunk__26524_26528 = G__26533;
count__26525_26529 = G__26534;
i__26526_26530 = G__26535;
continue;
} else {
var temp__4425__auto___26536 = cljs.core.seq.call(null,seq__26523_26527);
if(temp__4425__auto___26536){
var seq__26523_26537__$1 = temp__4425__auto___26536;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26523_26537__$1)){
var c__17123__auto___26538 = cljs.core.chunk_first.call(null,seq__26523_26537__$1);
var G__26539 = cljs.core.chunk_rest.call(null,seq__26523_26537__$1);
var G__26540 = c__17123__auto___26538;
var G__26541 = cljs.core.count.call(null,c__17123__auto___26538);
var G__26542 = (0);
seq__26523_26527 = G__26539;
chunk__26524_26528 = G__26540;
count__26525_26529 = G__26541;
i__26526_26530 = G__26542;
continue;
} else {
var msg_26543 = cljs.core.first.call(null,seq__26523_26537__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26543);

var G__26544 = cljs.core.next.call(null,seq__26523_26537__$1);
var G__26545 = null;
var G__26546 = (0);
var G__26547 = (0);
seq__26523_26527 = G__26544;
chunk__26524_26528 = G__26545;
count__26525_26529 = G__26546;
i__26526_26530 = G__26547;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26548){
var map__26551 = p__26548;
var map__26551__$1 = ((((!((map__26551 == null)))?((((map__26551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26551):map__26551);
var w = map__26551__$1;
var message = cljs.core.get.call(null,map__26551__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16308__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16308__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16308__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26559 = cljs.core.seq.call(null,plugins);
var chunk__26560 = null;
var count__26561 = (0);
var i__26562 = (0);
while(true){
if((i__26562 < count__26561)){
var vec__26563 = cljs.core._nth.call(null,chunk__26560,i__26562);
var k = cljs.core.nth.call(null,vec__26563,(0),null);
var plugin = cljs.core.nth.call(null,vec__26563,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26565 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26559,chunk__26560,count__26561,i__26562,pl_26565,vec__26563,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26565.call(null,msg_hist);
});})(seq__26559,chunk__26560,count__26561,i__26562,pl_26565,vec__26563,k,plugin))
);
} else {
}

var G__26566 = seq__26559;
var G__26567 = chunk__26560;
var G__26568 = count__26561;
var G__26569 = (i__26562 + (1));
seq__26559 = G__26566;
chunk__26560 = G__26567;
count__26561 = G__26568;
i__26562 = G__26569;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26559);
if(temp__4425__auto__){
var seq__26559__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26559__$1)){
var c__17123__auto__ = cljs.core.chunk_first.call(null,seq__26559__$1);
var G__26570 = cljs.core.chunk_rest.call(null,seq__26559__$1);
var G__26571 = c__17123__auto__;
var G__26572 = cljs.core.count.call(null,c__17123__auto__);
var G__26573 = (0);
seq__26559 = G__26570;
chunk__26560 = G__26571;
count__26561 = G__26572;
i__26562 = G__26573;
continue;
} else {
var vec__26564 = cljs.core.first.call(null,seq__26559__$1);
var k = cljs.core.nth.call(null,vec__26564,(0),null);
var plugin = cljs.core.nth.call(null,vec__26564,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26574 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26559,chunk__26560,count__26561,i__26562,pl_26574,vec__26564,k,plugin,seq__26559__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26574.call(null,msg_hist);
});})(seq__26559,chunk__26560,count__26561,i__26562,pl_26574,vec__26564,k,plugin,seq__26559__$1,temp__4425__auto__))
);
} else {
}

var G__26575 = cljs.core.next.call(null,seq__26559__$1);
var G__26576 = null;
var G__26577 = (0);
var G__26578 = (0);
seq__26559 = G__26575;
chunk__26560 = G__26576;
count__26561 = G__26577;
i__26562 = G__26578;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args26579 = [];
var len__17378__auto___26582 = arguments.length;
var i__17379__auto___26583 = (0);
while(true){
if((i__17379__auto___26583 < len__17378__auto___26582)){
args26579.push((arguments[i__17379__auto___26583]));

var G__26584 = (i__17379__auto___26583 + (1));
i__17379__auto___26583 = G__26584;
continue;
} else {
}
break;
}

var G__26581 = args26579.length;
switch (G__26581) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26579.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17385__auto__ = [];
var len__17378__auto___26590 = arguments.length;
var i__17379__auto___26591 = (0);
while(true){
if((i__17379__auto___26591 < len__17378__auto___26590)){
args__17385__auto__.push((arguments[i__17379__auto___26591]));

var G__26592 = (i__17379__auto___26591 + (1));
i__17379__auto___26591 = G__26592;
continue;
} else {
}
break;
}

var argseq__17386__auto__ = ((((0) < args__17385__auto__.length))?(new cljs.core.IndexedSeq(args__17385__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17386__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26587){
var map__26588 = p__26587;
var map__26588__$1 = ((((!((map__26588 == null)))?((((map__26588.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26588.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26588):map__26588);
var opts = map__26588__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26586){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26586));
});

//# sourceMappingURL=client.js.map?rel=1444180412526