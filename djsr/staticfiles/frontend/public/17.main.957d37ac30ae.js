(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./djsr/frontend/src/components/MaterialUiManageAccount.js":
/*!*****************************************************************!*\
  !*** ./djsr/frontend/src/components/MaterialUiManageAccount.js ***!
  \*****************************************************************/
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
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_components_Header_Header_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material_ui_components/Header/Header.js */ "./djsr/frontend/src/components/material_ui_components/Header/Header.js");
/* harmony import */ var _material_ui_components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material_ui_components/Header/HeaderLinks.js */ "./djsr/frontend/src/components/material_ui_components/Header/HeaderLinks.js");
/* harmony import */ var _material_ui_components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material_ui_components/Footer/Footer.js */ "./djsr/frontend/src/components/material_ui_components/Footer/Footer.js");
/* harmony import */ var _material_ui_components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./material_ui_components/Grid/GridContainer.js */ "./djsr/frontend/src/components/material_ui_components/Grid/GridContainer.js");
/* harmony import */ var _material_ui_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./material_ui_components/Grid/GridItem.js */ "./djsr/frontend/src/components/material_ui_components/Grid/GridItem.js");
/* harmony import */ var _material_ui_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ././material_ui_components/CustomButtons/Button.js */ "./djsr/frontend/src/components/material_ui_components/CustomButtons/Button.js");
/* harmony import */ var _material_ui_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./material_ui_components/Card/Card.js */ "./djsr/frontend/src/components/material_ui_components/Card/Card.js");
/* harmony import */ var _material_ui_components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./material_ui_components/Card/CardBody.js */ "./djsr/frontend/src/components/material_ui_components/Card/CardBody.js");
/* harmony import */ var _material_ui_components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./material_ui_components/Card/CardHeader.js */ "./djsr/frontend/src/components/material_ui_components/Card/CardHeader.js");
/* harmony import */ var _material_ui_components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./material_ui_components/Card/CardFooter.js */ "./djsr/frontend/src/components/material_ui_components/Card/CardFooter.js");
/* harmony import */ var _material_ui_components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./material_ui_components/CustomInput/CustomInput.js */ "./djsr/frontend/src/components/material_ui_components/CustomInput/CustomInput.js");
/* harmony import */ var _assets_jss_material_kit_react_views_loginPage_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/jss/material-kit-react/views/loginPage.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react/views/loginPage.js");
/* harmony import */ var _img_genesprDark_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./img/genesprDark.png */ "./djsr/frontend/src/components/img/genesprDark.png");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _axiosAPI__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./axiosAPI */ "./djsr/frontend/src/components/axiosAPI.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _MaterialFormikField__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./MaterialFormikField */ "./djsr/frontend/src/components/MaterialFormikField.js");
/* harmony import */ var _material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/lab/ToggleButton */ "./node_modules/@material-ui/lab/esm/ToggleButton/index.js");
/* harmony import */ var _material_ui_lab_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/lab/ToggleButtonGroup */ "./node_modules/@material-ui/lab/esm/ToggleButtonGroup/index.js");
var _this = undefined;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




























var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(_assets_jss_material_kit_react_views_loginPage_js__WEBPACK_IMPORTED_MODULE_19__["default"]);

var MaterialUiManageAccount = function MaterialUiManageAccount(props) {
  var FRS = "Pole wymagane";
  var user = props.appState.user;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("email"),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      editView = _React$useState2[0],
      setEditView = _React$useState2[1];

  var bgStyles = {
    paperContainer: {
      backgroundImage: "url(".concat(_img_genesprDark_png__WEBPACK_IMPORTED_MODULE_20__["default"], ")"),
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

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("cardHidden"),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      cardAnimaton = _React$useState4[0],
      setCardAnimation = _React$useState4[1];

  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  var classes = useStyles();

  var rest = _extends({}, props);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: bgStyles.paperContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    justify: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    xs: 12,
    sm: 12,
    md: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes[cardAnimaton]
  }, editView == "email" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_23__["Formik"], {
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: ""
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_21__["object"]().shape({
      name: yup__WEBPACK_IMPORTED_MODULE_21__["string"]().min(2, "Too Short!").max(50, "Too Long!").required(FRS),
      password: yup__WEBPACK_IMPORTED_MODULE_21__["string"]().min(8, "Too Short!").max(50, "Too Long!").required(FRS),
      passwordConfirm: yup__WEBPACK_IMPORTED_MODULE_21__["string"]().oneOf([yup__WEBPACK_IMPORTED_MODULE_21__["ref"]("password")], "Hasła są różne").required(FRS),
      email: yup__WEBPACK_IMPORTED_MODULE_21__["string"]().email("Nieprawidłowy adres e-mail").required(FRS)
    }),
    onSubmit: function onSubmit(values, helpers) {
      setTimeout(function () {
        helpers.setSubmitting(true);
        _axiosAPI__WEBPACK_IMPORTED_MODULE_22__["axiosInstanceNoAuth"].put("/user/update/", {
          username: values.name,
          password: values.password,
          email: values.email
        }).then(function (response) {
          helpers.setSubmitting(false);

          _this.setState({
            token: response.data.confirmation_token
          });

          _this.props.history.push("/signupsuccess/".concat(response.data.confirmation_token));
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
    }, console.log(touched, errors), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
      color: "primary",
      className: classes.cardHeader
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Edytuj dane")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_26__["default"], {
      orientation: "vertical",
      color: "primary",
      "aria-label": "vertical contained primary button group",
      variant: "text"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
      variant: "contained",
      color: "primary",
      onClick: function onClick(e) {
        return setEditView("email");
      }
    }, "Zmie\u0144 e-mail"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
      variant: "contained",
      color: "primary",
      onClick: function onClick(e) {
        return setEditView("name");
      }
    }, "Zmie\u0144 nazw\u0119 u\u017Cytkownika"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
      variant: "contained",
      color: "primary",
      onClick: function onClick(e) {
        return setEditView("password");
      }
    }, "Zmie\u0144 has\u0142o")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_23__["Field"], {
      component: _MaterialFormikField__WEBPACK_IMPORTED_MODULE_24__["default"],
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
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
      className: classes.cardFooter
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
      simple: true,
      color: "primary",
      size: "lg",
      onClick: function onClick() {
        handleSubmit();
      }
    }, "Zmie\u0144 dane")));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), editView == "name" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_23__["Formik"], {
    initialValues: {
      name: ""
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_21__["object"]().shape({
      name: yup__WEBPACK_IMPORTED_MODULE_21__["string"]().min(2, "Too Short!").max(50, "Too Long!").required(FRS)
    }),
    onSubmit: function onSubmit(values, helpers) {
      setTimeout(function () {
        helpers.setSubmitting(true);
        _axiosAPI__WEBPACK_IMPORTED_MODULE_22__["default"].put("/user/update/", {
          username: values.name
        }).then(function (response) {
          _this.props.setUser(response.data);

          helpers.setStatus("Pomyslnie zmieniono dane");
          helpers.setSubmitting(false);

          _this.setState({
            locked: false
          });
        })["catch"](function (error) {
          // console.log("login error", error.response);
          var errResponse = error.response;
          helpers.setSubmitting(false);

          _this.setState({
            locked: false
          });

          helpers.setValues({
            name: ""
          }, false);
          helpers.setTouched({
            name: false
          }, false);
          helpers.setFieldError("name", "Nazwa jest w użyciu lub jest nieprawidłowa.");
        });
      }, 400);
    }
  }, function (_ref2) {
    var values = _ref2.values,
        errors = _ref2.errors,
        touched = _ref2.touched,
        handleChange = _ref2.handleChange,
        handleBlur = _ref2.handleBlur,
        handleSubmit = _ref2.handleSubmit,
        isSubmitting = _ref2.isSubmitting;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      className: classes.form
    }, console.log(touched, errors), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
      color: "primary",
      className: classes.cardHeader
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Edytuj dane")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_26__["default"], {
      orientation: "vertical",
      color: "primary",
      "aria-label": "vertical contained primary button group",
      variant: "text"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
      variant: "contained",
      color: "primary",
      onClick: function onClick(e) {
        return setEditView("email");
      }
    }, "Zmie\u0144 e-mail"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
      variant: "contained",
      color: "primary",
      onClick: function onClick(e) {
        return setEditView("name");
      }
    }, "Zmie\u0144 nazw\u0119 u\u017Cytkownika"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
      variant: "contained",
      color: "primary",
      onClick: function onClick(e) {
        return setEditView("password");
      }
    }, "Zmie\u0144 has\u0142o")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_23__["Field"], {
      component: _MaterialFormikField__WEBPACK_IMPORTED_MODULE_24__["default"],
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
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
      className: classes.cardFooter
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
      simple: true,
      color: "primary",
      size: "lg",
      onClick: function onClick() {
        handleSubmit();
      }
    }, "Zmie\u0144 dane")));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), editView == "password" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_23__["Formik"], {
    initialValues: {
      password: "",
      passwordConfirm: "",
      oldPassword: ""
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_21__["object"]().shape({
      password: yup__WEBPACK_IMPORTED_MODULE_21__["string"]().min(8, "Too Short!").max(50, "Too Long!").required("Pole wymagane").oneOf([yup__WEBPACK_IMPORTED_MODULE_21__["ref"]("passwordConfirm")], "Hasła są różne"),
      oldPassword: yup__WEBPACK_IMPORTED_MODULE_21__["string"]().min(8, "Too Short!").max(50, "Too Long!").required("Pole wymagane"),
      passwordConfirm: yup__WEBPACK_IMPORTED_MODULE_21__["string"]().oneOf([yup__WEBPACK_IMPORTED_MODULE_21__["ref"]("password")], "Hasła są różne").required("Pole wymagane")
    }),
    onSubmit: function onSubmit(values, helpers) {
      setTimeout(function () {
        helpers.setSubmitting(true);
        _axiosAPI__WEBPACK_IMPORTED_MODULE_22__["default"].put("/user/update/", {
          password: values.password,
          oldpassword: values.oldPassword
        }).then(function (response) {
          _this.props.setUser(response.data);

          helpers.setStatus("Pomyslnie zmieniono hasło");
          helpers.setSubmitting(false);

          _this.setState({
            locked: false
          });
        })["catch"](function (error) {
          helpers.setStatus("Podano nieprawidłowe aktualne hasło");
          console.log("chngpass error", error.response);
          var errResponse = error.response;
          helpers.setSubmitting(false);

          _this.setState({
            locked: false
          });

          helpers.setValues({
            password: "",
            oldPassword: "",
            passwordConfirm: ""
          }, false);
          helpers.setTouched({
            password: false,
            oldPassword: false,
            passwordConfirm: false
          }, false);
          helpers.setFieldError("oldPassword", "Podano nieprawidłowe stare hasło");
        });
      }, 400);
    }
  }, function (_ref3) {
    var values = _ref3.values,
        errors = _ref3.errors,
        touched = _ref3.touched,
        handleChange = _ref3.handleChange,
        handleBlur = _ref3.handleBlur,
        handleSubmit = _ref3.handleSubmit,
        isSubmitting = _ref3.isSubmitting;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      className: classes.form
    }, console.log(touched, errors), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
      color: "primary",
      className: classes.cardHeader
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Edytuj dane")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_26__["default"], {
      orientation: "vertical",
      color: "primary",
      "aria-label": "vertical contained primary button group",
      variant: "text"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
      variant: "contained",
      color: "primary",
      onClick: function onClick(e) {
        return setEditView("email");
      }
    }, "Zmie\u0144 e-mail"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
      variant: "contained",
      color: "primary",
      onClick: function onClick(e) {
        return setEditView("name");
      }
    }, "Zmie\u0144 nazw\u0119 u\u017Cytkownika"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
      variant: "contained",
      color: "primary",
      onClick: function onClick(e) {
        return setEditView("password");
      }
    }, "Zmie\u0144 has\u0142o")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_23__["Field"], {
      component: _MaterialFormikField__WEBPACK_IMPORTED_MODULE_24__["default"],
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_23__["Field"], {
      component: _MaterialFormikField__WEBPACK_IMPORTED_MODULE_24__["default"],
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_23__["Field"], {
      component: _MaterialFormikField__WEBPACK_IMPORTED_MODULE_24__["default"],
      name: "oldPassword",
      formControlProps: {
        fullWidth: true
      },
      labelText: "Podaj stare has\u0142o",
      inputProps: {
        type: "password",
        endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2__["default"], {
          position: "end"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_6___default.a, {
          className: classes.inputIconsColor
        }))
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
      className: classes.cardFooter
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
      simple: true,
      color: "primary",
      size: "lg",
      onClick: function onClick() {
        handleSubmit();
      }
    }, "Zmie\u0144 dane")));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (MaterialUiManageAccount);

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

/***/ })

}]);
//# sourceMappingURL=17.main.js.map