(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./djsr/frontend/src/components/MaterialUiAccountActivation.js":
/*!*********************************************************************!*\
  !*** ./djsr/frontend/src/components/MaterialUiAccountActivation.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _axiosAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./axiosAPI */ "./djsr/frontend/src/components/axiosAPI.js");
/* harmony import */ var _material_ui_components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material_ui_components/Card/CardHeader.js */ "./djsr/frontend/src/components/material_ui_components/Card/CardHeader.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _img_genesprDark_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/genesprDark.png */ "./djsr/frontend/src/components/img/genesprDark.png");
/* harmony import */ var _LoadingScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LoadingScreen */ "./djsr/frontend/src/components/LoadingScreen.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material_ui_components/Grid/GridContainer.js */ "./djsr/frontend/src/components/material_ui_components/Grid/GridContainer.js");
/* harmony import */ var _material_ui_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material_ui_components/Grid/GridItem.js */ "./djsr/frontend/src/components/material_ui_components/Grid/GridItem.js");
/* harmony import */ var _material_ui_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material_ui_components/Card/Card.js */ "./djsr/frontend/src/components/material_ui_components/Card/Card.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }












var bgStyles = {
  paperContainer: {
    backgroundImage: "url(".concat(_img_genesprDark_png__WEBPACK_IMPORTED_MODULE_5__["default"], ")"),
    minHeight: 1000,
    maxWidth: 1885
  },
  examCardContainer: {
    width: 700,
    backgroundColor: '#FEFEFA'
  },
  cardTitle: {
    textAlign: 'center'
  }
};
var signupPageStyle = {
  container: {
    zIndex: "2",
    position: "relative",
    paddingTop: "25vh",
    color: "#FFFFFF",
    paddingBottom: "200px"
  },
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)"
  },
  pageHeader: {
    minHeight: "100vh",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""'
    },
    "& footer li a,& footer li a:hover,& footer li a:active": {
      color: "#FFFFFF"
    },
    "& footer": {
      position: "absolute",
      bottom: "0",
      width: "100%"
    }
  },
  form: {
    margin: "0"
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "20px 0",
    marginBottom: "15px"
  },
  socialIcons: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px"
  },
  divider: {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center"
  },
  cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important"
  },
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0"
  },
  inputIconsColor: {
    color: "#495057"
  }
};

var AccountActivation = /*#__PURE__*/function (_Component) {
  _inherits(AccountActivation, _Component);

  var _super = _createSuper(AccountActivation);

  function AccountActivation(props) {
    var _this;

    _classCallCheck(this, AccountActivation);

    _this = _super.call(this, props);
    _this.state = {
      accountConfirm: null
    };
    return _this;
  }

  _createClass(AccountActivation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var token = this.props.match.params.token;

      if (!token) {
        this.setState({
          accountConfirm: false
        });
      } else {
        _axiosAPI__WEBPACK_IMPORTED_MODULE_2__["axiosInstanceNoAuth"].get("/user/activate/".concat(token, "/$"), {}).then(function (response) {
          console.log(response);

          _this2.setState({
            accountConfirm: true
          });
        })["catch"](function (error) {
          console.log(error);

          _this2.setState({
            accountConfirm: false
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var accountConfirm = this.state.accountConfirm;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, accountConfirm === null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingScreen__WEBPACK_IMPORTED_MODULE_6__["default"], null), accountConfirm === true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__["default"], {
        style: bgStyles.paperContainer
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: signupPageStyle.container
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
        justify: "center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        xs: 12,
        sm: 12,
        md: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        color: "success",
        style: signupPageStyle.cardHeader
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Konto zosta\u0142o aktywowane, mo\u017Cesz si\u0119 zalogowa\u0107"))))))), accountConfirm === false && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__["default"], {
        style: bgStyles.paperContainer
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: signupPageStyle.container
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
        justify: "center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        xs: 12,
        sm: 12,
        md: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        color: "danger",
        style: signupPageStyle.cardHeader
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Nie uda\u0142o si\u0119 aktywowa\u0107 konta, link nieaktywny"))))))));
    }
  }]);

  return AccountActivation;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AccountActivation.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (AccountActivation);

/***/ })

}]);
//# sourceMappingURL=16.main.js.map