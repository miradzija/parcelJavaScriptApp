function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequire3a11;null==i&&((i=function(t){if(t in r)return r[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},n.parcelRequire3a11=i),i.register("27Lyk",(function(e,n){var r,o;t(e.exports,"register",(()=>r),(t=>r=t)),t(e.exports,"resolve",(()=>o),(t=>o=t));var i={};r=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)i[e[n]]=t[e[n]]},o=function(t){var e=i[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),i("27Lyk").register(JSON.parse('{"f9fpV":"index.c2a5db03.js","hfd23":"icons.c14567a0.svg","eyyUD":"icons.c14567a0.svg"}'));var a,c,u={},s=function(t){return t&&t.Math==Math&&t};u=s("object"==typeof globalThis&&globalThis)||s("object"==typeof window&&window)||s("object"==typeof self&&self)||s("object"==typeof n&&n)||function(){return this}()||Function("return this")();var l,f;l=!(f=function(t){try{return!!t()}catch(t){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var p,h={};p=!f((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}));var d,v=Function.prototype.call;h=p?v.bind(v):function(){return v.apply(v,arguments)};var m={}.propertyIsEnumerable,g=Object.getOwnPropertyDescriptor,y=g&&!m.call({1:2},1);d=y?function(t){var e=g(this,t);return!!e&&e.enumerable}:m;var b;b=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};var w,_,S,O,E={},j=Function.prototype,F=j.call,L=p&&j.bind.bind(F,F),x=(O=function(t){return p?L(t):function(){return F.apply(t,arguments)}})({}.toString),M=O("".slice);S=function(t){return M(x(t),8,-1)},_=function(t){if("Function"===S(t))return O(t)};var k=Object,T=_("".split);E=f((function(){return!k("z").propertyIsEnumerable(0)}))?function(t){return"String"==S(t)?T(t,""):k(t)}:k;var P,I;I=function(t){return null==t};var $=TypeError;P=function(t){if(I(t))throw $("Can't call method on "+t);return t},w=function(t){return E(P(t))};var N,D,R,A={},H={},z="object"==typeof document&&document.all,C=(R={all:z,IS_HTMLDDA:void 0===z&&void 0!==z}).all;H=R.IS_HTMLDDA?function(t){return"function"==typeof t||t===C}:function(t){return"function"==typeof t};var G=R.all;A=R.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:H(t)||t===G}:function(t){return"object"==typeof t?null!==t:H(t)};var U,q={},W=function(t){return H(t)?t:void 0};U=function(t,e){return arguments.length<2?W(u[t]):u[t]&&u[t][e]};var Y={};Y=_({}.isPrototypeOf);var B,V,J,K={};K=U("navigator","userAgent")||"";var X,Q,Z=u.process,tt=u.Deno,et=Z&&Z.versions||tt&&tt.version,nt=et&&et.v8;nt&&(Q=(X=nt.split("."))[0]>0&&X[0]<4?1:+(X[0]+X[1])),!Q&&K&&(!(X=K.match(/Edge\/(\d+)/))||X[1]>=74)&&(X=K.match(/Chrome\/(\d+)/))&&(Q=+X[1]),J=Q,V=!!Object.getOwnPropertySymbols&&!f((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&J&&J<41})),B=V&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var rt=Object;q=B?function(t){return"symbol"==typeof t}:function(t){var e=U("Symbol");return H(e)&&Y(e.prototype,rt(t))};var ot,it,at,ct=String;at=function(t){try{return ct(t)}catch(t){return"Object"}};var ut=TypeError;it=function(t){if(H(t))return t;throw ut(at(t)+" is not a function")},ot=function(t,e){var n=t[e];return I(n)?void 0:it(n)};var st,lt=TypeError;st=function(t,e){var n,r;if("string"===e&&H(n=t.toString)&&!A(r=h(n,t)))return r;if(H(n=t.valueOf)&&!A(r=h(n,t)))return r;if("string"!==e&&H(n=t.toString)&&!A(r=h(n,t)))return r;throw lt("Can't convert object to primitive value")};var ft;var pt,ht={},dt=Object.defineProperty;pt=function(t,e){try{dt(u,t,{value:e,configurable:!0,writable:!0})}catch(n){u[t]=e}return e};var vt=u["__core-js_shared__"]||pt("__core-js_shared__",{});ht=vt,(ft=function(t,e){return ht[t]||(ht[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.25.5",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.25.5/LICENSE",source:"https://github.com/zloirock/core-js"});var mt,gt={},yt=Object;mt=function(t){return yt(P(t))};var bt=_({}.hasOwnProperty);gt=Object.hasOwn||function(t,e){return bt(mt(t),e)};var wt,_t=0,St=Math.random(),Ot=_(1..toString);wt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Ot(++_t+St,36)};var Et=ft("wks"),jt=u.Symbol,Ft=jt&&jt.for,Lt=B?jt:jt&&jt.withoutSetter||wt,xt=TypeError,Mt=function(t){if(!gt(Et,t)||!V&&"string"!=typeof Et[t]){var e="Symbol."+t;V&&gt(jt,t)?Et[t]=jt[t]:Et[t]=B&&Ft?Ft(e):Lt(e)}return Et[t]}("toPrimitive");D=function(t,e){if(!A(t)||q(t))return t;var n,r=ot(t,Mt);if(r){if(void 0===e&&(e="default"),n=h(r,t,e),!A(n)||q(n))return n;throw xt("Can't convert object to primitive value")}return void 0===e&&(e="number"),st(t,e)},N=function(t){var e=D(t,"string");return q(e)?e:e+""};var kt,Tt,Pt=u.document,It=A(Pt)&&A(Pt.createElement);Tt=function(t){return It?Pt.createElement(t):{}},kt=!l&&!f((function(){return 7!=Object.defineProperty(Tt("div"),"a",{get:function(){return 7}}).a}));var $t,Nt,Dt=Object.getOwnPropertyDescriptor,Rt=c=l?Dt:function(t,e){if(t=w(t),e=N(e),kt)try{return Dt(t,e)}catch(t){}if(gt(t,e))return b(!h(d,t,e),t[e])},At={};Nt=l&&f((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var Ht,zt=String,Ct=TypeError;Ht=function(t){if(A(t))return t;throw Ct(zt(t)+" is not an object")};var Gt=TypeError,Ut=Object.defineProperty,qt=Object.getOwnPropertyDescriptor;$t=l?Nt?function(t,e,n){if(Ht(t),e=N(e),Ht(n),"function"==typeof t&&"prototype"===e&&"value"in n&&"writable"in n&&!n.writable){var r=qt(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return Ut(t,e,n)}:Ut:function(t,e,n){if(Ht(t),e=N(e),Ht(n),kt)try{return Ut(t,e,n)}catch(t){}if("get"in n||"set"in n)throw Gt("Accessors not supported");return"value"in n&&(t[e]=n.value),t},At=l?function(t,e,n){return $t(t,e,b(1,n))}:function(t,e,n){return t[e]=n,t};var Wt,Yt,Bt=Function.prototype,Vt=l&&Object.getOwnPropertyDescriptor,Jt=gt(Bt,"name"),Kt={EXISTS:Jt,PROPER:Jt&&"something"===function(){}.name,CONFIGURABLE:Jt&&(!l||l&&Vt(Bt,"name").configurable)}.CONFIGURABLE,Xt={},Qt=_(Function.toString);H(ht.inspectSource)||(ht.inspectSource=function(t){return Qt(t)}),Xt=ht.inspectSource;var Zt,te,ee=u.WeakMap;te=H(ee)&&/native code/.test(String(ee));var ne,re=ft("keys");ne=function(t){return re[t]||(re[t]=wt(t))};var oe={};oe={};var ie,ae,ce,ue=u.TypeError,se=u.WeakMap;if(te||ht.state){var le=ht.state||(ht.state=new se);le.get=le.get,le.has=le.has,le.set=le.set,ie=function(t,e){if(le.has(t))throw ue("Object already initialized");return e.facade=t,le.set(t,e),e},ae=function(t){return le.get(t)||{}},ce=function(t){return le.has(t)}}else{var fe=ne("state");oe[fe]=!0,ie=function(t,e){if(gt(t,fe))throw ue("Object already initialized");return e.facade=t,At(t,fe,e),e},ae=function(t){return gt(t,fe)?t[fe]:{}},ce=function(t){return gt(t,fe)}}var pe=(Zt={set:ie,get:ae,has:ce,enforce:function(t){return ce(t)?ae(t):ie(t,{})},getterFor:function(t){return function(e){var n;if(!A(e)||(n=ae(e)).type!==t)throw ue("Incompatible receiver, "+t+" required");return n}}}).enforce,he=Zt.get,de=Object.defineProperty,ve=l&&!f((function(){return 8!==de((function(){}),"length",{value:8}).length})),me=String(String).split("String"),ge=Yt=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!gt(t,"name")||Kt&&t.name!==e)&&(l?de(t,"name",{value:e,configurable:!0}):t.name=e),ve&&n&&gt(n,"arity")&&t.length!==n.arity&&de(t,"length",{value:n.arity});try{n&&gt(n,"constructor")&&n.constructor?l&&de(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var r=pe(t);return gt(r,"source")||(r.source=me.join("string"==typeof e?e:"")),t};Function.prototype.toString=ge((function(){return H(this)&&he(this).source||Xt(this)}),"toString"),Wt=function(t,e,n,r){r||(r={});var o=r.enumerable,i=void 0!==r.name?r.name:e;if(H(n)&&Yt(n,i,r),r.global)o?t[e]=n:pt(e,n);else{try{r.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=n:$t(t,e,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return t};var ye,be,we,_e,Se,Oe={},Ee={},je=Math.ceil,Fe=Math.floor;Ee=Math.trunc||function(t){var e=+t;return(e>0?Fe:je)(e)},Se=function(t){var e=+t;return e!=e||0===e?0:Ee(e)};var Le=Math.max,xe=Math.min;_e=function(t,e){var n=Se(t);return n<0?Le(n+e,0):xe(n,e)};var Me,ke,Te=Math.min;ke=function(t){return t>0?Te(Se(t),9007199254740991):0},Me=function(t){return ke(t.length)};var Pe=function(t){return function(e,n,r){var o,i=w(e),a=Me(i),c=_e(r,a);if(t&&n!=n){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((t||c in i)&&i[c]===n)return t||c||0;return!t&&-1}},Ie={includes:Pe(!0),indexOf:Pe(!1)}.indexOf,$e=_([].push);we=function(t,e){var n,r=w(t),o=0,i=[];for(n in r)!gt(oe,n)&&gt(r,n)&&$e(i,n);for(;e.length>o;)gt(r,n=e[o++])&&(~Ie(i,n)||$e(i,n));return i};var Ne,De=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");be=Object.getOwnPropertyNames||function(t){return we(t,De)},Ne=Object.getOwnPropertySymbols;var Re=_([].concat);Oe=U("Reflect","ownKeys")||function(t){var e=be(Ht(t));return Ne?Re(e,Ne(t)):e},ye=function(t,e,n){for(var r=Oe(e),o=$t,i=c,a=0;a<r.length;a++){var u=r[a];gt(t,u)||n&&gt(n,u)||o(t,u,i(e,u))}};var Ae={},He=/#|\.prototype\./,ze=function(t,e){var n=Ge[Ce(t)];return n==qe||n!=Ue&&(H(e)?f(e):!!e)},Ce=ze.normalize=function(t){return String(t).replace(He,".").toLowerCase()},Ge=ze.data={},Ue=ze.NATIVE="N",qe=ze.POLYFILL="P";Ae=ze,a=function(t,e){var n,r,o,i,a,c=t.target,s=t.global,l=t.stat;if(n=s?u:l?u[c]||pt(c,{}):(u[c]||{}).prototype)for(r in e){if(i=e[r],o=t.dontCallGetSet?(a=Rt(n,r))&&a.value:n[r],!Ae(s?r:c+(l?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;ye(i,o)}(t.sham||o&&o.sham)&&At(i,"sham",!0),Wt(n,r,i,t)}};var We,Ye={},Be=Function.prototype,Ve=Be.apply,Je=Be.call;Ye="object"==typeof Reflect&&Reflect.apply||(p?Je.bind(Ve):function(){return Je.apply(Ve,arguments)});var Ke,Xe=_(_.bind);Ke=function(t,e){return it(t),void 0===e?t:p?Xe(t,e):function(){return t.apply(e,arguments)}};var Qe={};Qe=U("document","documentElement");var Ze={};Ze=_([].slice);var tn,en=TypeError;tn=function(t,e){if(t<e)throw en("Not enough arguments");return t};var nn;nn=/(?:ipad|iphone|ipod).*applewebkit/i.test(K);var rn;rn="process"==S(u.process);var on,an,cn,un,sn=u.setImmediate,ln=u.clearImmediate,fn=u.process,pn=u.Dispatch,hn=u.Function,dn=u.MessageChannel,vn=u.String,mn=0,gn={};try{on=u.location}catch(t){}var yn=function(t){if(gt(gn,t)){var e=gn[t];delete gn[t],e()}},bn=function(t){return function(){yn(t)}},wn=function(t){yn(t.data)},_n=function(t){u.postMessage(vn(t),on.protocol+"//"+on.host)};sn&&ln||(sn=function(t){tn(arguments.length,1);var e=H(t)?t:hn(t),n=Ze(arguments,1);return gn[++mn]=function(){Ye(e,void 0,n)},an(mn),mn},ln=function(t){delete gn[t]},rn?an=function(t){fn.nextTick(bn(t))}:pn&&pn.now?an=function(t){pn.now(bn(t))}:dn&&!nn?(un=(cn=new dn).port2,cn.port1.onmessage=wn,an=Ke(un.postMessage,un)):u.addEventListener&&H(u.postMessage)&&!u.importScripts&&on&&"file:"!==on.protocol&&!f(_n)?(an=_n,u.addEventListener("message",wn,!1)):an="onreadystatechange"in Tt("script")?function(t){Qe.appendChild(Tt("script")).onreadystatechange=function(){Qe.removeChild(this),yn(t)}}:function(t){setTimeout(bn(t),0)});var Sn=(We={set:sn,clear:ln}).clear;a({global:!0,bind:!0,enumerable:!0,forced:u.clearImmediate!==Sn},{clearImmediate:Sn});var On=We.set;a({global:!0,bind:!0,enumerable:!0,forced:u.setImmediate!==On},{setImmediate:On});var En=function(t){var e,n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),c=new M(r||[]);return o(a,"_invoke",{value:j(t,n,c)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p="suspendedStart",h="executing",d="completed",v={};function m(){}function g(){}function y(){}var b={};s(b,a,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(k([])));_&&_!==n&&r.call(_,a)&&(b=_);var S=y.prototype=m.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function j(t,e,n){var r=p;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return T()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=F(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var u=f(t,e,n);if("normal"===u.type){if(r=n.done?d:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}function F(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,F(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function k(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:T}}function T(){return{value:e,done:!0}}return g.prototype=y,o(S,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:g,configurable:!0}),g.displayName=s(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},t.awrap=function(t){return{__await:t}},O(E.prototype),s(E.prototype,c,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new E(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(S),s(S,u,"Generator"),s(S,a,(function(){return this})),s(S,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=k,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(x),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:k(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}({});try{regeneratorRuntime=En}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=En:Function("r","regeneratorRuntime = r")(En)}const jn={recipe:{}};var Fn,Ln,xn,Mn;Fn=new URL(i("27Lyk").resolve("eyyUD"),import.meta.url).toString(),Fraction=function(t,e){if(void 0!==t&&e)"number"==typeof t&&"number"==typeof e?(this.numerator=t,this.denominator=e):"string"==typeof t&&"string"==typeof e&&(this.numerator=parseInt(t),this.denominator=parseInt(e));else if(void 0===e)if(num=t,"number"==typeof num)this.numerator=num,this.denominator=1;else if("string"==typeof num){var n,r,o=num.split(" ");if(o[0]&&(n=o[0]),o[1]&&(r=o[1]),n%1==0&&r&&r.match("/"))return new Fraction(n).add(new Fraction(r));if(!n||r)return;if("string"==typeof n&&n.match("/")){var i=n.split("/");this.numerator=i[0],this.denominator=i[1]}else{if("string"==typeof n&&n.match("."))return new Fraction(parseFloat(n));this.numerator=parseInt(n),this.denominator=1}}this.normalize()},Fraction.prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var t=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),e=this.numerator%this.denominator,n=this.denominator,r=[];return 0!=t&&r.push(t),0!=e&&r.push((0===t?e:Math.abs(e))+"/"+n),r.length>0?r.join(" "):0},Fraction.prototype.rescale=function(t){return this.numerator*=t,this.denominator*=t,this},Fraction.prototype.add=function(t){var e=this.clone();return t=t instanceof Fraction?t.clone():new Fraction(t),td=e.denominator,e.rescale(t.denominator),t.rescale(td),e.numerator+=t.numerator,e.normalize()},Fraction.prototype.subtract=function(t){var e=this.clone();return t=t instanceof Fraction?t.clone():new Fraction(t),td=e.denominator,e.rescale(t.denominator),t.rescale(td),e.numerator-=t.numerator,e.normalize()},Fraction.prototype.multiply=function(t){var e=this.clone();if(t instanceof Fraction)e.numerator*=t.numerator,e.denominator*=t.denominator;else{if("number"!=typeof t)return e.multiply(new Fraction(t));e.numerator*=t}return e.normalize()},Fraction.prototype.divide=function(t){var e=this.clone();if(t instanceof Fraction)e.numerator*=t.denominator,e.denominator*=t.numerator;else{if("number"!=typeof t)return e.divide(new Fraction(t));e.denominator*=t}return e.normalize()},Fraction.prototype.equals=function(t){t instanceof Fraction||(t=new Fraction(t));var e=this.clone().normalize();t=t.clone().normalize();return e.numerator===t.numerator&&e.denominator===t.denominator},Fraction.prototype.normalize=(xn=function(t){return"number"==typeof t&&(t>0&&t%1>0&&t%1<1||t<0&&t%-1<0&&t%-1>-1)},Mn=function(t,e){if(e){var n=Math.pow(10,e);return Math.round(t*n)/n}return Math.round(t)},function(){if(xn(this.denominator)){var t=Mn(this.denominator,9),e=Math.pow(10,t.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*e),this.numerator*=e}xn(this.numerator)&&(t=Mn(this.numerator,9),e=Math.pow(10,t.toString().split(".")[1].length),this.numerator=Math.round(this.numerator*e),this.denominator*=e);var n=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=n,this.denominator/=n,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(t,e){var n=[],r=Fraction.primeFactors(t),o=Fraction.primeFactors(e);return r.forEach((function(t){var e=o.indexOf(t);e>=0&&(n.push(t),o.splice(e,1))})),0===n.length?1:function(){var t,e=n[0];for(t=1;t<n.length;t++)e*=n[t];return e}()},Fraction.primeFactors=function(t){for(var e=Math.abs(t),n=[],r=2;r*r<=e;)e%r==0?(n.push(r),e/=r):r++;return 1!=e&&n.push(e),n},Ln=Fraction;var kn,Tn=new class{#t=document.querySelector(".recipe");#e;render(t){this.#e=t;const e=this.#n();this.#r(),this.#t.insertAdjacentHTML("afterbegin",e)}#r(){this.#t.innerHTML=""}renderSpinner=function(){const t=`<div class="spinner">\n    <svg>\n      <use href="${e(Fn)}#icon-loader"></use>\n    </svg>\n  </div>`;this.#o.innerHTML="",this.#o.insertAdjacentHTML("afterbegin",t)};#n(){return`<figure class="recipe__fig">\n    <img src="${this.#e.image}" alt="${this.#e.title}" class="recipe__img" />\n    <h1 class="recipe__title">\n      <span>${this.#e.title}</span>\n    </h1>\n  </figure>\n\n  <div class="recipe__details">\n    <div class="recipe__info">\n      <svg class="recipe__info-icon">\n        <use href="${e(Fn)}#icon-clock"></use>\n      </svg>\n      <span class="recipe__info-data recipe__info-data--minutes">${this.#e.cookingTime}</span>\n      <span class="recipe__info-text">minutes</span>\n    </div>\n    <div class="recipe__info">\n      <svg class="recipe__info-icon">\n        <use href="${e(Fn)}#icon-users"></use>\n      </svg>\n      <span class="recipe__info-data recipe__info-data--people">${this.#e.servings}</span>\n      <span class="recipe__info-text">servings</span>\n\n      <div class="recipe__info-buttons">\n        <button class="btn--tiny btn--increase-servings">\n          <svg>\n            <use href="${e(Fn)}#icon-minus-circle"></use>\n          </svg>\n        </button>\n        <button class="btn--tiny btn--increase-servings">\n          <svg>\n            <use href="${e(Fn)}#icon-plus-circle"></use>\n          </svg>\n        </button>\n      </div>\n    </div>\n\n    <div class="recipe__user-generated">\n      <svg>\n        <use href="${e(Fn)}#icon-user"></use>\n      </svg>\n    </div>\n    <button class="btn--round">\n      <svg class="">\n        <use href="${e(Fn)}#icon-bookmark-fill"></use>\n      </svg>\n    </button>\n  </div>\n\n  <div class="recipe__ingredients">\n    <h2 class="heading--2">Recipe ingredients</h2>\n    < class="recipe__ingredient-list">\n${this.#e.ingredients.map(this.#i).join("")}\n</div>\n\n  <div class="recipe__directions">\n    <h2 class="heading--2">How to cook it</h2>\n    <p class="recipe__directions-text">\n      This recipe was carefully designed and tested by\n      <span class="recipe__publisher">${this.#e.publisher}</span>. Please check out\n      directions at their website.\n    </p>\n    <a\n      class="btn--small recipe__btn"\n      href="${this.#e.sourceUrl}"\n    >\n      <span>Directions</span>\n      <svg class="search__icon">\n        <use href="src/img/icons.svg#icon-arrow-right"></use>\n      </svg>\n    </a>\n  </div>`}#i(t){return`<li class="recipe__ingredient">\n                  <svg class="recipe__icon">\n                    <use href="src/img/icons.svg#icon-check"></use>\n                  </svg>\n                  <div class="recipe__quantity">${t.quantity?new Ln.Fraction(t.quantity).toString():""}</div>\n                  <div class="recipe__description">\n                    <span class="recipe__unit">${t.unit}</span>\n                    ${t.description}\n                  </div>\n               </li>`}};kn=new URL(i("27Lyk").resolve("hfd23"),import.meta.url).toString();const Pn=document.querySelector(".recipe"),In=async function(){try{const t=window.location.hash.slice(1);if(console.log(t),!t)return;!function(t){const n=`<div class="spinner">\n  <svg>\n    <use href="${e(kn)}#icon-loader"></use>\n  </svg>\n</div>`;t.innerHTML="",t.insertAdjacentHTML("afterbegin",n)}(Pn),await async function(t){try{const e=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${t}`),n=await e.json();if(!e.ok)throw new Error(`${n.message} (${e.status})`);const{recipe:r}=n.data;jn.recipe={id:r.ed,title:r.id,publisher:r.publisher,sourceUrl:r.source_url,image:r.image_url,servings:r.servings,cookingTime:r.cooking_time,ingredients:r.ingredients},console.log(jn.recipe)}catch(t){alert(t)}}(t),Tn.render(jn.recipe)}catch(t){alert(t)}};["hashchange","load"].forEach((t=>window.addEventListener(t,In)));
//# sourceMappingURL=index.c2a5db03.js.map
