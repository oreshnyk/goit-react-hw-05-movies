"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[853],{853:function(e,t,n){n.r(t),n.d(t,{default:function(){return oe}});var o,r,a,i=n(439),s=n(791),c=n(87),u=n(446),l=n(168),d=n(926),f=d.Z.form(o||(o=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: 24px;\n  gap: 16px;\n"]))),p=d.Z.input(r||(r=(0,l.Z)(["\n  display: inline-block;\n  width: 200px;\n  font: inherit;\n  font-size: 20px;\n  border: 2px solid blue;\n  border-radius: 10px;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),m=d.Z.button(a||(a=(0,l.Z)(["\n  display: inline-block;\n  width: 60px;\n  height: 48px;\n  border: 0;\n  border-radius: 10px;\n  background-size: 40%;\n  background-color: blue;\n  color: white;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),v=n(184),g=function(e){var t=e.onSubmit,n=(0,s.useState)(""),o=(0,i.Z)(n,2),r=o[0],a=o[1];return(0,v.jsxs)(f,{onSubmit:function(e){e.preventDefault(),t(r)},children:[(0,v.jsx)(p,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",onChange:function(e){a(e.currentTarget.value.toLowerCase())}}),(0,v.jsx)(m,{type:"submit",children:(0,v.jsx)("span",{children:"Search"})})]})},y=n(560);function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var O=n(433);function C(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=C(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var _=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=C(e))&&(o&&(o+=" "),o+=t);return o},I=["theme","type"],x=["delay","staleId"],L=function(e){return"number"==typeof e&&!isNaN(e)},w=function(e){return"string"==typeof e},N=function(e){return"function"==typeof e},R=function(e){return w(e)||N(e)?e:null},k=function(e){return(0,s.isValidElement)(e)||w(e)||N(e)||L(e)};function P(e){var t=e.enter,n=e.exit,o=e.appendPosition,r=void 0!==o&&o,a=e.collapse,i=void 0===a||a,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var o=e.children,a=e.position,c=e.preventExitTransition,l=e.done,d=e.nodeRef,f=e.isIn,p=r?"".concat(t,"--").concat(a):t,m=r?"".concat(n,"--").concat(a):n,v=(0,s.useRef)(0);return(0,s.useLayoutEffect)((function(){var e,t=d.current,n=p.split(" "),o=function e(o){var r;o.target===d.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===v.current&&"animationcancel"!==o.type&&(r=t.classList).remove.apply(r,(0,O.Z)(n)))};(e=t.classList).add.apply(e,(0,O.Z)(n)),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)}),[]),(0,s.useEffect)((function(){var e=d.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,l,u):l()};f||(c?t():(v.current=1,e.className+=" ".concat(m),e.addEventListener("animationend",t)))}),[f]),s.createElement(s.Fragment,null,o)}}function j(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var M={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,O.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}},D=function(e){var t=e.theme,n=e.type,o=T(e,I);return s.createElement("svg",E({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},S={info:function(e){return s.createElement(D,E({},e),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return s.createElement(D,E({},e),s.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return s.createElement(D,E({},e),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return s.createElement(D,E({},e),s.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return s.createElement("div",{className:"Toastify__spinner"})}};function z(e){var t=(0,s.useReducer)((function(e){return e+1}),0),n=(0,i.Z)(t,2)[1],o=(0,s.useState)([]),r=(0,i.Z)(o,2),a=r[0],c=r[1],u=(0,s.useRef)(null),l=(0,s.useRef)(new Map).current,d=function(e){return-1!==a.indexOf(e)},f=(0,s.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:d,getToast:function(e){return l.get(e)}}).current;function p(e){var t=e.containerId;!f.props.limit||t&&f.containerId!==t||(f.count-=f.queue.length,f.queue=[])}function m(e){c((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function v(){var e=f.queue.shift();y(e.toastContent,e.toastProps,e.staleId)}function g(e,t){var o=t.delay,r=t.staleId,a=T(t,x);if(k(e)&&!function(e){return!u.current||f.props.enableMultiContainer&&e.containerId!==f.props.containerId||l.has(e.toastId)&&null==e.updateId}(a)){var i=a.toastId,c=a.updateId,d=a.data,p=f.props,g=function(){return m(i)},h=null==c;h&&f.count++;var b,O,C=E(E(E({},p),{},{style:p.toastStyle,key:f.toastKey++},a),{},{toastId:i,updateId:c,data:d,closeToast:g,isIn:!1,className:R(a.className||p.toastClassName),bodyClassName:R(a.bodyClassName||p.bodyClassName),progressClassName:R(a.progressClassName||p.progressClassName),autoClose:!a.isLoading&&(b=a.autoClose,O=p.autoClose,!1===b||L(b)&&b>0?b:O),deleteToast:function(){var e=j(l.get(i),"removed");l.delete(i),M.emit(4,e);var t=f.queue.length;if(f.count=null==i?f.count-f.displayedToast:f.count-1,f.count<0&&(f.count=0),t>0){var o=null==i?f.props.limit:1;if(1===t||1===o)f.displayedToast++,v();else{var r=o>t?t:o;f.displayedToast=r;for(var a=0;a<r;a++)v()}}else n()}});C.iconOut=function(e){var t=e.theme,n=e.type,o=e.isLoading,r=e.icon,a=null,i={theme:t,type:n};return!1===r||(N(r)?a=r(i):(0,s.isValidElement)(r)?a=(0,s.cloneElement)(r,i):w(r)||L(r)?a=r:o?a=S.spinner():function(e){return e in S}(n)&&(a=S[n](i))),a}(C),N(a.onOpen)&&(C.onOpen=a.onOpen),N(a.onClose)&&(C.onClose=a.onClose),C.closeButton=p.closeButton,!1===a.closeButton||k(a.closeButton)?C.closeButton=a.closeButton:!0===a.closeButton&&(C.closeButton=!k(p.closeButton)||p.closeButton);var _=e;(0,s.isValidElement)(e)&&!w(e.type)?_=(0,s.cloneElement)(e,{closeToast:g,toastProps:C,data:d}):N(e)&&(_=e({closeToast:g,toastProps:C,data:d})),p.limit&&p.limit>0&&f.count>p.limit&&h?f.queue.push({toastContent:_,toastProps:C,staleId:r}):L(o)?setTimeout((function(){y(_,C,r)}),o):y(_,C,r)}}function y(e,t,n){var o=t.toastId;n&&l.delete(n);var r={content:e,props:t};l.set(o,r),c((function(e){return[].concat((0,O.Z)(e),[o]).filter((function(e){return e!==n}))})),M.emit(4,j(r,null==r.props.updateId?"added":"updated"))}return(0,s.useEffect)((function(){return f.containerId=e.containerId,M.cancelEmit(3).on(0,g).on(1,(function(e){return u.current&&m(e)})).on(5,p).emit(2,f),function(){l.clear(),M.emit(3,f)}}),[]),(0,s.useEffect)((function(){f.props=e,f.isToastActive=d,f.displayedToast=a.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(l.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:u,isToastActive:d}}function B(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function A(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function Z(e){var t=(0,s.useState)(!1),n=(0,i.Z)(t,2),o=n[0],r=n[1],a=(0,s.useState)(!1),c=(0,i.Z)(a,2),u=c[0],l=c[1],d=(0,s.useRef)(null),f=(0,s.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,s.useRef)(e),m=e.autoClose,v=e.pauseOnHover,g=e.closeToast,y=e.onClick,h=e.closeOnClick;function b(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",C),document.addEventListener("mouseup",_),document.addEventListener("touchmove",C),document.addEventListener("touchend",_);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=B(t.nativeEvent),f.y=A(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function E(t){if(f.boundingRect){var n=f.boundingRect,o=n.top,r=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&f.x>=a&&f.x<=i&&f.y>=o&&f.y<=r?O():T()}}function T(){r(!0)}function O(){r(!1)}function C(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,o&&O(),f.x=B(t),f.y=A(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function _(){document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",_),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",_);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,s.useEffect)((function(){p.current=e})),(0,s.useEffect)((function(){return d.current&&d.current.addEventListener("d",T,{once:!0}),N(e.onOpen)&&e.onOpen((0,s.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;N(e.onClose)&&e.onClose((0,s.isValidElement)(e.children)&&e.children.props)}}),[]),(0,s.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||O(),window.addEventListener("focus",T),window.addEventListener("blur",O)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",T),window.removeEventListener("blur",O))}}),[e.pauseOnFocusLoss]);var I={onMouseDown:b,onTouchStart:b,onMouseUp:E,onTouchEnd:E};return m&&v&&(I.onMouseEnter=O,I.onMouseLeave=T),h&&(I.onClick=function(e){y&&y(e),f.canCloseOnClick&&g()}),{playToast:T,pauseToast:O,isRunning:o,preventExitTransition:u,toastRef:d,eventHandlers:I}}function F(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,r=void 0===o?"close":o;return s.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":r},s.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},s.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function q(e){var t=e.delay,n=e.isRunning,o=e.closeToast,r=e.type,a=void 0===r?"default":r,i=e.hide,c=e.className,u=e.style,l=e.controlledProgress,d=e.progress,f=e.rtl,p=e.isIn,m=e.theme,v=i||l&&0===d,g=E(E({},u),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:v?0:1});l&&(g.transform="scaleX(".concat(d,")"));var y=_("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(m),"Toastify__progress-bar--".concat(a),{"Toastify__progress-bar--rtl":f}),b=N(c)?c({rtl:f,type:a,defaultClassName:y}):_(y,c);return s.createElement("div",h({role:"progressbar","aria-hidden":v?"true":"false","aria-label":"notification timer",className:b,style:g},l&&d>=1?"onTransitionEnd":"onAnimationEnd",l&&d<1?null:function(){p&&o()}))}var H=function(e){var t=Z(e),n=t.isRunning,o=t.preventExitTransition,r=t.toastRef,a=t.eventHandlers,i=e.closeButton,c=e.children,u=e.autoClose,l=e.onClick,d=e.type,f=e.hideProgressBar,p=e.closeToast,m=e.transition,v=e.position,g=e.className,y=e.style,h=e.bodyClassName,b=e.bodyStyle,T=e.progressClassName,O=e.progressStyle,C=e.updateId,I=e.role,x=e.progress,L=e.rtl,w=e.toastId,R=e.deleteToast,k=e.isIn,P=e.isLoading,j=e.iconOut,M=e.closeOnClick,D=e.theme,S=_("Toastify__toast","Toastify__toast-theme--".concat(D),"Toastify__toast--".concat(d),{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":M}),z=N(g)?g({rtl:L,position:v,type:d,defaultClassName:S}):_(S,g),B=!!x||!u,A={closeToast:p,type:d,theme:D},H=null;return!1===i||(H=N(i)?i(A):(0,s.isValidElement)(i)?(0,s.cloneElement)(i,A):F(A)),s.createElement(m,{isIn:k,done:R,position:v,preventExitTransition:o,nodeRef:r},s.createElement("div",E(E({id:w,onClick:l,className:z},a),{},{style:y,ref:r}),s.createElement("div",E(E({},k&&{role:I}),{},{className:N(h)?h({type:d}):_("Toastify__toast-body",h),style:b}),null!=j&&s.createElement("div",{className:_("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!P})},j),s.createElement("div",null,c)),H,s.createElement(q,E(E({},C&&!B?{key:"pb-".concat(C)}:{}),{},{rtl:L,theme:D,delay:u,isRunning:n,isIn:k,closeToast:p,hide:f,type:d,style:O,className:T,controlledProgress:B,progress:x||0}))))},Q=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},V=P(Q("bounce",!0)),G=(P(Q("slide",!0)),P(Q("zoom")),P(Q("flip")),(0,s.forwardRef)((function(e,t){var n=z(e),o=n.getToastToRender,r=n.containerRef,a=n.isToastActive,i=e.className,c=e.style,u=e.rtl,l=e.containerId;function d(e){var t=_("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":u});return N(i)?i({position:e,rtl:u,defaultClassName:t}):_(t,R(i))}return(0,s.useEffect)((function(){t&&(t.current=r.current)}),[]),s.createElement("div",{ref:r,className:"Toastify",id:l},o((function(e,t){var n=t.length?E({},c):E(E({},c),{},{pointerEvents:"none"});return s.createElement("div",{className:d(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var o=e.content,r=e.props;return s.createElement(H,E(E({},r),{},{isIn:a(r.toastId),style:E(E({},r.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(r.key)}),o)})))})))})));G.displayName="ToastContainer",G.defaultProps={position:"top-right",transition:V,autoClose:5e3,closeButton:F,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var U,W=new Map,X=[],Y=1;function K(){return""+Y++}function J(e){return e&&(w(e.toastId)||L(e.toastId))?e.toastId:K()}function $(e,t){return W.size>0?M.emit(0,e,t):X.push({content:e,options:t}),t.toastId}function ee(e,t){return E(E({},t),{},{type:t&&t.type||e,toastId:J(t)})}function te(e){return function(t,n){return $(t,ee(e,n))}}function ne(e,t){return $(e,ee("default",t))}ne.loading=function(e,t){return $(e,ee("default",E({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},ne.promise=function(e,t,n){var o,r=t.pending,a=t.error,i=t.success;r&&(o=w(r)?ne.loading(r,n):ne.loading(r.render,E(E({},n),r)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(e,t,r){if(null!=t){var a=E(E(E({type:e},s),n),{},{data:r}),i=w(t)?{render:t}:t;return o?ne.update(o,E(E({},a),i)):ne(i.render,E(E({},a),i)),r}ne.dismiss(o)},u=N(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),u},ne.success=te("success"),ne.info=te("info"),ne.error=te("error"),ne.warning=te("warning"),ne.warn=ne.warning,ne.dark=function(e,t){return $(e,ee("default",E({theme:"dark"},t)))},ne.dismiss=function(e){W.size>0?M.emit(1,e):X=X.filter((function(t){return null!=e&&t.options.toastId!==e}))},ne.clearWaitingQueue=function(e){return void 0===e&&(e={}),M.emit(5,e)},ne.isActive=function(e){var t=!1;return W.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},ne.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=W.get(n||U);return o&&o.getToast(e)}(e,t);if(n){var o=n.props,r=n.content,a=E(E(E({},o),t),{},{toastId:t.toastId||e,updateId:K()});a.toastId!==e&&(a.staleId=e);var i=a.render||r;delete a.render,$(i,a)}}),0)},ne.done=function(e){ne.update(e,{progress:1})},ne.onChange=function(e){return M.on(4,e),function(){M.off(4,e)}},ne.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},ne.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},M.on(2,(function(e){U=e.containerId||e,W.set(U,e),X.forEach((function(e){M.emit(0,e.content,e.options)})),X=[]})).on(3,(function(e){W.delete(e.containerId||e),0===W.size&&M.off(0).off(1).off(5)}));var oe=function(){var e,t=(0,s.useState)([]),n=(0,i.Z)(t,2),o=n[0],r=n[1],a=(0,c.lr)(""),l=(0,i.Z)(a,2),d=l[0],f=l[1],p=null!==(e=d.get("query"))&&void 0!==e?e:"";return(0,s.useEffect)((function(){p&&(0,u.qF)(p).then((function(e){e.length?r(e):ne.error("Sorry, there are no movies matching your search query. Please try again.")}))}),[p]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(g,{onSubmit:function(e){f(""!==e?{query:e}:{})}}),(0,v.jsx)(y.O,{list:o}),(0,v.jsx)(G,{autoClose:2e3,position:"top-center"})]})}}}]);
//# sourceMappingURL=853.e78ea8b9.chunk.js.map