(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./djsr/frontend/src/components/HomePage.js":
/*!**************************************************!*\
  !*** ./djsr/frontend/src/components/HomePage.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_components_Parallax_Parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material_ui_components/Parallax/Parallax */ "./djsr/frontend/src/components/material_ui_components/Parallax/Parallax.js");
/* harmony import */ var _material_ui_components_Grid_GridContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material_ui_components/Grid/GridContainer */ "./djsr/frontend/src/components/material_ui_components/Grid/GridContainer.js");
/* harmony import */ var _material_ui_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material_ui_components/Grid/GridItem */ "./djsr/frontend/src/components/material_ui_components/Grid/GridItem.js");
/* harmony import */ var _material_ui_components_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material_ui_components/CustomButtons/Button */ "./djsr/frontend/src/components/material_ui_components/CustomButtons/Button.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_jss_material_kit_react_views_landingPage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/jss/material-kit-react/views/landingPage.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react/views/landingPage.js");
/* harmony import */ var _img_genspr_parralax_bg_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/genspr-parralax-bg.png */ "./djsr/frontend/src/components/img/genspr-parralax-bg.png");
/* harmony import */ var _ShortDescription__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ShortDescription */ "./djsr/frontend/src/components/ShortDescription.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(_assets_jss_material_kit_react_views_landingPage_js__WEBPACK_IMPORTED_MODULE_7__["default"]);

var HomePage = function HomePage(props) {
  var classes = useStyles();

  var rest = _extends({}, props);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Parallax_Parallax__WEBPACK_IMPORTED_MODULE_1__["default"], {
    filter: true,
    image: _img_genspr_parralax_bg_png__WEBPACK_IMPORTED_MODULE_8__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Grid_GridContainer__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: classes.title
  }, "Your Story Starts With Us."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Every landing page needs a small description after the big bold title, that", "'", "s why we added this text here. Add here all the information that can make you or your product create the first impression."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "danger",
    size: "lg",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-play"
  }), "Watch video"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(classes.main, classes.mainRaised)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShortDescription__WEBPACK_IMPORTED_MODULE_9__["default"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./djsr/frontend/src/components/ShortDescription.js":
/*!**********************************************************!*\
  !*** ./djsr/frontend/src/components/ShortDescription.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Chat */ "./node_modules/@material-ui/icons/Chat.js");
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/VerifiedUser */ "./node_modules/@material-ui/icons/VerifiedUser.js");
/* harmony import */ var _material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Fingerprint */ "./node_modules/@material-ui/icons/Fingerprint.js");
/* harmony import */ var _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material_ui_components/Grid/GridContainer.js */ "./djsr/frontend/src/components/material_ui_components/Grid/GridContainer.js");
/* harmony import */ var _material_ui_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material_ui_components/Grid/GridItem.js */ "./djsr/frontend/src/components/material_ui_components/Grid/GridItem.js");
/* harmony import */ var _material_ui_components_InfoArea_InfoArea_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material_ui_components/InfoArea/InfoArea.js */ "./djsr/frontend/src/components/material_ui_components/InfoArea/InfoArea.js");
/* harmony import */ var _assets_jss_material_kit_react_views_landingPageSections_productStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/jss/material-kit-react/views/landingPageSections/productStyle.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react/views/landingPageSections/productStyle.js");

 // @material-ui/icons



 // core components





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(_assets_jss_material_kit_react_views_landingPageSections_productStyle_js__WEBPACK_IMPORTED_MODULE_8__["default"]);

var ShortDescription = function ShortDescription() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.section
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xs: 12,
    sm: 12,
    md: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_InfoArea_InfoArea_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Free Chat",
    description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    icon: _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_2___default.a,
    iconColor: "info",
    vertical: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xs: 12,
    sm: 12,
    md: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_InfoArea_InfoArea_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Verified Users",
    description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    icon: _material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_3___default.a,
    iconColor: "success",
    vertical: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xs: 12,
    sm: 12,
    md: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_InfoArea_InfoArea_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Fingerprint",
    description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    icon: _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_4___default.a,
    iconColor: "danger",
    vertical: true
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ShortDescription);

/***/ }),

/***/ "./djsr/frontend/src/components/assets/jss/material-kit-react/components/infoStyle.js":
/*!********************************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/jss/material-kit-react/components/infoStyle.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../jss/material-kit-react.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react.js");

var infoStyle = {
  infoArea: {
    maxWidth: "360px",
    margin: "0 auto",
    padding: "0px"
  },
  iconWrapper: {
    "float": "left",
    marginTop: "24px",
    marginRight: "10px"
  },
  primary: {
    color: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"]
  },
  warning: {
    color: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"]
  },
  danger: {
    color: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"]
  },
  success: {
    color: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["successColor"]
  },
  info: {
    color: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"]
  },
  rose: {
    color: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"]
  },
  gray: {
    color: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"]
  },
  icon: {
    width: "36px",
    height: "36px"
  },
  descriptionWrapper: {
    color: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"],
    overflow: "hidden"
  },
  title: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["title"],
  description: {
    color: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"],
    overflow: "hidden",
    marginTop: "0px",
    fontSize: "14px"
  },
  iconWrapperVertical: {
    "float": "none"
  },
  iconVertical: {
    width: "61px",
    height: "61px"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (infoStyle);

/***/ }),

/***/ "./djsr/frontend/src/components/assets/jss/material-kit-react/components/parallaxStyle.js":
/*!************************************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/jss/material-kit-react/components/parallaxStyle.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var parallaxStyle = {
  parallax: {
    height: "90vh",
    maxHeight: "1000px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center"
  },
  filter: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  small: {
    height: "380px"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (parallaxStyle);

/***/ }),

/***/ "./djsr/frontend/src/components/assets/jss/material-kit-react/views/landingPage.js":
/*!*****************************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/jss/material-kit-react/views/landingPage.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../jss/material-kit-react.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var landingPageStyle = {
  container: _objectSpread({
    zIndex: "12",
    color: "#FFFFFF"
  }, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["container"]),
  title: _objectSpread({}, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["title"], {
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  }),
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (landingPageStyle);

/***/ }),

/***/ "./djsr/frontend/src/components/assets/jss/material-kit-react/views/landingPageSections/productStyle.js":
/*!**************************************************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/jss/material-kit-react/views/landingPageSections/productStyle.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../jss/material-kit-react.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: _objectSpread({}, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["title"], {
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  description: {
    color: "#999"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (productStyle);

/***/ }),

/***/ "./djsr/frontend/src/components/img/genspr-parralax-bg.png":
/*!*****************************************************************!*\
  !*** ./djsr/frontend/src/components/img/genspr-parralax-bg.png ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8ae80ee488d6ec36fd62f67865d06356.png");

/***/ }),

/***/ "./djsr/frontend/src/components/material_ui_components/Grid/GridContainer.js":
/*!***********************************************************************************!*\
  !*** ./djsr/frontend/src/components/material_ui_components/Grid/GridContainer.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library to set properties for components

 // @material-ui/core components



var styles = {
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto"
  }
};
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(styles);
function GridContainer(props) {
  var classes = useStyles();

  var children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, ["children", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    container: true
  }, rest, {
    className: classes.grid + " " + className
  }), children);
}
GridContainer.defaultProps = {
  className: ""
};
GridContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ }),

/***/ "./djsr/frontend/src/components/material_ui_components/Grid/GridItem.js":
/*!******************************************************************************!*\
  !*** ./djsr/frontend/src/components/material_ui_components/Grid/GridItem.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library to set properties for components

 // @material-ui/core components



var styles = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    flexBasis: "auto"
  }
};
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(styles);
function GridItem(props) {
  var classes = useStyles();

  var children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, ["children", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    item: true
  }, rest, {
    className: classes.grid + " " + className
  }), children);
}
GridItem.defaultProps = {
  className: ""
};
GridItem.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ }),

/***/ "./djsr/frontend/src/components/material_ui_components/InfoArea/InfoArea.js":
/*!**********************************************************************************!*\
  !*** ./djsr/frontend/src/components/material_ui_components/InfoArea/InfoArea.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoArea; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _assets_jss_material_kit_react_components_infoStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/jss/material-kit-react/components/infoStyle.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react/components/infoStyle.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // nodejs library to set properties for components

 // nodejs library that concatenates classes

 // @material-ui/core components



var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(_assets_jss_material_kit_react_components_infoStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
function InfoArea(props) {
  var _classNames, _classNames2;

  var classes = useStyles();
  var title = props.title,
      description = props.description,
      iconColor = props.iconColor,
      vertical = props.vertical;
  var iconWrapper = classnames__WEBPACK_IMPORTED_MODULE_2___default()((_classNames = {}, _defineProperty(_classNames, classes.iconWrapper, true), _defineProperty(_classNames, classes[iconColor], true), _defineProperty(_classNames, classes.iconWrapperVertical, vertical), _classNames));
  var iconClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()((_classNames2 = {}, _defineProperty(_classNames2, classes.icon, true), _defineProperty(_classNames2, classes.iconVertical, vertical), _classNames2));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.infoArea
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: iconWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(props.icon, {
    className: iconClasses
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.descriptionWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: classes.title
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: classes.description
  }, description)));
}
InfoArea.defaultProps = {
  iconColor: "gray"
};
InfoArea.propTypes = {
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  iconColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["primary", "warning", "danger", "success", "info", "rose", "gray"]),
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "./djsr/frontend/src/components/material_ui_components/Parallax/Parallax.js":
/*!**********************************************************************************!*\
  !*** ./djsr/frontend/src/components/material_ui_components/Parallax/Parallax.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Parallax; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _assets_jss_material_kit_react_components_parallaxStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/jss/material-kit-react/components/parallaxStyle.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react/components/parallaxStyle.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // core components


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(_assets_jss_material_kit_react_components_parallaxStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
function Parallax(props) {
  var _classNames;

  var windowScrollTop;

  if (window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset / 3;
  } else {
    windowScrollTop = 0;
  }

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("translate3d(0," + windowScrollTop + "px,0)"),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      transform = _React$useState2[0],
      setTransform = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }

    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  });

  var resetTransform = function resetTransform() {
    var windowScrollTop = window.pageYOffset / 3;
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };

  var filter = props.filter,
      className = props.className,
      children = props.children,
      style = props.style,
      image = props.image,
      small = props.small;
  var classes = useStyles();
  var parallaxClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()((_classNames = {}, _defineProperty(_classNames, classes.parallax, true), _defineProperty(_classNames, classes.filter, filter), _defineProperty(_classNames, classes.small, small), _defineProperty(_classNames, className, className !== undefined), _classNames));
  ;
  console.log("parralax img", image);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: parallaxClasses,
    style: _objectSpread({}, style, {
      backgroundImage: "url(" + image + ")",
      transform: transform
    })
  }, children);
}
Parallax.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  filter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  image: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  small: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};

/***/ })

}]);
//# sourceMappingURL=3.main.js.map