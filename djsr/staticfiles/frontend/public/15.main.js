(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1468:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n.n(o),a=(n(0),n(53));function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(m,t);var e,n,o,c,p=(e=m,function(){var t,n=s(e);if(f()){var o=s(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return l(this,t)});function m(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,m),(e=p.call(this,t)).state={accountConfirm:null},e}return n=m,(o=[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.token;e?a.a.get("/user/activate/".concat(e,"/$"),{}).then((function(e){console.log(e),t.setState({accountConfirm:!0})})).catch((function(e){console.log(e),t.setState({accountConfirm:!1})})):this.setState({accountConfirm:!1})}},{key:"render",value:function(){var t=this.state.accountConfirm;return r.a.createElement(r.a.Fragment,null,null===t&&r.a.createElement("div",null,"Oczekiwanie na odpowiedz"),!0===t&&r.a.createElement(Box,{justifyContent:"center",p:1},r.a.createElement(Card,{justify:"center"},r.a.createElement(CardHeader,{title:exam.name}),r.a.createElement(CardActions,{disableSpacing:!0},r.a.createElement(Link,null,r.a.createElement(BootstrapTooltip,{title:"Edytuj sprawdzian"},r.a.createElement(IconButton,null,r.a.createElement(EditIcon,null)))),r.a.createElement(BootstrapTooltip,{title:"Skopiuj sprawdzian"},r.a.createElement(IconButton,null,r.a.createElement(FileCopyIcon,null))),r.a.createElement(BootstrapTooltip,{title:"Usuń sprawdzian"},r.a.createElement(IconButton,null,r.a.createElement(DeleteIcon,null)))))),!1===t&&r.a.createElement("div",null,"Błąd!!! Konto nie zostało aktywowane."))}}])&&i(n.prototype,o),c&&i(n,c),m}(o.Component);p.propTypes={},e.default=p}}]);