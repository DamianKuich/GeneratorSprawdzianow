(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./djsr/frontend/src/components/LoadingForButtons.js":
/*!***********************************************************!*\
  !*** ./djsr/frontend/src/components/LoadingForButtons.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");






var LoadingForButtons = function LoadingForButtons(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    spacing: 0,
    direction: "column",
    alignItems: "center",
    justify: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: 20,
    style: {
      'color': 'purple'
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LoadingForButtons);

/***/ }),

/***/ "./djsr/frontend/src/components/MaterialUiSignUpPage.js":
/*!**************************************************************!*\
  !*** ./djsr/frontend/src/components/MaterialUiSignUpPage.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/esm/Icon/index.js");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Email */ "./node_modules/@material-ui/icons/Email.js");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/People */ "./node_modules/@material-ui/icons/People.js");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Lock */ "./node_modules/@material-ui/icons/Lock.js");
/* harmony import */ var _material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_components_Header_Header_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material_ui_components/Header/Header.js */ "./djsr/frontend/src/components/material_ui_components/Header/Header.js");
/* harmony import */ var _material_ui_components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material_ui_components/Header/HeaderLinks.js */ "./djsr/frontend/src/components/material_ui_components/Header/HeaderLinks.js");
/* harmony import */ var _material_ui_components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material_ui_components/Footer/Footer.js */ "./djsr/frontend/src/components/material_ui_components/Footer/Footer.js");
/* harmony import */ var _material_ui_components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material_ui_components/Grid/GridContainer.js */ "./djsr/frontend/src/components/material_ui_components/Grid/GridContainer.js");
/* harmony import */ var _material_ui_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./material_ui_components/Grid/GridItem.js */ "./djsr/frontend/src/components/material_ui_components/Grid/GridItem.js");
/* harmony import */ var _material_ui_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ././material_ui_components/CustomButtons/Button.js */ "./djsr/frontend/src/components/material_ui_components/CustomButtons/Button.js");
/* harmony import */ var _material_ui_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./material_ui_components/Card/Card.js */ "./djsr/frontend/src/components/material_ui_components/Card/Card.js");
/* harmony import */ var _material_ui_components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./material_ui_components/Card/CardBody.js */ "./djsr/frontend/src/components/material_ui_components/Card/CardBody.js");
/* harmony import */ var _material_ui_components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./material_ui_components/Card/CardHeader.js */ "./djsr/frontend/src/components/material_ui_components/Card/CardHeader.js");
/* harmony import */ var _material_ui_components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./material_ui_components/Card/CardFooter.js */ "./djsr/frontend/src/components/material_ui_components/Card/CardFooter.js");
/* harmony import */ var _material_ui_components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./material_ui_components/CustomInput/CustomInput.js */ "./djsr/frontend/src/components/material_ui_components/CustomInput/CustomInput.js");
/* harmony import */ var _assets_jss_material_kit_react_views_loginPage_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/jss/material-kit-react/views/loginPage.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react/views/loginPage.js");
/* harmony import */ var _img_genesprDark_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./img/genesprDark.png */ "./djsr/frontend/src/components/img/genesprDark.png");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _axiosAPI__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./axiosAPI */ "./djsr/frontend/src/components/axiosAPI.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _MaterialFormikField__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./MaterialFormikField */ "./djsr/frontend/src/components/MaterialFormikField.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var _LoadingForButtons__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./LoadingForButtons */ "./djsr/frontend/src/components/LoadingForButtons.js");
var _this = undefined;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




























var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(_assets_jss_material_kit_react_views_loginPage_js__WEBPACK_IMPORTED_MODULE_18__["default"]);

var MaterialUiSignUpPage = function MaterialUiSignUpPage(props) {
  var FRS = "Pole wymagane";
  var user = props.appState.user;

  var _useSnackbar = Object(notistack__WEBPACK_IMPORTED_MODULE_25__["useSnackbar"])(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar,
      closeSnackbar = _useSnackbar.closeSnackbar;

  var bgStyles = {
    paperContainer: {
      backgroundImage: "url(".concat(_img_genesprDark_png__WEBPACK_IMPORTED_MODULE_19__["default"], ")"),
      minHeight: 1000
    },
    examCardContainer: {
      width: 700,
      backgroundColor: '#FEFEFA'
    },
    cardTitle: {
      textAlign: 'center'
    }
  };

  if (!!user) {
    props.history.push("/");
  }

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("cardHidden"),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      cardAnimaton = _React$useState2[0],
      setCardAnimation = _React$useState2[1];

  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  var classes = useStyles();

  var rest = _extends({}, props);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_24__["default"], {
    style: bgStyles.paperContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    justify: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    xs: 12,
    sm: 12,
    md: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: classes[cardAnimaton]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_22__["Formik"], {
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: ""
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_20__["object"]().shape({
      name: yup__WEBPACK_IMPORTED_MODULE_20__["string"]().min(2, "Too Short!").max(50, "Too Long!").required(FRS),
      password: yup__WEBPACK_IMPORTED_MODULE_20__["string"]().min(8, "Too Short!").max(50, "Too Long!").required(FRS),
      passwordConfirm: yup__WEBPACK_IMPORTED_MODULE_20__["string"]().oneOf([yup__WEBPACK_IMPORTED_MODULE_20__["ref"]("password")], "Hasła są różne").required(FRS),
      email: yup__WEBPACK_IMPORTED_MODULE_20__["string"]().email("Nieprawidłowy adres e-mail").required(FRS)
    }),
    onSubmit: function onSubmit(values, helpers) {
      setTimeout(function () {
        helpers.setSubmitting(true);
        _axiosAPI__WEBPACK_IMPORTED_MODULE_21__["axiosInstanceNoAuth"].post("/user/create/", {
          username: values.name,
          password: values.password,
          email: values.email
        }).then(function (response) {
          enqueueSnackbar("Gotowe! Teraz aktywuj konto przy pomocy linku otrzymanego na adres e-mail", {
            variant: 'success'
          });
          helpers.setSubmitting(false);

          _this.setState({
            token: response.data.confirmation_token
          });
        })["catch"](function (error) {
          // console.log("login error", error.response);
          var errResponse = error.response;
          helpers.setSubmitting(false);
          helpers.setValues({
            name: "",
            password: "",
            passwordConfirm: "",
            email: ""
          }, false);
          helpers.setTouched({
            name: false,
            password: false,
            email: false,
            passwordConfirm: false
          }, false);
          helpers.setFieldError("general", "Nierpawidłowa nazwa użytkownika lub hasło");
        });
      }, 5000);
    }
  }, function (_ref) {
    var values = _ref.values,
        errors = _ref.errors,
        touched = _ref.touched,
        handleChange = _ref.handleChange,
        handleBlur = _ref.handleBlur,
        handleSubmit = _ref.handleSubmit,
        isSubmitting = _ref.isSubmitting;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      className: classes.form
    }, console.log(touched, errors), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      color: "primary",
      className: classes.cardHeader
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Rejestracja")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_22__["Field"], {
      component: _MaterialFormikField__WEBPACK_IMPORTED_MODULE_23__["default"],
      name: "name",
      formControlProps: {
        fullWidth: true
      },
      labelText: "Nazwa u\u017Cytkownika",
      inputProps: {
        endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2__["default"], {
          position: "end"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5___default.a, {
          className: classes.inputIconsColor
        }))
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_22__["Field"], {
      component: _MaterialFormikField__WEBPACK_IMPORTED_MODULE_23__["default"],
      name: "email",
      formControlProps: {
        fullWidth: true
      },
      labelText: "E-mail",
      inputProps: {
        endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2__["default"], {
          position: "end"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5___default.a, {
          className: classes.inputIconsColor
        }))
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_22__["Field"], {
      component: _MaterialFormikField__WEBPACK_IMPORTED_MODULE_23__["default"],
      name: "password",
      formControlProps: {
        fullWidth: true
      },
      labelText: "Has\u0142o",
      inputProps: {
        type: "password",
        endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2__["default"], {
          position: "end"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_6___default.a, {
          className: classes.inputIconsColor
        }))
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_22__["Field"], {
      component: _MaterialFormikField__WEBPACK_IMPORTED_MODULE_23__["default"],
      name: "passwordConfirm",
      formControlProps: {
        fullWidth: true
      },
      labelText: "Powt\xF3rz has\u0142o",
      inputProps: {
        type: "password",
        endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2__["default"], {
          position: "end"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_6___default.a, {
          className: classes.inputIconsColor
        }))
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
      className: classes.cardFooter
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
      simple: true,
      color: "primary",
      size: "lg",
      onClick: function onClick() {
        handleSubmit();
      },
      disabled: isSubmitting
    }, "Zarejestruj ", isSubmitting && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingForButtons__WEBPACK_IMPORTED_MODULE_26__["default"], null))));
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (MaterialUiSignUpPage);

/***/ }),

/***/ "./djsr/frontend/src/components/img/genesprDark.png":
/*!**********************************************************!*\
  !*** ./djsr/frontend/src/components/img/genesprDark.png ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "29a2f630b088eabfaa8f98afec0658ab.png");

/***/ }),

/***/ "./node_modules/@material-ui/icons/Delete.js":
/*!***************************************************!*\
  !*** ./node_modules/@material-ui/icons/Delete.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
}), 'Delete');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Favorite.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/icons/Favorite.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
}), 'Favorite');

exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=12.main.js.map