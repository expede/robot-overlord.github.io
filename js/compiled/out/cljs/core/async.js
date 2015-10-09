// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async28103 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28103 = (function (fn_handler,f,meta28104){
this.fn_handler = fn_handler;
this.f = f;
this.meta28104 = meta28104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28105,meta28104__$1){
var self__ = this;
var _28105__$1 = this;
return (new cljs.core.async.t_cljs$core$async28103(self__.fn_handler,self__.f,meta28104__$1));
});

cljs.core.async.t_cljs$core$async28103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28105){
var self__ = this;
var _28105__$1 = this;
return self__.meta28104;
});

cljs.core.async.t_cljs$core$async28103.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28103.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28103.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta28104","meta28104",608644221,null)], null);
});

cljs.core.async.t_cljs$core$async28103.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28103";

cljs.core.async.t_cljs$core$async28103.cljs$lang$ctorPrWriter = (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async28103");
});

cljs.core.async.__GT_t_cljs$core$async28103 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async28103(fn_handler__$1,f__$1,meta28104){
return (new cljs.core.async.t_cljs$core$async28103(fn_handler__$1,f__$1,meta28104));
});

}

return (new cljs.core.async.t_cljs$core$async28103(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args28108 = [];
var len__17378__auto___28111 = arguments.length;
var i__17379__auto___28112 = (0);
while(true){
if((i__17379__auto___28112 < len__17378__auto___28111)){
args28108.push((arguments[i__17379__auto___28112]));

var G__28113 = (i__17379__auto___28112 + (1));
i__17379__auto___28112 = G__28113;
continue;
} else {
}
break;
}

var G__28110 = args28108.length;
switch (G__28110) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28108.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args28115 = [];
var len__17378__auto___28118 = arguments.length;
var i__17379__auto___28119 = (0);
while(true){
if((i__17379__auto___28119 < len__17378__auto___28118)){
args28115.push((arguments[i__17379__auto___28119]));

var G__28120 = (i__17379__auto___28119 + (1));
i__17379__auto___28119 = G__28120;
continue;
} else {
}
break;
}

var G__28117 = args28115.length;
switch (G__28117) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28115.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28122 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28122);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28122,ret){
return (function (){
return fn1.call(null,val_28122);
});})(val_28122,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args28123 = [];
var len__17378__auto___28126 = arguments.length;
var i__17379__auto___28127 = (0);
while(true){
if((i__17379__auto___28127 < len__17378__auto___28126)){
args28123.push((arguments[i__17379__auto___28127]));

var G__28128 = (i__17379__auto___28127 + (1));
i__17379__auto___28127 = G__28128;
continue;
} else {
}
break;
}

var G__28125 = args28123.length;
switch (G__28125) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28123.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17223__auto___28130 = n;
var x_28131 = (0);
while(true){
if((x_28131 < n__17223__auto___28130)){
(a[x_28131] = (0));

var G__28132 = (x_28131 + (1));
x_28131 = G__28132;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28133 = (i + (1));
i = G__28133;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28137 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28137 = (function (alt_flag,flag,meta28138){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28138 = meta28138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28139,meta28138__$1){
var self__ = this;
var _28139__$1 = this;
return (new cljs.core.async.t_cljs$core$async28137(self__.alt_flag,self__.flag,meta28138__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28137.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28139){
var self__ = this;
var _28139__$1 = this;
return self__.meta28138;
});})(flag))
;

cljs.core.async.t_cljs$core$async28137.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28137.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28137.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28137.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28138","meta28138",698641462,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28137.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28137";

cljs.core.async.t_cljs$core$async28137.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async28137");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28137 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28137(alt_flag__$1,flag__$1,meta28138){
return (new cljs.core.async.t_cljs$core$async28137(alt_flag__$1,flag__$1,meta28138));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28137(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28143 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28143 = (function (alt_handler,flag,cb,meta28144){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28144 = meta28144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28145,meta28144__$1){
var self__ = this;
var _28145__$1 = this;
return (new cljs.core.async.t_cljs$core$async28143(self__.alt_handler,self__.flag,self__.cb,meta28144__$1));
});

cljs.core.async.t_cljs$core$async28143.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28145){
var self__ = this;
var _28145__$1 = this;
return self__.meta28144;
});

cljs.core.async.t_cljs$core$async28143.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28143.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28143.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28143.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28144","meta28144",913796641,null)], null);
});

cljs.core.async.t_cljs$core$async28143.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28143.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28143";

cljs.core.async.t_cljs$core$async28143.cljs$lang$ctorPrWriter = (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async28143");
});

cljs.core.async.__GT_t_cljs$core$async28143 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28143(alt_handler__$1,flag__$1,cb__$1,meta28144){
return (new cljs.core.async.t_cljs$core$async28143(alt_handler__$1,flag__$1,cb__$1,meta28144));
});

}

return (new cljs.core.async.t_cljs$core$async28143(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28146_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28146_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28147_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28147_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16320__auto__ = wport;
if(cljs.core.truth_(or__16320__auto__)){
return or__16320__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28148 = (i + (1));
i = G__28148;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16320__auto__ = ret;
if(cljs.core.truth_(or__16320__auto__)){
return or__16320__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16308__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16308__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16308__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17385__auto__ = [];
var len__17378__auto___28154 = arguments.length;
var i__17379__auto___28155 = (0);
while(true){
if((i__17379__auto___28155 < len__17378__auto___28154)){
args__17385__auto__.push((arguments[i__17379__auto___28155]));

var G__28156 = (i__17379__auto___28155 + (1));
i__17379__auto___28155 = G__28156;
continue;
} else {
}
break;
}

var argseq__17386__auto__ = ((((1) < args__17385__auto__.length))?(new cljs.core.IndexedSeq(args__17385__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17386__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28151){
var map__28152 = p__28151;
var map__28152__$1 = ((((!((map__28152 == null)))?((((map__28152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28152):map__28152);
var opts = map__28152__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28149){
var G__28150 = cljs.core.first.call(null,seq28149);
var seq28149__$1 = cljs.core.next.call(null,seq28149);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28150,seq28149__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args28157 = [];
var len__17378__auto___28207 = arguments.length;
var i__17379__auto___28208 = (0);
while(true){
if((i__17379__auto___28208 < len__17378__auto___28207)){
args28157.push((arguments[i__17379__auto___28208]));

var G__28209 = (i__17379__auto___28208 + (1));
i__17379__auto___28208 = G__28209;
continue;
} else {
}
break;
}

var G__28159 = args28157.length;
switch (G__28159) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28157.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20605__auto___28211 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20605__auto___28211){
return (function (){
var f__20606__auto__ = (function (){var switch__20540__auto__ = ((function (c__20605__auto___28211){
return (function (state_28183){
var state_val_28184 = (state_28183[(1)]);
if((state_val_28184 === (7))){
var inst_28179 = (state_28183[(2)]);
var state_28183__$1 = state_28183;
var statearr_28185_28212 = state_28183__$1;
(statearr_28185_28212[(2)] = inst_28179);

(statearr_28185_28212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (1))){
var state_28183__$1 = state_28183;
var statearr_28186_28213 = state_28183__$1;
(statearr_28186_28213[(2)] = null);

(statearr_28186_28213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (4))){
var inst_28162 = (state_28183[(7)]);
var inst_28162__$1 = (state_28183[(2)]);
var inst_28163 = (inst_28162__$1 == null);
var state_28183__$1 = (function (){var statearr_28187 = state_28183;
(statearr_28187[(7)] = inst_28162__$1);

return statearr_28187;
})();
if(cljs.core.truth_(inst_28163)){
var statearr_28188_28214 = state_28183__$1;
(statearr_28188_28214[(1)] = (5));

} else {
var statearr_28189_28215 = state_28183__$1;
(statearr_28189_28215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (13))){
var state_28183__$1 = state_28183;
var statearr_28190_28216 = state_28183__$1;
(statearr_28190_28216[(2)] = null);

(statearr_28190_28216[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (6))){
var inst_28162 = (state_28183[(7)]);
var state_28183__$1 = state_28183;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28183__$1,(11),to,inst_28162);
} else {
if((state_val_28184 === (3))){
var inst_28181 = (state_28183[(2)]);
var state_28183__$1 = state_28183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28183__$1,inst_28181);
} else {
if((state_val_28184 === (12))){
var state_28183__$1 = state_28183;
var statearr_28191_28217 = state_28183__$1;
(statearr_28191_28217[(2)] = null);

(statearr_28191_28217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (2))){
var state_28183__$1 = state_28183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28183__$1,(4),from);
} else {
if((state_val_28184 === (11))){
var inst_28172 = (state_28183[(2)]);
var state_28183__$1 = state_28183;
if(cljs.core.truth_(inst_28172)){
var statearr_28192_28218 = state_28183__$1;
(statearr_28192_28218[(1)] = (12));

} else {
var statearr_28193_28219 = state_28183__$1;
(statearr_28193_28219[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (9))){
var state_28183__$1 = state_28183;
var statearr_28194_28220 = state_28183__$1;
(statearr_28194_28220[(2)] = null);

(statearr_28194_28220[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (5))){
var state_28183__$1 = state_28183;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28195_28221 = state_28183__$1;
(statearr_28195_28221[(1)] = (8));

} else {
var statearr_28196_28222 = state_28183__$1;
(statearr_28196_28222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (14))){
var inst_28177 = (state_28183[(2)]);
var state_28183__$1 = state_28183;
var statearr_28197_28223 = state_28183__$1;
(statearr_28197_28223[(2)] = inst_28177);

(statearr_28197_28223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (10))){
var inst_28169 = (state_28183[(2)]);
var state_28183__$1 = state_28183;
var statearr_28198_28224 = state_28183__$1;
(statearr_28198_28224[(2)] = inst_28169);

(statearr_28198_28224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (8))){
var inst_28166 = cljs.core.async.close_BANG_.call(null,to);
var state_28183__$1 = state_28183;
var statearr_28199_28225 = state_28183__$1;
(statearr_28199_28225[(2)] = inst_28166);

(statearr_28199_28225[(1)] = (10));


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
});})(c__20605__auto___28211))
;
return ((function (switch__20540__auto__,c__20605__auto___28211){
return (function() {
var cljs$core$async$state_machine__20541__auto__ = null;
var cljs$core$async$state_machine__20541__auto____0 = (function (){
var statearr_28203 = [null,null,null,null,null,null,null,null];
(statearr_28203[(0)] = cljs$core$async$state_machine__20541__auto__);

(statearr_28203[(1)] = (1));

return statearr_28203;
});
var cljs$core$async$state_machine__20541__auto____1 = (function (state_28183){
while(true){
var ret_value__20542__auto__ = (function (){try{while(true){
var result__20543__auto__ = switch__20540__auto__.call(null,state_28183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20543__auto__;
}
break;
}
}catch (e28204){if((e28204 instanceof Object)){
var ex__20544__auto__ = e28204;
var statearr_28205_28226 = state_28183;
(statearr_28205_28226[(5)] = ex__20544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28227 = state_28183;
state_28183 = G__28227;
continue;
} else {
return ret_value__20542__auto__;
}
break;
}
});
cljs$core$async$state_machine__20541__auto__ = function(state_28183){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20541__auto____1.call(this,state_28183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20541__auto____0;
cljs$core$async$state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20541__auto____1;
return cljs$core$async$state_machine__20541__auto__;
})()
;})(switch__20540__auto__,c__20605__auto___28211))
})();
var state__20607__auto__ = (function (){var statearr_28206 = f__20606__auto__.call(null);
(statearr_28206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20605__auto___28211);

return statearr_28206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20607__auto__);
});})(c__20605__auto___28211))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28411){
var vec__28412 = p__28411;
var v = cljs.core.nth.call(null,vec__28412,(0),null);
var p = cljs.core.nth.call(null,vec__28412,(1),null);
var job = vec__28412;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20605__auto___28594 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20605__auto___28594,res,vec__28412,v,p,job,jobs,results){
return (function (){
var f__20606__auto__ = (function (){var switch__20540__auto__ = ((function (c__20605__auto___28594,res,vec__28412,v,p,job,jobs,results){
return (function (state_28417){
var state_val_28418 = (state_28417[(1)]);
if((state_val_28418 === (1))){
var state_28417__$1 = state_28417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28417__$1,(2),res,v);
} else {
if((state_val_28418 === (2))){
var inst_28414 = (state_28417[(2)]);
var inst_28415 = cljs.core.async.close_BANG_.call(null,res);
var state_28417__$1 = (function (){var statearr_28419 = state_28417;
(statearr_28419[(7)] = inst_28414);

return statearr_28419;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28417__$1,inst_28415);
} else {
return null;
}
}
});})(c__20605__auto___28594,res,vec__28412,v,p,job,jobs,results))
;
return ((function (switch__20540__auto__,c__20605__auto___28594,res,vec__28412,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20541__auto____0 = (function (){
var statearr_28423 = [null,null,null,null,null,null,null,null];
(statearr_28423[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20541__auto__);

(statearr_28423[(1)] = (1));

return statearr_28423;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20541__auto____1 = (function (state_28417){
while(true){
var ret_value__20542__auto__ = (function (){try{while(true){
var result__20543__auto__ = switch__20540__auto__.call(null,state_28417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20543__auto__;
}
break;
}
}catch (e28424){if((e28424 instanceof Object)){
var ex__20544__auto__ = e28424;
var statearr_28425_28595 = state_28417;
(statearr_28425_28595[(5)] = ex__20544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28596 = state_28417;
state_28417 = G__28596;
continue;
} else {
return ret_value__20542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20541__auto__ = function(state_28417){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20541__auto____1.call(this,state_28417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20541__auto__;
})()
;})(switch__20540__auto__,c__20605__auto___28594,res,vec__28412,v,p,job,jobs,results))
})();
var state__20607__auto__ = (function (){var statearr_28426 = f__20606__auto__.call(null);
(statearr_28426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20605__auto___28594);

return statearr_28426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20607__auto__);
});})(c__20605__auto___28594,res,vec__28412,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28427){
var vec__28428 = p__28427;
var v = cljs.core.nth.call(null,vec__28428,(0),null);
var p = cljs.core.nth.call(null,vec__28428,(1),null);
var job = vec__28428;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17223__auto___28597 = n;
var __28598 = (0);
while(true){
if((__28598 < n__17223__auto___28597)){
var G__28429_28599 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28429_28599) {
case "compute":
var c__20605__auto___28601 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28598,c__20605__auto___28601,G__28429_28599,n__17223__auto___28597,jobs,results,process,async){
return (function (){
var f__20606__auto__ = (function (){var switch__20540__auto__ = ((function (__28598,c__20605__auto___28601,G__28429_28599,n__17223__auto___28597,jobs,results,process,async){
return (function (state_28442){
var state_val_28443 = (state_28442[(1)]);
if((state_val_28443 === (1))){
var state_28442__$1 = state_28442;
var statearr_28444_28602 = state_28442__$1;
(statearr_28444_28602[(2)] = null);

(statearr_28444_28602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28443 === (2))){
var state_28442__$1 = state_28442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28442__$1,(4),jobs);
} else {
if((state_val_28443 === (3))){
var inst_28440 = (state_28442[(2)]);
var state_28442__$1 = state_28442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28442__$1,inst_28440);
} else {
if((state_val_28443 === (4))){
var inst_28432 = (state_28442[(2)]);
var inst_28433 = process.call(null,inst_28432);
var state_28442__$1 = state_28442;
if(cljs.core.truth_(inst_28433)){
var statearr_28445_28603 = state_28442__$1;
(statearr_28445_28603[(1)] = (5));

} else {
var statearr_28446_28604 = state_28442__$1;
(statearr_28446_28604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28443 === (5))){
var state_28442__$1 = state_28442;
var statearr_28447_28605 = state_28442__$1;
(statearr_28447_28605[(2)] = null);

(statearr_28447_28605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28443 === (6))){
var state_28442__$1 = state_28442;
var statearr_28448_28606 = state_28442__$1;
(statearr_28448_28606[(2)] = null);

(statearr_28448_28606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28443 === (7))){
var inst_28438 = (state_28442[(2)]);
var state_28442__$1 = state_28442;
var statearr_28449_28607 = state_28442__$1;
(statearr_28449_28607[(2)] = inst_28438);

(statearr_28449_28607[(1)] = (3));


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
});})(__28598,c__20605__auto___28601,G__28429_28599,n__17223__auto___28597,jobs,results,process,async))
;
return ((function (__28598,switch__20540__auto__,c__20605__auto___28601,G__28429_28599,n__17223__auto___28597,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20541__auto____0 = (function (){
var statearr_28453 = [null,null,null,null,null,null,null];
(statearr_28453[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20541__auto__);

(statearr_28453[(1)] = (1));

return statearr_28453;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20541__auto____1 = (function (state_28442){
while(true){
var ret_value__20542__auto__ = (function (){try{while(true){
var result__20543__auto__ = switch__20540__auto__.call(null,state_28442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20543__auto__;
}
break;
}
}catch (e28454){if((e28454 instanceof Object)){
var ex__20544__auto__ = e28454;
var statearr_28455_28608 = state_28442;
(statearr_28455_28608[(5)] = ex__20544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28609 = state_28442;
state_28442 = G__28609;
continue;
} else {
return ret_value__20542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20541__auto__ = function(state_28442){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20541__auto____1.call(this,state_28442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20541__auto__;
})()
;})(__28598,switch__20540__auto__,c__20605__auto___28601,G__28429_28599,n__17223__auto___28597,jobs,results,process,async))
})();
var state__20607__auto__ = (function (){var statearr_28456 = f__20606__auto__.call(null);
(statearr_28456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20605__auto___28601);

return statearr_28456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20607__auto__);
});})(__28598,c__20605__auto___28601,G__28429_28599,n__17223__auto___28597,jobs,results,process,async))
);


break;
case "async":
var c__20605__auto___28610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28598,c__20605__auto___28610,G__28429_28599,n__17223__auto___28597,jobs,results,process,async){
return (function (){
var f__20606__auto__ = (function (){var switch__20540__auto__ = ((function (__28598,c__20605__auto___28610,G__28429_28599,n__17223__auto___28597,jobs,results,process,async){
return (function (state_28469){
var state_val_28470 = (state_28469[(1)]);
if((state_val_28470 === (1))){
var state_28469__$1 = state_28469;
var statearr_28471_28611 = state_28469__$1;
(statearr_28471_28611[(2)] = null);

(statearr_28471_28611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28470 === (2))){
var state_28469__$1 = state_28469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28469__$1,(4),jobs);
} else {
if((state_val_28470 === (3))){
var inst_28467 = (state_28469[(2)]);
var state_28469__$1 = state_28469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28469__$1,inst_28467);
} else {
if((state_val_28470 === (4))){
var inst_28459 = (state_28469[(2)]);
var inst_28460 = async.call(null,inst_28459);
var state_28469__$1 = state_28469;
if(cljs.core.truth_(inst_28460)){
var statearr_28472_28612 = state_28469__$1;
(statearr_28472_28612[(1)] = (5));

} else {
var statearr_28473_28613 = state_28469__$1;
(statearr_28473_28613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28470 === (5))){
var state_28469__$1 = state_28469;
var statearr_28474_28614 = state_28469__$1;
(statearr_28474_28614[(2)] = null);

(statearr_28474_28614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28470 === (6))){
var state_28469__$1 = state_28469;
var statearr_28475_28615 = state_28469__$1;
(statearr_28475_28615[(2)] = null);

(statearr_28475_28615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28470 === (7))){
var inst_28465 = (state_28469[(2)]);
var state_28469__$1 = state_28469;
var statearr_28476_28616 = state_28469__$1;
(statearr_28476_28616[(2)] = inst_28465);

(statearr_28476_28616[(1)] = (3));


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
});})(__28598,c__20605__auto___28610,G__28429_28599,n__17223__auto___28597,jobs,results,process,async))
;
return ((function (__28598,switch__20540__auto__,c__20605__auto___28610,G__28429_28599,n__17223__auto___28597,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20541__auto____0 = (function (){
var statearr_28480 = [null,null,null,null,null,null,null];
(statearr_28480[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20541__auto__);

(statearr_28480[(1)] = (1));

return statearr_28480;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20541__auto____1 = (function (state_28469){
while(true){
var ret_value__20542__auto__ = (function (){try{while(true){
var result__20543__auto__ = switch__20540__auto__.call(null,state_28469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20543__auto__;
}
break;
}
}catch (e28481){if((e28481 instanceof Object)){
var ex__20544__auto__ = e28481;
var statearr_28482_28617 = state_28469;
(statearr_28482_28617[(5)] = ex__20544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28618 = state_28469;
state_28469 = G__28618;
continue;
} else {
return ret_value__20542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20541__auto__ = function(state_28469){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20541__auto____1.call(this,state_28469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20541__auto__;
})()
;})(__28598,switch__20540__auto__,c__20605__auto___28610,G__28429_28599,n__17223__auto___28597,jobs,results,process,async))
})();
var state__20607__auto__ = (function (){var statearr_28483 = f__20606__auto__.call(null);
(statearr_28483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20605__auto___28610);

return statearr_28483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20607__auto__);
});})(__28598,c__20605__auto___28610,G__28429_28599,n__17223__auto___28597,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28619 = (__28598 + (1));
__28598 = G__28619;
continue;
} else {
}
break;
}

var c__20605__auto___28620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20605__auto___28620,jobs,results,process,async){
return (function (){
var f__20606__auto__ = (function (){var switch__20540__auto__ = ((function (c__20605__auto___28620,jobs,results,process,async){
return (function (state_28505){
var state_val_28506 = (state_28505[(1)]);
if((state_val_28506 === (1))){
var state_28505__$1 = state_28505;
var statearr_28507_28621 = state_28505__$1;
(statearr_28507_28621[(2)] = null);

(statearr_28507_28621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28506 === (2))){
var state_28505__$1 = state_28505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28505__$1,(4),from);
} else {
if((state_val_28506 === (3))){
var inst_28503 = (state_28505[(2)]);
var state_28505__$1 = state_28505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28505__$1,inst_28503);
} else {
if((state_val_28506 === (4))){
var inst_28486 = (state_28505[(7)]);
var inst_28486__$1 = (state_28505[(2)]);
var inst_28487 = (inst_28486__$1 == null);
var state_28505__$1 = (function (){var statearr_28508 = state_28505;
(statearr_28508[(7)] = inst_28486__$1);

return statearr_28508;
})();
if(cljs.core.truth_(inst_28487)){
var statearr_28509_28622 = state_28505__$1;
(statearr_28509_28622[(1)] = (5));

} else {
var statearr_28510_28623 = state_28505__$1;
(statearr_28510_28623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28506 === (5))){
var inst_28489 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28505__$1 = state_28505;
var statearr_28511_28624 = state_28505__$1;
(statearr_28511_28624[(2)] = inst_28489);

(statearr_28511_28624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28506 === (6))){
var inst_28491 = (state_28505[(8)]);
var inst_28486 = (state_28505[(7)]);
var inst_28491__$1 = cljs.core.async.chan.call(null,(1));
var inst_28492 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28493 = [inst_28486,inst_28491__$1];
var inst_28494 = (new cljs.core.PersistentVector(null,2,(5),inst_28492,inst_28493,null));
var state_28505__$1 = (function (){var statearr_28512 = state_28505;
(statearr_28512[(8)] = inst_28491__$1);

return statearr_28512;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28505__$1,(8),jobs,inst_28494);
} else {
if((state_val_28506 === (7))){
var inst_28501 = (state_28505[(2)]);
var state_28505__$1 = state_28505;
var statearr_28513_28625 = state_28505__$1;
(statearr_28513_28625[(2)] = inst_28501);

(statearr_28513_28625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28506 === (8))){
var inst_28491 = (state_28505[(8)]);
var inst_28496 = (state_28505[(2)]);
var state_28505__$1 = (function (){var statearr_28514 = state_28505;
(statearr_28514[(9)] = inst_28496);

return statearr_28514;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28505__$1,(9),results,inst_28491);
} else {
if((state_val_28506 === (9))){
var inst_28498 = (state_28505[(2)]);
var state_28505__$1 = (function (){var statearr_28515 = state_28505;
(statearr_28515[(10)] = inst_28498);

return statearr_28515;
})();
var statearr_28516_28626 = state_28505__$1;
(statearr_28516_28626[(2)] = null);

(statearr_28516_28626[(1)] = (2));


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
});})(c__20605__auto___28620,jobs,results,process,async))
;
return ((function (switch__20540__auto__,c__20605__auto___28620,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20541__auto____0 = (function (){
var statearr_28520 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28520[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20541__auto__);

(statearr_28520[(1)] = (1));

return statearr_28520;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20541__auto____1 = (function (state_28505){
while(true){
var ret_value__20542__auto__ = (function (){try{while(true){
var result__20543__auto__ = switch__20540__auto__.call(null,state_28505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20543__auto__;
}
break;
}
}catch (e28521){if((e28521 instanceof Object)){
var ex__20544__auto__ = e28521;
var statearr_28522_28627 = state_28505;
(statearr_28522_28627[(5)] = ex__20544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28628 = state_28505;
state_28505 = G__28628;
continue;
} else {
return ret_value__20542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20541__auto__ = function(state_28505){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20541__auto____1.call(this,state_28505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20541__auto__;
})()
;})(switch__20540__auto__,c__20605__auto___28620,jobs,results,process,async))
})();
var state__20607__auto__ = (function (){var statearr_28523 = f__20606__auto__.call(null);
(statearr_28523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20605__auto___28620);

return statearr_28523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20607__auto__);
});})(c__20605__auto___28620,jobs,results,process,async))
);


var c__20605__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20605__auto__,jobs,results,process,async){
return (function (){
var f__20606__auto__ = (function (){var switch__20540__auto__ = ((function (c__20605__auto__,jobs,results,process,async){
return (function (state_28561){
var state_val_28562 = (state_28561[(1)]);
if((state_val_28562 === (7))){
var inst_28557 = (state_28561[(2)]);
var state_28561__$1 = state_28561;
var statearr_28563_28629 = state_28561__$1;
(statearr_28563_28629[(2)] = inst_28557);

(statearr_28563_28629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (20))){
var state_28561__$1 = state_28561;
var statearr_28564_28630 = state_28561__$1;
(statearr_28564_28630[(2)] = null);

(statearr_28564_28630[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (1))){
var state_28561__$1 = state_28561;
var statearr_28565_28631 = state_28561__$1;
(statearr_28565_28631[(2)] = null);

(statearr_28565_28631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (4))){
var inst_28526 = (state_28561[(7)]);
var inst_28526__$1 = (state_28561[(2)]);
var inst_28527 = (inst_28526__$1 == null);
var state_28561__$1 = (function (){var statearr_28566 = state_28561;
(statearr_28566[(7)] = inst_28526__$1);

return statearr_28566;
})();
if(cljs.core.truth_(inst_28527)){
var statearr_28567_28632 = state_28561__$1;
(statearr_28567_28632[(1)] = (5));

} else {
var statearr_28568_28633 = state_28561__$1;
(statearr_28568_28633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (15))){
var inst_28539 = (state_28561[(8)]);
var state_28561__$1 = state_28561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28561__$1,(18),to,inst_28539);
} else {
if((state_val_28562 === (21))){
var inst_28552 = (state_28561[(2)]);
var state_28561__$1 = state_28561;
var statearr_28569_28634 = state_28561__$1;
(statearr_28569_28634[(2)] = inst_28552);

(statearr_28569_28634[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (13))){
var inst_28554 = (state_28561[(2)]);
var state_28561__$1 = (function (){var statearr_28570 = state_28561;
(statearr_28570[(9)] = inst_28554);

return statearr_28570;
})();
var statearr_28571_28635 = state_28561__$1;
(statearr_28571_28635[(2)] = null);

(statearr_28571_28635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (6))){
var inst_28526 = (state_28561[(7)]);
var state_28561__$1 = state_28561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28561__$1,(11),inst_28526);
} else {
if((state_val_28562 === (17))){
var inst_28547 = (state_28561[(2)]);
var state_28561__$1 = state_28561;
if(cljs.core.truth_(inst_28547)){
var statearr_28572_28636 = state_28561__$1;
(statearr_28572_28636[(1)] = (19));

} else {
var statearr_28573_28637 = state_28561__$1;
(statearr_28573_28637[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (3))){
var inst_28559 = (state_28561[(2)]);
var state_28561__$1 = state_28561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28561__$1,inst_28559);
} else {
if((state_val_28562 === (12))){
var inst_28536 = (state_28561[(10)]);
var state_28561__$1 = state_28561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28561__$1,(14),inst_28536);
} else {
if((state_val_28562 === (2))){
var state_28561__$1 = state_28561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28561__$1,(4),results);
} else {
if((state_val_28562 === (19))){
var state_28561__$1 = state_28561;
var statearr_28574_28638 = state_28561__$1;
(statearr_28574_28638[(2)] = null);

(statearr_28574_28638[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (11))){
var inst_28536 = (state_28561[(2)]);
var state_28561__$1 = (function (){var statearr_28575 = state_28561;
(statearr_28575[(10)] = inst_28536);

return statearr_28575;
})();
var statearr_28576_28639 = state_28561__$1;
(statearr_28576_28639[(2)] = null);

(statearr_28576_28639[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (9))){
var state_28561__$1 = state_28561;
var statearr_28577_28640 = state_28561__$1;
(statearr_28577_28640[(2)] = null);

(statearr_28577_28640[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (5))){
var state_28561__$1 = state_28561;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28578_28641 = state_28561__$1;
(statearr_28578_28641[(1)] = (8));

} else {
var statearr_28579_28642 = state_28561__$1;
(statearr_28579_28642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (14))){
var inst_28539 = (state_28561[(8)]);
var inst_28541 = (state_28561[(11)]);
var inst_28539__$1 = (state_28561[(2)]);
var inst_28540 = (inst_28539__$1 == null);
var inst_28541__$1 = cljs.core.not.call(null,inst_28540);
var state_28561__$1 = (function (){var statearr_28580 = state_28561;
(statearr_28580[(8)] = inst_28539__$1);

(statearr_28580[(11)] = inst_28541__$1);

return statearr_28580;
})();
if(inst_28541__$1){
var statearr_28581_28643 = state_28561__$1;
(statearr_28581_28643[(1)] = (15));

} else {
var statearr_28582_28644 = state_28561__$1;
(statearr_28582_28644[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (16))){
var inst_28541 = (state_28561[(11)]);
var state_28561__$1 = state_28561;
var statearr_28583_28645 = state_28561__$1;
(statearr_28583_28645[(2)] = inst_28541);

(statearr_28583_28645[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (10))){
var inst_28533 = (state_28561[(2)]);
var state_28561__$1 = state_28561;
var statearr_28584_28646 = state_28561__$1;
(statearr_28584_28646[(2)] = inst_28533);

(statearr_28584_28646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (18))){
var inst_28544 = (state_28561[(2)]);
var state_28561__$1 = state_28561;
var statearr_28585_28647 = state_28561__$1;
(statearr_28585_28647[(2)] = inst_28544);

(statearr_28585_28647[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (8))){
var inst_28530 = cljs.core.async.close_BANG_.call(null,to);
var state_28561__$1 = state_28561;
var statearr_28586_28648 = state_28561__$1;
(statearr_28586_28648[(2)] = inst_28530);

(statearr_28586_28648[(1)] = (10));


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
});})(c__20605__auto__,jobs,results,process,async))
;
return ((function (switch__20540__auto__,c__20605__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20541__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20541__auto____0 = (function (){
var statearr_28590 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28590[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20541__auto__);

(statearr_28590[(1)] = (1));

return statearr_28590;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20541__auto____1 = (function (state_28561){
while(true){
var ret_value__20542__auto__ = (function (){try{while(true){
var result__20543__auto__ = switch__20540__auto__.call(null,state_28561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20543__auto__;
}
break;
}
}catch (e28591){if((e28591 instanceof Object)){
var ex__20544__auto__ = e28591;
var statearr_28592_28649 = state_28561;
(statearr_28592_28649[(5)] = ex__20544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28650 = state_28561;
state_28561 = G__28650;
continue;
} else {
return ret_value__20542__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20541__auto__ = function(state_28561){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20541__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20541__auto____1.call(this,state_28561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20541__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20541__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20541__auto__;
})()
;})(switch__20540__auto__,c__20605__auto__,jobs,results,process,async))
})();
var state__20607__auto__ = (function (){var statearr_28593 = f__20606__auto__.call(null);
(statearr_28593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20605__auto__);

return statearr_28593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20607__auto__);
});})(c__20605__auto__,jobs,results,process,async))
);

return c__20605__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args28651 = [];
var len__17378__auto___28654 = arguments.length;
var i__17379__auto___28655 = (0);
while(true){
if((i__17379__auto___28655 < len__17378__auto___28654)){
args28651.push((arguments[i__17379__auto___28655]));

var G__28656 = (i__17379__auto___28655 + (1));
i__17379__auto___28655 = G__28656;
continue;
} else {
}
break;
}

var G__28653 = args28651.length;
switch (G__28653) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28651.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args28658 = [];
var len__17378__auto___28661 = arguments.length;
var i__17379__auto___28662 = (0);
while(true){
if((i__17379__auto___28662 < len__17378__auto___28661)){
args28658.push((arguments[i__17379__auto___28662]));

var G__28663 = (i__17379__auto___28662 + (1));
i__17379__auto___28662 = G__28663;
continue;
} else {
}
break;
}

var G__28660 = args28658.length;
switch (G__28660) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28658.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args28665 = [];
var len__17378__auto___28718 = arguments.length;
var i__17379__auto___28719 = (0);
while(true){
if((i__17379__auto___28719 < len__17378__auto___28718)){
args28665.push((arguments[i__17379__auto___28719]));

var G__28720 = (i__17379__auto___28719 + (1));
i__17379__auto___28719 = G__28720;
continue;
} else {
}
break;
}

var G__28667 = args28665.length;
switch (G__28667) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28665.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20605__auto___28722 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20605__auto___28722,tc,fc){
return (function (){
var f__20606__auto__ = (function (){var switch__20540__auto__ = ((function (c__20605__auto___28722,tc,fc){
return (function (state_28693){
var state_val_28694 = (state_28693[(1)]);
if((state_val_28694 === (7))){
var inst_28689 = (state_28693[(2)]);
var state_28693__$1 = state_28693;
var statearr_28695_28723 = state_28693__$1;
(statearr_28695_28723[(2)] = inst_28689);

(statearr_28695_28723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (1))){
var state_28693__$1 = state_28693;
var statearr_28696_28724 = state_28693__$1;
(statearr_28696_28724[(2)] = null);

(statearr_28696_28724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (4))){
var inst_28670 = (state_28693[(7)]);
var inst_28670__$1 = (state_28693[(2)]);
var inst_28671 = (inst_28670__$1 == null);
var state_28693__$1 = (function (){var statearr_28697 = state_28693;
(statearr_28697[(7)] = inst_28670__$1);

return statearr_28697;
})();
if(cljs.core.truth_(inst_28671)){
var statearr_28698_28725 = state_28693__$1;
(statearr_28698_28725[(1)] = (5));

} else {
var statearr_28699_28726 = state_28693__$1;
(statearr_28699_28726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (13))){
var state_28693__$1 = state_28693;
var statearr_28700_28727 = state_28693__$1;
(statearr_28700_28727[(2)] = null);

(statearr_28700_28727[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (6))){
var inst_28670 = (state_28693[(7)]);
var inst_28676 = p.call(null,inst_28670);
var state_28693__$1 = state_28693;
if(cljs.core.truth_(inst_28676)){
var statearr_28701_28728 = state_28693__$1;
(statearr_28701_28728[(1)] = (9));

} else {
var statearr_28702_28729 = state_28693__$1;
(statearr_28702_28729[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (3))){
var inst_28691 = (state_28693[(2)]);
var state_28693__$1 = state_28693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28693__$1,inst_28691);
} else {
if((state_val_28694 === (12))){
var state_28693__$1 = state_28693;
var statearr_28703_28730 = state_28693__$1;
(statearr_28703_28730[(2)] = null);

(statearr_28703_28730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (2))){
var state_28693__$1 = state_28693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28693__$1,(4),ch);
} else {
if((state_val_28694 === (11))){
var inst_28670 = (state_28693[(7)]);
var inst_28680 = (state_28693[(2)]);
var state_28693__$1 = state_28693;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28693__$1,(8),inst_28680,inst_28670);
} else {
if((state_val_28694 === (9))){
var state_28693__$1 = state_28693;
var statearr_28704_28731 = state_28693__$1;
(statearr_28704_28731[(2)] = tc);

(statearr_28704_28731[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (5))){
var inst_28673 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28674 = cljs.core.async.close_BANG_.call(null,fc);
var state_28693__$1 = (function (){var statearr_28705 = state_28693;
(statearr_28705[(8)] = inst_28673);

return statearr_28705;
})();
var statearr_28706_28732 = state_28693__$1;
(statearr_28706_28732[(2)] = inst_28674);

(statearr_28706_28732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (14))){
var inst_28687 = (state_28693[(2)]);
var state_28693__$1 = state_28693;
var statearr_28707_28733 = state_28693__$1;
(statearr_28707_28733[(2)] = inst_28687);

(statearr_28707_28733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (10))){
var state_28693__$1 = state_28693;
var statearr_28708_28734 = state_28693__$1;
(statearr_28708_28734[(2)] = fc);

(statearr_28708_28734[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (8))){
var inst_28682 = (state_28693[(2)]);
var state_28693__$1 = state_28693;
if(cljs.core.truth_(inst_28682)){
var statearr_28709_28735 = state_28693__$1;
(statearr_28709_28735[(1)] = (12));

} else {
var statearr_28710_28736 = state_28693__$1;
(statearr_28710_28736[(1)] = (13));

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
});})(c__20605__auto___28722,tc,fc))
;
return ((function (switch__20540__auto__,c__20605__auto___28722,tc,fc){
return (function() {
var cljs$core$async$state_machine__20541__auto__ = null;
var cljs$core$async$state_machine__20541__auto____0 = (function (){
var statearr_28714 = [null,null,null,null,null,null,null,null,null];
(statearr_28714[(0)] = cljs$core$async$state_machine__20541__auto__);

(statearr_28714[(1)] = (1));

return statearr_28714;
});
var cljs$core$async$state_machine__20541__auto____1 = (function (state_28693){
while(true){
var ret_value__20542__auto__ = (function (){try{while(true){
var result__20543__auto__ = switch__20540__auto__.call(null,state_28693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20543__auto__;
}
break;
}
}catch (e28715){if((e28715 instanceof Object)){
var ex__20544__auto__ = e28715;
var statearr_28716_28737 = state_28693;
(statearr_28716_28737[(5)] = ex__20544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28738 = state_28693;
state_28693 = G__28738;
continue;
} else {
return ret_value__20542__auto__;
}
break;
}
});
cljs$core$async$state_machine__20541__auto__ = function(state_28693){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20541__auto____1.call(this,state_28693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20541__auto____0;
cljs$core$async$state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20541__auto____1;
return cljs$core$async$state_machine__20541__auto__;
})()
;})(switch__20540__auto__,c__20605__auto___28722,tc,fc))
})();
var state__20607__auto__ = (function (){var statearr_28717 = f__20606__auto__.call(null);
(statearr_28717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20605__auto___28722);

return statearr_28717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20607__auto__);
});})(c__20605__auto___28722,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20605__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20605__auto__){
return (function (){
var f__20606__auto__ = (function (){var switch__20540__auto__ = ((function (c__20605__auto__){
return (function (state_28785){
var state_val_28786 = (state_28785[(1)]);
if((state_val_28786 === (1))){
var inst_28771 = init;
var state_28785__$1 = (function (){var statearr_28787 = state_28785;
(statearr_28787[(7)] = inst_28771);

return statearr_28787;
})();
var statearr_28788_28803 = state_28785__$1;
(statearr_28788_28803[(2)] = null);

(statearr_28788_28803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (2))){
var state_28785__$1 = state_28785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28785__$1,(4),ch);
} else {
if((state_val_28786 === (3))){
var inst_28783 = (state_28785[(2)]);
var state_28785__$1 = state_28785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28785__$1,inst_28783);
} else {
if((state_val_28786 === (4))){
var inst_28774 = (state_28785[(8)]);
var inst_28774__$1 = (state_28785[(2)]);
var inst_28775 = (inst_28774__$1 == null);
var state_28785__$1 = (function (){var statearr_28789 = state_28785;
(statearr_28789[(8)] = inst_28774__$1);

return statearr_28789;
})();
if(cljs.core.truth_(inst_28775)){
var statearr_28790_28804 = state_28785__$1;
(statearr_28790_28804[(1)] = (5));

} else {
var statearr_28791_28805 = state_28785__$1;
(statearr_28791_28805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (5))){
var inst_28771 = (state_28785[(7)]);
var state_28785__$1 = state_28785;
var statearr_28792_28806 = state_28785__$1;
(statearr_28792_28806[(2)] = inst_28771);

(statearr_28792_28806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (6))){
var inst_28771 = (state_28785[(7)]);
var inst_28774 = (state_28785[(8)]);
var inst_28778 = f.call(null,inst_28771,inst_28774);
var inst_28771__$1 = inst_28778;
var state_28785__$1 = (function (){var statearr_28793 = state_28785;
(statearr_28793[(7)] = inst_28771__$1);

return statearr_28793;
})();
var statearr_28794_28807 = state_28785__$1;
(statearr_28794_28807[(2)] = null);

(statearr_28794_28807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28786 === (7))){
var inst_28781 = (state_28785[(2)]);
var state_28785__$1 = state_28785;
var statearr_28795_28808 = state_28785__$1;
(statearr_28795_28808[(2)] = inst_28781);

(statearr_28795_28808[(1)] = (3));


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
});})(c__20605__auto__))
;
return ((function (switch__20540__auto__,c__20605__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20541__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20541__auto____0 = (function (){
var statearr_28799 = [null,null,null,null,null,null,null,null,null];
(statearr_28799[(0)] = cljs$core$async$reduce_$_state_machine__20541__auto__);

(statearr_28799[(1)] = (1));

return statearr_28799;
});
var cljs$core$async$reduce_$_state_machine__20541__auto____1 = (function (state_28785){
while(true){
var ret_value__20542__auto__ = (function (){try{while(true){
var result__20543__auto__ = switch__20540__auto__.call(null,state_28785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20543__auto__;
}
break;
}
}catch (e28800){if((e28800 instanceof Object)){
var ex__20544__auto__ = e28800;
var statearr_28801_28809 = state_28785;
(statearr_28801_28809[(5)] = ex__20544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28810 = state_28785;
state_28785 = G__28810;
continue;
} else {
return ret_value__20542__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20541__auto__ = function(state_28785){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20541__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20541__auto____1.call(this,state_28785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20541__auto____0;
cljs$core$async$reduce_$_state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20541__auto____1;
return cljs$core$async$reduce_$_state_machine__20541__auto__;
})()
;})(switch__20540__auto__,c__20605__auto__))
})();
var state__20607__auto__ = (function (){var statearr_28802 = f__20606__auto__.call(null);
(statearr_28802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20605__auto__);

return statearr_28802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20607__auto__);
});})(c__20605__auto__))
);

return c__20605__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args28811 = [];
var len__17378__auto___28863 = arguments.length;
var i__17379__auto___28864 = (0);
while(true){
if((i__17379__auto___28864 < len__17378__auto___28863)){
args28811.push((arguments[i__17379__auto___28864]));

var G__28865 = (i__17379__auto___28864 + (1));
i__17379__auto___28864 = G__28865;
continue;
} else {
}
break;
}

var G__28813 = args28811.length;
switch (G__28813) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28811.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20605__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20605__auto__){
return (function (){
var f__20606__auto__ = (function (){var switch__20540__auto__ = ((function (c__20605__auto__){
return (function (state_28838){
var state_val_28839 = (state_28838[(1)]);
if((state_val_28839 === (7))){
var inst_28820 = (state_28838[(2)]);
var state_28838__$1 = state_28838;
var statearr_28840_28867 = state_28838__$1;
(statearr_28840_28867[(2)] = inst_28820);

(statearr_28840_28867[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28839 === (1))){
var inst_28814 = cljs.core.seq.call(null,coll);
var inst_28815 = inst_28814;
var state_28838__$1 = (function (){var statearr_28841 = state_28838;
(statearr_28841[(7)] = inst_28815);

return statearr_28841;
})();
var statearr_28842_28868 = state_28838__$1;
(statearr_28842_28868[(2)] = null);

(statearr_28842_28868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28839 === (4))){
var inst_28815 = (state_28838[(7)]);
var inst_28818 = cljs.core.first.call(null,inst_28815);
var state_28838__$1 = state_28838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28838__$1,(7),ch,inst_28818);
} else {
if((state_val_28839 === (13))){
var inst_28832 = (state_28838[(2)]);
var state_28838__$1 = state_28838;
var statearr_28843_28869 = state_28838__$1;
(statearr_28843_28869[(2)] = inst_28832);

(statearr_28843_28869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28839 === (6))){
var inst_28823 = (state_28838[(2)]);
var state_28838__$1 = state_28838;
if(cljs.core.truth_(inst_28823)){
var statearr_28844_28870 = state_28838__$1;
(statearr_28844_28870[(1)] = (8));

} else {
var statearr_28845_28871 = state_28838__$1;
(statearr_28845_28871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28839 === (3))){
var inst_28836 = (state_28838[(2)]);
var state_28838__$1 = state_28838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28838__$1,inst_28836);
} else {
if((state_val_28839 === (12))){
var state_28838__$1 = state_28838;
var statearr_28846_28872 = state_28838__$1;
(statearr_28846_28872[(2)] = null);

(statearr_28846_28872[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28839 === (2))){
var inst_28815 = (state_28838[(7)]);
var state_28838__$1 = state_28838;
if(cljs.core.truth_(inst_28815)){
var statearr_28847_28873 = state_28838__$1;
(statearr_28847_28873[(1)] = (4));

} else {
var statearr_28848_28874 = state_28838__$1;
(statearr_28848_28874[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28839 === (11))){
var inst_28829 = cljs.core.async.close_BANG_.call(null,ch);
var state_28838__$1 = state_28838;
var statearr_28849_28875 = state_28838__$1;
(statearr_28849_28875[(2)] = inst_28829);

(statearr_28849_28875[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28839 === (9))){
var state_28838__$1 = state_28838;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28850_28876 = state_28838__$1;
(statearr_28850_28876[(1)] = (11));

} else {
var statearr_28851_28877 = state_28838__$1;
(statearr_28851_28877[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28839 === (5))){
var inst_28815 = (state_28838[(7)]);
var state_28838__$1 = state_28838;
var statearr_28852_28878 = state_28838__$1;
(statearr_28852_28878[(2)] = inst_28815);

(statearr_28852_28878[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28839 === (10))){
var inst_28834 = (state_28838[(2)]);
var state_28838__$1 = state_28838;
var statearr_28853_28879 = state_28838__$1;
(statearr_28853_28879[(2)] = inst_28834);

(statearr_28853_28879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28839 === (8))){
var inst_28815 = (state_28838[(7)]);
var inst_28825 = cljs.core.next.call(null,inst_28815);
var inst_28815__$1 = inst_28825;
var state_28838__$1 = (function (){var statearr_28854 = state_28838;
(statearr_28854[(7)] = inst_28815__$1);

return statearr_28854;
})();
var statearr_28855_28880 = state_28838__$1;
(statearr_28855_28880[(2)] = null);

(statearr_28855_28880[(1)] = (2));


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
});})(c__20605__auto__))
;
return ((function (switch__20540__auto__,c__20605__auto__){
return (function() {
var cljs$core$async$state_machine__20541__auto__ = null;
var cljs$core$async$state_machine__20541__auto____0 = (function (){
var statearr_28859 = [null,null,null,null,null,null,null,null];
(statearr_28859[(0)] = cljs$core$async$state_machine__20541__auto__);

(statearr_28859[(1)] = (1));

return statearr_28859;
});
var cljs$core$async$state_machine__20541__auto____1 = (function (state_28838){
while(true){
var ret_value__20542__auto__ = (function (){try{while(true){
var result__20543__auto__ = switch__20540__auto__.call(null,state_28838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20543__auto__;
}
break;
}
}catch (e28860){if((e28860 instanceof Object)){
var ex__20544__auto__ = e28860;
var statearr_28861_28881 = state_28838;
(statearr_28861_28881[(5)] = ex__20544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28882 = state_28838;
state_28838 = G__28882;
continue;
} else {
return ret_value__20542__auto__;
}
break;
}
});
cljs$core$async$state_machine__20541__auto__ = function(state_28838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20541__auto____1.call(this,state_28838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20541__auto____0;
cljs$core$async$state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20541__auto____1;
return cljs$core$async$state_machine__20541__auto__;
})()
;})(switch__20540__auto__,c__20605__auto__))
})();
var state__20607__auto__ = (function (){var statearr_28862 = f__20606__auto__.call(null);
(statearr_28862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20605__auto__);

return statearr_28862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20607__auto__);
});})(c__20605__auto__))
);

return c__20605__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16975__auto__ = (((_ == null))?null:_);
var m__16976__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16975__auto__)]);
if(!((m__16976__auto__ == null))){
return m__16976__auto__.call(null,_);
} else {
var m__16976__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__16976__auto____$1 == null))){
return m__16976__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16975__auto__ = (((m == null))?null:m);
var m__16976__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16975__auto__)]);
if(!((m__16976__auto__ == null))){
return m__16976__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__16976__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__16976__auto____$1 == null))){
return m__16976__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16975__auto__ = (((m == null))?null:m);
var m__16976__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16975__auto__)]);
if(!((m__16976__auto__ == null))){
return m__16976__auto__.call(null,m,ch);
} else {
var m__16976__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__16976__auto____$1 == null))){
return m__16976__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16975__auto__ = (((m == null))?null:m);
var m__16976__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16975__auto__)]);
if(!((m__16976__auto__ == null))){
return m__16976__auto__.call(null,m);
} else {
var m__16976__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__16976__auto____$1 == null))){
return m__16976__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29104 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29104 = (function (mult,ch,cs,meta29105){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29105 = meta29105;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29106,meta29105__$1){
var self__ = this;
var _29106__$1 = this;
return (new cljs.core.async.t_cljs$core$async29104(self__.mult,self__.ch,self__.cs,meta29105__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29104.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29106){
var self__ = this;
var _29106__$1 = this;
return self__.meta29105;
});})(cs))
;

cljs.core.async.t_cljs$core$async29104.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29104.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29104.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29104.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29104.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29104.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29104.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29105","meta29105",709602495,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29104.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29104.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29104";

cljs.core.async.t_cljs$core$async29104.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async29104");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29104 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29104(mult__$1,ch__$1,cs__$1,meta29105){
return (new cljs.core.async.t_cljs$core$async29104(mult__$1,ch__$1,cs__$1,meta29105));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29104(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20605__auto___29325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20605__auto___29325,cs,m,dchan,dctr,done){
return (function (){
var f__20606__auto__ = (function (){var switch__20540__auto__ = ((function (c__20605__auto___29325,cs,m,dchan,dctr,done){
return (function (state_29237){
var state_val_29238 = (state_29237[(1)]);
if((state_val_29238 === (7))){
var inst_29233 = (state_29237[(2)]);
var state_29237__$1 = state_29237;
var statearr_29239_29326 = state_29237__$1;
(statearr_29239_29326[(2)] = inst_29233);

(statearr_29239_29326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (20))){
var inst_29138 = (state_29237[(7)]);
var inst_29148 = cljs.core.first.call(null,inst_29138);
var inst_29149 = cljs.core.nth.call(null,inst_29148,(0),null);
var inst_29150 = cljs.core.nth.call(null,inst_29148,(1),null);
var state_29237__$1 = (function (){var statearr_29240 = state_29237;
(statearr_29240[(8)] = inst_29149);

return statearr_29240;
})();
if(cljs.core.truth_(inst_29150)){
var statearr_29241_29327 = state_29237__$1;
(statearr_29241_29327[(1)] = (22));

} else {
var statearr_29242_29328 = state_29237__$1;
(statearr_29242_29328[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (27))){
var inst_29109 = (state_29237[(9)]);
var inst_29178 = (state_29237[(10)]);
var inst_29180 = (state_29237[(11)]);
var inst_29185 = (state_29237[(12)]);
var inst_29185__$1 = cljs.core._nth.call(null,inst_29178,inst_29180);
var inst_29186 = cljs.core.async.put_BANG_.call(null,inst_29185__$1,inst_29109,done);
var state_29237__$1 = (function (){var statearr_29243 = state_29237;
(statearr_29243[(12)] = inst_29185__$1);

return statearr_29243;
})();
if(cljs.core.truth_(inst_29186)){
var statearr_29244_29329 = state_29237__$1;
(statearr_29244_29329[(1)] = (30));

} else {
var statearr_29245_29330 = state_29237__$1;
(statearr_29245_29330[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (1))){
var state_29237__$1 = state_29237;
var statearr_29246_29331 = state_29237__$1;
(statearr_29246_29331[(2)] = null);

(statearr_29246_29331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (24))){
var inst_29138 = (state_29237[(7)]);
var inst_29155 = (state_29237[(2)]);
var inst_29156 = cljs.core.next.call(null,inst_29138);
var inst_29118 = inst_29156;
var inst_29119 = null;
var inst_29120 = (0);
var inst_29121 = (0);
var state_29237__$1 = (function (){var statearr_29247 = state_29237;
(statearr_29247[(13)] = inst_29155);

(statearr_29247[(14)] = inst_29119);

(statearr_29247[(15)] = inst_29121);

(statearr_29247[(16)] = inst_29118);

(statearr_29247[(17)] = inst_29120);

return statearr_29247;
})();
var statearr_29248_29332 = state_29237__$1;
(statearr_29248_29332[(2)] = null);

(statearr_29248_29332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (39))){
var state_29237__$1 = state_29237;
var statearr_29252_29333 = state_29237__$1;
(statearr_29252_29333[(2)] = null);

(statearr_29252_29333[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (4))){
var inst_29109 = (state_29237[(9)]);
var inst_29109__$1 = (state_29237[(2)]);
var inst_29110 = (inst_29109__$1 == null);
var state_29237__$1 = (function (){var statearr_29253 = state_29237;
(statearr_29253[(9)] = inst_29109__$1);

return statearr_29253;
})();
if(cljs.core.truth_(inst_29110)){
var statearr_29254_29334 = state_29237__$1;
(statearr_29254_29334[(1)] = (5));

} else {
var statearr_29255_29335 = state_29237__$1;
(statearr_29255_29335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (15))){
var inst_29119 = (state_29237[(14)]);
var inst_29121 = (state_29237[(15)]);
var inst_29118 = (state_29237[(16)]);
var inst_29120 = (state_29237[(17)]);
var inst_29134 = (state_29237[(2)]);
var inst_29135 = (inst_29121 + (1));
var tmp29249 = inst_29119;
var tmp29250 = inst_29118;
var tmp29251 = inst_29120;
var inst_29118__$1 = tmp29250;
var inst_29119__$1 = tmp29249;
var inst_29120__$1 = tmp29251;
var inst_29121__$1 = inst_29135;
var state_29237__$1 = (function (){var statearr_29256 = state_29237;
(statearr_29256[(14)] = inst_29119__$1);

(statearr_29256[(15)] = inst_29121__$1);

(statearr_29256[(16)] = inst_29118__$1);

(statearr_29256[(18)] = inst_29134);

(statearr_29256[(17)] = inst_29120__$1);

return statearr_29256;
})();
var statearr_29257_29336 = state_29237__$1;
(statearr_29257_29336[(2)] = null);

(statearr_29257_29336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (21))){
var inst_29159 = (state_29237[(2)]);
var state_29237__$1 = state_29237;
var statearr_29261_29337 = state_29237__$1;
(statearr_29261_29337[(2)] = inst_29159);

(statearr_29261_29337[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (31))){
var inst_29185 = (state_29237[(12)]);
var inst_29189 = done.call(null,null);
var inst_29190 = cljs.core.async.untap_STAR_.call(null,m,inst_29185);
var state_29237__$1 = (function (){var statearr_29262 = state_29237;
(statearr_29262[(19)] = inst_29189);

return statearr_29262;
})();
var statearr_29263_29338 = state_29237__$1;
(statearr_29263_29338[(2)] = inst_29190);

(statearr_29263_29338[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (32))){
var inst_29178 = (state_29237[(10)]);
var inst_29180 = (state_29237[(11)]);
var inst_29177 = (state_29237[(20)]);
var inst_29179 = (state_29237[(21)]);
var inst_29192 = (state_29237[(2)]);
var inst_29193 = (inst_29180 + (1));
var tmp29258 = inst_29178;
var tmp29259 = inst_29177;
var tmp29260 = inst_29179;
var inst_29177__$1 = tmp29259;
var inst_29178__$1 = tmp29258;
var inst_29179__$1 = tmp29260;
var inst_29180__$1 = inst_29193;
var state_29237__$1 = (function (){var statearr_29264 = state_29237;
(statearr_29264[(10)] = inst_29178__$1);

(statearr_29264[(11)] = inst_29180__$1);

(statearr_29264[(20)] = inst_29177__$1);

(statearr_29264[(22)] = inst_29192);

(statearr_29264[(21)] = inst_29179__$1);

return statearr_29264;
})();
var statearr_29265_29339 = state_29237__$1;
(statearr_29265_29339[(2)] = null);

(statearr_29265_29339[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (40))){
var inst_29205 = (state_29237[(23)]);
var inst_29209 = done.call(null,null);
var inst_29210 = cljs.core.async.untap_STAR_.call(null,m,inst_29205);
var state_29237__$1 = (function (){var statearr_29266 = state_29237;
(statearr_29266[(24)] = inst_29209);

return statearr_29266;
})();
var statearr_29267_29340 = state_29237__$1;
(statearr_29267_29340[(2)] = inst_29210);

(statearr_29267_29340[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (33))){
var inst_29196 = (state_29237[(25)]);
var inst_29198 = cljs.core.chunked_seq_QMARK_.call(null,inst_29196);
var state_29237__$1 = state_29237;
if(inst_29198){
var statearr_29268_29341 = state_29237__$1;
(statearr_29268_29341[(1)] = (36));

} else {
var statearr_29269_29342 = state_29237__$1;
(statearr_29269_29342[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (13))){
var inst_29128 = (state_29237[(26)]);
var inst_29131 = cljs.core.async.close_BANG_.call(null,inst_29128);
var state_29237__$1 = state_29237;
var statearr_29270_29343 = state_29237__$1;
(statearr_29270_29343[(2)] = inst_29131);

(statearr_29270_29343[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (22))){
var inst_29149 = (state_29237[(8)]);
var inst_29152 = cljs.core.async.close_BANG_.call(null,inst_29149);
var state_29237__$1 = state_29237;
var statearr_29271_29344 = state_29237__$1;
(statearr_29271_29344[(2)] = inst_29152);

(statearr_29271_29344[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (36))){
var inst_29196 = (state_29237[(25)]);
var inst_29200 = cljs.core.chunk_first.call(null,inst_29196);
var inst_29201 = cljs.core.chunk_rest.call(null,inst_29196);
var inst_29202 = cljs.core.count.call(null,inst_29200);
var inst_29177 = inst_29201;
var inst_29178 = inst_29200;
var inst_29179 = inst_29202;
var inst_29180 = (0);
var state_29237__$1 = (function (){var statearr_29272 = state_29237;
(statearr_29272[(10)] = inst_29178);

(statearr_29272[(11)] = inst_29180);

(statearr_29272[(20)] = inst_29177);

(statearr_29272[(21)] = inst_29179);

return statearr_29272;
})();
var statearr_29273_29345 = state_29237__$1;
(statearr_29273_29345[(2)] = null);

(statearr_29273_29345[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (41))){
var inst_29196 = (state_29237[(25)]);
var inst_29212 = (state_29237[(2)]);
var inst_29213 = cljs.core.next.call(null,inst_29196);
var inst_29177 = inst_29213;
var inst_29178 = null;
var inst_29179 = (0);
var inst_29180 = (0);
var state_29237__$1 = (function (){var statearr_29274 = state_29237;
(statearr_29274[(10)] = inst_29178);

(statearr_29274[(11)] = inst_29180);

(statearr_29274[(20)] = inst_29177);

(statearr_29274[(27)] = inst_29212);

(statearr_29274[(21)] = inst_29179);

return statearr_29274;
})();
var statearr_29275_29346 = state_29237__$1;
(statearr_29275_29346[(2)] = null);

(statearr_29275_29346[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (43))){
var state_29237__$1 = state_29237;
var statearr_29276_29347 = state_29237__$1;
(statearr_29276_29347[(2)] = null);

(statearr_29276_29347[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (29))){
var inst_29221 = (state_29237[(2)]);
var state_29237__$1 = state_29237;
var statearr_29277_29348 = state_29237__$1;
(statearr_29277_29348[(2)] = inst_29221);

(statearr_29277_29348[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (44))){
var inst_29230 = (state_29237[(2)]);
var state_29237__$1 = (function (){var statearr_29278 = state_29237;
(statearr_29278[(28)] = inst_29230);

return statearr_29278;
})();
var statearr_29279_29349 = state_29237__$1;
(statearr_29279_29349[(2)] = null);

(statearr_29279_29349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (6))){
var inst_29169 = (state_29237[(29)]);
var inst_29168 = cljs.core.deref.call(null,cs);
var inst_29169__$1 = cljs.core.keys.call(null,inst_29168);
var inst_29170 = cljs.core.count.call(null,inst_29169__$1);
var inst_29171 = cljs.core.reset_BANG_.call(null,dctr,inst_29170);
var inst_29176 = cljs.core.seq.call(null,inst_29169__$1);
var inst_29177 = inst_29176;
var inst_29178 = null;
var inst_29179 = (0);
var inst_29180 = (0);
var state_29237__$1 = (function (){var statearr_29280 = state_29237;
(statearr_29280[(10)] = inst_29178);

(statearr_29280[(30)] = inst_29171);

(statearr_29280[(11)] = inst_29180);

(statearr_29280[(20)] = inst_29177);

(statearr_29280[(21)] = inst_29179);

(statearr_29280[(29)] = inst_29169__$1);

return statearr_29280;
})();
var statearr_29281_29350 = state_29237__$1;
(statearr_29281_29350[(2)] = null);

(statearr_29281_29350[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (28))){
var inst_29177 = (state_29237[(20)]);
var inst_29196 = (state_29237[(25)]);
var inst_29196__$1 = cljs.core.seq.call(null,inst_29177);
var state_29237__$1 = (function (){var statearr_29282 = state_29237;
(statearr_29282[(25)] = inst_29196__$1);

return statearr_29282;
})();
if(inst_29196__$1){
var statearr_29283_29351 = state_29237__$1;
(statearr_29283_29351[(1)] = (33));

} else {
var statearr_29284_29352 = state_29237__$1;
(statearr_29284_29352[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (25))){
var inst_29180 = (state_29237[(11)]);
var inst_29179 = (state_29237[(21)]);
var inst_29182 = (inst_29180 < inst_29179);
var inst_29183 = inst_29182;
var state_29237__$1 = state_29237;
if(cljs.core.truth_(inst_29183)){
var statearr_29285_29353 = state_29237__$1;
(statearr_29285_29353[(1)] = (27));

} else {
var statearr_29286_29354 = state_29237__$1;
(statearr_29286_29354[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (34))){
var state_29237__$1 = state_29237;
var statearr_29287_29355 = state_29237__$1;
(statearr_29287_29355[(2)] = null);

(statearr_29287_29355[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (17))){
var state_29237__$1 = state_29237;
var statearr_29288_29356 = state_29237__$1;
(statearr_29288_29356[(2)] = null);

(statearr_29288_29356[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (3))){
var inst_29235 = (state_29237[(2)]);
var state_29237__$1 = state_29237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29237__$1,inst_29235);
} else {
if((state_val_29238 === (12))){
var inst_29164 = (state_29237[(2)]);
var state_29237__$1 = state_29237;
var statearr_29289_29357 = state_29237__$1;
(statearr_29289_29357[(2)] = inst_29164);

(statearr_29289_29357[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (2))){
var state_29237__$1 = state_29237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29237__$1,(4),ch);
} else {
if((state_val_29238 === (23))){
var state_29237__$1 = state_29237;
var statearr_29290_29358 = state_29237__$1;
(statearr_29290_29358[(2)] = null);

(statearr_29290_29358[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (35))){
var inst_29219 = (state_29237[(2)]);
var state_29237__$1 = state_29237;
var statearr_29291_29359 = state_29237__$1;
(statearr_29291_29359[(2)] = inst_29219);

(statearr_29291_29359[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (19))){
var inst_29138 = (state_29237[(7)]);
var inst_29142 = cljs.core.chunk_first.call(null,inst_29138);
var inst_29143 = cljs.core.chunk_rest.call(null,inst_29138);
var inst_29144 = cljs.core.count.call(null,inst_29142);
var inst_29118 = inst_29143;
var inst_29119 = inst_29142;
var inst_29120 = inst_29144;
var inst_29121 = (0);
var state_29237__$1 = (function (){var statearr_29292 = state_29237;
(statearr_29292[(14)] = inst_29119);

(statearr_29292[(15)] = inst_29121);

(statearr_29292[(16)] = inst_29118);

(statearr_29292[(17)] = inst_29120);

return statearr_29292;
})();
var statearr_29293_29360 = state_29237__$1;
(statearr_29293_29360[(2)] = null);

(statearr_29293_29360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (11))){
var inst_29138 = (state_29237[(7)]);
var inst_29118 = (state_29237[(16)]);
var inst_29138__$1 = cljs.core.seq.call(null,inst_29118);
var state_29237__$1 = (function (){var statearr_29294 = state_29237;
(statearr_29294[(7)] = inst_29138__$1);

return statearr_29294;
})();
if(inst_29138__$1){
var statearr_29295_29361 = state_29237__$1;
(statearr_29295_29361[(1)] = (16));

} else {
var statearr_29296_29362 = state_29237__$1;
(statearr_29296_29362[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (9))){
var inst_29166 = (state_29237[(2)]);
var state_29237__$1 = state_29237;
var statearr_29297_29363 = state_29237__$1;
(statearr_29297_29363[(2)] = inst_29166);

(statearr_29297_29363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (5))){
var inst_29116 = cljs.core.deref.call(null,cs);
var inst_29117 = cljs.core.seq.call(null,inst_29116);
var inst_29118 = inst_29117;
var inst_29119 = null;
var inst_29120 = (0);
var inst_29121 = (0);
var state_29237__$1 = (function (){var statearr_29298 = state_29237;
(statearr_29298[(14)] = inst_29119);

(statearr_29298[(15)] = inst_29121);

(statearr_29298[(16)] = inst_29118);

(statearr_29298[(17)] = inst_29120);

return statearr_29298;
})();
var statearr_29299_29364 = state_29237__$1;
(statearr_29299_29364[(2)] = null);

(statearr_29299_29364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (14))){
var state_29237__$1 = state_29237;
var statearr_29300_29365 = state_29237__$1;
(statearr_29300_29365[(2)] = null);

(statearr_29300_29365[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (45))){
var inst_29227 = (state_29237[(2)]);
var state_29237__$1 = state_29237;
var statearr_29301_29366 = state_29237__$1;
(statearr_29301_29366[(2)] = inst_29227);

(statearr_29301_29366[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (26))){
var inst_29169 = (state_29237[(29)]);
var inst_29223 = (state_29237[(2)]);
var inst_29224 = cljs.core.seq.call(null,inst_29169);
var state_29237__$1 = (function (){var statearr_29302 = state_29237;
(statearr_29302[(31)] = inst_29223);

return statearr_29302;
})();
if(inst_29224){
var statearr_29303_29367 = state_29237__$1;
(statearr_29303_29367[(1)] = (42));

} else {
var statearr_29304_29368 = state_29237__$1;
(statearr_29304_29368[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (16))){
var inst_29138 = (state_29237[(7)]);
var inst_29140 = cljs.core.chunked_seq_QMARK_.call(null,inst_29138);
var state_29237__$1 = state_29237;
if(inst_29140){
var statearr_29305_29369 = state_29237__$1;
(statearr_29305_29369[(1)] = (19));

} else {
var statearr_29306_29370 = state_29237__$1;
(statearr_29306_29370[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (38))){
var inst_29216 = (state_29237[(2)]);
var state_29237__$1 = state_29237;
var statearr_29307_29371 = state_29237__$1;
(statearr_29307_29371[(2)] = inst_29216);

(statearr_29307_29371[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (30))){
var state_29237__$1 = state_29237;
var statearr_29308_29372 = state_29237__$1;
(statearr_29308_29372[(2)] = null);

(statearr_29308_29372[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (10))){
var inst_29119 = (state_29237[(14)]);
var inst_29121 = (state_29237[(15)]);
var inst_29127 = cljs.core._nth.call(null,inst_29119,inst_29121);
var inst_29128 = cljs.core.nth.call(null,inst_29127,(0),null);
var inst_29129 = cljs.core.nth.call(null,inst_29127,(1),null);
var state_29237__$1 = (function (){var statearr_29309 = state_29237;
(statearr_29309[(26)] = inst_29128);

return statearr_29309;
})();
if(cljs.core.truth_(inst_29129)){
var statearr_29310_29373 = state_29237__$1;
(statearr_29310_29373[(1)] = (13));

} else {
var statearr_29311_29374 = state_29237__$1;
(statearr_29311_29374[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (18))){
var inst_29162 = (state_29237[(2)]);
var state_29237__$1 = state_29237;
var statearr_29312_29375 = state_29237__$1;
(statearr_29312_29375[(2)] = inst_29162);

(statearr_29312_29375[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (42))){
var state_29237__$1 = state_29237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29237__$1,(45),dchan);
} else {
if((state_val_29238 === (37))){
var inst_29109 = (state_29237[(9)]);
var inst_29205 = (state_29237[(23)]);
var inst_29196 = (state_29237[(25)]);
var inst_29205__$1 = cljs.core.first.call(null,inst_29196);
var inst_29206 = cljs.core.async.put_BANG_.call(null,inst_29205__$1,inst_29109,done);
var state_29237__$1 = (function (){var statearr_29313 = state_29237;
(statearr_29313[(23)] = inst_29205__$1);

return statearr_29313;
})();
if(cljs.core.truth_(inst_29206)){
var statearr_29314_29376 = state_29237__$1;
(statearr_29314_29376[(1)] = (39));

} else {
var statearr_29315_29377 = state_29237__$1;
(statearr_29315_29377[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29238 === (8))){
var inst_29121 = (state_29237[(15)]);
var inst_29120 = (state_29237[(17)]);
var inst_29123 = (inst_29121 < inst_29120);
var inst_29124 = inst_29123;
var state_29237__$1 = state_29237;
if(cljs.core.truth_(inst_29124)){
var statearr_29316_29378 = state_29237__$1;
(statearr_29316_29378[(1)] = (10));

} else {
var statearr_29317_29379 = state_29237__$1;
(statearr_29317_29379[(1)] = (11));

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
});})(c__20605__auto___29325,cs,m,dchan,dctr,done))
;
return ((function (switch__20540__auto__,c__20605__auto___29325,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20541__auto__ = null;
var cljs$core$async$mult_$_state_machine__20541__auto____0 = (function (){
var statearr_29321 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29321[(0)] = cljs$core$async$mult_$_state_machine__20541__auto__);

(statearr_29321[(1)] = (1));

return statearr_29321;
});
var cljs$core$async$mult_$_state_machine__20541__auto____1 = (function (state_29237){
while(true){
var ret_value__20542__auto__ = (function (){try{while(true){
var result__20543__auto__ = switch__20540__auto__.call(null,state_29237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20543__auto__;
}
break;
}
}catch (e29322){if((e29322 instanceof Object)){
var ex__20544__auto__ = e29322;
var statearr_29323_29380 = state_29237;
(statearr_29323_29380[(5)] = ex__20544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29381 = state_29237;
state_29237 = G__29381;
continue;
} else {
return ret_value__20542__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20541__auto__ = function(state_29237){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20541__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20541__auto____1.call(this,state_29237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20541__auto____0;
cljs$core$async$mult_$_state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20541__auto____1;
return cljs$core$async$mult_$_state_machine__20541__auto__;
})()
;})(switch__20540__auto__,c__20605__auto___29325,cs,m,dchan,dctr,done))
})();
var state__20607__auto__ = (function (){var statearr_29324 = f__20606__auto__.call(null);
(statearr_29324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20605__auto___29325);

return statearr_29324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20607__auto__);
});})(c__20605__auto___29325,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args29382 = [];
var len__17378__auto___29385 = arguments.length;
var i__17379__auto___29386 = (0);
while(true){
if((i__17379__auto___29386 < len__17378__auto___29385)){
args29382.push((arguments[i__17379__auto___29386]));

var G__29387 = (i__17379__auto___29386 + (1));
i__17379__auto___29386 = G__29387;
continue;
} else {
}
break;
}

var G__29384 = args29382.length;
switch (G__29384) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29382.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16975__auto__ = (((m == null))?null:m);
var m__16976__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16975__auto__)]);
if(!((m__16976__auto__ == null))){
return m__16976__auto__.call(null,m,ch);
} else {
var m__16976__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__16976__auto____$1 == null))){
return m__16976__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16975__auto__ = (((m == null))?null:m);
var m__16976__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16975__auto__)]);
if(!((m__16976__auto__ == null))){
return m__16976__auto__.call(null,m,ch);
} else {
var m__16976__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__16976__auto____$1 == null))){
return m__16976__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16975__auto__ = (((m == null))?null:m);
var m__16976__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16975__auto__)]);
if(!((m__16976__auto__ == null))){
return m__16976__auto__.call(null,m);
} else {
var m__16976__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__16976__auto____$1 == null))){
return m__16976__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16975__auto__ = (((m == null))?null:m);
var m__16976__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16975__auto__)]);
if(!((m__16976__auto__ == null))){
return m__16976__auto__.call(null,m,state_map);
} else {
var m__16976__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__16976__auto____$1 == null))){
return m__16976__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16975__auto__ = (((m == null))?null:m);
var m__16976__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16975__auto__)]);
if(!((m__16976__auto__ == null))){
return m__16976__auto__.call(null,m,mode);
} else {
var m__16976__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__16976__auto____$1 == null))){
return m__16976__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17385__auto__ = [];
var len__17378__auto___29399 = arguments.length;
var i__17379__auto___29400 = (0);
while(true){
if((i__17379__auto___29400 < len__17378__auto___29399)){
args__17385__auto__.push((arguments[i__17379__auto___29400]));

var G__29401 = (i__17379__auto___29400 + (1));
i__17379__auto___29400 = G__29401;
continue;
} else {
}
break;
}

var argseq__17386__auto__ = ((((3) < args__17385__auto__.length))?(new cljs.core.IndexedSeq(args__17385__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17386__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29393){
var map__29394 = p__29393;
var map__29394__$1 = ((((!((map__29394 == null)))?((((map__29394.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29394.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29394):map__29394);
var opts = map__29394__$1;
var statearr_29396_29402 = state;
(statearr_29396_29402[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__29394,map__29394__$1,opts){
return (function (val){
var statearr_29397_29403 = state;
(statearr_29397_29403[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29394,map__29394__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_29398_29404 = state;
(statearr_29398_29404[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29389){
var G__29390 = cljs.core.first.call(null,seq29389);
var seq29389__$1 = cljs.core.next.call(null,seq29389);
var G__29391 = cljs.core.first.call(null,seq29389__$1);
var seq29389__$2 = cljs.core.next.call(null,seq29389__$1);
var G__29392 = cljs.core.first.call(null,seq29389__$2);
var seq29389__$3 = cljs.core.next.call(null,seq29389__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29390,G__29391,G__29392,seq29389__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29568 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29568 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29569){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29569 = meta29569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29570,meta29569__$1){
var self__ = this;
var _29570__$1 = this;
return (new cljs.core.async.t_cljs$core$async29568(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29569__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29568.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29570){
var self__ = this;
var _29570__$1 = this;
return self__.meta29569;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29568.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29568.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29568.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29568.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29568.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29568.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29568.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29568.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29568.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29569","meta29569",2121250628,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29568.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29568.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29568";

cljs.core.async.t_cljs$core$async29568.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async29568");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29568 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29568(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29569){
return (new cljs.core.async.t_cljs$core$async29568(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29569));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29568(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20605__auto___29731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20605__auto___29731,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20606__auto__ = (function (){var switch__20540__auto__ = ((function (c__20605__auto___29731,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29668){
var state_val_29669 = (state_29668[(1)]);
if((state_val_29669 === (7))){
var inst_29586 = (state_29668[(2)]);
var state_29668__$1 = state_29668;
var statearr_29670_29732 = state_29668__$1;
(statearr_29670_29732[(2)] = inst_29586);

(statearr_29670_29732[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (20))){
var inst_29598 = (state_29668[(7)]);
var state_29668__$1 = state_29668;
var statearr_29671_29733 = state_29668__$1;
(statearr_29671_29733[(2)] = inst_29598);

(statearr_29671_29733[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (27))){
var state_29668__$1 = state_29668;
var statearr_29672_29734 = state_29668__$1;
(statearr_29672_29734[(2)] = null);

(statearr_29672_29734[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (1))){
var inst_29574 = (state_29668[(8)]);
var inst_29574__$1 = calc_state.call(null);
var inst_29576 = (inst_29574__$1 == null);
var inst_29577 = cljs.core.not.call(null,inst_29576);
var state_29668__$1 = (function (){var statearr_29673 = state_29668;
(statearr_29673[(8)] = inst_29574__$1);

return statearr_29673;
})();
if(inst_29577){
var statearr_29674_29735 = state_29668__$1;
(statearr_29674_29735[(1)] = (2));

} else {
var statearr_29675_29736 = state_29668__$1;
(statearr_29675_29736[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (24))){
var inst_29642 = (state_29668[(9)]);
var inst_29628 = (state_29668[(10)]);
var inst_29621 = (state_29668[(11)]);
var inst_29642__$1 = inst_29621.call(null,inst_29628);
var state_29668__$1 = (function (){var statearr_29676 = state_29668;
(statearr_29676[(9)] = inst_29642__$1);

return statearr_29676;
})();
if(cljs.core.truth_(inst_29642__$1)){
var statearr_29677_29737 = state_29668__$1;
(statearr_29677_29737[(1)] = (29));

} else {
var statearr_29678_29738 = state_29668__$1;
(statearr_29678_29738[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (4))){
var inst_29589 = (state_29668[(2)]);
var state_29668__$1 = state_29668;
if(cljs.core.truth_(inst_29589)){
var statearr_29679_29739 = state_29668__$1;
(statearr_29679_29739[(1)] = (8));

} else {
var statearr_29680_29740 = state_29668__$1;
(statearr_29680_29740[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (15))){
var inst_29615 = (state_29668[(2)]);
var state_29668__$1 = state_29668;
if(cljs.core.truth_(inst_29615)){
var statearr_29681_29741 = state_29668__$1;
(statearr_29681_29741[(1)] = (19));

} else {
var statearr_29682_29742 = state_29668__$1;
(statearr_29682_29742[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (21))){
var inst_29620 = (state_29668[(12)]);
var inst_29620__$1 = (state_29668[(2)]);
var inst_29621 = cljs.core.get.call(null,inst_29620__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29622 = cljs.core.get.call(null,inst_29620__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29623 = cljs.core.get.call(null,inst_29620__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29668__$1 = (function (){var statearr_29683 = state_29668;
(statearr_29683[(12)] = inst_29620__$1);

(statearr_29683[(13)] = inst_29622);

(statearr_29683[(11)] = inst_29621);

return statearr_29683;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29668__$1,(22),inst_29623);
} else {
if((state_val_29669 === (31))){
var inst_29650 = (state_29668[(2)]);
var state_29668__$1 = state_29668;
if(cljs.core.truth_(inst_29650)){
var statearr_29684_29743 = state_29668__$1;
(statearr_29684_29743[(1)] = (32));

} else {
var statearr_29685_29744 = state_29668__$1;
(statearr_29685_29744[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (32))){
var inst_29627 = (state_29668[(14)]);
var state_29668__$1 = state_29668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29668__$1,(35),out,inst_29627);
} else {
if((state_val_29669 === (33))){
var inst_29620 = (state_29668[(12)]);
var inst_29598 = inst_29620;
var state_29668__$1 = (function (){var statearr_29686 = state_29668;
(statearr_29686[(7)] = inst_29598);

return statearr_29686;
})();
var statearr_29687_29745 = state_29668__$1;
(statearr_29687_29745[(2)] = null);

(statearr_29687_29745[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (13))){
var inst_29598 = (state_29668[(7)]);
var inst_29605 = inst_29598.cljs$lang$protocol_mask$partition0$;
var inst_29606 = (inst_29605 & (64));
var inst_29607 = inst_29598.cljs$core$ISeq$;
var inst_29608 = (inst_29606) || (inst_29607);
var state_29668__$1 = state_29668;
if(cljs.core.truth_(inst_29608)){
var statearr_29688_29746 = state_29668__$1;
(statearr_29688_29746[(1)] = (16));

} else {
var statearr_29689_29747 = state_29668__$1;
(statearr_29689_29747[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (22))){
var inst_29627 = (state_29668[(14)]);
var inst_29628 = (state_29668[(10)]);
var inst_29626 = (state_29668[(2)]);
var inst_29627__$1 = cljs.core.nth.call(null,inst_29626,(0),null);
var inst_29628__$1 = cljs.core.nth.call(null,inst_29626,(1),null);
var inst_29629 = (inst_29627__$1 == null);
var inst_29630 = cljs.core._EQ_.call(null,inst_29628__$1,change);
var inst_29631 = (inst_29629) || (inst_29630);
var state_29668__$1 = (function (){var statearr_29690 = state_29668;
(statearr_29690[(14)] = inst_29627__$1);

(statearr_29690[(10)] = inst_29628__$1);

return statearr_29690;
})();
if(cljs.core.truth_(inst_29631)){
var statearr_29691_29748 = state_29668__$1;
(statearr_29691_29748[(1)] = (23));

} else {
var statearr_29692_29749 = state_29668__$1;
(statearr_29692_29749[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (36))){
var inst_29620 = (state_29668[(12)]);
var inst_29598 = inst_29620;
var state_29668__$1 = (function (){var statearr_29693 = state_29668;
(statearr_29693[(7)] = inst_29598);

return statearr_29693;
})();
var statearr_29694_29750 = state_29668__$1;
(statearr_29694_29750[(2)] = null);

(statearr_29694_29750[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (29))){
var inst_29642 = (state_29668[(9)]);
var state_29668__$1 = state_29668;
var statearr_29695_29751 = state_29668__$1;
(statearr_29695_29751[(2)] = inst_29642);

(statearr_29695_29751[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (6))){
var state_29668__$1 = state_29668;
var statearr_29696_29752 = state_29668__$1;
(statearr_29696_29752[(2)] = false);

(statearr_29696_29752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (28))){
var inst_29638 = (state_29668[(2)]);
var inst_29639 = calc_state.call(null);
var inst_29598 = inst_29639;
var state_29668__$1 = (function (){var statearr_29697 = state_29668;
(statearr_29697[(15)] = inst_29638);

(statearr_29697[(7)] = inst_29598);

return statearr_29697;
})();
var statearr_29698_29753 = state_29668__$1;
(statearr_29698_29753[(2)] = null);

(statearr_29698_29753[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (25))){
var inst_29664 = (state_29668[(2)]);
var state_29668__$1 = state_29668;
var statearr_29699_29754 = state_29668__$1;
(statearr_29699_29754[(2)] = inst_29664);

(statearr_29699_29754[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (34))){
var inst_29662 = (state_29668[(2)]);
var state_29668__$1 = state_29668;
var statearr_29700_29755 = state_29668__$1;
(statearr_29700_29755[(2)] = inst_29662);

(statearr_29700_29755[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (17))){
var state_29668__$1 = state_29668;
var statearr_29701_29756 = state_29668__$1;
(statearr_29701_29756[(2)] = false);

(statearr_29701_29756[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (3))){
var state_29668__$1 = state_29668;
var statearr_29702_29757 = state_29668__$1;
(statearr_29702_29757[(2)] = false);

(statearr_29702_29757[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (12))){
var inst_29666 = (state_29668[(2)]);
var state_29668__$1 = state_29668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29668__$1,inst_29666);
} else {
if((state_val_29669 === (2))){
var inst_29574 = (state_29668[(8)]);
var inst_29579 = inst_29574.cljs$lang$protocol_mask$partition0$;
var inst_29580 = (inst_29579 & (64));
var inst_29581 = inst_29574.cljs$core$ISeq$;
var inst_29582 = (inst_29580) || (inst_29581);
var state_29668__$1 = state_29668;
if(cljs.core.truth_(inst_29582)){
var statearr_29703_29758 = state_29668__$1;
(statearr_29703_29758[(1)] = (5));

} else {
var statearr_29704_29759 = state_29668__$1;
(statearr_29704_29759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (23))){
var inst_29627 = (state_29668[(14)]);
var inst_29633 = (inst_29627 == null);
var state_29668__$1 = state_29668;
if(cljs.core.truth_(inst_29633)){
var statearr_29705_29760 = state_29668__$1;
(statearr_29705_29760[(1)] = (26));

} else {
var statearr_29706_29761 = state_29668__$1;
(statearr_29706_29761[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (35))){
var inst_29653 = (state_29668[(2)]);
var state_29668__$1 = state_29668;
if(cljs.core.truth_(inst_29653)){
var statearr_29707_29762 = state_29668__$1;
(statearr_29707_29762[(1)] = (36));

} else {
var statearr_29708_29763 = state_29668__$1;
(statearr_29708_29763[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (19))){
var inst_29598 = (state_29668[(7)]);
var inst_29617 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29598);
var state_29668__$1 = state_29668;
var statearr_29709_29764 = state_29668__$1;
(statearr_29709_29764[(2)] = inst_29617);

(statearr_29709_29764[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (11))){
var inst_29598 = (state_29668[(7)]);
var inst_29602 = (inst_29598 == null);
var inst_29603 = cljs.core.not.call(null,inst_29602);
var state_29668__$1 = state_29668;
if(inst_29603){
var statearr_29710_29765 = state_29668__$1;
(statearr_29710_29765[(1)] = (13));

} else {
var statearr_29711_29766 = state_29668__$1;
(statearr_29711_29766[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (9))){
var inst_29574 = (state_29668[(8)]);
var state_29668__$1 = state_29668;
var statearr_29712_29767 = state_29668__$1;
(statearr_29712_29767[(2)] = inst_29574);

(statearr_29712_29767[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (5))){
var state_29668__$1 = state_29668;
var statearr_29713_29768 = state_29668__$1;
(statearr_29713_29768[(2)] = true);

(statearr_29713_29768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (14))){
var state_29668__$1 = state_29668;
var statearr_29714_29769 = state_29668__$1;
(statearr_29714_29769[(2)] = false);

(statearr_29714_29769[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (26))){
var inst_29628 = (state_29668[(10)]);
var inst_29635 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29628);
var state_29668__$1 = state_29668;
var statearr_29715_29770 = state_29668__$1;
(statearr_29715_29770[(2)] = inst_29635);

(statearr_29715_29770[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (16))){
var state_29668__$1 = state_29668;
var statearr_29716_29771 = state_29668__$1;
(statearr_29716_29771[(2)] = true);

(statearr_29716_29771[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (38))){
var inst_29658 = (state_29668[(2)]);
var state_29668__$1 = state_29668;
var statearr_29717_29772 = state_29668__$1;
(statearr_29717_29772[(2)] = inst_29658);

(statearr_29717_29772[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (30))){
var inst_29628 = (state_29668[(10)]);
var inst_29622 = (state_29668[(13)]);
var inst_29621 = (state_29668[(11)]);
var inst_29645 = cljs.core.empty_QMARK_.call(null,inst_29621);
var inst_29646 = inst_29622.call(null,inst_29628);
var inst_29647 = cljs.core.not.call(null,inst_29646);
var inst_29648 = (inst_29645) && (inst_29647);
var state_29668__$1 = state_29668;
var statearr_29718_29773 = state_29668__$1;
(statearr_29718_29773[(2)] = inst_29648);

(statearr_29718_29773[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (10))){
var inst_29574 = (state_29668[(8)]);
var inst_29594 = (state_29668[(2)]);
var inst_29595 = cljs.core.get.call(null,inst_29594,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29596 = cljs.core.get.call(null,inst_29594,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29597 = cljs.core.get.call(null,inst_29594,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29598 = inst_29574;
var state_29668__$1 = (function (){var statearr_29719 = state_29668;
(statearr_29719[(16)] = inst_29596);

(statearr_29719[(7)] = inst_29598);

(statearr_29719[(17)] = inst_29597);

(statearr_29719[(18)] = inst_29595);

return statearr_29719;
})();
var statearr_29720_29774 = state_29668__$1;
(statearr_29720_29774[(2)] = null);

(statearr_29720_29774[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (18))){
var inst_29612 = (state_29668[(2)]);
var state_29668__$1 = state_29668;
var statearr_29721_29775 = state_29668__$1;
(statearr_29721_29775[(2)] = inst_29612);

(statearr_29721_29775[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (37))){
var state_29668__$1 = state_29668;
var statearr_29722_29776 = state_29668__$1;
(statearr_29722_29776[(2)] = null);

(statearr_29722_29776[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (8))){
var inst_29574 = (state_29668[(8)]);
var inst_29591 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29574);
var state_29668__$1 = state_29668;
var statearr_29723_29777 = state_29668__$1;
(statearr_29723_29777[(2)] = inst_29591);

(statearr_29723_29777[(1)] = (10));


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
});})(c__20605__auto___29731,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20540__auto__,c__20605__auto___29731,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20541__auto__ = null;
var cljs$core$async$mix_$_state_machine__20541__auto____0 = (function (){
var statearr_29727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29727[(0)] = cljs$core$async$mix_$_state_machine__20541__auto__);

(statearr_29727[(1)] = (1));

return statearr_29727;
});
var cljs$core$async$mix_$_state_machine__20541__auto____1 = (function (state_29668){
while(true){
var ret_value__20542__auto__ = (function (){try{while(true){
var result__20543__auto__ = switch__20540__auto__.call(null,state_29668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20543__auto__;
}
break;
}
}catch (e29728){if((e29728 instanceof Object)){
var ex__20544__auto__ = e29728;
var statearr_29729_29778 = state_29668;
(statearr_29729_29778[(5)] = ex__20544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29779 = state_29668;
state_29668 = G__29779;
continue;
} else {
return ret_value__20542__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20541__auto__ = function(state_29668){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20541__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20541__auto____1.call(this,state_29668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20541__auto____0;
cljs$core$async$mix_$_state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20541__auto____1;
return cljs$core$async$mix_$_state_machine__20541__auto__;
})()
;})(switch__20540__auto__,c__20605__auto___29731,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20607__auto__ = (function (){var statearr_29730 = f__20606__auto__.call(null);
(statearr_29730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20605__auto___29731);

return statearr_29730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20607__auto__);
});})(c__20605__auto___29731,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16975__auto__ = (((p == null))?null:p);
var m__16976__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16975__auto__)]);
if(!((m__16976__auto__ == null))){
return m__16976__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__16976__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__16976__auto____$1 == null))){
return m__16976__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16975__auto__ = (((p == null))?null:p);
var m__16976__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16975__auto__)]);
if(!((m__16976__auto__ == null))){
return m__16976__auto__.call(null,p,v,ch);
} else {
var m__16976__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__16976__auto____$1 == null))){
return m__16976__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29780 = [];
var len__17378__auto___29783 = arguments.length;
var i__17379__auto___29784 = (0);
while(true){
if((i__17379__auto___29784 < len__17378__auto___29783)){
args29780.push((arguments[i__17379__auto___29784]));

var G__29785 = (i__17379__auto___29784 + (1));
i__17379__auto___29784 = G__29785;
continue;
} else {
}
break;
}

var G__29782 = args29780.length;
switch (G__29782) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29780.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16975__auto__ = (((p == null))?null:p);
var m__16976__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16975__auto__)]);
if(!((m__16976__auto__ == null))){
return m__16976__auto__.call(null,p);
} else {
var m__16976__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16976__auto____$1 == null))){
return m__16976__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16975__auto__ = (((p == null))?null:p);
var m__16976__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16975__auto__)]);
if(!((m__16976__auto__ == null))){
return m__16976__auto__.call(null,p,v);
} else {
var m__16976__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16976__auto____$1 == null))){
return m__16976__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args29788 = [];
var len__17378__auto___29913 = arguments.length;
var i__17379__auto___29914 = (0);
while(true){
if((i__17379__auto___29914 < len__17378__auto___29913)){
args29788.push((arguments[i__17379__auto___29914]));

var G__29915 = (i__17379__auto___29914 + (1));
i__17379__auto___29914 = G__29915;
continue;
} else {
}
break;
}

var G__29790 = args29788.length;
switch (G__29790) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29788.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16320__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16320__auto__)){
return or__16320__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16320__auto__,mults){
return (function (p1__29787_SHARP_){
if(cljs.core.truth_(p1__29787_SHARP_.call(null,topic))){
return p1__29787_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29787_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16320__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29791 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29791 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29792){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29792 = meta29792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29793,meta29792__$1){
var self__ = this;
var _29793__$1 = this;
return (new cljs.core.async.t_cljs$core$async29791(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29792__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29791.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29793){
var self__ = this;
var _29793__$1 = this;
return self__.meta29792;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29791.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29791.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29791.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29791.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29791.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29791.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29791.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29791.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29792","meta29792",674200748,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29791.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29791.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29791";

cljs.core.async.t_cljs$core$async29791.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async29791");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29791 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29791(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29792){
return (new cljs.core.async.t_cljs$core$async29791(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29792));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29791(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20605__auto___29917 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20605__auto___29917,mults,ensure_mult,p){
return (function (){
var f__20606__auto__ = (function (){var switch__20540__auto__ = ((function (c__20605__auto___29917,mults,ensure_mult,p){
return (function (state_29865){
var state_val_29866 = (state_29865[(1)]);
if((state_val_29866 === (7))){
var inst_29861 = (state_29865[(2)]);
var state_29865__$1 = state_29865;
var statearr_29867_29918 = state_29865__$1;
(statearr_29867_29918[(2)] = inst_29861);

(statearr_29867_29918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (20))){
var state_29865__$1 = state_29865;
var statearr_29868_29919 = state_29865__$1;
(statearr_29868_29919[(2)] = null);

(statearr_29868_29919[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (1))){
var state_29865__$1 = state_29865;
var statearr_29869_29920 = state_29865__$1;
(statearr_29869_29920[(2)] = null);

(statearr_29869_29920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (24))){
var inst_29844 = (state_29865[(7)]);
var inst_29853 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29844);
var state_29865__$1 = state_29865;
var statearr_29870_29921 = state_29865__$1;
(statearr_29870_29921[(2)] = inst_29853);

(statearr_29870_29921[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (4))){
var inst_29796 = (state_29865[(8)]);
var inst_29796__$1 = (state_29865[(2)]);
var inst_29797 = (inst_29796__$1 == null);
var state_29865__$1 = (function (){var statearr_29871 = state_29865;
(statearr_29871[(8)] = inst_29796__$1);

return statearr_29871;
})();
if(cljs.core.truth_(inst_29797)){
var statearr_29872_29922 = state_29865__$1;
(statearr_29872_29922[(1)] = (5));

} else {
var statearr_29873_29923 = state_29865__$1;
(statearr_29873_29923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (15))){
var inst_29838 = (state_29865[(2)]);
var state_29865__$1 = state_29865;
var statearr_29874_29924 = state_29865__$1;
(statearr_29874_29924[(2)] = inst_29838);

(statearr_29874_29924[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (21))){
var inst_29858 = (state_29865[(2)]);
var state_29865__$1 = (function (){var statearr_29875 = state_29865;
(statearr_29875[(9)] = inst_29858);

return statearr_29875;
})();
var statearr_29876_29925 = state_29865__$1;
(statearr_29876_29925[(2)] = null);

(statearr_29876_29925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (13))){
var inst_29820 = (state_29865[(10)]);
var inst_29822 = cljs.core.chunked_seq_QMARK_.call(null,inst_29820);
var state_29865__$1 = state_29865;
if(inst_29822){
var statearr_29877_29926 = state_29865__$1;
(statearr_29877_29926[(1)] = (16));

} else {
var statearr_29878_29927 = state_29865__$1;
(statearr_29878_29927[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (22))){
var inst_29850 = (state_29865[(2)]);
var state_29865__$1 = state_29865;
if(cljs.core.truth_(inst_29850)){
var statearr_29879_29928 = state_29865__$1;
(statearr_29879_29928[(1)] = (23));

} else {
var statearr_29880_29929 = state_29865__$1;
(statearr_29880_29929[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (6))){
var inst_29796 = (state_29865[(8)]);
var inst_29844 = (state_29865[(7)]);
var inst_29846 = (state_29865[(11)]);
var inst_29844__$1 = topic_fn.call(null,inst_29796);
var inst_29845 = cljs.core.deref.call(null,mults);
var inst_29846__$1 = cljs.core.get.call(null,inst_29845,inst_29844__$1);
var state_29865__$1 = (function (){var statearr_29881 = state_29865;
(statearr_29881[(7)] = inst_29844__$1);

(statearr_29881[(11)] = inst_29846__$1);

return statearr_29881;
})();
if(cljs.core.truth_(inst_29846__$1)){
var statearr_29882_29930 = state_29865__$1;
(statearr_29882_29930[(1)] = (19));

} else {
var statearr_29883_29931 = state_29865__$1;
(statearr_29883_29931[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (25))){
var inst_29855 = (state_29865[(2)]);
var state_29865__$1 = state_29865;
var statearr_29884_29932 = state_29865__$1;
(statearr_29884_29932[(2)] = inst_29855);

(statearr_29884_29932[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (17))){
var inst_29820 = (state_29865[(10)]);
var inst_29829 = cljs.core.first.call(null,inst_29820);
var inst_29830 = cljs.core.async.muxch_STAR_.call(null,inst_29829);
var inst_29831 = cljs.core.async.close_BANG_.call(null,inst_29830);
var inst_29832 = cljs.core.next.call(null,inst_29820);
var inst_29806 = inst_29832;
var inst_29807 = null;
var inst_29808 = (0);
var inst_29809 = (0);
var state_29865__$1 = (function (){var statearr_29885 = state_29865;
(statearr_29885[(12)] = inst_29809);

(statearr_29885[(13)] = inst_29808);

(statearr_29885[(14)] = inst_29831);

(statearr_29885[(15)] = inst_29807);

(statearr_29885[(16)] = inst_29806);

return statearr_29885;
})();
var statearr_29886_29933 = state_29865__$1;
(statearr_29886_29933[(2)] = null);

(statearr_29886_29933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (3))){
var inst_29863 = (state_29865[(2)]);
var state_29865__$1 = state_29865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29865__$1,inst_29863);
} else {
if((state_val_29866 === (12))){
var inst_29840 = (state_29865[(2)]);
var state_29865__$1 = state_29865;
var statearr_29887_29934 = state_29865__$1;
(statearr_29887_29934[(2)] = inst_29840);

(statearr_29887_29934[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (2))){
var state_29865__$1 = state_29865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29865__$1,(4),ch);
} else {
if((state_val_29866 === (23))){
var state_29865__$1 = state_29865;
var statearr_29888_29935 = state_29865__$1;
(statearr_29888_29935[(2)] = null);

(statearr_29888_29935[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (19))){
var inst_29796 = (state_29865[(8)]);
var inst_29846 = (state_29865[(11)]);
var inst_29848 = cljs.core.async.muxch_STAR_.call(null,inst_29846);
var state_29865__$1 = state_29865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29865__$1,(22),inst_29848,inst_29796);
} else {
if((state_val_29866 === (11))){
var inst_29820 = (state_29865[(10)]);
var inst_29806 = (state_29865[(16)]);
var inst_29820__$1 = cljs.core.seq.call(null,inst_29806);
var state_29865__$1 = (function (){var statearr_29889 = state_29865;
(statearr_29889[(10)] = inst_29820__$1);

return statearr_29889;
})();
if(inst_29820__$1){
var statearr_29890_29936 = state_29865__$1;
(statearr_29890_29936[(1)] = (13));

} else {
var statearr_29891_29937 = state_29865__$1;
(statearr_29891_29937[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (9))){
var inst_29842 = (state_29865[(2)]);
var state_29865__$1 = state_29865;
var statearr_29892_29938 = state_29865__$1;
(statearr_29892_29938[(2)] = inst_29842);

(statearr_29892_29938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (5))){
var inst_29803 = cljs.core.deref.call(null,mults);
var inst_29804 = cljs.core.vals.call(null,inst_29803);
var inst_29805 = cljs.core.seq.call(null,inst_29804);
var inst_29806 = inst_29805;
var inst_29807 = null;
var inst_29808 = (0);
var inst_29809 = (0);
var state_29865__$1 = (function (){var statearr_29893 = state_29865;
(statearr_29893[(12)] = inst_29809);

(statearr_29893[(13)] = inst_29808);

(statearr_29893[(15)] = inst_29807);

(statearr_29893[(16)] = inst_29806);

return statearr_29893;
})();
var statearr_29894_29939 = state_29865__$1;
(statearr_29894_29939[(2)] = null);

(statearr_29894_29939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (14))){
var state_29865__$1 = state_29865;
var statearr_29898_29940 = state_29865__$1;
(statearr_29898_29940[(2)] = null);

(statearr_29898_29940[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (16))){
var inst_29820 = (state_29865[(10)]);
var inst_29824 = cljs.core.chunk_first.call(null,inst_29820);
var inst_29825 = cljs.core.chunk_rest.call(null,inst_29820);
var inst_29826 = cljs.core.count.call(null,inst_29824);
var inst_29806 = inst_29825;
var inst_29807 = inst_29824;
var inst_29808 = inst_29826;
var inst_29809 = (0);
var state_29865__$1 = (function (){var statearr_29899 = state_29865;
(statearr_29899[(12)] = inst_29809);

(statearr_29899[(13)] = inst_29808);

(statearr_29899[(15)] = inst_29807);

(statearr_29899[(16)] = inst_29806);

return statearr_29899;
})();
var statearr_29900_29941 = state_29865__$1;
(statearr_29900_29941[(2)] = null);

(statearr_29900_29941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (10))){
var inst_29809 = (state_29865[(12)]);
var inst_29808 = (state_29865[(13)]);
var inst_29807 = (state_29865[(15)]);
var inst_29806 = (state_29865[(16)]);
var inst_29814 = cljs.core._nth.call(null,inst_29807,inst_29809);
var inst_29815 = cljs.core.async.muxch_STAR_.call(null,inst_29814);
var inst_29816 = cljs.core.async.close_BANG_.call(null,inst_29815);
var inst_29817 = (inst_29809 + (1));
var tmp29895 = inst_29808;
var tmp29896 = inst_29807;
var tmp29897 = inst_29806;
var inst_29806__$1 = tmp29897;
var inst_29807__$1 = tmp29896;
var inst_29808__$1 = tmp29895;
var inst_29809__$1 = inst_29817;
var state_29865__$1 = (function (){var statearr_29901 = state_29865;
(statearr_29901[(12)] = inst_29809__$1);

(statearr_29901[(13)] = inst_29808__$1);

(statearr_29901[(17)] = inst_29816);

(statearr_29901[(15)] = inst_29807__$1);

(statearr_29901[(16)] = inst_29806__$1);

return statearr_29901;
})();
var statearr_29902_29942 = state_29865__$1;
(statearr_29902_29942[(2)] = null);

(statearr_29902_29942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (18))){
var inst_29835 = (state_29865[(2)]);
var state_29865__$1 = state_29865;
var statearr_29903_29943 = state_29865__$1;
(statearr_29903_29943[(2)] = inst_29835);

(statearr_29903_29943[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (8))){
var inst_29809 = (state_29865[(12)]);
var inst_29808 = (state_29865[(13)]);
var inst_29811 = (inst_29809 < inst_29808);
var inst_29812 = inst_29811;
var state_29865__$1 = state_29865;
if(cljs.core.truth_(inst_29812)){
var statearr_29904_29944 = state_29865__$1;
(statearr_29904_29944[(1)] = (10));

} else {
var statearr_29905_29945 = state_29865__$1;
(statearr_29905_29945[(1)] = (11));

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
});})(c__20605__auto___29917,mults,ensure_mult,p))
;
return ((function (switch__20540__auto__,c__20605__auto___29917,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20541__auto__ = null;
var cljs$core$async$state_machine__20541__auto____0 = (function (){
var statearr_29909 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29909[(0)] = cljs$core$async$state_machine__20541__auto__);

(statearr_29909[(1)] = (1));

return statearr_29909;
});
var cljs$core$async$state_machine__20541__auto____1 = (function (state_29865){
while(true){
var ret_value__20542__auto__ = (function (){try{while(true){
var result__20543__auto__ = switch__20540__auto__.call(null,state_29865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20543__auto__;
}
break;
}
}catch (e29910){if((e29910 instanceof Object)){
var ex__20544__auto__ = e29910;
var statearr_29911_29946 = state_29865;
(statearr_29911_29946[(5)] = ex__20544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29947 = state_29865;
state_29865 = G__29947;
continue;
} else {
return ret_value__20542__auto__;
}
break;
}
});
cljs$core$async$state_machine__20541__auto__ = function(state_29865){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20541__auto____1.call(this,state_29865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20541__auto____0;
cljs$core$async$state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20541__auto____1;
return cljs$core$async$state_machine__20541__auto__;
})()
;})(switch__20540__auto__,c__20605__auto___29917,mults,ensure_mult,p))
})();
var state__20607__auto__ = (function (){var statearr_29912 = f__20606__auto__.call(null);
(statearr_29912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20605__auto___29917);

return statearr_29912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20607__auto__);
});})(c__20605__auto___29917,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args29948 = [];
var len__17378__auto___29951 = arguments.length;
var i__17379__auto___29952 = (0);
while(true){
if((i__17379__auto___29952 < len__17378__auto___29951)){
args29948.push((arguments[i__17379__auto___29952]));

var G__29953 = (i__17379__auto___29952 + (1));
i__17379__auto___29952 = G__29953;
continue;
} else {
}
break;
}

var G__29950 = args29948.length;
switch (G__29950) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29948.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args29955 = [];
var len__17378__auto___29958 = arguments.length;
var i__17379__auto___29959 = (0);
while(true){
if((i__17379__auto___29959 < len__17378__auto___29958)){
args29955.push((arguments[i__17379__auto___29959]));

var G__29960 = (i__17379__auto___29959 + (1));
i__17379__auto___29959 = G__29960;
continue;
} else {
}
break;
}

var G__29957 = args29955.length;
switch (G__29957) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29955.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args29962 = [];
var len__17378__auto___30033 = arguments.length;
var i__17379__auto___30034 = (0);
while(true){
if((i__17379__auto___30034 < len__17378__auto___30033)){
args29962.push((arguments[i__17379__auto___30034]));

var G__30035 = (i__17379__auto___30034 + (1));
i__17379__auto___30034 = G__30035;
continue;
} else {
}
break;
}

var G__29964 = args29962.length;
switch (G__29964) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29962.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20605__auto___30037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20605__auto___30037,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20606__auto__ = (function (){var switch__20540__auto__ = ((function (c__20605__auto___30037,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30003){
var state_val_30004 = (state_30003[(1)]);
if((state_val_30004 === (7))){
var state_30003__$1 = state_30003;
var statearr_30005_30038 = state_30003__$1;
(statearr_30005_30038[(2)] = null);

(statearr_30005_30038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30004 === (1))){
var state_30003__$1 = state_30003;
var statearr_30006_30039 = state_30003__$1;
(statearr_30006_30039[(2)] = null);

(statearr_30006_30039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30004 === (4))){
var inst_29967 = (state_30003[(7)]);
var inst_29969 = (inst_29967 < cnt);
var state_30003__$1 = state_30003;
if(cljs.core.truth_(inst_29969)){
var statearr_30007_30040 = state_30003__$1;
(statearr_30007_30040[(1)] = (6));

} else {
var statearr_30008_30041 = state_30003__$1;
(statearr_30008_30041[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30004 === (15))){
var inst_29999 = (state_30003[(2)]);
var state_30003__$1 = state_30003;
var statearr_30009_30042 = state_30003__$1;
(statearr_30009_30042[(2)] = inst_29999);

(statearr_30009_30042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30004 === (13))){
var inst_29992 = cljs.core.async.close_BANG_.call(null,out);
var state_30003__$1 = state_30003;
var statearr_30010_30043 = state_30003__$1;
(statearr_30010_30043[(2)] = inst_29992);

(statearr_30010_30043[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30004 === (6))){
var state_30003__$1 = state_30003;
var statearr_30011_30044 = state_30003__$1;
(statearr_30011_30044[(2)] = null);

(statearr_30011_30044[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30004 === (3))){
var inst_30001 = (state_30003[(2)]);
var state_30003__$1 = state_30003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30003__$1,inst_30001);
} else {
if((state_val_30004 === (12))){
var inst_29989 = (state_30003[(8)]);
var inst_29989__$1 = (state_30003[(2)]);
var inst_29990 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29989__$1);
var state_30003__$1 = (function (){var statearr_30012 = state_30003;
(statearr_30012[(8)] = inst_29989__$1);

return statearr_30012;
})();
if(cljs.core.truth_(inst_29990)){
var statearr_30013_30045 = state_30003__$1;
(statearr_30013_30045[(1)] = (13));

} else {
var statearr_30014_30046 = state_30003__$1;
(statearr_30014_30046[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30004 === (2))){
var inst_29966 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29967 = (0);
var state_30003__$1 = (function (){var statearr_30015 = state_30003;
(statearr_30015[(9)] = inst_29966);

(statearr_30015[(7)] = inst_29967);

return statearr_30015;
})();
var statearr_30016_30047 = state_30003__$1;
(statearr_30016_30047[(2)] = null);

(statearr_30016_30047[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30004 === (11))){
var inst_29967 = (state_30003[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30003,(10),Object,null,(9));
var inst_29976 = chs__$1.call(null,inst_29967);
var inst_29977 = done.call(null,inst_29967);
var inst_29978 = cljs.core.async.take_BANG_.call(null,inst_29976,inst_29977);
var state_30003__$1 = state_30003;
var statearr_30017_30048 = state_30003__$1;
(statearr_30017_30048[(2)] = inst_29978);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30003__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30004 === (9))){
var inst_29967 = (state_30003[(7)]);
var inst_29980 = (state_30003[(2)]);
var inst_29981 = (inst_29967 + (1));
var inst_29967__$1 = inst_29981;
var state_30003__$1 = (function (){var statearr_30018 = state_30003;
(statearr_30018[(10)] = inst_29980);

(statearr_30018[(7)] = inst_29967__$1);

return statearr_30018;
})();
var statearr_30019_30049 = state_30003__$1;
(statearr_30019_30049[(2)] = null);

(statearr_30019_30049[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30004 === (5))){
var inst_29987 = (state_30003[(2)]);
var state_30003__$1 = (function (){var statearr_30020 = state_30003;
(statearr_30020[(11)] = inst_29987);

return statearr_30020;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30003__$1,(12),dchan);
} else {
if((state_val_30004 === (14))){
var inst_29989 = (state_30003[(8)]);
var inst_29994 = cljs.core.apply.call(null,f,inst_29989);
var state_30003__$1 = state_30003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30003__$1,(16),out,inst_29994);
} else {
if((state_val_30004 === (16))){
var inst_29996 = (state_30003[(2)]);
var state_30003__$1 = (function (){var statearr_30021 = state_30003;
(statearr_30021[(12)] = inst_29996);

return statearr_30021;
})();
var statearr_30022_30050 = state_30003__$1;
(statearr_30022_30050[(2)] = null);

(statearr_30022_30050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30004 === (10))){
var inst_29971 = (state_30003[(2)]);
var inst_29972 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30003__$1 = (function (){var statearr_30023 = state_30003;
(statearr_30023[(13)] = inst_29971);

return statearr_30023;
})();
var statearr_30024_30051 = state_30003__$1;
(statearr_30024_30051[(2)] = inst_29972);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30003__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30004 === (8))){
var inst_29985 = (state_30003[(2)]);
var state_30003__$1 = state_30003;
var statearr_30025_30052 = state_30003__$1;
(statearr_30025_30052[(2)] = inst_29985);

(statearr_30025_30052[(1)] = (5));


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
});})(c__20605__auto___30037,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20540__auto__,c__20605__auto___30037,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20541__auto__ = null;
var cljs$core$async$state_machine__20541__auto____0 = (function (){
var statearr_30029 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30029[(0)] = cljs$core$async$state_machine__20541__auto__);

(statearr_30029[(1)] = (1));

return statearr_30029;
});
var cljs$core$async$state_machine__20541__auto____1 = (function (state_30003){
while(true){
var ret_value__20542__auto__ = (function (){try{while(true){
var result__20543__auto__ = switch__20540__auto__.call(null,state_30003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20543__auto__;
}
break;
}
}catch (e30030){if((e30030 instanceof Object)){
var ex__20544__auto__ = e30030;
var statearr_30031_30053 = state_30003;
(statearr_30031_30053[(5)] = ex__20544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30054 = state_30003;
state_30003 = G__30054;
continue;
} else {
return ret_value__20542__auto__;
}
break;
}
});
cljs$core$async$state_machine__20541__auto__ = function(state_30003){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20541__auto____1.call(this,state_30003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20541__auto____0;
cljs$core$async$state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20541__auto____1;
return cljs$core$async$state_machine__20541__auto__;
})()
;})(switch__20540__auto__,c__20605__auto___30037,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20607__auto__ = (function (){var statearr_30032 = f__20606__auto__.call(null);
(statearr_30032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20605__auto___30037);

return statearr_30032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20607__auto__);
});})(c__20605__auto___30037,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args30056 = [];
var len__17378__auto___30112 = arguments.length;
var i__17379__auto___30113 = (0);
while(true){
if((i__17379__auto___30113 < len__17378__auto___30112)){
args30056.push((arguments[i__17379__auto___30113]));

var G__30114 = (i__17379__auto___30113 + (1));
i__17379__auto___30113 = G__30114;
continue;
} else {
}
break;
}

var G__30058 = args30056.length;
switch (G__30058) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30056.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20605__auto___30116 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20605__auto___30116,out){
return (function (){
var f__20606__auto__ = (function (){var switch__20540__auto__ = ((function (c__20605__auto___30116,out){
return (function (state_30088){
var state_val_30089 = (state_30088[(1)]);
if((state_val_30089 === (7))){
var inst_30067 = (state_30088[(7)]);
var inst_30068 = (state_30088[(8)]);
var inst_30067__$1 = (state_30088[(2)]);
var inst_30068__$1 = cljs.core.nth.call(null,inst_30067__$1,(0),null);
var inst_30069 = cljs.core.nth.call(null,inst_30067__$1,(1),null);
var inst_30070 = (inst_30068__$1 == null);
var state_30088__$1 = (function (){var statearr_30090 = state_30088;
(statearr_30090[(7)] = inst_30067__$1);

(statearr_30090[(8)] = inst_30068__$1);

(statearr_30090[(9)] = inst_30069);

return statearr_30090;
})();
if(cljs.core.truth_(inst_30070)){
var statearr_30091_30117 = state_30088__$1;
(statearr_30091_30117[(1)] = (8));

} else {
var statearr_30092_30118 = state_30088__$1;
(statearr_30092_30118[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30089 === (1))){
var inst_30059 = cljs.core.vec.call(null,chs);
var inst_30060 = inst_30059;
var state_30088__$1 = (function (){var statearr_30093 = state_30088;
(statearr_30093[(10)] = inst_30060);

return statearr_30093;
})();
var statearr_30094_30119 = state_30088__$1;
(statearr_30094_30119[(2)] = null);

(statearr_30094_30119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30089 === (4))){
var inst_30060 = (state_30088[(10)]);
var state_30088__$1 = state_30088;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30088__$1,(7),inst_30060);
} else {
if((state_val_30089 === (6))){
var inst_30084 = (state_30088[(2)]);
var state_30088__$1 = state_30088;
var statearr_30095_30120 = state_30088__$1;
(statearr_30095_30120[(2)] = inst_30084);

(statearr_30095_30120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30089 === (3))){
var inst_30086 = (state_30088[(2)]);
var state_30088__$1 = state_30088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30088__$1,inst_30086);
} else {
if((state_val_30089 === (2))){
var inst_30060 = (state_30088[(10)]);
var inst_30062 = cljs.core.count.call(null,inst_30060);
var inst_30063 = (inst_30062 > (0));
var state_30088__$1 = state_30088;
if(cljs.core.truth_(inst_30063)){
var statearr_30097_30121 = state_30088__$1;
(statearr_30097_30121[(1)] = (4));

} else {
var statearr_30098_30122 = state_30088__$1;
(statearr_30098_30122[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30089 === (11))){
var inst_30060 = (state_30088[(10)]);
var inst_30077 = (state_30088[(2)]);
var tmp30096 = inst_30060;
var inst_30060__$1 = tmp30096;
var state_30088__$1 = (function (){var statearr_30099 = state_30088;
(statearr_30099[(10)] = inst_30060__$1);

(statearr_30099[(11)] = inst_30077);

return statearr_30099;
})();
var statearr_30100_30123 = state_30088__$1;
(statearr_30100_30123[(2)] = null);

(statearr_30100_30123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30089 === (9))){
var inst_30068 = (state_30088[(8)]);
var state_30088__$1 = state_30088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30088__$1,(11),out,inst_30068);
} else {
if((state_val_30089 === (5))){
var inst_30082 = cljs.core.async.close_BANG_.call(null,out);
var state_30088__$1 = state_30088;
var statearr_30101_30124 = state_30088__$1;
(statearr_30101_30124[(2)] = inst_30082);

(statearr_30101_30124[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30089 === (10))){
var inst_30080 = (state_30088[(2)]);
var state_30088__$1 = state_30088;
var statearr_30102_30125 = state_30088__$1;
(statearr_30102_30125[(2)] = inst_30080);

(statearr_30102_30125[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30089 === (8))){
var inst_30060 = (state_30088[(10)]);
var inst_30067 = (state_30088[(7)]);
var inst_30068 = (state_30088[(8)]);
var inst_30069 = (state_30088[(9)]);
var inst_30072 = (function (){var cs = inst_30060;
var vec__30065 = inst_30067;
var v = inst_30068;
var c = inst_30069;
return ((function (cs,vec__30065,v,c,inst_30060,inst_30067,inst_30068,inst_30069,state_val_30089,c__20605__auto___30116,out){
return (function (p1__30055_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30055_SHARP_);
});
;})(cs,vec__30065,v,c,inst_30060,inst_30067,inst_30068,inst_30069,state_val_30089,c__20605__auto___30116,out))
})();
var inst_30073 = cljs.core.filterv.call(null,inst_30072,inst_30060);
var inst_30060__$1 = inst_30073;
var state_30088__$1 = (function (){var statearr_30103 = state_30088;
(statearr_30103[(10)] = inst_30060__$1);

return statearr_30103;
})();
var statearr_30104_30126 = state_30088__$1;
(statearr_30104_30126[(2)] = null);

(statearr_30104_30126[(1)] = (2));


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
});})(c__20605__auto___30116,out))
;
return ((function (switch__20540__auto__,c__20605__auto___30116,out){
return (function() {
var cljs$core$async$state_machine__20541__auto__ = null;
var cljs$core$async$state_machine__20541__auto____0 = (function (){
var statearr_30108 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30108[(0)] = cljs$core$async$state_machine__20541__auto__);

(statearr_30108[(1)] = (1));

return statearr_30108;
});
var cljs$core$async$state_machine__20541__auto____1 = (function (state_30088){
while(true){
var ret_value__20542__auto__ = (function (){try{while(true){
var result__20543__auto__ = switch__20540__auto__.call(null,state_30088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20543__auto__;
}
break;
}
}catch (e30109){if((e30109 instanceof Object)){
var ex__20544__auto__ = e30109;
var statearr_30110_30127 = state_30088;
(statearr_30110_30127[(5)] = ex__20544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30128 = state_30088;
state_30088 = G__30128;
continue;
} else {
return ret_value__20542__auto__;
}
break;
}
});
cljs$core$async$state_machine__20541__auto__ = function(state_30088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20541__auto____1.call(this,state_30088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20541__auto____0;
cljs$core$async$state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20541__auto____1;
return cljs$core$async$state_machine__20541__auto__;
})()
;})(switch__20540__auto__,c__20605__auto___30116,out))
})();
var state__20607__auto__ = (function (){var statearr_30111 = f__20606__auto__.call(null);
(statearr_30111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20605__auto___30116);

return statearr_30111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20607__auto__);
});})(c__20605__auto___30116,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args30129 = [];
var len__17378__auto___30178 = arguments.length;
var i__17379__auto___30179 = (0);
while(true){
if((i__17379__auto___30179 < len__17378__auto___30178)){
args30129.push((arguments[i__17379__auto___30179]));

var G__30180 = (i__17379__auto___30179 + (1));
i__17379__auto___30179 = G__30180;
continue;
} else {
}
break;
}

var G__30131 = args30129.length;
switch (G__30131) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30129.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20605__auto___30182 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20605__auto___30182,out){
return (function (){
var f__20606__auto__ = (function (){var switch__20540__auto__ = ((function (c__20605__auto___30182,out){
return (function (state_30155){
var state_val_30156 = (state_30155[(1)]);
if((state_val_30156 === (7))){
var inst_30137 = (state_30155[(7)]);
var inst_30137__$1 = (state_30155[(2)]);
var inst_30138 = (inst_30137__$1 == null);
var inst_30139 = cljs.core.not.call(null,inst_30138);
var state_30155__$1 = (function (){var statearr_30157 = state_30155;
(statearr_30157[(7)] = inst_30137__$1);

return statearr_30157;
})();
if(inst_30139){
var statearr_30158_30183 = state_30155__$1;
(statearr_30158_30183[(1)] = (8));

} else {
var statearr_30159_30184 = state_30155__$1;
(statearr_30159_30184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30156 === (1))){
var inst_30132 = (0);
var state_30155__$1 = (function (){var statearr_30160 = state_30155;
(statearr_30160[(8)] = inst_30132);

return statearr_30160;
})();
var statearr_30161_30185 = state_30155__$1;
(statearr_30161_30185[(2)] = null);

(statearr_30161_30185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30156 === (4))){
var state_30155__$1 = state_30155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30155__$1,(7),ch);
} else {
if((state_val_30156 === (6))){
var inst_30150 = (state_30155[(2)]);
var state_30155__$1 = state_30155;
var statearr_30162_30186 = state_30155__$1;
(statearr_30162_30186[(2)] = inst_30150);

(statearr_30162_30186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30156 === (3))){
var inst_30152 = (state_30155[(2)]);
var inst_30153 = cljs.core.async.close_BANG_.call(null,out);
var state_30155__$1 = (function (){var statearr_30163 = state_30155;
(statearr_30163[(9)] = inst_30152);

return statearr_30163;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30155__$1,inst_30153);
} else {
if((state_val_30156 === (2))){
var inst_30132 = (state_30155[(8)]);
var inst_30134 = (inst_30132 < n);
var state_30155__$1 = state_30155;
if(cljs.core.truth_(inst_30134)){
var statearr_30164_30187 = state_30155__$1;
(statearr_30164_30187[(1)] = (4));

} else {
var statearr_30165_30188 = state_30155__$1;
(statearr_30165_30188[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30156 === (11))){
var inst_30132 = (state_30155[(8)]);
var inst_30142 = (state_30155[(2)]);
var inst_30143 = (inst_30132 + (1));
var inst_30132__$1 = inst_30143;
var state_30155__$1 = (function (){var statearr_30166 = state_30155;
(statearr_30166[(10)] = inst_30142);

(statearr_30166[(8)] = inst_30132__$1);

return statearr_30166;
})();
var statearr_30167_30189 = state_30155__$1;
(statearr_30167_30189[(2)] = null);

(statearr_30167_30189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30156 === (9))){
var state_30155__$1 = state_30155;
var statearr_30168_30190 = state_30155__$1;
(statearr_30168_30190[(2)] = null);

(statearr_30168_30190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30156 === (5))){
var state_30155__$1 = state_30155;
var statearr_30169_30191 = state_30155__$1;
(statearr_30169_30191[(2)] = null);

(statearr_30169_30191[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30156 === (10))){
var inst_30147 = (state_30155[(2)]);
var state_30155__$1 = state_30155;
var statearr_30170_30192 = state_30155__$1;
(statearr_30170_30192[(2)] = inst_30147);

(statearr_30170_30192[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30156 === (8))){
var inst_30137 = (state_30155[(7)]);
var state_30155__$1 = state_30155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30155__$1,(11),out,inst_30137);
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
});})(c__20605__auto___30182,out))
;
return ((function (switch__20540__auto__,c__20605__auto___30182,out){
return (function() {
var cljs$core$async$state_machine__20541__auto__ = null;
var cljs$core$async$state_machine__20541__auto____0 = (function (){
var statearr_30174 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30174[(0)] = cljs$core$async$state_machine__20541__auto__);

(statearr_30174[(1)] = (1));

return statearr_30174;
});
var cljs$core$async$state_machine__20541__auto____1 = (function (state_30155){
while(true){
var ret_value__20542__auto__ = (function (){try{while(true){
var result__20543__auto__ = switch__20540__auto__.call(null,state_30155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20543__auto__;
}
break;
}
}catch (e30175){if((e30175 instanceof Object)){
var ex__20544__auto__ = e30175;
var statearr_30176_30193 = state_30155;
(statearr_30176_30193[(5)] = ex__20544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30194 = state_30155;
state_30155 = G__30194;
continue;
} else {
return ret_value__20542__auto__;
}
break;
}
});
cljs$core$async$state_machine__20541__auto__ = function(state_30155){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20541__auto____1.call(this,state_30155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20541__auto____0;
cljs$core$async$state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20541__auto____1;
return cljs$core$async$state_machine__20541__auto__;
})()
;})(switch__20540__auto__,c__20605__auto___30182,out))
})();
var state__20607__auto__ = (function (){var statearr_30177 = f__20606__auto__.call(null);
(statearr_30177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20605__auto___30182);

return statearr_30177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20607__auto__);
});})(c__20605__auto___30182,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30202 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30202 = (function (map_LT_,f,ch,meta30203){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30203 = meta30203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30204,meta30203__$1){
var self__ = this;
var _30204__$1 = this;
return (new cljs.core.async.t_cljs$core$async30202(self__.map_LT_,self__.f,self__.ch,meta30203__$1));
});

cljs.core.async.t_cljs$core$async30202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30204){
var self__ = this;
var _30204__$1 = this;
return self__.meta30203;
});

cljs.core.async.t_cljs$core$async30202.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30202.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30202.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30202.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30202.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30205 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30205 = (function (map_LT_,f,ch,meta30203,_,fn1,meta30206){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30203 = meta30203;
this._ = _;
this.fn1 = fn1;
this.meta30206 = meta30206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30207,meta30206__$1){
var self__ = this;
var _30207__$1 = this;
return (new cljs.core.async.t_cljs$core$async30205(self__.map_LT_,self__.f,self__.ch,self__.meta30203,self__._,self__.fn1,meta30206__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30205.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30207){
var self__ = this;
var _30207__$1 = this;
return self__.meta30206;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30205.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30205.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30205.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30195_SHARP_){
return f1.call(null,(((p1__30195_SHARP_ == null))?null:self__.f.call(null,p1__30195_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30205.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30203","meta30203",242735663,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30202","cljs.core.async/t_cljs$core$async30202",-181940630,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30206","meta30206",-1962671837,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30205.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30205";

cljs.core.async.t_cljs$core$async30205.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async30205");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30205 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30205(map_LT___$1,f__$1,ch__$1,meta30203__$1,___$2,fn1__$1,meta30206){
return (new cljs.core.async.t_cljs$core$async30205(map_LT___$1,f__$1,ch__$1,meta30203__$1,___$2,fn1__$1,meta30206));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30205(self__.map_LT_,self__.f,self__.ch,self__.meta30203,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16308__auto__ = ret;
if(cljs.core.truth_(and__16308__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16308__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30202.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30202.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30203","meta30203",242735663,null)], null);
});

cljs.core.async.t_cljs$core$async30202.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30202";

cljs.core.async.t_cljs$core$async30202.cljs$lang$ctorPrWriter = (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async30202");
});

cljs.core.async.__GT_t_cljs$core$async30202 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30202(map_LT___$1,f__$1,ch__$1,meta30203){
return (new cljs.core.async.t_cljs$core$async30202(map_LT___$1,f__$1,ch__$1,meta30203));
});

}

return (new cljs.core.async.t_cljs$core$async30202(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30211 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30211 = (function (map_GT_,f,ch,meta30212){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30212 = meta30212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30213,meta30212__$1){
var self__ = this;
var _30213__$1 = this;
return (new cljs.core.async.t_cljs$core$async30211(self__.map_GT_,self__.f,self__.ch,meta30212__$1));
});

cljs.core.async.t_cljs$core$async30211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30213){
var self__ = this;
var _30213__$1 = this;
return self__.meta30212;
});

cljs.core.async.t_cljs$core$async30211.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30211.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30211.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30211.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30211.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30211.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30211.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30212","meta30212",-1879936888,null)], null);
});

cljs.core.async.t_cljs$core$async30211.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30211.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30211";

cljs.core.async.t_cljs$core$async30211.cljs$lang$ctorPrWriter = (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async30211");
});

cljs.core.async.__GT_t_cljs$core$async30211 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30211(map_GT___$1,f__$1,ch__$1,meta30212){
return (new cljs.core.async.t_cljs$core$async30211(map_GT___$1,f__$1,ch__$1,meta30212));
});

}

return (new cljs.core.async.t_cljs$core$async30211(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30217 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30217 = (function (filter_GT_,p,ch,meta30218){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30218 = meta30218;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30219,meta30218__$1){
var self__ = this;
var _30219__$1 = this;
return (new cljs.core.async.t_cljs$core$async30217(self__.filter_GT_,self__.p,self__.ch,meta30218__$1));
});

cljs.core.async.t_cljs$core$async30217.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30219){
var self__ = this;
var _30219__$1 = this;
return self__.meta30218;
});

cljs.core.async.t_cljs$core$async30217.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30217.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30217.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30217.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30217.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30217.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30217.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30217.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30218","meta30218",-1900933127,null)], null);
});

cljs.core.async.t_cljs$core$async30217.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30217.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30217";

cljs.core.async.t_cljs$core$async30217.cljs$lang$ctorPrWriter = (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async30217");
});

cljs.core.async.__GT_t_cljs$core$async30217 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30217(filter_GT___$1,p__$1,ch__$1,meta30218){
return (new cljs.core.async.t_cljs$core$async30217(filter_GT___$1,p__$1,ch__$1,meta30218));
});

}

return (new cljs.core.async.t_cljs$core$async30217(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args30220 = [];
var len__17378__auto___30264 = arguments.length;
var i__17379__auto___30265 = (0);
while(true){
if((i__17379__auto___30265 < len__17378__auto___30264)){
args30220.push((arguments[i__17379__auto___30265]));

var G__30266 = (i__17379__auto___30265 + (1));
i__17379__auto___30265 = G__30266;
continue;
} else {
}
break;
}

var G__30222 = args30220.length;
switch (G__30222) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30220.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20605__auto___30268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20605__auto___30268,out){
return (function (){
var f__20606__auto__ = (function (){var switch__20540__auto__ = ((function (c__20605__auto___30268,out){
return (function (state_30243){
var state_val_30244 = (state_30243[(1)]);
if((state_val_30244 === (7))){
var inst_30239 = (state_30243[(2)]);
var state_30243__$1 = state_30243;
var statearr_30245_30269 = state_30243__$1;
(statearr_30245_30269[(2)] = inst_30239);

(statearr_30245_30269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30244 === (1))){
var state_30243__$1 = state_30243;
var statearr_30246_30270 = state_30243__$1;
(statearr_30246_30270[(2)] = null);

(statearr_30246_30270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30244 === (4))){
var inst_30225 = (state_30243[(7)]);
var inst_30225__$1 = (state_30243[(2)]);
var inst_30226 = (inst_30225__$1 == null);
var state_30243__$1 = (function (){var statearr_30247 = state_30243;
(statearr_30247[(7)] = inst_30225__$1);

return statearr_30247;
})();
if(cljs.core.truth_(inst_30226)){
var statearr_30248_30271 = state_30243__$1;
(statearr_30248_30271[(1)] = (5));

} else {
var statearr_30249_30272 = state_30243__$1;
(statearr_30249_30272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30244 === (6))){
var inst_30225 = (state_30243[(7)]);
var inst_30230 = p.call(null,inst_30225);
var state_30243__$1 = state_30243;
if(cljs.core.truth_(inst_30230)){
var statearr_30250_30273 = state_30243__$1;
(statearr_30250_30273[(1)] = (8));

} else {
var statearr_30251_30274 = state_30243__$1;
(statearr_30251_30274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30244 === (3))){
var inst_30241 = (state_30243[(2)]);
var state_30243__$1 = state_30243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30243__$1,inst_30241);
} else {
if((state_val_30244 === (2))){
var state_30243__$1 = state_30243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30243__$1,(4),ch);
} else {
if((state_val_30244 === (11))){
var inst_30233 = (state_30243[(2)]);
var state_30243__$1 = state_30243;
var statearr_30252_30275 = state_30243__$1;
(statearr_30252_30275[(2)] = inst_30233);

(statearr_30252_30275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30244 === (9))){
var state_30243__$1 = state_30243;
var statearr_30253_30276 = state_30243__$1;
(statearr_30253_30276[(2)] = null);

(statearr_30253_30276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30244 === (5))){
var inst_30228 = cljs.core.async.close_BANG_.call(null,out);
var state_30243__$1 = state_30243;
var statearr_30254_30277 = state_30243__$1;
(statearr_30254_30277[(2)] = inst_30228);

(statearr_30254_30277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30244 === (10))){
var inst_30236 = (state_30243[(2)]);
var state_30243__$1 = (function (){var statearr_30255 = state_30243;
(statearr_30255[(8)] = inst_30236);

return statearr_30255;
})();
var statearr_30256_30278 = state_30243__$1;
(statearr_30256_30278[(2)] = null);

(statearr_30256_30278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30244 === (8))){
var inst_30225 = (state_30243[(7)]);
var state_30243__$1 = state_30243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30243__$1,(11),out,inst_30225);
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
});})(c__20605__auto___30268,out))
;
return ((function (switch__20540__auto__,c__20605__auto___30268,out){
return (function() {
var cljs$core$async$state_machine__20541__auto__ = null;
var cljs$core$async$state_machine__20541__auto____0 = (function (){
var statearr_30260 = [null,null,null,null,null,null,null,null,null];
(statearr_30260[(0)] = cljs$core$async$state_machine__20541__auto__);

(statearr_30260[(1)] = (1));

return statearr_30260;
});
var cljs$core$async$state_machine__20541__auto____1 = (function (state_30243){
while(true){
var ret_value__20542__auto__ = (function (){try{while(true){
var result__20543__auto__ = switch__20540__auto__.call(null,state_30243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20543__auto__;
}
break;
}
}catch (e30261){if((e30261 instanceof Object)){
var ex__20544__auto__ = e30261;
var statearr_30262_30279 = state_30243;
(statearr_30262_30279[(5)] = ex__20544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30280 = state_30243;
state_30243 = G__30280;
continue;
} else {
return ret_value__20542__auto__;
}
break;
}
});
cljs$core$async$state_machine__20541__auto__ = function(state_30243){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20541__auto____1.call(this,state_30243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20541__auto____0;
cljs$core$async$state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20541__auto____1;
return cljs$core$async$state_machine__20541__auto__;
})()
;})(switch__20540__auto__,c__20605__auto___30268,out))
})();
var state__20607__auto__ = (function (){var statearr_30263 = f__20606__auto__.call(null);
(statearr_30263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20605__auto___30268);

return statearr_30263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20607__auto__);
});})(c__20605__auto___30268,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30281 = [];
var len__17378__auto___30284 = arguments.length;
var i__17379__auto___30285 = (0);
while(true){
if((i__17379__auto___30285 < len__17378__auto___30284)){
args30281.push((arguments[i__17379__auto___30285]));

var G__30286 = (i__17379__auto___30285 + (1));
i__17379__auto___30285 = G__30286;
continue;
} else {
}
break;
}

var G__30283 = args30281.length;
switch (G__30283) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30281.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20605__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20605__auto__){
return (function (){
var f__20606__auto__ = (function (){var switch__20540__auto__ = ((function (c__20605__auto__){
return (function (state_30453){
var state_val_30454 = (state_30453[(1)]);
if((state_val_30454 === (7))){
var inst_30449 = (state_30453[(2)]);
var state_30453__$1 = state_30453;
var statearr_30455_30496 = state_30453__$1;
(statearr_30455_30496[(2)] = inst_30449);

(statearr_30455_30496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (20))){
var inst_30419 = (state_30453[(7)]);
var inst_30430 = (state_30453[(2)]);
var inst_30431 = cljs.core.next.call(null,inst_30419);
var inst_30405 = inst_30431;
var inst_30406 = null;
var inst_30407 = (0);
var inst_30408 = (0);
var state_30453__$1 = (function (){var statearr_30456 = state_30453;
(statearr_30456[(8)] = inst_30407);

(statearr_30456[(9)] = inst_30406);

(statearr_30456[(10)] = inst_30408);

(statearr_30456[(11)] = inst_30430);

(statearr_30456[(12)] = inst_30405);

return statearr_30456;
})();
var statearr_30457_30497 = state_30453__$1;
(statearr_30457_30497[(2)] = null);

(statearr_30457_30497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (1))){
var state_30453__$1 = state_30453;
var statearr_30458_30498 = state_30453__$1;
(statearr_30458_30498[(2)] = null);

(statearr_30458_30498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (4))){
var inst_30394 = (state_30453[(13)]);
var inst_30394__$1 = (state_30453[(2)]);
var inst_30395 = (inst_30394__$1 == null);
var state_30453__$1 = (function (){var statearr_30459 = state_30453;
(statearr_30459[(13)] = inst_30394__$1);

return statearr_30459;
})();
if(cljs.core.truth_(inst_30395)){
var statearr_30460_30499 = state_30453__$1;
(statearr_30460_30499[(1)] = (5));

} else {
var statearr_30461_30500 = state_30453__$1;
(statearr_30461_30500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (15))){
var state_30453__$1 = state_30453;
var statearr_30465_30501 = state_30453__$1;
(statearr_30465_30501[(2)] = null);

(statearr_30465_30501[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (21))){
var state_30453__$1 = state_30453;
var statearr_30466_30502 = state_30453__$1;
(statearr_30466_30502[(2)] = null);

(statearr_30466_30502[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (13))){
var inst_30407 = (state_30453[(8)]);
var inst_30406 = (state_30453[(9)]);
var inst_30408 = (state_30453[(10)]);
var inst_30405 = (state_30453[(12)]);
var inst_30415 = (state_30453[(2)]);
var inst_30416 = (inst_30408 + (1));
var tmp30462 = inst_30407;
var tmp30463 = inst_30406;
var tmp30464 = inst_30405;
var inst_30405__$1 = tmp30464;
var inst_30406__$1 = tmp30463;
var inst_30407__$1 = tmp30462;
var inst_30408__$1 = inst_30416;
var state_30453__$1 = (function (){var statearr_30467 = state_30453;
(statearr_30467[(8)] = inst_30407__$1);

(statearr_30467[(9)] = inst_30406__$1);

(statearr_30467[(10)] = inst_30408__$1);

(statearr_30467[(12)] = inst_30405__$1);

(statearr_30467[(14)] = inst_30415);

return statearr_30467;
})();
var statearr_30468_30503 = state_30453__$1;
(statearr_30468_30503[(2)] = null);

(statearr_30468_30503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (22))){
var state_30453__$1 = state_30453;
var statearr_30469_30504 = state_30453__$1;
(statearr_30469_30504[(2)] = null);

(statearr_30469_30504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (6))){
var inst_30394 = (state_30453[(13)]);
var inst_30403 = f.call(null,inst_30394);
var inst_30404 = cljs.core.seq.call(null,inst_30403);
var inst_30405 = inst_30404;
var inst_30406 = null;
var inst_30407 = (0);
var inst_30408 = (0);
var state_30453__$1 = (function (){var statearr_30470 = state_30453;
(statearr_30470[(8)] = inst_30407);

(statearr_30470[(9)] = inst_30406);

(statearr_30470[(10)] = inst_30408);

(statearr_30470[(12)] = inst_30405);

return statearr_30470;
})();
var statearr_30471_30505 = state_30453__$1;
(statearr_30471_30505[(2)] = null);

(statearr_30471_30505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (17))){
var inst_30419 = (state_30453[(7)]);
var inst_30423 = cljs.core.chunk_first.call(null,inst_30419);
var inst_30424 = cljs.core.chunk_rest.call(null,inst_30419);
var inst_30425 = cljs.core.count.call(null,inst_30423);
var inst_30405 = inst_30424;
var inst_30406 = inst_30423;
var inst_30407 = inst_30425;
var inst_30408 = (0);
var state_30453__$1 = (function (){var statearr_30472 = state_30453;
(statearr_30472[(8)] = inst_30407);

(statearr_30472[(9)] = inst_30406);

(statearr_30472[(10)] = inst_30408);

(statearr_30472[(12)] = inst_30405);

return statearr_30472;
})();
var statearr_30473_30506 = state_30453__$1;
(statearr_30473_30506[(2)] = null);

(statearr_30473_30506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (3))){
var inst_30451 = (state_30453[(2)]);
var state_30453__$1 = state_30453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30453__$1,inst_30451);
} else {
if((state_val_30454 === (12))){
var inst_30439 = (state_30453[(2)]);
var state_30453__$1 = state_30453;
var statearr_30474_30507 = state_30453__$1;
(statearr_30474_30507[(2)] = inst_30439);

(statearr_30474_30507[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (2))){
var state_30453__$1 = state_30453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30453__$1,(4),in$);
} else {
if((state_val_30454 === (23))){
var inst_30447 = (state_30453[(2)]);
var state_30453__$1 = state_30453;
var statearr_30475_30508 = state_30453__$1;
(statearr_30475_30508[(2)] = inst_30447);

(statearr_30475_30508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (19))){
var inst_30434 = (state_30453[(2)]);
var state_30453__$1 = state_30453;
var statearr_30476_30509 = state_30453__$1;
(statearr_30476_30509[(2)] = inst_30434);

(statearr_30476_30509[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (11))){
var inst_30419 = (state_30453[(7)]);
var inst_30405 = (state_30453[(12)]);
var inst_30419__$1 = cljs.core.seq.call(null,inst_30405);
var state_30453__$1 = (function (){var statearr_30477 = state_30453;
(statearr_30477[(7)] = inst_30419__$1);

return statearr_30477;
})();
if(inst_30419__$1){
var statearr_30478_30510 = state_30453__$1;
(statearr_30478_30510[(1)] = (14));

} else {
var statearr_30479_30511 = state_30453__$1;
(statearr_30479_30511[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (9))){
var inst_30441 = (state_30453[(2)]);
var inst_30442 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30453__$1 = (function (){var statearr_30480 = state_30453;
(statearr_30480[(15)] = inst_30441);

return statearr_30480;
})();
if(cljs.core.truth_(inst_30442)){
var statearr_30481_30512 = state_30453__$1;
(statearr_30481_30512[(1)] = (21));

} else {
var statearr_30482_30513 = state_30453__$1;
(statearr_30482_30513[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (5))){
var inst_30397 = cljs.core.async.close_BANG_.call(null,out);
var state_30453__$1 = state_30453;
var statearr_30483_30514 = state_30453__$1;
(statearr_30483_30514[(2)] = inst_30397);

(statearr_30483_30514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (14))){
var inst_30419 = (state_30453[(7)]);
var inst_30421 = cljs.core.chunked_seq_QMARK_.call(null,inst_30419);
var state_30453__$1 = state_30453;
if(inst_30421){
var statearr_30484_30515 = state_30453__$1;
(statearr_30484_30515[(1)] = (17));

} else {
var statearr_30485_30516 = state_30453__$1;
(statearr_30485_30516[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (16))){
var inst_30437 = (state_30453[(2)]);
var state_30453__$1 = state_30453;
var statearr_30486_30517 = state_30453__$1;
(statearr_30486_30517[(2)] = inst_30437);

(statearr_30486_30517[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (10))){
var inst_30406 = (state_30453[(9)]);
var inst_30408 = (state_30453[(10)]);
var inst_30413 = cljs.core._nth.call(null,inst_30406,inst_30408);
var state_30453__$1 = state_30453;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30453__$1,(13),out,inst_30413);
} else {
if((state_val_30454 === (18))){
var inst_30419 = (state_30453[(7)]);
var inst_30428 = cljs.core.first.call(null,inst_30419);
var state_30453__$1 = state_30453;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30453__$1,(20),out,inst_30428);
} else {
if((state_val_30454 === (8))){
var inst_30407 = (state_30453[(8)]);
var inst_30408 = (state_30453[(10)]);
var inst_30410 = (inst_30408 < inst_30407);
var inst_30411 = inst_30410;
var state_30453__$1 = state_30453;
if(cljs.core.truth_(inst_30411)){
var statearr_30487_30518 = state_30453__$1;
(statearr_30487_30518[(1)] = (10));

} else {
var statearr_30488_30519 = state_30453__$1;
(statearr_30488_30519[(1)] = (11));

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
});})(c__20605__auto__))
;
return ((function (switch__20540__auto__,c__20605__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20541__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20541__auto____0 = (function (){
var statearr_30492 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30492[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20541__auto__);

(statearr_30492[(1)] = (1));

return statearr_30492;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20541__auto____1 = (function (state_30453){
while(true){
var ret_value__20542__auto__ = (function (){try{while(true){
var result__20543__auto__ = switch__20540__auto__.call(null,state_30453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20543__auto__;
}
break;
}
}catch (e30493){if((e30493 instanceof Object)){
var ex__20544__auto__ = e30493;
var statearr_30494_30520 = state_30453;
(statearr_30494_30520[(5)] = ex__20544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30521 = state_30453;
state_30453 = G__30521;
continue;
} else {
return ret_value__20542__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20541__auto__ = function(state_30453){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20541__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20541__auto____1.call(this,state_30453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20541__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20541__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20541__auto__;
})()
;})(switch__20540__auto__,c__20605__auto__))
})();
var state__20607__auto__ = (function (){var statearr_30495 = f__20606__auto__.call(null);
(statearr_30495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20605__auto__);

return statearr_30495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20607__auto__);
});})(c__20605__auto__))
);

return c__20605__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30522 = [];
var len__17378__auto___30525 = arguments.length;
var i__17379__auto___30526 = (0);
while(true){
if((i__17379__auto___30526 < len__17378__auto___30525)){
args30522.push((arguments[i__17379__auto___30526]));

var G__30527 = (i__17379__auto___30526 + (1));
i__17379__auto___30526 = G__30527;
continue;
} else {
}
break;
}

var G__30524 = args30522.length;
switch (G__30524) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30522.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args30529 = [];
var len__17378__auto___30532 = arguments.length;
var i__17379__auto___30533 = (0);
while(true){
if((i__17379__auto___30533 < len__17378__auto___30532)){
args30529.push((arguments[i__17379__auto___30533]));

var G__30534 = (i__17379__auto___30533 + (1));
i__17379__auto___30533 = G__30534;
continue;
} else {
}
break;
}

var G__30531 = args30529.length;
switch (G__30531) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30529.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args30536 = [];
var len__17378__auto___30587 = arguments.length;
var i__17379__auto___30588 = (0);
while(true){
if((i__17379__auto___30588 < len__17378__auto___30587)){
args30536.push((arguments[i__17379__auto___30588]));

var G__30589 = (i__17379__auto___30588 + (1));
i__17379__auto___30588 = G__30589;
continue;
} else {
}
break;
}

var G__30538 = args30536.length;
switch (G__30538) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30536.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20605__auto___30591 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20605__auto___30591,out){
return (function (){
var f__20606__auto__ = (function (){var switch__20540__auto__ = ((function (c__20605__auto___30591,out){
return (function (state_30562){
var state_val_30563 = (state_30562[(1)]);
if((state_val_30563 === (7))){
var inst_30557 = (state_30562[(2)]);
var state_30562__$1 = state_30562;
var statearr_30564_30592 = state_30562__$1;
(statearr_30564_30592[(2)] = inst_30557);

(statearr_30564_30592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (1))){
var inst_30539 = null;
var state_30562__$1 = (function (){var statearr_30565 = state_30562;
(statearr_30565[(7)] = inst_30539);

return statearr_30565;
})();
var statearr_30566_30593 = state_30562__$1;
(statearr_30566_30593[(2)] = null);

(statearr_30566_30593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (4))){
var inst_30542 = (state_30562[(8)]);
var inst_30542__$1 = (state_30562[(2)]);
var inst_30543 = (inst_30542__$1 == null);
var inst_30544 = cljs.core.not.call(null,inst_30543);
var state_30562__$1 = (function (){var statearr_30567 = state_30562;
(statearr_30567[(8)] = inst_30542__$1);

return statearr_30567;
})();
if(inst_30544){
var statearr_30568_30594 = state_30562__$1;
(statearr_30568_30594[(1)] = (5));

} else {
var statearr_30569_30595 = state_30562__$1;
(statearr_30569_30595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (6))){
var state_30562__$1 = state_30562;
var statearr_30570_30596 = state_30562__$1;
(statearr_30570_30596[(2)] = null);

(statearr_30570_30596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (3))){
var inst_30559 = (state_30562[(2)]);
var inst_30560 = cljs.core.async.close_BANG_.call(null,out);
var state_30562__$1 = (function (){var statearr_30571 = state_30562;
(statearr_30571[(9)] = inst_30559);

return statearr_30571;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30562__$1,inst_30560);
} else {
if((state_val_30563 === (2))){
var state_30562__$1 = state_30562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30562__$1,(4),ch);
} else {
if((state_val_30563 === (11))){
var inst_30542 = (state_30562[(8)]);
var inst_30551 = (state_30562[(2)]);
var inst_30539 = inst_30542;
var state_30562__$1 = (function (){var statearr_30572 = state_30562;
(statearr_30572[(10)] = inst_30551);

(statearr_30572[(7)] = inst_30539);

return statearr_30572;
})();
var statearr_30573_30597 = state_30562__$1;
(statearr_30573_30597[(2)] = null);

(statearr_30573_30597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (9))){
var inst_30542 = (state_30562[(8)]);
var state_30562__$1 = state_30562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30562__$1,(11),out,inst_30542);
} else {
if((state_val_30563 === (5))){
var inst_30542 = (state_30562[(8)]);
var inst_30539 = (state_30562[(7)]);
var inst_30546 = cljs.core._EQ_.call(null,inst_30542,inst_30539);
var state_30562__$1 = state_30562;
if(inst_30546){
var statearr_30575_30598 = state_30562__$1;
(statearr_30575_30598[(1)] = (8));

} else {
var statearr_30576_30599 = state_30562__$1;
(statearr_30576_30599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (10))){
var inst_30554 = (state_30562[(2)]);
var state_30562__$1 = state_30562;
var statearr_30577_30600 = state_30562__$1;
(statearr_30577_30600[(2)] = inst_30554);

(statearr_30577_30600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (8))){
var inst_30539 = (state_30562[(7)]);
var tmp30574 = inst_30539;
var inst_30539__$1 = tmp30574;
var state_30562__$1 = (function (){var statearr_30578 = state_30562;
(statearr_30578[(7)] = inst_30539__$1);

return statearr_30578;
})();
var statearr_30579_30601 = state_30562__$1;
(statearr_30579_30601[(2)] = null);

(statearr_30579_30601[(1)] = (2));


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
});})(c__20605__auto___30591,out))
;
return ((function (switch__20540__auto__,c__20605__auto___30591,out){
return (function() {
var cljs$core$async$state_machine__20541__auto__ = null;
var cljs$core$async$state_machine__20541__auto____0 = (function (){
var statearr_30583 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30583[(0)] = cljs$core$async$state_machine__20541__auto__);

(statearr_30583[(1)] = (1));

return statearr_30583;
});
var cljs$core$async$state_machine__20541__auto____1 = (function (state_30562){
while(true){
var ret_value__20542__auto__ = (function (){try{while(true){
var result__20543__auto__ = switch__20540__auto__.call(null,state_30562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20543__auto__;
}
break;
}
}catch (e30584){if((e30584 instanceof Object)){
var ex__20544__auto__ = e30584;
var statearr_30585_30602 = state_30562;
(statearr_30585_30602[(5)] = ex__20544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30603 = state_30562;
state_30562 = G__30603;
continue;
} else {
return ret_value__20542__auto__;
}
break;
}
});
cljs$core$async$state_machine__20541__auto__ = function(state_30562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20541__auto____1.call(this,state_30562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20541__auto____0;
cljs$core$async$state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20541__auto____1;
return cljs$core$async$state_machine__20541__auto__;
})()
;})(switch__20540__auto__,c__20605__auto___30591,out))
})();
var state__20607__auto__ = (function (){var statearr_30586 = f__20606__auto__.call(null);
(statearr_30586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20605__auto___30591);

return statearr_30586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20607__auto__);
});})(c__20605__auto___30591,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30604 = [];
var len__17378__auto___30674 = arguments.length;
var i__17379__auto___30675 = (0);
while(true){
if((i__17379__auto___30675 < len__17378__auto___30674)){
args30604.push((arguments[i__17379__auto___30675]));

var G__30676 = (i__17379__auto___30675 + (1));
i__17379__auto___30675 = G__30676;
continue;
} else {
}
break;
}

var G__30606 = args30604.length;
switch (G__30606) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30604.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20605__auto___30678 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20605__auto___30678,out){
return (function (){
var f__20606__auto__ = (function (){var switch__20540__auto__ = ((function (c__20605__auto___30678,out){
return (function (state_30644){
var state_val_30645 = (state_30644[(1)]);
if((state_val_30645 === (7))){
var inst_30640 = (state_30644[(2)]);
var state_30644__$1 = state_30644;
var statearr_30646_30679 = state_30644__$1;
(statearr_30646_30679[(2)] = inst_30640);

(statearr_30646_30679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30645 === (1))){
var inst_30607 = (new Array(n));
var inst_30608 = inst_30607;
var inst_30609 = (0);
var state_30644__$1 = (function (){var statearr_30647 = state_30644;
(statearr_30647[(7)] = inst_30609);

(statearr_30647[(8)] = inst_30608);

return statearr_30647;
})();
var statearr_30648_30680 = state_30644__$1;
(statearr_30648_30680[(2)] = null);

(statearr_30648_30680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30645 === (4))){
var inst_30612 = (state_30644[(9)]);
var inst_30612__$1 = (state_30644[(2)]);
var inst_30613 = (inst_30612__$1 == null);
var inst_30614 = cljs.core.not.call(null,inst_30613);
var state_30644__$1 = (function (){var statearr_30649 = state_30644;
(statearr_30649[(9)] = inst_30612__$1);

return statearr_30649;
})();
if(inst_30614){
var statearr_30650_30681 = state_30644__$1;
(statearr_30650_30681[(1)] = (5));

} else {
var statearr_30651_30682 = state_30644__$1;
(statearr_30651_30682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30645 === (15))){
var inst_30634 = (state_30644[(2)]);
var state_30644__$1 = state_30644;
var statearr_30652_30683 = state_30644__$1;
(statearr_30652_30683[(2)] = inst_30634);

(statearr_30652_30683[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30645 === (13))){
var state_30644__$1 = state_30644;
var statearr_30653_30684 = state_30644__$1;
(statearr_30653_30684[(2)] = null);

(statearr_30653_30684[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30645 === (6))){
var inst_30609 = (state_30644[(7)]);
var inst_30630 = (inst_30609 > (0));
var state_30644__$1 = state_30644;
if(cljs.core.truth_(inst_30630)){
var statearr_30654_30685 = state_30644__$1;
(statearr_30654_30685[(1)] = (12));

} else {
var statearr_30655_30686 = state_30644__$1;
(statearr_30655_30686[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30645 === (3))){
var inst_30642 = (state_30644[(2)]);
var state_30644__$1 = state_30644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30644__$1,inst_30642);
} else {
if((state_val_30645 === (12))){
var inst_30608 = (state_30644[(8)]);
var inst_30632 = cljs.core.vec.call(null,inst_30608);
var state_30644__$1 = state_30644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30644__$1,(15),out,inst_30632);
} else {
if((state_val_30645 === (2))){
var state_30644__$1 = state_30644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30644__$1,(4),ch);
} else {
if((state_val_30645 === (11))){
var inst_30624 = (state_30644[(2)]);
var inst_30625 = (new Array(n));
var inst_30608 = inst_30625;
var inst_30609 = (0);
var state_30644__$1 = (function (){var statearr_30656 = state_30644;
(statearr_30656[(7)] = inst_30609);

(statearr_30656[(8)] = inst_30608);

(statearr_30656[(10)] = inst_30624);

return statearr_30656;
})();
var statearr_30657_30687 = state_30644__$1;
(statearr_30657_30687[(2)] = null);

(statearr_30657_30687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30645 === (9))){
var inst_30608 = (state_30644[(8)]);
var inst_30622 = cljs.core.vec.call(null,inst_30608);
var state_30644__$1 = state_30644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30644__$1,(11),out,inst_30622);
} else {
if((state_val_30645 === (5))){
var inst_30609 = (state_30644[(7)]);
var inst_30612 = (state_30644[(9)]);
var inst_30617 = (state_30644[(11)]);
var inst_30608 = (state_30644[(8)]);
var inst_30616 = (inst_30608[inst_30609] = inst_30612);
var inst_30617__$1 = (inst_30609 + (1));
var inst_30618 = (inst_30617__$1 < n);
var state_30644__$1 = (function (){var statearr_30658 = state_30644;
(statearr_30658[(11)] = inst_30617__$1);

(statearr_30658[(12)] = inst_30616);

return statearr_30658;
})();
if(cljs.core.truth_(inst_30618)){
var statearr_30659_30688 = state_30644__$1;
(statearr_30659_30688[(1)] = (8));

} else {
var statearr_30660_30689 = state_30644__$1;
(statearr_30660_30689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30645 === (14))){
var inst_30637 = (state_30644[(2)]);
var inst_30638 = cljs.core.async.close_BANG_.call(null,out);
var state_30644__$1 = (function (){var statearr_30662 = state_30644;
(statearr_30662[(13)] = inst_30637);

return statearr_30662;
})();
var statearr_30663_30690 = state_30644__$1;
(statearr_30663_30690[(2)] = inst_30638);

(statearr_30663_30690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30645 === (10))){
var inst_30628 = (state_30644[(2)]);
var state_30644__$1 = state_30644;
var statearr_30664_30691 = state_30644__$1;
(statearr_30664_30691[(2)] = inst_30628);

(statearr_30664_30691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30645 === (8))){
var inst_30617 = (state_30644[(11)]);
var inst_30608 = (state_30644[(8)]);
var tmp30661 = inst_30608;
var inst_30608__$1 = tmp30661;
var inst_30609 = inst_30617;
var state_30644__$1 = (function (){var statearr_30665 = state_30644;
(statearr_30665[(7)] = inst_30609);

(statearr_30665[(8)] = inst_30608__$1);

return statearr_30665;
})();
var statearr_30666_30692 = state_30644__$1;
(statearr_30666_30692[(2)] = null);

(statearr_30666_30692[(1)] = (2));


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
});})(c__20605__auto___30678,out))
;
return ((function (switch__20540__auto__,c__20605__auto___30678,out){
return (function() {
var cljs$core$async$state_machine__20541__auto__ = null;
var cljs$core$async$state_machine__20541__auto____0 = (function (){
var statearr_30670 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30670[(0)] = cljs$core$async$state_machine__20541__auto__);

(statearr_30670[(1)] = (1));

return statearr_30670;
});
var cljs$core$async$state_machine__20541__auto____1 = (function (state_30644){
while(true){
var ret_value__20542__auto__ = (function (){try{while(true){
var result__20543__auto__ = switch__20540__auto__.call(null,state_30644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20543__auto__;
}
break;
}
}catch (e30671){if((e30671 instanceof Object)){
var ex__20544__auto__ = e30671;
var statearr_30672_30693 = state_30644;
(statearr_30672_30693[(5)] = ex__20544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30694 = state_30644;
state_30644 = G__30694;
continue;
} else {
return ret_value__20542__auto__;
}
break;
}
});
cljs$core$async$state_machine__20541__auto__ = function(state_30644){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20541__auto____1.call(this,state_30644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20541__auto____0;
cljs$core$async$state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20541__auto____1;
return cljs$core$async$state_machine__20541__auto__;
})()
;})(switch__20540__auto__,c__20605__auto___30678,out))
})();
var state__20607__auto__ = (function (){var statearr_30673 = f__20606__auto__.call(null);
(statearr_30673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20605__auto___30678);

return statearr_30673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20607__auto__);
});})(c__20605__auto___30678,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30695 = [];
var len__17378__auto___30769 = arguments.length;
var i__17379__auto___30770 = (0);
while(true){
if((i__17379__auto___30770 < len__17378__auto___30769)){
args30695.push((arguments[i__17379__auto___30770]));

var G__30771 = (i__17379__auto___30770 + (1));
i__17379__auto___30770 = G__30771;
continue;
} else {
}
break;
}

var G__30697 = args30695.length;
switch (G__30697) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30695.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20605__auto___30773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20605__auto___30773,out){
return (function (){
var f__20606__auto__ = (function (){var switch__20540__auto__ = ((function (c__20605__auto___30773,out){
return (function (state_30739){
var state_val_30740 = (state_30739[(1)]);
if((state_val_30740 === (7))){
var inst_30735 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
var statearr_30741_30774 = state_30739__$1;
(statearr_30741_30774[(2)] = inst_30735);

(statearr_30741_30774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (1))){
var inst_30698 = [];
var inst_30699 = inst_30698;
var inst_30700 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30739__$1 = (function (){var statearr_30742 = state_30739;
(statearr_30742[(7)] = inst_30699);

(statearr_30742[(8)] = inst_30700);

return statearr_30742;
})();
var statearr_30743_30775 = state_30739__$1;
(statearr_30743_30775[(2)] = null);

(statearr_30743_30775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (4))){
var inst_30703 = (state_30739[(9)]);
var inst_30703__$1 = (state_30739[(2)]);
var inst_30704 = (inst_30703__$1 == null);
var inst_30705 = cljs.core.not.call(null,inst_30704);
var state_30739__$1 = (function (){var statearr_30744 = state_30739;
(statearr_30744[(9)] = inst_30703__$1);

return statearr_30744;
})();
if(inst_30705){
var statearr_30745_30776 = state_30739__$1;
(statearr_30745_30776[(1)] = (5));

} else {
var statearr_30746_30777 = state_30739__$1;
(statearr_30746_30777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (15))){
var inst_30729 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
var statearr_30747_30778 = state_30739__$1;
(statearr_30747_30778[(2)] = inst_30729);

(statearr_30747_30778[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (13))){
var state_30739__$1 = state_30739;
var statearr_30748_30779 = state_30739__$1;
(statearr_30748_30779[(2)] = null);

(statearr_30748_30779[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (6))){
var inst_30699 = (state_30739[(7)]);
var inst_30724 = inst_30699.length;
var inst_30725 = (inst_30724 > (0));
var state_30739__$1 = state_30739;
if(cljs.core.truth_(inst_30725)){
var statearr_30749_30780 = state_30739__$1;
(statearr_30749_30780[(1)] = (12));

} else {
var statearr_30750_30781 = state_30739__$1;
(statearr_30750_30781[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (3))){
var inst_30737 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30739__$1,inst_30737);
} else {
if((state_val_30740 === (12))){
var inst_30699 = (state_30739[(7)]);
var inst_30727 = cljs.core.vec.call(null,inst_30699);
var state_30739__$1 = state_30739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30739__$1,(15),out,inst_30727);
} else {
if((state_val_30740 === (2))){
var state_30739__$1 = state_30739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30739__$1,(4),ch);
} else {
if((state_val_30740 === (11))){
var inst_30707 = (state_30739[(10)]);
var inst_30703 = (state_30739[(9)]);
var inst_30717 = (state_30739[(2)]);
var inst_30718 = [];
var inst_30719 = inst_30718.push(inst_30703);
var inst_30699 = inst_30718;
var inst_30700 = inst_30707;
var state_30739__$1 = (function (){var statearr_30751 = state_30739;
(statearr_30751[(7)] = inst_30699);

(statearr_30751[(8)] = inst_30700);

(statearr_30751[(11)] = inst_30719);

(statearr_30751[(12)] = inst_30717);

return statearr_30751;
})();
var statearr_30752_30782 = state_30739__$1;
(statearr_30752_30782[(2)] = null);

(statearr_30752_30782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (9))){
var inst_30699 = (state_30739[(7)]);
var inst_30715 = cljs.core.vec.call(null,inst_30699);
var state_30739__$1 = state_30739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30739__$1,(11),out,inst_30715);
} else {
if((state_val_30740 === (5))){
var inst_30707 = (state_30739[(10)]);
var inst_30700 = (state_30739[(8)]);
var inst_30703 = (state_30739[(9)]);
var inst_30707__$1 = f.call(null,inst_30703);
var inst_30708 = cljs.core._EQ_.call(null,inst_30707__$1,inst_30700);
var inst_30709 = cljs.core.keyword_identical_QMARK_.call(null,inst_30700,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30710 = (inst_30708) || (inst_30709);
var state_30739__$1 = (function (){var statearr_30753 = state_30739;
(statearr_30753[(10)] = inst_30707__$1);

return statearr_30753;
})();
if(cljs.core.truth_(inst_30710)){
var statearr_30754_30783 = state_30739__$1;
(statearr_30754_30783[(1)] = (8));

} else {
var statearr_30755_30784 = state_30739__$1;
(statearr_30755_30784[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (14))){
var inst_30732 = (state_30739[(2)]);
var inst_30733 = cljs.core.async.close_BANG_.call(null,out);
var state_30739__$1 = (function (){var statearr_30757 = state_30739;
(statearr_30757[(13)] = inst_30732);

return statearr_30757;
})();
var statearr_30758_30785 = state_30739__$1;
(statearr_30758_30785[(2)] = inst_30733);

(statearr_30758_30785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (10))){
var inst_30722 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
var statearr_30759_30786 = state_30739__$1;
(statearr_30759_30786[(2)] = inst_30722);

(statearr_30759_30786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (8))){
var inst_30707 = (state_30739[(10)]);
var inst_30699 = (state_30739[(7)]);
var inst_30703 = (state_30739[(9)]);
var inst_30712 = inst_30699.push(inst_30703);
var tmp30756 = inst_30699;
var inst_30699__$1 = tmp30756;
var inst_30700 = inst_30707;
var state_30739__$1 = (function (){var statearr_30760 = state_30739;
(statearr_30760[(7)] = inst_30699__$1);

(statearr_30760[(8)] = inst_30700);

(statearr_30760[(14)] = inst_30712);

return statearr_30760;
})();
var statearr_30761_30787 = state_30739__$1;
(statearr_30761_30787[(2)] = null);

(statearr_30761_30787[(1)] = (2));


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
});})(c__20605__auto___30773,out))
;
return ((function (switch__20540__auto__,c__20605__auto___30773,out){
return (function() {
var cljs$core$async$state_machine__20541__auto__ = null;
var cljs$core$async$state_machine__20541__auto____0 = (function (){
var statearr_30765 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30765[(0)] = cljs$core$async$state_machine__20541__auto__);

(statearr_30765[(1)] = (1));

return statearr_30765;
});
var cljs$core$async$state_machine__20541__auto____1 = (function (state_30739){
while(true){
var ret_value__20542__auto__ = (function (){try{while(true){
var result__20543__auto__ = switch__20540__auto__.call(null,state_30739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20543__auto__;
}
break;
}
}catch (e30766){if((e30766 instanceof Object)){
var ex__20544__auto__ = e30766;
var statearr_30767_30788 = state_30739;
(statearr_30767_30788[(5)] = ex__20544__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30789 = state_30739;
state_30739 = G__30789;
continue;
} else {
return ret_value__20542__auto__;
}
break;
}
});
cljs$core$async$state_machine__20541__auto__ = function(state_30739){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20541__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20541__auto____1.call(this,state_30739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20541__auto____0;
cljs$core$async$state_machine__20541__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20541__auto____1;
return cljs$core$async$state_machine__20541__auto__;
})()
;})(switch__20540__auto__,c__20605__auto___30773,out))
})();
var state__20607__auto__ = (function (){var statearr_30768 = f__20606__auto__.call(null);
(statearr_30768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20605__auto___30773);

return statearr_30768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20607__auto__);
});})(c__20605__auto___30773,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1444180415724