(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ResizeableSidePanel__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, exam.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, saved ? "Zapisano" : "Zapisywanie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SideMenuTabSelector__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ExamEditorSidePanel);

/***/ }),

/***/ "./djsr/frontend/src/components/ExamEditorSubComponents/ExamPage.js":
/*!**************************************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditorSubComponents/ExamPage.js ***!
  \**************************************************************************/
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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








 // const useStyles = makeStyles(theme => ({
//
// }));

var ExamPage = function ExamPage(_ref) {
  var exam = _ref.exam,
      setTaskToEdit = _ref.setTaskToEdit,
      removeTask = _ref.removeTask;
  var examTasks = exam.tasks;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    // className="d-flex justify-content-center"
    style: {
      display: "flex",
      justifyContent: "center",
      flexGrow: "3"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__["Droppable"], {
    droppableId: "examDroppable",
    style: {
      marginLeft: "auto",
      marginRight: "auto"
    }
  }, function (provided, snapshot) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        width: "21cm",
        height: "29.7cm" // backgroundColor: snapshot.isDraggingOver ? "blue" : "white",

      },
      className: "border p-3",
      ref: provided.innerRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mb-2"
    }, "Imie i nazwisko: ................................................................."), examTasks.map(function (task, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__["Draggable"], {
        key: "task-" + task.id + "-" + index,
        draggableId: "task-" + task.id + "-" + index,
        index: index
      }, function (provided, snapshot) {
        console.log("ELO123", task.currentDataSet);
        var answers = task.currentAnswers.answersIndexes.map(function (item) {
          var answerSource = item.isCorrect ? task.currentAnswers.correctans : task.currentAnswers.wronganswers;
          return answerSource[item.index];
        });
        var ansChar = ["A", "B", "C", "D"];
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
          ref: provided.innerRef
        }, provided.draggableProps, provided.dragHandleProps, {
          style: provided.draggableProps.style,
          onClick: function onClick() {
            setTaskToEdit(index);
          } // onContextMenu={() => {
          //   this.removeTask(index);
          // }}
          // onContextMenuCapture={() => {
          //   removeTask(index);
          // }}

        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
          mb: 2
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
          container: true,
          alignItems: "center",
          justify: "space-between"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
          item: true
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          onClick: function onClick() {
            removeTask(index);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
          color: "error"
        }, "X"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
          item: true
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "text-right mb-0 pb-0"
        }, ".../" + task.maxPoints + " pkt."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "font-weight-bold"
        }, index + 1, ". "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_latex__WEBPACK_IMPORTED_MODULE_2___default.a, null, task.text)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
          container: true,
          alignItems: "center",
          justify: "space-between",
          className: "pl-2 pr-2 ml-0 mr-2"
        }, answers.map(function (item, index) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
            item: true
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
            display: "inline",
            style: {
              fontWeight: "bold"
            },
            className: "font-weight-bold"
          }, ansChar[index] + ". "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_latex__WEBPACK_IMPORTED_MODULE_2___default.a, null, item)));
        }))));
      });
    }), provided.placeholder);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ExamPage);

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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.sidePanel
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var TaskEditor = function TaskEditor(_ref) {
  var selectedTaskToEdit = _ref.selectedTaskToEdit,
      updateTask = _ref.updateTask;
  var task = selectedTaskToEdit;
  console.log("TE", task); //todo walidacja formularza od edycji zadania

  if (!task) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Wybierz zadanie");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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

          task.currentDataSet.image = [response.data.id];
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
        onChange: handleChangeAndSubmit
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
    }, "Zapisz obrazek"));
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

/***/ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskParser.js":
/*!****************************************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditorSubComponents/TaskParser.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var taskParser = function taskParser(task) {
  // console.log("taskparser",task)
  var newTask = JSON.parse(JSON.stringify(task)); // console.log("taskparser parsed", newTask)
  // let draggedItem

  newTask.answers.correctans = JSON.parse(newTask.answers.correctans.replace(/'/g, '"'));
  newTask.answers.wronganswers = JSON.parse(newTask.answers.wronganswers.replace(/'/g, '"')); // newTask.dataset = newTask.dataset.map((dataSet) => {
  //   dataSet.answers = dataSet.answers.map((answer) => {
  //     answer.allanswers = JSON.parse(answer.allanswers.replace(/'/g, '"'));
  //     answer.correctans = JSON.parse(answer.correctans.replace(/'/g, '"'));
  //     return answer
  //   });
  //   dataSet.answers = dataSet.answers[0];
  //   return dataSet
  // });
  // console.log("oldtask", task,"new", newTask)
  // console.log("taskparser nn",newTask)

  return newTask;
};

var tasksParser = function tasksParser(tasks) {
  return tasks.map(taskParser);
};

/* harmony default export */ __webpack_exports__["default"] = (tasksParser);

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
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







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
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
          ref: provided.innerRef
        }, provided.draggableProps, provided.dragHandleProps, {
          style: provided.draggableProps.style,
          className: "border-right border-left border-bottom p-2"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_latex__WEBPACK_IMPORTED_MODULE_2___default.a, null, task.text));
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
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

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

/***/ "./djsr/frontend/src/components/MaterialFormikField.js":
/*!*************************************************************!*\
  !*** ./djsr/frontend/src/components/MaterialFormikField.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/People */ "./node_modules/@material-ui/icons/People.js");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_components_CustomInput_CustomInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material_ui_components/CustomInput/CustomInput */ "./djsr/frontend/src/components/material_ui_components/CustomInput/CustomInput.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var MaterialFormikField = function MaterialFormikField(_ref) {
  var inputProps = _ref.inputProps,
      type = _ref.type,
      labelText = _ref.labelText,
      _ref$field = _ref.field,
      name = _ref$field.name,
      fieldProps = _objectWithoutProperties(_ref$field, ["name"]),
      _ref$form = _ref.form,
      errors = _ref$form.errors,
      formProps = _objectWithoutProperties(_ref$form, ["errors"]),
      formControlProps = _ref.formControlProps,
      props = _objectWithoutProperties(_ref, ["inputProps", "type", "labelText", "field", "form", "formControlProps"]);

  var error = errors[name];
  var touched = formProps.touched[name];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomInput_CustomInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    labelText: labelText,
    id: name,
    error: touched && !!error,
    success: touched && !error,
    formControlProps: formControlProps // helperProps={{
    //   children: !!errors.name && touched.name ? errors.name : " ",
    //   error: true,
    // }}
    ,
    helperProps: {
      children: !!error && touched ? error : " ",
      error: !!error && touched
    },
    inputProps: _objectSpread({
      type: type,
      name: name
    }, fieldProps, {}, inputProps)
  });
};

MaterialFormikField.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (MaterialFormikField);

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
/* harmony import */ var react_resize_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-resize-panel */ "./node_modules/react-resize-panel/dist/index.esm.js");
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");
/* harmony import */ var _MaterialUiTaskSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MaterialUiTaskSearch */ "./djsr/frontend/src/components/MaterialUiTaskSearch.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _TaskEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TaskEditor */ "./djsr/frontend/src/components/TaskEditor.js");
/* harmony import */ var lodash_collection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/collection */ "./node_modules/lodash/collection.js");
/* harmony import */ var lodash_collection__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_collection__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_latex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-latex */ "./node_modules/react-latex/build/latex.js");
/* harmony import */ var react_latex__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_latex__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_katex_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/katex.css */ "./djsr/frontend/src/components/styles/katex.css");
/* harmony import */ var _styles_katex_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_katex_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _registered_files__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./registered-files */ "./djsr/frontend/src/components/registered-files.js");
/* harmony import */ var _ExamPDF__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ExamPDF */ "./djsr/frontend/src/components/ExamPDF.js");
/* harmony import */ var _axiosAPI__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./axiosAPI */ "./djsr/frontend/src/components/axiosAPI.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _ExamEditorSubComponents_ExamEditorSidePanel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ExamEditorSubComponents/ExamEditorSidePanel */ "./djsr/frontend/src/components/ExamEditorSubComponents/ExamEditorSidePanel.js");
/* harmony import */ var _ExamEditorSubComponents_ExamPage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ExamEditorSubComponents/ExamPage */ "./djsr/frontend/src/components/ExamEditorSubComponents/ExamPage.js");
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


 // import PropTypes from "prop-types";




 // import {
//   PDFDownloadLink,
//   Document,
//   Page,
//   Text,
//   StyleSheet,
//   View,
//   Font,
//   Image,
//   Svg,
//   Path,
//   G,
// } from "@react-pdf/renderer";

 // import Roboto from "./webfonts/Roboto-Regular.ttf";
// import RobotoBold from "./webfonts/Roboto-Bold.ttf";














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
      _axiosAPI__WEBPACK_IMPORTED_MODULE_11__["default"].get("/user/onetest/".concat(id)).then(function (response) {
        console.log(response);

        _this.setState(function (state) {
          state.exam = response.data[0];

          if (state.exam.tasks.length > 0) {
            state.exam.tasks = JSON.parse(state.exam.tasks);
          } else {
            state.exam.tasks = [];
          }

          return state;
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "generatedPDFV3", _ExamPDF__WEBPACK_IMPORTED_MODULE_10__["default"]);

    _defineProperty(_assertThisInitialized(_this), "setTaskToEdit", function (index) {
      _this.setState(function (state) {
        state.editorTask = state.exam.tasks[index];
        state.sideMenuCollapseId = "taskEdit";
        return state;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateTaskToEdit", function (task) {
      _this.setState(function (state) {
        Object.assign(state.editorTask, task);
        state.timeout = _this.resetTimeout(_this.state.timeout, setTimeout(_this.saveExam, 3000));
        state.saved = false;
        return state;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "saveExam", function () {
      _axiosAPI__WEBPACK_IMPORTED_MODULE_11__["default"].put("/user/maketest/", {
        id: _this.state.exam.id,
        tasks: JSON.stringify(_this.state.exam.tasks)
      }).then(function (response) {
        _this.setState({
          saved: true
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "removeTask", function (index) {
      _this.setState(function (state) {
        if (index === 0) {
          state.exam.tasks.shift();
        } else {
          state.exam.tasks.splice(index, index);
        }

        state.timeout = _this.resetTimeout(_this.state.timeout, setTimeout(_this.saveExam, 3000));
        state.saved = false;
        return state;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "dragEnd", function (result) {
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

      if (source.droppableId === "examDroppable" && destination.droppableId === "examDroppable") {
        _this.setState(function (state) {
          var tasks = state.exam.tasks;
          var _ref = [tasks[destination.index], tasks[source.index]];
          tasks[source.index] = _ref[0];
          tasks[destination.index] = _ref[1];
          state.saved = false;
          state.timeout = _this.resetTimeout(_this.state.timeout, setTimeout(_this.saveExam, 3000));
          return state;
        });
      } else {
        var draggedItem = JSON.parse(JSON.stringify(_this.state.tasks[source.index])); // draggedItem.currentDataSet = draggedItem.dataset[0];

        draggedItem.currentAnswers = JSON.parse(JSON.stringify(draggedItem.answers));
        var currentDataSetAnswers = draggedItem.currentAnswers;
        console.log("dragged item", draggedItem, currentDataSetAnswers);
        var correctAnswersIndex = [Math.floor(Math.random() * (currentDataSetAnswers.correctans.length - 1))];
        console.log(correctAnswersIndex, "correctAnswersIndex", currentDataSetAnswers.length);
        var incorrectAnswersIndexes = currentDataSetAnswers.wronganswers.map(function (item, index) {
          return index;
        });
        var answersSet = []; // [sampleSize(currentDataSetAnswers.allanswers,3).map];

        answersSet = answersSet.concat(Object(lodash_collection__WEBPACK_IMPORTED_MODULE_6__["sampleSize"])(correctAnswersIndex).map(function (item) {
          return {
            index: item,
            isCorrect: true
          };
        }));
        answersSet = answersSet.concat(Object(lodash_collection__WEBPACK_IMPORTED_MODULE_6__["sampleSize"])(incorrectAnswersIndexes, 3).map(function (item) {
          return {
            index: item,
            isCorrect: false
          };
        }));
        answersSet = Object(lodash_collection__WEBPACK_IMPORTED_MODULE_6__["shuffle"])(answersSet);
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

    _defineProperty(_assertThisInitialized(_this), "setSearchedTasks", function (tasks) {
      console.log("Triggered Task");

      _this.setState(function (state) {
        state.tasks = tasks;
        return state;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setSideMenuCollapse", function (collapseId) {
      _this.setState({
        sideMenuCollapseId: collapseId
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSideMenuTabChange", function (event, newValue) {
      if (newValue === "generatePDF") _this.generatedPDFV3(_this.state.exam);else _this.setSideMenuCollapse(newValue);
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
      saved: true
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
      var exam = this.state.exam;

      if (!exam) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Ladowanie"));
      }

      var sideMenuCollapseId = this.state.sideMenuCollapseId;
      var searchedTasks = this.state.tasks;
      var examTasks = this.state.exam.tasks;
      var editorTask = this.state.editorTask;
      var isExamSaved = this.state.saved;
      console.log("editorTask", editorTask);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__["DragDropContext"], {
        onDragEnd: this.dragEnd
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexFlow: "row nowrap"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExamEditorSubComponents_ExamEditorSidePanel__WEBPACK_IMPORTED_MODULE_19__["default"], {
        exam: exam,
        currentTabId: sideMenuCollapseId,
        handleTabChange: this.handleSideMenuTabChange,
        setTaskSearchResult: this.setSearchedTasks,
        taskSearchResult: searchedTasks,
        updateTask: this.updateTaskToEdit,
        selectedTaskToEdit: this.state.editorTask
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExamEditorSubComponents_ExamPage__WEBPACK_IMPORTED_MODULE_20__["default"], {
        exam: exam,
        setTaskToEdit: this.setTaskToEdit,
        removeTask: this.removeTask
      })));
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
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");
/* harmony import */ var _FormikMDInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormikMDInput */ "./djsr/frontend/src/components/FormikMDInput.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "./node_modules/@material-ui/icons/MoveToInbox.js");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Drafts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Drafts */ "./node_modules/@material-ui/icons/Drafts.js");
/* harmony import */ var _material_ui_icons_Drafts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Drafts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Send */ "./node_modules/@material-ui/icons/Send.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "./node_modules/@material-ui/icons/ExpandLess.js");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/StarBorder */ "./node_modules/@material-ui/icons/StarBorder.js");
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/esm/ListItemSecondaryAction/index.js");
/* harmony import */ var _material_ui_components_CustomCheckBox_CustomCheckbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./material_ui_components/CustomCheckBox/CustomCheckbox */ "./djsr/frontend/src/components/material_ui_components/CustomCheckBox/CustomCheckbox.js");
/* harmony import */ var _ExamEditorSubComponents_TaskParser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ExamEditorSubComponents/TaskParser */ "./djsr/frontend/src/components/ExamEditorSubComponents/TaskParser.js");
/* harmony import */ var _material_ui_components_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./material_ui_components/CustomButtons/Button */ "./djsr/frontend/src/components/material_ui_components/CustomButtons/Button.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
      results: null
    };
    return _this;
  }

  _createClass(MaterialUiTaskSearch, [{
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
      console.log(this.props, "TaskSearch Props");
      console.log("sections", sections);
      if (!sections) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "loading");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_23__["default"], {
        component: "div",
        m: 1 // display="flex" justifyContent="center"

      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_15__["Formik"], {
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
              // console.log("parsed Twat",tasksParser(response.data));

              _this3.props.updateData(Object(_ExamEditorSubComponents_TaskParser__WEBPACK_IMPORTED_MODULE_20__["default"])(response.data));
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
          setFieldValue(valueName, !Object(formik__WEBPACK_IMPORTED_MODULE_15__["getIn"])(values, valueName));
        };

        var sectionBooleanValue = function sectionBooleanValue(parsedSection) {
          console.log("sectionBooleanValue", parsedSection);
          var sectionSkillsValue = parsedSection.skill.map(function (skill) {
            return !!Object(formik__WEBPACK_IMPORTED_MODULE_15__["getIn"])(values, "skills." + skill.id);
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

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_15__["Form"], {
          onSubmit: handleSubmit
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__["default"], null, sections.map(function (section) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"] // onClick={() => {
          //   this.toggleCollapse("section-" + section.id);
          // }}
          , null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomCheckBox_CustomCheckbox__WEBPACK_IMPORTED_MODULE_19__["default"], {
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
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomCheckBox_CustomCheckbox__WEBPACK_IMPORTED_MODULE_19__["default"], {
              edge: "start",
              checked: !!Object(formik__WEBPACK_IMPORTED_MODULE_15__["getIn"])(values, "skills." + skill.id),
              tabIndex: -1,
              disableRipple: true // inputProps={{
              //   "aria-labelledby": labelId,
              // }}

            })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"] // id={labelId}
            , {
              primary: skill.Skill
            }));
          }))));
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_23__["default"], {
          component: "div",
          m: 1,
          display: "flex",
          justifyContent: "center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_components_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_21__["default"], {
          color: "primary",
          size: "sm",
          onClick: handleSubmit,
          disabled: isSubmitting
        }, "Szukaj"))));
      }));
    }
  }]);

  return MaterialUiTaskSearch;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MaterialUiTaskSearch);

/***/ }),

/***/ "./djsr/frontend/src/components/TaskEditor.js":
/*!****************************************************!*\
  !*** ./djsr/frontend/src/components/TaskEditor.js ***!
  \****************************************************/
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
/* harmony import */ var _FormikMDInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormikMDInput */ "./djsr/frontend/src/components/FormikMDInput.js");
/* harmony import */ var _axiosAPI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./axiosAPI */ "./djsr/frontend/src/components/axiosAPI.js");
/* harmony import */ var _MaterialFormikField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MaterialFormikField */ "./djsr/frontend/src/components/MaterialFormikField.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/People */ "./node_modules/@material-ui/icons/People.js");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
















var TaskEditor = /*#__PURE__*/function (_Component) {
  _inherits(TaskEditor, _Component);

  var _super = _createSuper(TaskEditor);

  function TaskEditor(props) {
    var _this;

    _classCallCheck(this, TaskEditor);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "setTask", function (task) {});

    _this.state = {
      task: null
    };
    return _this;
  }

  _createClass(TaskEditor, [{
    key: "render",
    // elo = () => {
    //   let task = JSON.parse(JSON.stringify(this.props.task));
    //   task.text = task.text + "1";
    //   this.props.updateTask(task);
    // };
    value: function render() {
      var _this2 = this;

      var task = this.props.task;
      console.log("TE", task); //todo walidacja formularza od edycji zadania

      if (!task) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Wybierz zadanie");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          minHeight: "100%"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
        enableReinitialize: true,
        initialValues: this.props.task,
        onSubmit: function onSubmit(values, helpers) {
          if (!!values.imageToUpload) {
            var formData = new FormData();
            formData.append("file", values.imageToUpload);
            _axiosAPI__WEBPACK_IMPORTED_MODULE_5__["default"].post("/user/addimage/", formData, {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            }).then(function (response) {
              var task = _objectSpread({}, values);

              task.currentDataSet.image = [response.data.id];

              _this2.props.updateTask(_objectSpread({}, task));
            });
          } else _this2.props.updateTask(_objectSpread({}, values));
        }
      }, function (_ref) {
        var values = _ref.values,
            errors = _ref.errors,
            touched = _ref.touched,
            handleChange = _ref.handleChange,
            handleBlur = _ref.handleBlur,
            handleSubmit = _ref.handleSubmit,
            isSubmitting = _ref.isSubmitting,
            submitForm = _ref.submitForm,
            setFieldValue = _ref.setFieldValue;

        var handleChangeAndSubmit = function handleChangeAndSubmit(e) {
          handleChange(e);
          submitForm();
        };

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
          component: _MaterialFormikField__WEBPACK_IMPORTED_MODULE_6__["default"],
          name: "text",
          formControlProps: {
            fullWidth: true
          },
          inputProps: {
            onChange: handleChangeAndSubmit
          },
          labelText: "Tre\u015B\u0107 zadania"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
          component: _MaterialFormikField__WEBPACK_IMPORTED_MODULE_6__["default"],
          name: "maxPoints",
          type: "number",
          formControlProps: {
            fullWidth: true
          },
          inputProps: {
            onChange: handleChangeAndSubmit
          },
          labelText: "Maksymalna ilo\u015B\u0107 punkt\xF3w"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
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
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
          onClick: handleSubmit
        }, "Zapisz obrazek"));
      }));
    }
  }]);

  return TaskEditor;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

TaskEditor.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (TaskEditor);

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
	"./jss/material-kit-react/components/paginationStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/paginationStyle.js",
	"./jss/material-kit-react/components/paginationStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/paginationStyle.js",
	"./jss/material-kit-react/components/parallaxStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/parallaxStyle.js",
	"./jss/material-kit-react/components/parallaxStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/parallaxStyle.js",
	"./jss/material-kit-react/components/snackbarContentStyle": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/snackbarContentStyle.js",
	"./jss/material-kit-react/components/snackbarContentStyle.js": "./djsr/frontend/src/components/assets/jss/material-kit-react/components/snackbarContentStyle.js",
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
  root: _objectSpread({}, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["defaultFont"], {
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
  container: _objectSpread({}, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["container"], {
    position: "relative"
  })
};
/* harmony default export */ __webpack_exports__["default"] = (snackbarContentStyle);

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
  defaultFontStyle: _objectSpread({}, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["defaultFont"], {
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

/***/ "./djsr/frontend/src/components/assets/jss/material-kit-react/customCheckboxRadioSwitch.js":
/*!*************************************************************************************************!*\
  !*** ./djsr/frontend/src/components/assets/jss/material-kit-react/customCheckboxRadioSwitch.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../jss/material-kit-react.js */ "./djsr/frontend/src/components/assets/jss/material-kit-react.js");

var customCheckboxRadioSwitch = {
  checkRoot: {
    padding: "12px",
    "&:hover": {
      backgroundColor: "unset"
    }
  },
  radioRoot: {
    padding: "12px",
    "&:hover": {
      backgroundColor: "unset"
    }
  },
  labelRoot: {
    marginLeft: "-14px"
  },
  checkboxAndRadio: {
    position: "relative",
    display: "block",
    marginTop: "10px",
    marginBottom: "10px"
  },
  checkboxAndRadioHorizontal: {
    position: "relative",
    display: "block",
    "&:first-child": {
      marginTop: "10px"
    },
    "&:not(:first-child)": {
      marginTop: "-14px"
    },
    marginTop: "0",
    marginBottom: "0"
  },
  checked: {
    color: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"] + "!important"
  },
  checkedIcon: {
    width: "20px",
    height: "20px",
    border: "1px solid rgba(0, 0, 0, .54)",
    borderRadius: "3px"
  },
  uncheckedIcon: {
    width: "0px",
    height: "0px",
    padding: "9px",
    border: "1px solid rgba(0, 0, 0, .54)",
    borderRadius: "3px"
  },
  disabledCheckboxAndRadio: {
    opacity: "0.45"
  },
  label: {
    cursor: "pointer",
    paddingLeft: "0",
    color: "rgba(0, 0, 0, 0.26)",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    display: "inline-flex",
    transition: "0.3s ease all",
    letterSpacing: "unset"
  },
  labelHorizontal: {
    color: "rgba(0, 0, 0, 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingTop: "39px",
    marginRight: "0",
    "@media (min-width: 992px)": {
      "float": "right"
    }
  },
  labelHorizontalRadioCheckbox: {
    paddingTop: "22px"
  },
  labelLeftHorizontal: {
    color: "rgba(0, 0, 0, 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingTop: "22px",
    marginRight: "0"
  },
  labelError: {
    color: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"]
  },
  radio: {
    color: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"] + "!important"
  },
  radioChecked: {
    width: "16px",
    height: "16px",
    border: "1px solid " + _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"],
    borderRadius: "50%"
  },
  radioUnchecked: {
    width: "0px",
    height: "0px",
    padding: "7px",
    border: "1px solid rgba(0, 0, 0, .54)",
    borderRadius: "50%"
  },
  inlineChecks: {
    marginTop: "8px"
  },
  iconCheckbox: {
    height: "116px",
    width: "116px",
    color: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"],
    "& > span:first-child": {
      borderWidth: "4px",
      borderStyle: "solid",
      borderColor: "#CCCCCC",
      textAlign: "center",
      verticalAlign: "middle",
      borderRadius: "50%",
      color: "inherit",
      margin: "0 auto 20px",
      transition: "all 0.2s"
    },
    "&:hover": {
      color: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"],
      "& > span:first-child": {
        borderColor: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"]
      }
    }
  },
  iconCheckboxChecked: {
    color: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"],
    "& > span:first-child": {
      borderColor: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"]
    }
  },
  iconCheckboxIcon: {
    fontSize: "40px",
    lineHeight: "111px"
  },
  switchBase: {
    color: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"] + "!important"
  },
  switchIcon: {
    boxShadow: "0 1px 3px 1px rgba(0, 0, 0, 0.4)",
    color: "#FFFFFF !important",
    border: "1px solid rgba(0, 0, 0, .54)"
  },
  switchBar: {
    width: "30px",
    height: "15px",
    backgroundColor: "rgb(80, 80, 80)",
    borderRadius: "15px",
    opacity: "0.7!important"
  },
  switchChecked: {
    "& + $switchBar": {
      backgroundColor: "rgba(156, 39, 176, 1) !important"
    },
    "& $switchIcon": {
      borderColor: "#9c27b0"
    }
  },
  switchRoot: {
    height: "48px"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (customCheckboxRadioSwitch);

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
  title: _objectSpread({}, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["title"], {
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
  container: _objectSpread({}, _jss_material_kit_react__WEBPACK_IMPORTED_MODULE_0__["container"], {
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




var exampleStyle = _objectSpread({
  section: {
    padding: "70px 0"
  },
  container: _objectSpread({}, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["containerFluid"], {
    textAlign: "center !important"
  })
}, _jss_material_kit_react_imagesStyles_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
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






var javascriptStyles = _objectSpread({
  section: {
    padding: "70px 0 0"
  },
  container: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["container"],
  title: _objectSpread({}, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["title"], {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  icon: {
    width: "17px",
    height: "17px",
    marginRight: "4px"
  }
}, _jss_material_kit_react_modalStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
}, _jss_material_kit_react_tooltipsStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"], {}, _jss_material_kit_react_popoverStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"]);

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
  return _objectSpread({
    section: {
      padding: "70px 0",
      paddingTop: "0"
    },
    container: _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["container"],
    title: _objectSpread({}, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["title"], {
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
  }, Object(_jss_material_kit_react_components_headerLinksStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(theme), {
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
  title: _objectSpread({}, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["title"], {
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
  title: _objectSpread({}, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["title"], {
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
  title: _objectSpread({}, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["title"], {
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




var teamStyle = _objectSpread({
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: _objectSpread({}, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["title"], {
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  })
}, _jss_material_kit_react_imagesStyles_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
  title: _objectSpread({}, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["title"], {
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




var profilePageStyle = _objectSpread({
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
}, _jss_material_kit_react_imagesStyles_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
  title: _objectSpread({}, _jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["title"], {
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

/***/ "./djsr/frontend/src/components/material_ui_components/CustomCheckBox/CustomCheckbox.js":
/*!**********************************************************************************************!*\
  !*** ./djsr/frontend/src/components/material_ui_components/CustomCheckBox/CustomCheckbox.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_jss_material_kit_react_customCheckboxRadioSwitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/jss/material-kit-react/customCheckboxRadioSwitch */ "./djsr/frontend/src/components/assets/jss/material-kit-react/customCheckboxRadioSwitch.js");
/* harmony import */ var _assets_jss_material_kit_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/jss/material-kit-react */ "./djsr/frontend/src/components/assets/jss/material-kit-react.js");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var CustomCheckbox = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3___default()({
  root: {
    color: _assets_jss_material_kit_react__WEBPACK_IMPORTED_MODULE_2__["primaryColor"],
    "&$checked": {
      color: _assets_jss_material_kit_react__WEBPACK_IMPORTED_MODULE_2__["primaryColor"]
    }
  },
  checked: {}
})(function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
    color: "default"
  }, props));
});
/* harmony default export */ __webpack_exports__["default"] = (CustomCheckbox);

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

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
//# sourceMappingURL=6.main.js.map