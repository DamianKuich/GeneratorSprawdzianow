(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./djsr/frontend/src/components/MDBLazy/MDBLazyComponents.js":
/*!*******************************************************************!*\
  !*** ./djsr/frontend/src/components/MDBLazy/MDBLazyComponents.js ***!
  \*******************************************************************/
/*! exports provided: MDBContainer, MDBCollapse, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBNavLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MDBContainer\", function() { return MDBContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MDBCollapse\", function() { return MDBCollapse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MDBDropdown\", function() { return MDBDropdown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MDBDropdownItem\", function() { return MDBDropdownItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MDBDropdownMenu\", function() { return MDBDropdownMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MDBDropdownToggle\", function() { return MDBDropdownToggle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MDBIcon\", function() { return MDBIcon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MDBNavbar\", function() { return MDBNavbar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MDBNavbarBrand\", function() { return MDBNavbarBrand; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MDBNavbarNav\", function() { return MDBNavbarNav; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MDBNavbarToggler\", function() { return MDBNavbarToggler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MDBNavItem\", function() { return MDBNavItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MDBNavLink\", function() { return MDBNavLink; });\n/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mdbreact */ \"./node_modules/mdbreact/dist/mdbreact.esm.js\");\n\n/*\nexport const \n */\n\nvar MDBContainer = mdbreact__WEBPACK_IMPORTED_MODULE_0__[\"MDBContainer\"];\nvar MDBCollapse = mdbreact__WEBPACK_IMPORTED_MODULE_0__[\"MDBCollapse\"];\nvar MDBDropdown = mdbreact__WEBPACK_IMPORTED_MODULE_0__[\"MDBDropdown\"];\nvar MDBDropdownItem = mdbreact__WEBPACK_IMPORTED_MODULE_0__[\"MDBDropdownItem\"];\nvar MDBDropdownMenu = mdbreact__WEBPACK_IMPORTED_MODULE_0__[\"MDBDropdownMenu\"];\nvar MDBDropdownToggle = mdbreact__WEBPACK_IMPORTED_MODULE_0__[\"MDBDropdownToggle\"];\nvar MDBIcon = mdbreact__WEBPACK_IMPORTED_MODULE_0__[\"MDBIcon\"];\nvar MDBNavbar = mdbreact__WEBPACK_IMPORTED_MODULE_0__[\"MDBNavbar\"];\nvar MDBNavbarBrand = mdbreact__WEBPACK_IMPORTED_MODULE_0__[\"MDBNavbarBrand\"];\nvar MDBNavbarNav = mdbreact__WEBPACK_IMPORTED_MODULE_0__[\"MDBNavbarNav\"];\nvar MDBNavbarToggler = mdbreact__WEBPACK_IMPORTED_MODULE_0__[\"MDBNavbarToggler\"];\nvar MDBNavItem = mdbreact__WEBPACK_IMPORTED_MODULE_0__[\"MDBNavItem\"];\nvar MDBNavLink = mdbreact__WEBPACK_IMPORTED_MODULE_0__[\"MDBNavLink\"];\n\n//# sourceURL=webpack:///./djsr/frontend/src/components/MDBLazy/MDBLazyComponents.js?");

/***/ }),

/***/ "./djsr/frontend/src/components/UserAccountManager.js":
/*!************************************************************!*\
  !*** ./djsr/frontend/src/components/UserAccountManager.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mdbreact */ \"./node_modules/mdbreact/dist/mdbreact.esm.js\");\n/* harmony import */ var _MDBLazy_MDBLazyComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MDBLazy/MDBLazyComponents */ \"./djsr/frontend/src/components/MDBLazy/MDBLazyComponents.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ \"./node_modules/yup/es/index.js\");\n/* harmony import */ var _axiosAPI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./axiosAPI */ \"./djsr/frontend/src/components/axiosAPI.js\");\n/* harmony import */ var _FormikMDInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormikMDInput */ \"./djsr/frontend/src/components/FormikMDInput.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\nvar UserAccountManager = /*#__PURE__*/function (_Component) {\n  _inherits(UserAccountManager, _Component);\n\n  var _super = _createSuper(UserAccountManager);\n\n  function UserAccountManager(props) {\n    var _this;\n\n    _classCallCheck(this, UserAccountManager);\n\n    _this = _super.call(this, props);\n\n    _defineProperty(_assertThisInitialized(_this), \"checkUser\", function () {\n      _this.props.checkUser(function (userData) {\n        _this.setState({\n          isUserChecked: true,\n          userInfo: userData\n        });\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"toggle\", function (id) {\n      console.log(_this.userDataForm);\n\n      _this.userDataForm.current.setFieldValue(\"name\", _this.props.appState.user.username, false);\n\n      _this.userDataForm.current.setFieldTouched(\"name\", false, false);\n\n      _this.userPasswordForm.current.setValues({\n        password: \"\",\n        passwordConfirm: \"\",\n        oldPassword: \"\"\n      }, false);\n\n      _this.userPasswordForm.current.setTouched({\n        password: false,\n        passwordConfirm: false,\n        oldPassword: false\n      }); // this.userEmailForm;\n\n\n      _this.setState({\n        activeItem: id\n      });\n    });\n\n    _this.state = {\n      activeItem: \"2\",\n      isUserChecked: false,\n      userInfo: null,\n      locked: false\n    };\n    _this.userDataForm = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\n    _this.userPasswordForm = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\n    _this.userEmailForm = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\n    return _this;\n  }\n\n  _createClass(UserAccountManager, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.checkUser();\n    } // componentWillReceiveProps(nextProps) {\n    //\n    // }\n    //\n    // shouldComponentUpdate(nextProps, nextState) {\n    //\n    // }\n    //\n    // componentWillUpdate(nextProps, nextState) {\n    //\n    // }\n    //\n    // componentDidUpdate(prevProps, prevState) {\n    //\n    // }\n    //\n    // componentWillUnmount() {\n    //\n    // }\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var activeItem = this.state.activeItem;\n      var locked = this.state.locked;\n      var isUserChecked = this.state.isUserChecked;\n      if (!isUserChecked) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Loading\");\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__[\"MDBContainer\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__[\"MDBCard\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__[\"MDBCardBody\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__[\"MDBRow\"], {\n        className: \"w-auto\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__[\"MDBCol\"], {\n        xl: \"3\",\n        className: \"border-right\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__[\"MDBNav\"], {\n        className: \"nav-pills flex-column nav-justified font-weight-bold\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MDBLazy_MDBLazyComponents__WEBPACK_IMPORTED_MODULE_3__[\"MDBNavItem\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MDBLazy_MDBLazyComponents__WEBPACK_IMPORTED_MODULE_3__[\"MDBNavLink\"], {\n        link: true,\n        to: \"#\",\n        active: this.state.activeItem === \"2\",\n        onClick: function onClick() {\n          _this2.toggle(\"2\");\n        },\n        role: \"tab\",\n        disabled: locked\n      }, \"Zmie\\u0144 has\\u0142o\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MDBLazy_MDBLazyComponents__WEBPACK_IMPORTED_MODULE_3__[\"MDBNavItem\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MDBLazy_MDBLazyComponents__WEBPACK_IMPORTED_MODULE_3__[\"MDBNavLink\"], {\n        link: true,\n        to: \"#\",\n        active: this.state.activeItem === \"3\",\n        onClick: function onClick() {\n          _this2.toggle(\"3\");\n        },\n        role: \"tab\",\n        disabled: locked\n      }, \"Zmie\\u0144 adres E-mail\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__[\"MDBCol\"], {\n        xl: \"9\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__[\"MDBTabContent\"], {\n        activeItem: this.state.activeItem\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__[\"MDBTabPane\"], {\n        tabId: \"1\",\n        role: \"tabpanel\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__[\"Formik\"] // ref={this.userDataForm}\n      , {\n        innerRef: this.userDataForm,\n        initialValues: {\n          name: this.state.userInfo.username\n        },\n        validationSchema: yup__WEBPACK_IMPORTED_MODULE_5__[\"object\"]().shape({\n          name: yup__WEBPACK_IMPORTED_MODULE_5__[\"string\"]().min(3, \"Too Short!\").max(50, \"Too Long!\").required(\"Pole wymagane\")\n        }),\n        onSubmit: function onSubmit(values, helpers) {\n          setTimeout(function () {\n            _this2.setState({\n              locked: true\n            });\n\n            helpers.setSubmitting(true);\n            _axiosAPI__WEBPACK_IMPORTED_MODULE_6__[\"default\"].put(\"/user/update/\", {\n              username: values.name\n            }).then(function (response) {\n              _this2.props.setUser(response.data);\n\n              helpers.setStatus(\"Pomyslnie zmieniono dane\");\n              helpers.setSubmitting(false);\n\n              _this2.setState({\n                locked: false\n              });\n            })[\"catch\"](function (error) {\n              // console.log(\"login error\", error.response);\n              var errResponse = error.response;\n              helpers.setSubmitting(false);\n\n              _this2.setState({\n                locked: false\n              });\n\n              helpers.setValues({\n                name: \"\"\n              }, false);\n              helpers.setTouched({\n                name: false\n              }, false);\n              helpers.setFieldError(\"name\", \"Nazwa jest w użyciu lub jest nieprawidłowa.\");\n            });\n          }, 400);\n        }\n      }, function (_ref) {\n        var values = _ref.values,\n            errors = _ref.errors,\n            touched = _ref.touched,\n            handleChange = _ref.handleChange,\n            handleBlur = _ref.handleBlur,\n            handleSubmit = _ref.handleSubmit,\n            isSubmitting = _ref.isSubmitting,\n            status = _ref.status;\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__[\"Form\"], {\n          onSubmit: handleSubmit\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n          className: \"h3 text-center mb-4\"\n        }, \"Dane podstawowe\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"grey-text\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormikMDInput__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          label: \"Nazwa u\\u017Cytkownika\",\n          icon: \"fa-user\",\n          errors: errors.name,\n          name: \"name\",\n          id: \"name\",\n          touched: touched.name,\n          onChange: handleChange,\n          onBlur: handleBlur,\n          value: values.name,\n          disabled: isSubmitting || locked\n        })), !!status && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Pomyslnie zmieniono dane\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"text-center\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__[\"MDBBtn\"], {\n          color: \"primary\",\n          type: \"submit\",\n          disabled: isSubmitting || locked\n        }, \"Zmie\\u0144\")));\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__[\"MDBTabPane\"], {\n        tabId: \"2\",\n        role: \"tabpanel\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__[\"Formik\"] // ref={this.userDataForm}\n      , {\n        innerRef: this.userPasswordForm,\n        initialValues: {\n          password: \"\",\n          passwordConfirm: \"\",\n          oldPassword: \"\"\n        },\n        validationSchema: yup__WEBPACK_IMPORTED_MODULE_5__[\"object\"]().shape({\n          password: yup__WEBPACK_IMPORTED_MODULE_5__[\"string\"]().min(8, \"Too Short!\").max(50, \"Too Long!\").required(\"Pole wymagane\").oneOf([yup__WEBPACK_IMPORTED_MODULE_5__[\"ref\"](\"passwordConfirm\")], \"Hasła są różne\"),\n          oldPassword: yup__WEBPACK_IMPORTED_MODULE_5__[\"string\"]().min(8, \"Too Short!\").max(50, \"Too Long!\").required(\"Pole wymagane\"),\n          passwordConfirm: yup__WEBPACK_IMPORTED_MODULE_5__[\"string\"]().oneOf([yup__WEBPACK_IMPORTED_MODULE_5__[\"ref\"](\"password\")], \"Hasła są różne\").required(\"Pole wymagane\")\n        }),\n        onSubmit: function onSubmit(values, helpers) {\n          setTimeout(function () {\n            _this2.setState({\n              locked: true\n            });\n\n            helpers.setSubmitting(true);\n            _axiosAPI__WEBPACK_IMPORTED_MODULE_6__[\"default\"].put(\"/user/update/\", {\n              password: values.password,\n              oldpassword: values.oldPassword\n            }).then(function (response) {\n              _this2.props.setUser(response.data);\n\n              helpers.setStatus(\"Pomyslnie zmieniono hasło\");\n              helpers.setSubmitting(false);\n\n              _this2.setState({\n                locked: false\n              });\n            })[\"catch\"](function (error) {\n              helpers.setStatus(\"Podano nieprawidłowe aktualne hasło\");\n              console.log(\"chngpass error\", error.response);\n              var errResponse = error.response;\n              helpers.setSubmitting(false);\n\n              _this2.setState({\n                locked: false\n              });\n\n              helpers.setValues({\n                password: \"\",\n                oldPassword: \"\",\n                passwordConfirm: \"\"\n              }, false);\n              helpers.setTouched({\n                password: false,\n                oldPassword: false,\n                passwordConfirm: false\n              }, false);\n              helpers.setFieldError(\"oldPassword\", \"Podano nieprawidłowe stare hasło\");\n            });\n          }, 400);\n        }\n      }, function (_ref2) {\n        var values = _ref2.values,\n            errors = _ref2.errors,\n            touched = _ref2.touched,\n            handleChange = _ref2.handleChange,\n            handleBlur = _ref2.handleBlur,\n            handleSubmit = _ref2.handleSubmit,\n            isSubmitting = _ref2.isSubmitting,\n            status = _ref2.status;\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__[\"Form\"], {\n          onSubmit: handleSubmit\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n          className: \"h3 text-center mb-4\"\n        }, \"Zmie\\u0144 has\\u0142o\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"grey-text\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormikMDInput__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          label: \"Stare has\\u0142o\",\n          icon: \"fa-lock\",\n          errors: errors.oldPassword,\n          name: \"oldPassword\",\n          id: \"oldPassword\",\n          touched: touched.oldPassword,\n          onChange: handleChange,\n          onBlur: handleBlur,\n          value: values.oldPassword,\n          disabled: isSubmitting || locked,\n          hideInput: true,\n          type: \"password\"\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormikMDInput__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          label: \"Nowe has\\u0142o\",\n          icon: \"fa-lock\",\n          errors: errors.password,\n          name: \"password\",\n          id: \"password\",\n          type: \"password\",\n          touched: touched.password,\n          onChange: handleChange,\n          onBlur: handleBlur,\n          value: values.password,\n          disabled: isSubmitting || locked,\n          hideInput: true\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormikMDInput__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          label: \"Powt\\xF3rz nowe has\\u0142o\",\n          icon: \"fa-lock\",\n          errors: errors.passwordConfirm,\n          name: \"passwordConfirm\",\n          id: \"passwordConfirm\",\n          type: \"password\",\n          touched: touched.passwordConfirm,\n          onChange: handleChange,\n          onBlur: handleBlur,\n          value: values.passwordConfirm,\n          hideInput: true,\n          disabled: isSubmitting || locked\n        })), !!status && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"text-center\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__[\"MDBBtn\"], {\n          color: \"primary\",\n          type: \"submit\",\n          disabled: isSubmitting || locked\n        }, \"Zmie\\u0144\")));\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__[\"MDBTabPane\"], {\n        tabId: \"3\",\n        role: \"tabpanel\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__[\"Formik\"] // ref={this.userDataForm}\n      , {\n        innerRef: this.userEmailForm,\n        initialValues: {\n          email: this.state.userInfo.email\n        },\n        validationSchema: yup__WEBPACK_IMPORTED_MODULE_5__[\"object\"]().shape({\n          email: yup__WEBPACK_IMPORTED_MODULE_5__[\"string\"]().email(\"Nieprawidłowy adres e-mail\").required(\"Pole wymagane\")\n        }),\n        onSubmit: function onSubmit(values, helpers) {\n          setTimeout(function () {\n            _this2.setState({\n              locked: true\n            });\n\n            helpers.setSubmitting(true);\n            _axiosAPI__WEBPACK_IMPORTED_MODULE_6__[\"default\"].put(\"/user/update/\", {\n              email: values.email\n            }).then(function (response) {\n              _this2.props.setUser(response.data);\n\n              helpers.setStatus(\"Pomyslnie zmieniono email\");\n              helpers.setSubmitting(false);\n\n              _this2.setState({\n                locked: false\n              });\n            })[\"catch\"](function (error) {\n              // console.log(\"login error\", error.response);\n              var errResponse = error.response;\n              helpers.setSubmitting(false);\n\n              _this2.setState({\n                locked: false\n              });\n\n              helpers.setValues({\n                email: \"\"\n              }, false);\n              helpers.setTouched({\n                email: false\n              }, false);\n              helpers.setFieldError(\"name\", \"E-mail jest w użyciu lub jest nieprawidłowy.\");\n            });\n          }, 400);\n        }\n      }, function (_ref3) {\n        var values = _ref3.values,\n            errors = _ref3.errors,\n            touched = _ref3.touched,\n            handleChange = _ref3.handleChange,\n            handleBlur = _ref3.handleBlur,\n            handleSubmit = _ref3.handleSubmit,\n            isSubmitting = _ref3.isSubmitting,\n            status = _ref3.status;\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__[\"Form\"], {\n          onSubmit: handleSubmit\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n          className: \"h3 text-center mb-4\"\n        }, \"Zmie\\u0144 adres E-mail\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"grey-text\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormikMDInput__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          label: \"Adres e-mail\",\n          icon: \"fa-envelope\",\n          errors: errors.email,\n          name: \"email\",\n          id: \"email\",\n          touched: touched.name,\n          onChange: handleChange,\n          onBlur: handleBlur,\n          value: values.email,\n          disabled: isSubmitting || locked\n        })), !!status && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"text-center\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__[\"MDBBtn\"], {\n          color: \"primary\",\n          type: \"submit\",\n          disabled: isSubmitting || locked\n        }, \"Zmie\\u0144\")));\n      }))))))));\n    }\n  }]);\n\n  return UserAccountManager;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nUserAccountManager.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserAccountManager);\n\n//# sourceURL=webpack:///./djsr/frontend/src/components/UserAccountManager.js?");

/***/ })

}]);