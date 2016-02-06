// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('robot_overlord.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__20077__delegate = function (x){
if(cljs.core.truth_(robot_overlord.core.on_js_reload)){
return cljs.core.apply.call(null,robot_overlord.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'robot-overlord.core/on-js-reload' is missing");
}
};
var G__20077 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__20078__i = 0, G__20078__a = new Array(arguments.length -  0);
while (G__20078__i < G__20078__a.length) {G__20078__a[G__20078__i] = arguments[G__20078__i + 0]; ++G__20078__i;}
  x = new cljs.core.IndexedSeq(G__20078__a,0);
} 
return G__20077__delegate.call(this,x);};
G__20077.cljs$lang$maxFixedArity = 0;
G__20077.cljs$lang$applyTo = (function (arglist__20079){
var x = cljs.core.seq(arglist__20079);
return G__20077__delegate(x);
});
G__20077.cljs$core$IFn$_invoke$arity$variadic = G__20077__delegate;
return G__20077;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1454729044339