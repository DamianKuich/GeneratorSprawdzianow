(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/create-react-context/lib/implementation.js":
/*!*****************************************************************!*\
  !*** ./node_modules/create-react-context/lib/implementation.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _gud = __webpack_require__(/*! gud */ "./node_modules/gud/index.js");

var _gud2 = _interopRequireDefault(_gud);

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_SIGNED_31_BIT_INT = 1073741823;

// Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits = void 0;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          if (true) {
            (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(_react.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
        value: _this2.getValue()
      }, _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({ value: _this2.getValue() });
        }
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    Consumer.prototype.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(_react.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

exports.default = createReactContext;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/create-react-context/lib/index.js":
/*!********************************************************!*\
  !*** ./node_modules/create-react-context/lib/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _implementation = __webpack_require__(/*! ./implementation */ "./node_modules/create-react-context/lib/implementation.js");

var _implementation2 = _interopRequireDefault(_implementation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/deep-equal/index.js":
/*!******************************************!*\
  !*** ./node_modules/deep-equal/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectKeys = __webpack_require__(/*! object-keys */ "./node_modules/object-keys/index.js");
var isArguments = __webpack_require__(/*! is-arguments */ "./node_modules/is-arguments/index.js");
var is = __webpack_require__(/*! object-is */ "./node_modules/object-is/index.js");
var isRegex = __webpack_require__(/*! is-regex */ "./node_modules/is-regex/index.js");
var flags = __webpack_require__(/*! regexp.prototype.flags */ "./node_modules/regexp.prototype.flags/index.js");
var isDate = __webpack_require__(/*! is-date-object */ "./node_modules/is-date-object/index.js");

var getTime = Date.prototype.getTime;

function deepEqual(actual, expected, options) {
  var opts = options || {};

  // 7.1. All identical values are equivalent, as determined by ===.
  if (opts.strict ? is(actual, expected) : actual === expected) {
    return true;
  }

  // 7.3. Other pairs that do not both pass typeof value == 'object', equivalence is determined by ==.
  if (!actual || !expected || (typeof actual !== 'object' && typeof expected !== 'object')) {
    return opts.strict ? is(actual, expected) : actual == expected;
  }

  /*
   * 7.4. For all other Object pairs, including Array objects, equivalence is
   * determined by having the same number of owned properties (as verified
   * with Object.prototype.hasOwnProperty.call), the same set of keys
   * (although not necessarily the same order), equivalent values for every
   * corresponding key, and an identical 'prototype' property. Note: this
   * accounts for both named and indexed properties on Arrays.
   */
  // eslint-disable-next-line no-use-before-define
  return objEquiv(actual, expected, opts);
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer(x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') {
    return false;
  }
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') {
    return false;
  }
  return true;
}

function objEquiv(a, b, opts) {
  /* eslint max-statements: [2, 50] */
  var i, key;
  if (typeof a !== typeof b) { return false; }
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) { return false; }

  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) { return false; }

  if (isArguments(a) !== isArguments(b)) { return false; }

  var aIsRegex = isRegex(a);
  var bIsRegex = isRegex(b);
  if (aIsRegex !== bIsRegex) { return false; }
  if (aIsRegex || bIsRegex) {
    return a.source === b.source && flags(a) === flags(b);
  }

  if (isDate(a) && isDate(b)) {
    return getTime.call(a) === getTime.call(b);
  }

  var aIsBuffer = isBuffer(a);
  var bIsBuffer = isBuffer(b);
  if (aIsBuffer !== bIsBuffer) { return false; }
  if (aIsBuffer || bIsBuffer) { // && would work too, because both are true or both false here
    if (a.length !== b.length) { return false; }
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) { return false; }
    }
    return true;
  }

  if (typeof a !== typeof b) { return false; }

  try {
    var ka = objectKeys(a);
    var kb = objectKeys(b);
  } catch (e) { // happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates hasOwnProperty)
  if (ka.length !== kb.length) { return false; }

  // the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  // ~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i]) { return false; }
  }
  // equivalent values for every corresponding key, and ~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) { return false; }
  }

  return true;
}

module.exports = deepEqual;


/***/ }),

/***/ "./node_modules/define-properties/index.js":
/*!*************************************************!*\
  !*** ./node_modules/define-properties/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(/*! object-keys */ "./node_modules/object-keys/index.js");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ "./node_modules/es-abstract/GetIntrinsic.js":
/*!**************************************************!*\
  !*** ./node_modules/es-abstract/GetIntrinsic.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* globals
	Atomics,
	SharedArrayBuffer,
*/

var undefined;

var $TypeError = TypeError;

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () { throw new $TypeError(); };
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var generator; // = function * () {};
var generatorFunction = generator ? getProto(generator) : undefined;
var asyncFn; // async function() {};
var asyncFunction = asyncFn ? asyncFn.constructor : undefined;
var asyncGen; // async function * () {};
var asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;
var asyncGenIterator = asyncGen ? asyncGen() : undefined;

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%ArrayPrototype%': Array.prototype,
	'%ArrayProto_entries%': Array.prototype.entries,
	'%ArrayProto_forEach%': Array.prototype.forEach,
	'%ArrayProto_keys%': Array.prototype.keys,
	'%ArrayProto_values%': Array.prototype.values,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': asyncFunction,
	'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,
	'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,
	'%AsyncGeneratorFunction%': asyncGenFunction,
	'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,
	'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%Boolean%': Boolean,
	'%BooleanPrototype%': Boolean.prototype,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,
	'%Date%': Date,
	'%DatePrototype%': Date.prototype,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%ErrorPrototype%': Error.prototype,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%EvalErrorPrototype%': EvalError.prototype,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,
	'%Function%': Function,
	'%FunctionPrototype%': Function.prototype,
	'%Generator%': generator ? getProto(generator()) : undefined,
	'%GeneratorFunction%': generatorFunction,
	'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,
	'%Math%': Math,
	'%Number%': Number,
	'%NumberPrototype%': Number.prototype,
	'%Object%': Object,
	'%ObjectPrototype%': Object.prototype,
	'%ObjProto_toString%': Object.prototype.toString,
	'%ObjProto_valueOf%': Object.prototype.valueOf,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,
	'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,
	'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,
	'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,
	'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%RangeErrorPrototype%': RangeError.prototype,
	'%ReferenceError%': ReferenceError,
	'%ReferenceErrorPrototype%': ReferenceError.prototype,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%RegExpPrototype%': RegExp.prototype,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%StringPrototype%': String.prototype,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,
	'%SyntaxError%': SyntaxError,
	'%SyntaxErrorPrototype%': SyntaxError.prototype,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,
	'%TypeError%': $TypeError,
	'%TypeErrorPrototype%': $TypeError.prototype,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,
	'%URIError%': URIError,
	'%URIErrorPrototype%': URIError.prototype,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
	'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype
};

var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var $replace = bind.call(Function.call, String.prototype.replace);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	if (!(name in INTRINSICS)) {
		throw new SyntaxError('intrinsic ' + name + ' does not exist!');
	}

	// istanbul ignore if // hopefully this is impossible to test :-)
	if (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {
		throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
	}

	return INTRINSICS[name];
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);

	var value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);
	for (var i = 1; i < parts.length; i += 1) {
		if (value != null) {
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, parts[i]);
				if (!allowMissing && !(parts[i] in value)) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				value = desc ? (desc.get || desc.value) : value[parts[i]];
			} else {
				value = value[parts[i]];
			}
		}
	}
	return value;
};


/***/ }),

/***/ "./node_modules/es-abstract/helpers/callBind.js":
/*!******************************************************!*\
  !*** ./node_modules/es-abstract/helpers/callBind.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ "./node_modules/es-abstract/GetIntrinsic.js");

var $Function = GetIntrinsic('%Function%');
var $apply = $Function.apply;
var $call = $Function.call;

module.exports = function callBind() {
	return bind.apply($call, arguments);
};

module.exports.apply = function applyBind() {
	return bind.apply($apply, arguments);
};


/***/ }),

/***/ "./node_modules/focus-trap-react/dist/focus-trap-react.js":
/*!****************************************************************!*\
  !*** ./node_modules/focus-trap-react/dist/focus-trap-react.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
var createFocusTrap = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/index.js");

var FocusTrap = function (_React$Component) {
  _inherits(FocusTrap, _React$Component);

  function FocusTrap(props) {
    _classCallCheck(this, FocusTrap);

    var _this = _possibleConstructorReturn(this, (FocusTrap.__proto__ || Object.getPrototypeOf(FocusTrap)).call(this, props));

    _this.setFocusTrapElement = function (element) {
      _this.focusTrapElement = element;
    };

    if (typeof document !== 'undefined') {
      _this.previouslyFocusedElement = document.activeElement;
    }
    return _this;
  }

  _createClass(FocusTrap, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // We need to hijack the returnFocusOnDeactivate option,
      // because React can move focus into the element before we arrived at
      // this lifecycle hook (e.g. with autoFocus inputs). So the component
      // captures the previouslyFocusedElement in componentWillMount,
      // then (optionally) returns focus to it in componentWillUnmount.
      var specifiedFocusTrapOptions = this.props.focusTrapOptions;
      var tailoredFocusTrapOptions = {
        returnFocusOnDeactivate: false
      };
      for (var optionName in specifiedFocusTrapOptions) {
        if (!specifiedFocusTrapOptions.hasOwnProperty(optionName)) continue;
        if (optionName === 'returnFocusOnDeactivate') continue;
        tailoredFocusTrapOptions[optionName] = specifiedFocusTrapOptions[optionName];
      }

      var focusTrapElementDOMNode = ReactDOM.findDOMNode(this.focusTrapElement);

      this.focusTrap = this.props._createFocusTrap(focusTrapElementDOMNode, tailoredFocusTrapOptions);
      if (this.props.active) {
        this.focusTrap.activate();
      }
      if (this.props.paused) {
        this.focusTrap.pause();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.active && !this.props.active) {
        var returnFocusOnDeactivate = this.props.focusTrapOptions.returnFocusOnDeactivate;

        var returnFocus = returnFocusOnDeactivate || false;
        var config = { returnFocus: returnFocus };
        this.focusTrap.deactivate(config);
      } else if (!prevProps.active && this.props.active) {
        this.focusTrap.activate();
      }

      if (prevProps.paused && !this.props.paused) {
        this.focusTrap.unpause();
      } else if (!prevProps.paused && this.props.paused) {
        this.focusTrap.pause();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.focusTrap.deactivate();
      if (this.props.focusTrapOptions.returnFocusOnDeactivate !== false && this.previouslyFocusedElement && this.previouslyFocusedElement.focus) {
        this.previouslyFocusedElement.focus();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var child = React.Children.only(this.props.children);

      var composedRefCallback = function composedRefCallback(element) {
        _this2.setFocusTrapElement(element);
        if (typeof child.ref === 'function') {
          child.ref(element);
        }
      };

      var childWithRef = React.cloneElement(child, { ref: composedRefCallback });

      return childWithRef;
    }
  }]);

  return FocusTrap;
}(React.Component);

FocusTrap.defaultProps = {
  active: true,
  paused: false,
  focusTrapOptions: {},
  _createFocusTrap: createFocusTrap
};

module.exports = FocusTrap;

/***/ }),

/***/ "./node_modules/focus-trap/index.js":
/*!******************************************!*\
  !*** ./node_modules/focus-trap/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var tabbable = __webpack_require__(/*! tabbable */ "./node_modules/tabbable/index.js");
var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");

var activeFocusTraps = (function() {
  var trapQueue = [];
  return {
    activateTrap: function(trap) {
      if (trapQueue.length > 0) {
        var activeTrap = trapQueue[trapQueue.length - 1];
        if (activeTrap !== trap) {
          activeTrap.pause();
        }
      }

      var trapIndex = trapQueue.indexOf(trap);
      if (trapIndex === -1) {
        trapQueue.push(trap);
      } else {
        // move this existing trap to the front of the queue
        trapQueue.splice(trapIndex, 1);
        trapQueue.push(trap);
      }
    },

    deactivateTrap: function(trap) {
      var trapIndex = trapQueue.indexOf(trap);
      if (trapIndex !== -1) {
        trapQueue.splice(trapIndex, 1);
      }

      if (trapQueue.length > 0) {
        trapQueue[trapQueue.length - 1].unpause();
      }
    }
  };
})();

function focusTrap(element, userOptions) {
  var doc = document;
  var container =
    typeof element === 'string' ? doc.querySelector(element) : element;

  var config = xtend(
    {
      returnFocusOnDeactivate: true,
      escapeDeactivates: true
    },
    userOptions
  );

  var state = {
    firstTabbableNode: null,
    lastTabbableNode: null,
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false
  };

  var trap = {
    activate: activate,
    deactivate: deactivate,
    pause: pause,
    unpause: unpause
  };

  return trap;

  function activate(activateOptions) {
    if (state.active) return;

    updateTabbableNodes();

    state.active = true;
    state.paused = false;
    state.nodeFocusedBeforeActivation = doc.activeElement;

    var onActivate =
      activateOptions && activateOptions.onActivate
        ? activateOptions.onActivate
        : config.onActivate;
    if (onActivate) {
      onActivate();
    }

    addListeners();
    return trap;
  }

  function deactivate(deactivateOptions) {
    if (!state.active) return;

    removeListeners();
    state.active = false;
    state.paused = false;

    activeFocusTraps.deactivateTrap(trap);

    var onDeactivate =
      deactivateOptions && deactivateOptions.onDeactivate !== undefined
        ? deactivateOptions.onDeactivate
        : config.onDeactivate;
    if (onDeactivate) {
      onDeactivate();
    }

    var returnFocus =
      deactivateOptions && deactivateOptions.returnFocus !== undefined
        ? deactivateOptions.returnFocus
        : config.returnFocusOnDeactivate;
    if (returnFocus) {
      delay(function() {
        tryFocus(state.nodeFocusedBeforeActivation);
      });
    }

    return trap;
  }

  function pause() {
    if (state.paused || !state.active) return;
    state.paused = true;
    removeListeners();
  }

  function unpause() {
    if (!state.paused || !state.active) return;
    state.paused = false;
    addListeners();
  }

  function addListeners() {
    if (!state.active) return;

    // There can be only one listening focus trap at a time
    activeFocusTraps.activateTrap(trap);

    updateTabbableNodes();

    // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.
    delay(function() {
      tryFocus(getInitialFocusNode());
    });
    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, true);
    doc.addEventListener('touchstart', checkPointerDown, true);
    doc.addEventListener('click', checkClick, true);
    doc.addEventListener('keydown', checkKey, true);

    return trap;
  }

  function removeListeners() {
    if (!state.active) return;

    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkKey, true);

    return trap;
  }

  function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    var node = optionValue;
    if (!optionValue) {
      return null;
    }
    if (typeof optionValue === 'string') {
      node = doc.querySelector(optionValue);
      if (!node) {
        throw new Error('`' + optionName + '` refers to no known node');
      }
    }
    if (typeof optionValue === 'function') {
      node = optionValue();
      if (!node) {
        throw new Error('`' + optionName + '` did not return a node');
      }
    }
    return node;
  }

  function getInitialFocusNode() {
    var node;
    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (container.contains(doc.activeElement)) {
      node = doc.activeElement;
    } else {
      node = state.firstTabbableNode || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error(
        "You can't have a focus-trap without at least one focusable element"
      );
    }

    return node;
  }

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.
  function checkPointerDown(e) {
    if (container.contains(e.target)) return;
    if (config.clickOutsideDeactivates) {
      deactivate({
        returnFocus: !tabbable.isFocusable(e.target)
      });
    } else {
      e.preventDefault();
    }
  }

  // In case focus escapes the trap for some strange reason, pull it back in.
  function checkFocusIn(e) {
    // In Firefox when you Tab out of an iframe the Document is briefly focused.
    if (container.contains(e.target) || e.target instanceof Document) {
      return;
    }
    e.stopImmediatePropagation();
    tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
  }

  function checkKey(e) {
    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      e.preventDefault();
      deactivate();
      return;
    }
    if (isTabEvent(e)) {
      checkTab(e);
      return;
    }
  }

  // Hijack Tab events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.
  function checkTab(e) {
    updateTabbableNodes();
    if (e.shiftKey && e.target === state.firstTabbableNode) {
      e.preventDefault();
      tryFocus(state.lastTabbableNode);
      return;
    }
    if (!e.shiftKey && e.target === state.lastTabbableNode) {
      e.preventDefault();
      tryFocus(state.firstTabbableNode);
      return;
    }
  }

  function checkClick(e) {
    if (config.clickOutsideDeactivates) return;
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  function updateTabbableNodes() {
    var tabbableNodes = tabbable(container);
    state.firstTabbableNode = tabbableNodes[0] || getInitialFocusNode();
    state.lastTabbableNode =
      tabbableNodes[tabbableNodes.length - 1] || getInitialFocusNode();
  }

  function tryFocus(node) {
    if (node === doc.activeElement) return;
    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }

    node.focus();
    state.mostRecentlyFocusedNode = node;
    if (isSelectableInput(node)) {
      node.select();
    }
  }
}

function isSelectableInput(node) {
  return (
    node.tagName &&
    node.tagName.toLowerCase() === 'input' &&
    typeof node.select === 'function'
  );
}

function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
}

function isTabEvent(e) {
  return e.key === 'Tab' || e.keyCode === 9;
}

function delay(fn) {
  return setTimeout(fn, 0);
}

module.exports = focusTrap;


/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has-symbols/index.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var origSymbol = global.Symbol;
var hasSymbolSham = __webpack_require__(/*! ./shams */ "./node_modules/has-symbols/shams.js");

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/shams.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/is-arguments/index.js":
/*!********************************************!*\
  !*** ./node_modules/is-arguments/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
var toStr = Object.prototype.toString;

var isStandardArguments = function isArguments(value) {
	if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
		return false;
	}
	return toStr.call(value) === '[object Arguments]';
};

var isLegacyArguments = function isArguments(value) {
	if (isStandardArguments(value)) {
		return true;
	}
	return value !== null &&
		typeof value === 'object' &&
		typeof value.length === 'number' &&
		value.length >= 0 &&
		toStr.call(value) !== '[object Array]' &&
		toStr.call(value.callee) === '[object Function]';
};

var supportsStandardArguments = (function () {
	return isStandardArguments(arguments);
}());

isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;


/***/ }),

/***/ "./node_modules/is-date-object/index.js":
/*!**********************************************!*\
  !*** ./node_modules/is-date-object/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateGetDayCall(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) {
		return false;
	}
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


/***/ }),

/***/ "./node_modules/is-regex/index.js":
/*!****************************************!*\
  !*** ./node_modules/is-regex/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");
var regexExec = RegExp.prototype.exec;
var gOPD = Object.getOwnPropertyDescriptor;

var tryRegexExecCall = function tryRegexExec(value) {
	try {
		var lastIndex = value.lastIndex;
		value.lastIndex = 0; // eslint-disable-line no-param-reassign

		regexExec.call(value);
		return true;
	} catch (e) {
		return false;
	} finally {
		value.lastIndex = lastIndex; // eslint-disable-line no-param-reassign
	}
};
var toStr = Object.prototype.toString;
var regexClass = '[object RegExp]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isRegex(value) {
	if (!value || typeof value !== 'object') {
		return false;
	}
	if (!hasToStringTag) {
		return toStr.call(value) === regexClass;
	}

	var descriptor = gOPD(value, 'lastIndex');
	var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');
	if (!hasLastIndexDataProperty) {
		return false;
	}

	return tryRegexExecCall(value);
};


/***/ }),

/***/ "./node_modules/mdbreact/dist/mdbreact.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/mdbreact/dist/mdbreact.esm.js ***!
  \****************************************************/
/*! exports provided: Alert, Animation, Badge, Box, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardBody, CardFooter, CardGroup, CardHeader, CardImage, CardText, CardTitle, CardVideo, Carousel, CarouselCaption, CarouselControl, CarouselIndicator, CarouselIndicators, CarouselInner, CarouselItem, CloseIcon, Col, Collapse, Container, DataTable, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, EdgeHeader, Fa, Footer, FormInline, FreeBird, HamburgerToggler, Iframe, Input, InputGroup, InputNumeric, Jumbotron, Link, ListGroup, ListGroupItem, MDBAlert, MDBAnimation, MDBBadge, MDBBox, MDBBreadcrumb, MDBBreadcrumbItem, MDBBtn, MDBBtnGroup, MDBBtnToolbar, MDBCard, MDBCardBody, MDBCardFooter, MDBCardGroup, MDBCardHeader, MDBCardImage, MDBCardText, MDBCardTitle, MDBCardVideo, MDBCarousel, MDBCarouselCaption, MDBCarouselIndicator, MDBCarouselIndicators, MDBCarouselInner, MDBCarouselItem, MDBCloseIcon, MDBCol, MDBCollapse, MDBContainer, MDBControl, MDBDataTable, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBEdgeHeader, MDBFooter, MDBFormInline, MDBFreeBird, MDBHamburgerToggler, MDBIcon, MDBIframe, MDBInput, MDBInputGroup, MDBInputSelect, MDBJumbotron, MDBLink, MDBListGroup, MDBListGroupItem, MDBMask, MDBMedia, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader, MDBNav, MDBNavItem, MDBNavLink, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNotification, MDBPageItem, MDBPageNav, MDBPagination, MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBPopper, MDBProgress, MDBRating, MDBRow, MDBTabContent, MDBTabPane, MDBTable, MDBTableBody, MDBTableFoot, MDBTableHead, MDBTooltip, MDBTreeview, MDBTreeviewItem, MDBTreeviewList, MDBTypo, MDBTypography, MDBView, MDBWaves, Mask, Media, Modal, ModalBody, ModalFooter, ModalHeader, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Notification, PageItem, PageLink, Pagination, Popover, PopoverBody, PopoverHeader, Popper, Progress, Rating, Row, TabContent, TabPane, Table, TableBody, TableFoot, TableHead, Tooltip, Treeview, TreeviewItem, TreeviewList, Typo, Typography, View, Waves */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breadcrumb", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbItem", function() { return ee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Ue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return te; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonToolbar", function() { return re; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return ne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBody", function() { return ae; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardFooter", function() { return oe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardGroup", function() { return se; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardHeader", function() { return le; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardImage", function() { return pe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardText", function() { return ue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTitle", function() { return me; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardVideo", function() { return ge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return ve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselCaption", function() { return ye; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselControl", function() { return be; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselIndicator", function() { return fe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselIndicators", function() { return he; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselInner", function() { return Ne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselItem", function() { return xe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseIcon", function() { return we; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return Ee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collapse", function() { return Ce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Te; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTable", function() { return He; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return _e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownItem", function() { return Ve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownMenu", function() { return Ye; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownToggle", function() { return Ge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdgeHeader", function() { return Je; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fa", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Ke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormInline", function() { return Qe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreeBird", function() { return Ze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HamburgerToggler", function() { return $e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Iframe", function() { return et; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return tt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroup", function() { return rt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputNumeric", function() { return nt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jumbotron", function() { return at; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return ot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListGroup", function() { return st; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListGroupItem", function() { return lt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBAlert", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBAnimation", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBBadge", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBBox", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBBreadcrumb", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBBreadcrumbItem", function() { return ee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBBtn", function() { return Ue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBBtnGroup", function() { return te; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBBtnToolbar", function() { return re; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBCard", function() { return ne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBCardBody", function() { return ae; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBCardFooter", function() { return oe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBCardGroup", function() { return se; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBCardHeader", function() { return le; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBCardImage", function() { return pe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBCardText", function() { return ue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBCardTitle", function() { return me; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBCardVideo", function() { return ge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBCarousel", function() { return ve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBCarouselCaption", function() { return ye; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBCarouselIndicator", function() { return fe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBCarouselIndicators", function() { return he; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBCarouselInner", function() { return Ne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBCarouselItem", function() { return xe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBCloseIcon", function() { return we; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBCol", function() { return Ee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBCollapse", function() { return Ce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBContainer", function() { return Te; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBControl", function() { return be; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBDataTable", function() { return He; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBDropdown", function() { return _e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBDropdownItem", function() { return Ve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBDropdownMenu", function() { return Ye; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBDropdownToggle", function() { return Ge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBEdgeHeader", function() { return Je; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBFooter", function() { return Ke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBFormInline", function() { return Qe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBFreeBird", function() { return Ze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBHamburgerToggler", function() { return $e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBIcon", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBIframe", function() { return et; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBInput", function() { return tt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBInputGroup", function() { return rt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBInputSelect", function() { return nt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBJumbotron", function() { return at; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBLink", function() { return ot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBListGroup", function() { return st; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBListGroupItem", function() { return lt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBMask", function() { return ce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBMedia", function() { return it; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBModal", function() { return ct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBModalBody", function() { return dt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBModalFooter", function() { return pt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBModalHeader", function() { return ut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBNav", function() { return mt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBNavItem", function() { return vt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBNavLink", function() { return yt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBNavbar", function() { return gt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBNavbarBrand", function() { return bt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBNavbarNav", function() { return ft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBNavbarToggler", function() { return ht; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBNotification", function() { return Nt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBPageItem", function() { return Ae; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBPageNav", function() { return ze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBPagination", function() { return We; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBPopover", function() { return xt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBPopoverBody", function() { return wt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBPopoverHeader", function() { return Et; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBPopper", function() { return xt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBProgress", function() { return kt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBRating", function() { return Ct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBRow", function() { return Tt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBTabContent", function() { return Ot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBTabPane", function() { return Rt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBTable", function() { return Oe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBTableBody", function() { return Re; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBTableFoot", function() { return Pe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBTableHead", function() { return Pt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBTooltip", function() { return xt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBTreeview", function() { return Mt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBTreeviewItem", function() { return It; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBTreeviewList", function() { return Bt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBTypo", function() { return Lt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBTypography", function() { return Lt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBView", function() { return de; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBWaves", function() { return ie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mask", function() { return ce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Media", function() { return it; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return ct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBody", function() { return dt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFooter", function() { return pt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalHeader", function() { return ut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return mt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItem", function() { return vt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return yt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return gt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarBrand", function() { return bt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarNav", function() { return ft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarToggler", function() { return ht; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Nt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageItem", function() { return Ae; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLink", function() { return ze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return We; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return xt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverBody", function() { return wt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverHeader", function() { return Et; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popper", function() { return xt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return kt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rating", function() { return Ct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Tt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabContent", function() { return Ot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPane", function() { return Rt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Oe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableBody", function() { return Re; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableFoot", function() { return Pe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableHead", function() { return Pt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return xt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Treeview", function() { return Mt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeviewItem", function() { return It; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeviewList", function() { return Bt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Typo", function() { return Lt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Typography", function() { return Lt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return de; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Waves", function() { return ie; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-popper */ "./node_modules/react-popper/lib/esm/index.js");
/* harmony import */ var react_numeric_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-numeric-input */ "./node_modules/react-numeric-input/index.js");
/* harmony import */ var react_numeric_input__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_numeric_input__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var focus_trap_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! focus-trap-react */ "./node_modules/focus-trap-react/dist/focus-trap-react.js");
/* harmony import */ var focus_trap_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(focus_trap_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function S(e,t,r){return t&&T(e.prototype,t),r&&T(e,r),e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function M(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?q(e):t}function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var s,l=e[Symbol.iterator]();!(n=(s=l.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function A(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var z=function(r){var n=W(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!0),2),a=n[0],o=n[1],l=r.className,c=r.tag,d=r.color,p=r.children,u=r.dismiss,m=classnames__WEBPACK_IMPORTED_MODULE_1___default()("alert",d&&"alert-".concat(d),l);return u?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_3__["Transition"],{in:a,timeout:150,unmountOnExit:!0,onExit:function(e){return function(e){return e.classList.add("fade"),r.onClose&&r.onClose()}(e)},onExited:function(e){return r.onClosed&&r.onClosed()}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(c,{"data-test":"alert",className:m,role:"alert"},p,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{onClick:function(){o(!1)},type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{"aria-hidden":"true"},"×")))):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(c,{"data-test":"alert",className:m,role:"alert"},p)};z.defaultProps={color:"primary",tag:"div"},z.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,color:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["primary","secondary","success","danger","warning","info","light","dark"]),onClose:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,onClosed:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string};var F=function(t){function n(){var t,r;C(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return O(q(r=j(this,(t=I(n)).call.apply(t,[this].concat(o)))),"state",{isVisible:!1,revealed:!1,countIterations:0}),O(q(r),"elemRef",react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef()),O(q(r),"updatePredicate",(function(){var e=window.innerHeight,t=window.scrollY,n=document.documentElement.offsetHeight,a=r.state.revealed,o=r.elemRef.current;e+t-100>r.getOffset(o)&&t<r.getOffset(o)||e+t-100>r.getOffset(o)+o.clientHeight&&t<r.getOffset(o)+o.clientHeight||e+t===n&&r.getOffset(o)+100>n?r.setState({isVisible:!0,revealed:!0}):a||r.setState({isVisible:!1,revealed:!0})})),O(q(r),"handleStart",(function(){var e=r.props.onAnimationStart,t=r.state.countIterations;r.setState({countIterations:t+1}),e&&e()})),O(q(r),"handleIteration",(function(){var e=r.props.onAnimationIteration,t=r.state.countIterations;e&&(r.setState({countIterations:t+1}),e())})),O(q(r),"handleEnd",(function(){var e=r.props,t=e.onAnimationEnd,n=e.count,a=r.state.countIterations;r.setState({countIterations:a+1}),t&&n===a&&t()})),O(q(r),"getOffset",(function(e){var t=e.getBoundingClientRect(),r=document.body,n=document.documentElement,a=window.pageYOffset||n.scrollTop||r.scrollTop,o=n.clientTop||r.clientTop||0,s=t.top+a-o;return Math.round(s)})),r}return M(n,react__WEBPACK_IMPORTED_MODULE_0__["Component"]),S(n,[{key:"componentDidMount",value:function(){var e=this.props.reveal;this.setState({isVisible:!e,revealed:!e}),e&&(window.addEventListener("scroll",this.updatePredicate),this.updatePredicate())}},{key:"componentWillUnmount",value:function(){this.props.reveal&&window.removeEventListener("scroll",this.updatePredicate)}},{key:"render",value:function(){var t=this.props,r=t.children,n=t.className,a=t.count,o=t.delay,l=t.duration,i=t.infinite,c=(t.reveal,t.style),d=t.tag,p=t.type,u=L(t,["children","className","count","delay","duration","infinite","reveal","style","tag","type"]),m=this.state,g=m.isVisible,b=m.revealed,f={animationDuration:l,animationDelay:o,animationIterationCount:!i&&a,visibility:g?"visible":"hidden",animationName:p},h=Object.assign(f,c),v=classnames__WEBPACK_IMPORTED_MODULE_1___default()(g&&"animated",p&&p,i&&"infinite",n);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(d,R({"data-test":"animation",className:v,onAnimationEnd:this.handleEnd,onAnimationIteration:this.handleIteration,onAnimationStart:this.handleStart,ref:this.elemRef,style:g&&b?h:{animationName:"none",visibility:"hidden"}},u),r)}}]),n}();F.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node),prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node]),className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,count:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,delay:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,duration:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),infinite:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,onAnimationEnd:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,onAnimationIteration:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,onAnimationStart:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,reveal:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,style:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),type:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string},F.defaultProps={tag:"div",reveal:!1,duration:1,count:1};var H=function(t){var r=t.tag,n=t.className,a=t.children,o=t.color,l=t.pill,i=L(t,["tag","className","children","color","pill"]),c=classnames__WEBPACK_IMPORTED_MODULE_1___default()("badge",o,"badge-".concat(o),!!l&&"badge-pill",n);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(r,R({"data-test":"badge"},i,{className:c}),a)};H.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,color:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,pill:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string},H.defaultProps={tag:"span",color:"default",pill:!1};var _=function(t){var r=t.tag,n=t.className,a=t.children,o=t.display,l=t.justifyContent,i=t.flex,c=t.alignItems,d=t.alignContent,p=t.alignSelf,u=t.color,m=t.bgColor,g=t.m,b=t.mt,f=t.mr,h=t.mb,v=t.ml,y=t.mx,N=t.my,x=t.p,w=t.pt,E=t.pr,k=t.pb,C=t.pl,T=t.px,S=t.py,O=L(t,["tag","className","children","display","justifyContent","flex","alignItems","alignContent","alignSelf","color","bgColor","m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py"]),P=function(e,t){if(void 0!==e)return"".concat(t,"-").concat(e)},D=classnames__WEBPACK_IMPORTED_MODULE_1___default()(o&&"d-".concat(o),l&&"justify-content-".concat(l),i&&"flex-".concat(i),c&&"align-items-".concat(c),d&&"align-content-".concat(d),p&&"align-self-".concat(p),u&&"".concat(u,"-text"),m&&"bg-".concat(m),P(g,"m"),P(b,"mt"),P(f,"mr"),P(h,"mb"),P(v,"ml"),P(y,"mx"),P(N,"my"),P(x,"p"),P(w,"pt"),P(E,"pr"),P(k,"pb"),P(C,"pl"),P(T,"px"),P(S,"py"),n),M=""!==D?D:null;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(r,R({"data-test":"box"},O,{className:M}),a)};function V(e,t){var r={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(r[n]=e[n])})),r}_.propTypes={alignContent:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,alignItems:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,alignSelf:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,bgColor:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,color:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,display:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,flex:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,justifyContent:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,m:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),mb:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),ml:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),mr:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),mt:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),mx:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),my:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),p:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),pb:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),pl:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),pr:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),pt:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),px:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),py:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string},_.defaultProps={tag:"div"};var X=27,Y=32,U=9,G=38,J=40,K=function(e){return Object.keys(e).reduce((function(t,r){return e[r]&&(t[r]=e[r]),t}),{})},Q=function(t){var r,n=t.className,a=t.color,o=t.light,l=t.uppercase,i=t.bold,c=L(t,["className","color","light","uppercase","bold"]),d=classnames__WEBPACK_IMPORTED_MODULE_1___default()("breadcrumb",l&&"text-uppercase",i&&"font-up-bold",o&&"white-text",a&&function(e){var t=e.split(" "),r=["danger","warning","success","info","default","primary","secondary","elegant","stylish","unique","special"],n="";return t.forEach((function(e){r.includes(e)?e.includes("dark")?(e.replace("-","-color-"),n+="".concat(e," ")):n+="".concat(e,"-color"):n+="".concat(e," ")})),n}(a),n);return r=i?react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(t.children,(function(t){return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(t,{bold:!0})})):t.children,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav",{"data-test":"breadcrumb"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol",R({},c,{className:d}),r))};Q.propTypes={bold:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,color:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,light:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,uppercase:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool};var Z=function(t){var r=t.border,n=t.brand,a=t.className,o=t.fab,l=t.duotone,i=t.fal,c=t.fad,d=t.far,p=t.solid,u=t.fixed,m=t.fas,g=t.flip,b=t.icon,f=t.inverse,h=t.light,v=t.list,y=t.pull,N=t.pulse,x=t.regular,w=t.rotate,E=t.size,k=t.spin,C=t.stack,T=L(t,["border","brand","className","fab","duotone","fal","fad","far","solid","fixed","fas","flip","icon","inverse","light","list","pull","pulse","regular","rotate","size","spin","stack"]),S=classnames__WEBPACK_IMPORTED_MODULE_1___default()(x||d?"far":p||m?"fas":h||i?"fal":l||c?"fad":n||o?"fab":"fa",!!v&&"fa-li",!!b&&"fa-".concat(b),!!E&&"fa-".concat(E),!!u&&"fa-fw",!!y&&"fa-pull-".concat(y),!!r&&"fa-border",!!k&&"fa-spin",!!N&&"fa-pulse",!!w&&"fa-rotate-".concat(w),!!g&&"fa-flip-".concat(g),!!f&&"fa-inverse",!!C&&"fa-".concat(C),a);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",R({"data-test":"fa"},T,{className:S}))};function $(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===r&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}Z.propTypes={icon:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,border:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,brand:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,fab:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,fal:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,far:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,fixed:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,flip:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,inverse:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,light:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,list:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,pull:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,pulse:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,regular:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,rotate:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,size:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,spin:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,stack:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string},Z.defaultProps={border:!1,brand:!1,className:"",fab:!1,fal:!1,far:!1,fixed:!1,flip:"",inverse:!1,light:!1,list:!1,pull:"",pulse:!1,regular:!1,rotate:"",size:"",spin:!1,stack:""};$(".bc-icons.breadcrumb-item::before,\r\n.bc-icons.breadcrumb-item::after {\r\n  content: none;\r\n}\r\n\r\n.bc-icons.breadcrumb-item + .active.breadcrumb-item::before,\r\n.bc-icons.breadcrumb-item + .active.breadcrumb-item::after{\r\n  content: none;\r\n}\r\n\r\n.bc-icons.breadcrumb-item.active {\r\n  color: #eeeeee;\r\n}\r\n");var ee=function(t){var r=t.active,n=t.appendIcon,a=t.children,o=t.className,l=t.bold,i=t.icon,c=t.iconBrand,d=t.iconClassName,p=t.iconLight,u=t.iconRegular,m=t.iconSize,g=L(t,["active","appendIcon","children","className","bold","icon","iconBrand","iconClassName","iconLight","iconRegular","iconSize"]),b=classnames__WEBPACK_IMPORTED_MODULE_1___default()(!!r&&"active",i&&"bc-icons","breadcrumb-item",o),f=classnames__WEBPACK_IMPORTED_MODULE_1___default()(n?"mx-2":"mr-2",d);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",R({"data-test":"breadcrumb-item"},g,{className:b}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement((function(t){var r=t.children;return l?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong",null,r):r}),null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement((function(){return i?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,n&&a,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Z,{brand:c,className:f,icon:i,light:p,regular:u,size:m}),!n&&a):a}),null)))};ee.propTypes={active:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,appendIcon:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,bold:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,icon:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,iconBrand:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,iconClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,iconLight:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,iconRegular:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,iconSize:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string},ee.defaultProps={active:!1,appendIcon:!1,className:"",bold:!1,icon:"",iconBrand:!1,iconClassName:"",iconLight:!1,iconRegular:!1,iconSize:""};$(".btn-group-vertical>.btn,\r\n.btn-group-vertical>.btn+.btn-group,\r\n.btn-group-vertical>.btn-group+.btn,\r\n.btn-group-vertical>.btn-group+.btn-group {\r\n  margin-left: 0px;\r\n}\r\n\r\n.btn-group-lg>.btn {\r\n  font-size: 0.9rem;\r\n  padding: 1rem 2.4rem;\r\n}\r\n\r\n.btn-group-sm>.btn {\r\n  font-size: 0.6rem;\r\n  padding: 0.5rem 1.6rem;\r\n}\r\n\r\n.btn-floating.btn.btn-sm,\r\n.btn-floating.btn.btn-lg {\r\n  padding: 0;\r\n}\r\n");var te=function(t){var r=t.className,n=t.size,a=t.vertical,o=t.children,l=L(t,["className","size","vertical","children"]),i=classnames__WEBPACK_IMPORTED_MODULE_1___default()(r,!!n&&"btn-group-".concat(n),a?"btn-group-vertical":"btn-group");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",R({"data-test":"button-group"},l,{className:i}),o)};te.propTypes={"aria-label":prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,role:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,size:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,vertical:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool},te.defaultProps={role:"group"};var re=function(t){var r=t.className,n=t.children,a=L(t,["className","children"]),o=classnames__WEBPACK_IMPORTED_MODULE_1___default()(r,"btn-toolbar");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",R({"data-test":"button-toolbar"},a,{className:o}),n)};re.propTypes={"aria-label":prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,role:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string},re.defaultProps={role:"toolbar"};var ne=function(t){var r,n=t.className,a=t.tag,o=t.cascade,l=t.wide,i=t.narrow,c=t.reverse,d=t.testimonial,p=t.ecommerce,u=t.collection,m=t.pricing,g=t.personal,b=t.news,f=t.color,h=t.text,v=t.border,y=L(t,["className","tag","cascade","wide","narrow","reverse","testimonial","ecommerce","collection","pricing","personal","news","color","text","border"]),N=classnames__WEBPACK_IMPORTED_MODULE_1___default()((O(r={"card-cascade":o,"card-cascade wider":l,"card-cascade narrower":i,"card-cascade wider reverse":c,"testimonial-card":d,"card-ecommerce":p,"collection-card":u,"pricing-card":m,"card-personal":g,"news-card":b},"".concat(h,"-text"),h),O(r,"border-".concat(v),v),r),"card",f,n);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(a,R({"data-test":"card"},y,{className:N}))};ne.propTypes={border:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,cascade:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,collection:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,color:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,ecommerce:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,narrow:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,news:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,personal:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,pricing:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,reverse:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,testimonial:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,text:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,wide:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool},ne.defaultProps={tag:"div"};var ae=function(t){var r=t.className,n=t.tag,a=t.cascade,o=L(t,["className","tag","cascade"]),l=classnames__WEBPACK_IMPORTED_MODULE_1___default()("card-body",a&&"card-body-cascade",r);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(n,R({"data-test":"card-body"},o,{className:l}))};ae.propTypes={cascade:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string])},ae.defaultProps={tag:"div"};var oe=function(t){var r,n=t.className,a=t.tag,o=t.color,l=t.children,i=t.text,c=t.border,d=t.transparent,p=t.small,u=t.muted,m=L(t,["className","tag","color","children","text","border","transparent","small","muted"]),g=classnames__WEBPACK_IMPORTED_MODULE_1___default()((O(r={"white-text":o&&!i},"border-".concat(c),c),O(r,"bg-transparent",d),O(r,"text-muted",u),O(r,"".concat(i,"-text"),i),r),"card-footer",o,n);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(a,R({"data-test":"card-footer"},m,{className:g}),p?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small",null," ",l," "):l)};oe.propTypes={border:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,color:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,muted:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,small:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),text:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,transparent:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool},oe.defaultProps={tag:"div"};var se=function(t){var r=t.className,n=t.tag,a=t.deck,o=t.column,l=L(t,["className","tag","deck","column"]),i=classnames__WEBPACK_IMPORTED_MODULE_1___default()(a?"card-deck":o?"card-columns":"card-group",r);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(n,R({"data-test":"card-group"},l,{className:i}))};se.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,column:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,deck:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string])},se.defaultProps={tag:"div"};var le=function(t){var r,n=t.border,a=t.className,o=t.color,l=t.tag,i=t.text,c=t.transparent,d=L(t,["border","className","color","tag","text","transparent"]),p=classnames__WEBPACK_IMPORTED_MODULE_1___default()((O(r={"white-text":o&&!i},"border-".concat(n),n),O(r,"bg-transparent",c),O(r,"".concat(i,"-text"),i),r),"card-header",a,o);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(l,R({"data-test":"card-header"},d,{className:p}))};le.propTypes={border:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,color:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),text:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,transparent:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool},le.defaultProps={tag:"div"};$(".Ripple {\r\n  position: absolute;\r\n  background: rgba(255, 255, 255, 0.3);\r\n  border-radius: 50%;\r\n  opacity: 1;\r\n  transform: scale(0);\r\n}\r\n\r\n.Ripple-outline {\r\n  background: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.Ripple.is-reppling {\r\n  animation: ripple 0.5s linear;\r\n}\r\n\r\n.Ripple-parent {\r\n  position: relative;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n}\r\n\r\n@keyframes ripple {\r\n  100% {\r\n    opacity: 0;\r\n    transform: scale(3);\r\n  }\r\n}\r\n");var ie=function(t){function r(){var e,t;C(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return O(q(t=j(this,(e=I(r)).call.apply(e,[this].concat(a)))),"state",{animate:!1,width:0,height:0,top:0,left:0,cursorPos:t.props.cursorPos}),t}return M(r,react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),S(r,[{key:"componentDidUpdate",value:function(e,t){var r=this,n=this.props.cursorPos;t.cursorPos.time!==n.time&&(t.animate?this.setState({animate:!1,cursorPos:n},(function(){r.replying()})):this.replying())}},{key:"replying",value:function(){var e=react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this).parentNode,t=e.getBoundingClientRect(),r=e.offsetWidth,n=e.offsetHeight,a=Math.max(n,r),o=a/2,s=this.state.cursorPos;this.setState({animate:!0,width:a,height:a,top:s.top-t.top-o,left:s.left-t.left-o})}},{key:"render",value:function(){var t=this.props,r=t.outline,n=t.flat,a=t.dark,o=this.state,s=o.animate,l=o.top,i=o.left,c=o.width,d=o.height;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{"data-test":"waves",className:"Ripple ".concat(r||n||a?"Ripple-outline ":"").concat(s?"is-reppling":""),style:{top:"".concat(l,"px"),left:"".concat(i,"px"),width:"".concat(c,"px"),height:"".concat(d,"px")}})}}]),r}();ie.propTypes={animate:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,cursorPos:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,flat:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,outline:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool};var ce=function(t){var r=t.children,n=t.className,a=t.overlay,o=t.pattern,l=t.tag,i=L(t,["children","className","overlay","pattern","tag"]),c=classnames__WEBPACK_IMPORTED_MODULE_1___default()("mask",o&&"pattern-".concat(o),a&&"rgba-".concat(a),n);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(l,R({"data-test":"mask"},i,{className:c}),r)};ce.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,overlay:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,pattern:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string},ce.defaultProps={className:"",overlay:"",pattern:"",tag:"div"};var de=function(r){var n=W(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),2),a=n[0],o=n[1],l=function(e){var t={top:e.clientY,left:e.clientX,time:Date.now()};o(t)},i=r.cascade,c=r.children,d=r.className,p=r.fixed,u=r.hover,m=r.rounded,g=r.src,b=r.tag,f=r.waves,h=r.zoom,v=L(r,["cascade","children","className","fixed","hover","rounded","src","tag","waves","zoom"]),y=classnames__WEBPACK_IMPORTED_MODULE_1___default()("view",i&&"view-cascade",d,u&&"overlay",m&&"rounded",!!f&&"Ripple-parent",h&&"zoom"),N=g?{backgroundAttachment:p?"fixed":null,backgroundImage:'url("'.concat(g,'")'),backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100vh"}:{};return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(b,R({},v,{className:y,"data-test":"view",onMouseDown:l,onTouchStart:l,style:N}),c,f&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ie,{cursorPos:a}))};de.defaultProps={cascade:!1,className:"",hover:!1,rounded:!1,src:"",tag:"div",waves:!1,zoom:!1},de.propTypes={cascade:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,hover:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,rounded:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,src:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,waves:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,zoom:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool};var pe=function(r){var n=W(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),2),a=n[0],o=n[1],l=r.cascade,i=r.className,c=r.hover,d=r.overlay,p=r.src,u=r.tag,m=r.top,g=r.waves,b=r.zoom,f=L(r,["cascade","className","hover","overlay","src","tag","top","waves","zoom"]),h=classnames__WEBPACK_IMPORTED_MODULE_1___default()(m&&"card-img-top",i),v=u,y=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(v,R({"data-test":"card-image",src:p},f,{className:h}));return p?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(de,{zoom:b,hover:c,cascade:l},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"Ripple-parent",onMouseDown:function(e){var t={top:e.clientY,left:e.clientX,time:Date.now()};o(t)},style:{touchAction:"unset"}},y,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ce,{overlay:d}),g&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ie,{cursorPos:a}))):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,y)};pe.propTypes={cascade:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,hover:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,overlay:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,src:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),top:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,waves:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,zoom:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool},pe.defaultProps={tag:"img",overlay:"white-slight",waves:!0,hover:!1,cascade:!1,zoom:!1};var ue=function(t){var r=t.children,n=t.className,a=t.muted,o=t.small,l=t.tag,i=L(t,["children","className","muted","small","tag"]),c=classnames__WEBPACK_IMPORTED_MODULE_1___default()("card-text",a&&"text-muted",n),d=o?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small",null,r):r;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(l,R({"data-test":"card-text"},i,{className:c}),d)};ue.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,muted:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,small:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string])},ue.defaultProps={tag:"p"};var me=function(t){var r=t.className,n=t.sub,a=t.tag,o=L(t,["className","sub","tag"]),l=classnames__WEBPACK_IMPORTED_MODULE_1___default()(n?"card-subtitle":"card-title",r);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(a,R({"data-test":"card-title"},o,{className:l}))};me.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,sub:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string])},me.defaultProps={tag:"h4",sub:!1};var ge=function(t){var r=t.children,n=t.className,a=t.src,o=L(t,["children","className","src"]),l=classnames__WEBPACK_IMPORTED_MODULE_1___default()(n);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBIframe"],R({"data-test":"card-video"},o,{src:a,className:l}),r)};ge.propTypes={src:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string};var be=function(t){var r,n=t.className,a=t.direction,o=t.iconLeft,l=t.iconRight,i=t.multiItem,c=t.onClick,d=t.tag,p=t.testimonial;"prev"===a?r="Previous":"next"===a&&(r="Next");var u=classnames__WEBPACK_IMPORTED_MODULE_1___default()("carousel-control-".concat(a),n),m=classnames__WEBPACK_IMPORTED_MODULE_1___default()("carousel-control-".concat(a,"-icon"));if(p){var g="prev"===a?"left":"right";u=classnames__WEBPACK_IMPORTED_MODULE_1___default()("carousel-control-".concat(a),g,"carousel-control",n),m=classnames__WEBPACK_IMPORTED_MODULE_1___default()("icon-".concat(a))}return i&&(u=classnames__WEBPACK_IMPORTED_MODULE_1___default()("btn-floating")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(d,{"data-test":"carousel-control",className:u,"data-slide":a,onClick:c},o?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Z,{icon:"chevron-left"}):l?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Z,{icon:"chevron-right"}):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:m,"aria-hidden":"true"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"sr-only"},r)))};be.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,direction:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,iconLeft:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,iconRight:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,multiItem:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,onClick:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),testimonial:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool},be.defaultProps={tag:"a"};var fe=function(t){var r=t.active,n=t.alt,a=t.children,o=t.className,l=t.img,i=L(t,["active","alt","children","className","img"]),c=classnames__WEBPACK_IMPORTED_MODULE_1___default()(r&&"active",o);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",R({"data-test":"carousel-indicator"},i,{className:c}),l&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:l,alt:n,className:"img-fluid"}),a)};fe.propTypes={active:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,alt:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,img:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string},fe.defaultProps={alt:"Carousel thumbnail",className:"",img:""};var he=function(t){var r=t.children,n=t.className,a=L(t,["children","className"]),o=classnames__WEBPACK_IMPORTED_MODULE_1___default()("carousel-indicators",n);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol",R({"data-test":"carousel-indicators"},a,{className:o}),r)};he.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string},he.defaultProps={className:""};$(".carousel-inner {\r\n  position: relative;\r\n  overflow: hidden;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.carousel-fade .carousel-item {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: block !important;\r\n  opacity: 0;\r\n  z-index: 0;\r\n  transition: transform 0ms ease-in-out, opacity 0.8s ease-out;\r\n}\r\n\r\n.carousel-fade .carousel-item.active {\r\n  position: relative;\r\n  z-index: 1;\r\n  opacity: 1;\r\n}\r\n\r\n.carousel-multi-item .carousel-item {\r\n  display: inline-block !important;\r\n}\r\n\r\n.carousel .carousel-slide-item {\r\n  transition: left 0.5s;\r\n}\r\n\r\n.carousel-control-prev, .carousel-control-next, .carousel-item-prev, .carousel-item-next {\r\n  z-index: 2;\r\n}\r\n");var ve=function(t){function n(){var t,r;C(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return O(q(r=j(this,(t=I(n)).call.apply(t,[this].concat(o)))),"state",{activeItem:r.props.activeItem,initialLength:r.props.length,srcArray:[],swipeAvailable:!0,initialX:null,initialY:null}),O(q(r),"carouselRef",react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef()),O(q(r),"clearCycleIntervalHandler",(function(){return clearInterval(r.cycleInterval)})),O(q(r),"swipeAvailableHandler",(function(){return r.setState({swipeAvailable:!0})})),O(q(r),"restartInterval",(function(){var e=r.props.interval;!1!==e&&(r.clearCycleIntervalHandler(),r.cycleInterval=setInterval(r.next,e))})),O(q(r),"next",(function(){var e=r.state,t=e.activeItem+1,n=t>e.initialLength?1:t;r.goToIndex(n)})),O(q(r),"prev",(function(){var e=r.state,t=e.activeItem,n=e.initialLength,a=t-1,o=a<1?n:a;r.goToIndex(o)})),O(q(r),"goToIndex",(function(e){r.setState(D({},r.state,{activeItem:e})),r.restartInterval()})),O(q(r),"startTouch",(function(e){!1!==r.props.mobileGesture&&r.setState({initialX:e.touches[0].clientX,initialY:e.touches[0].clientY})})),O(q(r),"moveTouch",(function(e){r.setState({swipeAvailable:!1});var t=r.state,n=t.initialX,a=t.initialY;if(null!==n&&null!==a){var o=n-e.touches[0].clientX,s=a-e.touches[0].clientY;Math.abs(o)>Math.abs(s)&&(o>0?r.next():r.prev()),r.setState({initialX:null,initialY:null})}})),r}return M(n,react__WEBPACK_IMPORTED_MODULE_0__["Component"]),S(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.interval,r=e.thumbnails;if(!1!==t&&(this.cycleInterval=setInterval(this.next,t),r)){var n=this.carouselRef.current.querySelectorAll(".carousel-item img"),a=Array.prototype.map.call(n,(function(e){return e.src}));this.setState(D({},this.state,{srcArray:a}))}}},{key:"componentDidUpdate",value:function(){var e=this.props.length;this.state.InitialLength!==e&&this.setState({InitialLength:e})}},{key:"componentWillUnmount",value:function(){!1!==this.props.interval&&this.clearCycleIntervalHandler()}},{key:"getChildContext",value:function(){var e=this.state;return{activeItem:e.activeItem,length:e.initialLength,slide:this.props.slide}}},{key:"render",value:function(){for(var t=this,r=this.props,n=(r.activeItem,r.children),a=r.className,o=(r.interval,r.mobileGesture,r.multiItem),l=r.onHoverStop,i=r.showControls,c=r.showIndicators,d=(r.slide,r.tag),p=r.testimonial,u=r.thumbnails,m=L(r,["activeItem","children","className","interval","mobileGesture","multiItem","onHoverStop","showControls","showIndicators","slide","tag","testimonial","thumbnails"]),g=this.state,b=g.initialLength,f=g.srcArray,h=g.swipeAvailable,v=classnames__WEBPACK_IMPORTED_MODULE_1___default()("carousel",o?"carousel-multi-item":"carousel-fade",u?"carousel-thumbnails":"",p?"testimonial-carousel":"",a),y=[],N=function(r){var n=t.state.activeItem;y.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fe,{img:u?f[r-1]:null,key:r,active:n===r,onClick:function(){return t.goToIndex(r)}}))},x=1;x<=b;x++)N(x);var w=!!o,E=!!p;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(d,R({"data-test":"carousel",ref:this.carouselRef},m,{className:v,"aria-label":"carousel",onTouchStart:this.startTouch,onTouchMove:h?this.moveTouch:null,onTouchEnd:this.swipeAvailableHandler,onMouseEnter:l?this.clearCycleIntervalHandler:null,onMouseLeave:l?this.restartInterval:null}),i&&o&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"controls-top"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(be,{testimonial:E,multiItem:w,iconLeft:!0,className:"btn-floating",direction:"prev",role:"button",onClick:this.prev}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(be,{testimonial:E,multiItem:w,iconRight:!0,className:"btn-floating",direction:"next",role:"button",onClick:this.next})),n,i&&!o&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(be,{testimonial:E,multiItem:w,direction:"prev",role:"button",onClick:this.prev}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(be,{testimonial:E,multiItem:w,direction:"next",role:"button",onClick:this.next})),c&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(he,null,y))}}]),n}();ve.propTypes={activeItem:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,interval:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool]),length:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,mobileGesture:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,multiItem:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,onHoverStop:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,showControls:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,showIndicators:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,slide:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),testimonial:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,thumbnails:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool},ve.defaultProps={interval:6e3,mobileGesture:!0,onHoverStop:!0,showControls:!0,showIndicators:!0,tag:"div"},ve.childContextTypes={activeItem:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,length:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,slide:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any};var ye=function(t){var r=t.children,n=t.className,a=t.tag,o=L(t,["children","className","tag"]),l=classnames__WEBPACK_IMPORTED_MODULE_1___default()("carousel-caption",n);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(a,R({"data-test":"carousel-caption"},o,{className:l}),r)};ye.propTypes={active:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string])},ye.defaultProps={tag:"div"};var Ne=function(t){var r=t.active,n=t.children,a=(t.childrenCount,t.className),o=t.tag,l=L(t,["active","children","childrenCount","className","tag"]),i=classnames__WEBPACK_IMPORTED_MODULE_1___default()("carousel-inner",r?"active":"",a);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(o,R({"data-test":"carousel-inner"},l,{className:i}),n)};Ne.propTypes={active:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string])},Ne.defaultProps={tag:"div"};var xe=function(t){function n(){var e,t;C(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return O(q(t=j(this,(e=I(n)).call.apply(e,[this].concat(a)))),"moveForward",(function(){t.style={position:"absolute",left:"100%"}})),O(q(t),"moveBackwards",(function(){t.style={position:"absolute",left:"-100%"}})),O(q(t),"makeVisible",(function(){t.style={left:"0"}})),t}return M(n,react__WEBPACK_IMPORTED_MODULE_0__["Component"]),S(n,[{key:"render",value:function(){var t=this.props,r=(t.active,t.children),n=t.className,a=t.itemId,o=t.tag,l=L(t,["active","children","className","itemId","tag"]),i=this.context,c=i.slide,d=i.activeItem;a=parseInt(a,10);var p=classnames__WEBPACK_IMPORTED_MODULE_1___default()("carousel-item",{"active carousel-slide-item":c,active:!c&&a===d},n),u=d-a;return c?u<0?this.moveForward():u>0?this.moveBackwards():this.makeVisible():this.makeVisible(),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(o,R({"data-test":"carousel-item"},l,{className:p,style:this.style}),r)}}]),n}();xe.propTypes={active:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,itemId:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string])},xe.defaultProps={tag:"div"},xe.contextTypes={activeItem:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,length:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,slide:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any};var we=function(t){var r=t.onClick,n=t.className,a=t.ariaLabel,o=L(t,["onClick","className","ariaLabel"]),s=n?["close"].concat(A(n.split(" "))):["close"];return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",R({"data-test":"close-button",type:"button"},o,{className:s.join(" "),onClick:function(e){r&&r(e)},"aria-label":a}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{"aria-hidden":"true"},"×"))};we.defaultProps={ariaLabel:"Close"},we.propTypes={ariaLabel:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,onClick:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func};var Ee=function(t){var r=t.xs,n=t.sm,a=t.md,o=t.lg,l=t.xl,i=t.top,c=t.bottom,d=t.middle,p=t.size,u=t.className,m=t.tag,g=L(t,["xs","sm","md","lg","xl","top","bottom","middle","size","className","tag"]),b=classnames__WEBPACK_IMPORTED_MODULE_1___default()(p&&"col-".concat(p),r&&"col-xs-".concat(r),n&&"col-sm-".concat(n),a&&"col-md-".concat(a),o&&"col-lg-".concat(o),l&&"col-xl-".concat(l),p||r||n||a||o||l?"":"col",i&&"align-self-start",d&&"align-self-center",c&&"align-self-end",u);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(m,R({"data-test":"col"},g,{className:b}))};Ee.propTypes={bottom:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,lg:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,md:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,middle:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,size:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,sm:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),top:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,xl:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,xs:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string},Ee.defaultProps={tag:"div",xs:null,sm:null,md:null,lg:null,xl:null};var ke={show:350,hide:350},Ce=function(t){function n(){var e,t;C(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return O(q(t=j(this,(e=I(n)).call.apply(e,[this].concat(a)))),"state",{id:t.props.id,collapse:"HIDDEN",height:null}),O(q(t),"element",null),O(q(t),"setTransitionTag",(function(e,r,n){t.transitionTag=setTimeout((function(){t.setState({collapse:e,height:null},r())}),t.getDelay(n))})),O(q(t),"openCollapse",(function(){var e=t.props.onOpened;t.setState({collapse:"SHOW"},(function(){t.setState({height:t.getHeight()}),t.setTransitionTag("SHOWN",e,"show")}))})),O(q(t),"closeCollapse",(function(){var e=t.props.onClosed;t.setState({height:t.getHeight()},(function(){t.setState({collapse:"HIDE",height:t.getHeight()},(function(){t.setState({height:0})}))})),t.setTransitionTag("HIDDEN",e,"hide")})),t}return M(n,react__WEBPACK_IMPORTED_MODULE_0__["Component"]),S(n,[{key:"componentDidMount",value:function(){var e=this.props.isOpen,t=this.state,r=t.collapse;e!==t.id&&!0!==e||"HIDDEN"!==r||this.openCollapse()}},{key:"componentDidUpdate",value:function(e,t){var r=this.props.isOpen,n=this.state.collapse,a="boolean"!=typeof r?r===t.id:r;a&&"HIDDEN"===n?this.openCollapse():a||"SHOWN"!==t.collapse||this.closeCollapse()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.transitionTag)}},{key:"getDelay",value:function(e){var t=this.props.delay;return"object"===k(t)?isNaN(t[e])?ke[e]:t[e]:t}},{key:"getHeight",value:function(){return this.element.scrollHeight}},{key:"render",value:function(){var t,r=this,n=this.props,a=n.navbar,o=n.children,l=n.className,i=(n.isOpen,n.delay,n.onOpened,n.onClosed,L(n,["navbar","children","className","isOpen","delay","onOpened","onClosed"])),c=this.state,d=c.collapse,p=c.height;switch(d){case"SHOW":t="collapsing";break;case"SHOWN":t="collapse show";break;case"HIDE":t="collapsing";break;case"HIDDEN":t="collapse";break;default:t="collapse"}var u=classnames__WEBPACK_IMPORTED_MODULE_1___default()(t,!!a&&"navbar-collapse",l),m=null===p?null:{height:p};return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",R({"data-test":"collapse"},i,{style:D({},i.style,{},m),className:u,ref:function(e){r.element=e}}),o)}}]),n}();Ce.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,delay:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({hide:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,show:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number})]),id:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,isOpen:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool]),navbar:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,onClosed:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,onOpened:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func},Ce.defaultProps={isOpen:"",delay:ke,onOpened:function(){},onClosed:function(){}};var Te=function(t){var r=t.className,n=t.fluid,a=t.size,o=t.tag,l=L(t,["className","fluid","size","tag"]),i=classnames__WEBPACK_IMPORTED_MODULE_1___default()(n?"container-fluid":a?"container-".concat(a):"container",r);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(o,R({"data-test":"container"},l,{className:i}))};Te.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,fluid:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,size:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["sm","md","lg","xl"]),tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string])},Te.defaultProps={tag:"div",fluid:!1};var Se=function(t){var r=t.color,n=t.columns,a=t.handleSort,o=t.scrollX,l=t.scrollY,i=t.sortable,c=t.sorted,d=t.textWhite,p=classnames__WEBPACK_IMPORTED_MODULE_1___default()(r&&("dark"!==r&&"light"!==r?r:"thead-".concat(r)),d&&"text-white");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,(l||o)&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("colgroup",null,n.map((function(t){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("col",{key:t.field,style:{width:"".concat(t.width,"px")||false,minWidth:"".concat(t.width,"px")||false}})}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead",{"data-test":"datatable-head",className:p||void 0},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",null,n.map((function(t){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th",R({onClick:function(){return i&&a(t.field,t.sort)},key:t.field,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(t.hasOwnProperty("minimal")?"th-".concat(t.minimal):null,i&&"disabled"!==t.sort&&(c&&t.sort?"sorting_".concat("asc"===t.sort?"desc":"asc"):"sorting"))},t.attributes),t.label)})))))};Se.propTypes={sorted:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,color:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,columns:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object),handleSort:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,scrollX:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,scrollY:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,sortable:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,textWhite:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool},Se.defaultProps={scrollX:!1,scrollY:!1,sortable:!0,textWhite:!1};$(".table-wrapper-scroll-y {\r\n  display: block;\r\n  max-height: 200px;\r\n  overflow-y: auto;\r\n  -ms-overflow-style: -ms-autohiding-scrollbar;\r\n}\r\n");var Oe=function(t){var r=t.autoWidth,n=t.bordered,a=t.borderless,o=t.btn,l=t.children,i=t.className,c=t.dark,d=t.fixed,p=t.hover,u=t.maxHeight,m=t.responsive,g=t.responsiveLg,b=t.responsiveMd,f=t.responsiveSm,h=t.responsiveXl,v=t.scrollY,y=t.small,N=t.striped,x=(t.theadColor,t.wrapperClassName),w=L(t,["autoWidth","bordered","borderless","btn","children","className","dark","fixed","hover","maxHeight","responsive","responsiveLg","responsiveMd","responsiveSm","responsiveXl","scrollY","small","striped","theadColor","wrapperClassName"]),E=classnames__WEBPACK_IMPORTED_MODULE_1___default()("table",{"w-auto":r,"table-bordered":n,"table-borderless":a,"btn-table":o,"table-fixed":d,"table-hover":p,"table-sm":y,"table-striped":N},i),k=classnames__WEBPACK_IMPORTED_MODULE_1___default()({"table-dark":c,"table-responsive":m,"table-responsive-sm":f,"table-responsive-md":b,"table-responsive-lg":g,"table-responsive-xl":h,"table-wrapper-scroll-y":v},x),C={maxHeight:u};return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{"data-test":"table",className:k,style:C},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table",R({},w,{className:E}),l))};Oe.propTypes={autoWidth:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,bordered:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,borderless:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,btn:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,dark:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,fixed:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,hover:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,maxHeight:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,responsive:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,responsiveLg:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,responsiveMd:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,responsiveSm:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,responsiveXl:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,scrollY:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,small:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,striped:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,theadColor:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,wrapperClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string};var Re=function(t){var r=t.children,n=t.color,a=t.columns,o=t.rows,l=t.textWhite,i=L(t,["children","color","columns","rows","textWhite"]),c=classnames__WEBPACK_IMPORTED_MODULE_1___default()(n,{"text-white":l}),d=function(t,r,n,a){return"clickEvent"===t?null:"colspan"!==t?a.message?0===r&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",{key:r,colSpan:a.colspan},a.message):"colspan"!==n[r+1]&&null!==a[t]&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",{key:r},a[t])||react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",{key:r}):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",{key:r,colSpan:a.colspan},a[n[r-1]])};return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody",R({"data-test":"table-body"},i,{className:c||void 0}),o&&o.map((function(t,r){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",{onClick:t.hasOwnProperty("clickEvent")?t.clickEvent:void 0,key:r},a?a.map((function(e,r,n){var a=e.field;return d(a,r,n,t)})):Object.keys(t).map((function(e,r,n){return d(e,r,n,t)})))})),r)};Re.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,color:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,rows:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object),textWhite:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool},Re.defaultProps={textWhite:!1};var Pe=function(t){var r,n=t.children,a=t.color,o=t.columns,l=t.textWhite,i=L(t,["children","color","columns","textWhite"]),c="dark"===a||"light"===a,d=classnames__WEBPACK_IMPORTED_MODULE_1___default()((O(r={"text-white":l},"thead-".concat(a),a&&c),O(r,"".concat(a),a&&!c),r));return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead",R({"data-test":"table-foot"},i,{className:d||void 0}),o&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",null,o.map((function(t){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th",{key:t.field,className:t.hasOwnProperty("minimal")?"th-".concat(t.minimal):void 0},t.label)}))),n)};Pe.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,color:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,columns:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object),textWhite:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool},Pe.defaultProps={textWhite:!1};var De=function(t){var r=t.autoWidth,n=t.bordered,a=t.borderless,o=t.btn,s=t.children,l=t.columns,i=t.dark,c=t.fixed,d=t.handleSort,p=t.hover,u=t.noBottomColumns,m=(t.noRecordsFoundLabel,t.responsive),g=t.responsiveLg,b=t.responsiveMd,f=t.responsiveSm,h=t.responsiveXl,v=t.rows,y=t.small,N=t.sortable,x=t.sorted,w=t.striped,E=t.tbodyColor,k=t.tbodyTextWhite,C=t.theadColor,T=t.theadTextWhite,S=L(t,["autoWidth","bordered","borderless","btn","children","columns","dark","fixed","handleSort","hover","noBottomColumns","noRecordsFoundLabel","responsive","responsiveLg","responsiveMd","responsiveSm","responsiveXl","rows","small","sortable","sorted","striped","tbodyColor","tbodyTextWhite","theadColor","theadTextWhite"]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{"data-test":"datatable-table",className:"col-sm-12"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Oe,R({autoWidth:r,bordered:n,borderless:a,btn:o,dark:i,fixed:c,hover:p,responsive:m,responsiveSm:f,responsiveMd:b,responsiveLg:g,responsiveXl:h,small:y,striped:w,className:"dataTable"},S),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Se,{color:C,textWhite:T,columns:l,handleSort:d,sortable:N,sorted:x}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Re,{color:E,textWhite:k,rows:v,columns:l}),!u&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Pe,{color:C,textWhite:T,columns:l}),s))};De.propTypes={autoWidth:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,bordered:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,borderless:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,btn:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,dark:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,fixed:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,handleSort:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,hover:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,responsive:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,responsiveLg:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,responsiveMd:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,responsiveSm:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,responsiveXl:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,small:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,sortable:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,sorted:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,striped:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,tbodyColor:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,tbodyTextWhite:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,theadColor:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,theadTextWhite:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,columns:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object),noBottomColumns:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,rows:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object)};var Me=function(t){var r=t.autoWidth,n=t.bordered,a=t.borderless,o=t.btn,s=t.children,l=t.columns,i=t.dark,c=t.fixed,d=t.handleSort,p=t.handleTableBodyScroll,u=t.hover,m=t.maxHeight,g=t.responsive,b=t.responsiveLg,f=t.responsiveMd,h=t.responsiveSm,v=t.responsiveXl,y=t.rows,N=t.scrollX,x=t.scrollY,w=t.small,E=t.sortable,k=t.sorted,C=t.striped,T=t.tbodyColor,S=t.tbodyTextWhite,O=t.theadColor,P=t.theadTextWhite,D=t.translateScrollHead,M=L(t,["autoWidth","bordered","borderless","btn","children","columns","dark","fixed","handleSort","handleTableBodyScroll","hover","maxHeight","responsive","responsiveLg","responsiveMd","responsiveSm","responsiveXl","rows","scrollX","scrollY","small","sortable","sorted","striped","tbodyColor","tbodyTextWhite","theadColor","theadTextWhite","translateScrollHead"]),I=N?"".concat(l.map((function(e){return e.width})).reduce((function(e,t){return e+t}),0),"px"):"auto";return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{"data-test":"datatable-table-scroll",className:"col-sm-12"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"dataTables_scroll"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"dataTables_scrollHead",style:{overflow:"hidden"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"dataTables_scrollHeadInner",style:{position:"relative",transform:"translateX(-".concat(D,"px)"),boxSizing:"content-box",paddingRight:x?"15px":null,minWidth:I}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Oe,R({autoWidth:r,bordered:n,borderless:a,btn:o,dark:i,fixed:c,hover:u,responsive:g,responsiveSm:h,responsiveMd:f,responsiveLg:b,responsiveXl:v,small:w,striped:C,className:"dataTable"},M),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Se,{color:O,textWhite:P,columns:l,handleSort:d,scrollX:N,scrollY:x,sortable:E,sorted:k})))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"dataTable_scrollBody",style:{overflow:"auto"},onScroll:p},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Oe,R({style:{minWidth:I},autoWidth:r,bordered:n,borderless:a,btn:o,dark:i,fixed:c,hover:u,maxHeight:m,responsive:g,responsiveSm:h,responsiveMd:f,responsiveLg:b,responsiveXl:v,scrollY:x,small:w,striped:C,className:"dataTable"},M),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("colgroup",null,l.map((function(t){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("col",{key:t.field,style:{width:"".concat(t.width,"px")||false,minWidth:"".concat(t.width,"px")||false}})}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Re,{color:T,textWhite:S,rows:y,columns:l}),s))))};Me.propTypes={autoWidth:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,bordered:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,borderless:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,btn:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,dark:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,fixed:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,handleSort:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,handleTableBodyScroll:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,hover:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,responsive:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,responsiveLg:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,responsiveMd:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,responsiveSm:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,responsiveXl:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,small:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,sortable:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,sorted:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,striped:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,tbodyColor:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,tbodyTextWhite:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,theadColor:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,theadTextWhite:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,translateScrollHead:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,columns:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object),maxHeight:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,rows:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object),scrollX:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,scrollY:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool};var Ie=function(t){var r=t.value,n=t.onChange,a=t.entries,o=t.label;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{"data-test":"datatable-select",className:"dataTables_length bs-select"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",null,o,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select",{value:r,onChange:function(e){var t=parseInt(e.target.value,10);n(t)},className:"custom-select custom-select-sm form-control form-control-sm",style:{marginLeft:".5rem"}},a.map((function(t){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option",{key:t,value:t},t)})))))};Ie.propTypes={entries:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number).isRequired,label:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object]).isRequired,onChange:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,value:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired};var Be=function(t){var r=t.handleEntriesChange,n=t.displayEntries,a=t.entries,o=t.entriesArr,s=t.paging,l=t.label,i=t.barReverse;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{"data-test":"datatable-entries",className:"col-sm-12 col-md-6"},s&&n&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Ie,{value:a,onChange:r,entries:o,label:l,barReverse:i}))};Be.propTypes={displayEntries:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,entries:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,entriesArr:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number).isRequired,handleEntriesChange:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,label:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]).isRequired,paging:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,barReverse:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool};var Le=function(t){var r=t.value,n=t.onChange,a=t.label;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{"data-test":"datatable-input",className:"dataTables_filter"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",null,a||"Search",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{value:r,onChange:n,type:"search",className:"form-control form-control-sm",placeholder:a||"Search"})))};Le.propTypes={label:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),onChange:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,value:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string};var qe=function(t){var r=t.handleSearchChange,n=t.search,a=t.searching,o=t.label,s=t.barReverse;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{"data-test":"datatable-search",className:"col-sm-12 col-md-6"},a&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Le,{value:n,onChange:r,label:o,barReverse:s}))};qe.propTypes={handleSearchChange:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,search:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,searching:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,barReverse:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,label:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string};var je=function(t){var r=t.activePage,n=t.entries,a=t.filteredRows,o=t.info,s=t.label,l=t.noRecordsFoundLabel,i=t.pages,c=s[0],d=s[1],p=s[2],u=s[3],m=a.length>0&&a[0].message===l,g=r>0?r*n+1:r+1,b=i.length-1>r?i[r].length*(r+1):a.length,f=a.length;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{"data-test":"datatable-info",className:"col-sm-12 col-md-5"},o&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"dataTables_info",role:"status","aria-live":"polite"},m?"".concat(c," 0 ").concat(u):"".concat(c," ").concat(g," ").concat(d," ").concat(b," ").concat(p," ").concat(f," ").concat(u)))};je.propTypes={activePage:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,entries:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,filteredRows:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,info:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,noRecordsFoundLabel:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,pages:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,label:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string)},je.defaultProps={label:["Showing","to","of","entries"]};var We=function(t){var r,n=t.children,a=t.circle,o=t.className,l=t.color,i=t.tag,c=t.size,d=L(t,["children","circle","className","color","tag","size"]),p=classnames__WEBPACK_IMPORTED_MODULE_1___default()((O(r={"pagination-circle":a},"pg-".concat(l),l),O(r,"pagination-".concat(c),c),r),"pagination",o);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(i,R({"data-test":"pagination"},d,{className:p}),n)};We.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,circle:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,color:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,size:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["lg","sm"]),tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string])},We.defaultProps={circle:!1,className:"",color:"",tag:"ul"};var Ae=function(t){var r=t.active,n=t.className,a=t.children,o=t.disabled,l=t.tag,i=L(t,["active","className","children","disabled","tag"]),c=classnames__WEBPACK_IMPORTED_MODULE_1___default()({disabled:o,active:r},"page-item",n);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(l,R({"data-test":"page-item"},i,{className:c}),a)};Ae.propTypes={active:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string])},Ae.defaultProps={active:!1,className:"",disabled:!1,tag:"li"};var ze=function(t){var r=t.children,n=t.className,a=t.tag,o=L(t,["children","className","tag"]),l=classnames__WEBPACK_IMPORTED_MODULE_1___default()("page-link",n);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(a,R({"data-test":"page-link"},o,{className:l}),r)};ze.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string])},ze.defaultProps={tag:"a"};var Fe=function(t){function n(){var e,t;C(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return O(q(t=j(this,(e=I(n)).call.apply(e,[this].concat(a)))),"state",{pages:t.props.pages,pGroups:[]}),O(q(t),"componentDidUpdate",(function(e){var r=t.props.pages;e.pages!==r&&t.setState({pages:r},(function(){return t.groupPages()}))})),O(q(t),"pagesIndexify",(function(){var e=A(t.state.pages);return e.forEach((function(e,t){return e.index=t})),e})),O(q(t),"groupPages",(function(){for(var e=[],r=t.pagesIndexify(),n=t.props.pagesAmount;r.length>0;)e.push(r.splice(0,n));t.setState({pGroups:e})})),O(q(t),"choosePagesGroup",(function(){var e=t.props,r=e.activePage,n=e.pagesAmount,a=t.state.pGroups,o=Math.floor(r/n);return a.length?a[o]:[]})),t}return M(n,react__WEBPACK_IMPORTED_MODULE_0__["Component"]),S(n,[{key:"componentDidMount",value:function(){this.groupPages()}},{key:"render",value:function(){var t=this.props,r=t.activePage,n=t.changeActivePage,a=t.pages,o=t.label;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{"data-test":"datatable-pagination",className:"col-sm-12 col-md-7"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"dataTables_paginate"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(We,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Ae,{disabled:r<=0},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ze,{className:"page-link","aria-label":o[0],onClick:function(){return n(r-1)}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,o[0]))),this.choosePagesGroup().map((function(t){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Ae,{key:Object.keys(t[0])[0]+t.index,active:t.index===r},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ze,{className:"page-link",onClick:function(){return n(t.index)}},t.index+1,t.index===r&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"sr-only"},"(current)")))})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Ae,{disabled:!a.length||r===a.length-1},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ze,{className:"page-link","aria-label":o[1],onClick:function(){return n(r+1)}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,o[1]))))))}}]),n}();Fe.propTypes={activePage:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,changeActivePage:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,label:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string).isRequired,pages:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,pagesAmount:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired};var He=function(t){function n(){var e,t;C(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return O(q(t=j(this,(e=I(n)).call.apply(e,[this].concat(a)))),"state",{activePage:0,columns:t.props.data.columns||[],entries:t.props.entries,filteredRows:t.props.data.rows||[],filterOptions:[],order:t.props.order||[],pages:[],rows:t.props.data.rows||[],search:"",searchSelect:"",sorted:!1,translateScrollHead:0,unsearchable:[]}),O(q(t),"setData",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0;t.setState((function(){return{columns:r,rows:e,filteredRows:t.props.disableRetreatAfterSorting?t.filterRows():e}}),n&&"function"==typeof n&&function(){return n()})})),O(q(t),"setUnsearchable",(function(e){var r=[];e.forEach((function(e){void 0!==e.searchable&&!1===e.searchable&&r.push(e.field)})),t.setState({unsearchable:r})})),O(q(t),"fetchData",(function(e,r){fetch(e).then((function(e){return e.json()})).then((function(e){return t.setData(e.rows,e.columns,r?t.paginateRows:null)})).catch((function(e){return console.log(e)}))})),O(q(t),"pagesAmount",(function(){return Math.ceil(t.state.filteredRows.length/t.state.entries)})),O(q(t),"paginateRowsInitialy",(function(){for(var e=t.state,r=e.rows,n=e.entries,a=e.pages,o=t.pagesAmount(),s=1;s<=o;s++){var l=s*n;a.push(r.slice(l-n,l))}})),O(q(t),"handleEntriesChange",(function(e){t.setState({entries:Array.isArray(e)?e[0]:e},(function(){return t.paginateRows()}))})),O(q(t),"handleSearchChange",(function(e){t.setState({search:e.target.value},(function(){return t.filterRows()}),t.props.onSearch&&"function"==typeof t.props.onSearch&&t.props.onSearch(e.target.value))})),O(q(t),"checkFieldValue",(function(e,t){return e[t]&&"string"!=typeof e[t]?e[t].props.searchvalue:e[t]})),O(q(t),"checkField",(function(e,r,n,a){var o=[t.checkFieldValue(r,e),t.checkFieldValue(n,e)],s=o[0]>o[1]?-1:1;return"asc"===a&&(s*=-1),s})),O(q(t),"sort",(function(e,r,n,a){e.sort((function(e,o){return r&&r.includes(n)?t.checkField(n,e,o,a):"asc"===a?e[n]<o[n]?-1:1:e[n]>o[n]?-1:1}))})),O(q(t),"handleSort",(function(e,r){var n=t.props.onSort;"disabled"!==r&&(t.setState((function(n){var a=t.props.sortRows,o=n.rows,s=n.columns,l="desc"===r?"desc":"asc";return t.sort(o,a,e,l),s.forEach((function(t){"disabled"!==t.sort&&(t.sort=t.field===e?"desc"===t.sort?"asc":"desc":"")})),{rows:o,columns:s,sorted:!0}}),(function(){return t.filterRows()})),n&&"function"==typeof n&&n({column:e,direction:"desc"===r?"desc":"asc"}))})),O(q(t),"filterRows",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.state.search,r=t.state.unsearchable,n=t.props,a=n.sortRows,o=n.noRecordsFoundLabel;t.setState((function(n){var s=n.rows.filter((function(t){for(var n in t)if(!(r.length&&r.includes(n)||"function"==typeof t[n])){var o="";if(a&&"string"!=typeof t[n]?(s=void 0,s=[],function e(t){return"object"===k(t)?t.props.children&&Array.from(t.props.children).map((function(t){return e(t)})):s.push(t)}(t[n]),o=s.join("")):t[n]&&(o=t[n].toString()),o.toLowerCase().includes(e.toLowerCase()))return!0}var s;return!1}));0===s.length&&s.push({message:o,colspan:n.columns.length});var l={};return t.props.disableRetreatAfterSorting?l={filteredRows:s,activePage:n.activePage=n.activePage<n.pages.length||0===n.activePage?n.activePage:n.pages.length-1}:t.props.disableRetreatAfterSorting||(l={filteredRows:s,activePage:0}),l}),(function(){return t.paginateRows()}))})),O(q(t),"paginateRows",(function(){var e=t.pagesAmount();t.setState((function(r){var n=r.pages,a=r.entries,o=r.filteredRows,s=r.activePage,l=t.props,i=l.paging,c=l.disableRetreatAfterSorting;if(n=[],i){for(var d=1;d<=e;d++){var p=d*a;n.push(o.slice(p-a,p))}c||(s=s<n.length||0===s?s:n.length-1)}else n.push(o),s=0;return{pages:n,filteredRows:o,activePage:s}}))})),O(q(t),"changeActivePage",(function(e){var r=t.props.onPageChange;t.setState({activePage:e}),r&&"function"==typeof r&&r({activePage:e+1,pagesAmount:t.pagesAmount()})})),O(q(t),"handleTableBodyScroll",(function(e){t.setState({translateScrollHead:e.target.scrollLeft})})),t}return M(n,react__WEBPACK_IMPORTED_MODULE_0__["Component"]),S(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.data,r=e.paging,n=this.state,a=n.order,o=n.columns,s=n.pages,l=n.rows;"string"==typeof t&&this.fetchData(t,this.paginateRows),a.length>0?this.handleSort(a[0],a[1]):this.handleSort(),this.setUnsearchable(o),r?this.paginateRowsInitialy():s.push(l)}},{key:"componentDidUpdate",value:function(e,t){var r=this.state.columns,n=this.props.data;e.data!==n&&("string"==typeof n?this.fetchData(n):this.setData(n.rows,n.columns,this.paginateRows),this.setUnsearchable(r),this.filterRows())}},{key:"render",value:function(){var t=this.props,r=t.autoWidth,n=t.barReverse,a=t.bordered,o=t.borderless,l=t.btn,i=(t.children,t.className),c=t.dark,d=(t.data,t.disableRetreatAfterSorting,t.displayEntries),p=t.entriesLabel,u=t.entriesOptions,m=(t.exportToCSV,t.filter,t.fixed),g=t.hover,b=t.info,f=t.infoLabel,h=t.maxHeight,v=t.noBottomColumns,y=t.noRecordsFoundLabel,N=(t.onPageChange,t.onSearch,t.onSort,t.order,t.pagesAmount),x=t.paginationLabel,w=t.paging,E=t.responsive,k=t.responsiveLg,C=t.responsiveMd,T=t.responsiveSm,S=t.responsiveXl,O=t.scrollX,P=t.scrollY,D=t.searching,M=t.searchLabel,I=t.small,B=t.sortable,q=(t.sortRows,t.striped),j=t.tbodyColor,W=t.tbodyTextWhite,A=t.theadColor,z=t.theadTextWhite,F=L(t,["autoWidth","barReverse","bordered","borderless","btn","children","className","dark","data","disableRetreatAfterSorting","displayEntries","entriesLabel","entriesOptions","exportToCSV","filter","fixed","hover","info","infoLabel","maxHeight","noBottomColumns","noRecordsFoundLabel","onPageChange","onSearch","onSort","order","pagesAmount","paginationLabel","paging","responsive","responsiveLg","responsiveMd","responsiveSm","responsiveXl","scrollX","scrollY","searching","searchLabel","small","sortable","sortRows","striped","tbodyColor","tbodyTextWhite","theadColor","theadTextWhite"]),H=this.state,_=H.columns,V=H.entries,X=H.filteredRows,Y=(H.filterOptions,H.pages),U=H.activePage,G=H.search,J=H.sorted,K=H.translateScrollHead,Q=classnames__WEBPACK_IMPORTED_MODULE_1___default()("dataTables_wrapper dt-bootstrap4",i);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{"data-test":"datatable",className:Q},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"row".concat(n?" flex-row-reverse":"")},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Be,{paging:w,displayEntries:d,entries:V,handleEntriesChange:this.handleEntriesChange,entriesArr:u,label:p,barReverse:n}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(qe,{handleSearchChange:this.handleSearchChange,search:G,searching:D,label:M,barReverse:n})),!P&&!O&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(De,R({autoWidth:r,bordered:a,borderless:o,btn:l,dark:c,fixed:m,hover:g,noBottomColumns:v,noRecordsFoundLabel:y,responsive:E,responsiveSm:T,responsiveMd:C,responsiveLg:k,responsiveXl:S,small:I,striped:q,theadColor:A,theadTextWhite:z,columns:_,handleSort:this.handleSort,sortable:B,tbodyColor:j,tbodyTextWhite:W,rows:Y[U],sorted:J},F))),(P||O)&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Me,R({autoWidth:r,bordered:a,borderless:o,btn:l,dark:c,fixed:m,handleTableBodyScroll:this.handleTableBodyScroll,hover:g,maxHeight:h,responsive:E,responsiveSm:T,responsiveMd:C,responsiveLg:k,responsiveXl:S,scrollX:O,scrollY:P,small:I,striped:q,theadColor:A,theadTextWhite:z,columns:_,handleSort:this.handleSort,sortable:B,sorted:J,tbodyColor:j,tbodyTextWhite:W,rows:Y[U],translateScrollHead:K},F))),w&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(je,{activePage:U,entries:V,filteredRows:X,info:b,pages:Y,label:f,noRecordsFoundLabel:y}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Fe,{activePage:U,changeActivePage:this.changeActivePage,pages:Y,pagesAmount:N,label:x})))}}]),n}();He.propTypes={autoWidth:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,barReverse:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,bordered:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,borderless:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,btn:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,dark:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,data:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),disableRetreatAfterSorting:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,displayEntries:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,entries:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,entriesLabel:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object]),entriesOptions:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number),exportToCSV:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,filter:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,fixed:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,hover:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,info:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,infoLabel:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),maxHeight:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,noBottomColumns:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,noRecordsFoundLabel:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,onPageChange:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,onSearch:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,onSort:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,order:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string),pagesAmount:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,paginationLabel:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string),paging:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,responsive:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,responsiveLg:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,responsiveMd:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,responsiveSm:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,responsiveXl:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,scrollX:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,scrollY:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,searching:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,searchLabel:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,small:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,sortable:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,sortRows:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string),striped:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,tbodyColor:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,tbodyTextWhite:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,theadColor:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,theadTextWhite:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool},He.defaultProps={autoWidth:!1,barReverse:!1,bordered:!1,borderless:!1,btn:!1,dark:!1,data:{columns:[],rows:[]},disableRetreatAfterSorting:!1,displayEntries:!0,entries:10,entriesLabel:"Show entries",entriesOptions:[10,20,50,100],exportToCSV:!1,fixed:!1,hover:!1,info:!0,infoLabel:["Showing","to","of","entries"],noRecordsFoundLabel:"No matching records found",noBottomColumns:!1,order:[],pagesAmount:8,paging:!0,paginationLabel:["Previous","Next"],responsive:!1,responsiveSm:!1,responsiveMd:!1,responsiveLg:!1,responsiveXl:!1,searching:!0,searchLabel:"Search",scrollX:!1,scrollY:!1,sortable:!0,small:!1,striped:!1,theadColor:"",theadTextWhite:!1,tbodyColor:"",tbodyTextWhite:!1};var _e=function(t){function n(){var e,t;C(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return O(q(t=j(this,(e=I(n)).call.apply(e,[this].concat(a)))),"state",{isOpen:!1}),O(q(t),"getContainer",(function(){return react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(q(t))})),O(q(t),"addEvents",(function(){["click","touchstart","keyup"].forEach((function(e){return document.addEventListener(e,t.handleDocumentClick,!0)}))})),O(q(t),"removeEvents",(function(){["click","touchstart","keyup"].forEach((function(e){return document.removeEventListener(e,t.handleDocumentClick,!0)}))})),O(q(t),"handleDocumentClick",(function(e){var r=e.which,n=e.type,a=e.target,o=r===U,s="keyup"===n;if(!(3===r||s&&!o)){var l=t.getContainer();(!l.contains(a)||l===a||s&&!o)&&t.toggle()}})),O(q(t),"handleFocus",(function(e,t){var r=G,n=J,a=e.which,o=e.target,s=a===r,l=a===n,i=A(t).findIndex((function(e){return e===o}));s&&i>0&&(i-=1),l&&i<t.length-1&&(i+=1),i<0&&(i=0),t[i].focus()})),O(q(t),"handleKeyDown",(function(e){var r=t.state.isOpen,n=t.props.disabled,a=e.which,o=e.target,s=a===Y,l=a===X;if(!(![X,G,J,Y].includes(a)||/button/i.test(o.tagName)&&s||/input|textarea/i.test(o.tagName)||(e.preventDefault(),n))){var i=t.getContainer();if(s&&r&&i!==o&&o.click(),l||!r)return t.toggle(),void i.children[0].focus();var c=i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled)");c.length&&t.handleFocus(e,c)}})),O(q(t),"toggle",(function(){var e=t.state.isOpen;t.setState({isOpen:!e})})),t}return M(n,react__WEBPACK_IMPORTED_MODULE_0__["Component"]),S(n,[{key:"getChildContext",value:function(){var e=this.state.isOpen,t=this.props;return{isOpen:e,dropup:t.dropup,dropright:t.dropright,dropleft:t.dropleft,toggle:this.toggle}}},{key:"componentDidMount",value:function(){this.handleEventsBinding()}},{key:"componentWillUnmount",value:function(){this.removeEvents()}},{key:"componentDidUpdate",value:function(){this.handleEventsBinding()}},{key:"handleEventsBinding",value:function(){this.state.isOpen?this.addEvents():this.removeEvents()}},{key:"render",value:function(){var t,r=V(this.props,["toggle","disabled"]),n=r.className,a=r.children,o=r.dropup,l=r.group,i=r.size,c=r.dropright,d=r.dropleft,p=this.state.isOpen,u=classnames__WEBPACK_IMPORTED_MODULE_1___default()((O(t={"btn-group":l},"btn-group-".concat(i),!!i),O(t,"dropdown",!l),O(t,"show",p),O(t,"dropup",o),O(t,"dropright",c),O(t,"dropleft",d),t),n);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_popper__WEBPACK_IMPORTED_MODULE_6__["Manager"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{"data-test":"dropdown",className:u,onKeyDown:this.handleKeyDown},a))}}]),n}();_e.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,dropleft:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,dropright:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,dropup:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,group:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,size:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,toggle:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func},_e.defaultProps={dropleft:!1,dropright:!1,dropup:!1,tag:"div"},_e.childContextTypes={dropleft:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,dropright:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,dropup:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,isOpen:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,toggle:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired};var Ve=function(t){function n(){var e,t;C(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return O(q(t=j(this,(e=I(n)).call.apply(e,[this].concat(a)))),"onClick",(function(e){var r=t.props,n=r.disabled,a=r.header,o=r.divider,s=r.onClick,l=r.toggle;n||a||o?e.preventDefault():(s&&s(e),l&&t.context.toggle(e))})),O(q(t),"getTabIndex",(function(){var e=t.props,r=e.disabled,n=e.header,a=e.divider;return r||n||a?"-1":"0"})),t}return M(n,react__WEBPACK_IMPORTED_MODULE_0__["Component"]),S(n,[{key:"render",value:function(){var t=this.getTabIndex(),r=V(this.props,["toggle"]),n=r.className,a=r.divider,o=r.tag,l=r.header,i=r.href,c=r.active,d=r.disabled,p=L(r,["className","divider","tag","header","href","active","disabled"]),u=this.props.toggle,m=classnames__WEBPACK_IMPORTED_MODULE_1___default()({active:c,disabled:d,"dropdown-item":!a&&!l,"dropdown-header":l,"dropdown-divider":a},n);"button"===o&&(l?o="h6":a?o="div":i&&(o="a"));var g="button"===o&&(p.onClick||u)?"button":void 0;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(o,R({"data-test":"dropdown-item",type:g},p,{tabIndex:t,className:m,onClick:this.onClick,href:i}))}}]),n}();Ve.propTypes={active:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,divider:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,header:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,onClick:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),toggle:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool},Ve.defaultProps={tag:"button",toggle:!0},Ve.contextTypes={toggle:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func};var Xe=function(t){var r=t.tag,n=t.tabIndex,a=t.role,o=t.attributes,s=t.aria,l=t.d_key,i=t.children;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(r,R({"data-test":"dropdown-menu-component",tabIndex:n,role:a},o,{"aria-hidden":s,key:l}),i)};Xe.propTypes={aria:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,attributes:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,d_key:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,role:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,tabIndex:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any.isRequired};$(".dropup .dropdown-menu {\r\n  top: auto !important;\r\n  bottom: 100% !important;\r\n  transform: translate3d(5px, 5px, 0px) !important;\r\n}\r\n\r\n.dropdown-menu-right {\r\n  left: 0 !important;\r\n  right: auto !important;\r\n}\r\n");var Ye=function(t){function n(){return C(this,n),j(this,I(n).apply(this,arguments))}return M(n,react__WEBPACK_IMPORTED_MODULE_0__["Component"]),S(n,[{key:"render",value:function(){var t,r=this.props,n=r.basic,a=r.children,o=r.className,l=r.color,i=r.flip,c=r.modifiers,d=r.right,p=r.tag,u=L(r,["basic","children","className","color","flip","modifiers","right","tag"]),m=this.context,g=m.isOpen,b=m.dropup,f=m.dropright,v=m.dropleft,y=classnames__WEBPACK_IMPORTED_MODULE_1___default()((O(t={"dropdown-menu-right":d},"dropdown-".concat(l),l),O(t,"show",g),O(t,"basic",n),t),"dropdown-menu",o),N=p;if(g){var x=b?"top":f?"right":v?"left":"bottom",w=d?"end":"start";u.placement="".concat(x,"-").concat(w),u.component=p}return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_popper__WEBPACK_IMPORTED_MODULE_6__["Popper"],{modifiers:c||!i&&{flip:{enabled:!1}},eventsEnabled:!0,positionFixed:!1,placement:u.placement,"data-test":"dropdown-menu"},(function(t){var r=t.placement,n=t.ref,o=t.style;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(N,{ref:n,style:o,"data-placement":r,className:y},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Xe,{isOpen:g,tag:N,tabIndex:"-1",role:"menu",attributes:u,aria:!g,d_key:"dropDownMenu",color:l},a))}))}}]),n}();Ye.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,basic:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,flip:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,modifiers:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,right:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string},Ye.defaultProps={basic:!1,className:"",flip:!0,right:!1,tag:"div",color:!1},Ye.contextTypes={isOpen:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,dropup:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,dropright:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,dropleft:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,color:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["primary","default","secondary","success","dark","danger","info","warning","ins"]),prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool])};var Ue=function(r){var n,a=W(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),2),o=a[0],l=a[1],i=function(e){e.stopPropagation();var t={top:e.clientY,left:e.clientX,time:Date.now()};l(t)},c=r.action,d=r.active,p=r.block,u=r.children,m=r.circle,g=r.className,b=r.color,f=r.disabled,h=r.download,v=r.flat,y=r.gradient,N=r.innerRef,x=r.outline,w=r.role,E=r.rounded,k=r.size,C=r.social,T=r.tag,S=r.target,P=r.type,D=L(r,["action","active","block","children","circle","className","color","disabled","download","flat","gradient","innerRef","outline","role","rounded","size","social","tag","target","type"]),M=classnames__WEBPACK_IMPORTED_MODULE_1___default()(""!==b&&"btn-".concat(b),b&&x&&"btn-outline-".concat(b),"btn","Ripple-parent",y&&"".concat(y,"-gradient"),(O(n={active:d,"btn-circle":m,"btn-block":p,"btn-action":c},"btn-".concat(C),C),O(n,"btn-".concat(k),k),O(n,"disabled",f),n),g);return D.href&&"button"===T&&(T="a"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(T,R({"data-test":"button",type:"button"!==T||P?P:"button",target:S,role:"a"!==T||w?w:"button",className:M,ref:N,onMouseUp:i,onTouchStart:i},D,{download:h,disabled:f}),u,!f&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ie,{cursorPos:o,outline:x,flat:v||E}))};Ue.defaultProps={color:"default",tag:"button"},Ue.propTypes={action:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,active:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,block:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,circle:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,color:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,download:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,flat:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,innerRef:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),onClick:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,role:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,size:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,social:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,target:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,type:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string};var Ge=function(t){function r(){var e,t;C(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return O(q(t=j(this,(e=I(r)).call.apply(e,[this].concat(a)))),"onClick",(function(e){var r=t.props,n=r.disabled,a=r.nav,o=r.tag,s=r.onClick,l=t.context.toggle;n?e.preventDefault():(a&&!o&&e.preventDefault(),s&&s(e),l(e))})),t}return M(r,react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),S(r,[{key:"render",value:function(){var t=this,r=this.props,n=r.className,a=r.color,o=r.caret,l=r.nav,i=r.tag,c=L(r,["className","color","caret","nav","tag"]),d=this.context.isOpen,p=c["aria-label"]||"Toggle Dropdown",u=classnames__WEBPACK_IMPORTED_MODULE_1___default()({"dropdown-toggle":o,"nav-link":l},n),m=c.children||react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"sr-only"},p),g=i;return l&&!i?(g="a",c.href="#"):i||(g=Ue,c.color=a),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_popper__WEBPACK_IMPORTED_MODULE_6__["Reference"],{"data-test":"dropdown-toggle"},(function(r){var n=r.ref;return i||l?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(g,R({},c,{className:u,onClick:t.onClick,"aria-expanded":d,ref:n}),m):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(g,R({},c,{className:u,onClick:t.onClick,"aria-expanded":d,innerRef:n}),m)}))}}]),r}();Ge.propTypes={"aria-haspopup":prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,caret:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,color:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,nav:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,onClick:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string])},Ge.defaultProps={"aria-haspopup":!0,color:"secondary"},Ge.contextTypes={isOpen:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,toggle:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired};var Je=function(t){var r=t.color,n=t.className,a=t.tag,o=L(t,["color","className","tag"]),l=classnames__WEBPACK_IMPORTED_MODULE_1___default()("edge-header",r,n);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(a,R({"data-test":"edgeHeader"},o,{className:l}))};Je.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,color:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string])},Je.defaultProps={color:"deep-purple",tag:"div"};var Ke=function(t){var r=t.color,n=t.children,a=t.className,o=t.tag,l=L(t,["color","children","className","tag"]),i=classnames__WEBPACK_IMPORTED_MODULE_1___default()("page-footer",r&&r,a);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(o,R({"data-test":"footer"},l,{className:i}),n)};Ke.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,color:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string])},Ke.defaultProps={tag:"footer"};var Qe=function(r){var n=W(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),2),a=n[0],o=n[1],l=function(e){var t={top:e.clientY,left:e.clientX,time:Date.now()};o(t)},i=r.className,c=r.waves,d=r.children,p=L(r,["className","waves","children"]),u=classnames__WEBPACK_IMPORTED_MODULE_1___default()("form-inline",c&&"Ripple-parent",i);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form",R({"data-test":"form-inline"},p,{className:u,onMouseDown:l,onTouchStart:l}),d,c&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ie,{cursorPos:a}))};Qe.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,waves:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool};var Ze=function(t){var r=t.className,n=t.tag,a=L(t,["className","tag"]),o=classnames__WEBPACK_IMPORTED_MODULE_1___default()("container free-bird",r);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(n,R({"data-test":"freebird"},a,{className:o}))};Ze.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string])},Ze.defaultProps={tag:"div"};$(".hamburger-button__checkbox {\r\n  display: none;\r\n}\r\n\r\n.hamburger-button__button {\r\n  background-color: transparent;\r\n  height: 100%;\r\n  width: 100%;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  top: -5px;\r\n}\r\n\r\nlabel.hamburger-button__button {\r\n  margin-bottom: 0;\r\n}\r\n\r\n#nav-icon1 {\r\n  width: 1.5em;\r\n  height: 1.5em;\r\n  position: relative;\r\n  -webkit-transform: rotate(0deg);\r\n  -moz-transform: rotate(0deg);\r\n  -o-transform: rotate(0deg);\r\n  transform: rotate(0deg);\r\n  -webkit-transition: .5s ease-in-out;\r\n  -moz-transition: .5s ease-in-out;\r\n  -o-transition: .5s ease-in-out;\r\n  transition: .5s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n\r\n#nav-icon1 span {\r\n  display: block;\r\n  position: absolute;\r\n  height: 3px;\r\n  width: 100%;\r\n  border-radius: 1px;\r\n  background-color: #fff;\r\n  opacity: 1;\r\n  left: 0;\r\n  -webkit-transform: rotate(0deg);\r\n  -moz-transform: rotate(0deg);\r\n  -o-transform: rotate(0deg);\r\n  transform: rotate(0deg);\r\n  -webkit-transition: .25s ease-in-out;\r\n  -moz-transition: .25s ease-in-out;\r\n  -o-transition: .25s ease-in-out;\r\n  transition: .25s ease-in-out;\r\n}\r\n\r\n#nav-icon1 span:nth-child(1) {\r\n  top: 5px;\r\n}\r\n\r\n#nav-icon1 span:nth-child(2) {\r\n  top: 16px;\r\n}\r\n\r\n#nav-icon1 span:nth-child(3) {\r\n  top: 27px;\r\n}\r\n\r\n.hamburger-button__checkbox:checked+#nav-icon1 span:nth-child(1) {\r\n  top: 16px;\r\n  -webkit-transform: rotate(135deg);\r\n  -moz-transform: rotate(135deg);\r\n  -o-transform: rotate(135deg);\r\n  transform: rotate(135deg);\r\n}\r\n\r\n.hamburger-button__checkbox:checked+#nav-icon1 span:nth-child(2) {\r\n  opacity: 0;\r\n  left: -60px;\r\n}\r\n\r\n.hamburger-button__checkbox:checked+#nav-icon1 span:nth-child(3) {\r\n  top: 16px;\r\n  -webkit-transform: rotate(-135deg);\r\n  -moz-transform: rotate(-135deg);\r\n  -o-transform: rotate(-135deg);\r\n  transform: rotate(-135deg);\r\n}\r\n");var $e=function(t){var r=t.id,n=t.color,a=t.className,o=t.isOpen,l=t.onClick,i=classnames__WEBPACK_IMPORTED_MODULE_1___default()("hamburger-button__button",a);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{"data-test":"hamburger-toggler",type:"checkbox",defaultChecked:o||!1,onChange:l,className:"hamburger-button__checkbox",id:r}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",{id:"nav-icon1",className:i,htmlFor:r},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{style:{background:n}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{style:{background:n}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{style:{background:n}})))};$e.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,color:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,id:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string};var et=function(t){function n(){var e,t;C(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return O(q(t=j(this,(e=I(n)).call.apply(e,[this].concat(a)))),"state",{stateWidth:"",stateHeight:"",ratio:""}),O(q(t),"componentDidMount",(function(){var e=t.props.ratio,r=t.props,n=r.width,a=r.height,o=9/16;if(e){var s=e.split("by")[0]/e.split("by")[1];"number"==typeof o&&(o=s)}n&&a||(n?a=n*o:a&&(n=a*(1/o)),t.setState(D({},t.state,{width:n,height:a,ratio:e})))})),t}return M(n,react__WEBPACK_IMPORTED_MODULE_0__["Component"]),S(n,[{key:"render",value:function(){var t=this.props,r=t.allowFullScreen,n=t.className,a=t.id,o=t.name,l=t.onMouseOver,i=t.onMouseOut,c=t.onLoad,d=t.sandbox,p=t.src,u=t.style,m=t.title,g=void 0===m?"":m,b=t.ratio,f=t.height,h=t.width,v=this.state,y=v.stateWidth,N=v.stateHeight,x=classnames__WEBPACK_IMPORTED_MODULE_1___default()("embed-responsive-item",n),w=classnames__WEBPACK_IMPORTED_MODULE_1___default()(!(f||h)&&"embed-responsive",b?"embed-responsive-".concat(b):"embed-responsive-16by9"),E={src:p,id:a||!1,frameBorder:"0",target:"_parent",allowFullScreen:r||!0,height:N||"100%",name:o||void 0,width:y||"100%",onLoad:c||void 0,onMouseOver:l||void 0,onMouseOut:i||void 0,sandbox:d||void 0,style:u||void 0};return E=K(E),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{"data-test":"iframe",className:w},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe",R({title:g,className:x},E)))}}]),n}();et.propTypes={src:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,allowFullScreen:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,height:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,id:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,name:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,onLoad:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,onMouseOut:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,onMouseOver:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,ratio:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,sandbox:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,styles:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,title:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,width:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number};var tt=function(t){function r(){var t,n;C(this,r);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return O(q(n=j(this,(t=I(r)).call.apply(t,[this].concat(o)))),"state",{innerValue:n.props.value||n.props.valueDefault,isFocused:!1,isPristine:!0}),O(q(n),"inputElementRef",react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef()),O(q(n),"onBlur",(function(e){e.stopPropagation();var t=n.props.onBlur;n.setState({isFocused:!1}),t&&t(e)})),O(q(n),"onFocus",(function(e){e.stopPropagation();var t=n.props.onFocus;n.setState({isFocused:!0}),t&&t(e)})),O(q(n),"onChange",(function(e){e.stopPropagation();var t=n.props,r=t.type,a=t.onChange,o=t.getValue;"checkbox"!==r&&"radio"!==r&&n.setState({innerValue:e.target.value,isPristine:!1}),a&&a(e),o&&o(e.target.value)})),O(q(n),"onInput",(function(e){e.stopPropagation();var t=n.props,r=t.type,a=t.onInput;"checkbox"!==r&&"radio"!==r&&n.setState({innerValue:e.target.value,isPristine:!1}),a&&a(e)})),O(q(n),"setFocus",(function(){n.inputElementRef.current.focus()})),n}return M(r,react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),S(r,[{key:"componentDidMount",value:function(){var e=this,t=this.props,r=t.inputRef,n=t.focused,a=t.indeterminate;r&&r(this.inputElementRef.current),!0===n&&this.setState({isFocused:n},(function(){e.setFocus()})),a&&(this.inputElementRef.current.indeterminate=!0)}},{key:"render",value:function(){var t=this,r=this.props,n=r.background,a=r.children,o=r.className,l=r.containerClass,i=r.disabled,c=r.error,d=r.filled,p=(r.focused,r.gap),u=(r.getValue,r.group),m=r.hint,g=r.icon,b=r.iconBrand,f=r.iconClass,h=r.iconLight,v=r.iconRegular,y=r.iconSize,N=r.id,x=(r.indeterminate,r.inputRef,r.label),w=r.labelClass,E=r.labelId,k=r.labelStyles,C=r.noTag,T=r.onIconClick,S=r.onIconMouseEnter,O=r.onIconMouseLeave,P=r.outline,D=r.size,M=r.success,I=r.tag,B=r.type,q=r.validate,j=(r.value,r.valueDefault,L(r,["background","children","className","containerClass","disabled","error","filled","focused","gap","getValue","group","hint","icon","iconBrand","iconClass","iconLight","iconRegular","iconSize","id","indeterminate","inputRef","label","labelClass","labelId","labelStyles","noTag","onIconClick","onIconMouseEnter","onIconMouseLeave","outline","size","success","tag","type","validate","value","valueDefault"])),W=this.state,A=W.innerValue,z=W.isFocused,F=(!!A||!!m||z||0===A)&&"checkbox"!==B&&"radio"!==B,H="",_="";"textarea"===B?(_=P?"form-control":"md-textarea form-control",H="textarea"):(_="form-control",H="input",j.type=B),j.disabled=i;var V=classnames__WEBPACK_IMPORTED_MODULE_1___default()(_,!!D&&"form-control-".concat(D),!!q&&"validate",!!d&&"filled-in",!!p&&"with-gap","checkbox"===B&&(!p&&"form-check-input"),"radio"===B&&"form-check-input",o),X=classnames__WEBPACK_IMPORTED_MODULE_1___default()("checkbox"===B||"radio"===B?"boolean"==typeof x&&x?"d-flex":"form-check":"md-form",!!u&&"form-group",!!D&&"form-".concat(D),P&&"md-outline",n&&"md-bg",l),Y=classnames__WEBPACK_IMPORTED_MODULE_1___default()(!(!F||!z)&&"active",f,"prefix"),U=classnames__WEBPACK_IMPORTED_MODULE_1___default()(!!F&&"active",!!i&&"disabled","checkbox"===B&&"form-check-label","radio"===B&&"form-check-label",w),G=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,g&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Z,{icon:g,size:y,brand:b,light:h,regular:v,className:Y,onClick:T||t.setFocus,onMouseEnter:S,onMouseLeave:O}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H,R({"data-test":"input"},j,{className:V,id:N,placeholder:m,ref:t.inputElementRef,value:A,onBlur:t.onBlur,onChange:t.onChange,onInput:t.onInput,onFocus:t.onFocus,"aria-disabled":i})),x&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",{className:U,htmlFor:N,"data-error":c,"data-success":M,id:E,onClick:t.setFocus,style:k,"aria-labelledby":E},x),a)};return C?G():react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(I,{className:X},G())}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.value!==t.value?{innerValue:e.value}:null}}]),r}();tt.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,containerClass:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,error:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,filled:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,focused:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),gap:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,getValue:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,group:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,hint:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,icon:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,iconBrand:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,iconClass:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,iconLight:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,iconRegular:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,iconSize:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,id:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,indeterminate:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,inputRef:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func]),label:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool]),labelClass:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,labelId:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,labelStyles:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,noTag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,onBlur:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,onChange:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,onFocus:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,onIconClick:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,onIconMouseEnter:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,onIconMouseLeave:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,onInput:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,outline:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,size:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,success:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),type:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,validate:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,value:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),valueDefault:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string])},tt.defaultProps={className:"",containerClass:"",disabled:!1,error:"",filled:!1,gap:!1,group:!1,hint:void 0,icon:"",iconBrand:!1,focused:!1,indeterminate:!1,iconClass:"",iconLight:!1,onIconMouseEnter:function(){},onIconMouseLeave:function(){},iconRegular:!1,iconSize:void 0,id:void 0,noTag:!1,outline:!1,label:" ",labelClass:"",labelId:"",size:"",success:"",tag:"div",type:"text",validate:!1,valueDefault:""};var rt=function(t){var r=t.append,n=t.appendClassName,a=t.ariaLabel,o=t.children,l=t.className,i=t.containerClassName,c=t.containerId,d=t.hint,p=t.id,u=t.inputs,m=(t.inputTag,t.label),g=t.labelClassName,b=t.material,f=t.prepend,h=t.prependClassName,v=t.size,y=t.tag,N=t.textClassName,x=t.type,w=t.value,E=t.valueDefault,k=t.getValue,C=t.onChange,T=L(t,["append","appendClassName","ariaLabel","children","className","containerClassName","containerId","hint","id","inputs","inputTag","label","labelClassName","material","prepend","prependClassName","size","tag","textClassName","type","value","valueDefault","getValue","onChange"]),S=classnames__WEBPACK_IMPORTED_MODULE_1___default()("input-group",b&&"md-form",v&&"input-group-".concat(v),i),O=classnames__WEBPACK_IMPORTED_MODULE_1___default()(l),P=classnames__WEBPACK_IMPORTED_MODULE_1___default()("input-group-prepend",h),D=classnames__WEBPACK_IMPORTED_MODULE_1___default()("input-group-append",n),M=classnames__WEBPACK_IMPORTED_MODULE_1___default()("input-group-text",b&&"md-addon",N);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,m&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",{htmlFor:p,className:g},m),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(y,R({"data-test":"input-group"},T,{className:S,id:c}),f&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:P},"string"==typeof f?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:M},f):f),u||react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(tt,{noTag:!0,type:x,className:O,id:p,value:w,valueDefault:E,hint:d,"aria-label":a,onChange:function(e){e.persist(),C&&C(e),k&&k(e.target.value)}}),r&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:D},"string"==typeof r?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:M},r):r),o))};rt.propTypes={append:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),appendClassNames:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,ariaLabel:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,containerClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,containerId:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,getValue:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,hint:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,id:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,inputs:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,label:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,labelClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,material:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,onChange:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prepend:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,prependClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,size:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),textClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,type:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,value:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,valueDefault:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string},rt.defaultProps={tag:"div",type:"text"};var nt=function(t){var r=t.className,n=(t.getValue,L(t,["className","getValue"])),a=classnames__WEBPACK_IMPORTED_MODULE_1___default()("form-control",r);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_numeric_input__WEBPACK_IMPORTED_MODULE_7___default.a,R({"data-test":"input-numeric"},n,{onChange:function(e){t.getValue&&t.getValue(e)},className:a}))};nt.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,getValue:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func};var at=function(t){var r=t.className,n=t.children,a=t.fluid,o=L(t,["className","children","fluid"]),l=classnames__WEBPACK_IMPORTED_MODULE_1___default()("jumbotron",!!a&&"jumbotron-fluid",r);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",R({"data-test":"jumbotron"},o,{className:l}),n)};at.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,fluid:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool};var ot=function(r){var n=W(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),2),a=n[0],o=n[1],l=r.active,i=r.children,c=r.className,d=r.disabled,p=(r.link,r.to),u=L(r,["active","children","className","disabled","link","to"]),m=classnames__WEBPACK_IMPORTED_MODULE_1___default()("nav-link",d?"disabled":"Ripple-parent",l&&"active",c),g=function(e){if(!d){e.stopPropagation();var t={top:e.clientY,left:e.clientX,time:Date.now()};o(t)}};return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"],R({"data-test":"link-router",className:m,onMouseUp:g,onTouchStart:g,to:p},u),i,!d&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ie,{cursorPos:a}))};ot.propTypes={active:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,to:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string},ot.defaultProps={active:!1,className:"",disabled:!1};var st=function(t){var r=t.children,n=t.className,a=t.tag,o=L(t,["children","className","tag"]),l=classnames__WEBPACK_IMPORTED_MODULE_1___default()("list-group",n);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(a,R({"data-test":"list-group"},o,{className:l}),r)};st.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string])},st.defaultProps={tag:"ul"};var lt=function(t){var r,n=t.active,a=t.children,o=t.className,l=t.color,i=t.disabled,c=t.hover,d=(t.success,t.info,t.warning,t.danger,t.tag),p=L(t,["active","children","className","color","disabled","hover","success","info","warning","danger","tag"]),u=classnames__WEBPACK_IMPORTED_MODULE_1___default()("list-group-item",o,(O(r={active:n,disabled:i},"list-group-item-".concat(l)," color"),O(r,"list-group-item-action",c),r));return p.href&&"li"===d&&(d="a"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(d,R({"data-test":"list-group-item"},p,{className:u}),a)};lt.propTypes={active:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,color:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["primary","secondary","success","danger","warning","info","light","dark"]),danger:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,disabled:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,hover:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,info:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,success:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),warning:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool},lt.defaultProps={tag:"li"};var it=function(t){var r,n=t.body,a=t.bottom,o=t.className,l=t.heading,i=t.left,c=t.list,d=t.middle,p=t.object,u=t.right,m=t.round,g=t.thumbnail,b=t.figure,f=t.figImg,h=t.figCap,v=t.figCapRight,y=t.figCapLeft,N=t.tag,x=t.top,w=L(t,["body","bottom","className","heading","left","list","middle","object","right","round","thumbnail","figure","figImg","figCap","figCapRight","figCapLeft","tag","top"]);r=l?"h4":i||u?"a":p||f?"img":c?"ul":b?"figure":h||v||y?"figcaption":"div";var E=N||r,k=classnames__WEBPACK_IMPORTED_MODULE_1___default()({"media-body":n,"mt-0":l,"media-left":i,"media-right":u,"align-self-start":x,"align-self-center":d,"align-self-end":a,"media-object":p,"img-thumbnail":g,"media-list":c,figure:b,"figure-img":f,"figure-caption text-center":h,"figure-caption text-right":v,"figure-caption text-left":y,"rounded-circle z-depth-1-half":m},!(n||l||i||u||x||a||d||p||c||h||v||v||f||b)&&"media",o);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(E,R({"data-test":"media"},w,{className:k}))};it.propTypes={body:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,bottom:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,figCap:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,figCapLeft:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,figCapRight:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,figImg:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,figure:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,heading:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,left:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,list:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,middle:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,object:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,right:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,round:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),thumbnail:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,top:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool};$(".overflow-y-scroll {\r\n  overflow-y: scroll !important;\r\n}\r\n");var ct=function(t){function n(){var t,r;C(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return O(q(r=j(this,(t=I(n)).call.apply(t,[this].concat(o)))),"state",{isOpen:r.props.isOpen||!1}),O(q(r),"modalContent",react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef()),O(q(r),"componentDidMount",(function(){document.body.classList.add("modal-open")})),O(q(r),"componentWillUnmount",(function(){document.body.classList.remove("modal-open")})),O(q(r),"componentDidUpdate",(function(e,t){var n=r.props,a=n.isOpen,o=n.overflowScroll?"overflow-y-scroll":"overflow-hidden";t.isOpen!==a&&r.setState({isOpen:a},(function(){a?document.body.classList.add(o):document.body.classList.remove(o)}))})),O(q(r),"handleOnEntered",(function(e,t){"backdrop"===e&&!1===r.props.fade||(t.classList.add("show"),r.props.autoFocus&&t.focus(),"modal"===e&&r.props.showModal&&r.props.showModal())})),O(q(r),"handleOnExit",(function(e,t){"backdrop"===e&&!1===r.props.fade||(t.classList.remove("show"),"modal"===e&&r.props.hideModal&&r.props.hideModal())})),O(q(r),"handleOnExited",(function(){r.props.hiddenModal&&r.props.hiddenModal()})),O(q(r),"handleBackdropClick",(function(e){!r.props.backdrop||e.target.closest('[role="dialog"]')&&!e.target.classList.contains("modal")||e.clientX>e.target.clientWidth||e.clientY>e.target.clientHeight||r.modalContent.contains(e.target)||r.props.disableBackdrop||r.props.toggle()})),O(q(r),"handleEscape",(function(e){r.props.keyboard&&27===e.keyCode&&(e.preventDefault(),r.props.toggle())})),r}return M(n,react__WEBPACK_IMPORTED_MODULE_0__["Component"]),S(n,[{key:"render",value:function(){var t,r=this,n=this.props,a=n.animation,o=n.backdrop,l=n.backdropClassName,c=n.modalStylesWithoutBackdrop,d=n.cascading,p=n.centered,u=n.children,m=n.className,g=n.contentClassName,b=n.disableFocusTrap,f=n.fade,h=n.frame,v=n.fullHeight,y=n.id,N=n.inline,x=n.modalStyle,E=n.noClickableBodyWithoutBackdrop,k=n.position,C=n.role,T=n.side,S=n.size,P=n.tabIndex,M=n.wrapClassName,I=n.wrapperStyles,B=this.state.isOpen,L=f?300:0,q=D({position:"fixed"},c),j=!o&&B&&!E,W=classnames__WEBPACK_IMPORTED_MODULE_1___default()((O(t={"cascading-modal":d,"modal-side":T,"modal-full-height":v,"modal-frame":h,"modal-dialog-centered":p},"modal-".concat(S),S),O(t,"modal-".concat(k),k),O(t,"modal-notify white-text modal-".concat(x),x),t),"modal-dialog",m),A=k.split("-"),z=classnames__WEBPACK_IMPORTED_MODULE_1___default()({modal:!N,fade:f,top:f&&!a&&!k,animation:f&&a},f&&k&&k&&A.length>1?A[1]:A[0],M),F=classnames__WEBPACK_IMPORTED_MODULE_1___default()("modal-backdrop",f?"fade":"show",l),H=classnames__WEBPACK_IMPORTED_MODULE_1___default()("modal-content",g),_=K({style:{display:"block",position:j&&"relative",width:j&&0},id:y,tabIndex:P,role:C,"aria-hidden":"true"}),V=j?q:{},X=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",R({"data-test":"modal",onKeyUp:this.handleEscape,className:z,style:I},_),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:V,className:W,role:"document"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{ref:function(e){return r.modalContent=e},className:H},u)));return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,o&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_3__["Transition"],{timeout:L,in:B,appear:B,mountOnEnter:!0,unmountOnExit:!0,onEntered:function(e){return r.handleOnEntered("backdrop",e)},onExit:function(e){return r.handleOnExit("backdrop",e)},onExited:this.handleOnExited},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:F})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_3__["Transition"],{timeout:L,in:B,appear:B,mountOnEnter:!0,unmountOnExit:!0,onMouseDown:function(e){return r.handleBackdropClick(e)},onEntered:function(e){return r.handleOnEntered("modal",e)},onExit:function(e){return r.handleOnExit("modal",e)}},b?X:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(focus_trap_react__WEBPACK_IMPORTED_MODULE_9___default.a,null,X)))}}]),n}();ct.defaultProps={autoFocus:!0,backdrop:!0,modalStylesWithoutBackdrop:{top:0,left:0,right:0,bottom:0},backdropTransitionTimeout:150,disableBackdrop:!1,disableFocusTrap:!0,fade:!0,isOpen:!1,keyboard:!0,modalTransitionTimeout:300,overflowScroll:!0,position:"",role:"dialog",tabIndex:"-1",zIndex:1050,noClickableBodyWithoutBackdrop:!1},ct.propTypes={animation:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,backdrop:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,backdropClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,cascading:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,centered:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,contentClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,disableBackdrop:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,disableFocusTrap:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,fade:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,frame:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,fullHeight:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,hiddenModal:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,hideModal:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,id:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,keyboard:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,modalClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,modalStyle:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,noClickableBodyWithoutBackdrop:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,overflowScroll:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,position:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,role:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,showModal:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,side:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,size:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,tabIndex:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,wrapClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,wrapperStyles:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object};var dt=function(t){var r=t.className,n=t.children,a=L(t,["className","children"]),o=classnames__WEBPACK_IMPORTED_MODULE_1___default()("modal-body",r);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",R({"data-test":"modal-body"},a,{className:o}),n)};dt.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string};var pt=function(t){var r=t.className,n=t.children,a=t.center,o=t.start,l=t.end,i=t.around,c=t.between,d=L(t,["className","children","center","start","end","around","between"]),p=classnames__WEBPACK_IMPORTED_MODULE_1___default()("modal-footer",r,{"justify-content-start":o,"justify-content-end":l,"justify-content-center":a,"justify-content-between":c,"justify-content-around":i});return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",R({"data-test":"modal-footer"},d,{className:p}),n)};pt.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string};var ut=function(t){var r,n=t.className,a=t.children,o=t.toggle,l=t.tag,i=t.closeAriaLabel,c=t.titleClass,d=L(t,["className","children","toggle","tag","closeAriaLabel","titleClass"]),p=classnames__WEBPACK_IMPORTED_MODULE_1___default()("modal-header",n),u=classnames__WEBPACK_IMPORTED_MODULE_1___default()("modal-title",c);return o&&(r=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{type:"button",onClick:o,className:"close","aria-label":i},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{"aria-hidden":"true"},String.fromCharCode(215)))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",R({"data-test":"modal-header"},d,{className:p}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(l,{className:u},a),r)};ut.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,closeAriaLabel:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),toggle:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func},ut.defaultProps={tag:"h4",closeAriaLabel:"Close"};var mt=function(t){var r=t.children,n=t.className,a=t.tag,o=t.tabs,l=t.color,i=t.classicTabs,c=t.pills,d=t.header,p=L(t,["children","className","tag","tabs","color","classicTabs","pills","header"]),u=classnames__WEBPACK_IMPORTED_MODULE_1___default()("nav",o&&"md-tabs",c&&"md-pills",d&&"nav-pills card-header-pills",!(!l||o||i||c)&&l,!(!c||!l)&&"pills-".concat(l),!(!o&&!i||!l)&&"tabs-".concat(l),n);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(a,R({"data-test":"nav"},p,{className:u}),r)};mt.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,classicTabs:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,color:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,header:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,pills:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,tabs:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string])},mt.defaultProps={tag:"ul",classicTabs:!1,pills:!1,tabs:!1,header:!1};var gt=function(t){function n(){var e,t;C(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return O(q(t=j(this,(e=I(n)).call.apply(e,[this].concat(a)))),"state",{isCollapsed:!1}),O(q(t),"handleScroll",(function(){var e=t.props.scrollingNavbarOffset||50;window.pageYOffset>e?t.setState({isCollapsed:!0}):t.setState({isCollapsed:!1})})),t}return M(n,react__WEBPACK_IMPORTED_MODULE_0__["Component"]),S(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.scrolling,r=e.scrollingNavbarOffset;(t||r)&&window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.scrolling,r=e.scrollingNavbarOffset;(t||r)&&window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var t,r=this.props,n=r.expand,a=r.light,o=r.dark,l=r.sticky,i=r.fixed,c=r.scrolling,d=r.color,p=r.className,u=r.scrollingNavbarOffset,m=r.tag,g=r.double,b=r.transparent,f=L(r,["expand","light","dark","sticky","fixed","scrolling","color","className","scrollingNavbarOffset","tag","double","transparent"]),h=this.state.isCollapsed,v=classnames__WEBPACK_IMPORTED_MODULE_1___default()((O(t={"navbar-light":a,"navbar-dark":o},"sticky-".concat(l),l),O(t,"fixed-".concat(i),i),O(t,"scrolling-navbar",c||u),O(t,"double-nav",g),O(t,"top-nav-collapse",h),O(t,"".concat(d),d&&b?h:d),t),"navbar",function(e){return!1!==e&&(!0===e||"xs"===e?"navbar-expand":"navbar-expand-".concat(e))}(n),p);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(m,R({"data-test":"navbar"},f,{className:v,role:"navigation"}))}}]),n}();gt.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,color:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,dark:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,double:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,expand:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),fixed:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,light:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,scrolling:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,scrollingNavbarOffset:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,sticky:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),transparent:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool},gt.defaultProps={tag:"nav",expand:!1,scrolling:!1};var bt=function(t){var r=t.className,n=t.href,a=L(t,["className","href"]),o=classnames__WEBPACK_IMPORTED_MODULE_1___default()("navbar-brand",r);return n?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["NavLink"],R({"data-test":"navbar-brand",to:n},a,{className:o})):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",R({"data-test":"navbar-brand"},a,{className:o}))};bt.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,href:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string};var ft=function(t){var r=t.children,n=t.className,a=t.right,o=t.left,l=t.tag,i=L(t,["children","className","right","left","tag"]),c=classnames__WEBPACK_IMPORTED_MODULE_1___default()("navbar-nav",a?"ml-auto":o?"mr-auto":"justify-content-around w-100",n);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(l,R({"data-test":"navbar-nav"},i,{className:c}),r)};ft.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,left:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,right:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string])},ft.defaultProps={tag:"ul"};var ht=function(t){var r=t.right,n=t.left,a=t.children,o=t.className,l=t.tag,i=t.image,c=L(t,["right","left","children","className","tag","image"]),d=classnames__WEBPACK_IMPORTED_MODULE_1___default()({"navbar-toggler-right":r,"navbar-toggler-left":n},"navbar-toggler",o);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(l,R({"data-test":"navbar-toggler"},c,{className:d}),a||(i?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"navbar-toggler-icon",style:{backgroundImage:'url("'.concat(i,'")')}}):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"navbar-toggler-icon"})))};ht.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,image:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,left:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,right:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),type:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string},ht.defaultProps={tag:"button",type:"button"};var vt=function(t){var r=t.children,n=t.className,a=t.active,o=t.text,l=t.tag,i=L(t,["children","className","active","text","tag"]),c=classnames__WEBPACK_IMPORTED_MODULE_1___default()("nav-item",a&&"active",o&&"navbar-text",n);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(l,R({"data-test":"nav-item"},i,{className:c}),r)};vt.propTypes={active:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string])},vt.defaultProps={tag:"li"};var yt=function(r){var n=W(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),2),a=n[0],o=n[1],l=r.children,i=r.className,c=r.disabled,d=r.active,p=r.to,u=r.link,m=L(r,["children","className","disabled","active","to","link"]),g=classnames__WEBPACK_IMPORTED_MODULE_1___default()("nav-link",c?"disabled":"Ripple-parent",d&&"active",i),b=function(e){if(!c){e.stopPropagation();var t={top:e.clientY,left:e.clientX,time:Date.now()};o(t)}},f=u?ot:react_router_dom__WEBPACK_IMPORTED_MODULE_8__["NavLink"];return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(f,R({"data-test":"nav-link",className:g,onMouseUp:b,onTouchStart:b,to:p},m),l,!c&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ie,{cursorPos:a}))};yt.propTypes={active:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,link:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,to:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string},yt.defaultProps={active:!1,className:"",disabled:!1,link:!1};var Nt=function(t){function r(){var e,t;C(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return O(q(t=j(this,(e=I(r)).call.apply(e,[this].concat(a)))),"state",{componentState:t.props.show?"show":"hide"}),O(q(t),"hide",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;"object"===k(e)&&(e=0),setTimeout((function(){t.setState({componentState:""},(function(){setTimeout((function(){t.setState({componentState:"hide"})}),150)}))}),e)})),t}return M(r,react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),S(r,[{key:"componentDidMount",value:function(){var e=this.props.autohide;e>0&&this.hide(e)}},{key:"render",value:function(){var t=this.props,r=t.tag,n=t.className,a=(t.show,t.fade),o=t.message,l=t.bodyClassName,i=t.icon,c=t.iconClassName,d=t.title,p=t.titleClassName,u=t.text,m=t.closeClassName,g=L(t,["tag","className","show","fade","message","bodyClassName","icon","iconClassName","title","titleClassName","text","closeClassName"]),b=this.state.componentState,f=classnames__WEBPACK_IMPORTED_MODULE_1___default()("toast",a&&"fade",b,n),h=classnames__WEBPACK_IMPORTED_MODULE_1___default()("toast-header",p),v=classnames__WEBPACK_IMPORTED_MODULE_1___default()("mr-2",c),y=classnames__WEBPACK_IMPORTED_MODULE_1___default()("toast-body",l),N=classnames__WEBPACK_IMPORTED_MODULE_1___default()("ml-2","mb-1",m);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(r,R({"data-test":"notification"},g,{className:f}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:h},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Z,{icon:i,className:v,size:"lg"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong",{className:"mr-auto"},d),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small",null,u),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(we,{className:N,onClick:this.hide})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:y},o))}}]),r}();Nt.propTypes={autohide:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,bodyClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,bodyColor:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,closeClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,fade:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,iconClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,message:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,show:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),text:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,title:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,titleClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,titleColor:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string},Nt.defaultProps={icon:"square",tag:"div",closeClassName:"text-dark"};$('.popover {\r\n  width: auto;\r\n  background-color: white;\r\n  color: #97999b;\r\n  text-align: center;\r\n  display: inline-block;\r\n  border-radius: 3px;\r\n  position: absolute;\r\n  font-size: 0.83em;\r\n  font-weight: normal;\r\n  border: 1px rgb(0, 0, 0) solid;\r\n  /* z-index: 200000; */\r\n  z-index: 10;\r\n  /* max-width: initial; */\r\n  max-width: 274px;\r\n  text-align: start;\r\n  background-color: #fff;\r\n  border: 1px solid rgba(0, 0, 0, 0.2);\r\n  border-radius: 0.3rem;\r\n  opacity: 0;\r\n  transition: opacity 0.3s, visibility 0.3s;\r\n  visibility: hidden;\r\n}\r\n\r\n.show.popover {\r\n  z-index: 999;\r\n  opacity: 1;\r\n  visibility: visible;\r\n}\r\n\r\n.popover-body {\r\n  color: #6c6e71;\r\n}\r\n\r\n.popover .popover_arrow {\r\n  width: 0;\r\n  height: 0;\r\n  border-style: solid;\r\n  position: absolute;\r\n  margin: 6px;\r\n  color: transparent;\r\n}\r\n\r\n.popover[x-placement^="top"] {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.popover[x-placement^="top"] .popover_arrow {\r\n  border-width: 8px 8px 0 8px;\r\n  border-color: #d6d6d6 transparent transparent transparent;\r\n  bottom: -8px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.popover[x-placement^="top"] .popover_arrow::before {\r\n  content: "";\r\n  display: inline-block;\r\n  position: absolute;\r\n  left: -8px;\r\n  bottom: 1.5px;\r\n  border: solid;\r\n  border-width: 8px 8px 0 8px;\r\n  border-color: white transparent transparent transparent;\r\n}\r\n\r\n.popover[x-placement^="bottom"] {\r\n  margin-top: 15px;\r\n}\r\n\r\n.popover[x-placement^="bottom"] .popover_arrow {\r\n  border-width: 0 8px 8px 8px;\r\n  border-color: transparent transparent #d6d6d6 transparent;\r\n  top: -8px;\r\n  margin-top: 0;\r\n}\r\n\r\n.popover[x-placement^="bottom"] .popover_arrow::before {\r\n  content: "";\r\n  display: inline-block;\r\n  position: absolute;\r\n  left: -8px;\r\n  top: 1.45px;\r\n  border: solid;\r\n  border-width: 0 8px 8px 8px;\r\n  border-color: transparent transparent white transparent;\r\n}\r\n\r\n.popover[x-placement^="right"] {\r\n  margin-left: 15px;\r\n}\r\n\r\n.popover[x-placement^="right"] .popover_arrow {\r\n  border-width: 8px 8px 8px 0;\r\n  border-color: transparent #d6d6d6 transparent transparent;\r\n  left: -8px;\r\n  margin-left: 0;\r\n}\r\n\r\n.popover[x-placement^="right"] .popover_arrow::before {\r\n  content: "";\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: -8px;\r\n  left: 1.45px;\r\n  border: solid;\r\n  border-width: 8px 8px 8px 0;\r\n  border-color: transparent white transparent transparent;\r\n}\r\n\r\n.popover[x-placement^="left"] {\r\n  margin-right: 15px;\r\n}\r\n\r\n.popover[x-placement^="left"] .popover_arrow {\r\n  border-width: 8px 0 8px 8px;\r\n  border-color: transparent transparent transparent #d6d6d6;\r\n  right: -8px;\r\n  margin-right: 0;\r\n}\r\n\r\n.popover[x-placement^="left"] .popover_arrow::before {\r\n  content: "";\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: -8px;\r\n  right: 1.45px;\r\n  border: solid;\r\n  border-width: 8px 0 8px 8px;\r\n  border-color: transparent transparent transparent white;\r\n}\r\n\r\n.tooltip {\r\n  width: auto;\r\n  background-color: black;\r\n  color: white;\r\n  text-align: center;\r\n  display: inline-block;\r\n  border-radius: 3px;\r\n  position: absolute;\r\n  /* font-size: 0.83em; */\r\n  font-weight: normal;\r\n  border: 1px rgb(0, 0, 0) solid;\r\n  /* z-index: 200000; */\r\n  z-index: 15;\r\n  /* max-width: initial; */\r\n  max-width: 274px;\r\n  text-align: start;\r\n  border: 1px solid rgba(0, 0, 0, 0.2);\r\n  border-radius: 0.3rem;\r\n  opacity: 0;\r\n  transition: opacity 0.3s, visibility 0.3s;\r\n  visibility: hidden;\r\n}\r\n\r\n.tooltip-inner {\r\n  display: block;\r\n}\r\n\r\n.show.tooltip {\r\n  z-index: 999;\r\n\r\n  opacity: 1;\r\n  visibility: visible;\r\n}\r\n\r\n.tooltip .popover_arrow {\r\n  width: 0;\r\n  height: 0;\r\n  border-style: solid;\r\n  position: absolute;\r\n  margin: 6px;\r\n  color: transparent;\r\n}\r\n\r\n.tooltip[x-placement^="top"],\r\n.show[x-placement^="top"]:not(.tooltip) {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.tooltip[x-placement^="top"] .popover_arrow {\r\n  border-width: 6px 6px 0 6px;\r\n  border-color: #131313 transparent transparent transparent;\r\n  bottom: -6px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.tooltip[x-placement^="top"] .popover_arrow::before {\r\n  content: "";\r\n  display: inline-block;\r\n  position: absolute;\r\n  left: -6px;\r\n  bottom: 1.5px;\r\n  border: solid;\r\n  border-width: 6px 6px 0 6px;\r\n  border-color: black transparent transparent transparent;\r\n}\r\n\r\n.tooltip[x-placement^="bottom"],\r\n.show[x-placement^="bottom"]:not(.tooltip) {\r\n  margin-top: 5px;\r\n}\r\n\r\n.tooltip[x-placement^="bottom"] .popover_arrow {\r\n  border-width: 0 6px 6px 6px;\r\n  border-color: transparent transparent #131313 transparent;\r\n  top: -6px;\r\n  margin-top: 0;\r\n}\r\n\r\n.tooltip[x-placement^="bottom"] .popover_arrow::before {\r\n  content: "";\r\n  display: inline-block;\r\n  position: absolute;\r\n  left: -6px;\r\n  top: 1.45px;\r\n  border: solid;\r\n  border-width: 0 6px 6px 6px;\r\n  border-color: transparent transparent black transparent;\r\n}\r\n\r\n.tooltip[x-placement^="right"],\r\n.show[x-placement^="right"]:not(.tooltip) {\r\n  margin-left: 5px;\r\n}\r\n\r\n.tooltip[x-placement^="right"] .popover_arrow {\r\n  border-width: 6px 6px 6px 0;\r\n  border-color: transparent #131313 transparent transparent;\r\n  left: -6px;\r\n  margin-left: 0;\r\n}\r\n\r\n.tooltip[x-placement^="right"] .popover_arrow::before {\r\n  content: "";\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: -6px;\r\n  left: 1.45px;\r\n  border: solid;\r\n  border-width: 6px 6px 6px 0;\r\n  border-color: transparent black transparent transparent;\r\n}\r\n\r\n.tooltip[x-placement^="left"],\r\n.show[x-placement^="left"]:not(.tooltip) {\r\n  margin-right: 5px;\r\n}\r\n\r\n.tooltip[x-placement^="left"] .popover_arrow {\r\n  border-width: 6px 0 6px 6px;\r\n  border-color: transparent transparent transparent #131313;\r\n  right: -6px;\r\n  margin-right: 0;\r\n}\r\n\r\n.tooltip[x-placement^="left"] .popover_arrow::before {\r\n  content: "";\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: -6px;\r\n  right: 1.45px;\r\n  border: solid;\r\n  border-width: 6px 0 6px 6px;\r\n  border-color: transparent transparent transparent black;\r\n}\r\n');var xt=function(t){function r(){var t,n;C(this,r);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return O(q(n=j(this,(t=I(r)).call.apply(t,[this].concat(o)))),"state",{popperJS:null,visible:n.props.isVisible,showPopper:n.props.isVisible}),O(q(n),"popoverWrapperRef",react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef()),O(q(n),"referenceElm",react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef()),O(q(n),"setPopperJS",(function(){var e=n.state,t=e.showPopper,r=e.popperJS;t&&(r?r.scheduleUpdate():n.createPopper(),setTimeout((function(){return clearInterval(n.timer)}),1e3))})),O(q(n),"createPopper",(function(){var e=n.props,t=e.placement,r=e.modifiers,a=n.state.popperJS;n.referenceElm&&n.popoverWrapperRef&&n.setState({popperJS:new popper_js__WEBPACK_IMPORTED_MODULE_10__["default"](n.referenceElm,n.popoverWrapperRef,D({placement:t},r),(function(){return setTimeout((function(){a.scheduleUpdate()}),10)}))})})),O(q(n),"doToggle",(function(e){n.setState({showPopper:e&&!0},(function(){var t=n.state,r=t.showPopper,a=t.visible;r&&n.setState({visible:void 0!==e?e:!a},(function(){n.createPopper(),n.state.popperJS.scheduleUpdate()}))}))})),O(q(n),"handleClick",(function(e){var t=e.target,r=n.state.showPopper;if(n.popoverWrapperRef&&r){if(n.popoverWrapperRef.contains(t)||n.referenceElm.contains(t)||t===n.referenceElm)return;n.doToggle(!1)}})),n}return M(r,react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),S(r,[{key:"componentDidUpdate",value:function(e,t){var r=this.state.showPopper,n=this.props,a=n.isVisible,o=n.onChange;this.setPopperJS(),e.isVisible!==a&&a!==r&&r!==e.showPopper&&this.setState({showPopper:a}),o&&r!==t.showPopper&&o(r),r&&t.showPopper!==r&&this.createPopper()}},{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){return e.setPopperJS()}),3),document.addEventListener("click",this.handleClick)}},{key:"render",value:function(){var t=this,r=this.props,n=r.children,a=r.className,o=r.clickable,l=r.domElement,i=r.email,c=r.id,d=(r.isVisible,r.material),p=(r.modifiers,r.placement,r.popover),u=r.sm,m=(r.style,r.onChange,r.tag),g=L(r,["children","className","clickable","domElement","email","id","isVisible","material","modifiers","placement","popover","sm","style","onChange","tag"]),b=this.state,f=b.visible,h=b.showPopper,v=n[1],y=n[0],N=classnames__WEBPACK_IMPORTED_MODULE_1___default()(f&&"show",p?"popover":!d&&!i&&"tooltip px-2",a),x=classnames__WEBPACK_IMPORTED_MODULE_1___default()((d||i)&&"tooltip-inner",d&&(u?"md-inner":"md-inner-main"),i&&(u?"md-inner":"md-inner-email"));return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,l?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(y.type,R({},y.props,{onMouseEnter:function(){return!o&&t.doToggle(!0)},onMouseLeave:function(){return!o&&!p&&setTimeout((function(){return t.doToggle(!1)}),0)},onTouchStart:function(){return!o&&t.doToggle(!0)},onTouchEnd:function(){return!o&&!p&&t.doToggle(!1)},onMouseDown:function(){return o&&t.doToggle(!h)},onMouseUp:function(){return setTimeout((function(){return t.setPopperJS()}),0)},ref:function(e){return t.referenceElm=e},"data-popper":c})):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(y.type,R({},y.props,{onMouseEnter:function(){return!o&&t.doToggle(!0)},onMouseLeave:function(){return!o&&!p&&setTimeout((function(){return t.doToggle(!1)}),0)},onTouchStart:function(){return!o&&t.doToggle(!0)},onTouchEnd:function(){return!o&&!p&&t.doToggle(!1)},onMouseDown:function(){o&&t.doToggle(!h),setTimeout((function(){return t.setPopperJS()}),100)},onMouseUp:function(){return setTimeout((function(){return t.setPopperJS()}),0)},innerRef:function(e){return t.referenceElm=e},"data-popper":c})),h&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(m,R({ref:function(e){return t.popoverWrapperRef=e},className:N,"data-popper":c},g),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(v.type,{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(x,v.props.className)},v.props.children),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{"x-arrow":"",className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("popover_arrow")})))}}]),r}();xt.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,clickable:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,domElement:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,email:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,id:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,isVisible:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,material:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,modifiers:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,placement:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,popover:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,sm:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,style:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string),tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string},xt.defaultProps={clickable:!1,domElement:!1,id:"popper",isVisible:!1,placement:"top",popover:!1,style:{display:"inline-block"},tag:"div"};var wt=function(t){var r=t.attributes,n=t.children,a=t.className,o=t.tag,l=classnames__WEBPACK_IMPORTED_MODULE_1___default()("popover-body",a);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(o,R({"data-test":"popover-body"},r,{className:l}),n)};wt.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string])},wt.defaultProps={tag:"div"};var Et=function(t){var r=t.attributes,n=t.children,a=t.className,o=t.tag,l=classnames__WEBPACK_IMPORTED_MODULE_1___default()("popover-header",a);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(o,R({"data-test":"popover-header"},r,{className:l}),n)};Et.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string])},Et.defaultProps={className:"",tag:"h3"};var kt=function(t){var r=t.animated,n=t.barClassName,a=t.children,o=t.className,l=t.color,i=t.height,c=t.material,d=t.max,p=t.min,u=t.preloader,m=t.striped,g=t.value,b=t.wrapperStyle,f=L(t,["animated","barClassName","children","className","color","height","material","max","min","preloader","striped","value","wrapperStyle"]),h=(g-p)/(d-p)*100,v=classnames__WEBPACK_IMPORTED_MODULE_1___default()("progress",c&&"md-progress",u&&"".concat(l?"".concat(l,"-color"):"primary-color","-dark"),o),y=classnames__WEBPACK_IMPORTED_MODULE_1___default()(u?"indeterminate":"progress-bar",n||null,r?"progress-bar-animated":null,l?"bg-".concat(l):null,m||r?"progress-bar-striped":null),N=i||a&&"1rem",x=D({},b,{height:N});return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",R({"data-test":"progress"},f,{className:v,style:x}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:y,style:{width:"".concat(h,"%"),height:N},role:"progressbar","aria-valuenow":g,"aria-valuemin":p,"aria-valuemax":d},a))};kt.propTypes={animated:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,barClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,color:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,height:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,material:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,max:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,min:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,preloader:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,striped:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,value:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,wrapperStyle:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object},kt.defaultProps={animated:!1,barClassName:"",className:"",color:"indigo",height:"",material:!1,max:100,min:0,preloader:!1,striped:!1,value:0,wrapperStyle:{}};var Ct=function(r){var a=W(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),2),o=a[0],l=a[1],i=W(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),2),c=i[0],d=i[1],f=W(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({title:"",index:null}),2),h=f[0],v=f[1],y=W(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),2),N=y[0],x=y[1],w=W(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),2),E=w[0],k=w[1],C=function(e){e.target.closest(".popover")||k(null)};Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])((function(){return window.addEventListener("click",C),function(){return window.removeEventListener("click",C)}}),[]),Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])((function(){l(r.data)}),[r.data]),Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])((function(){var e=o.findIndex((function(e){return e.choosed}));-1!==e&&v({title:o[e].tooltip,index:e})}),[o]),Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])((function(){if(r.getValue){var e=h.title,t=h.index;t=null!==t?t+1:t,r.getValue({title:e,value:t})}}),[h,r]);var T=function(){d(null)},S=function(){x(""),k(null)},O=function(e){x(e.target.value)},P=r.tag,D=r.containerClassName,M=r.iconClassName,I=r.iconFaces,B=r.iconSize,q=r.iconRegular,j=r.fillClassName,A=r.fillColors,z=(r.getValue,r.feedback),F=r.submitHandler,H=L(r,["tag","containerClassName","iconClassName","iconFaces","iconSize","iconRegular","fillClassName","fillColors","getValue","feedback","submitHandler"]),_=classnames__WEBPACK_IMPORTED_MODULE_1___default()("mdb-rating","d-flex","justify-content-start","align-items-center",D),V=[];return o.length&&(V=o.map((function(t,r){var n=t.icon,a=void 0===n?"star":n,o=t.tooltip,l=t.far,i=t.size,f=(t.choosed,L(t,["icon","tooltip","far","size","choosed"])),y=null!==h.index,x=null!==c,w=z&&null!==E&&E===r,C=!1;y?(C=r<=h.index,x&&c>h.index&&(C=r<=c)):x&&(C=r<=c);var P="";if(A){var D=null;y?(D=h.index,x&&(D=c)):x&&(D=c);var W=Array.isArray(A);null!==D&&(P=W?A[D]:["oneStar","twoStars","threeStars","fourStars","fiveStars"][D])}var _=classnames__WEBPACK_IMPORTED_MODULE_1___default()("py-2 px-1 rate-popover",C&&(A?P:j),M),V=a;if(I){var X=["angry","frown","meh","smile","laugh"];V="meh-blank",y&&r<=h.index?(V=X[h.index],x&&(V=X[c])):x&&r<=c&&(V=X[c])}var Y=o;return w&&(Y=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form",{onSubmit:function(e){F(e,o,E+1,N),S()}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBPopoverHeader"],null,o),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBPopoverBody"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea",{type:"text",className:"md-textarea form-control py-0",value:N,onChange:O}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"d-flex align-items-center justify-content-around mt-2"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBBtn"],{type:"submit",color:"primary",size:"sm"},"Submit!"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{onMouseDown:S,style:{backgroundColor:"#fff",border:"none",padding:"0.5rem 1.6rem"}},"Close"))))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBTooltip"],{key:o,domElement:!0,placement:"top",tag:"span",popover:w,isVisible:w,clickable:w},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_5__["Fa"],R({style:{cursor:"pointer"}},H,f,{icon:V,size:i||B,far:l||q,className:_,"data-index":r,"data-original-title":o,onMouseEnter:function(){return function(e,t){d(t)}(0,r)},onMouseLeave:T,onClick:function(e){return function(e,t,r){r.stopPropagation(),e===h.title&&t===h.index?(v({title:"",index:null}),z&&k(null)):(v({title:e,index:t}),z&&setTimeout((function(){k(t)}),1))}(o,r,e)}}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{userSelect:"none"}},Y))}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(P,{"data-test":"rating",className:_},V)};Ct.propTypes={containerClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,data:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({choosed:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,icon:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,tooltip:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string})),feedback:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,fillClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,fillColors:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string)]),getValue:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,iconClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,iconFaces:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,iconRegular:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,iconSize:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,submitHandler:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string},Ct.defaultProps={containerClassName:"",data:[{tooltip:"Very Bad"},{tooltip:"Poor"},{tooltip:"Ok"},{tooltip:"Good"},{tooltip:"Excellent"}],feedback:!1,fillClassName:"fiveStars",iconClassName:"",iconSize:"1x",iconRegular:!1,tag:"div",submitHandler:function(e){return e.preventDefault()}};var Tt=function(t){var r=t.around,n=t.between,a=t.bottom,o=t.center,l=t.className,i=t.end,c=t.middle,d=t.start,p=t.tag,u=t.top,m=L(t,["around","between","bottom","center","className","end","middle","start","tag","top"]),g=classnames__WEBPACK_IMPORTED_MODULE_1___default()("row",i&&"justify-content-end",d&&"justify-content-start",o&&"justify-content-center",n&&"justify-content-between",r&&"justify-content-around",u&&"align-self-start",c&&"align-self-center",a&&"align-self-end",l);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(p,R({"data-test":"row"},m,{className:g}))};Tt.propTypes={around:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,between:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,bottom:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,center:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,end:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,middle:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,start:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),top:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool},Tt.defaultProps={tag:"div"};var St={activeItem:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,tabId:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any},Ot=function(t){function r(){var e,t;C(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return O(q(t=j(this,(e=I(r)).call.apply(e,[this].concat(a)))),"state",{activeItem:t.props.activeItem}),t}return M(r,react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),S(r,[{key:"getChildContext",value:function(){return{activeItemId:this.state.activeItem}}},{key:"render",value:function(){var t=this.props.className,r=V(this.props,Object.keys(St)),n=classnames__WEBPACK_IMPORTED_MODULE_1___default()("tab-content",t);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",R({"data-test":"tabContent"},r,{className:n}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.activeItem!==e.activeItem?{activeItem:e.activeItem}:null}}]),r}();Ot.childContextTypes={activeItemId:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any},Ot.propTypes=St;var Rt=function(t){function r(){return C(this,r),j(this,I(r).apply(this,arguments))}return M(r,react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),S(r,[{key:"render",value:function(){var t=this.props,r=t.className,n=t.tabId,a=L(t,["className","tabId"]),o=this.context.activeItemId,l=classnames__WEBPACK_IMPORTED_MODULE_1___default()("tab-pane",{active:n===o},r);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",R({"data-test":"tab-pane"},a,{className:l,role:"tabpanel"}))}}]),r}();Rt.contextTypes={activeItemId:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any},Rt.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,tabId:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any};var Pt=function(t){var r,n=t.children,a=t.color,o=t.columns,l=t.textWhite,i=L(t,["children","color","columns","textWhite"]),c="dark"===a||"light"===a,d=classnames__WEBPACK_IMPORTED_MODULE_1___default()((O(r={"text-white":l},"thead-".concat(a),a&&c),O(r,"".concat(a),a&&!c),r));return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead",R({"data-test":"table-head"},i,{className:d}),o&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",null,o.map((function(t){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th",{key:t.field,className:t.hasOwnProperty("minimal")?"th-".concat(t.minimal):""},t.label)}))),n)};Pt.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,color:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,columns:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object),textWhite:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool},Pt.defaultProps={textWhite:!1};var Dt=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(),Mt=function(r){var a=W(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),2),o=a[0],l=a[1];Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])((function(){r.getValue&&r.getValue({item:o?o.closest("li"):o,value:o?o.closest("li").childNodes[1].textContent:o})}),[o,r]);var i=r.theme,c=r.children,d=r.className,p=(r.getValue,r.header),u=r.listClassName,m=r.tag,g=L(r,["theme","children","className","getValue","header","listClassName","tag"]),b=classnames__WEBPACK_IMPORTED_MODULE_1___default()("border",i?"treeview-".concat(i):"treeview",d),f=classnames__WEBPACK_IMPORTED_MODULE_1___default()("list-unstyled",p?"pb-2 mb-1":"py-2 my-1",i&&"treeview-".concat(i,"-list"),"animated"===i||!i&&"pl-3",u),h=p&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6",{className:"pt-3 pl-3"},p),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr",null));return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(m,R({"data-test":"treeview"},g,{className:b}),h,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:f},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dt.Provider,{value:{active:o,theme:i,getActive:function(e){return l(e),e}}},c)))};Mt.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,getValue:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,header:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,listClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,theme:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string},Mt.defaultProps={tag:"div",theme:"",getValue:function(){}};var It=function(r){var l=W(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),2),i=l[0],c=l[1],d=Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null),p=r.className,u=r.disabled,m=r.disabledClassName,g=r.fab,b=r.fal,f=r.far,h=r.icon,v=(r.opened,r.tag),y=r.title,N=L(r,["className","disabled","disabledClassName","fab","fal","far","icon","opened","tag","title"]),x=Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(Dt),w=x.active,E=x.getActive,k=x.theme;Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])((function(){d&&d.current&&c(d.current)}),[]);var C=classnames__WEBPACK_IMPORTED_MODULE_1___default()(u&&m,k&&"treeview-".concat(k,"-items treeview-").concat(k,"-element closed mb-1"),w!==i||w.classList.contains("opened")?"":"opened",p);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(v,R({"data-test":"treeview-item"},N,{className:C,ref:d,onMouseDown:function(){u||(i.classList.contains("opened")?E(null):E(i))},style:{transform:"translateY(0.3em)"}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Z,{className:"mr-2",fab:g,fal:b,far:f,icon:h}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,y))};It.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,disabledClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,fab:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,fal:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,far:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,icon:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,opened:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string])},It.defaultProps={disabled:!1,fab:!1,fal:!1,far:!1,icon:"folder-open",opened:!1,tag:"li"};var Bt=function(r){var a=W(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!1),2),l=a[0],i=a[1];Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])((function(){var e=r.opened;i(e)}),[r,r.opened]);var c=function(){return i(!l)},d=r.children,p=r.className,u=r.disabled,m=r.disabledClassName,g=r.fab,b=r.fal,f=r.far,h=r.icon,v=(r.opened,r.tag),y=r.title,N=L(r,["children","className","disabled","disabledClassName","fab","fal","far","icon","opened","tag","title"]),x=Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(Dt).theme,w=classnames__WEBPACK_IMPORTED_MODULE_1___default()("nested",l&&"active"),E=classnames__WEBPACK_IMPORTED_MODULE_1___default()(x&&"closed treeview-".concat(x,"-element d-block"),!d&&"ml-2",l&&"opened",u&&m),k=classnames__WEBPACK_IMPORTED_MODULE_1___default()(x&&"treeview-".concat(x,"-items px-0"),p),C=classnames__WEBPACK_IMPORTED_MODULE_1___default()(x?"mx-2":"mr-2"),T=d&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:w,style:{height:"calc(100% + 0.6rem)",marginLeft:"2px"}},d),S=x&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Ce,{isOpen:l},T),O="colorful"!==x?"angle-right":l?"minus-circle":"plus-circle",P=d&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Z,{icon:O,rotate:"colorful"!==x?l?"90 down":"0":"",className:"rotate"}),D=d&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Ue,{flat:!0,className:"m-0 py-0 px-1 mr-1 z-depth-0",onClick:c},P);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(v,R({"data-test":"treeview-list"},N,{className:k}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:E,onClick:!u&&x?c:null},x?P:D,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Z,{className:C,fab:g,fal:b,far:f,icon:h}),y)),S||T)};Bt.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,disabledClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,fab:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,fal:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,far:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,icon:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,opened:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string},Bt.defaultProps={disabled:!1,fab:!1,fal:!1,far:!1,icon:"folder-open",opened:!1,tag:"li"},Bt.contextTypes={theme:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string};$(".note-dark {\r\n  background-color: #000;\r\n  color: #fff;\r\n  border-color: #58595a;\r\n}\r\n\r\n.note-default {\r\n  background-color: rgb(164, 243, 235);\r\n  border-color: #00695c;\r\n}\r\n\r\n.note-elegant {\r\n  background-color: #2E2E2E;\r\n  border-color: #212121;\r\n  color: #fff;\r\n}\r\n\r\n.note-stylish {\r\n  background-color: #4B515D;\r\n  border-color: #3E4551;\r\n  color: #fff;\r\n}\r\n\r\n.note-unique {\r\n  background-color: #3F729B;\r\n  border-color: #1C2331;\r\n  color: #fff;\r\n}\r\n\r\n.note-special {\r\n  background-color: #37474F;\r\n  border-color: #263238;\r\n  color: #fff;\r\n}\r\n");var Lt=function(t){function r(){return C(this,r),j(this,I(r).apply(this,arguments))}return M(r,react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),S(r,[{key:"render",value:function(){var t=this.props,r=t.className,n=t.tag,a=t.children,o=t.variant,l=t.blockquote,i=t.bqColor,c=(t.bqTitle,t.bqFooter,t.bqText,t.listUnStyled),d=t.listInLine,p=t.colorText,u=t.text,m=t.note,g=t.noteColor,b=t.noteTitle,f=L(t,["className","tag","children","variant","blockquote","bqColor","bqTitle","bqFooter","bqText","listUnStyled","listInLine","colorText","text","note","noteColor","noteTitle"]),h=classnames__WEBPACK_IMPORTED_MODULE_1___default()(o&&o,p&&"".concat(p.toLowerCase(),"-text"),u&&"text-".concat(u),r),v=classnames__WEBPACK_IMPORTED_MODULE_1___default()("blockquote",i&&"bq-".concat(i),r),y=classnames__WEBPACK_IMPORTED_MODULE_1___default()("note",g&&"note-".concat(g),r),N=""!==h?h:null;return l?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("blockquote",{className:v},a):c?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"list-unstyled"},a):d?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"list-inline"},a):m?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:y},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong",null,b),a):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(n,R({"data-test":"typography"},f,{className:N}),a)}}]),r}();Lt.propTypes={blockquote:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,bqColor:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,bqTitle:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,colorText:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,listInLine:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,listUnStyled:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,note:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,noteColor:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,noteTitle:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),variant:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string},Lt.defaultProps={abbr:!1,blockquote:!1,listInLine:!1,listUnStyled:!1,noteColor:"primary",tag:"p"};


/***/ }),

/***/ "./node_modules/object-is/implementation.js":
/*!**************************************************!*\
  !*** ./node_modules/object-is/implementation.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var numberIsNaN = function (value) {
	return value !== value;
};

module.exports = function is(a, b) {
	if (a === 0 && b === 0) {
		return 1 / a === 1 / b;
	}
	if (a === b) {
		return true;
	}
	if (numberIsNaN(a) && numberIsNaN(b)) {
		return true;
	}
	return false;
};



/***/ }),

/***/ "./node_modules/object-is/index.js":
/*!*****************************************!*\
  !*** ./node_modules/object-is/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");
var callBind = __webpack_require__(/*! es-abstract/helpers/callBind */ "./node_modules/es-abstract/helpers/callBind.js");

var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object-is/implementation.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object-is/polyfill.js");
var shim = __webpack_require__(/*! ./shim */ "./node_modules/object-is/shim.js");

var polyfill = callBind(getPolyfill(), Object);

define(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./node_modules/object-is/polyfill.js":
/*!********************************************!*\
  !*** ./node_modules/object-is/polyfill.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object-is/implementation.js");

module.exports = function getPolyfill() {
	return typeof Object.is === 'function' ? Object.is : implementation;
};


/***/ }),

/***/ "./node_modules/object-is/shim.js":
/*!****************************************!*\
  !*** ./node_modules/object-is/shim.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object-is/polyfill.js");
var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");

module.exports = function shimObjectIs() {
	var polyfill = getPolyfill();
	define(Object, { is: polyfill }, {
		is: function testObjectIs() {
			return Object.is !== polyfill;
		}
	});
	return polyfill;
};


/***/ }),

/***/ "./node_modules/object-keys/implementation.js":
/*!****************************************************!*\
  !*** ./node_modules/object-keys/implementation.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js"); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/index.js":
/*!*******************************************!*\
  !*** ./node_modules/object-keys/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js");

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(/*! ./implementation */ "./node_modules/object-keys/implementation.js");

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/isArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/object-keys/isArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-numeric-input/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-numeric-input/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(2);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var KEYCODE_UP = 38;
	var KEYCODE_DOWN = 40;
	var IS_BROWSER = typeof document != 'undefined';
	var RE_NUMBER = /^[+-]?((\.\d+)|(\d+(\.\d+)?))$/;
	var RE_INCOMPLETE_NUMBER = /^([+-]|\.0*|[+-]\.0*|[+-]?\d+\.)?$/;

	function addClass(element, className) {
	    if (element.classList) {
	        return element.classList.add(className);
	    }
	    if (!element.className.search(new RegExp("\\b" + className + "\\b"))) {
	        element.className = " " + className;
	    }
	}

	function removeClass(element, className) {
	    if (element.className) {
	        if (element.classList) {
	            return element.classList.remove(className);
	        }

	        element.className = element.className.replace(new RegExp("\\b" + className + "\\b", "g"), "");
	    }
	}

	function access(object, prop, defaultValue) {
	    var result = object[prop];
	    if (typeof result == "function") {
	        for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
	            args[_key - 3] = arguments[_key];
	        }

	        result = result.apply(undefined, args);
	    }
	    return result === undefined ? defaultValue : result;
	}

	var NumericInput = function (_Component) {
	    _inherits(NumericInput, _Component);

	    function NumericInput() {
	        var _ref;

	        _classCallCheck(this, NumericInput);

	        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            args[_key2] = arguments[_key2];
	        }

	        var _this = _possibleConstructorReturn(this, (_ref = NumericInput.__proto__ || Object.getPrototypeOf(NumericInput)).call.apply(_ref, [this].concat(args)));

	        _this._isStrict = !!_this.props.strict;

	        _this.state = _extends({
	            btnDownHover: false,
	            btnDownActive: false,
	            btnUpHover: false,
	            btnUpActive: false,
	            stringValue: ""
	        }, _this._propsToState(_this.props));
	        _this.stop = _this.stop.bind(_this);
	        _this.onTouchEnd = _this.onTouchEnd.bind(_this);
	        _this.refsInput = {};
	        _this.refsWrapper = {};
	        return _this;
	    }

	    _createClass(NumericInput, [{
	        key: '_propsToState',
	        value: function _propsToState(props) {
	            var out = {};

	            if (props.hasOwnProperty("value")) {
	                out.stringValue = String(props.value || props.value === 0 ? props.value : '').trim();

	                out.value = out.stringValue !== '' ? this._parse(props.value) : null;
	            } else if (!this._isMounted && props.hasOwnProperty("defaultValue")) {
	                out.stringValue = String(props.defaultValue || props.defaultValue === 0 ? props.defaultValue : '').trim();

	                out.value = props.defaultValue !== '' ? this._parse(props.defaultValue) : null;
	            }

	            return out;
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(props) {
	            var _this2 = this;

	            this._isStrict = !!props.strict;
	            var nextState = this._propsToState(props);
	            if (Object.keys(nextState).length) {
	                this._ignoreValueChange = true;
	                this.setState(nextState, function () {
	                    _this2._ignoreValueChange = false;
	                });
	            }
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate() {
	            this.saveSelection();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {
	            if (!this._ignoreValueChange && prevState.value !== this.state.value && (!isNaN(this.state.value) || this.state.value === null)) {
	                    this._invokeEventCallback("onChange", this.state.value, this.refsInput.value, this.refsInput);
	                }

	            if (this._inputFocus) {
	                this.refsInput.focus();

	                if (this.state.selectionStart || this.state.selectionStart === 0) {
	                    this.refsInput.selectionStart = this.state.selectionStart;
	                }

	                if (this.state.selectionEnd || this.state.selectionEnd === 0) {
	                    this.refsInput.selectionEnd = this.state.selectionEnd;
	                }
	            }

	            this.checkValidity();
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this._isMounted = false;
	            this.stop();
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this3 = this;

	            this._isMounted = true;
	            this.refsInput.getValueAsNumber = function () {
	                return _this3.state.value || 0;
	            };

	            this.refsInput.setValue = function (value) {
	                _this3.setState({
	                    value: _this3._parse(value),
	                    stringValue: value
	                });
	            };

	            if (!this._inputFocus && IS_BROWSER && document.activeElement === this.refsInput) {
	                this._inputFocus = true;
	                this.refsInput.focus();
	                this._invokeEventCallback("onFocus", {
	                    target: this.refsInput,
	                    type: "focus"
	                });
	            }

	            this.checkValidity();
	        }
	    }, {
	        key: 'saveSelection',
	        value: function saveSelection() {
	            this.state.selectionStart = this.refsInput.selectionStart;
	            this.state.selectionEnd = this.refsInput.selectionEnd;
	        }
	    }, {
	        key: 'checkValidity',
	        value: function checkValidity() {
	            var valid = void 0,
	                validationError = "";

	            var supportsValidation = !!this.refsInput.checkValidity;

	            var noValidate = !!(this.props.noValidate && this.props.noValidate != "false");

	            this.refsInput.noValidate = noValidate;

	            valid = noValidate || !supportsValidation;

	            if (valid) {
	                validationError = "";
	            } else {
	                if (this.refsInput.pattern === "") {
	                    this.refsInput.pattern = this.props.required ? ".+" : ".*";
	                }

	                if (supportsValidation) {
	                    this.refsInput.checkValidity();
	                    valid = this.refsInput.validity.valid;

	                    if (!valid) {
	                        validationError = this.refsInput.validationMessage;
	                    }
	                }

	                if (valid && supportsValidation && this.props.maxLength) {
	                    if (this.refsInput.value.length > this.props.maxLength) {
	                        validationError = "This value is too long";
	                    }
	                }
	            }

	            validationError = validationError || (valid ? "" : this.refsInput.validationMessage || "Unknown Error");

	            var validStateChanged = this._valid !== validationError;
	            this._valid = validationError;
	            if (validationError) {
	                addClass(this.refsWrapper, "has-error");
	                if (validStateChanged) {
	                    this._invokeEventCallback("onInvalid", validationError, this.state.value, this.refsInput.value);
	                }
	            } else {
	                removeClass(this.refsWrapper, "has-error");
	                if (validStateChanged) {
	                    this._invokeEventCallback("onValid", this.state.value, this.refsInput.value);
	                }
	            }
	        }
	    }, {
	        key: '_toNumber',
	        value: function _toNumber(x) {
	            var n = parseFloat(x);
	            if (isNaN(n) || !isFinite(n)) {
	                n = 0;
	            }

	            if (this._isStrict) {
	                var precision = access(this.props, "precision", null, this);
	                var q = Math.pow(10, precision === null ? 10 : precision);
	                var _min = +access(this.props, "min", NumericInput.defaultProps.min, this);
	                var _max = +access(this.props, "max", NumericInput.defaultProps.max, this);
	                n = Math.min(Math.max(n, _min), _max);
	                n = Math.round(n * q) / q;
	            }

	            return n;
	        }
	    }, {
	        key: '_parse',
	        value: function _parse(x) {
	            x = String(x);
	            if (typeof this.props.parse == 'function') {
	                return parseFloat(this.props.parse(x));
	            }
	            return parseFloat(x);
	        }
	    }, {
	        key: '_format',
	        value: function _format(n) {
	            var _n = this._toNumber(n);
	            var precision = access(this.props, "precision", null, this);
	            if (precision !== null) {
	                _n = n.toFixed(precision);
	            }

	            _n += "";

	            if (this.props.format) {
	                return this.props.format(_n);
	            }

	            return _n;
	        }
	    }, {
	        key: '_step',
	        value: function _step(n, callback) {
	            var _isStrict = this._isStrict;
	            this._isStrict = true;

	            var _step = +access(this.props, "step", NumericInput.defaultProps.step, this, n > 0 ? NumericInput.DIRECTION_UP : NumericInput.DIRECTION_DOWN);

	            var _n = this._toNumber((this.state.value || 0) + _step * n);

	            if (this.props.snap) {
	                _n = Math.round(_n / _step) * _step;
	            }

	            this._isStrict = _isStrict;

	            if (_n !== this.state.value) {
	                this.setState({ value: _n, stringValue: _n + "" }, callback);
	                return true;
	            }

	            return false;
	        }
	    }, {
	        key: '_onKeyDown',
	        value: function _onKeyDown() {
	            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	                args[_key3] = arguments[_key3];
	            }

	            args[0].persist();
	            this._invokeEventCallback.apply(this, ["onKeyDown"].concat(args));
	            var e = args[0];
	            if (!e.isDefaultPrevented()) {
	                if (e.keyCode === KEYCODE_UP) {
	                    e.preventDefault();
	                    this._step(e.ctrlKey || e.metaKey ? 0.1 : e.shiftKey ? 10 : 1);
	                } else if (e.keyCode === KEYCODE_DOWN) {
	                    e.preventDefault();
	                    this._step(e.ctrlKey || e.metaKey ? -0.1 : e.shiftKey ? -10 : -1);
	                } else {
	                    var _value = this.refsInput.value,
	                        length = _value.length;
	                    if (e.keyCode === 8) {
	                        if (this.refsInput.selectionStart == this.refsInput.selectionEnd && this.refsInput.selectionEnd > 0 && _value.length && _value.charAt(this.refsInput.selectionEnd - 1) === ".") {
	                            e.preventDefault();
	                            this.refsInput.selectionStart = this.refsInput.selectionEnd = this.refsInput.selectionEnd - 1;
	                        }
	                    } else if (e.keyCode === 46) {
	                        if (this.refsInput.selectionStart == this.refsInput.selectionEnd && this.refsInput.selectionEnd < length + 1 && _value.length && _value.charAt(this.refsInput.selectionEnd) === ".") {
	                            e.preventDefault();
	                            this.refsInput.selectionStart = this.refsInput.selectionEnd = this.refsInput.selectionEnd + 1;
	                        }
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'stop',
	        value: function stop() {
	            if (this._timer) {
	                clearTimeout(this._timer);
	            }
	        }
	    }, {
	        key: 'increase',
	        value: function increase() {
	            var _this4 = this;

	            var _recursive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	            var callback = arguments[1];

	            this.stop();
	            this._step(1, callback);
	            var _max = +access(this.props, "max", NumericInput.defaultProps.max, this);
	            if (isNaN(this.state.value) || +this.state.value < _max) {
	                this._timer = setTimeout(function () {
	                    _this4.increase(true);
	                }, _recursive ? NumericInput.SPEED : NumericInput.DELAY);
	            }
	        }
	    }, {
	        key: 'decrease',
	        value: function decrease() {
	            var _this5 = this;

	            var _recursive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	            var callback = arguments[1];

	            this.stop();
	            this._step(-1, callback);
	            var _min = +access(this.props, "min", NumericInput.defaultProps.min, this);
	            if (isNaN(this.state.value) || +this.state.value > _min) {
	                this._timer = setTimeout(function () {
	                    _this5.decrease(true);
	                }, _recursive ? NumericInput.SPEED : NumericInput.DELAY);
	            }
	        }
	    }, {
	        key: 'onMouseDown',
	        value: function onMouseDown(dir, callback) {
	            if (dir == 'down') {
	                this.decrease(false, callback);
	            } else if (dir == 'up') {
	                this.increase(false, callback);
	            }
	        }
	    }, {
	        key: 'onTouchStart',
	        value: function onTouchStart(dir, e) {
	            e.preventDefault();
	            if (dir == 'down') {
	                this.decrease();
	            } else if (dir == 'up') {
	                this.increase();
	            }
	        }
	    }, {
	        key: 'onTouchEnd',
	        value: function onTouchEnd(e) {
	            e.preventDefault();
	            this.stop();
	        }
	    }, {
	        key: '_invokeEventCallback',
	        value: function _invokeEventCallback(callbackName) {
	            if (typeof this.props[callbackName] == "function") {
	                var _props$callbackName;

	                for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	                    args[_key4 - 1] = arguments[_key4];
	                }

	                (_props$callbackName = this.props[callbackName]).call.apply(_props$callbackName, [null].concat(args));
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this6 = this;

	            var props = this.props;
	            var state = this.state;
	            var css = {};

	            var _props = this.props,
	                step = _props.step,
	                min = _props.min,
	                max = _props.max,
	                precision = _props.precision,
	                parse = _props.parse,
	                format = _props.format,
	                mobile = _props.mobile,
	                snap = _props.snap,
	                componentClass = _props.componentClass,
	                value = _props.value,
	                type = _props.type,
	                style = _props.style,
	                defaultValue = _props.defaultValue,
	                onInvalid = _props.onInvalid,
	                onValid = _props.onValid,
	                strict = _props.strict,
	                noStyle = _props.noStyle,
	                rest = _objectWithoutProperties(_props, ['step', 'min', 'max', 'precision', 'parse', 'format', 'mobile', 'snap', 'componentClass', 'value', 'type', 'style', 'defaultValue', 'onInvalid', 'onValid', 'strict', 'noStyle']);

	            noStyle = noStyle || style === false;

	            for (var x in NumericInput.style) {
	                css[x] = _extends({}, NumericInput.style[x], style ? style[x] || {} : {});
	            }

	            var hasFormControl = props.className && /\bform-control\b/.test(props.className);

	            if (mobile == 'auto') {
	                mobile = IS_BROWSER && 'ontouchstart' in document;
	            }

	            if (typeof mobile == "function") {
	                mobile = mobile.call(this);
	            }
	            mobile = !!mobile;

	            var attrs = {
	                wrap: {
	                    style: noStyle ? null : css.wrap,
	                    className: 'react-numeric-input',
	                    ref: function ref(e) {
	                        if (e != null && e != undefined) {
	                            _this6.refsWrapper = e;
	                        }
	                    },
	                    onMouseUp: undefined,
	                    onMouseLeave: undefined
	                },
	                input: _extends({
	                    ref: function ref(e) {
	                        if (e != null && e != undefined) {
	                            _this6.refsInput = e;
	                        }
	                    },
	                    type: 'text',
	                    style: noStyle ? null : _extends({}, css.input, !hasFormControl ? css['input:not(.form-control)'] : {}, this._inputFocus ? css['input:focus'] : {})
	                }, rest),
	                btnUp: {
	                    onMouseEnter: undefined,
	                    onMouseDown: undefined,
	                    onMouseUp: undefined,
	                    onMouseLeave: undefined,
	                    onTouchStart: undefined,
	                    onTouchEnd: undefined,
	                    style: noStyle ? null : _extends({}, css.btn, css.btnUp, props.disabled || props.readOnly ? css['btn:disabled'] : state.btnUpActive ? css['btn:active'] : state.btnUpHover ? css['btn:hover'] : {})
	                },
	                btnDown: {
	                    onMouseEnter: undefined,
	                    onMouseDown: undefined,
	                    onMouseUp: undefined,
	                    onMouseLeave: undefined,
	                    onTouchStart: undefined,
	                    onTouchEnd: undefined,
	                    style: noStyle ? null : _extends({}, css.btn, css.btnDown, props.disabled || props.readOnly ? css['btn:disabled'] : state.btnDownActive ? css['btn:active'] : state.btnDownHover ? css['btn:hover'] : {})
	                }
	            };

	            var stringValue = String(state.stringValue || (state.value || state.value === 0 ? state.value : "") || "");

	            var loose = !this._isStrict && (this._inputFocus || !this._isMounted);

	            if (loose && RE_INCOMPLETE_NUMBER.test(stringValue)) {
	                attrs.input.value = stringValue;
	            } else if (loose && stringValue && !RE_NUMBER.test(stringValue)) {
	                    attrs.input.value = stringValue;
	                } else if (state.value || state.value === 0) {
	                        attrs.input.value = this._format(state.value);
	                    } else {
	                            attrs.input.value = "";
	                        }

	            if (hasFormControl && !noStyle) {
	                _extends(attrs.wrap.style, css['wrap.hasFormControl']);
	            }

	            if (mobile && !noStyle) {
	                _extends(attrs.input.style, css['input.mobile']);
	                _extends(attrs.btnUp.style, css['btnUp.mobile']);
	                _extends(attrs.btnDown.style, css['btnDown.mobile']);
	            }

	            if (!props.disabled && !props.readOnly) {
	                _extends(attrs.wrap, {
	                    onMouseUp: this.stop,
	                    onMouseLeave: this.stop
	                });

	                _extends(attrs.btnUp, {
	                    onTouchStart: this.onTouchStart.bind(this, 'up'),
	                    onTouchEnd: this.onTouchEnd,
	                    onMouseEnter: function onMouseEnter() {
	                        _this6.setState({
	                            btnUpHover: true
	                        });
	                    },
	                    onMouseLeave: function onMouseLeave() {
	                        _this6.stop();
	                        _this6.setState({
	                            btnUpHover: false,
	                            btnUpActive: false
	                        });
	                    },
	                    onMouseUp: function onMouseUp() {
	                        _this6.setState({
	                            btnUpHover: true,
	                            btnUpActive: false
	                        });
	                    },
	                    onMouseDown: function onMouseDown() {
	                        for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	                            args[_key5] = arguments[_key5];
	                        }

	                        args[0].preventDefault();
	                        args[0].persist();
	                        _this6._inputFocus = true;
	                        _this6.setState({
	                            btnUpHover: true,
	                            btnUpActive: true
	                        }, function () {
	                            _this6._invokeEventCallback.apply(_this6, ["onFocus"].concat(args));
	                            _this6.onMouseDown('up');
	                        });
	                    }
	                });

	                _extends(attrs.btnDown, {
	                    onTouchStart: this.onTouchStart.bind(this, 'down'),
	                    onTouchEnd: this.onTouchEnd,
	                    onMouseEnter: function onMouseEnter() {
	                        _this6.setState({
	                            btnDownHover: true
	                        });
	                    },
	                    onMouseLeave: function onMouseLeave() {
	                        _this6.stop();
	                        _this6.setState({
	                            btnDownHover: false,
	                            btnDownActive: false
	                        });
	                    },
	                    onMouseUp: function onMouseUp() {
	                        _this6.setState({
	                            btnDownHover: true,
	                            btnDownActive: false
	                        });
	                    },
	                    onMouseDown: function onMouseDown() {
	                        for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	                            args[_key6] = arguments[_key6];
	                        }

	                        args[0].preventDefault();
	                        args[0].persist();
	                        _this6._inputFocus = true;
	                        _this6.setState({
	                            btnDownHover: true,
	                            btnDownActive: true
	                        }, function () {
	                            _this6._invokeEventCallback.apply(_this6, ["onFocus"].concat(args));
	                            _this6.onMouseDown('down');
	                        });
	                    }
	                });

	                _extends(attrs.input, {
	                    onChange: function onChange(e) {
	                        var original = e.target.value;
	                        var val = _this6._parse(original);
	                        if (isNaN(val)) {
	                            val = null;
	                        }
	                        _this6.setState({
	                            value: _this6._isStrict ? _this6._toNumber(val) : val,
	                            stringValue: original
	                        });
	                    },
	                    onKeyDown: this._onKeyDown.bind(this),
	                    onInput: function onInput() {
	                        for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	                            args[_key7] = arguments[_key7];
	                        }

	                        _this6.saveSelection();
	                        _this6._invokeEventCallback.apply(_this6, ["onInput"].concat(args));
	                    },
	                    onSelect: function onSelect() {
	                        for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
	                            args[_key8] = arguments[_key8];
	                        }

	                        _this6.saveSelection();
	                        _this6._invokeEventCallback.apply(_this6, ["onSelect"].concat(args));
	                    },
	                    onFocus: function onFocus() {
	                        for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
	                            args[_key9] = arguments[_key9];
	                        }

	                        args[0].persist();
	                        _this6._inputFocus = true;
	                        var val = _this6._parse(args[0].target.value);
	                        _this6.setState({
	                            value: val,
	                            stringValue: val || val === 0 ? val + "" : ""
	                        }, function () {
	                            _this6._invokeEventCallback.apply(_this6, ["onFocus"].concat(args));
	                        });
	                    },
	                    onBlur: function onBlur() {
	                        for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
	                            args[_key10] = arguments[_key10];
	                        }

	                        var _isStrict = _this6._isStrict;
	                        _this6._isStrict = true;
	                        args[0].persist();
	                        _this6._inputFocus = false;
	                        var val = _this6._parse(args[0].target.value);
	                        _this6.setState({
	                            value: val
	                        }, function () {
	                            _this6._invokeEventCallback.apply(_this6, ["onBlur"].concat(args));
	                            _this6._isStrict = _isStrict;
	                        });
	                    }
	                });
	            } else {
	                if (!noStyle && props.disabled) {
	                    _extends(attrs.input.style, css['input:disabled']);
	                }
	            }

	            var InputTag = componentClass || 'input';

	            if (mobile) {
	                return _react2.default.createElement(
	                    'span',
	                    attrs.wrap,
	                    _react2.default.createElement(InputTag, attrs.input),
	                    _react2.default.createElement(
	                        'b',
	                        attrs.btnUp,
	                        _react2.default.createElement('i', { style: noStyle ? null : css.minus }),
	                        _react2.default.createElement('i', { style: noStyle ? null : css.plus })
	                    ),
	                    _react2.default.createElement(
	                        'b',
	                        attrs.btnDown,
	                        _react2.default.createElement('i', { style: noStyle ? null : css.minus })
	                    )
	                );
	            }

	            return _react2.default.createElement(
	                'span',
	                attrs.wrap,
	                _react2.default.createElement(InputTag, attrs.input),
	                _react2.default.createElement(
	                    'b',
	                    attrs.btnUp,
	                    _react2.default.createElement('i', { style: noStyle ? null : css.arrowUp })
	                ),
	                _react2.default.createElement(
	                    'b',
	                    attrs.btnDown,
	                    _react2.default.createElement('i', { style: noStyle ? null : css.arrowDown })
	                )
	            );
	        }
	    }]);

	    return NumericInput;
	}(_react.Component);

	NumericInput.propTypes = {
	    step: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
	    min: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
	    max: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
	    precision: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
	    maxLength: _propTypes2.default.number,
	    parse: _propTypes2.default.func,
	    format: _propTypes2.default.func,
	    className: _propTypes2.default.string,
	    disabled: _propTypes2.default.bool,
	    readOnly: _propTypes2.default.bool,
	    required: _propTypes2.default.bool,
	    snap: _propTypes2.default.bool,
	    noValidate: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
	    style: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]),
	    noStyle: _propTypes2.default.bool,
	    type: _propTypes2.default.string,
	    pattern: _propTypes2.default.string,
	    onFocus: _propTypes2.default.func,
	    onBlur: _propTypes2.default.func,
	    onKeyDown: _propTypes2.default.func,
	    onChange: _propTypes2.default.func,
	    onInvalid: _propTypes2.default.func,
	    onValid: _propTypes2.default.func,
	    onInput: _propTypes2.default.func,
	    onSelect: _propTypes2.default.func,
	    size: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
	    value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
	    defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
	    strict: _propTypes2.default.bool,
	    componentClass: _propTypes2.default.string,
	    mobile: function mobile(props, propName) {
	        var prop = props[propName];
	        if (prop !== true && prop !== false && prop !== 'auto' && typeof prop != 'function') {
	            return new Error('The "mobile" prop must be true, false, "auto" or a function');
	        }
	    }
	};
	NumericInput.defaultProps = {
	    step: 1,
	    min: Number.MIN_SAFE_INTEGER || -9007199254740991,
	    max: Number.MAX_SAFE_INTEGER || 9007199254740991,
	    precision: null,
	    parse: null,
	    format: null,
	    mobile: 'auto',
	    strict: false,
	    componentClass: "input",
	    style: {}
	};
	NumericInput.style = {
	    wrap: {
	        position: 'relative',
	        display: 'inline-block'
	    },

	    'wrap.hasFormControl': {
	        display: 'block'
	    },

	    arrowUp: {
	        position: 'absolute',
	        top: '50%',
	        left: '50%',
	        width: 0,
	        height: 0,
	        borderWidth: '0 0.6ex 0.6ex 0.6ex',
	        borderColor: 'transparent transparent rgba(0, 0, 0, 0.7)',
	        borderStyle: 'solid',
	        margin: '-0.3ex 0 0 -0.56ex'
	    },

	    arrowDown: {
	        position: 'absolute',
	        top: '50%',
	        left: '50%',
	        width: 0,
	        height: 0,
	        borderWidth: '0.6ex 0.6ex 0 0.6ex',
	        borderColor: 'rgba(0, 0, 0, 0.7) transparent transparent',
	        borderStyle: 'solid',
	        margin: '-0.3ex 0 0 -0.56ex'
	    },

	    plus: {
	        position: 'absolute',
	        top: '50%',
	        left: '50%',
	        width: 2,
	        height: 10,
	        background: 'rgba(0,0,0,.7)',
	        margin: '-5px 0 0 -1px'
	    },

	    minus: {
	        position: 'absolute',
	        top: '50%',
	        left: '50%',
	        width: 10,
	        height: 2,
	        background: 'rgba(0,0,0,.7)',
	        margin: '-1px 0 0 -5px'
	    },

	    btn: {
	        position: 'absolute',
	        right: 2,
	        width: '2.26ex',
	        borderColor: 'rgba(0,0,0,.1)',
	        borderStyle: 'solid',
	        textAlign: 'center',
	        cursor: 'default',
	        transition: 'all 0.1s',
	        background: 'rgba(0,0,0,.1)',
	        boxShadow: '-1px -1px 3px rgba(0,0,0,.1) inset,' + '1px 1px 3px rgba(255,255,255,.7) inset'
	    },

	    btnUp: {
	        top: 2,
	        bottom: '50%',
	        borderRadius: '2px 2px 0 0',
	        borderWidth: '1px 1px 0 1px'
	    },

	    'btnUp.mobile': {
	        width: '3.3ex',
	        bottom: 2,
	        boxShadow: 'none',
	        borderRadius: 2,
	        borderWidth: 1
	    },

	    btnDown: {
	        top: '50%',
	        bottom: 2,
	        borderRadius: '0 0 2px 2px',
	        borderWidth: '0 1px 1px 1px'
	    },

	    'btnDown.mobile': {
	        width: '3.3ex',
	        bottom: 2,
	        left: 2,
	        top: 2,
	        right: 'auto',
	        boxShadow: 'none',
	        borderRadius: 2,
	        borderWidth: 1
	    },

	    'btn:hover': {
	        background: 'rgba(0,0,0,.2)'
	    },

	    'btn:active': {
	        background: 'rgba(0,0,0,.3)',
	        boxShadow: '0 1px 3px rgba(0,0,0,.2) inset,' + '-1px -1px 4px rgba(255,255,255,.5) inset'
	    },

	    'btn:disabled': {
	        opacity: 0.5,
	        boxShadow: 'none',
	        cursor: 'not-allowed'
	    },

	    input: {
	        paddingRight: '3ex',
	        boxSizing: 'border-box',
	        fontSize: 'inherit'
	    },

	    'input:not(.form-control)': {
	        border: '1px solid #ccc',
	        borderRadius: 2,
	        paddingLeft: 4,
	        display: 'block',
	        WebkitAppearance: 'none',
	        lineHeight: 'normal'
	    },

	    'input.mobile': {
	        paddingLeft: ' 3.4ex',
	        paddingRight: '3.4ex',
	        textAlign: 'center'
	    },

	    'input:focus': {},

	    'input:disabled': {
	        color: 'rgba(0, 0, 0, 0.3)',
	        textShadow: '0 1px 0 rgba(255, 255, 255, 0.8)'
	    }
	};
	NumericInput.SPEED = 50;
	NumericInput.DELAY = 500;
	NumericInput.DIRECTION_UP = "up";
	NumericInput.DIRECTION_DOWN = "down";


	module.exports = NumericInput;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

/***/ })
/******/ ]);

/***/ }),

/***/ "./node_modules/react-popper/lib/esm/Manager.js":
/*!******************************************************!*\
  !*** ./node_modules/react-popper/lib/esm/Manager.js ***!
  \******************************************************/
/*! exports provided: ManagerReferenceNodeContext, ManagerReferenceNodeSetterContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerReferenceNodeContext", function() { return ManagerReferenceNodeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerReferenceNodeSetterContext", function() { return ManagerReferenceNodeSetterContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Manager; });
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var create_react_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! create-react-context */ "./node_modules/create-react-context/lib/index.js");
/* harmony import */ var create_react_context__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(create_react_context__WEBPACK_IMPORTED_MODULE_4__);





var ManagerReferenceNodeContext = create_react_context__WEBPACK_IMPORTED_MODULE_4___default()();
var ManagerReferenceNodeSetterContext = create_react_context__WEBPACK_IMPORTED_MODULE_4___default()();

var Manager =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(Manager, _React$Component);

  function Manager() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "referenceNode", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "setReferenceNode", function (newReferenceNode) {
      if (newReferenceNode && _this.referenceNode !== newReferenceNode) {
        _this.referenceNode = newReferenceNode;

        _this.forceUpdate();
      }
    });

    return _this;
  }

  var _proto = Manager.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.referenceNode = null;
  };

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](ManagerReferenceNodeContext.Provider, {
      value: this.referenceNode
    }, react__WEBPACK_IMPORTED_MODULE_3__["createElement"](ManagerReferenceNodeSetterContext.Provider, {
      value: this.setReferenceNode
    }, this.props.children));
  };

  return Manager;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);



/***/ }),

/***/ "./node_modules/react-popper/lib/esm/Popper.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-popper/lib/esm/Popper.js ***!
  \*****************************************************/
/*! exports provided: InnerPopper, placements, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerPopper", function() { return InnerPopper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return placements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Popper; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! deep-equal */ "./node_modules/deep-equal/index.js");
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(deep_equal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Manager */ "./node_modules/react-popper/lib/esm/Manager.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./node_modules/react-popper/lib/esm/utils.js");










var initialStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: 0,
  pointerEvents: 'none'
};
var initialArrowStyle = {};
var InnerPopper =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3___default()(InnerPopper, _React$Component);

  function InnerPopper() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "state", {
      data: undefined,
      placement: undefined
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "popperInstance", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "popperNode", null);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "arrowNode", null);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "setPopperNode", function (popperNode) {
      if (!popperNode || _this.popperNode === popperNode) return;
      Object(_utils__WEBPACK_IMPORTED_MODULE_9__["setRef"])(_this.props.innerRef, popperNode);
      _this.popperNode = popperNode;

      _this.updatePopperInstance();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "setArrowNode", function (arrowNode) {
      _this.arrowNode = arrowNode;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "updateStateModifier", {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        var placement = data.placement;

        _this.setState({
          data: data,
          placement: placement
        });

        return data;
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "getOptions", function () {
      return {
        placement: _this.props.placement,
        eventsEnabled: _this.props.eventsEnabled,
        positionFixed: _this.props.positionFixed,
        modifiers: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, _this.props.modifiers, {
          arrow: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, _this.props.modifiers && _this.props.modifiers.arrow, {
            enabled: !!_this.arrowNode,
            element: _this.arrowNode
          }),
          applyStyle: {
            enabled: false
          },
          updateStateModifier: _this.updateStateModifier
        })
      };
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "getPopperStyle", function () {
      return !_this.popperNode || !_this.state.data ? initialStyle : _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
        position: _this.state.data.offsets.popper.position
      }, _this.state.data.styles);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "getPopperPlacement", function () {
      return !_this.state.data ? undefined : _this.state.placement;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "getArrowStyle", function () {
      return !_this.arrowNode || !_this.state.data ? initialArrowStyle : _this.state.data.arrowStyles;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "getOutOfBoundariesState", function () {
      return _this.state.data ? _this.state.data.hide : undefined;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "destroyPopperInstance", function () {
      if (!_this.popperInstance) return;

      _this.popperInstance.destroy();

      _this.popperInstance = null;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "updatePopperInstance", function () {
      _this.destroyPopperInstance();

      var _assertThisInitialize = _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this),
          popperNode = _assertThisInitialize.popperNode;

      var referenceElement = _this.props.referenceElement;
      if (!referenceElement || !popperNode) return;
      _this.popperInstance = new popper_js__WEBPACK_IMPORTED_MODULE_7__["default"](referenceElement, popperNode, _this.getOptions());
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "scheduleUpdate", function () {
      if (_this.popperInstance) {
        _this.popperInstance.scheduleUpdate();
      }
    });

    return _this;
  }

  var _proto = InnerPopper.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // If the Popper.js options have changed, update the instance (destroy + create)
    if (this.props.placement !== prevProps.placement || this.props.referenceElement !== prevProps.referenceElement || this.props.positionFixed !== prevProps.positionFixed || !deep_equal__WEBPACK_IMPORTED_MODULE_5___default()(this.props.modifiers, prevProps.modifiers, {
      strict: true
    })) {
      // develop only check that modifiers isn't being updated needlessly
      if (true) {
        if (this.props.modifiers !== prevProps.modifiers && this.props.modifiers != null && prevProps.modifiers != null && Object(_utils__WEBPACK_IMPORTED_MODULE_9__["shallowEqual"])(this.props.modifiers, prevProps.modifiers)) {
          console.warn("'modifiers' prop reference updated even though all values appear the same.\nConsider memoizing the 'modifiers' object to avoid needless rendering.");
        }
      }

      this.updatePopperInstance();
    } else if (this.props.eventsEnabled !== prevProps.eventsEnabled && this.popperInstance) {
      this.props.eventsEnabled ? this.popperInstance.enableEventListeners() : this.popperInstance.disableEventListeners();
    } // A placement difference in state means popper determined a new placement
    // apart from the props value. By the time the popper element is rendered with
    // the new position Popper has already measured it, if the place change triggers
    // a size change it will result in a misaligned popper. So we schedule an update to be sure.


    if (prevState.placement !== this.state.placement) {
      this.scheduleUpdate();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    Object(_utils__WEBPACK_IMPORTED_MODULE_9__["setRef"])(this.props.innerRef, null);
    this.destroyPopperInstance();
  };

  _proto.render = function render() {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_9__["unwrapArray"])(this.props.children)({
      ref: this.setPopperNode,
      style: this.getPopperStyle(),
      placement: this.getPopperPlacement(),
      outOfBoundaries: this.getOutOfBoundariesState(),
      scheduleUpdate: this.scheduleUpdate,
      arrowProps: {
        ref: this.setArrowNode,
        style: this.getArrowStyle()
      }
    });
  };

  return InnerPopper;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(InnerPopper, "defaultProps", {
  placement: 'bottom',
  eventsEnabled: true,
  referenceElement: undefined,
  positionFixed: false
});

var placements = popper_js__WEBPACK_IMPORTED_MODULE_7__["default"].placements;

function Popper(_ref) {
  var referenceElement = _ref.referenceElement,
      props = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["referenceElement"]);

  return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_Manager__WEBPACK_IMPORTED_MODULE_8__["ManagerReferenceNodeContext"].Consumer, null, function (referenceNode) {
    return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](InnerPopper, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
      referenceElement: referenceElement !== undefined ? referenceElement : referenceNode
    }, props));
  });
}

/***/ }),

/***/ "./node_modules/react-popper/lib/esm/Reference.js":
/*!********************************************************!*\
  !*** ./node_modules/react-popper/lib/esm/Reference.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Reference; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Manager */ "./node_modules/react-popper/lib/esm/Manager.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./node_modules/react-popper/lib/esm/utils.js");









var InnerReference =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(InnerReference, _React$Component);

  function InnerReference() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "refHandler", function (node) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["setRef"])(_this.props.innerRef, node);
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["safeInvoke"])(_this.props.setReferenceNode, node);
    });

    return _this;
  }

  var _proto = InnerReference.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["setRef"])(this.props.innerRef, null);
  };

  _proto.render = function render() {
    warning__WEBPACK_IMPORTED_MODULE_5___default()(Boolean(this.props.setReferenceNode), '`Reference` should not be used outside of a `Manager` component.');
    return Object(_utils__WEBPACK_IMPORTED_MODULE_7__["unwrapArray"])(this.props.children)({
      ref: this.refHandler
    });
  };

  return InnerReference;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

function Reference(props) {
  return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Manager__WEBPACK_IMPORTED_MODULE_6__["ManagerReferenceNodeSetterContext"].Consumer, null, function (setReferenceNode) {
    return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](InnerReference, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      setReferenceNode: setReferenceNode
    }, props));
  });
}

/***/ }),

/***/ "./node_modules/react-popper/lib/esm/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-popper/lib/esm/index.js ***!
  \****************************************************/
/*! exports provided: Popper, placements, Manager, Reference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Popper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popper */ "./node_modules/react-popper/lib/esm/Popper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popper", function() { return _Popper__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return _Popper__WEBPACK_IMPORTED_MODULE_0__["placements"]; });

/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Manager */ "./node_modules/react-popper/lib/esm/Manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Manager", function() { return _Manager__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Reference__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Reference */ "./node_modules/react-popper/lib/esm/Reference.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reference", function() { return _Reference__WEBPACK_IMPORTED_MODULE_2__["default"]; });

// Public components



 // Public types

/***/ }),

/***/ "./node_modules/react-popper/lib/esm/utils.js":
/*!****************************************************!*\
  !*** ./node_modules/react-popper/lib/esm/utils.js ***!
  \****************************************************/
/*! exports provided: unwrapArray, safeInvoke, shallowEqual, setRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unwrapArray", function() { return unwrapArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeInvoke", function() { return safeInvoke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowEqual", function() { return shallowEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRef", function() { return setRef; });
/**
 * Takes an argument and if it's an array, returns the first item in the array,
 * otherwise returns the argument. Used for Preact compatibility.
 */
var unwrapArray = function unwrapArray(arg) {
  return Array.isArray(arg) ? arg[0] : arg;
};
/**
 * Takes a maybe-undefined function and arbitrary args and invokes the function
 * only if it is defined.
 */

var safeInvoke = function safeInvoke(fn) {
  if (typeof fn === "function") {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(void 0, args);
  }
};
/**
 * Does a shallow equality check of two objects by comparing the reference
 * equality of each value.
 */

var shallowEqual = function shallowEqual(objA, objB) {
  var aKeys = Object.keys(objA);
  var bKeys = Object.keys(objB);

  if (bKeys.length !== aKeys.length) {
    return false;
  }

  for (var i = 0; i < bKeys.length; i++) {
    var key = aKeys[i];

    if (objA[key] !== objB[key]) {
      return false;
    }
  }

  return true;
};
/**
 * Sets a ref using either a ref callback or a ref object
 */

var setRef = function setRef(ref, node) {
  // if its a function call it
  if (typeof ref === "function") {
    return safeInvoke(ref, node);
  } // otherwise we should treat it as a ref object
  else if (ref != null) {
      ref.current = node;
    }
};

/***/ }),

/***/ "./node_modules/react-transition-group/esm/CSSTransition.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/CSSTransition.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/addClass */ "./node_modules/react-transition-group/node_modules/dom-helpers/esm/addClass.js");
/* harmony import */ var dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dom-helpers/removeClass */ "./node_modules/react-transition-group/node_modules/dom-helpers/esm/removeClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");










var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return Object(dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_4__["default"])(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return Object(dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_5__["default"])(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](http://www.nganimate.org/) library, you should use it if you're
 * using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (node, appearing) {
      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(node, appearing);
      }
    };

    _this.onEntering = function (node, appearing) {
      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(node, appearing);
      }
    };

    _this.onEntered = function (node, appearing) {
      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(node, appearing);
      }
    };

    _this.onExit = function (node) {
      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.onExiting = function (node) {
      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.onExited = function (node) {
      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    if (type === 'appear' && phase === 'done') {
      className += " " + this.getClassNames('enter').doneClassName;
    } // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    this.appliedClasses[type][phase] = className;

    _addClass(node, className);
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["classNames"]);

    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Transition__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  true ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _Transition__WEBPACK_IMPORTED_MODULE_7__["default"].propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided and it
   * will be suffixed for each stage: e.g.
   *
   * `classNames="fade"` applies `fade-appear`, `fade-appear-active`,
   * `fade-appear-done`, `fade-enter`, `fade-enter-active`, `fade-enter-done`,
   * `fade-exit`, `fade-exit-active`, and `fade-exit-done`.
   *
   * **Note**: `fade-appear-done` and `fade-enter-done` will _both_ be applied.
   * This allows you to define different behavior for when appearing is done and
   * when regular entering is done, using selectors like
   * `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply an
   * epic entrance animation when element first appears in the DOM using
   * [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   * simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__["classNamesShape"],

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement)
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
}) : undefined;
/* harmony default export */ __webpack_exports__["default"] = (CSSTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/ReplaceTransition.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/ReplaceTransition.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");






/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */

var ReplaceTransition =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;
    var child = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children)[idx];
    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) this.props[handler](react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in"]);

    var _React$Children$toArr = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroup__WEBPACK_IMPORTED_MODULE_5__["default"], props, inProp ? react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

ReplaceTransition.propTypes =  true ? {
  in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  children: function children(props, propName) {
    if (react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (ReplaceTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/SwitchTransition.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/SwitchTransition.js ***!
  \*********************************************************************/
/*! exports provided: modes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modes", function() { return modes; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");


var _leaveRenders, _enterRenders;






function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren) return false;

  if (react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(oldChildren) && react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
    return false;
  }

  return true;
}
/**
 * Enum of modes for SwitchTransition component
 * @enum { string }
 */


var modes = {
  out: 'out-in',
  in: 'in-out'
};

var callHook = function callHook(element, name, cb) {
  return function () {
    var _element$props;

    element.props[name] && (_element$props = element.props)[name].apply(_element$props, arguments);
    cb();
  };
};

var leaveRenders = (_leaveRenders = {}, _leaveRenders[modes.out] = function (_ref) {
  var current = _ref.current,
      changeState = _ref.changeState;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"], null);
    })
  });
}, _leaveRenders[modes.in] = function (_ref2) {
  var current = _ref2.current,
      changeState = _ref2.changeState,
      children = _ref2.children;
  return [current, react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]);
    })
  })];
}, _leaveRenders);
var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function (_ref3) {
  var children = _ref3.children,
      changeState = _ref3.changeState;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"], react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
        in: true
      }));
    })
  });
}, _enterRenders[modes.in] = function (_ref4) {
  var current = _ref4.current,
      children = _ref4.children,
      changeState = _ref4.changeState;
  return [react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"], react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
        in: true
      }));
    })
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true
  })];
}, _enterRenders);
/**
 * A transition component inspired by the [vue transition modes](https://vuejs.org/v2/guide/transitions.html#Transition-Modes).
 * You can use it when you want to control the render between state transitions.
 * Based on the selected mode and the child's key which is the `Transition` or `CSSTransition` component, the `SwitchTransition` makes a consistent transition between them.
 *
 * If the `out-in` mode is selected, the `SwitchTransition` waits until the old child leaves and then inserts a new child.
 * If the `in-out` mode is selected, the `SwitchTransition` inserts a new child first, waits for the new child to enter and then removes the old child
 *
 * ```jsx
 *
 * function App() {
 *  const [state, setState] = useState(false);
 *  return (
 *    <SwitchTransition>
 *      <FadeTransition key={state ? "Goodbye, world!" : "Hello, world!"}
 *        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
 *        classNames='fade' >
 *        <button onClick={() => setState(state => !state)}>
 *          {state ? "Goodbye, world!" : "Hello, world!"}
 *        </button>
 *      </FadeTransition>
 *    </SwitchTransition>
 *  )
 * }
 * ```
 */

var SwitchTransition =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SwitchTransition, _React$Component);

  function SwitchTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      status: _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"],
      current: null
    };
    _this.appeared = false;

    _this.changeState = function (status, current) {
      if (current === void 0) {
        current = _this.state.current;
      }

      _this.setState({
        status: status,
        current: current
      });
    };

    return _this;
  }

  var _proto = SwitchTransition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };

  SwitchTransition.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.children == null) {
      return {
        current: null
      };
    }

    if (state.status === _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"] && props.mode === modes.in) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]
      };
    }

    if (state.current && areChildrenDifferent(state.current, props.children)) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_3__["EXITING"]
      };
    }

    return {
      current: react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(props.children, {
        in: true
      })
    };
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        mode = _this$props.mode,
        _this$state = this.state,
        status = _this$state.status,
        current = _this$state.current;
    var data = {
      children: children,
      current: current,
      changeState: this.changeState,
      status: status
    };
    var component;

    switch (status) {
      case _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]:
        component = enterRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_3__["EXITING"]:
        component = leaveRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"]:
        component = current;
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, component);
  };

  return SwitchTransition;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

SwitchTransition.propTypes =  true ? {
  /**
   * Transition modes.
   * `out-in`: Current element transitions out first, then when complete, the new element transitions in.
   * `in-out: New element transitions in first, then when complete, the current element transitions out.`
   *
   * @type {'out-in'|'in-out'}
   */
  mode: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf([modes.in, modes.out]),

  /**
   * Any `Transition` or `CSSTransition` component
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired])
} : undefined;
SwitchTransition.defaultProps = {
  mode: modes.out
};
/* harmony default export */ __webpack_exports__["default"] = (SwitchTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/Transition.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/Transition.js ***!
  \***************************************************************/
/*! exports provided: UNMOUNTED, EXITED, ENTERING, ENTERED, EXITING, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNMOUNTED", function() { return UNMOUNTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITED", function() { return EXITED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERING", function() { return ENTERING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERED", function() { return ENTERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITING", function() { return EXITING; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");








var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();
      var node = react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing);

      _this2.onTransitionEnd(node, enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      this.props.addEndListener(node, this.nextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      // allows for nested Transitions
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
        value: null
      }, children(status, childProps));
    }

    var child = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.only(children);
    return (// allows for nested Transitions
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
        value: null
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(child, childProps))
    );
  };

  return Transition;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

Transition.contextType = _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"];
Transition.propTypes =  true ? {
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Normally a component is not transitioned if it is shown when the
   * `<Transition>` component mounts. If you want to transition on the first
   * mount set `appear` to `true`, and the component will transition in as soon
   * as the `<Transition>` mounts.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_6__["timeoutsShape"];
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func // Name the function so it is clearer in the documentation

} : undefined;

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;
/* harmony default export */ __webpack_exports__["default"] = (Transition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroup.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroup.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");
/* harmony import */ var _utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-transition-group/esm/utils/ChildMapping.js");









var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getInitialChildMapping"])(nextProps, handleExited) : Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getNextChildMapping"])(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getChildMapping"])(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
        value: contextValue
      }, children);
    }

    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
      value: contextValue
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Component, props, children));
  };

  return TransitionGroup;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

TransitionGroup.propTypes =  true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
} : undefined;
TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (TransitionGroup);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroupContext.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroupContext.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));

/***/ }),

/***/ "./node_modules/react-transition-group/esm/config.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/config.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  disabled: false
});

/***/ }),

/***/ "./node_modules/react-transition-group/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/index.js ***!
  \**********************************************************/
/*! exports provided: CSSTransition, ReplaceTransition, SwitchTransition, TransitionGroup, Transition, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CSSTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSTransition */ "./node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSTransition", function() { return _CSSTransition__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReplaceTransition */ "./node_modules/react-transition-group/esm/ReplaceTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplaceTransition", function() { return _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwitchTransition */ "./node_modules/react-transition-group/esm/SwitchTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchTransition", function() { return _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionGroup", function() { return _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return _Transition__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _config__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/ChildMapping.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/ChildMapping.js ***!
  \***********************************************************************/
/*! exports provided: getChildMapping, mergeChildMappings, getInitialChildMapping, getNextChildMapping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildMapping", function() { return getChildMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeChildMappings", function() { return mergeChildMappings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialChildMapping", function() { return getInitialChildMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextChildMapping", function() { return getNextChildMapping; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        in: false
      });
    } else if (hasNext && hasPrev && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/PropTypes.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/PropTypes.js ***!
  \********************************************************************/
/*! exports provided: timeoutsShape, classNamesShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeoutsShape", function() { return timeoutsShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classNamesShape", function() { return classNamesShape; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var timeoutsShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  appear: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
}).isRequired]) : undefined;
var classNamesShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  active: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}), prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  enterDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  enterActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exitDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exitActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
})]) : undefined;

/***/ }),

/***/ "./node_modules/react-transition-group/node_modules/dom-helpers/esm/addClass.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-transition-group/node_modules/dom-helpers/esm/addClass.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addClass; });
/* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass */ "./node_modules/react-transition-group/node_modules/dom-helpers/esm/hasClass.js");

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!Object(_hasClass__WEBPACK_IMPORTED_MODULE_0__["default"])(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

/***/ }),

/***/ "./node_modules/react-transition-group/node_modules/dom-helpers/esm/hasClass.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-transition-group/node_modules/dom-helpers/esm/hasClass.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hasClass; });
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/***/ }),

/***/ "./node_modules/react-transition-group/node_modules/dom-helpers/esm/removeClass.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/react-transition-group/node_modules/dom-helpers/esm/removeClass.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeClass; });
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    ;
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

/***/ }),

/***/ "./node_modules/regexp.prototype.flags/implementation.js":
/*!***************************************************************!*\
  !*** ./node_modules/regexp.prototype.flags/implementation.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $Object = Object;
var $TypeError = TypeError;

module.exports = function flags() {
	if (this != null && this !== $Object(this)) {
		throw new $TypeError('RegExp.prototype.flags getter called on non-object');
	}
	var result = '';
	if (this.global) {
		result += 'g';
	}
	if (this.ignoreCase) {
		result += 'i';
	}
	if (this.multiline) {
		result += 'm';
	}
	if (this.dotAll) {
		result += 's';
	}
	if (this.unicode) {
		result += 'u';
	}
	if (this.sticky) {
		result += 'y';
	}
	return result;
};


/***/ }),

/***/ "./node_modules/regexp.prototype.flags/index.js":
/*!******************************************************!*\
  !*** ./node_modules/regexp.prototype.flags/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");
var callBind = __webpack_require__(/*! es-abstract/helpers/callBind */ "./node_modules/es-abstract/helpers/callBind.js");

var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/regexp.prototype.flags/implementation.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/regexp.prototype.flags/polyfill.js");
var shim = __webpack_require__(/*! ./shim */ "./node_modules/regexp.prototype.flags/shim.js");

var flagsBound = callBind(implementation);

define(flagsBound, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = flagsBound;


/***/ }),

/***/ "./node_modules/regexp.prototype.flags/polyfill.js":
/*!*********************************************************!*\
  !*** ./node_modules/regexp.prototype.flags/polyfill.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/regexp.prototype.flags/implementation.js");

var supportsDescriptors = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js").supportsDescriptors;
var $gOPD = Object.getOwnPropertyDescriptor;
var $TypeError = TypeError;

module.exports = function getPolyfill() {
	if (!supportsDescriptors) {
		throw new $TypeError('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
	}
	if ((/a/mig).flags === 'gim') {
		var descriptor = $gOPD(RegExp.prototype, 'flags');
		if (descriptor && typeof descriptor.get === 'function' && typeof (/a/).dotAll === 'boolean') {
			return descriptor.get;
		}
	}
	return implementation;
};


/***/ }),

/***/ "./node_modules/regexp.prototype.flags/shim.js":
/*!*****************************************************!*\
  !*** ./node_modules/regexp.prototype.flags/shim.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var supportsDescriptors = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js").supportsDescriptors;
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/regexp.prototype.flags/polyfill.js");
var gOPD = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;
var TypeErr = TypeError;
var getProto = Object.getPrototypeOf;
var regex = /a/;

module.exports = function shimFlags() {
	if (!supportsDescriptors || !getProto) {
		throw new TypeErr('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
	}
	var polyfill = getPolyfill();
	var proto = getProto(regex);
	var descriptor = gOPD(proto, 'flags');
	if (!descriptor || descriptor.get !== polyfill) {
		defineProperty(proto, 'flags', {
			configurable: true,
			enumerable: false,
			get: polyfill
		});
	}
	return polyfill;
};


/***/ }),

/***/ "./node_modules/tabbable/index.js":
/*!****************************************!*\
  !*** ./node_modules/tabbable/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var candidateSelectors = [
  'input',
  'select',
  'textarea',
  'a[href]',
  'button',
  '[tabindex]',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
];
var candidateSelector = candidateSelectors.join(',');

var matches = typeof Element === 'undefined'
  ? function () {}
  : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

function tabbable(el, options) {
  options = options || {};

  var elementDocument = el.ownerDocument || el;
  var regularTabbables = [];
  var orderedTabbables = [];

  var untouchabilityChecker = new UntouchabilityChecker(elementDocument);
  var candidates = el.querySelectorAll(candidateSelector);

  if (options.includeContainer) {
    if (matches.call(el, candidateSelector)) {
      candidates = Array.prototype.slice.apply(candidates);
      candidates.unshift(el);
    }
  }

  var i, candidate, candidateTabindex;
  for (i = 0; i < candidates.length; i++) {
    candidate = candidates[i];

    if (!isNodeMatchingSelectorTabbable(candidate, untouchabilityChecker)) continue;

    candidateTabindex = getTabindex(candidate);
    if (candidateTabindex === 0) {
      regularTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        node: candidate,
      });
    }
  }

  var tabbableNodes = orderedTabbables
    .sort(sortOrderedTabbables)
    .map(function(a) { return a.node })
    .concat(regularTabbables);

  return tabbableNodes;
}

tabbable.isTabbable = isTabbable;
tabbable.isFocusable = isFocusable;

function isNodeMatchingSelectorTabbable(node, untouchabilityChecker) {
  if (
    !isNodeMatchingSelectorFocusable(node, untouchabilityChecker)
    || isNonTabbableRadio(node)
    || getTabindex(node) < 0
  ) {
    return false;
  }
  return true;
}

function isTabbable(node, untouchabilityChecker) {
  if (!node) throw new Error('No node provided');
  if (matches.call(node, candidateSelector) === false) return false;
  return isNodeMatchingSelectorTabbable(node, untouchabilityChecker);
}

function isNodeMatchingSelectorFocusable(node, untouchabilityChecker) {
  untouchabilityChecker = untouchabilityChecker || new UntouchabilityChecker(node.ownerDocument || node);
  if (
    node.disabled
    || isHiddenInput(node)
    || untouchabilityChecker.isUntouchable(node)
  ) {
    return false;
  }
  return true;
}

var focusableCandidateSelector = candidateSelectors.concat('iframe').join(',');
function isFocusable(node, untouchabilityChecker) {
  if (!node) throw new Error('No node provided');
  if (matches.call(node, focusableCandidateSelector) === false) return false;
  return isNodeMatchingSelectorFocusable(node, untouchabilityChecker);
}

function getTabindex(node) {
  var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);
  if (!isNaN(tabindexAttr)) return tabindexAttr;
  // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // so if they don't have a tabindex attribute specifically set, assume it's 0.
  if (isContentEditable(node)) return 0;
  return node.tabIndex;
}

function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
}

// Array.prototype.find not available in IE.
function find(list, predicate) {
  for (var i = 0, length = list.length; i < length; i++) {
    if (predicate(list[i])) return list[i];
  }
}

function isContentEditable(node) {
  return node.contentEditable === 'true';
}

function isInput(node) {
  return node.tagName === 'INPUT';
}

function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
}

function isRadio(node) {
  return isInput(node) && node.type === 'radio';
}

function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
}

function getCheckedRadio(nodes) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked) {
      return nodes[i];
    }
  }
}

function isTabbableRadio(node) {
  if (!node.name) return true;
  // This won't account for the edge case where you have radio groups with the same
  // in separate forms on the same page.
  var radioSet = node.ownerDocument.querySelectorAll('input[type="radio"][name="' + node.name + '"]');
  var checked = getCheckedRadio(radioSet);
  return !checked || checked === node;
}

// An element is "untouchable" if *it or one of its ancestors* has
// `visibility: hidden` or `display: none`.
function UntouchabilityChecker(elementDocument) {
  this.doc = elementDocument;
  // Node cache must be refreshed on every check, in case
  // the content of the element has changed. The cache contains tuples
  // mapping nodes to their boolean result.
  this.cache = [];
}

// getComputedStyle accurately reflects `visibility: hidden` of ancestors
// but not `display: none`, so we need to recursively check parents.
UntouchabilityChecker.prototype.hasDisplayNone = function hasDisplayNone(node, nodeComputedStyle) {
  if (node.nodeType !== Node.ELEMENT_NODE) return false;

    // Search for a cached result.
    var cached = find(this.cache, function(item) {
      return item === node;
    });
    if (cached) return cached[1];

    nodeComputedStyle = nodeComputedStyle || this.doc.defaultView.getComputedStyle(node);

    var result = false;

    if (nodeComputedStyle.display === 'none') {
      result = true;
    } else if (node.parentNode) {
      result = this.hasDisplayNone(node.parentNode);
    }

    this.cache.push([node, result]);

    return result;
}

UntouchabilityChecker.prototype.isUntouchable = function isUntouchable(node) {
  if (node === this.doc.documentElement) return false;
  var computedStyle = this.doc.defaultView.getComputedStyle(node);
  if (this.hasDisplayNone(node, computedStyle)) return true;
  return computedStyle.visibility === 'hidden';
}

module.exports = tabbable;


/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/xtend/immutable.js":
/*!*****************************************!*\
  !*** ./node_modules/xtend/immutable.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ })

}]);
//# sourceMappingURL=0.main.js.map