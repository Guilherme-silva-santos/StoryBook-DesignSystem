var M=Object.defineProperty;var o=(r,e)=>M(r,"name",{value:e,configurable:!0});import{n as D,o as x}from"./iframe-0f6177fe.js";import"./es.map.constructor-bbbd1668.js";import{R as p,r as h}from"./index-47198c4b.js";import{r as d,R as S}from"./index-99432bc5.js";function w(r){return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(r)}o(w,"_typeof");function T(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}o(T,"_classCallCheck");function O(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}o(O,"_defineProperties");function A(r,e,t){return e&&O(r.prototype,e),t&&O(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}o(A,"_createClass");function N(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&b(r,e)}o(N,"_inherits");function b(r,e){return b=Object.setPrototypeOf||o(function(n,a){return n.__proto__=a,n},"_setPrototypeOf"),b(r,e)}o(b,"_setPrototypeOf");function F(r){var e=C();return o(function(){var n=y(r),a;if(e){var i=y(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return W(this,a)},"_createSuperInternal")}o(F,"_createSuper");function W(r,e){if(e&&(w(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return j(r)}o(W,"_possibleConstructorReturn");function j(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}o(j,"_assertThisInitialized");function C(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}o(C,"_isNativeReflectConstruct");function y(r){return y=Object.setPrototypeOf?Object.getPrototypeOf:o(function(t){return t.__proto__||Object.getPrototypeOf(t)},"_getPrototypeOf"),y(r)}o(y,"_getPrototypeOf");function _(r,e,t,n,a,i,u){try{var c=r[i](u),f=c.value}catch(l){t(l);return}c.done?e(f):Promise.resolve(f).then(n,a)}o(_,"asyncGeneratorStep");function g(r){return function(){var e=this,t=arguments;return new Promise(function(n,a){var i=r.apply(e,t);function u(f){_(i,n,a,u,c,"next",f)}o(u,"_next");function c(f){_(i,n,a,u,c,"throw",f)}o(c,"_throw"),u(void 0)})}}o(g,"_asyncToGenerator");var s=D.FRAMEWORK_OPTIONS,v=new Map,X=o(function(e,t){var n=t.id,a=t.component;if(!a)throw new Error("Unable to render story ".concat(n," as the component annotation is missing from the default export"));return p.createElement(a,e)},"render"),I=o(function(e){var t=e.callback,n=e.children,a=h.useRef();return h.useLayoutEffect(function(){a.current!==t&&(a.current=t,t())},[t]),n},"WithCallback"),B=function(){var r=g(regeneratorRuntime.mark(o(function e(t,n){var a;return regeneratorRuntime.wrap(o(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,K(n);case 2:return a=u.sent,u.abrupt("return",new Promise(function(c){a?a.render(p.createElement(I,{callback:o(function(){return c(null)},"callback")},t)):S.render(t,n,function(){return c(null)})}));case 4:case"end":return u.stop()}},"_callee$"),e)},"_callee")));return o(function(t,n){return r.apply(this,arguments)},"renderElement")}(),U=d.version&&(d.version.startsWith("18")||d.version.startsWith("0.0.0")),$=(s==null?void 0:s.legacyRootApi)!==!0,k=$&&U,G=o(function(e){var t=v.get(e);t&&k?(t.unmount(),v.delete(e)):S.unmountComponentAtNode(e)},"unmountElement"),K=function(){var r=g(regeneratorRuntime.mark(o(function e(t){var n,a;return regeneratorRuntime.wrap(o(function(u){for(;;)switch(u.prev=u.next){case 0:if(k){u.next=2;break}return u.abrupt("return",null);case 2:if(n=v.get(t),n){u.next=9;break}return u.next=6,x(()=>import("./client-6db8e69f.js").then(c=>c.c),["assets/client-6db8e69f.js","assets/index-99432bc5.js","assets/iframe-0f6177fe.js","assets/index-47198c4b.js"]);case 6:a=u.sent.default,n=a.createRoot(t),v.set(t,n);case 9:return u.abrupt("return",n);case 10:case"end":return u.stop()}},"_callee2$"),e)},"_callee2")));return o(function(t){return r.apply(this,arguments)},"getReactRoot")}(),L=function(r){N(t,r);var e=F(t);function t(){var n;T(this,t);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return n=e.call.apply(e,[this].concat(i)),n.state={hasError:!1},n}return o(t,"ErrorBoundary"),A(t,[{key:"componentDidMount",value:o(function(){var a=this.state.hasError,i=this.props.showMain;a||i()},"componentDidMount")},{key:"componentDidCatch",value:o(function(a){var i=this.props.showException;i(a)},"componentDidCatch")},{key:"render",value:o(function(){var a=this.state.hasError,i=this.props.children;return a?null:i},"render")}],[{key:"getDerivedStateFromError",value:o(function(){return{hasError:!0}},"getDerivedStateFromError")}]),t}(h.Component),P=s!=null&&s.strictMode?h.StrictMode:h.Fragment;function Y(r,e){return R.apply(this,arguments)}o(Y,"renderToDOM");function R(){return R=g(regeneratorRuntime.mark(o(function r(e,t){var n,a,i,u,c,f,l,E;return regeneratorRuntime.wrap(o(function(m){for(;;)switch(m.prev=m.next){case 0:return n=e.storyContext,a=e.unboundStoryFn,i=e.showMain,u=e.showException,c=e.forceRemount,f=a,l=p.createElement(L,{showMain:i,showException:u},p.createElement(f,n)),E=P?p.createElement(P,null,l):l,c&&G(t),m.next=7,B(E,t);case 7:case"end":return m.stop()}},"_callee3$"),r)},"_callee3"))),R.apply(this,arguments)}o(R,"_renderToDOM");var Z={framework:"react"};export{Z as parameters,X as render,Y as renderToDOM};
//# sourceMappingURL=config-1badd7ee.js.map
