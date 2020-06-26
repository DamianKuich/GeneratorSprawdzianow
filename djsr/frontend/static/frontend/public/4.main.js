(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./djsr/frontend/src/components/FormikMDInput.js":
/*!*******************************************************!*\
  !*** ./djsr/frontend/src/components/FormikMDInput.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var FormikMdInput = function FormikMdInput(_ref) {
  var name = _ref.name,
      touched = _ref.touched,
      value = _ref.value,
      errors = _ref.errors,
      icon = _ref.icon,
      onChange = _ref.onChange,
      _onBlur = _ref.onBlur,
      label = _ref.label,
      id = _ref.id,
      type = _ref.type,
      hideInput = _ref.hideInput,
      disableAutocomplete = _ref.disableAutocomplete,
      disabled = _ref.disabled,
      prepend = _ref.prepend;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1]; //todo repair prepend render
  // console.log(
  //   "ninput",
  //   name,
  //   active,
  //   value === "",
  //   value === null,
  //   active || !(value == "" || value == null),
  //     "value",
  //     value
  // );


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "md-form form-group"
  }, !!icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: ["fa", icon, "prefix", touched ? !errors ? "text-success" : "red-text" : ""].join(" ")
  }), !!prepend && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group-prepend"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "input-group-text"
  }, prepend)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    name: name,
    onChange: onChange,
    onBlur: function onBlur(e) {
      _onBlur(e);

      setActive(false);
    },
    onFocus: function onFocus() {
      console.log("input focus event", name);
      setActive(true);
    },
    value: value,
    id: id,
    type: type,
    autoComplete: disableAutocomplete ? "off" : "on" // className="form-control is-invalid"
    ,
    className: ["form-control", touched ? !errors ? "is-valid" : "is-invalid" : "", hideInput ? "text-password" : "", disabled ? "disabled" : ""].join(" "),
    disabled: disabled
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: id,
    className: [touched ? !errors ? "is-valid" : "is-invalid" : "", active || !(value === "" || value === null) ? "active" : ""].join(" ")
  }, !!label ? label : ""), !!errors && !!touched && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback d-block"
  }, errors));
};

/* harmony default export */ __webpack_exports__["default"] = (FormikMdInput);

/***/ }),

/***/ "./djsr/frontend/src/components/MDBLazy/MDBLazyComponents.js":
/*!*******************************************************************!*\
  !*** ./djsr/frontend/src/components/MDBLazy/MDBLazyComponents.js ***!
  \*******************************************************************/
/*! exports provided: MDBContainer, MDBCollapse, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBNavLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBContainer", function() { return MDBContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBCollapse", function() { return MDBCollapse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBDropdown", function() { return MDBDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBDropdownItem", function() { return MDBDropdownItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBDropdownMenu", function() { return MDBDropdownMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBDropdownToggle", function() { return MDBDropdownToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBIcon", function() { return MDBIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBNavbar", function() { return MDBNavbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBNavbarBrand", function() { return MDBNavbarBrand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBNavbarNav", function() { return MDBNavbarNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBNavbarToggler", function() { return MDBNavbarToggler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBNavItem", function() { return MDBNavItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBNavLink", function() { return MDBNavLink; });
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");

/*
export const 
 */

var MDBContainer = mdbreact__WEBPACK_IMPORTED_MODULE_0__["MDBContainer"];
var MDBCollapse = mdbreact__WEBPACK_IMPORTED_MODULE_0__["MDBCollapse"];
var MDBDropdown = mdbreact__WEBPACK_IMPORTED_MODULE_0__["MDBDropdown"];
var MDBDropdownItem = mdbreact__WEBPACK_IMPORTED_MODULE_0__["MDBDropdownItem"];
var MDBDropdownMenu = mdbreact__WEBPACK_IMPORTED_MODULE_0__["MDBDropdownMenu"];
var MDBDropdownToggle = mdbreact__WEBPACK_IMPORTED_MODULE_0__["MDBDropdownToggle"];
var MDBIcon = mdbreact__WEBPACK_IMPORTED_MODULE_0__["MDBIcon"];
var MDBNavbar = mdbreact__WEBPACK_IMPORTED_MODULE_0__["MDBNavbar"];
var MDBNavbarBrand = mdbreact__WEBPACK_IMPORTED_MODULE_0__["MDBNavbarBrand"];
var MDBNavbarNav = mdbreact__WEBPACK_IMPORTED_MODULE_0__["MDBNavbarNav"];
var MDBNavbarToggler = mdbreact__WEBPACK_IMPORTED_MODULE_0__["MDBNavbarToggler"];
var MDBNavItem = mdbreact__WEBPACK_IMPORTED_MODULE_0__["MDBNavItem"];
var MDBNavLink = mdbreact__WEBPACK_IMPORTED_MODULE_0__["MDBNavLink"];

/***/ }),

/***/ "./djsr/frontend/src/components/UserAccountManager.js":
/*!************************************************************!*\
  !*** ./djsr/frontend/src/components/UserAccountManager.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");
/* harmony import */ var _MDBLazy_MDBLazyComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MDBLazy/MDBLazyComponents */ "./djsr/frontend/src/components/MDBLazy/MDBLazyComponents.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _axiosAPI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./axiosAPI */ "./djsr/frontend/src/components/axiosAPI.js");
/* harmony import */ var _FormikMDInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormikMDInput */ "./djsr/frontend/src/components/FormikMDInput.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var UserAccountManager = /*#__PURE__*/function (_Component) {
  _inherits(UserAccountManager, _Component);

  var _super = _createSuper(UserAccountManager);

  function UserAccountManager(props) {
    var _this;

    _classCallCheck(this, UserAccountManager);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "checkUser", function () {
      _this.props.checkUser(function (userData) {
        _this.setState({
          isUserChecked: true,
          userInfo: userData
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggle", function (id) {
      console.log(_this.userDataForm);

      _this.userDataForm.current.setFieldValue("name", _this.props.appState.user.username, false);

      _this.userDataForm.current.setFieldTouched("name", false, false);

      _this.userPasswordForm.current.setValues({
        password: "",
        passwordConfirm: "",
        oldPassword: ""
      }, false);

      _this.userPasswordForm.current.setTouched({
        password: false,
        passwordConfirm: false,
        oldPassword: false
      }); // this.userEmailForm;


      _this.setState({
        activeItem: id
      });
    });

    _this.state = {
      activeItem: "2",
      isUserChecked: false,
      userInfo: null,
      locked: false
    };
    _this.userDataForm = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.userPasswordForm = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.userEmailForm = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    return _this;
  }

  _createClass(UserAccountManager, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.checkUser();
    } // componentWillReceiveProps(nextProps) {
    //
    // }
    //
    // shouldComponentUpdate(nextProps, nextState) {
    //
    // }
    //
    // componentWillUpdate(nextProps, nextState) {
    //
    // }
    //
    // componentDidUpdate(prevProps, prevState) {
    //
    // }
    //
    // componentWillUnmount() {
    //
    // }

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var activeItem = this.state.activeItem;
      var locked = this.state.locked;
      var isUserChecked = this.state.isUserChecked;
      if (!isUserChecked) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBCard"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBCardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBRow"], {
        className: "w-auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBCol"], {
        xl: "3",
        className: "border-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBNav"], {
        className: "nav-pills flex-column nav-justified font-weight-bold"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MDBLazy_MDBLazyComponents__WEBPACK_IMPORTED_MODULE_3__["MDBNavItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MDBLazy_MDBLazyComponents__WEBPACK_IMPORTED_MODULE_3__["MDBNavLink"], {
        link: true,
        to: "#",
        active: this.state.activeItem === "2",
        onClick: function onClick() {
          _this2.toggle("2");
        },
        role: "tab",
        disabled: locked
      }, "Zmie\u0144 has\u0142o")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MDBLazy_MDBLazyComponents__WEBPACK_IMPORTED_MODULE_3__["MDBNavItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MDBLazy_MDBLazyComponents__WEBPACK_IMPORTED_MODULE_3__["MDBNavLink"], {
        link: true,
        to: "#",
        active: this.state.activeItem === "3",
        onClick: function onClick() {
          _this2.toggle("3");
        },
        role: "tab",
        disabled: locked
      }, "Zmie\u0144 adres E-mail")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBCol"], {
        xl: "9"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBTabContent"], {
        activeItem: this.state.activeItem
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBTabPane"], {
        tabId: "1",
        role: "tabpanel"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"] // ref={this.userDataForm}
      , {
        innerRef: this.userDataForm,
        initialValues: {
          name: this.state.userInfo.username
        },
        validationSchema: yup__WEBPACK_IMPORTED_MODULE_5__["object"]().shape({
          name: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().min(3, "Too Short!").max(50, "Too Long!").required("Pole wymagane")
        }),
        onSubmit: function onSubmit(values, helpers) {
          setTimeout(function () {
            _this2.setState({
              locked: true
            });

            helpers.setSubmitting(true);
            _axiosAPI__WEBPACK_IMPORTED_MODULE_6__["default"].put("/user/update/", {
              username: values.name
            }).then(function (response) {
              _this2.props.setUser(response.data);

              helpers.setStatus("Pomyslnie zmieniono dane");
              helpers.setSubmitting(false);

              _this2.setState({
                locked: false
              });
            })["catch"](function (error) {
              // console.log("login error", error.response);
              var errResponse = error.response;
              helpers.setSubmitting(false);

              _this2.setState({
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
      }, function (_ref) {
        var values = _ref.values,
            errors = _ref.errors,
            touched = _ref.touched,
            handleChange = _ref.handleChange,
            handleBlur = _ref.handleBlur,
            handleSubmit = _ref.handleSubmit,
            isSubmitting = _ref.isSubmitting,
            status = _ref.status;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Form"], {
          onSubmit: handleSubmit
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "h3 text-center mb-4"
        }, "Dane podstawowe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "grey-text"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormikMDInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
          label: "Nazwa u\u017Cytkownika",
          icon: "fa-user",
          errors: errors.name,
          name: "name",
          id: "name",
          touched: touched.name,
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.name,
          disabled: isSubmitting || locked
        })), !!status && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Pomyslnie zmieniono dane"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "text-center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBBtn"], {
          color: "primary",
          type: "submit",
          disabled: isSubmitting || locked
        }, "Zmie\u0144")));
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBTabPane"], {
        tabId: "2",
        role: "tabpanel"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"] // ref={this.userDataForm}
      , {
        innerRef: this.userPasswordForm,
        initialValues: {
          password: "",
          passwordConfirm: "",
          oldPassword: ""
        },
        validationSchema: yup__WEBPACK_IMPORTED_MODULE_5__["object"]().shape({
          password: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().min(8, "Too Short!").max(50, "Too Long!").required("Pole wymagane").oneOf([yup__WEBPACK_IMPORTED_MODULE_5__["ref"]("passwordConfirm")], "Hasła są różne"),
          oldPassword: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().min(8, "Too Short!").max(50, "Too Long!").required("Pole wymagane"),
          passwordConfirm: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().oneOf([yup__WEBPACK_IMPORTED_MODULE_5__["ref"]("password")], "Hasła są różne").required("Pole wymagane")
        }),
        onSubmit: function onSubmit(values, helpers) {
          setTimeout(function () {
            _this2.setState({
              locked: true
            });

            helpers.setSubmitting(true);
            _axiosAPI__WEBPACK_IMPORTED_MODULE_6__["default"].put("/user/update/", {
              password: values.password,
              oldpassword: values.oldPassword
            }).then(function (response) {
              _this2.props.setUser(response.data);

              helpers.setStatus("Pomyslnie zmieniono hasło");
              helpers.setSubmitting(false);

              _this2.setState({
                locked: false
              });
            })["catch"](function (error) {
              helpers.setStatus("Podano nieprawidłowe aktualne hasło");
              console.log("chngpass error", error.response);
              var errResponse = error.response;
              helpers.setSubmitting(false);

              _this2.setState({
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
      }, function (_ref2) {
        var values = _ref2.values,
            errors = _ref2.errors,
            touched = _ref2.touched,
            handleChange = _ref2.handleChange,
            handleBlur = _ref2.handleBlur,
            handleSubmit = _ref2.handleSubmit,
            isSubmitting = _ref2.isSubmitting,
            status = _ref2.status;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Form"], {
          onSubmit: handleSubmit
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "h3 text-center mb-4"
        }, "Zmie\u0144 has\u0142o"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "grey-text"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormikMDInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
          label: "Stare has\u0142o",
          icon: "fa-lock",
          errors: errors.oldPassword,
          name: "oldPassword",
          id: "oldPassword",
          touched: touched.oldPassword,
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.oldPassword,
          disabled: isSubmitting || locked,
          hideInput: true,
          type: "password"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormikMDInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
          label: "Nowe has\u0142o",
          icon: "fa-lock",
          errors: errors.password,
          name: "password",
          id: "password",
          type: "password",
          touched: touched.password,
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.password,
          disabled: isSubmitting || locked,
          hideInput: true
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormikMDInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
          label: "Powt\xF3rz nowe has\u0142o",
          icon: "fa-lock",
          errors: errors.passwordConfirm,
          name: "passwordConfirm",
          id: "passwordConfirm",
          type: "password",
          touched: touched.passwordConfirm,
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.passwordConfirm,
          hideInput: true,
          disabled: isSubmitting || locked
        })), !!status && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "text-center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBBtn"], {
          color: "primary",
          type: "submit",
          disabled: isSubmitting || locked
        }, "Zmie\u0144")));
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBTabPane"], {
        tabId: "3",
        role: "tabpanel"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"] // ref={this.userDataForm}
      , {
        innerRef: this.userEmailForm,
        initialValues: {
          email: this.state.userInfo.email
        },
        validationSchema: yup__WEBPACK_IMPORTED_MODULE_5__["object"]().shape({
          email: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().email("Nieprawidłowy adres e-mail").required("Pole wymagane")
        }),
        onSubmit: function onSubmit(values, helpers) {
          setTimeout(function () {
            _this2.setState({
              locked: true
            });

            helpers.setSubmitting(true);
            _axiosAPI__WEBPACK_IMPORTED_MODULE_6__["default"].put("/user/update/", {
              email: values.email
            }).then(function (response) {
              _this2.props.setUser(response.data);

              helpers.setStatus("Pomyslnie zmieniono email");
              helpers.setSubmitting(false);

              _this2.setState({
                locked: false
              });
            })["catch"](function (error) {
              // console.log("login error", error.response);
              var errResponse = error.response;
              helpers.setSubmitting(false);

              _this2.setState({
                locked: false
              });

              helpers.setValues({
                email: ""
              }, false);
              helpers.setTouched({
                email: false
              }, false);
              helpers.setFieldError("name", "E-mail jest w użyciu lub jest nieprawidłowy.");
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
            isSubmitting = _ref3.isSubmitting,
            status = _ref3.status;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Form"], {
          onSubmit: handleSubmit
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "h3 text-center mb-4"
        }, "Zmie\u0144 adres E-mail"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "grey-text"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormikMDInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
          label: "Adres e-mail",
          icon: "fa-envelope",
          errors: errors.email,
          name: "email",
          id: "email",
          touched: touched.name,
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.email,
          disabled: isSubmitting || locked
        })), !!status && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "text-center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBBtn"], {
          color: "primary",
          type: "submit",
          disabled: isSubmitting || locked
        }, "Zmie\u0144")));
      }))))))));
    }
  }]);

  return UserAccountManager;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

UserAccountManager.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (UserAccountManager);

/***/ })

}]);
//# sourceMappingURL=4.main.js.map