(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1664:function(e,r,t){"use strict";t.r(r);var n=t(1),o=t.n(n),a=t(456),i=(t(182),t(580),t(581),t(551),t(552),t(51),t(569),t(554),t(555),t(570),t(181),t(560)),c=t(571),l=(t(65),t(61),t(41),t(602),t(169)),u=t(180);function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function p(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return t}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return d(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return d(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var f=Object(a.a)(i.default);r.default=function(e){var r=p(o.a.useState("cardHidden"),2),t=(r[0],r[1]);setTimeout((function(){t("")}),700);f();var n=Object(u.b)(),a=n.enqueueSnackbar,i=(n.closeSnackbar,s({},e),{paperContainer:{backgroundImage:"url(".concat(c.a,")"),minHeight:1e3},examCardContainer:{width:700,backgroundColor:"#FEFEFA"},cardTitle:{textAlign:"center"}});return o.a.createElement("div",null,o.a.createElement(l.a,{style:i.paperContainer},a("Zostałeś pomyślnie wylogowany",{variant:"success"})))}},548:function(e,r,t){"use strict";t.r(r);r.default={cardBody:{padding:"0.9375rem 1.875rem",flex:"1 1 auto"}}},549:function(e,r,t){"use strict";t.r(r);var n=t(9),o={cardHeader:{borderRadius:"3px",padding:"1rem 15px",marginLeft:"15px",marginRight:"15px",marginTop:"-30px",border:"0",marginBottom:"0"},cardHeaderPlain:{marginLeft:"0px",marginRight:"0px"},warningCardHeader:n.warningCardHeader,successCardHeader:n.successCardHeader,dangerCardHeader:n.dangerCardHeader,infoCardHeader:n.infoCardHeader,primaryCardHeader:n.primaryCardHeader};r.default=o},551:function(e,r,t){"use strict";t.d(r,"a",(function(){return d}));var n=t(1),o=t.n(n),a=t(0),i=t.n(a),c=t(456),l=t(470);function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=Object(c.a)({grid:{marginRight:"-15px",marginLeft:"-15px",width:"auto"}});function d(e){var r=p(),t=e.children,n=e.className,a=s(e,["children","className"]);return o.a.createElement(l.a,u({container:!0},a,{className:r.grid+" "+n}),t)}d.defaultProps={className:""},d.propTypes={children:i.a.node,className:i.a.string}},552:function(e,r,t){"use strict";t.d(r,"a",(function(){return d}));var n=t(1),o=t.n(n),a=t(0),i=t.n(a),c=t(456),l=t(470);function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=Object(c.a)({grid:{position:"relative",width:"100%",minHeight:"1px",paddingRight:"15px",paddingLeft:"15px",flexBasis:"auto"}});function d(e){var r=p(),t=e.children,n=e.className,a=s(e,["children","className"]);return o.a.createElement(l.a,u({item:!0},a,{className:r.grid+" "+n}),t)}d.defaultProps={className:""},d.propTypes={children:i.a.node,className:i.a.string}},553:function(e,r,t){"use strict";t.r(r);r.default={card:{border:"0",marginBottom:"30px",marginTop:"30px",borderRadius:"6px",color:"rgba(0, 0, 0, 0.87)",background:"#fff",width:"100%",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",position:"relative",display:"flex",flexDirection:"column",minWidth:"0",wordWrap:"break-word",fontSize:".875rem",transition:"all 300ms linear"},cardPlain:{background:"transparent",boxShadow:"none"},cardCarousel:{overflow:"hidden"}}},554:function(e,r,t){"use strict";t.d(r,"a",(function(){return b}));var n=t(1),o=t.n(n),a=t(3),i=t.n(a),c=t(0),l=t.n(c),u=t(456),s=t(548);function p(){return(p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function f(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=Object(u.a)(s.default);function b(e){var r,t=m(),n=e.className,a=e.children,c=f(e,["className","children"]),l=i()((d(r={},t.cardBody,!0),d(r,n,void 0!==n),r));return o.a.createElement("div",p({className:l},c),a)}b.propTypes={className:l.a.string,children:l.a.node}},555:function(e,r,t){"use strict";t.d(r,"a",(function(){return b}));var n=t(1),o=t.n(n),a=t(3),i=t.n(a),c=t(0),l=t.n(c),u=t(456),s=t(549);function p(){return(p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function f(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=Object(u.a)(s.default);function b(e){var r,t=m(),n=e.className,a=e.children,c=e.color,l=e.plain,u=f(e,["className","children","color","plain"]),s=i()((d(r={},t.cardHeader,!0),d(r,t[c+"CardHeader"],c),d(r,t.cardHeaderPlain,l),d(r,n,void 0!==n),r));return o.a.createElement("div",p({className:s},u),a)}b.propTypes={className:l.a.string,color:l.a.oneOf(["warning","success","danger","info","primary"]),plain:l.a.bool,children:l.a.node}},556:function(e,r,t){"use strict";t.r(r);r.default={cardFooter:{display:"flex",alignItems:"center",backgroundColor:"transparent",padding:"0.9375rem 1.875rem"}}},559:function(e,r,t){"use strict";t.r(r);var n=t(9),o={block:{color:"inherit",padding:"0.9375rem",fontWeight:"500",fontSize:"12px",textTransform:"uppercase",borderRadius:"3px",textDecoration:"none",position:"relative",display:"block"},left:{float:"left!important",display:"block"},right:{padding:"15px 0",margin:"0",float:"right!important"},footer:{padding:"0.9375rem 0",textAlign:"center",display:"flex",zIndex:"2",position:"relative"},a:{color:n.primaryColor,textDecoration:"none",backgroundColor:"transparent"},footerWhiteFont:{"&,&:hover,&:focus":{color:"#FFFFFF"}},container:n.container,list:{marginBottom:"0",padding:"0",marginTop:"0"},inlineBlock:{display:"inline-block",padding:"0px",width:"auto"},icon:{width:"18px",height:"18px",position:"relative",top:"3px"}};r.default=o},560:function(e,r,t){"use strict";function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}t.r(r);var i={container:o(o({},t(9).container),{},{zIndex:"2",position:"relative",paddingTop:"25vh",color:"#FFFFFF",paddingBottom:"200px"}),cardHidden:{opacity:"0",transform:"translate3d(0, -60px, 0)"},pageHeader:{minHeight:"100vh",height:"auto",display:"inherit",position:"relative",margin:"0",padding:"0",border:"0",alignItems:"center","&:before":{background:"rgba(0, 0, 0, 0.5)"},"&:before,&:after":{position:"absolute",zIndex:"1",width:"100%",height:"100%",display:"block",left:"0",top:"0",content:'""'},"& footer li a,& footer li a:hover,& footer li a:active":{color:"#FFFFFF"},"& footer":{position:"absolute",bottom:"0",width:"100%"}},form:{margin:"0"},cardHeader:{width:"auto",textAlign:"center",marginLeft:"20px",marginRight:"20px",marginTop:"-40px",padding:"20px 0",marginBottom:"15px"},socialIcons:{maxWidth:"24px",marginTop:"0",width:"100%",transform:"none",left:"0",top:"0",height:"100%",lineHeight:"41px",fontSize:"20px"},divider:{marginTop:"30px",marginBottom:"0px",textAlign:"center"},cardFooter:{paddingTop:"0rem",border:"0",borderRadius:"6px",justifyContent:"center !important"},socialLine:{marginTop:"1rem",textAlign:"center",padding:"0"},inputIconsColor:{color:"#495057"}};r.default=i},568:function(e,r,t){"use strict";var n=t(34),o=t(104);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=o(t(1)),i=(0,n(t(105)).default)(a.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");r.default=i},569:function(e,r,t){"use strict";t.d(r,"a",(function(){return b}));var n=t(1),o=t.n(n),a=t(3),i=t.n(a),c=t(0),l=t.n(c),u=t(456),s=t(553);function p(){return(p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function f(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=Object(u.a)(s.default);function b(e){var r,t=m(),n=e.className,a=e.children,c=e.plain,l=e.carousel,u=f(e,["className","children","plain","carousel"]),s=i()((d(r={},t.card,!0),d(r,t.cardPlain,c),d(r,t.cardCarousel,l),d(r,n,void 0!==n),r));return o.a.createElement("div",p({className:s},u),a)}b.propTypes={className:l.a.string,plain:l.a.bool,carousel:l.a.bool,children:l.a.node}},570:function(e,r,t){"use strict";t.d(r,"a",(function(){return b}));var n=t(1),o=t.n(n),a=t(3),i=t.n(a),c=t(0),l=t.n(c),u=t(456),s=t(556);function p(){return(p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function f(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=Object(u.a)(s.default);function b(e){var r,t=m(),n=e.className,a=e.children,c=f(e,["className","children"]),l=i()((d(r={},t.cardFooter,!0),d(r,n,void 0!==n),r));return o.a.createElement("div",p({className:l},c),a)}b.propTypes={className:l.a.string,children:l.a.node}},571:function(e,r,t){"use strict";r.a=t.p+"29a2f630b088eabfaa8f98afec0658ab.png"},580:function(e,r,t){"use strict";t(1),t(37);var n=t(456),o=(t(464),t(465),t(638),t(664),t(665),t(183),t(51),t(177));Object(n.a)(o.default)},581:function(e,r,t){"use strict";t(1);var n=t(0),o=t.n(n),a=(t(3),t(464),t(465),t(456)),i=(t(568),t(559));Object(a.a)(i.default);o.a.bool},602:function(e,r,t){"use strict";t(1)},638:function(e,r,t){"use strict";var n=t(2),o=t(42),a=t(4),i=t(14),c=t(1),l=t(13),u=(t(0),t(6)),s=t(159),p=t(20),d=t(7),f=t(10),m=t(516),b=t(515),g=t(12),h=t(179),v=t(43),y=t(116),O=t(83),x=t(21);function j(e){return Math.round(1e5*e)/1e5}var w=!1,T=null;var P=c.forwardRef((function(e,r){var t=e.arrow,i=void 0!==t&&t,p=e.children,d=e.classes,j=e.disableFocusListener,P=void 0!==j&&j,C=e.disableHoverListener,S=void 0!==C&&C,F=e.disableTouchListener,E=void 0!==F&&F,N=e.enterDelay,k=void 0===N?100:N,H=e.enterNextDelay,R=void 0===H?0:H,z=e.enterTouchDelay,I=void 0===z?700:z,L=e.id,B=e.interactive,D=void 0!==B&&B,M=e.leaveDelay,A=void 0===M?0:M,W=e.leaveTouchDelay,V=void 0===W?1500:W,$=e.onClose,J=e.onOpen,_=e.open,q=e.placement,U=void 0===q?"bottom":q,Z=e.PopperComponent,G=void 0===Z?b.a:Z,K=e.PopperProps,Q=e.title,X=e.TransitionComponent,Y=void 0===X?m.a:X,ee=e.TransitionProps,re=Object(a.a)(e,["arrow","children","classes","disableFocusListener","disableHoverListener","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","id","interactive","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"]),te=Object(x.a)(),ne=c.useState(),oe=ne[0],ae=ne[1],ie=c.useState(null),ce=ie[0],le=ie[1],ue=c.useRef(!1),se=c.useRef(),pe=c.useRef(),de=c.useRef(),fe=c.useRef(),me=Object(O.a)({controlled:_,default:!1,name:"Tooltip",state:"open"}),be=Object(o.a)(me,2),ge=be[0],he=be[1],ve=ge,ye=Object(h.a)(L);c.useEffect((function(){return function(){clearTimeout(se.current),clearTimeout(pe.current),clearTimeout(de.current),clearTimeout(fe.current)}}),[]);var Oe=function(e){clearTimeout(T),w=!0,he(!0),J&&J(e)},xe=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(r){var t=p.props;"mouseover"===r.type&&t.onMouseOver&&e&&t.onMouseOver(r),ue.current&&"touchstart"!==r.type||(oe&&oe.removeAttribute("title"),clearTimeout(pe.current),clearTimeout(de.current),k||w&&R?(r.persist(),pe.current=setTimeout((function(){Oe(r)}),w?R:k)):Oe(r))}},je=Object(y.a)(),we=je.isFocusVisible,Te=je.onBlurVisible,Pe=je.ref,Ce=c.useState(!1),Se=Ce[0],Fe=Ce[1],Ee=function(){Se&&(Fe(!1),Te())},Ne=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(r){oe||ae(r.currentTarget),we(r)&&(Fe(!0),xe()(r));var t=p.props;t.onFocus&&e&&t.onFocus(r)}},ke=function(e){clearTimeout(T),T=setTimeout((function(){w=!1}),800+A),he(!1),$&&$(e),clearTimeout(se.current),se.current=setTimeout((function(){ue.current=!1}),te.transitions.duration.shortest)},He=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(r){var t=p.props;"blur"===r.type&&(t.onBlur&&e&&t.onBlur(r),Ee()),"mouseleave"===r.type&&t.onMouseLeave&&r.currentTarget===oe&&t.onMouseLeave(r),clearTimeout(pe.current),clearTimeout(de.current),r.persist(),de.current=setTimeout((function(){ke(r)}),A)}},Re=function(e){ue.current=!0;var r=p.props;r.onTouchStart&&r.onTouchStart(e)},ze=Object(g.a)(ae,r),Ie=Object(g.a)(Pe,ze),Le=c.useCallback((function(e){Object(v.a)(Ie,l.findDOMNode(e))}),[Ie]),Be=Object(g.a)(p.ref,Le);""===Q&&(ve=!1);var De=!ve&&!S,Me=Object(n.a)({"aria-describedby":ve?ye:null,title:De&&"string"==typeof Q?Q:null},re,p.props,{className:Object(u.a)(re.className,p.props.className),onTouchStart:Re,ref:Be}),Ae={};E||(Me.onTouchStart=function(e){Re(e),clearTimeout(de.current),clearTimeout(se.current),clearTimeout(fe.current),e.persist(),fe.current=setTimeout((function(){xe()(e)}),I)},Me.onTouchEnd=function(e){p.props.onTouchEnd&&p.props.onTouchEnd(e),clearTimeout(fe.current),clearTimeout(de.current),e.persist(),de.current=setTimeout((function(){ke(e)}),V)}),S||(Me.onMouseOver=xe(),Me.onMouseLeave=He(),D&&(Ae.onMouseOver=xe(!1),Ae.onMouseLeave=He(!1))),P||(Me.onFocus=Ne(),Me.onBlur=He(),D&&(Ae.onFocus=Ne(!1),Ae.onBlur=He(!1)));var We=c.useMemo((function(){return Object(s.a)({popperOptions:{modifiers:{arrow:{enabled:Boolean(ce),element:ce}}}},K)}),[ce,K]);return c.createElement(c.Fragment,null,c.cloneElement(p,Me),c.createElement(G,Object(n.a)({className:Object(u.a)(d.popper,D&&d.popperInteractive,i&&d.popperArrow),placement:U,anchorEl:oe,open:!!oe&&ve,id:Me["aria-describedby"],transition:!0},Ae,We),(function(e){var r=e.placement,t=e.TransitionProps;return c.createElement(Y,Object(n.a)({timeout:te.transitions.duration.shorter},t,ee),c.createElement("div",{className:Object(u.a)(d.tooltip,d["tooltipPlacement".concat(Object(f.a)(r.split("-")[0]))],ue.current&&d.touch,i&&d.tooltipArrow)},Q,i?c.createElement("span",{className:d.arrow,ref:le}):null))})))}));r.a=Object(d.a)((function(e){return{popper:{zIndex:e.zIndex.tooltip,pointerEvents:"none"},popperInteractive:{pointerEvents:"auto"},popperArrow:{'&[x-placement*="bottom"] $arrow':{top:0,left:0,marginTop:"-0.71em",marginLeft:4,marginRight:4,"&::before":{transformOrigin:"0 100%"}},'&[x-placement*="top"] $arrow':{bottom:0,left:0,marginBottom:"-0.71em",marginLeft:4,marginRight:4,"&::before":{transformOrigin:"100% 0"}},'&[x-placement*="right"] $arrow':{left:0,marginLeft:"-0.71em",height:"1em",width:"0.71em",marginTop:4,marginBottom:4,"&::before":{transformOrigin:"100% 100%"}},'&[x-placement*="left"] $arrow':{right:0,marginRight:"-0.71em",height:"1em",width:"0.71em",marginTop:4,marginBottom:4,"&::before":{transformOrigin:"0 0"}}},tooltip:{backgroundColor:Object(p.c)(e.palette.grey[700],.9),borderRadius:e.shape.borderRadius,color:e.palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(10),lineHeight:"".concat(j(1.4),"em"),maxWidth:300,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},tooltipArrow:{position:"relative",margin:"0"},arrow:{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:Object(p.c)(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}},touch:{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:"".concat(j(16/14),"em"),fontWeight:e.typography.fontWeightRegular},tooltipPlacementLeft:Object(i.a)({transformOrigin:"right center",margin:"0 24px "},e.breakpoints.up("sm"),{margin:"0 14px"}),tooltipPlacementRight:Object(i.a)({transformOrigin:"left center",margin:"0 24px"},e.breakpoints.up("sm"),{margin:"0 14px"}),tooltipPlacementTop:Object(i.a)({transformOrigin:"center bottom",margin:"24px 0"},e.breakpoints.up("sm"),{margin:"14px 0"}),tooltipPlacementBottom:Object(i.a)({transformOrigin:"center top",margin:"24px 0"},e.breakpoints.up("sm"),{margin:"14px 0"})}}),{name:"MuiTooltip",flip:!1})(P)},664:function(e,r,t){"use strict";var n=t(1),o=t(54);r.a=Object(o.a)(n.createElement("path",{d:"M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"}),"Apps")},665:function(e,r,t){"use strict";var n=t(1),o=t(54);r.a=Object(o.a)(n.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"}),"CloudDownload")}}]);