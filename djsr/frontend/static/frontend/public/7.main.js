(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1521:function(e,r,t){"use strict";t.r(r);var n=t(1),a=t.n(n),o=t(448),i=t(772),l=(t(168),t(575),t(567),t(530)),c=t(531),s=t(72),d=t(549),u=t(534),p=t(535),f=t(551),m=(t(162),t(17)),g=t(544),b=t(561),h=t(548),v=t(55),y=t(47),O=t(87),w=(t(0),t(766)),x=void 0;function j(){return(j=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function P(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return t}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return E(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return E(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var S=Object(o.a)(g.default);r.default=function(e){e.appState.user;var r=P(a.a.useState("password"),2),t=r[0],n=(r[1],P(a.a.useState(null),2)),o=(n[0],n[1],Object(m.g)().id);console.log(o);var g=Object(m.f)(),E=P(a.a.useState("cardHidden"),2),k=E[0],N=E[1];setTimeout((function(){N("")}),700);var C=S();j({},e);return a.a.createElement("div",null,a.a.createElement("div",{className:C.pageHeader,style:{backgroundImage:"url("+b.a+")",backgroundSize:"cover",backgroundPosition:"top center"}},a.a.createElement("div",{className:C.container},a.a.createElement(l.a,{justify:"center"},a.a.createElement(c.a,{xs:12,sm:12,md:4},a.a.createElement(d.a,{className:C[k]},"password"==t?a.a.createElement(y.c,{initialValues:{ileotw:"0",ilezamk:"0",level:"0",skills:"0",groups:"0"},validationSchema:h.b().shape({ileotw:h.d().required("Pole wymagane"),ilezamk:h.d().required("Pole wymagane"),level:h.d().required("Pole wymagane"),skills:h.d().required("Pole wymagane"),groups:h.d().required("Pole wymagane")}),onSubmit:function(e,r){setTimeout((function(){r.setSubmitting(!0),v.b.post("/user/getrandomtasks/",{ileotw:e.ileotw,ilezamk:e.ilezamk,level:e.level,skills:e.skills,groups:e.groups}).then((function(e){var r=JSON.stringify(Object(w.a)(e.data));console.log(r),console.log(o),v.b.put("/user/maketest/",{id:o,tasks:r}).then((function(e){g.push("/editor/".concat(o))}))})).catch((function(e){r.setStatus("Podano nieprawidłowe aktualne hasło"),console.log("chngpass error",e.response);e.response;r.setSubmitting(!1),x.setState({locked:!1}),r.setValues({ileotw:"",ilezamk:"",level:"",skills:""},!1),r.setTouched({ileotw:!1,ilezamk:!1,level:!1,skills:!1},!1),r.setFieldError("oldPassword","Podano nieprawidłowe stare hasło")}))}),5e3)}},(function(e){e.values;var r=e.errors,t=e.touched,n=(e.handleChange,e.handleBlur,e.handleSubmit);e.isSubmitting;return a.a.createElement("form",{className:C.form},console.log(t,r),a.a.createElement(p.a,{color:"primary",className:C.cardHeader},a.a.createElement("h4",null,"Wygeneruj sprawdzian XD")),a.a.createElement(u.a,null,a.a.createElement(y.a,{component:O.a,name:"ileotw",formControlProps:{fullWidth:!0},labelText:"Ilość zadań otwartych",inputProps:{endAdornment:a.a.createElement(i.a,{position:"end"})}}),a.a.createElement(y.a,{component:O.a,name:"ilezamk",formControlProps:{fullWidth:!0},labelText:"Ilość zadań zamkniętych",inputProps:{endAdornment:a.a.createElement(i.a,{position:"end"})}}),a.a.createElement(y.a,{as:"select",component:O.a,name:"level",formControlProps:{fullWidth:!0},labelText:"poziom trudności",inputProps:{endAdornment:a.a.createElement(i.a,{position:"end"})}}),a.a.createElement(y.a,{component:O.a,name:"skills",formControlProps:{fullWidth:!0},labelText:"Umiejętności",inputProps:{endAdornment:a.a.createElement(i.a,{position:"end"})}}),a.a.createElement(y.a,{component:O.a,name:"groups",formControlProps:{fullWidth:!0},labelText:"GRUPY KATOLICKIE JANA PAWŁA 2",inputProps:{endAdornment:a.a.createElement(i.a,{position:"end"})}})),a.a.createElement(f.a,{className:C.cardFooter},a.a.createElement(s.a,{simple:!0,color:"primary",size:"lg",onClick:function(){n()}},"Wygeneruj sprawdzian")))})):a.a.createElement(a.a.Fragment,null)))))))}},530:function(e,r,t){"use strict";t.d(r,"a",(function(){return p}));var n=t(1),a=t.n(n),o=t(0),i=t.n(o),l=t(448),c=t(462);function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function d(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=Object(l.a)({grid:{marginRight:"-15px",marginLeft:"-15px",width:"auto"}});function p(e){var r=u(),t=e.children,n=e.className,o=d(e,["children","className"]);return a.a.createElement(c.a,s({container:!0},o,{className:r.grid+" "+n}),t)}p.defaultProps={className:""},p.propTypes={children:i.a.node,className:i.a.string}},531:function(e,r,t){"use strict";t.d(r,"a",(function(){return p}));var n=t(1),a=t.n(n),o=t(0),i=t.n(o),l=t(448),c=t(462);function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function d(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=Object(l.a)({grid:{position:"relative",width:"100%",minHeight:"1px",paddingRight:"15px",paddingLeft:"15px",flexBasis:"auto"}});function p(e){var r=u(),t=e.children,n=e.className,o=d(e,["children","className"]);return a.a.createElement(c.a,s({item:!0},o,{className:r.grid+" "+n}),t)}p.defaultProps={className:""},p.propTypes={children:i.a.node,className:i.a.string}},534:function(e,r,t){"use strict";t.d(r,"a",(function(){return g}));var n=t(1),a=t.n(n),o=t(3),i=t.n(o),l=t(0),c=t.n(l),s=t(448),d=t(542);function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function f(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=Object(s.a)(d.default);function g(e){var r,t=m(),n=e.className,o=e.children,l=f(e,["className","children"]),c=i()((p(r={},t.cardBody,!0),p(r,n,void 0!==n),r));return a.a.createElement("div",u({className:c},l),o)}g.propTypes={className:c.a.string,children:c.a.node}},535:function(e,r,t){"use strict";t.d(r,"a",(function(){return g}));var n=t(1),a=t.n(n),o=t(3),i=t.n(o),l=t(0),c=t.n(l),s=t(448),d=t(543);function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function f(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=Object(s.a)(d.default);function g(e){var r,t=m(),n=e.className,o=e.children,l=e.color,c=e.plain,s=f(e,["className","children","color","plain"]),d=i()((p(r={},t.cardHeader,!0),p(r,t[l+"CardHeader"],l),p(r,t.cardHeaderPlain,c),p(r,n,void 0!==n),r));return a.a.createElement("div",u({className:d},s),o)}g.propTypes={className:c.a.string,color:c.a.oneOf(["warning","success","danger","info","primary"]),plain:c.a.bool,children:c.a.node}},542:function(e,r,t){"use strict";t.r(r);r.default={cardBody:{padding:"0.9375rem 1.875rem",flex:"1 1 auto"}}},543:function(e,r,t){"use strict";t.r(r);var n=t(9),a={cardHeader:{borderRadius:"3px",padding:"1rem 15px",marginLeft:"15px",marginRight:"15px",marginTop:"-30px",border:"0",marginBottom:"0"},cardHeaderPlain:{marginLeft:"0px",marginRight:"0px"},warningCardHeader:n.warningCardHeader,successCardHeader:n.successCardHeader,dangerCardHeader:n.dangerCardHeader,infoCardHeader:n.infoCardHeader,primaryCardHeader:n.primaryCardHeader};r.default=a},544:function(e,r,t){"use strict";function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}t.r(r);var i={container:a(a({},t(9).container),{},{zIndex:"2",position:"relative",paddingTop:"25vh",color:"#FFFFFF",paddingBottom:"200px"}),cardHidden:{opacity:"0",transform:"translate3d(0, -60px, 0)"},pageHeader:{minHeight:"100vh",height:"auto",display:"inherit",position:"relative",margin:"0",padding:"0",border:"0",alignItems:"center","&:before":{background:"rgba(0, 0, 0, 0.5)"},"&:before,&:after":{position:"absolute",zIndex:"1",width:"100%",height:"100%",display:"block",left:"0",top:"0",content:'""'},"& footer li a,& footer li a:hover,& footer li a:active":{color:"#FFFFFF"},"& footer":{position:"absolute",bottom:"0",width:"100%"}},form:{margin:"0"},cardHeader:{width:"auto",textAlign:"center",marginLeft:"20px",marginRight:"20px",marginTop:"-40px",padding:"20px 0",marginBottom:"15px"},socialIcons:{maxWidth:"24px",marginTop:"0",width:"100%",transform:"none",left:"0",top:"0",height:"100%",lineHeight:"41px",fontSize:"20px"},divider:{marginTop:"30px",marginBottom:"0px",textAlign:"center"},cardFooter:{paddingTop:"0rem",border:"0",borderRadius:"6px",justifyContent:"center !important"},socialLine:{marginTop:"1rem",textAlign:"center",padding:"0"},inputIconsColor:{color:"#495057"}};r.default=i},549:function(e,r,t){"use strict";t.d(r,"a",(function(){return g}));var n=t(1),a=t.n(n),o=t(3),i=t.n(o),l=t(0),c=t.n(l),s=t(448),d=t(550);function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function f(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=Object(s.a)(d.default);function g(e){var r,t=m(),n=e.className,o=e.children,l=e.plain,c=e.carousel,s=f(e,["className","children","plain","carousel"]),d=i()((p(r={},t.card,!0),p(r,t.cardPlain,l),p(r,t.cardCarousel,c),p(r,n,void 0!==n),r));return a.a.createElement("div",u({className:d},s),o)}g.propTypes={className:c.a.string,plain:c.a.bool,carousel:c.a.bool,children:c.a.node}},550:function(e,r,t){"use strict";t.r(r);r.default={card:{border:"0",marginBottom:"30px",marginTop:"30px",borderRadius:"6px",color:"rgba(0, 0, 0, 0.87)",background:"#fff",width:"100%",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",position:"relative",display:"flex",flexDirection:"column",minWidth:"0",wordWrap:"break-word",fontSize:".875rem",transition:"all 300ms linear"},cardPlain:{background:"transparent",boxShadow:"none"},cardCarousel:{overflow:"hidden"}}},551:function(e,r,t){"use strict";t.d(r,"a",(function(){return g}));var n=t(1),a=t.n(n),o=t(3),i=t.n(o),l=t(0),c=t.n(l),s=t(448),d=t(559);function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function f(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=Object(s.a)(d.default);function g(e){var r,t=m(),n=e.className,o=e.children,l=f(e,["className","children"]),c=i()((p(r={},t.cardFooter,!0),p(r,n,void 0!==n),r));return a.a.createElement("div",u({className:c},l),o)}g.propTypes={className:c.a.string,children:c.a.node}},559:function(e,r,t){"use strict";t.r(r);r.default={cardFooter:{display:"flex",alignItems:"center",backgroundColor:"transparent",padding:"0.9375rem 1.875rem"}}},561:function(e,r,t){"use strict";r.a=t.p+"8ae80ee488d6ec36fd62f67865d06356.png"},567:function(e,r,t){"use strict";t(1);var n=t(0),a=t.n(n),o=(t(3),t(154),t(155),t(448)),i=(t(577),t(568));Object(o.a)(i.default);a.a.bool},568:function(e,r,t){"use strict";t.r(r);var n=t(9),a={block:{color:"inherit",padding:"0.9375rem",fontWeight:"500",fontSize:"12px",textTransform:"uppercase",borderRadius:"3px",textDecoration:"none",position:"relative",display:"block"},left:{float:"left!important",display:"block"},right:{padding:"15px 0",margin:"0",float:"right!important"},footer:{padding:"0.9375rem 0",textAlign:"center",display:"flex",zIndex:"2",position:"relative"},a:{color:n.primaryColor,textDecoration:"none",backgroundColor:"transparent"},footerWhiteFont:{"&,&:hover,&:focus":{color:"#FFFFFF"}},container:n.container,list:{marginBottom:"0",padding:"0",marginTop:"0"},inlineBlock:{display:"inline-block",padding:"0px",width:"auto"},icon:{width:"18px",height:"18px",position:"relative",top:"3px"}};r.default=a},575:function(e,r,t){"use strict";var n=t(1),a=(t(33),t(448)),o=(t(154),t(155),t(1504),t(49)),i=(Object(o.a)(n.createElement("path",{d:"M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"}),"Apps"),Object(o.a)(n.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"}),"CloudDownload"),t(175),t(72),t(167));Object(a.a)(i.default)},577:function(e,r,t){"use strict";var n=t(45),a=t(159);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=a(t(1)),i=(0,n(t(160)).default)(o.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");r.default=i},766:function(e,r,t){"use strict";var n=function(e){console.log("taskparser",e);var r=JSON.parse(JSON.stringify(e));if(r.answers={},r.correctans=JSON.parse(r.correctans.replace(/'/g,'"')),r.wronganswers=JSON.parse(r.wronganswers.replace(/'/g,'"')),r.answers={correctans:r.correctans,wronganswers:r.wronganswers},"2"==e.type){var t=function(e){for(var r,t,n=e.length;0!==n;)t=Math.floor(Math.random()*n),r=e[n-=1],e[n]=e[t],e[t]=r;return e}([{index:1,isCorrect:!1},{index:0,isCorrect:!0},{index:2,isCorrect:!1},{index:0,isCorrect:!1}]);r.currentAnswers={correctans:r.correctans,wronganswers:r.wronganswers,answersIndexes:t}}else"1"==e.type&&(r.currentAnswers={correctans:r.correctans,wronganswers:r.wronganswers,answersIndexes:[{}]});return r.maxPoints=JSON.parse(r.points),console.log("taskparser nn",r),r};r.a=function(e){return e.map(n)}},772:function(e,r,t){"use strict";var n=t(2),a=t(5),o=t(1),i=(t(0),t(6)),l=t(133),c=t(7),s=t(68),d=o.forwardRef((function(e,r){var t=e.children,c=e.classes,d=e.className,u=e.component,p=void 0===u?"div":u,f=e.disablePointerEvents,m=void 0!==f&&f,g=e.disableTypography,b=void 0!==g&&g,h=e.position,v=e.variant,y=Object(a.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),O=Object(s.b)()||{},w=v;return v&&O.variant,O&&!w&&(w=O.variant),o.createElement(s.a.Provider,{value:null},o.createElement(p,Object(n.a)({className:Object(i.a)(c.root,d,m&&c.disablePointerEvents,O.hiddenLabel&&c.hiddenLabel,"filled"===w&&c.filled,{start:c.positionStart,end:c.positionEnd}[h],"dense"===O.margin&&c.marginDense),ref:r},y),"string"!=typeof t||b?t:o.createElement(l.a,{color:"textSecondary"},t)))}));r.a=Object(c.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(d)}}]);