// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26978_26992 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26979_26993 = null;
var count__26980_26994 = (0);
var i__26981_26995 = (0);
while(true){
if((i__26981_26995 < count__26980_26994)){
var f_26996 = cljs.core._nth.call(null,chunk__26979_26993,i__26981_26995);
cljs.core.println.call(null,"  ",f_26996);

var G__26997 = seq__26978_26992;
var G__26998 = chunk__26979_26993;
var G__26999 = count__26980_26994;
var G__27000 = (i__26981_26995 + (1));
seq__26978_26992 = G__26997;
chunk__26979_26993 = G__26998;
count__26980_26994 = G__26999;
i__26981_26995 = G__27000;
continue;
} else {
var temp__4425__auto___27001 = cljs.core.seq.call(null,seq__26978_26992);
if(temp__4425__auto___27001){
var seq__26978_27002__$1 = temp__4425__auto___27001;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26978_27002__$1)){
var c__17123__auto___27003 = cljs.core.chunk_first.call(null,seq__26978_27002__$1);
var G__27004 = cljs.core.chunk_rest.call(null,seq__26978_27002__$1);
var G__27005 = c__17123__auto___27003;
var G__27006 = cljs.core.count.call(null,c__17123__auto___27003);
var G__27007 = (0);
seq__26978_26992 = G__27004;
chunk__26979_26993 = G__27005;
count__26980_26994 = G__27006;
i__26981_26995 = G__27007;
continue;
} else {
var f_27008 = cljs.core.first.call(null,seq__26978_27002__$1);
cljs.core.println.call(null,"  ",f_27008);

var G__27009 = cljs.core.next.call(null,seq__26978_27002__$1);
var G__27010 = null;
var G__27011 = (0);
var G__27012 = (0);
seq__26978_26992 = G__27009;
chunk__26979_26993 = G__27010;
count__26980_26994 = G__27011;
i__26981_26995 = G__27012;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27013 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16320__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16320__auto__)){
return or__16320__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27013);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27013)))?cljs.core.second.call(null,arglists_27013):arglists_27013));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26982 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26983 = null;
var count__26984 = (0);
var i__26985 = (0);
while(true){
if((i__26985 < count__26984)){
var vec__26986 = cljs.core._nth.call(null,chunk__26983,i__26985);
var name = cljs.core.nth.call(null,vec__26986,(0),null);
var map__26987 = cljs.core.nth.call(null,vec__26986,(1),null);
var map__26987__$1 = ((((!((map__26987 == null)))?((((map__26987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26987):map__26987);
var doc = cljs.core.get.call(null,map__26987__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26987__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27014 = seq__26982;
var G__27015 = chunk__26983;
var G__27016 = count__26984;
var G__27017 = (i__26985 + (1));
seq__26982 = G__27014;
chunk__26983 = G__27015;
count__26984 = G__27016;
i__26985 = G__27017;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26982);
if(temp__4425__auto__){
var seq__26982__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26982__$1)){
var c__17123__auto__ = cljs.core.chunk_first.call(null,seq__26982__$1);
var G__27018 = cljs.core.chunk_rest.call(null,seq__26982__$1);
var G__27019 = c__17123__auto__;
var G__27020 = cljs.core.count.call(null,c__17123__auto__);
var G__27021 = (0);
seq__26982 = G__27018;
chunk__26983 = G__27019;
count__26984 = G__27020;
i__26985 = G__27021;
continue;
} else {
var vec__26989 = cljs.core.first.call(null,seq__26982__$1);
var name = cljs.core.nth.call(null,vec__26989,(0),null);
var map__26990 = cljs.core.nth.call(null,vec__26989,(1),null);
var map__26990__$1 = ((((!((map__26990 == null)))?((((map__26990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26990):map__26990);
var doc = cljs.core.get.call(null,map__26990__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26990__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27022 = cljs.core.next.call(null,seq__26982__$1);
var G__27023 = null;
var G__27024 = (0);
var G__27025 = (0);
seq__26982 = G__27022;
chunk__26983 = G__27023;
count__26984 = G__27024;
i__26985 = G__27025;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1444180413297