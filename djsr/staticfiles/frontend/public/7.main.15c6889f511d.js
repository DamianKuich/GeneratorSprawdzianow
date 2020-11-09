(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./djsr/frontend/src/components/PasswordReset.js":
/*!*******************************************************!*\
  !*** ./djsr/frontend/src/components/PasswordReset.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _axiosAPI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./axiosAPI */ "./djsr/frontend/src/components/axiosAPI.js");
/* harmony import */ var _FormikMDInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormikMDInput */ "./djsr/frontend/src/components/FormikMDInput.js");
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









var PasswordReset = /*#__PURE__*/function (_Component) {
  _inherits(PasswordReset, _Component);

  var _super = _createSuper(PasswordReset);

  function PasswordReset(props) {
    var _this;

    _classCallCheck(this, PasswordReset);

    _this = _super.call(this, props);
    _this.state = {
      isSuccessFull: null
    };
    return _this;
  } // componentWillMount() {
  //
  // }
  //
  // componentDidMount() {
  //
  // }
  //
  // componentWillReceiveProps(nextProps) {
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


  _createClass(PasswordReset, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var isSuccessFull = this.state.isSuccessFull;

      if (isSuccessFull !== null) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBRow"], {
          center: true
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBCol"], {
          md: "6",
          sm: "8",
          xs: "12",
          lg: "6",
          xl: "4"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBCard"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBCardBody"], {
          className: "p-md-5 p-lg-5 p-xl-5"
        }, isSuccessFull ? "Resetowanie hasla zakonczono powodzeniem" : "Nie udało sie zmienic hasła"))));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBRow"], {
        center: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBCol"], {
        md: "6",
        sm: "8",
        xs: "12",
        lg: "6",
        xl: "4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBCard"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBCardBody"], {
        className: "p-md-5 p-lg-5 p-xl-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
        initialValues: {
          password: "",
          passwordConfirm: ""
        },
        validationSchema: yup__WEBPACK_IMPORTED_MODULE_4__["object"]().shape({
          password: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().min(8, "Too Short!").max(50, "Too Long!").required("Pole wymagane"),
          passwordConfirm: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().min(8, "Too Short!").max(50, "Too Long!").required("Pole wymagane")
        }),
        onSubmit: function onSubmit(values, helpers) {
          setTimeout(function () {
            helpers.setSubmitting(true);
            var token = _this2.props.match.params.token;
            _axiosAPI__WEBPACK_IMPORTED_MODULE_5__["axiosInstanceNoAuth"].post("/user/passreset/".concat(token, "/$"), {
              password: values.password
            }).then(function (response) {
              // axiosInstance.defaults.headers["Authorization"] =
              //   "JWT " + response.data.access;
              // localStorage.setItem(
              //   "access_token",
              //   response.data.access
              // );
              // localStorage.setItem(
              //   "refresh_token",
              //   response.data.refresh
              // );
              // helpers.setSubmitting(false);
              // this.props.checkUser();
              // this.props.history.push("/");
              _this2.setState({
                isSuccessFull: true
              });
            })["catch"](function (error) {
              // console.log("login error", error.response);
              // const errResponse = error.response;
              // helpers.setSubmitting(false);
              // if (
              //   errResponse.status === 401 &&
              //   errResponse.statusText === "Unauthorized"
              // ) {
              //   helpers.setValues(
              //     {
              //       name: "",
              //       password: "",
              //     },
              //     false
              //   );
              //   helpers.setTouched(
              //     {
              //       name: false,
              //       password: false,
              //     },
              //     false
              //   );
              //   helpers.setFieldError(
              //     "general",
              //     "Nieprawidłowa nazwa użytkownika lub hasło"
              //   );
              // }
              _this2.setState({
                isSuccessFull: false
              });
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
            isSubmitting = _ref.isSubmitting;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Form"], {
          onSubmit: handleSubmit
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "h3 text-center mb-4"
        }, "Podaj nowe has\u0142o"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "grey-text"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormikMDInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
          label: "Has\u0142o",
          icon: "fa-lock",
          errors: errors.password,
          type: "password",
          name: "password",
          id: "password",
          touched: touched.password,
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.password,
          hideInput: true,
          disableAutocomplete: true
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormikMDInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
          label: "Powtorz has\u0142o",
          icon: "fa-lock",
          errors: errors.passwordConfirm,
          type: "password",
          name: "passwordConfirm",
          id: "passwordConfirm",
          touched: touched.passwordConfirm,
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.passwordConfirm,
          hideInput: true,
          disableAutocomplete: true
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "text-center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBBtn"], {
          color: "primary",
          type: "submit",
          disabled: isSubmitting
        }, "Zmie\u0144 has\u0142o")));
      })))));
    }
  }]);

  return PasswordReset;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

PasswordReset.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (PasswordReset);

/***/ })

}]);
//# sourceMappingURL=7.main.js.map