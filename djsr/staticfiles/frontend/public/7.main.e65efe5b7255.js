(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1666:function(e,r,t){"use strict";t.r(r);var n=t(1),a=t.n(n),o=t(456),i=t(528),c=(t(182),t(579),t(580),t(551)),l=t(552),s=t(51),u=t(569),p=t(554),d=t(555),m=t(570),f=(t(180),t(19)),g=t(560),b=t(596),h=t(65),v=t(61),y=t(41),O=t(83),w=(t(0),t(824)),x=void 0;function j(){return(j=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function T(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return t}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return P(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return P(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var E=Object(o.a)(g.default);r.default=function(e){e.appState.user;var r=T(a.a.useState("password"),2),t=r[0],n=(r[1],T(a.a.useState(null),2)),o=(n[0],n[1],Object(f.g)().id);console.log(o);var g=Object(f.f)(),P=T(a.a.useState("cardHidden"),2),k=P[0],S=P[1];setTimeout((function(){S("")}),700);var N=E();j({},e);return a.a.createElement("div",null,a.a.createElement("div",{className:N.pageHeader,style:{backgroundImage:"url("+b.a+")",backgroundSize:"cover",backgroundPosition:"top center"}},a.a.createElement("div",{className:N.container},a.a.createElement(c.a,{justify:"center"},a.a.createElement(l.a,{xs:12,sm:12,md:4},a.a.createElement(u.a,{className:N[k]},"password"==t?a.a.createElement(y.c,{initialValues:{ileotw:"0",ilezamk:"0",level:"0",skills:"0",groups:"0"},validationSchema:h.d().shape({ileotw:h.f().required("Pole wymagane"),ilezamk:h.f().required("Pole wymagane"),level:h.f().required("Pole wymagane"),skills:h.f().required("Pole wymagane"),groups:h.f().required("Pole wymagane")}),onSubmit:function(e,r){setTimeout((function(){r.setSubmitting(!0),v.b.post("/user/getrandomtasks/",{ileotw:e.ileotw,ilezamk:e.ilezamk,level:e.level,skills:e.skills,groups:e.groups}).then((function(e){var r=JSON.stringify(Object(w.a)(e.data));console.log(r),console.log(o),v.b.put("/user/maketest/",{id:o,tasks:r}).then((function(e){g.push("/editor/".concat(o))}))})).catch((function(e){r.setStatus("Podano nieprawidłowe aktualne hasło"),console.log("chngpass error",e.response);e.response;r.setSubmitting(!1),x.setState({locked:!1}),r.setValues({ileotw:"",ilezamk:"",level:"",skills:""},!1),r.setTouched({ileotw:!1,ilezamk:!1,level:!1,skills:!1},!1),r.setFieldError("oldPassword","Podano nieprawidłowe stare hasło")}))}),5e3)}},(function(e){e.values;var r=e.errors,t=e.touched,n=(e.handleChange,e.handleBlur,e.handleSubmit);e.isSubmitting;return a.a.createElement("form",{className:N.form},console.log(t,r),a.a.createElement(d.a,{color:"primary",className:N.cardHeader},a.a.createElement("h4",null,"Wygeneruj sprawdzian XD")),a.a.createElement(p.a,null,a.a.createElement(y.a,{component:O.a,name:"ileotw",formControlProps:{fullWidth:!0},labelText:"Ilość zadań otwartych",inputProps:{endAdornment:a.a.createElement(i.a,{position:"end"})}}),a.a.createElement(y.a,{component:O.a,name:"ilezamk",formControlProps:{fullWidth:!0},labelText:"Ilość zadań zamkniętych",inputProps:{endAdornment:a.a.createElement(i.a,{position:"end"})}}),a.a.createElement(y.a,{as:"select",component:O.a,name:"level",formControlProps:{fullWidth:!0},labelText:"poziom trudności",inputProps:{endAdornment:a.a.createElement(i.a,{position:"end"})}}),a.a.createElement(y.a,{component:O.a,name:"skills",formControlProps:{fullWidth:!0},labelText:"Umiejętności",inputProps:{endAdornment:a.a.createElement(i.a,{position:"end"})}}),a.a.createElement(y.a,{component:O.a,name:"groups",formControlProps:{fullWidth:!0},labelText:"GRUPY KATOLICKIE JANA PAWŁA 2",inputProps:{endAdornment:a.a.createElement(i.a,{position:"end"})}})),a.a.createElement(m.a,{className:N.cardFooter},a.a.createElement(s.a,{simple:!0,color:"primary",size:"lg",onClick:function(){n()}},"Wygeneruj sprawdzian")))})):a.a.createElement(a.a.Fragment,null)))))))}},548:function(e,r,t){"use strict";t.r(r);r.default={cardBody:{padding:"0.9375rem 1.875rem",flex:"1 1 auto"}}},549:function(e,r,t){"use strict";t.r(r);var n=t(9),a={cardHeader:{borderRadius:"3px",padding:"1rem 15px",marginLeft:"15px",marginRight:"15px",marginTop:"-30px",border:"0",marginBottom:"0"},cardHeaderPlain:{marginLeft:"0px",marginRight:"0px"},warningCardHeader:n.warningCardHeader,successCardHeader:n.successCardHeader,dangerCardHeader:n.dangerCardHeader,infoCardHeader:n.infoCardHeader,primaryCardHeader:n.primaryCardHeader};r.default=a},551:function(e,r,t){"use strict";t.d(r,"a",(function(){return d}));var n=t(1),a=t.n(n),o=t(0),i=t.n(o),c=t(456),l=t(470);function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=Object(c.a)({grid:{marginRight:"-15px",marginLeft:"-15px",width:"auto"}});function d(e){var r=p(),t=e.children,n=e.className,o=u(e,["children","className"]);return a.a.createElement(l.a,s({container:!0},o,{className:r.grid+" "+n}),t)}d.defaultProps={className:""},d.propTypes={children:i.a.node,className:i.a.string}},552:function(e,r,t){"use strict";t.d(r,"a",(function(){return d}));var n=t(1),a=t.n(n),o=t(0),i=t.n(o),c=t(456),l=t(470);function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=Object(c.a)({grid:{position:"relative",width:"100%",minHeight:"1px",paddingRight:"15px",paddingLeft:"15px",flexBasis:"auto"}});function d(e){var r=p(),t=e.children,n=e.className,o=u(e,["children","className"]);return a.a.createElement(l.a,s({item:!0},o,{className:r.grid+" "+n}),t)}d.defaultProps={className:""},d.propTypes={children:i.a.node,className:i.a.string}},553:function(e,r,t){"use strict";t.r(r);r.default={card:{border:"0",marginBottom:"30px",marginTop:"30px",borderRadius:"6px",color:"rgba(0, 0, 0, 0.87)",background:"#fff",width:"100%",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",position:"relative",display:"flex",flexDirection:"column",minWidth:"0",wordWrap:"break-word",fontSize:".875rem",transition:"all 300ms linear"},cardPlain:{background:"transparent",boxShadow:"none"},cardCarousel:{overflow:"hidden"}}},554:function(e,r,t){"use strict";t.d(r,"a",(function(){return g}));var n=t(1),a=t.n(n),o=t(3),i=t.n(o),c=t(0),l=t.n(c),s=t(456),u=t(548);function p(){return(p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function m(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var f=Object(s.a)(u.default);function g(e){var r,t=f(),n=e.className,o=e.children,c=m(e,["className","children"]),l=i()((d(r={},t.cardBody,!0),d(r,n,void 0!==n),r));return a.a.createElement("div",p({className:l},c),o)}g.propTypes={className:l.a.string,children:l.a.node}},555:function(e,r,t){"use strict";t.d(r,"a",(function(){return g}));var n=t(1),a=t.n(n),o=t(3),i=t.n(o),c=t(0),l=t.n(c),s=t(456),u=t(549);function p(){return(p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function m(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var f=Object(s.a)(u.default);function g(e){var r,t=f(),n=e.className,o=e.children,c=e.color,l=e.plain,s=m(e,["className","children","color","plain"]),u=i()((d(r={},t.cardHeader,!0),d(r,t[c+"CardHeader"],c),d(r,t.cardHeaderPlain,l),d(r,n,void 0!==n),r));return a.a.createElement("div",p({className:u},s),o)}g.propTypes={className:l.a.string,color:l.a.oneOf(["warning","success","danger","info","primary"]),plain:l.a.bool,children:l.a.node}},556:function(e,r,t){"use strict";t.r(r);r.default={cardFooter:{display:"flex",alignItems:"center",backgroundColor:"transparent",padding:"0.9375rem 1.875rem"}}},559:function(e,r,t){"use strict";t.r(r);var n=t(9),a={block:{color:"inherit",padding:"0.9375rem",fontWeight:"500",fontSize:"12px",textTransform:"uppercase",borderRadius:"3px",textDecoration:"none",position:"relative",display:"block"},left:{float:"left!important",display:"block"},right:{padding:"15px 0",margin:"0",float:"right!important"},footer:{padding:"0.9375rem 0",textAlign:"center",display:"flex",zIndex:"2",position:"relative"},a:{color:n.primaryColor,textDecoration:"none",backgroundColor:"transparent"},footerWhiteFont:{"&,&:hover,&:focus":{color:"#FFFFFF"}},container:n.container,list:{marginBottom:"0",padding:"0",marginTop:"0"},inlineBlock:{display:"inline-block",padding:"0px",width:"auto"},icon:{width:"18px",height:"18px",position:"relative",top:"3px"}};r.default=a},560:function(e,r,t){"use strict";function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}t.r(r);var i={container:a(a({},t(9).container),{},{zIndex:"2",position:"relative",paddingTop:"25vh",color:"#FFFFFF",paddingBottom:"200px"}),cardHidden:{opacity:"0",transform:"translate3d(0, -60px, 0)"},pageHeader:{minHeight:"100vh",height:"auto",display:"inherit",position:"relative",margin:"0",padding:"0",border:"0",alignItems:"center","&:before":{background:"rgba(0, 0, 0, 0.5)"},"&:before,&:after":{position:"absolute",zIndex:"1",width:"100%",height:"100%",display:"block",left:"0",top:"0",content:'""'},"& footer li a,& footer li a:hover,& footer li a:active":{color:"#FFFFFF"},"& footer":{position:"absolute",bottom:"0",width:"100%"}},form:{margin:"0"},cardHeader:{width:"auto",textAlign:"center",marginLeft:"20px",marginRight:"20px",marginTop:"-40px",padding:"20px 0",marginBottom:"15px"},socialIcons:{maxWidth:"24px",marginTop:"0",width:"100%",transform:"none",left:"0",top:"0",height:"100%",lineHeight:"41px",fontSize:"20px"},divider:{marginTop:"30px",marginBottom:"0px",textAlign:"center"},cardFooter:{paddingTop:"0rem",border:"0",borderRadius:"6px",justifyContent:"center !important"},socialLine:{marginTop:"1rem",textAlign:"center",padding:"0"},inputIconsColor:{color:"#495057"}};r.default=i},568:function(e,r,t){"use strict";var n=t(34),a=t(104);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=a(t(1)),i=(0,n(t(105)).default)(o.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");r.default=i},569:function(e,r,t){"use strict";t.d(r,"a",(function(){return g}));var n=t(1),a=t.n(n),o=t(3),i=t.n(o),c=t(0),l=t.n(c),s=t(456),u=t(553);function p(){return(p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function m(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var f=Object(s.a)(u.default);function g(e){var r,t=f(),n=e.className,o=e.children,c=e.plain,l=e.carousel,s=m(e,["className","children","plain","carousel"]),u=i()((d(r={},t.card,!0),d(r,t.cardPlain,c),d(r,t.cardCarousel,l),d(r,n,void 0!==n),r));return a.a.createElement("div",p({className:u},s),o)}g.propTypes={className:l.a.string,plain:l.a.bool,carousel:l.a.bool,children:l.a.node}},570:function(e,r,t){"use strict";t.d(r,"a",(function(){return g}));var n=t(1),a=t.n(n),o=t(3),i=t.n(o),c=t(0),l=t.n(c),s=t(456),u=t(556);function p(){return(p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function m(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var f=Object(s.a)(u.default);function g(e){var r,t=f(),n=e.className,o=e.children,c=m(e,["className","children"]),l=i()((d(r={},t.cardFooter,!0),d(r,n,void 0!==n),r));return a.a.createElement("div",p({className:l},c),o)}g.propTypes={className:l.a.string,children:l.a.node}},579:function(e,r,t){"use strict";t(1),t(37);var n=t(456),a=(t(464),t(465),t(637),t(664),t(665),t(183),t(51),t(177));Object(n.a)(a.default)},580:function(e,r,t){"use strict";t(1);var n=t(0),a=t.n(n),o=(t(3),t(464),t(465),t(456)),i=(t(568),t(559));Object(o.a)(i.default);a.a.bool},596:function(e,r,t){"use strict";r.a=t.p+"8ae80ee488d6ec36fd62f67865d06356.png"},637:function(e,r,t){"use strict";var n=t(2),a=t(42),o=t(4),i=t(14),c=t(1),l=t(13),s=(t(0),t(6)),u=t(159),p=t(20),d=t(7),m=t(10),f=t(516),g=t(515),b=t(12),h=t(179),v=t(43),y=t(116),O=t(84),w=t(21);function x(e){return Math.round(1e5*e)/1e5}var j=!1,T=null;var P=c.forwardRef((function(e,r){var t=e.arrow,i=void 0!==t&&t,p=e.children,d=e.classes,x=e.disableFocusListener,P=void 0!==x&&x,E=e.disableHoverListener,k=void 0!==E&&E,S=e.disableTouchListener,N=void 0!==S&&S,C=e.enterDelay,z=void 0===C?100:C,F=e.enterNextDelay,H=void 0===F?0:F,A=e.enterTouchDelay,I=void 0===A?700:A,R=e.id,L=e.interactive,B=void 0!==L&&L,M=e.leaveDelay,D=void 0===M?0:M,W=e.leaveTouchDelay,J=void 0===W?1500:W,V=e.onClose,q=e.onOpen,$=e.open,U=e.placement,K=void 0===U?"bottom":U,_=e.PopperComponent,G=void 0===_?g.a:_,X=e.PopperProps,Y=e.title,Q=e.TransitionComponent,Z=void 0===Q?f.a:Q,ee=e.TransitionProps,re=Object(o.a)(e,["arrow","children","classes","disableFocusListener","disableHoverListener","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","id","interactive","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"]),te=Object(w.a)(),ne=c.useState(),ae=ne[0],oe=ne[1],ie=c.useState(null),ce=ie[0],le=ie[1],se=c.useRef(!1),ue=c.useRef(),pe=c.useRef(),de=c.useRef(),me=c.useRef(),fe=Object(O.a)({controlled:$,default:!1,name:"Tooltip",state:"open"}),ge=Object(a.a)(fe,2),be=ge[0],he=ge[1],ve=be,ye=Object(h.a)(R);c.useEffect((function(){return function(){clearTimeout(ue.current),clearTimeout(pe.current),clearTimeout(de.current),clearTimeout(me.current)}}),[]);var Oe=function(e){clearTimeout(T),j=!0,he(!0),q&&q(e)},we=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(r){var t=p.props;"mouseover"===r.type&&t.onMouseOver&&e&&t.onMouseOver(r),se.current&&"touchstart"!==r.type||(ae&&ae.removeAttribute("title"),clearTimeout(pe.current),clearTimeout(de.current),z||j&&H?(r.persist(),pe.current=setTimeout((function(){Oe(r)}),j?H:z)):Oe(r))}},xe=Object(y.a)(),je=xe.isFocusVisible,Te=xe.onBlurVisible,Pe=xe.ref,Ee=c.useState(!1),ke=Ee[0],Se=Ee[1],Ne=function(){ke&&(Se(!1),Te())},Ce=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(r){ae||oe(r.currentTarget),je(r)&&(Se(!0),we()(r));var t=p.props;t.onFocus&&e&&t.onFocus(r)}},ze=function(e){clearTimeout(T),T=setTimeout((function(){j=!1}),800+D),he(!1),V&&V(e),clearTimeout(ue.current),ue.current=setTimeout((function(){se.current=!1}),te.transitions.duration.shortest)},Fe=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(r){var t=p.props;"blur"===r.type&&(t.onBlur&&e&&t.onBlur(r),Ne()),"mouseleave"===r.type&&t.onMouseLeave&&r.currentTarget===ae&&t.onMouseLeave(r),clearTimeout(pe.current),clearTimeout(de.current),r.persist(),de.current=setTimeout((function(){ze(r)}),D)}},He=function(e){se.current=!0;var r=p.props;r.onTouchStart&&r.onTouchStart(e)},Ae=Object(b.a)(oe,r),Ie=Object(b.a)(Pe,Ae),Re=c.useCallback((function(e){Object(v.a)(Ie,l.findDOMNode(e))}),[Ie]),Le=Object(b.a)(p.ref,Re);""===Y&&(ve=!1);var Be=!ve&&!k,Me=Object(n.a)({"aria-describedby":ve?ye:null,title:Be&&"string"==typeof Y?Y:null},re,p.props,{className:Object(s.a)(re.className,p.props.className),onTouchStart:He,ref:Le}),De={};N||(Me.onTouchStart=function(e){He(e),clearTimeout(de.current),clearTimeout(ue.current),clearTimeout(me.current),e.persist(),me.current=setTimeout((function(){we()(e)}),I)},Me.onTouchEnd=function(e){p.props.onTouchEnd&&p.props.onTouchEnd(e),clearTimeout(me.current),clearTimeout(de.current),e.persist(),de.current=setTimeout((function(){ze(e)}),J)}),k||(Me.onMouseOver=we(),Me.onMouseLeave=Fe(),B&&(De.onMouseOver=we(!1),De.onMouseLeave=Fe(!1))),P||(Me.onFocus=Ce(),Me.onBlur=Fe(),B&&(De.onFocus=Ce(!1),De.onBlur=Fe(!1)));var We=c.useMemo((function(){return Object(u.a)({popperOptions:{modifiers:{arrow:{enabled:Boolean(ce),element:ce}}}},X)}),[ce,X]);return c.createElement(c.Fragment,null,c.cloneElement(p,Me),c.createElement(G,Object(n.a)({className:Object(s.a)(d.popper,B&&d.popperInteractive,i&&d.popperArrow),placement:K,anchorEl:ae,open:!!ae&&ve,id:Me["aria-describedby"],transition:!0},De,We),(function(e){var r=e.placement,t=e.TransitionProps;return c.createElement(Z,Object(n.a)({timeout:te.transitions.duration.shorter},t,ee),c.createElement("div",{className:Object(s.a)(d.tooltip,d["tooltipPlacement".concat(Object(m.a)(r.split("-")[0]))],se.current&&d.touch,i&&d.tooltipArrow)},Y,i?c.createElement("span",{className:d.arrow,ref:le}):null))})))}));r.a=Object(d.a)((function(e){return{popper:{zIndex:e.zIndex.tooltip,pointerEvents:"none"},popperInteractive:{pointerEvents:"auto"},popperArrow:{'&[x-placement*="bottom"] $arrow':{top:0,left:0,marginTop:"-0.71em",marginLeft:4,marginRight:4,"&::before":{transformOrigin:"0 100%"}},'&[x-placement*="top"] $arrow':{bottom:0,left:0,marginBottom:"-0.71em",marginLeft:4,marginRight:4,"&::before":{transformOrigin:"100% 0"}},'&[x-placement*="right"] $arrow':{left:0,marginLeft:"-0.71em",height:"1em",width:"0.71em",marginTop:4,marginBottom:4,"&::before":{transformOrigin:"100% 100%"}},'&[x-placement*="left"] $arrow':{right:0,marginRight:"-0.71em",height:"1em",width:"0.71em",marginTop:4,marginBottom:4,"&::before":{transformOrigin:"0 0"}}},tooltip:{backgroundColor:Object(p.c)(e.palette.grey[700],.9),borderRadius:e.shape.borderRadius,color:e.palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(10),lineHeight:"".concat(x(1.4),"em"),maxWidth:300,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},tooltipArrow:{position:"relative",margin:"0"},arrow:{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:Object(p.c)(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}},touch:{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:"".concat(x(16/14),"em"),fontWeight:e.typography.fontWeightRegular},tooltipPlacementLeft:Object(i.a)({transformOrigin:"right center",margin:"0 24px "},e.breakpoints.up("sm"),{margin:"0 14px"}),tooltipPlacementRight:Object(i.a)({transformOrigin:"left center",margin:"0 24px"},e.breakpoints.up("sm"),{margin:"0 14px"}),tooltipPlacementTop:Object(i.a)({transformOrigin:"center bottom",margin:"24px 0"},e.breakpoints.up("sm"),{margin:"14px 0"}),tooltipPlacementBottom:Object(i.a)({transformOrigin:"center top",margin:"24px 0"},e.breakpoints.up("sm"),{margin:"14px 0"})}}),{name:"MuiTooltip",flip:!1})(P)},664:function(e,r,t){"use strict";var n=t(1),a=t(54);r.a=Object(a.a)(n.createElement("path",{d:"M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"}),"Apps")},665:function(e,r,t){"use strict";var n=t(1),a=t(54);r.a=Object(a.a)(n.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"}),"CloudDownload")},824:function(e,r,t){"use strict";var n=function(e){console.log("taskparser",e);var r=JSON.parse(JSON.stringify(e));if(r.answers={},r.correctans=JSON.parse(r.correctans.replace(/'/g,'"')),r.wronganswers=JSON.parse(r.wronganswers.replace(/'/g,'"')),r.answers={correctans:r.correctans,wronganswers:r.wronganswers},"2"==e.type){var t=function(e){for(var r,t,n=e.length;0!==n;)t=Math.floor(Math.random()*n),r=e[n-=1],e[n]=e[t],e[t]=r;return e}([{index:1,isCorrect:!1},{index:0,isCorrect:!0},{index:2,isCorrect:!1},{index:0,isCorrect:!1}]);r.currentAnswers={correctans:r.correctans,wronganswers:r.wronganswers,answersIndexes:t}}else"1"==e.type&&(r.currentAnswers={correctans:[{}],wronganswers:[{}],answersIndexes:[]});return r.maxPoints=JSON.parse(r.points),console.log("taskparser nn",r),r};r.a=function(e){return e.map(n)}}}]);