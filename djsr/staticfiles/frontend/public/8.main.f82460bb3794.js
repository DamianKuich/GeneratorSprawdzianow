(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./djsr/frontend/src/components/ExamEditorSidePanel.js":
/*!*************************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditorSidePanel.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_resize_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-resize-panel */ "./node_modules/react-resize-panel/dist/index.esm.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");



var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    sidePanel: {
      backgroundColor: theme.palette.background.paper
    }
  };
});

var ExamEditorSidePanel = function ExamEditorSidePanel(_ref) {
  var children = _ref.children;
  var classes = useStyles();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_resize_panel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    direction: "e",
    style: {
      flexGrow: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.sidePanel
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (ExamEditorSidePanel);

/***/ }),

/***/ "./djsr/frontend/src/components/ExamEditorSubComponents/AddTaskDialog.js":
/*!*******************************************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditorSubComponents/AddTaskDialog.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _AddTask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../AddTask */ "./djsr/frontend/src/components/AddTask.js");
/* harmony import */ var _TaskParser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TaskParser */ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskParser.js");
/* harmony import */ var lodash_collection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/collection */ "./node_modules/lodash/collection.js");
/* harmony import */ var lodash_collection__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_collection__WEBPACK_IMPORTED_MODULE_10__);












var AddTaskDialog = function AddTaskDialog(_ref) {
  var open = _ref.open,
      handleClose = _ref.handleClose,
      indexOffset = _ref.indexOffset,
      pushTaskAtIndex = _ref.pushTaskAtIndex,
      index = _ref.index;

  var onTaskAdd = function onTaskAdd(task) {
    var draggedItem = Object(_TaskParser__WEBPACK_IMPORTED_MODULE_9__["taskParser"])(task);
    draggedItem.currentAnswers = JSON.parse(JSON.stringify(draggedItem.answers));
    var currentDataSetAnswers = draggedItem.currentAnswers;
    console.log("dragged item", draggedItem, currentDataSetAnswers);
    var correctAnswersIndex = [Math.floor(Math.random() * (currentDataSetAnswers.correctans.length - 1))];
    console.log(correctAnswersIndex, "correctAnswersIndex", currentDataSetAnswers.length);
    var incorrectAnswersIndexes = currentDataSetAnswers.wronganswers.map(function (item, index) {
      return index;
    });
    var answersSet = []; // [sampleSize(currentDataSetAnswers.allanswers,3).map];

    answersSet = answersSet.concat(Object(lodash_collection__WEBPACK_IMPORTED_MODULE_10__["sampleSize"])(correctAnswersIndex).map(function (item) {
      return {
        index: item,
        isCorrect: true
      };
    }));
    answersSet = answersSet.concat(Object(lodash_collection__WEBPACK_IMPORTED_MODULE_10__["sampleSize"])(incorrectAnswersIndexes, 3).map(function (item) {
      return {
        index: item,
        isCorrect: false
      };
    }));
    answersSet = Object(lodash_collection__WEBPACK_IMPORTED_MODULE_10__["shuffle"])(answersSet);
    draggedItem.currentAnswers.answersIndexes = answersSet;
    draggedItem.maxPoints = draggedItem.points;
    pushTaskAtIndex(draggedItem, index + indexOffset);
    handleClose();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1__["default"], {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "form-dialog-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "form-dialog-title"
  }, "Dodaj zadanie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Wybierz jakie umiej\u0119tno\u015B\u0107i ma sprwadza\u0107 zadanie."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddTask__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onTaskAdd: onTaskAdd
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (AddTaskDialog);

/***/ }),

/***/ "./djsr/frontend/src/components/ExamEditorSubComponents/AddTaskWithDropdownMenu.js":
/*!*****************************************************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditorSubComponents/AddTaskWithDropdownMenu.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _AddTaskDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddTaskDialog */ "./djsr/frontend/src/components/ExamEditorSubComponents/AddTaskDialog.js");
/* harmony import */ var _TaskOverlayButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TaskOverlayButton */ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskOverlayButton.js");
/* harmony import */ var _material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/AddCircle */ "./node_modules/@material-ui/icons/AddCircle.js");
/* harmony import */ var _material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_5__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var AddTaskWithDropdownMenu = function AddTaskWithDropdownMenu(_ref) {
  var index = _ref.index,
      pushTaskAtIndex = _ref.pushTaskAtIndex,
      props = _objectWithoutProperties(_ref, ["index", "pushTaskAtIndex"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    anchorEl: null,
    open: false,
    indexOffset: 0
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1]; // const [open, setOpen] = React.useState(false);


  var anchorEl = state.anchorEl;
  var open = state.open;
  var indexOffset = state.indexOffset;

  var handleOpenDialog = function handleOpenDialog() {
    // setOpen(true);
    setState({
      open: true,
      anchorEl: anchorEl,
      indexOffset: indexOffset
    });
  };

  var handleCloseDialog = function handleCloseDialog() {
    // setOpen(false);
    setState({
      open: false,
      anchorEl: anchorEl,
      indexOffset: indexOffset
    });
  };

  var handleClick = function handleClick(event) {
    // setAnchorEl(event.currentTarget);
    setState({
      anchorEl: event.currentTarget,
      open: open,
      indexOffset: indexOffset
    });
  };

  var handleUpChoose = function handleUpChoose() {
    setState({
      open: true,
      anchorEl: null,
      indexOffset: 0
    });
  };

  var handleDownChoose = function handleDownChoose() {
    setState({
      open: true,
      anchorEl: null,
      indexOffset: 1
    });
  };

  var handleClose = function handleClose() {
    setState({
      anchorEl: null,
      open: open,
      indexOffset: indexOffset
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TaskOverlayButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: handleClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "simple-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: handleUpChoose
  }, "Dodaj zadanie powy\u017Cej"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: handleDownChoose
  }, "Dodaj zadanie poni\u017Cej")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddTaskDialog__WEBPACK_IMPORTED_MODULE_3__["default"], {
    open: open,
    handleClose: handleCloseDialog,
    indexOffset: indexOffset,
    index: index,
    pushTaskAtIndex: pushTaskAtIndex
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AddTaskWithDropdownMenu);

/***/ }),

/***/ "./djsr/frontend/src/components/ExamEditorSubComponents/CollapseMenuContainer.js":
/*!***************************************************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditorSubComponents/CollapseMenuContainer.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/index.js");



var CollapseMenuContainer = function CollapseMenuContainer(_ref) {
  var currentTabId = _ref.currentTabId,
      id = _ref.id,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_1__["default"], {
    "in": id === currentTabId,
    style: {
      width: "100%"
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (CollapseMenuContainer);

/***/ }),

/***/ "./djsr/frontend/src/components/ExamEditorSubComponents/EditTaskAnswerSpace.js":
/*!*************************************************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditorSubComponents/EditTaskAnswerSpace.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TaskOverlayButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskOverlayButton */ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskOverlayButton.js");
/* harmony import */ var _material_ui_components_CustomModal_CustomModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material_ui_components/CustomModal/CustomModal */ "./djsr/frontend/src/components/material_ui_components/CustomModal/CustomModal.js");
/* harmony import */ var _material_ui_components_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material_ui_components/CustomButtons/Button */ "./djsr/frontend/src/components/material_ui_components/CustomButtons/Button.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _MaterialFormikField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MaterialFormikField */ "./djsr/frontend/src/components/MaterialFormikField.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/People */ "./node_modules/@material-ui/icons/People.js");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_components_CustomRadio_CustomRadio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../material_ui_components/CustomRadio/CustomRadio */ "./djsr/frontend/src/components/material_ui_components/CustomRadio/CustomRadio.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var EditTaskAnswerSpace = function EditTaskAnswerSpace(props) {
  var updateStateAndSaveExam = props.updateStateAndSaveExam,
      task = props.task,
      index = props.index;
  var currentAnswers = task.currentAnswers;
  var spaceToSolve = currentAnswers.spaceToSolve || 0;
  var isOtwarte = currentAnswers.isOtwarte || false;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TaskOverlayButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onClick: function onClick() {
      setOpen(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9___default.a, {
    fontSize: "small"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomModal_CustomModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    open: open,
    dialogTitle: "Edycja miejsca pod zadaniem",
    fullWidth: true,
    maxWidth: "lg",
    onClose: function onClose() {
      setOpen(false);
    },
    dialogActionsChildren: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      color: "transparent",
      onClick: function onClick() {
        setOpen(false);
      }
    }, "Anuluj"),,]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      minHeight: "50vh"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    enableReinitialize: true,
    initialValues: {
      isOtwarte: isOtwarte,
      spaceToSolve: spaceToSolve
    },
    onSubmit: function onSubmit(values, formikHelpers) {
      updateStateAndSaveExam(function (state) {
        state.exam.tasks[index].currentAnswers.spaceToSolve = values.spaceToSolve;
        state.exam.tasks[index].currentAnswers.isOtwarte = values.isOtwarte;
        return state;
      });
      setOpen(false);
    }
  }, function (_ref) {
    var values = _ref.values,
        errors = _ref.errors,
        touched = _ref.touched,
        handleBlur = _ref.handleBlur,
        handleSubmit = _ref.handleSubmit,
        isSubmitting = _ref.isSubmitting,
        setFieldValue = _ref.setFieldValue;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
      component: _MaterialFormikField__WEBPACK_IMPORTED_MODULE_5__["default"],
      name: "spaceToSolve",
      formControlProps: {
        fullWidth: true
      },
      labelText: "Miejsce na rozwi\u0105zanie"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomRadio_CustomRadio__WEBPACK_IMPORTED_MODULE_8__["default"], {
      labelProps: {
        label: "Otwarte"
      },
      radioProps: {
        checked: !!values.isOtwarte,
        onChange: function onChange() {
          setFieldValue("isOtwarte", true);
        }
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomRadio_CustomRadio__WEBPACK_IMPORTED_MODULE_8__["default"], {
      labelProps: {
        label: "Zamkniete"
      },
      radioProps: {
        checked: !values.isOtwarte,
        onChange: function onChange() {
          setFieldValue("isOtwarte", false);
        }
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      color: "primary",
      onClick: handleSubmit
    }, "Zapisz"));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (EditTaskAnswerSpace);

/***/ }),

/***/ "./djsr/frontend/src/components/ExamEditorSubComponents/EditTaskImages.js":
/*!********************************************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditorSubComponents/EditTaskImages.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_components_CustomModal_CustomModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material_ui_components/CustomModal/CustomModal */ "./djsr/frontend/src/components/material_ui_components/CustomModal/CustomModal.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_components_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material_ui_components/CustomButtons/Button */ "./djsr/frontend/src/components/material_ui_components/CustomButtons/Button.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js");
/* harmony import */ var react_grid_dnd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-grid-dnd */ "./node_modules/react-grid-dnd/esm/index.js");
/* harmony import */ var react_resize_detector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-resize-detector */ "./node_modules/react-resize-detector/lib/esm/index.js");
/* harmony import */ var _TaskImageDndComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TaskImageDndComponent */ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskImageDndComponent.js");
/* harmony import */ var _TaskImageDndPush__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TaskImageDndPush */ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskImageDndPush.js");
/* harmony import */ var _ExamImageValidator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ExamImageValidator */ "./djsr/frontend/src/components/ExamEditorSubComponents/ExamImageValidator.js");
/* harmony import */ var _PostImage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PostImage */ "./djsr/frontend/src/components/ExamEditorSubComponents/PostImage.js");
/* harmony import */ var _getImageLayotRowsCols__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getImageLayotRowsCols */ "./djsr/frontend/src/components/ExamEditorSubComponents/getImageLayotRowsCols.js");
/* harmony import */ var _material_ui_components_CustomRadio_CustomRadio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../material_ui_components/CustomRadio/CustomRadio */ "./djsr/frontend/src/components/material_ui_components/CustomRadio/CustomRadio.js");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/esm/LinearProgress/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_icons_PhotoLibrary__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/PhotoLibrary */ "./node_modules/@material-ui/icons/PhotoLibrary.js");
/* harmony import */ var _material_ui_icons_PhotoLibrary__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhotoLibrary__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _TaskOverlayButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./TaskOverlayButton */ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskOverlayButton.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




















var EditTaskImages = function EditTaskImages(props) {
  var task = props.task,
      updateTask = props.updateTask;
  var index = props.index || 0;
  var taskImages = task.currentAnswers.image || [];
  var taskImageLayout = task.currentAnswers.imageLayout || "2x1";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(taskImageLayout),
      _useState2 = _slicedToArray(_useState, 2),
      imageLayout = _useState2[0],
      setImageLayout = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(taskImages),
      _useState4 = _slicedToArray(_useState3, 2),
      images = _useState4[0],
      setImages = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      open = _useState6[0],
      setOpen = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isSending = _useState8[0],
      setSending = _useState8[1];

  var maxImages = 2;
  var imagesLeftToAdd = maxImages - (images.length || 0);
  var pushImages = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (inputImages) {
    // console.log(images.map(ExamImageValidator))
    var imagesToPush = [];

    var _iterator = _createForOfIteratorHelper(inputImages),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var image = _step.value;
        var result = Object(_ExamImageValidator__WEBPACK_IMPORTED_MODULE_10__["default"])(image);
        console.log(result, result.constructor.name);

        if ("ValidationError" === result.constructor.name) {
          console.log("image input error", result);
          return;
        }

        imagesToPush.push(result);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (imagesToPush.length > imagesLeftToAdd) {
      //todo 2 much images error
      return;
    }

    setImages(images.concat(imagesToPush));
  }, [images, maxImages, imagesLeftToAdd]);

  var onDrop = function onDrop(srcId, sourceIndex, targetIndex) {
    setImages(Object(react_grid_dnd__WEBPACK_IMPORTED_MODULE_6__["swap"])(images, sourceIndex, targetIndex));
  };

  var layoutParam = Object(_getImageLayotRowsCols__WEBPACK_IMPORTED_MODULE_12__["default"])(imageLayout);

  var sendImages = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var newImages, updatedTask;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setSending(true);
              _context2.next = 3;
              return Promise.all(images.map( /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(image) {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          return _context.abrupt("return", Object.getPrototypeOf(image) === File.prototype ? Object(_PostImage__WEBPACK_IMPORTED_MODULE_11__["default"])(image) : image);

                        case 1:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x) {
                  return _ref2.apply(this, arguments);
                };
              }()));

            case 3:
              newImages = _context2.sent;
              console.log("sendImages", newImages);
              updatedTask = _objectSpread({}, task);
              updatedTask.currentAnswers.image = newImages;
              updatedTask.currentAnswers.imageLayout = imageLayout;
              updateTask(_objectSpread({}, updatedTask));
              setSending(false); //TODO komunikat done

              setOpen(false);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function sendImages() {
      return _ref.apply(this, arguments);
    };
  }();

  var removeImage = function removeImage(index) {
    // console.log("removeImage",index)
    if (isSending) return;

    var newImages = _toConsumableArray(images);

    newImages.splice(index, 1); // console.log("removeImage",newImages)

    setImages(newImages);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TaskOverlayButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
    onClick: function onClick() {
      setOpen(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_PhotoLibrary__WEBPACK_IMPORTED_MODULE_16___default.a, {
    fontSize: "small"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomModal_CustomModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    open: open,
    dialogTitle: "Edycja zdjęć",
    fullWidth: true,
    maxWidth: "lg",
    onClose: function onClose() {
      setOpen(false);
    },
    dialogActionsChildren: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      color: "transparent",
      onClick: function onClick() {
        setOpen(false);
      },
      disabled: isSending
    }, "Anuluj"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      color: "primary",
      onClick: function onClick() {
        sendImages();
      },
      disabled: isSending
    }, "Zapisz zdj\u0119cia")] // style={{ minHeight: "80vh" }}

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      minHeight: "50vh"
    }
  }, !isSending ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TaskImageDndPush__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onDrop: pushImages
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_14__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomRadio_CustomRadio__WEBPACK_IMPORTED_MODULE_13__["default"], {
    labelProps: {
      label: "2x1",
      disabled: isSending
    },
    radioProps: {
      checked: imageLayout === "2x1",
      onChange: function onChange() {
        setImageLayout("2x1");
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomRadio_CustomRadio__WEBPACK_IMPORTED_MODULE_13__["default"], {
    labelProps: {
      label: "1x2",
      disabled: isSending
    },
    radioProps: {
      checked: imageLayout === "1x2",
      onChange: function onChange() {
        setImageLayout("1x2");
      }
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_resize_detector__WEBPACK_IMPORTED_MODULE_7__["default"], null, function (_ref3) {
    var width = _ref3.width,
        height = _ref3.height;
    var rowHeight = (width || 20) / 4;
    var rowWidth = rowHeight * layoutParam.cols;
    var dropZoneHeight = rowHeight * layoutParam.rows;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        width: "100%",
        margin: "0",
        padding: "0"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_grid_dnd__WEBPACK_IMPORTED_MODULE_6__["GridContextProvider"], {
      onChange: onDrop
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_grid_dnd__WEBPACK_IMPORTED_MODULE_6__["GridDropZone"], {
      boxesPerRow: layoutParam.cols,
      rowHeight: (width || 20) / 4,
      id: "task-image-dnd-".concat(index),
      style: {
        height: dropZoneHeight,
        width: rowWidth,
        margin: "0 auto"
      },
      disableDrag: isSending
    }, images.map(function (img, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TaskImageDndComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
        removeImage: removeImage,
        image: img,
        itemKey: index
      });
    }))));
  }))));
};

EditTaskImages.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (EditTaskImages);

/***/ }),

/***/ "./djsr/frontend/src/components/ExamEditorSubComponents/ExamEditorSidePanel.js":
/*!*************************************************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditorSubComponents/ExamEditorSidePanel.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ResizeableSidePanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResizeableSidePanel */ "./djsr/frontend/src/components/ExamEditorSubComponents/ResizeableSidePanel.js");
/* harmony import */ var _SideMenuTabSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideMenuTabSelector */ "./djsr/frontend/src/components/ExamEditorSubComponents/SideMenuTabSelector.js");
/* harmony import */ var _taskSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../taskSearch */ "./djsr/frontend/src/components/taskSearch.js");
/* harmony import */ var _TaskSearchCollapseMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TaskSearchCollapseMenu */ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskSearchCollapseMenu.js");
/* harmony import */ var _TaskEditorCollapseMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TaskEditorCollapseMenu */ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskEditorCollapseMenu.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var ExamEditorSidePanel = function ExamEditorSidePanel(_ref) {
  var exam = _ref.exam,
      saved = _ref.saved,
      currentTabId = _ref.currentTabId,
      handleTabChange = _ref.handleTabChange,
      taskSearchResult = _ref.taskSearchResult,
      setTaskSearchResult = _ref.setTaskSearchResult,
      updateTask = _ref.updateTask,
      selectedTaskToEdit = _ref.selectedTaskToEdit,
      props = _objectWithoutProperties(_ref, ["exam", "saved", "currentTabId", "handleTabChange", "taskSearchResult", "setTaskSearchResult", "updateTask", "selectedTaskToEdit"]);

  console.log("side panel props", currentTabId, props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ResizeableSidePanel__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: "100vh",
      overflow: "auto"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SideMenuTabSelector__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleTabChange: handleTabChange,
    currentTabId: currentTabId
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TaskSearchCollapseMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    currentTabId: currentTabId,
    taskSearchResult: taskSearchResult,
    setTaskSearchResult: setTaskSearchResult
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TaskEditorCollapseMenu__WEBPACK_IMPORTED_MODULE_5__["default"], {
    currentTabId: currentTabId,
    updateTask: updateTask,
    selectedTaskToEdit: selectedTaskToEdit
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ExamEditorSidePanel);

/***/ }),

/***/ "./djsr/frontend/src/components/ExamEditorSubComponents/ExamImageValidator.js":
/*!************************************************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditorSubComponents/ExamImageValidator.js ***!
  \************************************************************************************/
/*! exports provided: imageValidationSchema, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageValidationSchema", function() { return imageValidationSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");

var MAX_FILE_SIZE = 2 * 1024 * 1024;
var SUPPORTED_FORMATS = ["image/jpg", "image/jpeg"];
var imageValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["mixed"]().test("fileSize", "File size error", function (value) {
  return value && value.size <= MAX_FILE_SIZE;
}).test("fileFormat", "File format error", function (value) {
  return value && SUPPORTED_FORMATS.includes(value.type);
});

var imageValidate = function imageValidate(image) {
  try {
    return imageValidationSchema.validateSync(image);
  } catch (e) {
    return e;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (imageValidate);

/***/ }),

/***/ "./djsr/frontend/src/components/ExamEditorSubComponents/ExamPageWithOverlay.js":
/*!*************************************************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditorSubComponents/ExamPageWithOverlay.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TaskDragAndDropWithPagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskDragAndDropWithPagination */ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskDragAndDropWithPagination.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var react_resize_detector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-resize-detector */ "./node_modules/react-resize-detector/lib/esm/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var ExamPageWithOverlay = function ExamPageWithOverlay(props) {
  var exam = props.exam,
      headers = props.headers,
      tasks = props.tasks,
      setTaskToEdit = props.setTaskToEdit,
      removeTask = props.removeTask,
      setTaskToEditWithPart = props.setTaskToEditWithPart,
      editorTaskIndex = props.editorTaskIndex,
      editorTaskPart = props.editorTaskPart,
      updateTaskText = props.updateTaskText,
      pushTaskAtIndex = props.pushTaskAtIndex,
      updatePageIndexes = props.updatePageIndexes;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      divHeight = _useState2[0],
      setHeight = _useState2[1];

  var pageIndex = props.pageIndex || 0;
  var header = (headers || [])[pageIndex] || null;
  var startIndex = props.startIndex || 0;
  var examTasks = tasks; // const endIndex = startIndex + 3;

  var tasksLength = tasks.length;
  var pages = exam.pages || [];
  var stateLastIndex = pages[pageIndex];

  var calculateEnd = function calculateEnd(start, tablica, limit) {
    var current = 0;
    var index = start;

    while (index < tasksLength && current + (tablica[Math.min(index + 1, tasksLength - 1)].height || 0) < limit) {
      current = current + (tablica[index].height || 0);
      index++;
    }

    console.log("cacl end", index, current, limit);
    return index - 1;
  };

  var endIndex = divHeight > 1 ? calculateEnd(startIndex, tasks, divHeight) : tasksLength;

  if (stateLastIndex !== endIndex) {
    console.log("pg update", stateLastIndex, endIndex, exam.pages);
    updatePageIndexes(pageIndex, endIndex);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__["default"] // className="border p-3"
  , {
    p: 3,
    boxShadow: 3,
    style: {
      width: "21cm",
      height: "29.7cm",
      background: "white",
      display: "flex",
      flexDirection: "column" // backgroundColor: snapshot.isDraggingOver ? "blue" : "white",

    } // mb={20}
    ,
    mb: 5,
    mt: 2
  }, !!header && header, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_resize_detector__WEBPACK_IMPORTED_MODULE_4__["default"], null, function (_ref) {
    var width = _ref.width,
        height = _ref.height;
    if (divHeight !== height) setHeight(height); // console.log("XDDD?", divHeight, height);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        // flex: "1",
        height: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        height: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TaskDragAndDropWithPagination__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
      DroppableProps: {
        droppableId: "examDroppable-".concat(pageIndex)
      },
      startIndex: startIndex,
      endIndex: endIndex,
      pageIndex: pageIndex,
      examTasks: examTasks
    }))));
  })), endIndex < tasksLength - 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ExamPageWithOverlay, _extends({}, props, {
    startIndex: endIndex + 1,
    pageIndex: pageIndex + 1
  })));
};

ExamPageWithOverlay.propTypes = {
  header: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  setTaskToEdit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  removeTask: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  setTaskToEditWithPart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  editorTaskIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  editorTaskPart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  updateTaskText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  pushTaskAtIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (ExamPageWithOverlay);

/***/ }),

/***/ "./djsr/frontend/src/components/ExamEditorSubComponents/ExamPageWithTaskOverlays.js":
/*!******************************************************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditorSubComponents/ExamPageWithTaskOverlays.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _img_genspr_parralax_bg_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/genspr-parralax-bg.png */ "./djsr/frontend/src/components/img/genspr-parralax-bg.png");
/* harmony import */ var _ExamPageWithOverlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ExamPageWithOverlay */ "./djsr/frontend/src/components/ExamEditorSubComponents/ExamPageWithOverlay.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _FirstPageHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FirstPageHeader */ "./djsr/frontend/src/components/ExamEditorSubComponents/FirstPageHeader.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








var ExamPages = function ExamPages(props) {
  var exam = props.exam,
      setTaskToEdit = props.setTaskToEdit,
      removeTask = props.removeTask,
      setTaskToEditWithPart = props.setTaskToEditWithPart,
      editorTaskIndex = props.editorTaskIndex,
      editorTaskPart = props.editorTaskPart,
      updateTaskText = props.updateTaskText,
      pushTaskAtIndex = props.pushTaskAtIndex;
  var examTasks = exam.tasks;
  var maxPoints = examTasks.length > 1 ? examTasks.map(function (task) {
    return task.maxPoints;
  }).reduce(function (a, b) {
    return a + b;
  }) : examTasks.length > 0 ? examTasks[0].maxPoints : 0;
  var headers = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FirstPageHeader__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, props, {
    title: exam.name,
    maxExamPoints: maxPoints
  }))];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      height: "100vh",
      overflow: "auto",
      flexGrow: "3"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      background: "linear-gradient(60deg, rgba(242,163,255,0.5) 0%, rgba(195,105,219,0.5) 100%), url(".concat(_img_genspr_parralax_bg_png__WEBPACK_IMPORTED_MODULE_2__["default"], ")")
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExamPageWithOverlay__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    DroppableProps: {
      droppableId: "examDroppable"
    },
    tasks: examTasks,
    headers: headers
  }, props))));
};

ExamPages.propTypes = {
  setTaskToEdit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  removeTask: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  setTaskToEditWithPart: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  editorTaskIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  editorTaskPart: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  updateTaskText: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  pushTaskAtIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  updateTaskHeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ExamPages);

/***/ }),

/***/ "./djsr/frontend/src/components/ExamEditorSubComponents/ExamTitleWithEdit.js":
/*!***********************************************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditorSubComponents/ExamTitleWithEdit.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-autosize-textarea */ "./node_modules/react-autosize-textarea/lib/index.js");
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TaskOverlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskOverlay */ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskOverlay.js");
/* harmony import */ var _TaskOverlayButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TaskOverlayButton */ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskOverlayButton.js");





var ExamTitleWithEdit = function ExamTitleWithEdit(props) {
  var setTaskToEditWithPart = props.setTaskToEditWithPart,
      editorTaskPart = props.editorTaskPart,
      title = props.title,
      updateStateAndSaveExam = props.updateStateAndSaveExam;
  var isEditing = editorTaskPart === "ExamTitle";

  var handleChange = function handleChange(event) {
    var value = event.target.value;
    updateStateAndSaveExam(function (state) {
      state.exam.name = value;
      return state;
    });
  };

  return !isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TaskOverlay__WEBPACK_IMPORTED_MODULE_2__["default"], {
    forceOverlay: isEditing,
    menuComponents: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TaskOverlayButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onClick: function onClick() {
        setTaskToEditWithPart(null, "ExamTitle");
      }
    }, "Zmie\u0144 nazw\u0119 sprawdzianu")]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, title)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TaskOverlay__WEBPACK_IMPORTED_MODULE_2__["default"], {
    forceOverlay: isEditing,
    menuComponents: [[/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TaskOverlayButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onClick: function onClick() {
        setTaskToEditWithPart(null, null);
      }
    }, "Zako\u0144cz Edycje")]]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_1___default.a, {
    onChange: handleChange,
    value: title,
    style: {
      border: "none",
      backgroundColor: "transparent",
      display: "inline",
      width: "100%",
      resize: "none",
      outline: "none",
      overflow: "auto"
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ExamTitleWithEdit);

/***/ }),

/***/ "./djsr/frontend/src/components/ExamEditorSubComponents/FirstPageHeader.js":
/*!*********************************************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditorSubComponents/FirstPageHeader.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _ExamTitleWithEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExamTitleWithEdit */ "./djsr/frontend/src/components/ExamEditorSubComponents/ExamTitleWithEdit.js");




var FirstPageHeader = function FirstPageHeader(props) {
  var maxExamPoints = props.maxExamPoints,
      title = props.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__["default"] // style={{display:"flex",flexDirection:"column"}}
  , {
    display: "flex",
    flexDirection: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExamTitleWithEdit__WEBPACK_IMPORTED_MODULE_2__["default"], props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    display: "flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    flexGrow: 1
  }, "Imie i nazwisko:................................................................."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    flexShrink: 0
  }, ".../", maxExamPoints)));
};

/* harmony default export */ __webpack_exports__["default"] = (FirstPageHeader);

/***/ }),

/***/ "./djsr/frontend/src/components/ExamEditorSubComponents/OverlayBorder.js":
/*!*******************************************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditorSubComponents/OverlayBorder.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _assets_jss_material_kit_react_components_tooltipWithOverlayStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/jss/material-kit-react/components/tooltipWithOverlayStyle */ "./djsr/frontend/src/components/assets/jss/material-kit-react/components/tooltipWithOverlayStyle.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(_assets_jss_material_kit_react_components_tooltipWithOverlayStyle__WEBPACK_IMPORTED_MODULE_2__["default"]);

var OverlayBorder = function OverlayBorder(props) {
  var className = props.className,
      children = props.children,
      rest = _objectWithoutProperties(props, ["className", "children"]);

  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    className: classes.activeRoot + " " + className
  }, rest), children);
};

/* harmony default export */ __webpack_exports__["default"] = (OverlayBorder);

/***/ }),

/***/ "./djsr/frontend/src/components/ExamEditorSubComponents/PostImage.js":
/*!***************************************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditorSubComponents/PostImage.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axiosAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../axiosAPI */ "./djsr/frontend/src/components/axiosAPI.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var sendImage = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(image) {
    var formData, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            formData = new FormData();
            formData.append("file", image);
            _context.next = 4;
            return _axiosAPI__WEBPACK_IMPORTED_MODULE_0__["default"].post("/user/addimage/", formData, {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            });

          case 4:
            response = _context.sent;
            return _context.abrupt("return", response.data.id || null);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function sendImage(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (sendImage);

/***/ }),

/***/ "./djsr/frontend/src/components/ExamEditorSubComponents/ResizeableSidePanel.js":
/*!*************************************************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditorSubComponents/ResizeableSidePanel.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_resize_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-resize-panel */ "./node_modules/react-resize-panel/dist/index.esm.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    sidePanel: {
      backgroundColor: theme.palette.background.paper
    }
  };
});

var ResizeableSidePanel = function ResizeableSidePanel(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var classes = useStyles();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_resize_panel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    direction: "e",
    style: {
      flexGrow: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.sidePanel,
    boxShadow: 3
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (ResizeableSidePanel);

/***/ }),

/***/ "./djsr/frontend/src/components/ExamEditorSubComponents/SideMenuTabSelector.js":
/*!*************************************************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditorSubComponents/SideMenuTabSelector.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _assets_jss_material_kit_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/jss/material-kit-react */ "./djsr/frontend/src/components/assets/jss/material-kit-react.js");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "./node_modules/@material-ui/core/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var eloColor = _assets_jss_material_kit_react__WEBPACK_IMPORTED_MODULE_4__["primaryColor"];
var useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5___default()(function (theme) {
  selected: {
    color: "red";
  }
}); //todo update indicator on resize https://github.com/mui-org/material-ui/issues/9337
//todo wyglad przycisku od wygenerowania pdf zeby sie wyroznial

var SideMenuTabSelector = function SideMenuTabSelector(_ref) {
  var handleTabChange = _ref.handleTabChange,
      currentTabId = _ref.currentTabId,
      props = _objectWithoutProperties(_ref, ["handleTabChange", "currentTabId"]);

  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    position: "static",
    color: "default"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_1__["default"], {
    value: currentTabId,
    onChange: handleTabChange,
    variant: "fullWidth" // style={{color:primaryColor}}
    //   inkBarStyle={{background:primaryColor}}
    ,
    TabIndicatorProps: {
      style: {
        background: _assets_jss_material_kit_react__WEBPACK_IMPORTED_MODULE_4__["primaryColor"]
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "Dodaj zadanie",
    value: "taskSearch",
    disabled: false,
    classes: {
      selected: classes.selected
    } // component={<span>elo</span>}

  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "Edycja zadania",
    value: "taskEdit",
    disabled: false,
    classes: {
      selected: classes.selected
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "Pobierz PDF",
    value: "generatePDF",
    disabled: false,
    classes: {
      selected: classes.selected
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SideMenuTabSelector);

/***/ }),

/***/ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskAnswerWithEdit.js":
/*!************************************************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditorSubComponents/TaskAnswerWithEdit.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react_latex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-latex */ "./node_modules/react-latex/build/latex.js");
/* harmony import */ var react_latex__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_latex__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-autosize-textarea */ "./node_modules/react-autosize-textarea/lib/index.js");
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "./node_modules/@material-ui/core/esm/ClickAwayListener/index.js");
/* harmony import */ var _TooltipWithOverlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TooltipWithOverlay */ "./djsr/frontend/src/components/ExamEditorSubComponents/TooltipWithOverlay.js");
/* harmony import */ var _material_ui_components_CustomModal_CustomModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material_ui_components/CustomModal/CustomModal */ "./djsr/frontend/src/components/material_ui_components/CustomModal/CustomModal.js");
/* harmony import */ var _material_ui_components_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../material_ui_components/CustomButtons/Button */ "./djsr/frontend/src/components/material_ui_components/CustomButtons/Button.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _MaterialFormikField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../MaterialFormikField */ "./djsr/frontend/src/components/MaterialFormikField.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var TaskAnswerWithEdit = function TaskAnswerWithEdit(props) {
  var answerIndex = props.answerIndex,
      editorTaskIndex = props.editorTaskIndex,
      editorTaskPart = props.editorTaskPart,
      setTaskToEditWithPart = props.setTaskToEditWithPart,
      index = props.index,
      updateStateAndSaveExam = props.updateStateAndSaveExam,
      answer = props.answer,
      correctans = props.correctans,
      wronganswers = props.wronganswers,
      ansChar = props.ansChar;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1]; // const


  var isEditing = editorTaskIndex === index && editorTaskPart === "answer-".concat(answerIndex);
  var isCorrect = answer.isCorrect;
  var answerSource = isCorrect ? correctans : wronganswers;
  var answerString = answerSource[answer.index]; // console.log(`ans-${index}`,answer,answerSource);

  return (
    /*#__PURE__*/
    // !isEditing ? (
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
      item: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TooltipWithOverlay__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Zmień odpowiedź",
      placement: "right-start",
      onClick: function onClick() {
        // setTaskToEditWithPart(index, `answer-${answerIndex}`);
        setOpen(true);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
      display: "inline",
      style: {
        fontWeight: "bold"
      } // className="font-weight-bold"

    }, ansChar[answerIndex] + ". "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_latex__WEBPACK_IMPORTED_MODULE_2___default.a, null, answerString)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_9__["Formik"], {
      enableReinitialize: true,
      initialValues: {
        text: answerString
      },
      onSubmit: function onSubmit(values, helpers) {
        // setTimeout(()=>{
        updateStateAndSaveExam(function (state) {
          var saveTo = isCorrect ? "correctans" : "wronganswers";
          state.exam.tasks[index].currentAnswers[saveTo][answer.index] = values.text;
          return state;
        });
        setOpen(false); // },20)
      }
    }, function (_ref) {
      var values = _ref.values,
          errors = _ref.errors,
          touched = _ref.touched,
          handleChange = _ref.handleChange,
          handleBlur = _ref.handleBlur,
          handleSubmit = _ref.handleSubmit,
          isSubmitting = _ref.isSubmitting;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomModal_CustomModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
        open: open,
        dialogTitle: "Edytuj treść",
        fullWidth: true,
        maxWidth: "lg",
        onClose: function onClose() {
          setOpen(false);
        },
        dialogActionsChildren: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
          color: "transparent",
          onClick: function onClick() {
            setOpen(false);
          }
        }, "Anuluj"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
          color: "primary",
          onClick: handleSubmit
        }, "Zapisz odpowied\u017A")] // style={{ minHeight: "80vh" }}

      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_9__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          minHeight: "50vh"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_latex__WEBPACK_IMPORTED_MODULE_2___default.a, null, values.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_9__["Field"], {
        component: _MaterialFormikField__WEBPACK_IMPORTED_MODULE_10__["default"],
        name: "text",
        formControlProps: {
          fullWidth: true
        },
        inputProps: {
          multiline: true,
          rows: 3,
          rowsMax: 10
        },
        labelText: "Tre\u015B\u0107 odpowiedzi"
      }))));
    }))
  ); // )
  //     : (
  //   <Grid item>
  //     <ClickAwayListener onClickAway={() => {}}>
  //       <div style={{ width: "100%" }}>
  //         <Textarea maxRows={4} />
  //       </div>
  //     </ClickAwayListener>
  //   </Grid>
  // ),
  //   ,
  // ];
};

/* harmony default export */ __webpack_exports__["default"] = (TaskAnswerWithEdit);

/***/ }),

/***/ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskContentWithMenu.js":
/*!*************************************************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditorSubComponents/TaskContentWithMenu.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _TaskOverlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskOverlay */ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskOverlay.js");
/* harmony import */ var react_latex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-latex */ "./node_modules/react-latex/build/latex.js");
/* harmony import */ var react_latex__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_latex__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-autosize-textarea */ "./node_modules/react-autosize-textarea/lib/index.js");
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _axiosAPI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../axiosAPI */ "./djsr/frontend/src/components/axiosAPI.js");
/* harmony import */ var _material_ui_components_Card_CardHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../material_ui_components/Card/CardHeader */ "./djsr/frontend/src/components/material_ui_components/Card/CardHeader.js");
/* harmony import */ var _material_ui_components_Card_CardBody__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../material_ui_components/Card/CardBody */ "./djsr/frontend/src/components/material_ui_components/Card/CardBody.js");
/* harmony import */ var _MaterialFormikField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../MaterialFormikField */ "./djsr/frontend/src/components/MaterialFormikField.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/People */ "./node_modules/@material-ui/icons/People.js");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_components_Card_CardFooter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../material_ui_components/Card/CardFooter */ "./djsr/frontend/src/components/material_ui_components/Card/CardFooter.js");
/* harmony import */ var _material_ui_components_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../material_ui_components/CustomButtons/Button */ "./djsr/frontend/src/components/material_ui_components/CustomButtons/Button.js");
/* harmony import */ var _TaskOverlayButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./TaskOverlayButton */ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskOverlayButton.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


















var TaskContentWithMenu = function TaskContentWithMenu(_ref) {
  var content = _ref.content,
      taskIndex = _ref.taskIndex,
      editorTaskIndex = _ref.editorTaskIndex,
      editorTaskPart = _ref.editorTaskPart,
      setTaskToEditWithPart = _ref.setTaskToEditWithPart,
      updateTaskText = _ref.updateTaskText;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isEditingOld = _useState2[0],
      setEditingOld = _useState2[1];

  var isEditing = taskIndex === editorTaskIndex && editorTaskPart === "text";
  console.log("taskoverlay", taskIndex, editorTaskIndex, editorTaskPart, isEditing);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TaskOverlay__WEBPACK_IMPORTED_MODULE_2__["default"], {
    forceOverlay: isEditing,
    menuComponents: isEditing ? [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TaskOverlayButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
      onClick: function onClick() {
        setTaskToEditWithPart(null, null);
      }
    }, "Zako\u0144cz Edycje")] : [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TaskOverlayButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
      onClick: function onClick() {
        setTaskToEditWithPart(taskIndex, "text");
      }
    }, "Edytuj")]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "font-weight-bold"
  }, taskIndex + 1, ". "), !isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_latex__WEBPACK_IMPORTED_MODULE_3___default.a, null, content) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
    initialValues: {
      "task-text": content
    },
    enableReinitialize: true,
    onSubmit: function onSubmit(values, helpers) {
      // setTimeout(() => {}, 5000);
      updateTaskText(taskIndex, values["task-text"]);
    }
  }, function (_ref2) {
    var values = _ref2.values,
        errors = _ref2.errors,
        touched = _ref2.touched,
        handleChange = _ref2.handleChange,
        handleBlur = _ref2.handleBlur,
        handleSubmit = _ref2.handleSubmit,
        submitForm = _ref2.submitForm,
        isSubmitting = _ref2.isSubmitting;

    var handleChangeAndSubmit = function handleChangeAndSubmit(e) {
      handleChange(e);
      submitForm();
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_4___default.a, {
      name: "task-text",
      id: "task-text",
      onChange: handleChangeAndSubmit,
      value: values["task-text"],
      style: {
        border: "none",
        backgroundColor: "transparent",
        display: "inline",
        width: "100%",
        resize: "none",
        outline: "none",
        overflow: "auto"
      }
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TaskContentWithMenu);

/***/ }),

/***/ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskDragAndDropWithPagination.js":
/*!***********************************************************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditorSubComponents/TaskDragAndDropWithPagination.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _TaskContentWithMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TaskContentWithMenu */ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskContentWithMenu.js");
/* harmony import */ var react_latex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-latex */ "./node_modules/react-latex/build/latex.js");
/* harmony import */ var react_latex__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_latex__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _TaskWithOverlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TaskWithOverlay */ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskWithOverlay.js");
/* harmony import */ var _assets_jss_material_kit_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/jss/material-kit-react */ "./djsr/frontend/src/components/assets/jss/material-kit-react.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











var TasksDragAndDrop = function TasksDragAndDrop(_ref) {
  var _ref$DroppableProps = _ref.DroppableProps,
      droppableId = _ref$DroppableProps.droppableId,
      DroppablePropsAnother = _objectWithoutProperties(_ref$DroppableProps, ["droppableId"]),
      examTasks = _ref.examTasks,
      setTaskToEditWithPart = _ref.setTaskToEditWithPart,
      editorTaskIndex = _ref.editorTaskIndex,
      editorTaskPart = _ref.editorTaskPart,
      updateTaskText = _ref.updateTaskText,
      pushTaskAtIndex = _ref.pushTaskAtIndex,
      removeTask = _ref.removeTask,
      startIndex = _ref.startIndex,
      pageIndex = _ref.pageIndex,
      endIndex = _ref.endIndex,
      props = _objectWithoutProperties(_ref, ["DroppableProps", "examTasks", "setTaskToEditWithPart", "editorTaskIndex", "editorTaskPart", "updateTaskText", "pushTaskAtIndex", "removeTask", "startIndex", "pageIndex", "endIndex"]);

  var tasksToRender = examTasks.slice(startIndex, endIndex + 1);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__["Droppable"], _extends({
    droppableId: "examDroppable-".concat(pageIndex),
    style: {
      marginLeft: "auto",
      marginRight: "auto"
    }
  }, DroppablePropsAnother), function (provided, snapshot) {
    var isDraggingOver = snapshot.isDraggingOver;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, provided.droppableProps, {
      ref: provided.innerRef,
      style: {
        height: "100%",
        border: isDraggingOver ? "1px solid ".concat(_assets_jss_material_kit_react__WEBPACK_IMPORTED_MODULE_8__["warningColor"]) : "",
        margin: isDraggingOver ? "-1px" : "0px"
      }
    }), tasksToRender.map(function (task, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TaskWithOverlay__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({
        setTaskToEditWithPart: setTaskToEditWithPart,
        editorTaskIndex: editorTaskIndex,
        editorTaskPart: editorTaskPart,
        updateTaskText: updateTaskText,
        pushTaskAtIndex: pushTaskAtIndex,
        index: index + startIndex,
        draggableIndex: index,
        task: task,
        removeTask: removeTask
      }, props));
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TasksDragAndDrop);

/***/ }),

/***/ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskEditor.js":
/*!****************************************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditorSubComponents/TaskEditor.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _axiosAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../axiosAPI */ "./djsr/frontend/src/components/axiosAPI.js");
/* harmony import */ var _MaterialFormikField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MaterialFormikField */ "./djsr/frontend/src/components/MaterialFormikField.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _EditTaskImages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EditTaskImages */ "./djsr/frontend/src/components/ExamEditorSubComponents/EditTaskImages.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var TaskEditor = function TaskEditor(_ref) {
  var selectedTaskToEdit = _ref.selectedTaskToEdit,
      updateTask = _ref.updateTask;
  var task = selectedTaskToEdit;
  console.log("TE", task); //todo walidacja formularza od edycji zadania

  if (!task) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Wybierz zadanie");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
    p: 3,
    style: {
      minHeight: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    enableReinitialize: true,
    initialValues: task,
    onSubmit: function onSubmit(values, helpers) {
      if (!!values.imageToUpload) {
        var formData = new FormData();
        formData.append("file", values.imageToUpload);
        _axiosAPI__WEBPACK_IMPORTED_MODULE_2__["default"].post("/user/addimage/", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }).then(function (response) {
          var task = _objectSpread({}, values);

          task.currentAnswers.image = [response.data.id];
          updateTask(_objectSpread({}, task));
        });
      } else updateTask(_objectSpread({}, values));
    }
  }, function (_ref2) {
    var values = _ref2.values,
        errors = _ref2.errors,
        touched = _ref2.touched,
        handleChange = _ref2.handleChange,
        handleBlur = _ref2.handleBlur,
        handleSubmit = _ref2.handleSubmit,
        isSubmitting = _ref2.isSubmitting,
        submitForm = _ref2.submitForm,
        setFieldValue = _ref2.setFieldValue;

    var handleChangeAndSubmit = function handleChangeAndSubmit(e) {
      handleChange(e);
      submitForm();
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      component: _MaterialFormikField__WEBPACK_IMPORTED_MODULE_3__["default"],
      name: "text",
      formControlProps: {
        fullWidth: true
      },
      inputProps: {
        onChange: handleChangeAndSubmit,
        multiline: true,
        rows: 3,
        rowsMax: 10
      },
      labelText: "Tre\u015B\u0107 zadania"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      component: _MaterialFormikField__WEBPACK_IMPORTED_MODULE_3__["default"],
      name: "maxPoints",
      type: "number",
      formControlProps: {
        fullWidth: true
      },
      inputProps: {
        onChange: handleChangeAndSubmit
      },
      labelText: "Maksymalna ilo\u015B\u0107 punkt\xF3w"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      variant: "contained",
      component: "label"
    }, "Wybierz zdj\u0119cie", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "file",
      name: "imageToUpload",
      style: {
        display: "none"
      },
      onChange: function onChange(e) {
        setFieldValue("imageToUpload", e.currentTarget.files[0]);
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      onClick: handleSubmit
    }, "Zapisz obrazek"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditTaskImages__WEBPACK_IMPORTED_MODULE_6__["default"], {
      task: task,
      updateTask: updateTask
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TaskEditor);

/***/ }),

/***/ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskEditorCollapseMenu.js":
/*!****************************************************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditorSubComponents/TaskEditorCollapseMenu.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CollapseMenuContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CollapseMenuContainer */ "./djsr/frontend/src/components/ExamEditorSubComponents/CollapseMenuContainer.js");
/* harmony import */ var _MaterialUiTaskSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MaterialUiTaskSearch */ "./djsr/frontend/src/components/MaterialUiTaskSearch.js");
/* harmony import */ var _TaskSearchDndResults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TaskSearchDndResults */ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskSearchDndResults.js");
/* harmony import */ var _TaskEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TaskEditor */ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskEditor.js");






var TaskEditorCollapseMenu = function TaskEditorCollapseMenu(_ref) {
  var currentTabId = _ref.currentTabId,
      updateTask = _ref.updateTask,
      selectedTaskToEdit = _ref.selectedTaskToEdit;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CollapseMenuContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    currentTabId: currentTabId,
    id: "taskEdit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TaskEditor__WEBPACK_IMPORTED_MODULE_4__["default"], {
    updateTask: updateTask,
    selectedTaskToEdit: selectedTaskToEdit
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TaskEditorCollapseMenu);

/***/ }),

/***/ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskImageDndComponent.js":
/*!***************************************************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditorSubComponents/TaskImageDndComponent.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_grid_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-grid-dnd */ "./node_modules/react-grid-dnd/esm/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Thumb = function Thumb(props) {
  var image = props.image;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      thumb = _useState2[0],
      setThumb = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // if (!image) return null;
    // if (Number.isInteger(image)){
    //
    // }
    switch (true) {
      case Number.isInteger(image):
        console.log("thumb is int", image);
        setThumb("".concat(window.location.origin, "/api/user/image/").concat(image));
        break;

      case Object.getPrototypeOf(image || {}) === File.prototype:
        console.log("thumb is file", image);
        var reader = new FileReader();

        reader.onloadend = function () {
          setThumb(reader.result);
        };

        reader.readAsDataURL(image);

      default:
        console.log("thumb is default", image);
        setThumb(false);
    }
  }, [image]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    onDragStart: function onDragStart(e) {
      e.preventDefault();
    },
    src: thumb || "",
    style: {
      maxWidth: "100%",
      maxHeight: "100%"
    }
  });
};

var TaskImageDndComponent = function TaskImageDndComponent(props) {
  console.log("imgdnd ", props);
  var image = props.image,
      itemKey = props.itemKey,
      removeImage = props.removeImage;
  var isFile = !Number.isInteger(image);
  var key = Number.isInteger(image) ? image : image.name || "XD";
  console.log("imageKey", key);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_grid_dnd__WEBPACK_IMPORTED_MODULE_2__["GridItem"], {
    key: key || "XD"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    // style={{
    //     width: "100%",
    //     height: "100%",
    //     // backgroundColor: "blue"
    //     // display: "flex",
    //     // flexWrap: "wrap",
    //     // alignContent: "center",
    //     // margin: "10px",
    //     // position: "relative"
    // }}
    style: {
      width: "100%",
      height: "100%",
      display: "flex"
    } // className="w-100 h-100 d-flex"

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _defineProperty({
    style: {// cursor: "pointer",
      // border:
      //     "2px solid black",
      // backgroundColor:
      //     "white",
      // position: "absolute"
    }
  }, "style", {
    width: "100%",
    height: "100%",
    padding: "5px"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexWrap: "wrap",
      alignContent: "center",
      // padding: "10px",
      border: "1px solid",
      justifyContent: "center"
    } // className="w-100 h-100 d-flex border bg-light"

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: "absolute",
      top: "0px",
      right: "0px",
      height: "30px",
      width: "30px",
      zIndex: "3",
      margin: "6px",
      color: "red"
    },
    onClick: function onClick() {
      removeImage(itemKey);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "X")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Thumb, {
    image: image
  }))))));
};

TaskImageDndComponent.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (TaskImageDndComponent);

/***/ }),

/***/ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskImageDndPush.js":
/*!**********************************************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditorSubComponents/TaskImageDndPush.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_grid_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-grid-dnd */ "./node_modules/react-grid-dnd/esm/index.js");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var TaskImageDndPush = function TaskImageDndPush(props) {
  var onDrop = props.onDrop; // const onDrop = useCallback((acceptedFiles) => {
  //   console.log(acceptedFiles);
  // }, []);

  var _useDropzone = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_2__["useDropzone"])({
    onDrop: onDrop
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: "pushxd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    // style={{
    //     width: "100%",
    //     height: "100%",
    //     // backgroundColor: "blue"
    //     // display: "flex",
    //     // flexWrap: "wrap",
    //     // alignContent: "center",
    //     // margin: "10px",
    //     // position: "relative"
    // }}
    style: {
      width: "100%",
      height: "100%",
      display: "flex"
    } // className="w-100 h-100 d-flex"

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _defineProperty({
    style: {// cursor: "pointer",
      // border:
      //     "2px solid black",
      // backgroundColor:
      //     "white",
      // position: "absolute"
    }
  }, "style", {
    width: "100%",
    height: "100%",
    padding: "5px"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexWrap: "wrap",
      alignContent: "center",
      // padding: "10px",
      border: "1px solid",
      justifyContent: "center"
    } // className="w-100 h-100 d-flex border bg-light"

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", getRootProps(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", getInputProps()), isDragActive ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Upu\u015B\u0107 zdj\u0119cia tutaj") :
  /*#__PURE__*/
  // <p>Drag 'n' drop some files here, or click to select files</p>
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Przyci\u0105gnij zdj\u0119cia tutaj, albo kliknij tutaj, aby wybra\u0107 zdj\u0119cia"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (TaskImageDndPush);

/***/ }),

/***/ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskOverlay.js":
/*!*****************************************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditorSubComponents/TaskOverlay.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var react_resize_detector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-resize-detector */ "./node_modules/react-resize-detector/lib/esm/index.js");
/* harmony import */ var _assets_jss_material_kit_react_components_taskOverlayStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/jss/material-kit-react/components/taskOverlayStyle */ "./djsr/frontend/src/components/assets/jss/material-kit-react/components/taskOverlayStyle.js");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "./node_modules/@material-ui/core/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4___default()(_assets_jss_material_kit_react_components_taskOverlayStyle__WEBPACK_IMPORTED_MODULE_3__["default"]);

var TaskOverlay = function TaskOverlay(_ref) {
  var children = _ref.children,
      menuComponents = _ref.menuComponents,
      forceOverlay = _ref.forceOverlay,
      rootBoxProps = _ref.rootBoxProps,
      props = _objectWithoutProperties(_ref, ["children", "menuComponents", "forceOverlay", "rootBoxProps"]);

  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isHovered = _useState2[0],
      setHover = _useState2[1];

  var isActive = isHovered || forceOverlay;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_resize_detector__WEBPACK_IMPORTED_MODULE_2__["default"], null, function (_ref2) {
    var _classNames;

    var width = _ref2.width,
        height = _ref2.height;
    // console.log("task overlay", width, height);
    var boxWidth = width;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onMouseEnter: function onMouseEnter() {
        setHover(true);
      },
      onMouseLeave: function onMouseLeave() {
        return setHover(false);
      } // borderColor={isHovered ? "primary.main" : ""}
      // style={{
      //   border: isActive ? "1px solid black" : "",
      //   margin: isActive ? "-2px -13px" : "0px",
      //   padding: isActive ? "1px 12px" : "0px",
      // }}
      ,
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames = {}, _defineProperty(_classNames, classes.root, true), _defineProperty(_classNames, classes.activeRoot, isActive), _classNames)) // position={"relative"}

    }, isActive && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_resize_detector__WEBPACK_IMPORTED_MODULE_2__["default"], null, function (_ref3) {
      var width = _ref3.width,
          height = _ref3.height;
      var menuWidth = width;
      var rightOffset = boxWidth / 2 - menuWidth / 2;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__["default"] // position={"absolute"}
      , {
        top: "-".concat(height, "px"),
        right: "".concat(rightOffset, "px") // left={"auto"}
        // right={"auto"}
        // borderColor={"primary.main"}
        // display={"flex"}
        // color={"white"}
        ,
        className: classes.menuContainer
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        // style={{
        //   border: "solid transparent",
        //   borderRight: "solid black",
        //   borderWidth: "22px 12px 0 0",
        // }}
        className: classes.menuLeftLeaf
      }), menuComponents, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        // style={{
        //   border: "solid transparent",
        //   borderLeft: "solid black",
        //   borderWidth: "22px 0 0 12px",
        // }}
        className: classes.menuRightLeaf
      }));
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__["default"] // m={isActive ? "-1px" : ""}
    , {
      style: {}
    }, children));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TaskOverlay);

/***/ }),

/***/ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskOverlayButton.js":
/*!***********************************************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditorSubComponents/TaskOverlayButton.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "./node_modules/@material-ui/core/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_jss_material_kit_react_components_overlayButtonStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/jss/material-kit-react/components/overlayButtonStyle */ "./djsr/frontend/src/components/assets/jss/material-kit-react/components/overlayButtonStyle.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_1___default()(_assets_jss_material_kit_react_components_overlayButtonStyle__WEBPACK_IMPORTED_MODULE_3__["default"]);

var TaskOverlayButton = function TaskOverlayButton(props) {
  var className = props.className,
      children = props.children,
      rest = _objectWithoutProperties(props, ["className", "children"]);

  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    className: classes.button + " " + className
  }, rest), children);
};

/* harmony default export */ __webpack_exports__["default"] = (TaskOverlayButton);

/***/ }),

/***/ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskSearchCollapseMenu.js":
/*!****************************************************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditorSubComponents/TaskSearchCollapseMenu.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var _ExamEditorSidePanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ExamEditorSidePanel */ "./djsr/frontend/src/components/ExamEditorSidePanel.js");
/* harmony import */ var _CollapseMenuContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CollapseMenuContainer */ "./djsr/frontend/src/components/ExamEditorSubComponents/CollapseMenuContainer.js");
/* harmony import */ var _MaterialUiTaskSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MaterialUiTaskSearch */ "./djsr/frontend/src/components/MaterialUiTaskSearch.js");
/* harmony import */ var _TaskSearchDndResults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TaskSearchDndResults */ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskSearchDndResults.js");





 //todo paginacja

var TaskSearchCollapseMenu = function TaskSearchCollapseMenu(_ref) {
  var currentTabId = _ref.currentTabId,
      taskSearchResult = _ref.taskSearchResult,
      setTaskSearchResult = _ref.setTaskSearchResult;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CollapseMenuContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    currentTabId: currentTabId,
    id: "taskSearch"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MaterialUiTaskSearch__WEBPACK_IMPORTED_MODULE_4__["default"], {
    updateData: setTaskSearchResult
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TaskSearchDndResults__WEBPACK_IMPORTED_MODULE_5__["default"], {
    taskSearchResult: taskSearchResult
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TaskSearchCollapseMenu);

/***/ }),

/***/ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskSearchDndResults.js":
/*!**************************************************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditorSubComponents/TaskSearchDndResults.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var react_latex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-latex */ "./node_modules/react-latex/build/latex.js");
/* harmony import */ var react_latex__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_latex__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _TaskToolTip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TaskToolTip */ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskToolTip.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var TaskSearchDndResults = function TaskSearchDndResults(_ref) {
  var taskSearchResult = _ref.taskSearchResult;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Container"], null, Array.isArray(taskSearchResult) && taskSearchResult.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__["Droppable"], {
    droppableId: "searchDroppable"
  }, function (provided, snapshot) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      ref: provided.innerRef,
      style: {
        backgroundColor: snapshot.isDraggingOver ? "red" : "white"
      },
      className: "border-top"
    }, taskSearchResult.map(function (task, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__["Draggable"], {
        key: "task-" + task.id,
        draggableId: "" + task.id,
        index: index
      }, function (provided, snapshot) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
          ref: provided.innerRef
        }, provided.draggableProps, provided.dragHandleProps, {
          style: _objectSpread({}, provided.draggableProps.style),
          pb: 3,
          mt: 3,
          borderBottom: 1 // className="border-right border-left border-bottom p-2"

        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
          style: {
            position: "relative"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_latex__WEBPACK_IMPORTED_MODULE_2___default.a, null, task.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], null, task.answers.correctans.map(function (correctans) {
          // console.log("correctans", correctans);
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            style: {
              color: "green"
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_latex__WEBPACK_IMPORTED_MODULE_2___default.a, null, correctans), ",", " ");
        }), task.answers.wronganswers.map(function (wronganswer) {
          // console.log("wronganswer", wronganswer);
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            style: {
              color: "red"
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_latex__WEBPACK_IMPORTED_MODULE_2___default.a, null, wronganswer), ",", " ");
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TaskToolTip__WEBPACK_IMPORTED_MODULE_5__["default"], {
          task: task
        })));
      });
    }), provided.placeholder);
  }), Array.isArray(taskSearchResult) && taskSearchResult.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Brak zada\u0144 o podanych kryteriach"), taskSearchResult === null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-truncate"
  }, "Wybierz umiejetnosci z listy. Aby doda\u0107 zadania do sprawdzianu przeci\u0105gnij je na sprawdzian"), taskSearchResult === false && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-truncate"
  }, "Podczas zapytania do serwera wyst\u0105pi\u0142 b\u0142ad spr\xF3buj ponownie pu\u017Aniej"));
};

/* harmony default export */ __webpack_exports__["default"] = (TaskSearchDndResults);

/***/ }),

/***/ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskToolTip.js":
/*!*****************************************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditorSubComponents/TaskToolTip.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "./node_modules/@material-ui/core/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Help__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Help */ "./node_modules/@material-ui/icons/Help.js");
/* harmony import */ var _material_ui_icons_Help__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Help__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");









var useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_1___default()(function (theme) {
  return {
    fab: {
      margin: theme.spacing(2)
    },
    absolute: {
      position: "absolute",
      top: 0,
      right: 0
    }
  };
});
var HtmlTooltip = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(function (theme) {
  return {
    tooltip: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9"
    }
  };
})(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5__["default"]);

var TaskToolTip = function TaskToolTip(_ref) {
  var task = _ref.task;
  var classes = useStyles();
  console.log("tasktt", task);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HtmlTooltip, {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      color: "inherit"
    }, "Zadanie na poziomie: ", " ", task.level === 1 ? "podstawowym" : "rozszerzonym"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      color: "inherit"
    }, "Typ: ", task.type === 2 ? "Zamknięte" : "Otwarte"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      color: "inherit"
    }, "Proponowana liczba punktów: ", task.points), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      color: "inherit"
    }, "Maks odp. prawidłowych/nieprawidłowych: ", task.answers.correctans.length, "/", task.answers.wronganswers.length))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
    p: 0,
    m: 0,
    className: classes.absolute
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Help__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fontSize: "small",
    style: {
      color: task.level === 1 ? "green" : "red"
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TaskToolTip);

/***/ }),

/***/ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskWithOverlay.js":
/*!*********************************************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditorSubComponents/TaskWithOverlay.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TaskOverlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskOverlay */ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskOverlay.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _TaskContentWithMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TaskContentWithMenu */ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskContentWithMenu.js");
/* harmony import */ var react_latex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-latex */ "./node_modules/react-latex/build/latex.js");
/* harmony import */ var react_latex__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_latex__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _AddTaskWithDropdownMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AddTaskWithDropdownMenu */ "./djsr/frontend/src/components/ExamEditorSubComponents/AddTaskWithDropdownMenu.js");
/* harmony import */ var react_resize_detector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-resize-detector */ "./node_modules/react-resize-detector/lib/esm/index.js");
/* harmony import */ var _getImageLayotRowsCols__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./getImageLayotRowsCols */ "./djsr/frontend/src/components/ExamEditorSubComponents/getImageLayotRowsCols.js");
/* harmony import */ var _taskPointsWithEdit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./taskPointsWithEdit */ "./djsr/frontend/src/components/ExamEditorSubComponents/taskPointsWithEdit.js");
/* harmony import */ var _TaskOverlayButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TaskOverlayButton */ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskOverlayButton.js");
/* harmony import */ var _TaskAnswerWithEdit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TaskAnswerWithEdit */ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskAnswerWithEdit.js");
/* harmony import */ var _material_ui_icons_DragIndicator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/DragIndicator */ "./node_modules/@material-ui/icons/DragIndicator.js");
/* harmony import */ var _material_ui_icons_DragIndicator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DragIndicator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/DeleteForever */ "./node_modules/@material-ui/icons/DeleteForever.js");
/* harmony import */ var _material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _EditTaskImages__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./EditTaskImages */ "./djsr/frontend/src/components/ExamEditorSubComponents/EditTaskImages.js");
/* harmony import */ var _EditTaskAnswerSpace__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./EditTaskAnswerSpace */ "./djsr/frontend/src/components/ExamEditorSubComponents/EditTaskAnswerSpace.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




















var TaskWithOverlay = function TaskWithOverlay(props) {
  var index = props.index,
      draggableIndex = props.draggableIndex,
      droppableId = props.droppableId,
      setTaskToEditWithPart = props.setTaskToEditWithPart,
      editorTaskIndex = props.editorTaskIndex,
      editorTaskPart = props.editorTaskPart,
      updateTaskText = props.updateTaskText,
      task = props.task,
      removeTask = props.removeTask,
      pushTaskAtIndex = props.pushTaskAtIndex,
      updateTaskHeight = props.updateTaskHeight,
      updateStateAndSaveExam = props.updateStateAndSaveExam;
  var answers = task.currentAnswers.answersIndexes.map(function (item) {
    var answerSource = item.isCorrect ? task.currentAnswers.correctans : task.currentAnswers.wronganswers;
    return answerSource[item.index];
  });
  var wronganswers = task.currentAnswers.wronganswers;
  var correctans = task.currentAnswers.correctans;
  var answersIndexes = task.currentAnswers.answersIndexes;
  var taskImage = task.currentAnswers.image || [];
  var imageLayout = Object(_getImageLayotRowsCols__WEBPACK_IMPORTED_MODULE_10__["default"])(task.currentAnswers.imageLayout || "");
  var imageWidth = 12 / imageLayout.cols;
  var ansChar = ["A", "B", "C", "D"];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__["Draggable"], {
    key: "task-" + task.id + "-" + index,
    draggableId: "task-" + task.id + "-" + index,
    index: draggableIndex
  }, function (provided, snapshot) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
      ref: provided.innerRef
    }, provided.draggableProps, {
      style: provided.draggableProps.style
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TaskOverlay__WEBPACK_IMPORTED_MODULE_1__["default"], {
      menuComponents: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditTaskImages__WEBPACK_IMPORTED_MODULE_16__["default"], {
        task: task,
        updateTask: function updateTask(updatedTask) {
          updateStateAndSaveExam(function (state) {
            state.exam.tasks[index] = updatedTask;
            return state;
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddTaskWithDropdownMenu__WEBPACK_IMPORTED_MODULE_8__["default"], {
        index: index,
        pushTaskAtIndex: pushTaskAtIndex
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TaskOverlayButton__WEBPACK_IMPORTED_MODULE_12__["default"], provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_DragIndicator__WEBPACK_IMPORTED_MODULE_14___default.a, {
        fontSize: "small"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TaskOverlayButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onClick: function onClick() {
          removeTask(index);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_15___default.a, {
        fontSize: "small"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditTaskAnswerSpace__WEBPACK_IMPORTED_MODULE_17__["default"], props)]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_resize_detector__WEBPACK_IMPORTED_MODULE_9__["default"], null, function (_ref) {
      var width = _ref.width,
          height = _ref.height;

      if (task.height !== height && height > 1) {
        updateTaskHeight(index, height);
      } // console.log("task w/h ", task);


      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
        container: true,
        alignItems: "center",
        justify: "space-between"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
        item: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: function onClick() {
          removeTask(index);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
        color: "error"
      }, "X"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
        item: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_taskPointsWithEdit__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, props, {
        maxPoints: task.maxPoints
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TaskContentWithMenu__WEBPACK_IMPORTED_MODULE_5__["default"], {
        taskIndex: index,
        content: task.text,
        setTaskToEditWithPart: setTaskToEditWithPart,
        editorTaskIndex: editorTaskIndex,
        editorTaskPart: editorTaskPart,
        updateTaskText: updateTaskText
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__["default"] // style={{ maxHeight: "5cm", width: "100%" }}
      , null, taskImage.length >= 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
        container: true,
        spacing: 2
      }, taskImage.map(function (image) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
          item: true,
          xs: imageWidth // xs={1}
          // sm={1}
          // md={1}
          // xl={1}
          // lg={1}

        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: "".concat(window.location.origin, "/api/user/image/").concat(image),
          style: {
            maxHeight: "5cm",
            maxWidth: "100%",
            margin: "0 auto",
            display: "block"
          }
        }));
      }))), !task.currentAnswers.isOtwarte && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
        container: true,
        alignItems: "center",
        justify: "space-between" // className="pl-2 pr-2 ml-0 mr-2"

      }, answersIndexes.map(function (ans, answerIndex) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TaskAnswerWithEdit__WEBPACK_IMPORTED_MODULE_13__["default"], _extends({}, props, {
          answer: ans,
          wronganswers: wronganswers,
          correctans: correctans,
          answerIndex: answerIndex,
          ansChar: ansChar
        }));
      })), !!task.currentAnswers.isOtwarte && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          border: "1px solid black",
          height: "".concat(task.currentAnswers.spaceToSolve || 0, "cm")
        }
      })));
    })));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TaskWithOverlay);

/***/ }),

/***/ "./djsr/frontend/src/components/ExamEditorSubComponents/TooltipWithOverlay.js":
/*!************************************************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditorSubComponents/TooltipWithOverlay.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _assets_jss_material_kit_react_components_tooltipWithOverlayStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/jss/material-kit-react/components/tooltipWithOverlayStyle */ "./djsr/frontend/src/components/assets/jss/material-kit-react/components/tooltipWithOverlayStyle.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(_assets_jss_material_kit_react_components_tooltipWithOverlayStyle__WEBPACK_IMPORTED_MODULE_3__["default"]);

var TooltipWithOverlay = function TooltipWithOverlay(props) {
  var _classNames;

  var children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, ["children", "className"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var handleClose = function handleClose() {
    setOpen(false);
  };

  var handleOpen = function handleOpen() {
    setOpen(true);
  };

  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    className: className,
    open: open,
    onClose: handleClose,
    onOpen: handleOpen
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames = {}, _defineProperty(_classNames, classes.root, true), _defineProperty(_classNames, classes.activeRoot, open), _classNames))
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (TooltipWithOverlay);

/***/ }),

/***/ "./djsr/frontend/src/components/ExamEditorSubComponents/getImageLayotRowsCols.js":
/*!***************************************************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditorSubComponents/getImageLayotRowsCols.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getColRows = function getColRows(layout) {
  switch (layout) {
    case "2x1":
      return {
        rows: 1,
        cols: 2
      };

    case "1x2":
      return {
        rows: 2,
        cols: 1
      };

    case "1x1":
      return {
        rows: 1,
        cols: 1
      };

    default:
      return {
        rows: 1,
        cols: 1
      };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (getColRows);

/***/ }),

/***/ "./djsr/frontend/src/components/ExamEditorSubComponents/taskPointsWithEdit.js":
/*!************************************************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditorSubComponents/taskPointsWithEdit.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TooltipWithOverlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TooltipWithOverlay */ "./djsr/frontend/src/components/ExamEditorSubComponents/TooltipWithOverlay.js");
/* harmony import */ var _OverlayBorder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OverlayBorder */ "./djsr/frontend/src/components/ExamEditorSubComponents/OverlayBorder.js");
/* harmony import */ var rc_input_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-input-number */ "./node_modules/rc-input-number/es/index.js");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "./node_modules/@material-ui/core/esm/ClickAwayListener/index.js");






var TaskPointsWithEdit = function TaskPointsWithEdit(props) {
  var maxPoints = props.maxPoints,
      editorTaskIndex = props.editorTaskIndex,
      editorTaskPart = props.editorTaskPart,
      setTaskToEditWithPart = props.setTaskToEditWithPart,
      index = props.index,
      updateStateAndSaveExam = props.updateStateAndSaveExam;
  var isEditing = editorTaskIndex === index && editorTaskPart === "maxPoints";
  var points = maxPoints || 0;

  var onChange = function onChange(e) {
    var value = e.target.value;
    updateStateAndSaveExam(function (state) {
      state.exam.tasks[index].maxPoints = parseInt(value);
      return state;
    });
  };

  return !isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TooltipWithOverlay__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Zmień maksymalną liczbę punktów",
    placement: "right-start",
    onClick: function onClick() {
      setTaskToEditWithPart(index, "maxPoints");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-right mb-0 pb-0"
  }, ".../" + points + " pkt.")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OverlayBorder__WEBPACK_IMPORTED_MODULE_2__["default"] // onClick={() => {
  //   setTaskToEditWithPart(null, null);
  // }}
  , null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClickAway: function onClickAway() {
      console.log("clkAway");
      setTaskToEditWithPart(null, null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "number",
    min: 1,
    max: 100,
    maxLength: 3,
    defaultValue: maxPoints,
    style: {
      marginTop: "1rem",
      marginBottom: "1rem"
    },
    onChange: onChange
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TaskPointsWithEdit);

/***/ }),

/***/ "./djsr/frontend/src/components/ExamPDF.js":
/*!*************************************************!*\
  !*** ./djsr/frontend/src/components/ExamPDF.js ***!
  \*************************************************/
/*! exports provided: examToPdf, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "examToPdf", function() { return examToPdf; });
/* harmony import */ var _registered_files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registered-files */ "./djsr/frontend/src/components/registered-files.js");
/* harmony import */ var pdfkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfkit */ "./node_modules/pdfkit/js/pdfkit.es5.js");
/* harmony import */ var blob_stream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! blob-stream */ "./node_modules/blob-stream/index.js");
/* harmony import */ var blob_stream__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(blob_stream__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var svg_to_pdfkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! svg-to-pdfkit */ "./node_modules/svg-to-pdfkit/source.js");
/* harmony import */ var svg_to_pdfkit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(svg_to_pdfkit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_xml_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-xml-parser */ "./node_modules/react-xml-parser/dist/bundle.js");
/* harmony import */ var react_xml_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_xml_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _axiosAPI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./axiosAPI */ "./djsr/frontend/src/components/axiosAPI.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_7__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



 // import texToSvg from "./TexToSvg";




 // const splitLines = (parsedText, doc, width) => {};
// const printPartWithBreak = (part, doc) => {};
// const getStringSize = (text, doc) => {};



var texToSvg = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(latex, onEnd) {
    var r, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _axiosAPI__WEBPACK_IMPORTED_MODULE_5__["axiosInstanceNoAuth"].post("/latex/svg/", {
              latex: latex
            });

          case 2:
            r = _context.sent;
            data = r.data;
            return _context.abrupt("return", data.join(""));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function texToSvg(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var drawCircle = function drawCircle(doc, x, y) {
  doc.circle(x, y, 3);
  doc.stroke();
};

var moveCursorIfNeeded = function moveCursorIfNeeded(crs, distance) {
  var maxX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 595 - 72;
  var downDistance = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 35;

  if (crs.x + distance <= maxX) {
    return {
      x: crs.x,
      y: crs.y
    };
  }

  return {
    x: 72,
    y: crs.y + downDistance
  };
};

var getSvgSize = function getSvgSize(svg) {
  var parsedSvg = new react_xml_parser__WEBPACK_IMPORTED_MODULE_4___default.a().parseFromString(svg);
  console.log("parsedSvg", parsedSvg);
  return {
    x: 100,
    y: 20
  };
};

var addCursor = function addCursor(pos1, pos2) {
  var maxX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 595 - 72;
  return {
    x: Math.floor(pos1.x + pos2.x),
    y: Math.floor(pos1.y + pos2.y)
  }; // return {x:10,y:10}
};

var moveCursorRight = function moveCursorRight(crs, distance) {
  var maxX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 595 - 72;
  var downDistance = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 35;
  console.log("distance", distance);

  if (crs.x + distance <= maxX) {
    return {
      x: crs.x + distance,
      y: crs.y
    };
  } else return {
    x: 72,
    y: crs.y + 20
  };
};

var getCursorPos = function getCursorPos(doc) {
  return {
    x: doc.x,
    y: doc.y
  };
};

var parseTaskText = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(text) {
    var re, match, taskTextParsed, taskTextParsedIndex, toPush;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            re = /\$\{[^\$]*\}\$/g;
            match = null;
            taskTextParsed = [];
            taskTextParsedIndex = 0;

          case 4:
            if (!((match = re.exec(text)) != null)) {
              _context2.next = 15;
              break;
            }

            // console.log(match);
            if (taskTextParsedIndex < match.index) {
              taskTextParsed.push({
                type: "text",
                text: text.substring(taskTextParsedIndex, match.index)
              });
            }

            _context2.t0 = match[0].slice(2, -2);
            _context2.next = 9;
            return texToSvg(match[0].slice(2, -2));

          case 9:
            _context2.t1 = _context2.sent;
            toPush = {
              type: "Latex",
              text: _context2.t0,
              svg: _context2.t1
            };
            taskTextParsed.push(toPush);
            taskTextParsedIndex = match.index + match[0].length;
            _context2.next = 4;
            break;

          case 15:
            if (taskTextParsedIndex < text.length - 1) {
              taskTextParsed.push({
                type: "text",
                text: text.substring(taskTextParsedIndex, text.length)
              });
            }

            return _context2.abrupt("return", taskTextParsed);

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function parseTaskText(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

var parseTask = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(task) {
    var currentDataSet, parsedAnswers;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return parseTaskText(task.text);

          case 2:
            task.parsedText = _context4.sent;
            currentDataSet = task.currentDataSet;
            console.log("currentDataSet", currentDataSet);
            _context4.next = 7;
            return Promise.all(currentDataSet.examAnswers.map( /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(answer) {
                var source;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        console.log("answer map", answer);
                        source = answer.isCorrect ? currentDataSet.answers[0].correctans : currentDataSet.answers[0].allanswers;
                        _context3.next = 4;
                        return parseTaskText(source[answer.index]);

                      case 4:
                        return _context3.abrupt("return", _context3.sent);

                      case 5:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x5) {
                return _ref4.apply(this, arguments);
              };
            }()));

          case 7:
            parsedAnswers = _context4.sent;
            task.parsedAnswers = parsedAnswers;
            return _context4.abrupt("return", task);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function parseTask(_x4) {
    return _ref3.apply(this, arguments);
  };
}();

var parseTasks = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(tasks) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            tasks = tasks.map(function (task) {
              return parseTask(task);
            });
            _context5.next = 3;
            return Promise.all(tasks);

          case 3:
            return _context5.abrupt("return", _context5.sent);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function parseTasks(_x6) {
    return _ref5.apply(this, arguments);
  };
}();

var parseExamData = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(exam) {
    var tasks, parsedTasks;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            tasks = exam.tasks;
            _context6.next = 3;
            return parseTasks(tasks);

          case 3:
            parsedTasks = _context6.sent;
            // console.log("pdf tasks", tasks);
            // console.log("pdf tasksParsed", parsedTasks);
            exam.parsedTasks = parsedTasks;
            return _context6.abrupt("return", exam);

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function parseExamData(_x7) {
    return _ref6.apply(this, arguments);
  };
}();

var examToPdf = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(exam) {
    var pageSize, tasks, doc, stream, myCursor, task, index, taskTextParsed, newCursPos, _iterator, _step, part, toPrint, textSize, crs, svgSize, _crs;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            exam = JSON.parse(JSON.stringify(exam));
            _context7.next = 3;
            return parseExamData(exam);

          case 3:
            exam = _context7.sent;
            console.log("PDF exam", exam);
            pageSize = {
              x: 595,
              Y: 842
            };
            tasks = exam.parsedTasks;
            doc = new pdfkit__WEBPACK_IMPORTED_MODULE_1__["default"]();
            stream = doc.pipe(blob_stream__WEBPACK_IMPORTED_MODULE_2___default()());
            myCursor = getCursorPos(doc);
            doc.fillColor("black");
            console.log("first cursor"); // myCursor = getCursorPos(doc);

            for (task in tasks) {
              index = task;
              task = tasks[index];
              console.log("pdf task", task);
              taskTextParsed = task.parsedText;
              drawCircle(doc, myCursor.x, myCursor.y);
              newCursPos = {
                x: parseInt(Math.floor(doc.widthOfString(parseInt(index) + parseInt(1) + ". "))),
                y: 0 // x:0

              };
              doc.text(parseInt(index) + parseInt(1) + ". ", myCursor.x, myCursor.y, {
                continued: true
              });
              myCursor = moveCursorRight(myCursor, newCursPos.x);
              drawCircle(doc, myCursor.x, myCursor.y); // let position = getCursorPos(doc);

              _iterator = _createForOfIteratorHelper(taskTextParsed);

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  part = _step.value;

                  // console.log("part.text", part.text, taskTextParsed);
                  // console.log("str x y", textSize);
                  if (part.type === "text") {
                    toPrint = String(part.text);
                    console.log("toPrint", toPrint, part.text);
                    textSize = {
                      x: doc.widthOfString(toPrint, {
                        // continued: true,
                        width: pageSize.x - 2 * 72
                      }),
                      y: doc.heightOfString(toPrint, {
                        // continued: true,
                        width: pageSize.x - 2 * 72
                      })
                    };
                    console.log("str to print", myCursor, part.text, part);
                    console.log("crs b4", getCursorPos(doc));
                    crs = getCursorPos(doc);
                    myCursor = moveCursorIfNeeded(myCursor, textSize.x); // doc.text(toPrint, crs.x, crs.y, { continued: true });

                    doc.text(toPrint, myCursor.x, myCursor.y // , { continued: true }
                    );
                    console.log("crs after", getCursorPos(doc)); // doc.text(part.text,myCursor.x,myCursor.y);
                    // console.log("str to print after", myCursor);

                    myCursor = moveCursorRight(myCursor, textSize.x);
                    drawCircle(doc, myCursor.x, myCursor.y);
                  }

                  if (part.type === "Latex") {
                    svgSize = getSvgSize(part.svg);
                    myCursor = moveCursorIfNeeded(myCursor, svgSize.x);
                    console.log("svg to print", myCursor, part.text, part);
                    _crs = getCursorPos(doc);
                    svg_to_pdfkit__WEBPACK_IMPORTED_MODULE_3___default()(doc, part.svg, myCursor.x, myCursor.y); // SVGtoPDF(doc, part.svg, crs.x, crs.y);

                    myCursor = moveCursorRight(myCursor, svgSize.x);
                    drawCircle(doc, myCursor.x, myCursor.y);
                  }
                } // doc.text("", { continued: false });

              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              myCursor.y = myCursor.y + 35;
              myCursor.x = 72;
              drawCircle(doc, myCursor.x, myCursor.y); // doc.moveDown(1);
            }

            doc.end();
            stream.on("finish", function () {
              var blob = stream.toBlob("application/pdf");
              Object(file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"])(blob, "MyFile.pdf");
            });

          case 15:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function examToPdf(_x8) {
    return _ref7.apply(this, arguments);
  };
}();
/* harmony default export */ __webpack_exports__["default"] = (examToPdf);

/***/ }),

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

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

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

/***/ "./djsr/frontend/src/components/MaterialUiExamEditor.js":
/*!**************************************************************!*\
  !*** ./djsr/frontend/src/components/MaterialUiExamEditor.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var lodash_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/collection */ "./node_modules/lodash/collection.js");
/* harmony import */ var lodash_collection__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_collection__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_katex_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/katex.css */ "./djsr/frontend/src/components/styles/katex.css");
/* harmony import */ var _styles_katex_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_katex_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _registered_files__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registered-files */ "./djsr/frontend/src/components/registered-files.js");
/* harmony import */ var _ExamPDF__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ExamPDF */ "./djsr/frontend/src/components/ExamPDF.js");
/* harmony import */ var _axiosAPI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./axiosAPI */ "./djsr/frontend/src/components/axiosAPI.js");
/* harmony import */ var _ExamEditorSubComponents_ExamEditorSidePanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ExamEditorSubComponents/ExamEditorSidePanel */ "./djsr/frontend/src/components/ExamEditorSubComponents/ExamEditorSidePanel.js");
/* harmony import */ var _ExamEditorSubComponents_ExamPageWithTaskOverlays__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ExamEditorSubComponents/ExamPageWithTaskOverlays */ "./djsr/frontend/src/components/ExamEditorSubComponents/ExamPageWithTaskOverlays.js");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_components_CustomModal_CustomModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./material_ui_components/CustomModal/CustomModal */ "./djsr/frontend/src/components/material_ui_components/CustomModal/CustomModal.js");
/* harmony import */ var _material_ui_components_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./material_ui_components/CustomButtons/Button */ "./djsr/frontend/src/components/material_ui_components/CustomButtons/Button.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














 //todo po skasowaniu tresci zadania "zapomina" zdjecie
//todo zajrzec do draganddropahndlera

var ExamEditor = /*#__PURE__*/function (_Component) {
  _inherits(ExamEditor, _Component);

  var _super = _createSuper(ExamEditor);

  function ExamEditor(props) {
    var _this;

    _classCallCheck(this, ExamEditor);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "resetTimeout", function (id, newID) {
      clearTimeout(id);
      return newID;
    });

    _defineProperty(_assertThisInitialized(_this), "getExam", function () {
      var id = _this.props.match.params.id;
      _axiosAPI__WEBPACK_IMPORTED_MODULE_6__["default"].get("/user/onetest/".concat(id)).then(function (response) {
        console.log(response);

        _this.setState(function (state) {
          state.exam = response.data[0];

          if (state.exam.tasks.length > 0) {
            state.exam.tasks = JSON.parse(state.exam.tasks || []);
          } else {
            state.exam.tasks = [];
          }

          return state;
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateStateNoSave", function (stateUpdater) {
      _this.setState(function (state) {
        state = stateUpdater(state);
        return state;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateStateAndSaveExam", function (stateUpdater) {
      _this.setState(function (state) {
        state = stateUpdater(state);
        state.timeout = _this.resetTimeout(_this.state.timeout, setTimeout(_this.saveExam, 3000));
        state.saved = false;
        return state;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setTaskOnPageEditor", function (index, part) {
      _this.setState(function (state) {
        state.editorTaskIndex = index;
        state.editorTaskPart = part;
        state.editorTask = null;

        if (index !== null) {
          state.editorTask = state.exam.tasks[index];
        }

        state.sideMenuCollapseId = "taskEdit";
        return state;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateTaskText", function (index, text) {
      _this.updateStateAndSaveExam(function (state) {
        state.exam.tasks[index].text = text;
        return state;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "generatedPDFV3", _ExamPDF__WEBPACK_IMPORTED_MODULE_5__["default"]);

    _defineProperty(_assertThisInitialized(_this), "updatePageIndexes", function (page, lastIndex) {
      _this.updateStateAndSaveExam(function (state) {
        var pages = state.exam.pages || [];
        pages[page] = lastIndex;
        state.exam.pages = pages;
        return state;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateTaskHeight", function (index, height) {
      // console.log("updated height", index , height)
      _this.setState(function (state) {
        state.exam.tasks[index].height = height;
        return state;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setTaskToEdit", function (index) {
      _this.setState(function (state) {
        state.editorTask = state.exam.tasks[index];
        state.sideMenuCollapseId = "taskEdit";
        return state;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateTaskToEdit", function (task) {
      _this.updateStateAndSaveExam(function (state) {
        Object.assign(state.editorTask, task);
        return state;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "saveExam", function () {
      _axiosAPI__WEBPACK_IMPORTED_MODULE_6__["default"].put("/user/maketest/", {
        id: _this.state.exam.id,
        tasks: JSON.stringify(_this.state.exam.tasks)
      }).then(function (response) {
        _this.setState({
          saved: true
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "removeTask", function (index) {
      // console.log("usunieto" + index);
      _this.updateStateAndSaveExam(function (state) {
        if (index === 0) {
          state.exam.tasks.shift();
        } else {
          state.exam.tasks.splice(index, index);
        }

        return state;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "dragEndOld", function (result) {
      var source = result.source,
          destination = result.destination,
          draggableId = result.draggableId;
      console.log(source, destination, draggableId);

      if (source.droppableId === "examDroppable" && !destination.droppableId) {
        _this.setState(function (state) {
          state.exam.tasks = state.exam.tasks.splice(source.index, source.index);
          return state;
        });
      }

      console.log("dragEnd", result);

      if (!destination || destination.droppableId === "searchDroppable") {
        return;
      }

      if ((source.droppableId || "").substring(0, 13) === "examDroppable" && (destination.droppableId || "").substring(0, 13) === "examDroppable") {
        var sourcePageIndex = source.droppableId.match(/(\d+)/)[0];
        var destinationPageIndex = destination.droppableId.match(/(\d+)/)[0];
        var sourceStartIndex = sourcePageIndex > 0 ? _this.state.exam.pages[sourcePageIndex - 1] + 1 : 0;
        var destinationStartIndex = destinationPageIndex > 0 ? _this.state.exam.pages[destinationPageIndex - 1] + 1 : 0;
        var sourceIndex = sourceStartIndex + source.index;
        var destinationIndex = destinationStartIndex + destination.index;

        _this.updateStateAndSaveExam(function (state) {
          var tasks = state.exam.tasks;
          var _ref = [tasks[destinationIndex], tasks[sourceIndex]];
          tasks[sourceIndex] = _ref[0];
          tasks[destinationIndex] = _ref[1];
          state.saved = false;
          state.timeout = _this.resetTimeout(_this.state.timeout, setTimeout(_this.saveExam, 3000));
          return state;
        });
      } else {
        var draggedItem = JSON.parse(JSON.stringify(_this.state.tasks[source.index]));
        draggedItem.currentAnswers = JSON.parse(JSON.stringify(draggedItem.answers));
        var currentDataSetAnswers = draggedItem.currentAnswers;
        console.log("dragged item", draggedItem, currentDataSetAnswers);
        var correctAnswersIndex = [Math.floor(Math.random() * (currentDataSetAnswers.correctans.length - 1))];
        console.log(correctAnswersIndex, "correctAnswersIndex", currentDataSetAnswers.length);
        var incorrectAnswersIndexes = currentDataSetAnswers.wronganswers.map(function (item, index) {
          return index;
        });
        var answersSet = [];
        answersSet = answersSet.concat(Object(lodash_collection__WEBPACK_IMPORTED_MODULE_2__["sampleSize"])(correctAnswersIndex).map(function (item) {
          return {
            index: item,
            isCorrect: true
          };
        }));
        answersSet = answersSet.concat(Object(lodash_collection__WEBPACK_IMPORTED_MODULE_2__["sampleSize"])(incorrectAnswersIndexes, 3).map(function (item) {
          return {
            index: item,
            isCorrect: false
          };
        }));
        answersSet = Object(lodash_collection__WEBPACK_IMPORTED_MODULE_2__["shuffle"])(answersSet);
        draggedItem.currentAnswers.answersIndexes = answersSet;
        draggedItem.maxPoints = draggedItem.points;
        console.log("draggedItem", draggedItem, _this.state.tasks);

        _this.setState(function (state) {
          state.exam.tasks.splice(destination.index, 0, draggedItem);
          state.saved = false;
          state.timeout = _this.resetTimeout(_this.state.timeout, setTimeout(_this.saveExam, 3000));
          return state;
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "dragEnd", function (result) {
      console.log("dragend", result);
      var source = result.source,
          destination = result.destination,
          draggableId = result.draggableId;
      console.log(source, destination, draggableId);

      if (source.droppableId === "examDroppable" && !destination.droppableId) {
        _this.setState(function (state) {
          state.exam.tasks = state.exam.tasks.splice(source.index, source.index);
          return state;
        });
      }

      console.log("dragEnd", result);

      if (!destination || destination.droppableId === "searchDroppable") {
        return;
      }

      if ((source.droppableId || "").substring(0, 13) === "examDroppable" && (destination.droppableId || "").substring(0, 13) === "examDroppable") {
        var sourcePageIndex = source.droppableId.match(/(\d+)/)[0];
        var destinationPageIndex = destination.droppableId.match(/(\d+)/)[0];
        var sourceStartIndex = sourcePageIndex > 0 ? _this.state.exam.pages[sourcePageIndex - 1] + 1 : 0;
        var destinationStartIndex = destinationPageIndex > 0 ? _this.state.exam.pages[destinationPageIndex - 1] + 1 : 0;
        var sourceIndex = sourceStartIndex + source.index;
        var destinationIndex = destinationStartIndex + destination.index;

        _this.updateStateAndSaveExam(function (state) {
          var tasks = state.exam.tasks;
          var _ref2 = [tasks[destinationIndex], tasks[sourceIndex]];
          tasks[sourceIndex] = _ref2[0];
          tasks[destinationIndex] = _ref2[1];
          return state;
        });
      } else {
        var _destinationPageIndex = destination.droppableId.match(/(\d+)/)[0];

        var _destinationStartIndex = _destinationPageIndex > 0 ? _this.state.exam.pages[_destinationPageIndex - 1] + 1 : 0;

        var _destinationIndex = _destinationStartIndex + destination.index;

        var draggedItem = _this.state.tasks[source.index];

        var taskWithAnswerSet = _this.generateAnswerSetForTask(draggedItem);

        taskWithAnswerSet.maxPoints = taskWithAnswerSet.points || 1;

        _this.pushTaskAtIndex(taskWithAnswerSet, _destinationIndex);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setSearchedTasks", function (tasks) {
      // console.log("Triggered Task");
      _this.setState(function (state) {
        state.tasks = tasks;
        return state;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "generateAnswerSetForTask", function (task) {
      var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          numberOfAnswers = _ref3.numberOfAnswers,
          numberOfCorrectAnswers = _ref3.numberOfCorrectAnswers,
          options = _objectWithoutProperties(_ref3, ["numberOfAnswers", "numberOfCorrectAnswers"]);

      numberOfAnswers = numberOfAnswers || 4;
      numberOfCorrectAnswers = numberOfCorrectAnswers || 1;
      var NewTask = JSON.parse(JSON.stringify(task));
      NewTask.currentAnswers = JSON.parse(JSON.stringify(NewTask.answers));
      var currentDataSetAnswers = NewTask.currentAnswers;

      var correctAnswersIndex = _toConsumableArray(currentDataSetAnswers.correctans.keys());

      var incorrectAnswersIndexes = _toConsumableArray(currentDataSetAnswers.wronganswers.keys());

      var answersSet = [];
      answersSet = answersSet.concat(Object(lodash_collection__WEBPACK_IMPORTED_MODULE_2__["sampleSize"])(correctAnswersIndex, numberOfCorrectAnswers).map(function (item) {
        return {
          index: item,
          isCorrect: true
        };
      }));
      answersSet = answersSet.concat(Object(lodash_collection__WEBPACK_IMPORTED_MODULE_2__["sampleSize"])(incorrectAnswersIndexes, numberOfAnswers - numberOfCorrectAnswers).map(function (item) {
        return {
          index: item,
          isCorrect: false
        };
      }));
      answersSet = Object(lodash_collection__WEBPACK_IMPORTED_MODULE_2__["shuffle"])(answersSet);
      NewTask.currentAnswers.answersIndexes = answersSet;
      return NewTask;
    });

    _defineProperty(_assertThisInitialized(_this), "setSideMenuCollapse", function (collapseId) {
      _this.setState({
        sideMenuCollapseId: collapseId
      });
    });

    _defineProperty(_assertThisInitialized(_this), "pushTaskAtIndex", function (task, index) {
      _this.updateStateAndSaveExam(function (state) {
        state.exam.tasks.splice(index, 0, task);
        return state;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSideMenuTabChange", function (event, newValue) {
      // if (newValue === "generatePDF") this.generatedPDFV3(this.state.exam);
      if (newValue === "generatePDF") {
        _this.updateStateNoSave(function (state) {
          // state.anchorEl = event.currentTarget;
          state.downloadModal = true;
          return state;
        });
      } // window.open(
      //   `${window.location.origin}/api/user/testpdf/` + this.state.exam.id,
      //   "_blank"
      // );
      //window.open(url,'_blank');
      else _this.setSideMenuCollapse(newValue);
    });

    _defineProperty(_assertThisInitialized(_this), "handleCloseMenu", function () {
      _this.updateStateNoSave(function (state) {
        state.anchorEl = null;
        return state;
      });
    });

    _this.state = {
      exam: null,
      //     {
      //   tasks: [],
      // }
      tasks: null,
      sideMenuCollapseId: "taskSearch",
      editorTask: null,
      timeout: null,
      saved: true,
      editorTaskIndex: null,
      editorTaskPart: null,
      anchorEl: null,
      downloadModal: false
    };
    return _this;
  }

  _createClass(ExamEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getExam();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var exam = this.state.exam;

      if (!exam) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Ladowanie"));
      }

      var sideMenuCollapseId = this.state.sideMenuCollapseId;
      var searchedTasks = this.state.tasks;
      var examTasks = this.state.exam.tasks;
      var editorTask = this.state.editorTask;
      var isExamSaved = this.state.saved;
      var anchorEl = this.state.anchorEl; // console.log("editorTask", editorTask);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__["DragDropContext"], {
        onDragEnd: this.dragEnd
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexFlow: "row nowrap"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExamEditorSubComponents_ExamEditorSidePanel__WEBPACK_IMPORTED_MODULE_7__["default"], {
        exam: exam,
        saved: isExamSaved,
        currentTabId: sideMenuCollapseId,
        handleTabChange: this.handleSideMenuTabChange,
        setTaskSearchResult: this.setSearchedTasks,
        taskSearchResult: searchedTasks,
        updateTask: this.updateTaskToEdit,
        selectedTaskToEdit: this.state.editorTask
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExamEditorSubComponents_ExamPageWithTaskOverlays__WEBPACK_IMPORTED_MODULE_8__["default"], {
        exam: exam,
        setTaskToEdit: this.setTaskToEdit,
        removeTask: this.removeTask,
        setTaskToEditWithPart: this.setTaskOnPageEditor,
        editorTaskIndex: this.state.editorTaskIndex,
        editorTaskPart: this.state.editorTaskPart,
        updateTaskText: this.updateTaskText,
        pushTaskAtIndex: this.pushTaskAtIndex,
        updateTaskHeight: this.updateTaskHeight,
        updatePageIndexes: this.updatePageIndexes,
        updateStateAndSaveExam: this.updateStateAndSaveExam,
        updateStateNoSave: this.updateStateNoSave
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_9__["default"], {
        id: "simple-menu",
        anchorEl: anchorEl // keepMounted
        ,
        open: Boolean(anchorEl),
        onClose: this.handleCloseMenu
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onClick: function onClick() {
          window.open("".concat(window.location.origin, "/api/user/testpdf/") + _this2.state.exam.id, "_blank");
        }
      }, "Sprawdzian"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onClick: function onClick() {
          window.open("".concat(window.location.origin, "/api/user/answerspdf/") + _this2.state.exam.id, "_blank");
        }
      }, "Karta Odpowiedzi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onClick: function onClick() {
          window.open("".concat(window.location.origin, "/api/user/answerskeypdf/") + _this2.state.exam.id, "_blank");
        }
      }, "Klucz"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomModal_CustomModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
        open: open // dialogTitle={}
        // fullWidth={true}
        // maxWidth={"lg"}
        ,
        onClose: function onClose() {
          _this2.setState(function (state) {
            state.downloadModal = false;
            return false;
          });
        },
        dialogActionsChildren: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
          color: "transparent",
          onClick: function onClick() {
            _this2.setState(function (state) {
              state.downloadModal = false;
              return false;
            });
          }
        }, "Zamknij")]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13__["default"], {
        display: "flex",
        flexDirection: "column"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
        color: "transparent",
        onClick: function onClick() {
          window.open("".concat(window.location.origin, "/api/user/testpdf/") + _this2.state.exam.id, "_blank");
        }
      }, "Sprawdzian"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
        color: "transparent",
        onClick: function onClick() {
          window.open("".concat(window.location.origin, "/api/user/answerspdf/") + _this2.state.exam.id, "_blank");
        }
      }, "Arkusz odpowiedzi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
        color: "transparent",
        onClick: function onClick() {
          window.open("".concat(window.location.origin, "/api/user/answerskeypdf/") + _this2.state.exam.id, "_blank");
        }
      }, "Klucz Odpowiedzi"))));
    }
  }]);

  return ExamEditor;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // ExamEditor.propTypes = {};


/* harmony default export */ __webpack_exports__["default"] = (ExamEditor);

/***/ }),

/***/ "./djsr/frontend/src/components/MaterialUiTaskSearch.js":
/*!**************************************************************!*\
  !*** ./djsr/frontend/src/components/MaterialUiTaskSearch.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axiosAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./axiosAPI */ "./djsr/frontend/src/components/axiosAPI.js");
/* harmony import */ var _FormikMDInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormikMDInput */ "./djsr/frontend/src/components/FormikMDInput.js");
/* harmony import */ var _material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/Pagination */ "./node_modules/@material-ui/lab/esm/Pagination/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var _material_ui_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material_ui_components/Pagination/Pagination */ "./djsr/frontend/src/components/material_ui_components/Pagination/Pagination.js");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "./node_modules/@material-ui/icons/MoveToInbox.js");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Drafts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Drafts */ "./node_modules/@material-ui/icons/Drafts.js");
/* harmony import */ var _material_ui_icons_Drafts__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Drafts__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Send */ "./node_modules/@material-ui/icons/Send.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "./node_modules/@material-ui/icons/ExpandLess.js");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/StarBorder */ "./node_modules/@material-ui/icons/StarBorder.js");
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/esm/ListItemSecondaryAction/index.js");
/* harmony import */ var _material_ui_components_CustomCheckBox_CustomCheckbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./material_ui_components/CustomCheckBox/CustomCheckbox */ "./djsr/frontend/src/components/material_ui_components/CustomCheckBox/CustomCheckbox.js");
/* harmony import */ var _ExamEditorSubComponents_TaskParser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ExamEditorSubComponents/TaskParser */ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskParser.js");
/* harmony import */ var _material_ui_components_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./material_ui_components/CustomButtons/Button */ "./djsr/frontend/src/components/material_ui_components/CustomButtons/Button.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



























var MaterialUiTaskSearch = /*#__PURE__*/function (_Component) {
  _inherits(MaterialUiTaskSearch, _Component);

  var _super = _createSuper(MaterialUiTaskSearch);

  function MaterialUiTaskSearch(props) {
    var _this;

    _classCallCheck(this, MaterialUiTaskSearch);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "toggleCollapse", function (id) {
      _this.setState({
        collapseId: id
      });
    });

    _defineProperty(_assertThisInitialized(_this), "compileSections", function () {
      var sections = _this.state.sections;
    });

    _this.state = {
      sections: null,
      collapseId: null,
      results: null // currentPage:null,

    };
    return _this;
  }

  _createClass(MaterialUiTaskSearch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _axiosAPI__WEBPACK_IMPORTED_MODULE_1__["axiosInstanceNoAuth"].get("/user/sections2/").then(function (response) {
        var parsed = response.data.map(function (section) {
          section.skill = section.skilll;
          return section;
        });

        _this2.setState({
          sections: parsed
        }); // const parsed= response.data.map((section)=>{
        //   section.skill=section.skilll
        //   return section
        // })
        // this.setState({ sections: response.data });

      })["catch"](function (error) {
        console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var sections = this.state.sections;
      var collapseId = this.state.collapseId;
      var results = this.state.results;
      console.log(this.props, "TaskSearch Props");
      console.log("sections", sections);
      if (!sections) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "loading");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_24__["default"], {
        component: "div",
        m: 1 // display="flex" justifyContent="center"

      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_16__["Formik"], {
        initialValues: {
          skills: [],
          currentPage: 1,
          maxPage: null
        },
        onSubmit: function onSubmit(values, helpers) {
          setTimeout(function () {
            // console.log("start 1");
            helpers.setSubmitting(true); // console.log("start 2");

            var skills = values.skills;
            var result = [];

            var _iterator = _createForOfIteratorHelper(skills.keys()),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var key = _step.value;

                // result.push(key)
                if (!!skills[key]) {
                  result.push(key);
                }
              } // console.log("values",values);
              // console.log("skillsy",result.join(","));

            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            _axiosAPI__WEBPACK_IMPORTED_MODULE_1__["default"].post("/user/tasks/", {
              skill: result.join(","),
              pagenr: values.currentPage,
              nroftasks: 10
            }).then(function (response) {
              helpers.setSubmitting(false);
              console.log("response", response); // this.setState({
              //   results: response.data,
              // });
              // console.log("parsed Twat",tasksParser(response.data));

              helpers.setFieldValue("maxPage", parseInt(response.data.pages));

              _this3.props.updateData(Object(_ExamEditorSubComponents_TaskParser__WEBPACK_IMPORTED_MODULE_21__["default"])(response.data.tasks));
            })["catch"](function (error) {
              // console.log("login error", error.response);
              var errResponse = error.response;
              helpers.setSubmitting(false);
            });
          }, 200);
        }
      }, function (_ref) {
        var values = _ref.values,
            errors = _ref.errors,
            touched = _ref.touched,
            handleBlur = _ref.handleBlur,
            handleSubmit = _ref.handleSubmit,
            isSubmitting = _ref.isSubmitting,
            setFieldValue = _ref.setFieldValue;

        var handleChange = function handleChange(valueName) {
          setFieldValue(valueName, !Object(formik__WEBPACK_IMPORTED_MODULE_16__["getIn"])(values, valueName));
        };

        var sectionBooleanValue = function sectionBooleanValue(parsedSection) {
          console.log("sectionBooleanValue", parsedSection);
          var sectionSkillsValue = parsedSection.skill.map(function (skill) {
            return !!Object(formik__WEBPACK_IMPORTED_MODULE_16__["getIn"])(values, "skills." + skill.id);
          });
          return sectionSkillsValue.reduce(function (prevValue, nextValue) {
            console.log("id" + parsedSection.id, prevValue, nextValue);
            return prevValue && nextValue;
          });
        };

        var handleSectionChange = function handleSectionChange(parsedSection) {
          _this3.toggleCollapse("section-" + parsedSection.id);

          var newValue = !sectionBooleanValue(parsedSection);
          var skillsValueNames = parsedSection.skill.map(function (skill) {
            return "skills." + skill.id;
          });

          var _iterator2 = _createForOfIteratorHelper(skillsValueNames),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var valueName = _step2.value;
              setFieldValue(valueName, newValue);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        };

        var handlePageChange = function handlePageChange(event, page) {
          console.log("pageChange", page);

          if (values.currentPage !== page && page <= values.maxPage && page > 0 && !isSubmitting) {
            setFieldValue("currentPage", page);
            handleSubmit();
          }
        };

        var _usePagination = Object(_material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_3__["usePagination"])({
          count: values.maxPage || 1,
          page: values.currentPage,
          onChange: handlePageChange
        }),
            paginationItems = _usePagination.items;

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_16__["Form"], {
          onSubmit: handleSubmit
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__["default"], null, sections.map(function (section) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"] // onClick={() => {
          //   this.toggleCollapse("section-" + section.id);
          // }}
          , null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomCheckBox_CustomCheckbox__WEBPACK_IMPORTED_MODULE_20__["default"], {
            edge: "start",
            checked: sectionBooleanValue(section),
            onChange: function onChange() {
              handleSectionChange(section);
            }
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
            primary: section.Section,
            onClick: function onClick() {
              _this3.toggleCollapse("section-" + section.id);
            }
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_8__["default"], {
            "in": "section-" + section.id === collapseId,
            unmountOnExit: true // isOpen={collapseId}
            // className="border-left border-right border-bottom p-2"

          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__["default"], {
            component: "div",
            disablePadding: true
          }, section.skill.map(function (skill) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
              onClick: function onClick() {
                handleChange("skills." + skill.id);
              }
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomCheckBox_CustomCheckbox__WEBPACK_IMPORTED_MODULE_20__["default"], {
              edge: "start",
              checked: !!Object(formik__WEBPACK_IMPORTED_MODULE_16__["getIn"])(values, "skills." + skill.id),
              tabIndex: -1,
              disableRipple: true // inputProps={{
              //   "aria-labelledby": labelId,
              // }}

            })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"] // id={labelId}
            , {
              primary: skill.Skill
            }));
          }))));
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_24__["default"], {
          component: "div",
          m: 1,
          display: "flex",
          justifyContent: "center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_22__["default"], {
          color: "primary",
          size: "sm",
          onClick: handleSubmit,
          disabled: isSubmitting
        }, "Szukaj")), !!values.maxPage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_24__["default"], {
          style: {
            display: "flex",
            justifyContent: "center"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_9__["default"], {
          pages: paginationItems.map(function (_ref2, index) {
            var page = _ref2.page,
                type = _ref2.type,
                selected = _ref2.selected,
                item = _objectWithoutProperties(_ref2, ["page", "type", "selected"]);

            switch (true) {
              case type === "start-ellipsis" || type === "end-ellipsis":
                return _objectSpread({
                  text: "...",
                  disabled: isSubmitting
                }, item);

              case type === "page":
                return _objectSpread({
                  text: page,
                  active: selected,
                  disabled: isSubmitting
                }, item);

              case type === "previous":
                return _objectSpread({
                  text: "<",
                  disabled: isSubmitting
                }, item);

              case type === "next":
                return _objectSpread({
                  text: ">",
                  disabled: isSubmitting
                }, item);

              default:
                return {
                  text: "XD"
                };
            }
          })
        }))));
      }));
    }
  }]);

  return MaterialUiTaskSearch;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MaterialUiTaskSearch);

/***/ }),

/***/ "./djsr/frontend/src/components/assets sync recursive ^\\.\\/.*$":
/*!***********************************************************!*\
  !*** ./djsr/frontend/src/components/assets sync ^\.\/.*$ ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./fonts/Roboto-Italic.ttf": "./djsr/frontend/src/components/assets/fonts/Roboto-Italic.ttf",
	"./fonts/Roboto-Medium.ttf": "./djsr/frontend/src/components/assets/fonts/Roboto-Medium.ttf",
	"./fonts/Roboto-MediumItalic.ttf": "./djsr/frontend/src/components/assets/fonts/Roboto-MediumItalic.ttf",
	"./fonts/Roboto-Regular.ttf": "./djsr/frontend/src/components/assets/fonts/Roboto-Regular.ttf",
	"./images/bee.png": "./djsr/frontend/src/components/assets/images/bee.png",
	"./jss/material-kit-react": "./djsr/frontend/src/components/assets/jss/material-kit-react.js",
	"./jss/material-kit-react.js": "./djsr/frontend/src/components/assets/jss/material-kit-react.js",
	"./jss/material-kit-react/components/badgeStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/badgeStyle.js",
	"./jss/material-kit-react/components/badgeStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/badgeStyle.js",
	"./jss/material-kit-react/components/buttonStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/buttonStyle.js",
	"./jss/material-kit-react/components/buttonStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/buttonStyle.js",
	"./jss/material-kit-react/components/cardBodyStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/cardBodyStyle.js",
	"./jss/material-kit-react/components/cardBodyStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/cardBodyStyle.js",
	"./jss/material-kit-react/components/cardFooterStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/cardFooterStyle.js",
	"./jss/material-kit-react/components/cardFooterStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/cardFooterStyle.js",
	"./jss/material-kit-react/components/cardHeaderStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/cardHeaderStyle.js",
	"./jss/material-kit-react/components/cardHeaderStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/cardHeaderStyle.js",
	"./jss/material-kit-react/components/cardStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/cardStyle.js",
	"./jss/material-kit-react/components/cardStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/cardStyle.js",
	"./jss/material-kit-react/components/customDropdownStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/customDropdownStyle.js",
	"./jss/material-kit-react/components/customDropdownStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/customDropdownStyle.js",
	"./jss/material-kit-react/components/customInputStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/customInputStyle.js",
	"./jss/material-kit-react/components/customInputStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/customInputStyle.js",
	"./jss/material-kit-react/components/customLinearProgressStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/customLinearProgressStyle.js",
	"./jss/material-kit-react/components/customLinearProgressStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/customLinearProgressStyle.js",
	"./jss/material-kit-react/components/customTabsStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/customTabsStyle.js",
	"./jss/material-kit-react/components/customTabsStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/customTabsStyle.js",
	"./jss/material-kit-react/components/footerStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/footerStyle.js",
	"./jss/material-kit-react/components/footerStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/footerStyle.js",
	"./jss/material-kit-react/components/headerLinksStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/headerLinksStyle.js",
	"./jss/material-kit-react/components/headerLinksStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/headerLinksStyle.js",
	"./jss/material-kit-react/components/headerStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/headerStyle.js",
	"./jss/material-kit-react/components/headerStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/headerStyle.js",
	"./jss/material-kit-react/components/infoStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/infoStyle.js",
	"./jss/material-kit-react/components/infoStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/infoStyle.js",
	"./jss/material-kit-react/components/navPillsStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/navPillsStyle.js",
	"./jss/material-kit-react/components/navPillsStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/navPillsStyle.js",
	"./jss/material-kit-react/components/overlayButtonStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/overlayButtonStyle.js",
	"./jss/material-kit-react/components/overlayButtonStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/overlayButtonStyle.js",
	"./jss/material-kit-react/components/paginationStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/paginationStyle.js",
	"./jss/material-kit-react/components/paginationStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/paginationStyle.js",
	"./jss/material-kit-react/components/parallaxStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/parallaxStyle.js",
	"./jss/material-kit-react/components/parallaxStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/parallaxStyle.js",
	"./jss/material-kit-react/components/snackbarContentStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/snackbarContentStyle.js",
	"./jss/material-kit-react/components/snackbarContentStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/snackbarContentStyle.js",
	"./jss/material-kit-react/components/taskOverlayStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/taskOverlayStyle.js",
	"./jss/material-kit-react/components/taskOverlayStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/taskOverlayStyle.js",
	"./jss/material-kit-react/components/tooltipWithOverlayStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/tooltipWithOverlayStyle.js",
	"./jss/material-kit-react/components/tooltipWithOverlayStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/tooltipWithOverlayStyle.js",
	"./jss/material-kit-react/components/typographyStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/typographyStyle.js",
	"./jss/material-kit-react/components/typographyStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/typographyStyle.js",
	"./jss/material-kit-react/customCheckboxRadioSwitch": "./djsr/frontend/src/components/assets/jss/material-kit-react/customCheckboxRadioSwitch.js",
	"./jss/material-kit-react/customCheckboxRadioSwitch.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/customCheckboxRadioSwitch.js",
	"./jss/material-kit-react/imagesStyles": "./djsr/frontend/src/components/assets/jss/material-kit-react/imagesStyles.js",
	"./jss/material-kit-react/imagesStyles.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/imagesStyles.js",
	"./jss/material-kit-react/modalStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/modalStyle.js",
	"./jss/material-kit-react/modalStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/modalStyle.js",
	"./jss/material-kit-react/popoverStyles": "./djsr/frontend/src/components/assets/jss/material-kit-react/popoverStyles.js",
	"./jss/material-kit-react/popoverStyles.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/popoverStyles.js",
	"./jss/material-kit-react/tooltipsStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/tooltipsStyle.js",
	"./jss/material-kit-react/tooltipsStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/tooltipsStyle.js",
	"./jss/material-kit-react/views/components": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/components.js",
	"./jss/material-kit-react/views/components.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/components.js",
	"./jss/material-kit-react/views/componentsSections/basicsStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/basicsStyle.js",
	"./jss/material-kit-react/views/componentsSections/basicsStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/basicsStyle.js",
	"./jss/material-kit-react/views/componentsSections/carouselStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/carouselStyle.js",
	"./jss/material-kit-react/views/componentsSections/carouselStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/carouselStyle.js",
	"./jss/material-kit-react/views/componentsSections/completedStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/completedStyle.js",
	"./jss/material-kit-react/views/componentsSections/completedStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/completedStyle.js",
	"./jss/material-kit-react/views/componentsSections/downloadStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/downloadStyle.js",
	"./jss/material-kit-react/views/componentsSections/downloadStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/downloadStyle.js",
	"./jss/material-kit-react/views/componentsSections/exampleStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/exampleStyle.js",
	"./jss/material-kit-react/views/componentsSections/exampleStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/exampleStyle.js",
	"./jss/material-kit-react/views/componentsSections/javascriptStyles": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js",
	"./jss/material-kit-react/views/componentsSections/javascriptStyles.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js",
	"./jss/material-kit-react/views/componentsSections/loginStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/loginStyle.js",
	"./jss/material-kit-react/views/componentsSections/loginStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/loginStyle.js",
	"./jss/material-kit-react/views/componentsSections/navbarsStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js",
	"./jss/material-kit-react/views/componentsSections/navbarsStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js",
	"./jss/material-kit-react/views/componentsSections/notificationsStyles": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/notificationsStyles.js",
	"./jss/material-kit-react/views/componentsSections/notificationsStyles.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/notificationsStyles.js",
	"./jss/material-kit-react/views/componentsSections/pillsStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/pillsStyle.js",
	"./jss/material-kit-react/views/componentsSections/pillsStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/pillsStyle.js",
	"./jss/material-kit-react/views/componentsSections/tabsStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/tabsStyle.js",
	"./jss/material-kit-react/views/componentsSections/tabsStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/tabsStyle.js",
	"./jss/material-kit-react/views/componentsSections/typographyStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/typographyStyle.js",
	"./jss/material-kit-react/views/componentsSections/typographyStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/typographyStyle.js",
	"./jss/material-kit-react/views/landingPage": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/landingPage.js",
	"./jss/material-kit-react/views/landingPage.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/landingPage.js",
	"./jss/material-kit-react/views/landingPageSections/productStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/landingPageSections/productStyle.js",
	"./jss/material-kit-react/views/landingPageSections/productStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/landingPageSections/productStyle.js",
	"./jss/material-kit-react/views/landingPageSections/teamStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/landingPageSections/teamStyle.js",
	"./jss/material-kit-react/views/landingPageSections/teamStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/landingPageSections/teamStyle.js",
	"./jss/material-kit-react/views/landingPageSections/workStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/landingPageSections/workStyle.js",
	"./jss/material-kit-react/views/landingPageSections/workStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/landingPageSections/workStyle.js",
	"./jss/material-kit-react/views/loginPage": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/loginPage.js",
	"./jss/material-kit-react/views/loginPage.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/loginPage.js",
	"./jss/material-kit-react/views/profilePage": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/profilePage.js",
	"./jss/material-kit-react/views/profilePage.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/views/profilePage.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./djsr/frontend/src/components/assets sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./djsr/frontend/src/components/assets/fonts/Roboto-Italic.ttf":
/*!*********************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/fonts/Roboto-Italic.ttf ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "667a1fb223a7a8b2063995c08135fa2d.ttf");

/***/ }),

/***/ "./djsr/frontend/src/components/assets/fonts/Roboto-Medium.ttf":
/*!*********************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/fonts/Roboto-Medium.ttf ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ea7d3afe129bb3e2ff353ae13db6245e.ttf");

/***/ }),

/***/ "./djsr/frontend/src/components/assets/fonts/Roboto-MediumItalic.ttf":
/*!***************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/fonts/Roboto-MediumItalic.ttf ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9d2bc2511675cb157ba53ff5358712bf.ttf");

/***/ }),

/***/ "./djsr/frontend/src/components/assets/fonts/Roboto-Regular.ttf":
/*!**********************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/fonts/Roboto-Regular.ttf ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "71779d80f05ad6beea6ee828c0aef7d9.ttf");

/***/ }),

/***/ "./djsr/frontend/src/components/assets/images/bee.png":
/*!************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/images/bee.png ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "32f65184f3ce6a4062bad2f08cae0bdf.png");

/***/ }),

/***/ "./djsr/frontend/src/components/assets/jss/material-kit-react/components/badgeStyle.js":
/*!*********************************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/jss/material-kit-react/components/badgeStyle.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../jss/material-kit-react.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react.js");

var badgeStyle = {
  badge: {
    marginRight: "3px",
    borderRadius: "12px",
    padding: "5px 12px",
    textTransform: "uppercase",
    fontSize: "10px",
    fontWeight: "500",
    lineHeight: "1",
    color: "#fff",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
    display: "inline-block"
  },
  primary: {
    backgroundColor: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"]
  },
  warning: {
    backgroundColor: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"]
  },
  danger: {
    backgroundColor: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"]
  },
  success: {
    backgroundColor: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["successColor"]
  },
  info: {
    backgroundColor: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"]
  },
  rose: {
    backgroundColor: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"]
  },
  gray: {
    backgroundColor: "#6c757d"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (badgeStyle);

/***/ }),

/***/ "./djsr/frontend/src/components/assets/jss/material-kit-react/components/customLinearProgressStyle.js":
/*!************************************************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/jss/material-kit-react/components/customLinearProgressStyle.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../jss/material-kit-react.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react.js");

var customLinearProgressStyle = {
  root: {
    height: "4px",
    marginBottom: "20px",
    overflow: "hidden"
  },
  bar: {
    height: "4px"
  },
  primary: {
    backgroundColor: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"]
  },
  warning: {
    backgroundColor: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"]
  },
  danger: {
    backgroundColor: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"]
  },
  success: {
    backgroundColor: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["successColor"]
  },
  info: {
    backgroundColor: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"]
  },
  rose: {
    backgroundColor: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"]
  },
  gray: {
    backgroundColor: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"]
  },
  primaryBackground: {
    background: "rgba(156, 39, 176, 0.2)"
  },
  warningBackground: {
    background: "rgba(255, 152, 0, 0.2)"
  },
  dangerBackground: {
    background: "rgba(244, 67, 54, 0.2)"
  },
  successBackground: {
    background: "rgba(76, 175, 80, 0.2)"
  },
  infoBackground: {
    background: "rgba(0, 188, 212, 0.2)"
  },
  roseBackground: {
    background: "rgba(233, 30, 99, 0.2)"
  },
  grayBackground: {
    background: "rgba(221, 221, 221, 0.2)"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (customLinearProgressStyle);

/***/ }),

/***/ "./djsr/frontend/src/components/assets/jss/material-kit-react/components/customTabsStyle.js":
/*!**************************************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/jss/material-kit-react/components/customTabsStyle.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var customTabsStyle = {
  cardTitle: {
    "float": "left",
    padding: "10px 10px 10px 0px",
    lineHeight: "24px"
  },
  cardTitleRTL: {
    "float": "right",
    padding: "10px 0px 10px 10px !important"
  },
  displayNone: {
    display: "none !important"
  },
  tabsRoot: {
    minHeight: "unset !important"
  },
  tabRootButton: {
    minHeight: "unset !important",
    minWidth: "unset !important",
    width: "unset !important",
    height: "unset !important",
    maxWidth: "unset !important",
    maxHeight: "unset !important",
    padding: "10px 15px",
    borderRadius: "3px",
    lineHeight: "24px",
    border: "0 !important",
    color: "#fff !important",
    marginLeft: "4px",
    fontWeight: "500",
    fontSize: "12px",
    "&:last-child": {
      marginLeft: "0px"
    }
  },
  tabSelected: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    transition: "0.2s background-color 0.1s"
  },
  tabWrapper: {
    display: "inline-block",
    minHeight: "unset !important",
    minWidth: "unset !important",
    width: "unset !important",
    height: "unset !important",
    maxWidth: "unset !important",
    maxHeight: "unset !important",
    "& > svg": {
      verticalAlign: "middle",
      margin: "-1.55px 5px 0 0 !important"
    },
    "&,& *": {
      letterSpacing: "normal !important"
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (customTabsStyle);

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

/***/ "./djsr/frontend/src/components/assets/jss/material-kit-react/components/navPillsStyle.js":
/*!************************************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/jss/material-kit-react/components/navPillsStyle.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../jss/material-kit-react.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var navPillsStyle = function navPillsStyle(theme) {
  return {
    root: {
      marginTop: "20px",
      paddingLeft: "0",
      marginBottom: "0",
      overflow: "visible !important",
      lineHeight: "24px",
      textTransform: "uppercase",
      fontSize: "12px",
      fontWeight: "500",
      position: "relative",
      display: "block",
      color: "inherit"
    },
    flexContainer: _defineProperty({}, theme.breakpoints.down("xs"), {
      display: "flex",
      flexWrap: "wrap"
    }),
    displayNone: {
      display: "none !important"
    },
    fixed: {
      overflow: "visible !important"
    },
    horizontalDisplay: {
      display: "block"
    },
    pills: {
      "float": "left",
      position: "relative",
      display: "block",
      borderRadius: "30px",
      minWidth: "100px",
      textAlign: "center",
      transition: "all .3s",
      padding: "10px 15px",
      color: "#555555",
      height: "auto",
      opacity: "1",
      maxWidth: "100%",
      margin: "0 5px"
    },
    pillsWithIcons: {
      borderRadius: "4px"
    },
    tabIcon: {
      width: "30px",
      height: "30px",
      display: "block",
      margin: "15px 0 !important",
      "&, & *": {
        letterSpacing: "normal !important"
      }
    },
    horizontalPills: {
      width: "100%",
      "float": "none !important",
      "& + button": {
        margin: "10px 0"
      }
    },
    contentWrapper: {
      marginTop: "20px"
    },
    primary: {
      "&,&:hover": {
        color: "#FFFFFF",
        backgroundColor: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"],
        boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(156, 39, 176, 0.4)"
      }
    },
    info: {
      "&,&:hover": {
        color: "#FFFFFF",
        backgroundColor: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"],
        boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(76, 175, 80, 0.4)"
      }
    },
    success: {
      "&,&:hover": {
        color: "#FFFFFF",
        backgroundColor: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["successColor"],
        boxShadow: "0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)"
      }
    },
    warning: {
      "&,&:hover": {
        color: "#FFFFFF",
        backgroundColor: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"],
        boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)"
      }
    },
    danger: {
      "&,&:hover": {
        color: "#FFFFFF",
        backgroundColor: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"],
        boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)"
      }
    },
    rose: {
      "&,&:hover": {
        color: "#FFFFFF",
        backgroundColor: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"],
        boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"
      }
    },
    alignCenter: {
      alignItems: "center",
      justifyContent: "center"
    },
    tabWrapper: {
      color: "inherit",
      position: "relative",
      fontSize: "12px",
      lineHeight: "24px",
      fontWeight: "500",
      textTransform: "uppercase",
      "&,& *": {
        letterSpacing: "normal"
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (navPillsStyle);

/***/ }),

/***/ "./djsr/frontend/src/components/assets/jss/material-kit-react/components/overlayButtonStyle.js":
/*!*****************************************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/jss/material-kit-react/components/overlayButtonStyle.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../jss/material-kit-react.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react.js");

var overlayButtonStyle = {
  button: {
    color: "white",
    backgroundColor: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"],
    marginLeft: "1px",
    marginRight: "1px"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (overlayButtonStyle);

/***/ }),

/***/ "./djsr/frontend/src/components/assets/jss/material-kit-react/components/paginationStyle.js":
/*!**************************************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/jss/material-kit-react/components/paginationStyle.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../jss/material-kit-react.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react.js");

var paginationStyle = {
  pagination: {
    display: "inline-block",
    paddingLeft: "0",
    margin: "0 0 20px 0",
    borderRadius: "4px"
  },
  paginationItem: {
    display: "inline"
  },
  paginationLink: {
    ":first-of-type": {
      marginleft: "0"
    },
    letterSpacing: "unset",
    border: "0",
    borderRadius: "30px !important",
    transition: "all .3s",
    padding: "0px 11px",
    margin: "0 3px",
    minWidth: "30px",
    height: "30px",
    minHeight: "auto",
    lineHeight: "30px",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    background: "transparent",
    position: "relative",
    "float": "left",
    textDecoration: "none",
    boxSizing: "border-box",
    "&,&:hover,&:focus": {
      color: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"]
    },
    "&:hover,&:focus": {
      zIndex: "3",
      backgroundColor: "#eee",
      borderColor: "#ddd"
    },
    "&:hover": {
      cursor: "pointer"
    }
  },
  primary: {
    "&,&:hover,&:focus": {
      backgroundColor: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"],
      borderColor: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"],
      color: "#FFFFFF",
      boxShadow: "0 4px 5px 0 rgba(156, 39, 176, 0.14), 0 1px 10px 0 rgba(156, 39, 176, 0.12), 0 2px 4px -1px rgba(156, 39, 176, 0.2)"
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  info: {
    "&,&:hover,&:focus": {
      backgroundColor: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"],
      borderColor: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"],
      color: "#FFFFFF",
      boxShadow: "0 4px 5px 0 rgba(0, 188, 212, 0.14), 0 1px 10px 0 rgba(0, 188, 212, 0.12), 0 2px 4px -1px rgba(0, 188, 212, 0.2)"
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  success: {
    "&,&:hover,&:focus": {
      backgroundColor: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["successColor"],
      borderColor: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["successColor"],
      color: "#FFFFFF",
      boxShadow: "0 4px 5px 0 rgba(76, 175, 80, 0.14), 0 1px 10px 0 rgba(76, 175, 80, 0.12), 0 2px 4px -1px rgba(76, 175, 80, 0.2)"
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  warning: {
    "&,&:hover,&:focus": {
      backgroundColor: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"],
      borderColor: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"],
      color: "#FFFFFF",
      boxShadow: "0 4px 5px 0 rgba(255, 152, 0, 0.14), 0 1px 10px 0 rgba(255, 152, 0, 0.12), 0 2px 4px -1px rgba(255, 152, 0, 0.2)"
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  danger: {
    "&,&:hover,&:focus": {
      backgroundColor: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"],
      borderColor: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"],
      color: "#FFFFFF",
      boxShadow: "0 4px 5px 0 rgba(244, 67, 54, 0.14), 0 1px 10px 0 rgba(244, 67, 54, 0.12), 0 2px 4px -1px rgba(244, 67, 54, 0.2)"
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  disabled: {
    "&,&:hover,&:focus": {
      color: "#777",
      cursor: "not-allowed",
      backgroundColor: "#fff",
      borderColor: "#ddd"
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (paginationStyle);

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

/***/ "./djsr/frontend/src/components/assets/jss/material-kit-react/components/snackbarContentStyle.js":
/*!*******************************************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/jss/material-kit-react/components/snackbarContentStyle.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../jss/material-kit-react.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var snackbarContentStyle = {
  root: _objectSpread(_objectSpread({}, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["defaultFont"]), {}, {
    position: "relative",
    padding: "20px 15px",
    lineHeight: "20px",
    marginBottom: "20px",
    fontSize: "14px",
    backgroundColor: "white",
    color: "#555555",
    borderRadius: "0px",
    maxWidth: "100%",
    minWidth: "auto",
    boxShadow: "0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)"
  }),
  info: _objectSpread({
    backgroundColor: "#00d3ee",
    color: "#ffffff"
  }, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["infoBoxShadow"]),
  success: _objectSpread({
    backgroundColor: "#5cb860",
    color: "#ffffff"
  }, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["successBoxShadow"]),
  warning: _objectSpread({
    backgroundColor: "#ffa21a",
    color: "#ffffff"
  }, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["warningBoxShadow"]),
  danger: _objectSpread({
    backgroundColor: "#f55a4e",
    color: "#ffffff"
  }, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["dangerBoxShadow"]),
  primary: _objectSpread({
    backgroundColor: "#af2cc5",
    color: "#ffffff"
  }, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryBoxShadow"]),
  message: {
    padding: "0",
    display: "block",
    maxWidth: "89%",
    "&,& *": {
      letterSpacing: "normal"
    }
  },
  close: {
    width: "14px",
    height: "14px"
  },
  iconButton: {
    width: "24px",
    height: "24px",
    "float": "right",
    fontSize: "1.5rem",
    fontWeight: "500",
    lineHeight: "1",
    position: "absolute",
    right: "-4px",
    top: "0",
    padding: "0"
  },
  icon: {
    display: "block",
    "float": "left",
    marginRight: "1.071rem"
  },
  container: _objectSpread(_objectSpread({}, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["container"]), {}, {
    position: "relative"
  })
};
/* harmony default export */ __webpack_exports__["default"] = (snackbarContentStyle);

/***/ }),

/***/ "./djsr/frontend/src/components/assets/jss/material-kit-react/components/taskOverlayStyle.js":
/*!***************************************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/jss/material-kit-react/components/taskOverlayStyle.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_kit_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../material-kit-react */ "./djsr/frontend/src/components/assets/jss/material-kit-react.js");

var taskOverlayStyle = {
  root: {
    position: "relative",
    margin: "0px",
    padding: "0px"
  },
  activeRoot: {
    border: "1px solid ".concat(_material_kit_react__WEBPACK_IMPORTED_MODULE_0__["primaryColor"]),
    margin: "-2px -13px",
    padding: "1px 12px"
  },
  menuContainer: {
    position: "absolute",
    display: "flex",
    color: "white"
  },
  menuLeftLeaf: {
    border: "solid transparent",
    borderRight: "solid ".concat(_material_kit_react__WEBPACK_IMPORTED_MODULE_0__["primaryColor"]),
    borderWidth: "22px 12px 0 0",
    marginRight: "-1px"
  },
  menuRightLeaf: {
    border: "solid transparent",
    borderLeft: "solid ".concat(_material_kit_react__WEBPACK_IMPORTED_MODULE_0__["primaryColor"]),
    borderWidth: "22px 0 0 12px",
    marginLeft: "-1px"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (taskOverlayStyle);

/***/ }),

/***/ "./djsr/frontend/src/components/assets/jss/material-kit-react/components/tooltipWithOverlayStyle.js":
/*!**********************************************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/jss/material-kit-react/components/tooltipWithOverlayStyle.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _taskOverlayStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskOverlayStyle */ "./djsr/frontend/src/components/assets/jss/material-kit-react/components/taskOverlayStyle.js");
/* harmony import */ var _tooltipsStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tooltipsStyle */ "./djsr/frontend/src/components/assets/jss/material-kit-react/tooltipsStyle.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var tooltipOverlayStyle = _objectSpread(_objectSpread({}, _taskOverlayStyle__WEBPACK_IMPORTED_MODULE_0__["default"]), _tooltipsStyle__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (tooltipOverlayStyle);

/***/ }),

/***/ "./djsr/frontend/src/components/assets/jss/material-kit-react/components/typographyStyle.js":
/*!**************************************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/jss/material-kit-react/components/typographyStyle.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../jss/material-kit-react.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var typographyStyle = {
  defaultFontStyle: _objectSpread(_objectSpread({}, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["defaultFont"]), {}, {
    fontSize: "14px"
  }),
  defaultHeaderMargins: {
    marginTop: "20px",
    marginBottom: "10px"
  },
  quote: {
    padding: "10px 20px",
    margin: "0 0 20px",
    fontSize: "17.5px",
    borderLeft: "5px solid #eee"
  },
  quoteText: {
    margin: "0 0 10px",
    fontStyle: "italic"
  },
  quoteAuthor: {
    display: "block",
    fontSize: "80%",
    lineHeight: "1.42857143",
    color: "#777"
  },
  mutedText: {
    color: "#777"
  },
  primaryText: {
    color: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"]
  },
  infoText: {
    color: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"]
  },
  successText: {
    color: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["successColor"]
  },
  warningText: {
    color: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"]
  },
  dangerText: {
    color: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"]
  },
  smallText: {
    fontSize: "65%",
    fontWeight: "400",
    lineHeight: "1",
    color: "#777"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (typographyStyle);

/***/ }),

/***/ "./djsr/frontend/src/components/assets/jss/material-kit-react/imagesStyles.js":
/*!************************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/jss/material-kit-react/imagesStyles.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var imagesStyles = {
  imgFluid: {
    maxWidth: "100%",
    height: "auto"
  },
  imgRounded: {
    borderRadius: "6px !important"
  },
  imgRoundedCircle: {
    borderRadius: "50% !important"
  },
  imgRaised: {
    boxShadow: "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  imgGallery: {
    width: "100%",
    marginBottom: "2.142rem"
  },
  imgCardTop: {
    width: "100%",
    borderTopLeftRadius: "calc(.25rem - 1px)",
    borderTopRightRadius: "calc(.25rem - 1px)"
  },
  imgCardBottom: {
    width: "100%",
    borderBottomLeftRadius: "calc(.25rem - 1px)",
    borderBottomRightRadius: "calc(.25rem - 1px)"
  },
  imgCard: {
    width: "100%",
    borderRadius: "calc(.25rem - 1px)"
  },
  imgCardOverlay: {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    padding: "1.25rem"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (imagesStyles);

/***/ }),

/***/ "./djsr/frontend/src/components/assets/jss/material-kit-react/modalStyle.js":
/*!**********************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/jss/material-kit-react/modalStyle.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var modalStyle = {
  modal: {
    borderRadius: "6px"
  },
  modalHeader: {
    borderBottom: "none",
    paddingTop: "24px",
    paddingRight: "24px",
    paddingBottom: "0",
    paddingLeft: "24px",
    minHeight: "16.43px"
  },
  modalTitle: {
    margin: "0",
    lineHeight: "1.42857143"
  },
  modalCloseButton: {
    color: "#999999",
    marginTop: "-12px",
    WebkitAppearance: "none",
    padding: "0",
    cursor: "pointer",
    background: "0 0",
    border: "0",
    fontSize: "inherit",
    opacity: ".9",
    textShadow: "none",
    fontWeight: "700",
    lineHeight: "1",
    "float": "right"
  },
  modalClose: {
    width: "16px",
    height: "16px"
  },
  modalBody: {
    paddingTop: "24px",
    paddingRight: "24px",
    paddingBottom: "16px",
    paddingLeft: "24px",
    position: "relative"
  },
  modalFooter: {
    padding: "15px",
    textAlign: "right",
    paddingTop: "0",
    margin: "0"
  },
  modalFooterCenter: {
    marginLeft: "auto",
    marginRight: "auto"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (modalStyle);

/***/ }),

/***/ "./djsr/frontend/src/components/assets/jss/material-kit-react/popoverStyles.js":
/*!*************************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/jss/material-kit-react/popoverStyles.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var popoverStyles = {
  popover: {
    padding: "0",
    boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    lineHeight: "1.5em",
    background: "#fff",
    border: "none",
    borderRadius: "3px",
    display: "block",
    maxWidth: "276px",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontStyle: "normal",
    fontWeight: "400",
    textAlign: "start",
    textDecoration: "none",
    textShadow: "none",
    textTransform: "none",
    letterSpacing: "normal",
    wordBreak: "normal",
    wordSpacing: "normal",
    whiteSpace: "normal",
    lineBreak: "auto",
    fontSize: "0.875rem",
    wordWrap: "break-word"
  },
  popoverBottom: {
    marginTop: "5px"
  },
  popoverHeader: {
    backgroundColor: "#fff",
    border: "none",
    padding: "15px 15px 5px",
    fontSize: "1.125rem",
    margin: "0",
    color: "#555",
    borderTopLeftRadius: "calc(0.3rem - 1px)",
    borderTopRightRadius: "calc(0.3rem - 1px)"
  },
  popoverBody: {
    padding: "10px 15px 15px",
    lineHeight: "1.4",
    color: "#555"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (popoverStyles);

/***/ }),

/***/ "./djsr/frontend/src/components/assets/jss/material-kit-react/views/components.js":
/*!****************************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/jss/material-kit-react/views/components.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../jss/material-kit-react.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react.js");

var componentsStyle = {
  container: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["container"],
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px 0 0"
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
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (componentsStyle);

/***/ }),

/***/ "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/basicsStyle.js":
/*!************************************************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/basicsStyle.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../jss/material-kit-react.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react.js");
/* harmony import */ var _jss_material_kit_react_customCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../jss/material-kit-react/customCheckboxRadioSwitch.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react/customCheckboxRadioSwitch.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var basicsStyle = _objectSpread({
  sections: {
    padding: "70px 0"
  },
  container: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["container"],
  title: _objectSpread(_objectSpread({}, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["title"]), {}, {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  space50: {
    height: "50px",
    display: "block"
  },
  space70: {
    height: "70px",
    display: "block"
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF"
  }
}, _jss_material_kit_react_customCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (basicsStyle);

/***/ }),

/***/ "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/carouselStyle.js":
/*!**************************************************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/carouselStyle.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../jss/material-kit-react.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react.js");

var carouselStyle = {
  section: {
    padding: "70px 0"
  },
  container: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["container"],
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (carouselStyle);

/***/ }),

/***/ "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/completedStyle.js":
/*!***************************************************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/completedStyle.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jss_material_kit_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../jss/material-kit-react */ "./djsr/frontend/src/components/assets/jss/material-kit-react.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var completedStyle = {
  section: {
    padding: "70px 0"
  },
  container: _objectSpread(_objectSpread({}, _jss_material_kit_react__WEBPACK_IMPORTED_MODULE_0__["container"]), {}, {
    textAlign: "center !important"
  })
};
/* harmony default export */ __webpack_exports__["default"] = (completedStyle);

/***/ }),

/***/ "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/downloadStyle.js":
/*!**************************************************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/downloadStyle.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../jss/material-kit-react.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react.js");

var downloadStyle = {
  section: {
    padding: "70px 0"
  },
  container: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["container"],
  textCenter: {
    textAlign: "center"
  },
  sharingArea: {
    marginTop: "80px"
  },
  socials: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    fontSize: "20px",
    marginRight: "4px"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (downloadStyle);

/***/ }),

/***/ "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/exampleStyle.js":
/*!*************************************************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/exampleStyle.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../jss/material-kit-react.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react.js");
/* harmony import */ var _jss_material_kit_react_imagesStyles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../jss/material-kit-react/imagesStyles.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react/imagesStyles.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var exampleStyle = _objectSpread(_objectSpread({
  section: {
    padding: "70px 0"
  },
  container: _objectSpread(_objectSpread({}, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["containerFluid"]), {}, {
    textAlign: "center !important"
  })
}, _jss_material_kit_react_imagesStyles_js__WEBPACK_IMPORTED_MODULE_1__["default"]), {}, {
  link: {
    textDecoration: "none"
  }
});

/* harmony default export */ __webpack_exports__["default"] = (exampleStyle);

/***/ }),

/***/ "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js":
/*!*****************************************************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../jss/material-kit-react.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react.js");
/* harmony import */ var _jss_material_kit_react_modalStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../jss/material-kit-react/modalStyle.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react/modalStyle.js");
/* harmony import */ var _jss_material_kit_react_tooltipsStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../jss/material-kit-react/tooltipsStyle.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react/tooltipsStyle.js");
/* harmony import */ var _jss_material_kit_react_popoverStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../jss/material-kit-react/popoverStyles.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react/popoverStyles.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var javascriptStyles = _objectSpread(_objectSpread(_objectSpread({
  section: {
    padding: "70px 0 0"
  },
  container: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["container"],
  title: _objectSpread(_objectSpread({}, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["title"]), {}, {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  icon: {
    width: "17px",
    height: "17px",
    marginRight: "4px"
  }
}, _jss_material_kit_react_modalStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"]), {}, {
  label: {
    color: "rgba(0, 0, 0, 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    transition: "0.3s ease all",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingLeft: "0",
    letterSpacing: "normal"
  }
}, _jss_material_kit_react_tooltipsStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"]), _jss_material_kit_react_popoverStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (javascriptStyles);

/***/ }),

/***/ "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/loginStyle.js":
/*!***********************************************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/loginStyle.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../jss/material-kit-react.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react.js");
/* harmony import */ var _images_bee_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../images/bee.png */ "./djsr/frontend/src/components/assets/images/bee.png");


var loginStyle = {
  section: {
    minHeight: "110vh",
    maxHeight: "1600px",
    overflow: "hidden",
    padding: "70px 0",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    margin: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
    backgroundImage: "url(" + _images_bee_png__WEBPACK_IMPORTED_MODULE_1__["default"] + ")"
  },
  container: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["container"],
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
/* harmony default export */ __webpack_exports__["default"] = (loginStyle);

/***/ }),

/***/ "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js":
/*!*************************************************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../jss/material-kit-react.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react.js");
/* harmony import */ var _jss_material_kit_react_components_headerLinksStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../jss/material-kit-react/components/headerLinksStyle.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react/components/headerLinksStyle.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var navbarsStyle = function navbarsStyle(theme) {
  return _objectSpread(_objectSpread({
    section: {
      padding: "70px 0",
      paddingTop: "0"
    },
    container: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["container"],
    title: _objectSpread(_objectSpread({}, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["title"]), {}, {
      marginTop: "30px",
      minHeight: "32px",
      textDecoration: "none"
    }),
    navbar: {
      marginBottom: "-20px",
      zIndex: "100",
      position: "relative",
      overflow: "hidden",
      "& header": {
        borderRadius: "0"
      }
    },
    navigation: {
      backgroundPosition: "center center",
      backgroundSize: "cover",
      marginTop: "0",
      minHeight: "740px"
    },
    formControl: {
      margin: "0 !important",
      paddingTop: "0"
    },
    inputRootCustomClasses: {
      margin: "0!important"
    },
    searchIcon: {
      width: "20px",
      height: "20px",
      color: "inherit"
    }
  }, Object(_jss_material_kit_react_components_headerLinksStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(theme)), {}, {
    img: {
      width: "40px",
      height: "40px",
      borderRadius: "50%"
    },
    imageDropdownButton: {
      padding: "0px",
      top: "4px",
      borderRadius: "50%",
      marginLeft: "5px"
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (navbarsStyle);

/***/ }),

/***/ "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/notificationsStyles.js":
/*!********************************************************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/notificationsStyles.js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../jss/material-kit-react.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var notificationsStyles = {
  section: {
    backgroundColor: "#FFFFFF",
    display: "block",
    width: "100%",
    position: "relative",
    padding: "0"
  },
  title: _objectSpread(_objectSpread({}, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["title"]), {}, {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  container: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["container"]
};
/* harmony default export */ __webpack_exports__["default"] = (notificationsStyles);

/***/ }),

/***/ "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/pillsStyle.js":
/*!***********************************************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/pillsStyle.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../jss/material-kit-react.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var pillsStyle = {
  section: {
    padding: "70px 0"
  },
  container: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["container"],
  title: _objectSpread(_objectSpread({}, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["title"]), {}, {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  })
};
/* harmony default export */ __webpack_exports__["default"] = (pillsStyle);

/***/ }),

/***/ "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/tabsStyle.js":
/*!**********************************************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/tabsStyle.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../jss/material-kit-react.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react.js");

var tabsStyle = {
  section: {
    background: "#EEEEEE",
    padding: "70px 0"
  },
  container: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["container"],
  textCenter: {
    textAlign: "center"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (tabsStyle);

/***/ }),

/***/ "./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/typographyStyle.js":
/*!****************************************************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/jss/material-kit-react/views/componentsSections/typographyStyle.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../jss/material-kit-react.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react.js");
/* harmony import */ var _jss_material_kit_react_imagesStyles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../jss/material-kit-react/imagesStyles.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react/imagesStyles.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var typographyStyle = _objectSpread({
  section: {
    padding: "70px 0"
  },
  container: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["container"],
  space50: {
    height: "50px",
    display: "block"
  },
  title: _objectSpread(_objectSpread({}, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["title"]), {}, {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative",
    width: "100%"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  marginLeft: {
    marginLeft: "auto !important"
  }
}, _jss_material_kit_react_imagesStyles_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (typographyStyle);

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
  title: _objectSpread(_objectSpread({}, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["title"]), {}, {
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
  title: _objectSpread(_objectSpread({}, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["title"]), {}, {
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

/***/ "./djsr/frontend/src/components/assets/jss/material-kit-react/views/landingPageSections/teamStyle.js":
/*!***********************************************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/jss/material-kit-react/views/landingPageSections/teamStyle.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../jss/material-kit-react.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react.js");
/* harmony import */ var _jss_material_kit_react_imagesStyles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../jss/material-kit-react/imagesStyles.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react/imagesStyles.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var teamStyle = _objectSpread(_objectSpread({
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: _objectSpread(_objectSpread({}, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["title"]), {}, {
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  })
}, _jss_material_kit_react_imagesStyles_js__WEBPACK_IMPORTED_MODULE_1__["default"]), {}, {
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardTitle: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["cardTitle"],
  smallTitle: {
    color: "#6c757d"
  },
  description: {
    color: "#999"
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  margin5: {
    margin: "5px"
  }
});

/* harmony default export */ __webpack_exports__["default"] = (teamStyle);

/***/ }),

/***/ "./djsr/frontend/src/components/assets/jss/material-kit-react/views/landingPageSections/workStyle.js":
/*!***********************************************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/jss/material-kit-react/views/landingPageSections/workStyle.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../jss/material-kit-react.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var workStyle = {
  section: {
    padding: "70px 0"
  },
  title: _objectSpread(_objectSpread({}, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["title"]), {}, {
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  }),
  description: {
    color: "#999",
    textAlign: "center"
  },
  textCenter: {
    textAlign: "center"
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (workStyle);

/***/ }),

/***/ "./djsr/frontend/src/components/assets/jss/material-kit-react/views/profilePage.js":
/*!*****************************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/jss/material-kit-react/views/profilePage.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../jss/material-kit-react.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react.js");
/* harmony import */ var _jss_material_kit_react_imagesStyles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../jss/material-kit-react/imagesStyles.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react/imagesStyles.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var profilePageStyle = _objectSpread(_objectSpread({
  container: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["container"],
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)"
    }
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important"
  },
  name: {
    marginTop: "-80px"
  }
}, _jss_material_kit_react_imagesStyles_js__WEBPACK_IMPORTED_MODULE_1__["default"]), {}, {
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  title: _objectSpread(_objectSpread({}, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["title"]), {}, {
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center"
  }
});

/* harmony default export */ __webpack_exports__["default"] = (profilePageStyle);

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

/***/ "./djsr/frontend/src/components/material_ui_components/CustomModal/CustomDialogTitle.js":
/*!**********************************************************************************************!*\
  !*** ./djsr/frontend/src/components/material_ui_components/CustomModal/CustomDialogTitle.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_jss_material_kit_react_modalStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/jss/material-kit-react/modalStyle */ "./djsr/frontend/src/components/assets/jss/material-kit-react/modalStyle.js");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "./node_modules/@material-ui/core/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2___default()(_assets_jss_material_kit_react_modalStyle__WEBPACK_IMPORTED_MODULE_1__["default"]);

var CustomDialogTitle = function CustomDialogTitle(_ref) {
  var title = _ref.title,
      onClose = _ref.onClose,
      props = _objectWithoutProperties(_ref, ["title", "onClose"]);

  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    disableTypography: true,
    className: classes.modalHeader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.modalCloseButton,
    key: "close",
    "aria-label": "Close",
    color: "inherit",
    onClick: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.modalClose
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: classes.modalTitle
  }, title));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomDialogTitle);

/***/ }),

/***/ "./djsr/frontend/src/components/material_ui_components/CustomModal/CustomModal.js":
/*!****************************************************************************************!*\
  !*** ./djsr/frontend/src/components/material_ui_components/CustomModal/CustomModal.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _assets_jss_material_kit_react_modalStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/jss/material-kit-react/modalStyle */ "./djsr/frontend/src/components/assets/jss/material-kit-react/modalStyle.js");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "./node_modules/@material-ui/core/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CustomDialogTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CustomDialogTitle */ "./djsr/frontend/src/components/material_ui_components/CustomModal/CustomDialogTitle.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4___default()(_assets_jss_material_kit_react_modalStyle__WEBPACK_IMPORTED_MODULE_3__["default"]);

var CustomModal = function CustomModal(_ref) {
  var children = _ref.children,
      dialogTitle = _ref.dialogTitle,
      dialogActionsChildren = _ref.dialogActionsChildren,
      props = _objectWithoutProperties(_ref, ["children", "dialogTitle", "dialogActionsChildren"]);

  var onClose = props.onClose;
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    classes: {
      root: classes.center,
      paper: classes.modal
    }
  }, props), !!dialogTitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CustomDialogTitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClose: onClose,
    title: dialogTitle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "classic-modal-slide-description",
    className: classes.modalBody
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.modalFooter
  }, dialogActionsChildren));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomModal);

/***/ }),

/***/ "./djsr/frontend/src/components/material_ui_components/CustomRadio/CustomRadio.js":
/*!****************************************************************************************!*\
  !*** ./djsr/frontend/src/components/material_ui_components/CustomRadio/CustomRadio.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/esm/Radio/index.js");
/* harmony import */ var _assets_jss_material_kit_react_customCheckboxRadioSwitch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/jss/material-kit-react/customCheckboxRadioSwitch */ "./djsr/frontend/src/components/assets/jss/material-kit-react/customCheckboxRadioSwitch.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(_assets_jss_material_kit_react_customCheckboxRadioSwitch__WEBPACK_IMPORTED_MODULE_3__["default"]);

var CustomRadio = function CustomRadio(props) {
  var labelProps = props.labelProps,
      radioProps = props.radioProps;
  var classes = useStyles(); // const disabled=labelProps;
  // const disabledClass= (disabled)? {}:{};

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["FiberManualRecord"], {
        className: classes.radioUnchecked
      }),
      checkedIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["FiberManualRecord"], {
        className: classes.radioChecked
      }),
      classes: {
        checked: classes.radio,
        root: classes.radioRoot
      }
    }, radioProps)),
    classes: {
      label: classes.label,
      root: classes.labelRoot,
      disabled: classes.disabledCheckboxAndRadio
    }
  }, labelProps));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomRadio);

/***/ }),

/***/ "./djsr/frontend/src/components/material_ui_components/Pagination/Pagination.js":
/*!**************************************************************************************!*\
  !*** ./djsr/frontend/src/components/material_ui_components/Pagination/Pagination.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pagination; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _assets_jss_material_kit_react_components_paginationStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/jss/material-kit-react/components/paginationStyle.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react/components/paginationStyle.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // nodejs library to set properties for components

 // nodejs library that concatenates classes

 // @material-ui/core components




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(_assets_jss_material_kit_react_components_paginationStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
function Pagination(props) {
  var classes = useStyles();
  var pages = props.pages,
      color = props.color;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: classes.pagination
  }, pages.map(function (prop, key) {
    var _classNames;

    var paginationLink = classnames__WEBPACK_IMPORTED_MODULE_2___default()((_classNames = {}, _defineProperty(_classNames, classes.paginationLink, true), _defineProperty(_classNames, classes[color], prop.active), _defineProperty(_classNames, classes.disabled, prop.disabled), _classNames));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: classes.paginationItem,
      key: key
    }, prop.onClick !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onClick: prop.onClick,
      className: paginationLink
    }, prop.text) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onClick: function onClick() {
        return alert("you've clicked " + prop.text);
      },
      className: paginationLink
    }, prop.text));
  }));
}
Pagination.defaultProps = {
  color: "primary"
};
Pagination.propTypes = {
  pages: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["PREV", "NEXT", "..."])]).isRequired,
    onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
  })).isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["primary", "info", "success", "warning", "danger"])
};

/***/ }),

/***/ "./djsr/frontend/src/components/registered-files.js":
/*!**********************************************************!*\
  !*** ./djsr/frontend/src/components/registered-files.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "./node_modules/pdfkit/js/virtual-fs.js");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pdfkit_js_data_Courier_Bold_afm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfkit/js/data/Courier-Bold.afm */ "./node_modules/pdfkit/js/data/Courier-Bold.afm");
 // use raw-loader explicitly
// import Courier from '!!raw-loader!pdfkit/js/data/Courier.afm'
// use raw-loader implicitly (webpack is configured to load *.afm files using raw loader)



function registerBinaryFiles(ctx) {
  ctx.keys().forEach(function (key) {
    // extracts "./" from beginning of the key
    fs__WEBPACK_IMPORTED_MODULE_0___default.a.writeFileSync(key.substring(2), ctx(key));
  });
}

function registerAFMFonts(ctx) {
  ctx.keys().forEach(function (key) {
    var match = key.match(/([^/]*\.afm$)/);

    if (match) {
      // afm files must be stored on data path
      fs__WEBPACK_IMPORTED_MODULE_0___default.a.writeFileSync("data/".concat(match[0]), ctx(key)["default"]);
    }
  });
} // register all files found in assets folder (relative to src)


registerBinaryFiles(__webpack_require__("./djsr/frontend/src/components/assets sync recursive ^\\.\\/.*$")); // register AFM fonts distributed with pdfkit
// is good practice to register only required fonts to avoid the bundle size increase

registerAFMFonts(__webpack_require__("./node_modules/pdfkit/js/data sync Helvetica.*\\.afm$")); // register files imported directly
// fs.writeFileSync('data/Courier.afm', Courier)

fs__WEBPACK_IMPORTED_MODULE_0___default.a.writeFileSync('data/Courier-Bold.afm', pdfkit_js_data_Courier_Bold_afm__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./djsr/frontend/src/components/styles/katex.css":
/*!*******************************************************!*\
  !*** ./djsr/frontend/src/components/styles/katex.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./djsr/frontend/src/components/taskSearch.js":
/*!****************************************************!*\
  !*** ./djsr/frontend/src/components/taskSearch.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axiosAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./axiosAPI */ "./djsr/frontend/src/components/axiosAPI.js");
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");
/* harmony import */ var _FormikMDInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormikMDInput */ "./djsr/frontend/src/components/FormikMDInput.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _ExamEditorSubComponents_TaskParser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ExamEditorSubComponents/TaskParser */ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskParser.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var TaskSearch = /*#__PURE__*/function (_Component) {
  _inherits(TaskSearch, _Component);

  var _super = _createSuper(TaskSearch);

  function TaskSearch(props) {
    var _this;

    _classCallCheck(this, TaskSearch);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "toggleCollapse", function (id) {
      _this.setState({
        collapseId: id
      });
    });

    _defineProperty(_assertThisInitialized(_this), "compileSections", function () {
      var sections = _this.state.sections;
    });

    _this.state = {
      sections: null,
      collapseId: null,
      results: null
    };
    return _this;
  }

  _createClass(TaskSearch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _axiosAPI__WEBPACK_IMPORTED_MODULE_1__["axiosInstanceNoAuth"].get("/user/sections/").then(function (response) {
        _this2.setState({
          sections: response.data
        });
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var sections = this.state.sections;
      var collapseId = this.state.collapseId;
      var results = this.state.results;
      console.log("sections", sections);
      if (!sections) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "loading");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          width: "100%"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
        initialValues: {
          skills: []
        },
        onSubmit: function onSubmit(values, helpers) {
          setTimeout(function () {
            // console.log("start 1");
            helpers.setSubmitting(true); // console.log("start 2");

            var skills = values.skills;
            var result = [];

            var _iterator = _createForOfIteratorHelper(skills.keys()),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var key = _step.value;

                // result.push(key)
                if (!!skills[key]) {
                  result.push(key);
                }
              } // console.log("values",values);
              // console.log("skillsy",result.join(","));

            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            _axiosAPI__WEBPACK_IMPORTED_MODULE_1__["default"].post("/user/tasks/", {
              skill: result.join(",")
            }).then(function (response) {
              helpers.setSubmitting(false);
              console.log("response", response); // this.setState({
              //   results: response.data,
              // });

              _this3.props.updateData(Object(_ExamEditorSubComponents_TaskParser__WEBPACK_IMPORTED_MODULE_6__["default"])(response.data));
            })["catch"](function (error) {
              // console.log("login error", error.response);
              var errResponse = error.response;
              helpers.setSubmitting(false);
            });
          }, 200);
        }
      }, function (_ref) {
        var values = _ref.values,
            errors = _ref.errors,
            touched = _ref.touched,
            handleChange = _ref.handleChange,
            handleBlur = _ref.handleBlur,
            handleSubmit = _ref.handleSubmit,
            isSubmitting = _ref.isSubmitting;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBContainer"], {
          className: "md-accordion mt-5"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Form"], {
          onSubmit: handleSubmit
        }, sections.map(function (section) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "d-flex justify-content-between " + "p-2 mt-3 border-right border-top border-left " + (collapseId === "section-" + section.id ? "" : "border-bottom"),
            onClick: function onClick() {
              _this3.toggleCollapse("section-" + section.id);
            }
          }, section.Section, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBIcon"], {
            icon: collapseId === "section-" + section.id ? "angle-up" : "angle-down"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBCollapse"], {
            id: "section-" + section.id,
            isOpen: collapseId,
            className: "border-left border-right border-bottom p-2"
          }, section.skill.map(function (skill) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "custom-control custom-checkbox"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
              type: "checkbox",
              className: "custom-control-input",
              id: "skill-id-" + skill.id + "-" + section.id,
              value: true,
              name: "skills." + skill.id,
              onChange: handleChange,
              onBlur: handleBlur,
              disabled: isSubmitting
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
              className: "custom-control-label",
              htmlFor: "skill-id-" + skill.id + "-" + section.id
            }, skill.Skill));
          })));
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBBtn"], {
          onClick: handleSubmit,
          disabled: isSubmitting
        }, "Szukaj", isSubmitting && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "spinner-border spinner-border-sm",
          role: "status"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "sr-only"
        }, "Loading..."))))));
      }));
    }
  }]);

  return TaskSearch;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TaskSearch);

/***/ }),

/***/ "./node_modules/pdfkit/js/data sync Helvetica.*\\.afm$":
/*!*************************************************************************!*\
  !*** ./node_modules/pdfkit/js/data sync nonrecursive Helvetica.*\.afm$ ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Helvetica-Bold.afm": "./node_modules/pdfkit/js/data/Helvetica-Bold.afm",
	"./Helvetica-BoldOblique.afm": "./node_modules/pdfkit/js/data/Helvetica-BoldOblique.afm",
	"./Helvetica-Oblique.afm": "./node_modules/pdfkit/js/data/Helvetica-Oblique.afm",
	"./Helvetica.afm": "./node_modules/pdfkit/js/data/Helvetica.afm"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/pdfkit/js/data sync Helvetica.*\\.afm$";

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!***************************!*\
  !*** ./streams (ignored) ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** ./extend-node (ignored) ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=8.main.js.map