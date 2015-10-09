// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16320__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16320__auto__){
return or__16320__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16320__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16320__auto__)){
return or__16320__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27030_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27030_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27035 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27036 = null;
var count__27037 = (0);
var i__27038 = (0);
while(true){
if((i__27038 < count__27037)){
var n = cljs.core._nth.call(null,chunk__27036,i__27038);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27039 = seq__27035;
var G__27040 = chunk__27036;
var G__27041 = count__27037;
var G__27042 = (i__27038 + (1));
seq__27035 = G__27039;
chunk__27036 = G__27040;
count__27037 = G__27041;
i__27038 = G__27042;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27035);
if(temp__4425__auto__){
var seq__27035__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27035__$1)){
var c__17123__auto__ = cljs.core.chunk_first.call(null,seq__27035__$1);
var G__27043 = cljs.core.chunk_rest.call(null,seq__27035__$1);
var G__27044 = c__17123__auto__;
var G__27045 = cljs.core.count.call(null,c__17123__auto__);
var G__27046 = (0);
seq__27035 = G__27043;
chunk__27036 = G__27044;
count__27037 = G__27045;
i__27038 = G__27046;
continue;
} else {
var n = cljs.core.first.call(null,seq__27035__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27047 = cljs.core.next.call(null,seq__27035__$1);
var G__27048 = null;
var G__27049 = (0);
var G__27050 = (0);
seq__27035 = G__27047;
chunk__27036 = G__27048;
count__27037 = G__27049;
i__27038 = G__27050;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27089_27096 = cljs.core.seq.call(null,deps);
var chunk__27090_27097 = null;
var count__27091_27098 = (0);
var i__27092_27099 = (0);
while(true){
if((i__27092_27099 < count__27091_27098)){
var dep_27100 = cljs.core._nth.call(null,chunk__27090_27097,i__27092_27099);
topo_sort_helper_STAR_.call(null,dep_27100,(depth + (1)),state);

var G__27101 = seq__27089_27096;
var G__27102 = chunk__27090_27097;
var G__27103 = count__27091_27098;
var G__27104 = (i__27092_27099 + (1));
seq__27089_27096 = G__27101;
chunk__27090_27097 = G__27102;
count__27091_27098 = G__27103;
i__27092_27099 = G__27104;
continue;
} else {
var temp__4425__auto___27105 = cljs.core.seq.call(null,seq__27089_27096);
if(temp__4425__auto___27105){
var seq__27089_27106__$1 = temp__4425__auto___27105;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27089_27106__$1)){
var c__17123__auto___27107 = cljs.core.chunk_first.call(null,seq__27089_27106__$1);
var G__27108 = cljs.core.chunk_rest.call(null,seq__27089_27106__$1);
var G__27109 = c__17123__auto___27107;
var G__27110 = cljs.core.count.call(null,c__17123__auto___27107);
var G__27111 = (0);
seq__27089_27096 = G__27108;
chunk__27090_27097 = G__27109;
count__27091_27098 = G__27110;
i__27092_27099 = G__27111;
continue;
} else {
var dep_27112 = cljs.core.first.call(null,seq__27089_27106__$1);
topo_sort_helper_STAR_.call(null,dep_27112,(depth + (1)),state);

var G__27113 = cljs.core.next.call(null,seq__27089_27106__$1);
var G__27114 = null;
var G__27115 = (0);
var G__27116 = (0);
seq__27089_27096 = G__27113;
chunk__27090_27097 = G__27114;
count__27091_27098 = G__27115;
i__27092_27099 = G__27116;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27093){
var vec__27095 = p__27093;
var x = cljs.core.nth.call(null,vec__27095,(0),null);
var xs = cljs.core.nthnext.call(null,vec__27095,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27095,x,xs,get_deps__$1){
return (function (p1__27051_SHARP_){
return clojure.set.difference.call(null,p1__27051_SHARP_,x);
});})(vec__27095,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27129 = cljs.core.seq.call(null,provides);
var chunk__27130 = null;
var count__27131 = (0);
var i__27132 = (0);
while(true){
if((i__27132 < count__27131)){
var prov = cljs.core._nth.call(null,chunk__27130,i__27132);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27133_27141 = cljs.core.seq.call(null,requires);
var chunk__27134_27142 = null;
var count__27135_27143 = (0);
var i__27136_27144 = (0);
while(true){
if((i__27136_27144 < count__27135_27143)){
var req_27145 = cljs.core._nth.call(null,chunk__27134_27142,i__27136_27144);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27145,prov);

var G__27146 = seq__27133_27141;
var G__27147 = chunk__27134_27142;
var G__27148 = count__27135_27143;
var G__27149 = (i__27136_27144 + (1));
seq__27133_27141 = G__27146;
chunk__27134_27142 = G__27147;
count__27135_27143 = G__27148;
i__27136_27144 = G__27149;
continue;
} else {
var temp__4425__auto___27150 = cljs.core.seq.call(null,seq__27133_27141);
if(temp__4425__auto___27150){
var seq__27133_27151__$1 = temp__4425__auto___27150;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27133_27151__$1)){
var c__17123__auto___27152 = cljs.core.chunk_first.call(null,seq__27133_27151__$1);
var G__27153 = cljs.core.chunk_rest.call(null,seq__27133_27151__$1);
var G__27154 = c__17123__auto___27152;
var G__27155 = cljs.core.count.call(null,c__17123__auto___27152);
var G__27156 = (0);
seq__27133_27141 = G__27153;
chunk__27134_27142 = G__27154;
count__27135_27143 = G__27155;
i__27136_27144 = G__27156;
continue;
} else {
var req_27157 = cljs.core.first.call(null,seq__27133_27151__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27157,prov);

var G__27158 = cljs.core.next.call(null,seq__27133_27151__$1);
var G__27159 = null;
var G__27160 = (0);
var G__27161 = (0);
seq__27133_27141 = G__27158;
chunk__27134_27142 = G__27159;
count__27135_27143 = G__27160;
i__27136_27144 = G__27161;
continue;
}
} else {
}
}
break;
}

var G__27162 = seq__27129;
var G__27163 = chunk__27130;
var G__27164 = count__27131;
var G__27165 = (i__27132 + (1));
seq__27129 = G__27162;
chunk__27130 = G__27163;
count__27131 = G__27164;
i__27132 = G__27165;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27129);
if(temp__4425__auto__){
var seq__27129__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27129__$1)){
var c__17123__auto__ = cljs.core.chunk_first.call(null,seq__27129__$1);
var G__27166 = cljs.core.chunk_rest.call(null,seq__27129__$1);
var G__27167 = c__17123__auto__;
var G__27168 = cljs.core.count.call(null,c__17123__auto__);
var G__27169 = (0);
seq__27129 = G__27166;
chunk__27130 = G__27167;
count__27131 = G__27168;
i__27132 = G__27169;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27129__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27137_27170 = cljs.core.seq.call(null,requires);
var chunk__27138_27171 = null;
var count__27139_27172 = (0);
var i__27140_27173 = (0);
while(true){
if((i__27140_27173 < count__27139_27172)){
var req_27174 = cljs.core._nth.call(null,chunk__27138_27171,i__27140_27173);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27174,prov);

var G__27175 = seq__27137_27170;
var G__27176 = chunk__27138_27171;
var G__27177 = count__27139_27172;
var G__27178 = (i__27140_27173 + (1));
seq__27137_27170 = G__27175;
chunk__27138_27171 = G__27176;
count__27139_27172 = G__27177;
i__27140_27173 = G__27178;
continue;
} else {
var temp__4425__auto___27179__$1 = cljs.core.seq.call(null,seq__27137_27170);
if(temp__4425__auto___27179__$1){
var seq__27137_27180__$1 = temp__4425__auto___27179__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27137_27180__$1)){
var c__17123__auto___27181 = cljs.core.chunk_first.call(null,seq__27137_27180__$1);
var G__27182 = cljs.core.chunk_rest.call(null,seq__27137_27180__$1);
var G__27183 = c__17123__auto___27181;
var G__27184 = cljs.core.count.call(null,c__17123__auto___27181);
var G__27185 = (0);
seq__27137_27170 = G__27182;
chunk__27138_27171 = G__27183;
count__27139_27172 = G__27184;
i__27140_27173 = G__27185;
continue;
} else {
var req_27186 = cljs.core.first.call(null,seq__27137_27180__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27186,prov);

var G__27187 = cljs.core.next.call(null,seq__27137_27180__$1);
var G__27188 = null;
var G__27189 = (0);
var G__27190 = (0);
seq__27137_27170 = G__27187;
chunk__27138_27171 = G__27188;
count__27139_27172 = G__27189;
i__27140_27173 = G__27190;
continue;
}
} else {
}
}
break;
}

var G__27191 = cljs.core.next.call(null,seq__27129__$1);
var G__27192 = null;
var G__27193 = (0);
var G__27194 = (0);
seq__27129 = G__27191;
chunk__27130 = G__27192;
count__27131 = G__27193;
i__27132 = G__27194;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27199_27203 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27200_27204 = null;
var count__27201_27205 = (0);
var i__27202_27206 = (0);
while(true){
if((i__27202_27206 < count__27201_27205)){
var ns_27207 = cljs.core._nth.call(null,chunk__27200_27204,i__27202_27206);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27207);

var G__27208 = seq__27199_27203;
var G__27209 = chunk__27200_27204;
var G__27210 = count__27201_27205;
var G__27211 = (i__27202_27206 + (1));
seq__27199_27203 = G__27208;
chunk__27200_27204 = G__27209;
count__27201_27205 = G__27210;
i__27202_27206 = G__27211;
continue;
} else {
var temp__4425__auto___27212 = cljs.core.seq.call(null,seq__27199_27203);
if(temp__4425__auto___27212){
var seq__27199_27213__$1 = temp__4425__auto___27212;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27199_27213__$1)){
var c__17123__auto___27214 = cljs.core.chunk_first.call(null,seq__27199_27213__$1);
var G__27215 = cljs.core.chunk_rest.call(null,seq__27199_27213__$1);
var G__27216 = c__17123__auto___27214;
var G__27217 = cljs.core.count.call(null,c__17123__auto___27214);
var G__27218 = (0);
seq__27199_27203 = G__27215;
chunk__27200_27204 = G__27216;
count__27201_27205 = G__27217;
i__27202_27206 = G__27218;
continue;
} else {
var ns_27219 = cljs.core.first.call(null,seq__27199_27213__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27219);

var G__27220 = cljs.core.next.call(null,seq__27199_27213__$1);
var G__27221 = null;
var G__27222 = (0);
var G__27223 = (0);
seq__27199_27203 = G__27220;
chunk__27200_27204 = G__27221;
count__27201_27205 = G__27222;
i__27202_27206 = G__27223;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16320__auto__ = goog.require__;
if(cljs.core.truth_(or__16320__auto__)){
return or__16320__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__27224__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27224 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27225__i = 0, G__27225__a = new Array(arguments.length -  0);
while (G__27225__i < G__27225__a.length) {G__27225__a[G__27225__i] = arguments[G__27225__i + 0]; ++G__27225__i;}
  args = new cljs.core.IndexedSeq(G__27225__a,0);
} 
return G__27224__delegate.call(this,args);};
G__27224.cljs$lang$maxFixedArity = 0;
G__27224.cljs$lang$applyTo = (function (arglist__27226){
var args = cljs.core.seq(arglist__27226);
return G__27224__delegate(args);
});
G__27224.cljs$core$IFn$_invoke$arity$variadic = G__27224__delegate;
return G__27224;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27227 = cljs.core._EQ_;
var expr__27228 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27227.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27228))){
return ((function (pred__27227,expr__27228){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e27230){if((e27230 instanceof Error)){
var e = e27230;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27230;

}
}})());
});
;})(pred__27227,expr__27228))
} else {
if(cljs.core.truth_(pred__27227.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27228))){
return ((function (pred__27227,expr__27228){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27227,expr__27228){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27227,expr__27228))
);

return deferred.addErrback(((function (deferred,pred__27227,expr__27228){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27227,expr__27228))
);
});
;})(pred__27227,expr__27228))
} else {
return ((function (pred__27227,expr__27228){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27227,expr__27228))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27231,callback){
var map__27234 = p__27231;
var map__27234__$1 = ((((!((map__27234 == null)))?((((map__27234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27234):map__27234);
var file_msg = map__27234__$1;
var request_url = cljs.core.get.call(null,map__27234__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27234,map__27234__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27234,map__27234__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20605__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20605__auto__){
return (function (){
var f__20606__auto__ = (function (){var switch__20540__auto__ = ((function (c__20605__auto__){
return (function (state_27258){
var state_val_27259 = (state_27258[(1)]);
if((state_val_27259 === (7))){
var inst_27254 = (state_27258[(2)]);
var state_27258__$1 = state_27258;
var statearr_27260_27280 = state_27258__$1;
(statearr_27260_27280[(2)] = inst_27254);

(statearr_27260_27280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (1))){
var state_27258__$1 = state_27258;
var statearr_27261_27281 = state_27258__$1;
(statearr_27261_27281[(2)] = null);

(statearr_27261_27281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (4))){
var inst_27238 = (state_27258[(7)]);
var inst_27238__$1 = (state_27258[(2)]);
var state_27258__$1 = (function (){var statearr_27262 = state_27258;
(statearr_27262[(7)] = inst_27238__$1);

return statearr_27262;
})();
if(cljs.core.truth_(inst_27238__$1)){
var statearr_27263_27282 = state_27258__$1;
(statearr_27263_27282[(1)] = (5));

} else {
var statearr_27264_27283 = state_27258__$1;
(statearr_27264_27283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (6))){
var state_27258__$1 = state_27258;
var statearr_27265_27284 = state_27258__$1;
(statearr_27265_27284[(2)] = null);

(statearr_27265_27284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (3))){
var inst_27256 = (state_27258[(2)]);
var state_27258__$1 = state_27258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27258__$1,inst_27256);
} else {
if((state_val_27259 === (2))){
var state_27258__$1 = state_27258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27258__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27259 === (11))){
var inst_27250 = (state_27258[(2)]);
var state_27258__$1 = (function (){var statearr_27266 = state_27258;
(statearr_27266[(8)] = inst_27250);

return statearr_27266;
})();
var statearr_27267_27285 = state_27258__$1;
(statearr_27267_27285[(2)] = null);

(statearr_27267_27285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (9))){
var inst_27244 = (state_27258[(9)]);
var inst_27242 = (state_27258[(10)]);
var inst_27246 = inst_27244.call(null,inst_27242);
var state_27258__$1 = state_27258;
var statearr_27268_27286 = state_27258__$1;
(statearr_27268_27286[(2)] = inst_27246);

(statearr_27268_27286[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (5))){
var inst_27238 = (state_27258[(7)]);
var inst_27240 = figwheel.client.file_reloading.blocking_load.call(null,inst_27238);
var state_27258__$1 = state_27258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27258__$1,(8),inst_27240);
} else {
if((state_val_27259 === (10))){
var inst_27242 = (state_27258[(10)]);
var inst_27248 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27242);
var state_27258__$1 = state_27258;
var statearr_27269_27287 = state_27258__$1;
(statearr_27269_27287[(2)] = inst_27248);

(statearr_27269_27287[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (8))){
var inst_27238 = (state_27258[(7)]);
var inst_27244 = (state_27258[(9)]);
var inst_27242 = (state_27258[(2)]);
var inst_27243 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27244__$1 = cljs.core.get.call(null,inst_27243,inst_27238);
var state_27258__$1 = (function (){var statearr_27270 = state_27258;
(statearr_27270[(9)] = inst_27244__$1);

(statearr_27270[(10)] = inst_27242);

return statearr_27270;
})();
if(cljs.core.truth_(inst_27244__$1)){
var statearr_27271_27288 = state_27258__$1;
(statearr_27271_27288[(1)] = (9));

} else {
var statearr_27272_27289 = state_27258__$1;
(statearr_27272_27289[(1)] = (10));

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
});})(c__20605__auto__))
;
return ((function (switch__20540__auto__,c__20605__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20541__auto__ = null;
var figwheel$client$file_reloading$state_machine__20541__auto____0 = (function (){
var statearr_27276 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27276[(0)] = figwheel$client$file_reloading$state_machine__20541__auto__);

(statearr_27276[(1)] = (1));

return statearr_27276;
});
var figwheel$client$file_reloading$state_machine__20541__auto____1 = (function (state_27258){
while(true){
var ret_value__20542__auto__ = (function (){try{while(true){
var result__20543__auto__ = switch__20540__auto__.call(null,state_27258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20543__auto__;
}
break;
}
}catch (e27277){if((e27277 instanceof Object)){
var ex__20544__auto__ = e27277;
var statearr_27278_27290 = state_27258;
(statearr_27278_27290[(5)] = ex__20544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27291 = state_27258;
state_27258 = G__27291;
continue;
} else {
return ret_value__20542__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20541__auto__ = function(state_27258){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20541__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20541__auto____1.call(this,state_27258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20541__auto____0;
figwheel$client$file_reloading$state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20541__auto____1;
return figwheel$client$file_reloading$state_machine__20541__auto__;
})()
;})(switch__20540__auto__,c__20605__auto__))
})();
var state__20607__auto__ = (function (){var statearr_27279 = f__20606__auto__.call(null);
(statearr_27279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20605__auto__);

return statearr_27279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20607__auto__);
});})(c__20605__auto__))
);

return c__20605__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27292,callback){
var map__27295 = p__27292;
var map__27295__$1 = ((((!((map__27295 == null)))?((((map__27295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27295):map__27295);
var file_msg = map__27295__$1;
var namespace = cljs.core.get.call(null,map__27295__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27295,map__27295__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27295,map__27295__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27297){
var map__27300 = p__27297;
var map__27300__$1 = ((((!((map__27300 == null)))?((((map__27300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27300):map__27300);
var file_msg = map__27300__$1;
var namespace = cljs.core.get.call(null,map__27300__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16308__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16308__auto__){
var or__16320__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16320__auto__)){
return or__16320__auto__;
} else {
var or__16320__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16320__auto____$1)){
return or__16320__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16308__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27302,callback){
var map__27305 = p__27302;
var map__27305__$1 = ((((!((map__27305 == null)))?((((map__27305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27305):map__27305);
var file_msg = map__27305__$1;
var request_url = cljs.core.get.call(null,map__27305__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27305__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20605__auto___27393 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20605__auto___27393,out){
return (function (){
var f__20606__auto__ = (function (){var switch__20540__auto__ = ((function (c__20605__auto___27393,out){
return (function (state_27375){
var state_val_27376 = (state_27375[(1)]);
if((state_val_27376 === (1))){
var inst_27353 = cljs.core.nth.call(null,files,(0),null);
var inst_27354 = cljs.core.nthnext.call(null,files,(1));
var inst_27355 = files;
var state_27375__$1 = (function (){var statearr_27377 = state_27375;
(statearr_27377[(7)] = inst_27355);

(statearr_27377[(8)] = inst_27353);

(statearr_27377[(9)] = inst_27354);

return statearr_27377;
})();
var statearr_27378_27394 = state_27375__$1;
(statearr_27378_27394[(2)] = null);

(statearr_27378_27394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27376 === (2))){
var inst_27358 = (state_27375[(10)]);
var inst_27355 = (state_27375[(7)]);
var inst_27358__$1 = cljs.core.nth.call(null,inst_27355,(0),null);
var inst_27359 = cljs.core.nthnext.call(null,inst_27355,(1));
var inst_27360 = (inst_27358__$1 == null);
var inst_27361 = cljs.core.not.call(null,inst_27360);
var state_27375__$1 = (function (){var statearr_27379 = state_27375;
(statearr_27379[(10)] = inst_27358__$1);

(statearr_27379[(11)] = inst_27359);

return statearr_27379;
})();
if(inst_27361){
var statearr_27380_27395 = state_27375__$1;
(statearr_27380_27395[(1)] = (4));

} else {
var statearr_27381_27396 = state_27375__$1;
(statearr_27381_27396[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27376 === (3))){
var inst_27373 = (state_27375[(2)]);
var state_27375__$1 = state_27375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27375__$1,inst_27373);
} else {
if((state_val_27376 === (4))){
var inst_27358 = (state_27375[(10)]);
var inst_27363 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27358);
var state_27375__$1 = state_27375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27375__$1,(7),inst_27363);
} else {
if((state_val_27376 === (5))){
var inst_27369 = cljs.core.async.close_BANG_.call(null,out);
var state_27375__$1 = state_27375;
var statearr_27382_27397 = state_27375__$1;
(statearr_27382_27397[(2)] = inst_27369);

(statearr_27382_27397[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27376 === (6))){
var inst_27371 = (state_27375[(2)]);
var state_27375__$1 = state_27375;
var statearr_27383_27398 = state_27375__$1;
(statearr_27383_27398[(2)] = inst_27371);

(statearr_27383_27398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27376 === (7))){
var inst_27359 = (state_27375[(11)]);
var inst_27365 = (state_27375[(2)]);
var inst_27366 = cljs.core.async.put_BANG_.call(null,out,inst_27365);
var inst_27355 = inst_27359;
var state_27375__$1 = (function (){var statearr_27384 = state_27375;
(statearr_27384[(7)] = inst_27355);

(statearr_27384[(12)] = inst_27366);

return statearr_27384;
})();
var statearr_27385_27399 = state_27375__$1;
(statearr_27385_27399[(2)] = null);

(statearr_27385_27399[(1)] = (2));


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
});})(c__20605__auto___27393,out))
;
return ((function (switch__20540__auto__,c__20605__auto___27393,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20541__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20541__auto____0 = (function (){
var statearr_27389 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27389[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20541__auto__);

(statearr_27389[(1)] = (1));

return statearr_27389;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20541__auto____1 = (function (state_27375){
while(true){
var ret_value__20542__auto__ = (function (){try{while(true){
var result__20543__auto__ = switch__20540__auto__.call(null,state_27375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20543__auto__;
}
break;
}
}catch (e27390){if((e27390 instanceof Object)){
var ex__20544__auto__ = e27390;
var statearr_27391_27400 = state_27375;
(statearr_27391_27400[(5)] = ex__20544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27401 = state_27375;
state_27375 = G__27401;
continue;
} else {
return ret_value__20542__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20541__auto__ = function(state_27375){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20541__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20541__auto____1.call(this,state_27375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20541__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20541__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20541__auto__;
})()
;})(switch__20540__auto__,c__20605__auto___27393,out))
})();
var state__20607__auto__ = (function (){var statearr_27392 = f__20606__auto__.call(null);
(statearr_27392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20605__auto___27393);

return statearr_27392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20607__auto__);
});})(c__20605__auto___27393,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27402,opts){
var map__27406 = p__27402;
var map__27406__$1 = ((((!((map__27406 == null)))?((((map__27406.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27406.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27406):map__27406);
var eval_body__$1 = cljs.core.get.call(null,map__27406__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27406__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16308__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16308__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16308__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27408){var e = e27408;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27409_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27409_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27414){
var vec__27415 = p__27414;
var k = cljs.core.nth.call(null,vec__27415,(0),null);
var v = cljs.core.nth.call(null,vec__27415,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27416){
var vec__27417 = p__27416;
var k = cljs.core.nth.call(null,vec__27417,(0),null);
var v = cljs.core.nth.call(null,vec__27417,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27421,p__27422){
var map__27669 = p__27421;
var map__27669__$1 = ((((!((map__27669 == null)))?((((map__27669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27669):map__27669);
var opts = map__27669__$1;
var before_jsload = cljs.core.get.call(null,map__27669__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27669__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27669__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27670 = p__27422;
var map__27670__$1 = ((((!((map__27670 == null)))?((((map__27670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27670):map__27670);
var msg = map__27670__$1;
var files = cljs.core.get.call(null,map__27670__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27670__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27670__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20605__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20605__auto__,map__27669,map__27669__$1,opts,before_jsload,on_jsload,reload_dependents,map__27670,map__27670__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20606__auto__ = (function (){var switch__20540__auto__ = ((function (c__20605__auto__,map__27669,map__27669__$1,opts,before_jsload,on_jsload,reload_dependents,map__27670,map__27670__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27823){
var state_val_27824 = (state_27823[(1)]);
if((state_val_27824 === (7))){
var inst_27687 = (state_27823[(7)]);
var inst_27684 = (state_27823[(8)]);
var inst_27686 = (state_27823[(9)]);
var inst_27685 = (state_27823[(10)]);
var inst_27692 = cljs.core._nth.call(null,inst_27685,inst_27687);
var inst_27693 = figwheel.client.file_reloading.eval_body.call(null,inst_27692,opts);
var inst_27694 = (inst_27687 + (1));
var tmp27825 = inst_27684;
var tmp27826 = inst_27686;
var tmp27827 = inst_27685;
var inst_27684__$1 = tmp27825;
var inst_27685__$1 = tmp27827;
var inst_27686__$1 = tmp27826;
var inst_27687__$1 = inst_27694;
var state_27823__$1 = (function (){var statearr_27828 = state_27823;
(statearr_27828[(7)] = inst_27687__$1);

(statearr_27828[(8)] = inst_27684__$1);

(statearr_27828[(11)] = inst_27693);

(statearr_27828[(9)] = inst_27686__$1);

(statearr_27828[(10)] = inst_27685__$1);

return statearr_27828;
})();
var statearr_27829_27915 = state_27823__$1;
(statearr_27829_27915[(2)] = null);

(statearr_27829_27915[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (20))){
var inst_27727 = (state_27823[(12)]);
var inst_27735 = figwheel.client.file_reloading.sort_files.call(null,inst_27727);
var state_27823__$1 = state_27823;
var statearr_27830_27916 = state_27823__$1;
(statearr_27830_27916[(2)] = inst_27735);

(statearr_27830_27916[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (27))){
var state_27823__$1 = state_27823;
var statearr_27831_27917 = state_27823__$1;
(statearr_27831_27917[(2)] = null);

(statearr_27831_27917[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (1))){
var inst_27676 = (state_27823[(13)]);
var inst_27673 = before_jsload.call(null,files);
var inst_27674 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27675 = (function (){return ((function (inst_27676,inst_27673,inst_27674,state_val_27824,c__20605__auto__,map__27669,map__27669__$1,opts,before_jsload,on_jsload,reload_dependents,map__27670,map__27670__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27418_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27418_SHARP_);
});
;})(inst_27676,inst_27673,inst_27674,state_val_27824,c__20605__auto__,map__27669,map__27669__$1,opts,before_jsload,on_jsload,reload_dependents,map__27670,map__27670__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27676__$1 = cljs.core.filter.call(null,inst_27675,files);
var inst_27677 = cljs.core.not_empty.call(null,inst_27676__$1);
var state_27823__$1 = (function (){var statearr_27832 = state_27823;
(statearr_27832[(14)] = inst_27674);

(statearr_27832[(15)] = inst_27673);

(statearr_27832[(13)] = inst_27676__$1);

return statearr_27832;
})();
if(cljs.core.truth_(inst_27677)){
var statearr_27833_27918 = state_27823__$1;
(statearr_27833_27918[(1)] = (2));

} else {
var statearr_27834_27919 = state_27823__$1;
(statearr_27834_27919[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (24))){
var state_27823__$1 = state_27823;
var statearr_27835_27920 = state_27823__$1;
(statearr_27835_27920[(2)] = null);

(statearr_27835_27920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (39))){
var inst_27777 = (state_27823[(16)]);
var state_27823__$1 = state_27823;
var statearr_27836_27921 = state_27823__$1;
(statearr_27836_27921[(2)] = inst_27777);

(statearr_27836_27921[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (46))){
var inst_27818 = (state_27823[(2)]);
var state_27823__$1 = state_27823;
var statearr_27837_27922 = state_27823__$1;
(statearr_27837_27922[(2)] = inst_27818);

(statearr_27837_27922[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (4))){
var inst_27721 = (state_27823[(2)]);
var inst_27722 = cljs.core.List.EMPTY;
var inst_27723 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27722);
var inst_27724 = (function (){return ((function (inst_27721,inst_27722,inst_27723,state_val_27824,c__20605__auto__,map__27669,map__27669__$1,opts,before_jsload,on_jsload,reload_dependents,map__27670,map__27670__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27419_SHARP_){
var and__16308__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27419_SHARP_);
if(cljs.core.truth_(and__16308__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27419_SHARP_));
} else {
return and__16308__auto__;
}
});
;})(inst_27721,inst_27722,inst_27723,state_val_27824,c__20605__auto__,map__27669,map__27669__$1,opts,before_jsload,on_jsload,reload_dependents,map__27670,map__27670__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27725 = cljs.core.filter.call(null,inst_27724,files);
var inst_27726 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27727 = cljs.core.concat.call(null,inst_27725,inst_27726);
var state_27823__$1 = (function (){var statearr_27838 = state_27823;
(statearr_27838[(17)] = inst_27723);

(statearr_27838[(12)] = inst_27727);

(statearr_27838[(18)] = inst_27721);

return statearr_27838;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27839_27923 = state_27823__$1;
(statearr_27839_27923[(1)] = (16));

} else {
var statearr_27840_27924 = state_27823__$1;
(statearr_27840_27924[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (15))){
var inst_27711 = (state_27823[(2)]);
var state_27823__$1 = state_27823;
var statearr_27841_27925 = state_27823__$1;
(statearr_27841_27925[(2)] = inst_27711);

(statearr_27841_27925[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (21))){
var inst_27737 = (state_27823[(19)]);
var inst_27737__$1 = (state_27823[(2)]);
var inst_27738 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27737__$1);
var state_27823__$1 = (function (){var statearr_27842 = state_27823;
(statearr_27842[(19)] = inst_27737__$1);

return statearr_27842;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27823__$1,(22),inst_27738);
} else {
if((state_val_27824 === (31))){
var inst_27821 = (state_27823[(2)]);
var state_27823__$1 = state_27823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27823__$1,inst_27821);
} else {
if((state_val_27824 === (32))){
var inst_27777 = (state_27823[(16)]);
var inst_27782 = inst_27777.cljs$lang$protocol_mask$partition0$;
var inst_27783 = (inst_27782 & (64));
var inst_27784 = inst_27777.cljs$core$ISeq$;
var inst_27785 = (inst_27783) || (inst_27784);
var state_27823__$1 = state_27823;
if(cljs.core.truth_(inst_27785)){
var statearr_27843_27926 = state_27823__$1;
(statearr_27843_27926[(1)] = (35));

} else {
var statearr_27844_27927 = state_27823__$1;
(statearr_27844_27927[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (40))){
var inst_27798 = (state_27823[(20)]);
var inst_27797 = (state_27823[(2)]);
var inst_27798__$1 = cljs.core.get.call(null,inst_27797,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27799 = cljs.core.get.call(null,inst_27797,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27800 = cljs.core.not_empty.call(null,inst_27798__$1);
var state_27823__$1 = (function (){var statearr_27845 = state_27823;
(statearr_27845[(20)] = inst_27798__$1);

(statearr_27845[(21)] = inst_27799);

return statearr_27845;
})();
if(cljs.core.truth_(inst_27800)){
var statearr_27846_27928 = state_27823__$1;
(statearr_27846_27928[(1)] = (41));

} else {
var statearr_27847_27929 = state_27823__$1;
(statearr_27847_27929[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (33))){
var state_27823__$1 = state_27823;
var statearr_27848_27930 = state_27823__$1;
(statearr_27848_27930[(2)] = false);

(statearr_27848_27930[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (13))){
var inst_27697 = (state_27823[(22)]);
var inst_27701 = cljs.core.chunk_first.call(null,inst_27697);
var inst_27702 = cljs.core.chunk_rest.call(null,inst_27697);
var inst_27703 = cljs.core.count.call(null,inst_27701);
var inst_27684 = inst_27702;
var inst_27685 = inst_27701;
var inst_27686 = inst_27703;
var inst_27687 = (0);
var state_27823__$1 = (function (){var statearr_27849 = state_27823;
(statearr_27849[(7)] = inst_27687);

(statearr_27849[(8)] = inst_27684);

(statearr_27849[(9)] = inst_27686);

(statearr_27849[(10)] = inst_27685);

return statearr_27849;
})();
var statearr_27850_27931 = state_27823__$1;
(statearr_27850_27931[(2)] = null);

(statearr_27850_27931[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (22))){
var inst_27741 = (state_27823[(23)]);
var inst_27745 = (state_27823[(24)]);
var inst_27740 = (state_27823[(25)]);
var inst_27737 = (state_27823[(19)]);
var inst_27740__$1 = (state_27823[(2)]);
var inst_27741__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27740__$1);
var inst_27742 = (function (){var all_files = inst_27737;
var res_SINGLEQUOTE_ = inst_27740__$1;
var res = inst_27741__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27741,inst_27745,inst_27740,inst_27737,inst_27740__$1,inst_27741__$1,state_val_27824,c__20605__auto__,map__27669,map__27669__$1,opts,before_jsload,on_jsload,reload_dependents,map__27670,map__27670__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27420_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27420_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27741,inst_27745,inst_27740,inst_27737,inst_27740__$1,inst_27741__$1,state_val_27824,c__20605__auto__,map__27669,map__27669__$1,opts,before_jsload,on_jsload,reload_dependents,map__27670,map__27670__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27743 = cljs.core.filter.call(null,inst_27742,inst_27740__$1);
var inst_27744 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27745__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27744);
var inst_27746 = cljs.core.not_empty.call(null,inst_27745__$1);
var state_27823__$1 = (function (){var statearr_27851 = state_27823;
(statearr_27851[(23)] = inst_27741__$1);

(statearr_27851[(24)] = inst_27745__$1);

(statearr_27851[(26)] = inst_27743);

(statearr_27851[(25)] = inst_27740__$1);

return statearr_27851;
})();
if(cljs.core.truth_(inst_27746)){
var statearr_27852_27932 = state_27823__$1;
(statearr_27852_27932[(1)] = (23));

} else {
var statearr_27853_27933 = state_27823__$1;
(statearr_27853_27933[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (36))){
var state_27823__$1 = state_27823;
var statearr_27854_27934 = state_27823__$1;
(statearr_27854_27934[(2)] = false);

(statearr_27854_27934[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (41))){
var inst_27798 = (state_27823[(20)]);
var inst_27802 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27803 = cljs.core.map.call(null,inst_27802,inst_27798);
var inst_27804 = cljs.core.pr_str.call(null,inst_27803);
var inst_27805 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27804)].join('');
var inst_27806 = figwheel.client.utils.log.call(null,inst_27805);
var state_27823__$1 = state_27823;
var statearr_27855_27935 = state_27823__$1;
(statearr_27855_27935[(2)] = inst_27806);

(statearr_27855_27935[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (43))){
var inst_27799 = (state_27823[(21)]);
var inst_27809 = (state_27823[(2)]);
var inst_27810 = cljs.core.not_empty.call(null,inst_27799);
var state_27823__$1 = (function (){var statearr_27856 = state_27823;
(statearr_27856[(27)] = inst_27809);

return statearr_27856;
})();
if(cljs.core.truth_(inst_27810)){
var statearr_27857_27936 = state_27823__$1;
(statearr_27857_27936[(1)] = (44));

} else {
var statearr_27858_27937 = state_27823__$1;
(statearr_27858_27937[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (29))){
var inst_27741 = (state_27823[(23)]);
var inst_27745 = (state_27823[(24)]);
var inst_27743 = (state_27823[(26)]);
var inst_27740 = (state_27823[(25)]);
var inst_27777 = (state_27823[(16)]);
var inst_27737 = (state_27823[(19)]);
var inst_27773 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27776 = (function (){var all_files = inst_27737;
var res_SINGLEQUOTE_ = inst_27740;
var res = inst_27741;
var files_not_loaded = inst_27743;
var dependencies_that_loaded = inst_27745;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27741,inst_27745,inst_27743,inst_27740,inst_27777,inst_27737,inst_27773,state_val_27824,c__20605__auto__,map__27669,map__27669__$1,opts,before_jsload,on_jsload,reload_dependents,map__27670,map__27670__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27775){
var map__27859 = p__27775;
var map__27859__$1 = ((((!((map__27859 == null)))?((((map__27859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27859):map__27859);
var namespace = cljs.core.get.call(null,map__27859__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27741,inst_27745,inst_27743,inst_27740,inst_27777,inst_27737,inst_27773,state_val_27824,c__20605__auto__,map__27669,map__27669__$1,opts,before_jsload,on_jsload,reload_dependents,map__27670,map__27670__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27777__$1 = cljs.core.group_by.call(null,inst_27776,inst_27743);
var inst_27779 = (inst_27777__$1 == null);
var inst_27780 = cljs.core.not.call(null,inst_27779);
var state_27823__$1 = (function (){var statearr_27861 = state_27823;
(statearr_27861[(28)] = inst_27773);

(statearr_27861[(16)] = inst_27777__$1);

return statearr_27861;
})();
if(inst_27780){
var statearr_27862_27938 = state_27823__$1;
(statearr_27862_27938[(1)] = (32));

} else {
var statearr_27863_27939 = state_27823__$1;
(statearr_27863_27939[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (44))){
var inst_27799 = (state_27823[(21)]);
var inst_27812 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27799);
var inst_27813 = cljs.core.pr_str.call(null,inst_27812);
var inst_27814 = [cljs.core.str("not required: "),cljs.core.str(inst_27813)].join('');
var inst_27815 = figwheel.client.utils.log.call(null,inst_27814);
var state_27823__$1 = state_27823;
var statearr_27864_27940 = state_27823__$1;
(statearr_27864_27940[(2)] = inst_27815);

(statearr_27864_27940[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (6))){
var inst_27718 = (state_27823[(2)]);
var state_27823__$1 = state_27823;
var statearr_27865_27941 = state_27823__$1;
(statearr_27865_27941[(2)] = inst_27718);

(statearr_27865_27941[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (28))){
var inst_27743 = (state_27823[(26)]);
var inst_27770 = (state_27823[(2)]);
var inst_27771 = cljs.core.not_empty.call(null,inst_27743);
var state_27823__$1 = (function (){var statearr_27866 = state_27823;
(statearr_27866[(29)] = inst_27770);

return statearr_27866;
})();
if(cljs.core.truth_(inst_27771)){
var statearr_27867_27942 = state_27823__$1;
(statearr_27867_27942[(1)] = (29));

} else {
var statearr_27868_27943 = state_27823__$1;
(statearr_27868_27943[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (25))){
var inst_27741 = (state_27823[(23)]);
var inst_27757 = (state_27823[(2)]);
var inst_27758 = cljs.core.not_empty.call(null,inst_27741);
var state_27823__$1 = (function (){var statearr_27869 = state_27823;
(statearr_27869[(30)] = inst_27757);

return statearr_27869;
})();
if(cljs.core.truth_(inst_27758)){
var statearr_27870_27944 = state_27823__$1;
(statearr_27870_27944[(1)] = (26));

} else {
var statearr_27871_27945 = state_27823__$1;
(statearr_27871_27945[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (34))){
var inst_27792 = (state_27823[(2)]);
var state_27823__$1 = state_27823;
if(cljs.core.truth_(inst_27792)){
var statearr_27872_27946 = state_27823__$1;
(statearr_27872_27946[(1)] = (38));

} else {
var statearr_27873_27947 = state_27823__$1;
(statearr_27873_27947[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (17))){
var state_27823__$1 = state_27823;
var statearr_27874_27948 = state_27823__$1;
(statearr_27874_27948[(2)] = recompile_dependents);

(statearr_27874_27948[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (3))){
var state_27823__$1 = state_27823;
var statearr_27875_27949 = state_27823__$1;
(statearr_27875_27949[(2)] = null);

(statearr_27875_27949[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (12))){
var inst_27714 = (state_27823[(2)]);
var state_27823__$1 = state_27823;
var statearr_27876_27950 = state_27823__$1;
(statearr_27876_27950[(2)] = inst_27714);

(statearr_27876_27950[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (2))){
var inst_27676 = (state_27823[(13)]);
var inst_27683 = cljs.core.seq.call(null,inst_27676);
var inst_27684 = inst_27683;
var inst_27685 = null;
var inst_27686 = (0);
var inst_27687 = (0);
var state_27823__$1 = (function (){var statearr_27877 = state_27823;
(statearr_27877[(7)] = inst_27687);

(statearr_27877[(8)] = inst_27684);

(statearr_27877[(9)] = inst_27686);

(statearr_27877[(10)] = inst_27685);

return statearr_27877;
})();
var statearr_27878_27951 = state_27823__$1;
(statearr_27878_27951[(2)] = null);

(statearr_27878_27951[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (23))){
var inst_27741 = (state_27823[(23)]);
var inst_27745 = (state_27823[(24)]);
var inst_27743 = (state_27823[(26)]);
var inst_27740 = (state_27823[(25)]);
var inst_27737 = (state_27823[(19)]);
var inst_27748 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27750 = (function (){var all_files = inst_27737;
var res_SINGLEQUOTE_ = inst_27740;
var res = inst_27741;
var files_not_loaded = inst_27743;
var dependencies_that_loaded = inst_27745;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27741,inst_27745,inst_27743,inst_27740,inst_27737,inst_27748,state_val_27824,c__20605__auto__,map__27669,map__27669__$1,opts,before_jsload,on_jsload,reload_dependents,map__27670,map__27670__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27749){
var map__27879 = p__27749;
var map__27879__$1 = ((((!((map__27879 == null)))?((((map__27879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27879):map__27879);
var request_url = cljs.core.get.call(null,map__27879__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27741,inst_27745,inst_27743,inst_27740,inst_27737,inst_27748,state_val_27824,c__20605__auto__,map__27669,map__27669__$1,opts,before_jsload,on_jsload,reload_dependents,map__27670,map__27670__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27751 = cljs.core.reverse.call(null,inst_27745);
var inst_27752 = cljs.core.map.call(null,inst_27750,inst_27751);
var inst_27753 = cljs.core.pr_str.call(null,inst_27752);
var inst_27754 = figwheel.client.utils.log.call(null,inst_27753);
var state_27823__$1 = (function (){var statearr_27881 = state_27823;
(statearr_27881[(31)] = inst_27748);

return statearr_27881;
})();
var statearr_27882_27952 = state_27823__$1;
(statearr_27882_27952[(2)] = inst_27754);

(statearr_27882_27952[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (35))){
var state_27823__$1 = state_27823;
var statearr_27883_27953 = state_27823__$1;
(statearr_27883_27953[(2)] = true);

(statearr_27883_27953[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (19))){
var inst_27727 = (state_27823[(12)]);
var inst_27733 = figwheel.client.file_reloading.expand_files.call(null,inst_27727);
var state_27823__$1 = state_27823;
var statearr_27884_27954 = state_27823__$1;
(statearr_27884_27954[(2)] = inst_27733);

(statearr_27884_27954[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (11))){
var state_27823__$1 = state_27823;
var statearr_27885_27955 = state_27823__$1;
(statearr_27885_27955[(2)] = null);

(statearr_27885_27955[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (9))){
var inst_27716 = (state_27823[(2)]);
var state_27823__$1 = state_27823;
var statearr_27886_27956 = state_27823__$1;
(statearr_27886_27956[(2)] = inst_27716);

(statearr_27886_27956[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (5))){
var inst_27687 = (state_27823[(7)]);
var inst_27686 = (state_27823[(9)]);
var inst_27689 = (inst_27687 < inst_27686);
var inst_27690 = inst_27689;
var state_27823__$1 = state_27823;
if(cljs.core.truth_(inst_27690)){
var statearr_27887_27957 = state_27823__$1;
(statearr_27887_27957[(1)] = (7));

} else {
var statearr_27888_27958 = state_27823__$1;
(statearr_27888_27958[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (14))){
var inst_27697 = (state_27823[(22)]);
var inst_27706 = cljs.core.first.call(null,inst_27697);
var inst_27707 = figwheel.client.file_reloading.eval_body.call(null,inst_27706,opts);
var inst_27708 = cljs.core.next.call(null,inst_27697);
var inst_27684 = inst_27708;
var inst_27685 = null;
var inst_27686 = (0);
var inst_27687 = (0);
var state_27823__$1 = (function (){var statearr_27889 = state_27823;
(statearr_27889[(7)] = inst_27687);

(statearr_27889[(8)] = inst_27684);

(statearr_27889[(32)] = inst_27707);

(statearr_27889[(9)] = inst_27686);

(statearr_27889[(10)] = inst_27685);

return statearr_27889;
})();
var statearr_27890_27959 = state_27823__$1;
(statearr_27890_27959[(2)] = null);

(statearr_27890_27959[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (45))){
var state_27823__$1 = state_27823;
var statearr_27891_27960 = state_27823__$1;
(statearr_27891_27960[(2)] = null);

(statearr_27891_27960[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (26))){
var inst_27741 = (state_27823[(23)]);
var inst_27745 = (state_27823[(24)]);
var inst_27743 = (state_27823[(26)]);
var inst_27740 = (state_27823[(25)]);
var inst_27737 = (state_27823[(19)]);
var inst_27760 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27762 = (function (){var all_files = inst_27737;
var res_SINGLEQUOTE_ = inst_27740;
var res = inst_27741;
var files_not_loaded = inst_27743;
var dependencies_that_loaded = inst_27745;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27741,inst_27745,inst_27743,inst_27740,inst_27737,inst_27760,state_val_27824,c__20605__auto__,map__27669,map__27669__$1,opts,before_jsload,on_jsload,reload_dependents,map__27670,map__27670__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27761){
var map__27892 = p__27761;
var map__27892__$1 = ((((!((map__27892 == null)))?((((map__27892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27892):map__27892);
var namespace = cljs.core.get.call(null,map__27892__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27892__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27741,inst_27745,inst_27743,inst_27740,inst_27737,inst_27760,state_val_27824,c__20605__auto__,map__27669,map__27669__$1,opts,before_jsload,on_jsload,reload_dependents,map__27670,map__27670__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27763 = cljs.core.map.call(null,inst_27762,inst_27741);
var inst_27764 = cljs.core.pr_str.call(null,inst_27763);
var inst_27765 = figwheel.client.utils.log.call(null,inst_27764);
var inst_27766 = (function (){var all_files = inst_27737;
var res_SINGLEQUOTE_ = inst_27740;
var res = inst_27741;
var files_not_loaded = inst_27743;
var dependencies_that_loaded = inst_27745;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27741,inst_27745,inst_27743,inst_27740,inst_27737,inst_27760,inst_27762,inst_27763,inst_27764,inst_27765,state_val_27824,c__20605__auto__,map__27669,map__27669__$1,opts,before_jsload,on_jsload,reload_dependents,map__27670,map__27670__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27741,inst_27745,inst_27743,inst_27740,inst_27737,inst_27760,inst_27762,inst_27763,inst_27764,inst_27765,state_val_27824,c__20605__auto__,map__27669,map__27669__$1,opts,before_jsload,on_jsload,reload_dependents,map__27670,map__27670__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27767 = setTimeout(inst_27766,(10));
var state_27823__$1 = (function (){var statearr_27894 = state_27823;
(statearr_27894[(33)] = inst_27760);

(statearr_27894[(34)] = inst_27765);

return statearr_27894;
})();
var statearr_27895_27961 = state_27823__$1;
(statearr_27895_27961[(2)] = inst_27767);

(statearr_27895_27961[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (16))){
var state_27823__$1 = state_27823;
var statearr_27896_27962 = state_27823__$1;
(statearr_27896_27962[(2)] = reload_dependents);

(statearr_27896_27962[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (38))){
var inst_27777 = (state_27823[(16)]);
var inst_27794 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27777);
var state_27823__$1 = state_27823;
var statearr_27897_27963 = state_27823__$1;
(statearr_27897_27963[(2)] = inst_27794);

(statearr_27897_27963[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (30))){
var state_27823__$1 = state_27823;
var statearr_27898_27964 = state_27823__$1;
(statearr_27898_27964[(2)] = null);

(statearr_27898_27964[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (10))){
var inst_27697 = (state_27823[(22)]);
var inst_27699 = cljs.core.chunked_seq_QMARK_.call(null,inst_27697);
var state_27823__$1 = state_27823;
if(inst_27699){
var statearr_27899_27965 = state_27823__$1;
(statearr_27899_27965[(1)] = (13));

} else {
var statearr_27900_27966 = state_27823__$1;
(statearr_27900_27966[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (18))){
var inst_27731 = (state_27823[(2)]);
var state_27823__$1 = state_27823;
if(cljs.core.truth_(inst_27731)){
var statearr_27901_27967 = state_27823__$1;
(statearr_27901_27967[(1)] = (19));

} else {
var statearr_27902_27968 = state_27823__$1;
(statearr_27902_27968[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (42))){
var state_27823__$1 = state_27823;
var statearr_27903_27969 = state_27823__$1;
(statearr_27903_27969[(2)] = null);

(statearr_27903_27969[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (37))){
var inst_27789 = (state_27823[(2)]);
var state_27823__$1 = state_27823;
var statearr_27904_27970 = state_27823__$1;
(statearr_27904_27970[(2)] = inst_27789);

(statearr_27904_27970[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27824 === (8))){
var inst_27684 = (state_27823[(8)]);
var inst_27697 = (state_27823[(22)]);
var inst_27697__$1 = cljs.core.seq.call(null,inst_27684);
var state_27823__$1 = (function (){var statearr_27905 = state_27823;
(statearr_27905[(22)] = inst_27697__$1);

return statearr_27905;
})();
if(inst_27697__$1){
var statearr_27906_27971 = state_27823__$1;
(statearr_27906_27971[(1)] = (10));

} else {
var statearr_27907_27972 = state_27823__$1;
(statearr_27907_27972[(1)] = (11));

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
});})(c__20605__auto__,map__27669,map__27669__$1,opts,before_jsload,on_jsload,reload_dependents,map__27670,map__27670__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20540__auto__,c__20605__auto__,map__27669,map__27669__$1,opts,before_jsload,on_jsload,reload_dependents,map__27670,map__27670__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20541__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20541__auto____0 = (function (){
var statearr_27911 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27911[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20541__auto__);

(statearr_27911[(1)] = (1));

return statearr_27911;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20541__auto____1 = (function (state_27823){
while(true){
var ret_value__20542__auto__ = (function (){try{while(true){
var result__20543__auto__ = switch__20540__auto__.call(null,state_27823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20543__auto__;
}
break;
}
}catch (e27912){if((e27912 instanceof Object)){
var ex__20544__auto__ = e27912;
var statearr_27913_27973 = state_27823;
(statearr_27913_27973[(5)] = ex__20544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27974 = state_27823;
state_27823 = G__27974;
continue;
} else {
return ret_value__20542__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20541__auto__ = function(state_27823){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20541__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20541__auto____1.call(this,state_27823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20541__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20541__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20541__auto__;
})()
;})(switch__20540__auto__,c__20605__auto__,map__27669,map__27669__$1,opts,before_jsload,on_jsload,reload_dependents,map__27670,map__27670__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20607__auto__ = (function (){var statearr_27914 = f__20606__auto__.call(null);
(statearr_27914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20605__auto__);

return statearr_27914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20607__auto__);
});})(c__20605__auto__,map__27669,map__27669__$1,opts,before_jsload,on_jsload,reload_dependents,map__27670,map__27670__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20605__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27977,link){
var map__27980 = p__27977;
var map__27980__$1 = ((((!((map__27980 == null)))?((((map__27980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27980):map__27980);
var file = cljs.core.get.call(null,map__27980__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__27980,map__27980__$1,file){
return (function (p1__27975_SHARP_,p2__27976_SHARP_){
if(cljs.core._EQ_.call(null,p1__27975_SHARP_,p2__27976_SHARP_)){
return p1__27975_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__27980,map__27980__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27986){
var map__27987 = p__27986;
var map__27987__$1 = ((((!((map__27987 == null)))?((((map__27987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27987):map__27987);
var match_length = cljs.core.get.call(null,map__27987__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27987__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27982_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27982_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args27989 = [];
var len__17378__auto___27992 = arguments.length;
var i__17379__auto___27993 = (0);
while(true){
if((i__17379__auto___27993 < len__17378__auto___27992)){
args27989.push((arguments[i__17379__auto___27993]));

var G__27994 = (i__17379__auto___27993 + (1));
i__17379__auto___27993 = G__27994;
continue;
} else {
}
break;
}

var G__27991 = args27989.length;
switch (G__27991) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27989.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27996_SHARP_,p2__27997_SHARP_){
return cljs.core.assoc.call(null,p1__27996_SHARP_,cljs.core.get.call(null,p2__27997_SHARP_,key),p2__27997_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27998){
var map__28001 = p__27998;
var map__28001__$1 = ((((!((map__28001 == null)))?((((map__28001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28001):map__28001);
var f_data = map__28001__$1;
var file = cljs.core.get.call(null,map__28001__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28003,files_msg){
var map__28010 = p__28003;
var map__28010__$1 = ((((!((map__28010 == null)))?((((map__28010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28010):map__28010);
var opts = map__28010__$1;
var on_cssload = cljs.core.get.call(null,map__28010__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28012_28016 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28013_28017 = null;
var count__28014_28018 = (0);
var i__28015_28019 = (0);
while(true){
if((i__28015_28019 < count__28014_28018)){
var f_28020 = cljs.core._nth.call(null,chunk__28013_28017,i__28015_28019);
figwheel.client.file_reloading.reload_css_file.call(null,f_28020);

var G__28021 = seq__28012_28016;
var G__28022 = chunk__28013_28017;
var G__28023 = count__28014_28018;
var G__28024 = (i__28015_28019 + (1));
seq__28012_28016 = G__28021;
chunk__28013_28017 = G__28022;
count__28014_28018 = G__28023;
i__28015_28019 = G__28024;
continue;
} else {
var temp__4425__auto___28025 = cljs.core.seq.call(null,seq__28012_28016);
if(temp__4425__auto___28025){
var seq__28012_28026__$1 = temp__4425__auto___28025;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28012_28026__$1)){
var c__17123__auto___28027 = cljs.core.chunk_first.call(null,seq__28012_28026__$1);
var G__28028 = cljs.core.chunk_rest.call(null,seq__28012_28026__$1);
var G__28029 = c__17123__auto___28027;
var G__28030 = cljs.core.count.call(null,c__17123__auto___28027);
var G__28031 = (0);
seq__28012_28016 = G__28028;
chunk__28013_28017 = G__28029;
count__28014_28018 = G__28030;
i__28015_28019 = G__28031;
continue;
} else {
var f_28032 = cljs.core.first.call(null,seq__28012_28026__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28032);

var G__28033 = cljs.core.next.call(null,seq__28012_28026__$1);
var G__28034 = null;
var G__28035 = (0);
var G__28036 = (0);
seq__28012_28016 = G__28033;
chunk__28013_28017 = G__28034;
count__28014_28018 = G__28035;
i__28015_28019 = G__28036;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__28010,map__28010__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__28010,map__28010__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1444180413991