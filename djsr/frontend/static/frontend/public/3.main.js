(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./djsr/frontend/src/components/ExamEditor.js":
/*!****************************************************!*\
  !*** ./djsr/frontend/src/components/ExamEditor.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");
/* harmony import */ var _taskSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskSearch */ "./djsr/frontend/src/components/taskSearch.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _TaskEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TaskEditor */ "./djsr/frontend/src/components/TaskEditor.js");
/* harmony import */ var lodash_collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/collection */ "./node_modules/lodash/collection.js");
/* harmony import */ var lodash_collection__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_collection__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_latex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-latex */ "./node_modules/react-latex/build/latex.js");
/* harmony import */ var react_latex__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_latex__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_katex_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/katex.css */ "./djsr/frontend/src/components/styles/katex.css");
/* harmony import */ var _styles_katex_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_katex_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _registered_files__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./registered-files */ "./djsr/frontend/src/components/registered-files.js");
/* harmony import */ var _axiosAPI__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./axiosAPI */ "./djsr/frontend/src/components/axiosAPI.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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



 // import examToPdf from "./ExamPDF";



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
      _axiosAPI__WEBPACK_IMPORTED_MODULE_9__["default"].get("/user/onetest/".concat(id)).then(function (response) {
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

    _defineProperty(_assertThisInitialized(_this), "generatedPDFV3", function () {});

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
      _axiosAPI__WEBPACK_IMPORTED_MODULE_9__["default"].put("/user/maketest/", {
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
        state.exam.tasks.splice(index, index);
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
        var draggedItem = JSON.parse(JSON.stringify(_this.state.tasks[source.index]));
        draggedItem.currentDataSet = draggedItem.dataset[0];
        var currentDataSetAnswers = draggedItem.currentDataSet.answers[0];
        console.log("XD?", currentDataSetAnswers.allanswers.replace(/'/g, '"'));
        currentDataSetAnswers.allanswers = JSON.parse(currentDataSetAnswers.allanswers.replace(/'/g, '"'));
        currentDataSetAnswers.correctans = JSON.parse(currentDataSetAnswers.correctans.replace(/'/g, '"'));
        console.log(currentDataSetAnswers, "currentDataSetAnswers");
        var correctAnswersIndex = [Math.floor(Math.random() * (currentDataSetAnswers.correctans.length - 1))];
        console.log(correctAnswersIndex, "correctAnswersIndex", currentDataSetAnswers.length);
        var incorrectAnswersIndexes = currentDataSetAnswers.allanswers.map(function (item, index) {
          return index;
        });
        var answersSet = []; // [sampleSize(currentDataSetAnswers.allanswers,3).map];

        answersSet = answersSet.concat(Object(lodash_collection__WEBPACK_IMPORTED_MODULE_5__["sampleSize"])(correctAnswersIndex).map(function (item) {
          return {
            index: item,
            isCorrect: true
          };
        }));
        answersSet = answersSet.concat(Object(lodash_collection__WEBPACK_IMPORTED_MODULE_5__["sampleSize"])(incorrectAnswersIndexes, 3).map(function (item) {
          return {
            index: item,
            isCorrect: false
          };
        }));
        answersSet = Object(lodash_collection__WEBPACK_IMPORTED_MODULE_5__["shuffle"])(answersSet);
        draggedItem.currentDataSet.examAnswers = answersSet;
        draggedItem.maxPoints = 1;
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

    _this.state = {
      exam: null,
      //     {
      //   tasks: [],
      // }
      tasks: null,
      sideMenuCollapseId: "",
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
      var _this2 = this;

      var exam = this.state.exam;

      if (!exam) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__["MDBContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Ladowanie"));
      }

      var sideMenuCollapseId = this.state.sideMenuCollapseId;
      var searchedTasks = this.state.tasks;
      var examTasks = this.state.exam.tasks;
      var editorTask = this.state.editorTask;
      console.log("editorTask", editorTask);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__["DragDropContext"], {
        onDragEnd: this.dragEnd
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__["MDBRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__["MDBCol"], {
        size: "4",
        className: "border-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w-100 h2-responsive text-center"
      }, exam.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w-100 text-right"
      }, this.state.saved ? "Zapisano" : "Zapisywanie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__["MDBRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__["MDBCol"], {
        className: "d-flex justify-content-between " + "p-2 mt-3 border-right border-top border-left " + (sideMenuCollapseId === "taskSearch" ? "" : "border-bottom"),
        onClick: function onClick() {
          _this2.setSideMenuCollapse("taskSearch");
        }
      }, "Dodaj zadanie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__["MDBCol"], {
        size: "3",
        className: "d-flex justify-content-between " + "p-2 mt-3 border-right border-top border-left " + (sideMenuCollapseId === "taskEdit" ? "" : "border-bottom"),
        onClick: function onClick() {
          _this2.setSideMenuCollapse("taskEdit");
        }
      }, "Edycja zadania"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__["MDBCol"], {
        size: "3",
        className: "d-flex justify-content-between " + "p-2 mt-3 border-right border-top border-left border-bottom"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: function onClick() {
          _this2.generatedPDFV3(_this2.state.exam);
        }
      }, "Pobierz PDF"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__["MDBCollapse"], {
        id: "taskSearch",
        isOpen: sideMenuCollapseId,
        className: "w-100"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_taskSearch__WEBPACK_IMPORTED_MODULE_2__["default"], {
        updateData: this.setSearchedTasks
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__["MDBContainer"], {
        className: "mt-3"
      }, Array.isArray(searchedTasks) && searchedTasks.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__["Droppable"], {
        droppableId: "searchDroppable"
      }, function (provided, snapshot) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          ref: provided.innerRef,
          style: {
            backgroundColor: snapshot.isDraggingOver ? "red" : "white"
          },
          className: "border-top"
        }, searchedTasks.map(function (task, index) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__["Draggable"], {
            key: "task-" + task.id,
            draggableId: "" + task.id,
            index: index
          }, function (provided, snapshot) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
              ref: provided.innerRef
            }, provided.draggableProps, provided.dragHandleProps, {
              style: provided.draggableProps.style,
              className: "border-right border-left border-bottom p-2"
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_latex__WEBPACK_IMPORTED_MODULE_6___default.a, null, task.text));
          });
        }), provided.placeholder);
      }), Array.isArray(searchedTasks) && searchedTasks.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Brak zada\u0144 o podanych kryteriach"), !searchedTasks && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-truncate"
      }, "Wybierz umiejetnosci z listy. Aby doda\u0107 zadania do sprawdzianu przeci\u0105gnij je na sprawdzian"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__["MDBCollapse"], {
        id: "taskEdit",
        isOpen: sideMenuCollapseId,
        className: "w-100"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TaskEditor__WEBPACK_IMPORTED_MODULE_4__["default"], {
        task: editorTask,
        updateTask: this.updateTaskToEdit
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__["MDBCol"], {
        size: "8",
        className: "d-flex justify-content-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__["Droppable"], {
        droppableId: "examDroppable",
        style: {
          marginLeft: "auto",
          marginRight: "auto"
        }
      }, function (provided, snapshot) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            width: "21cm",
            height: "29.7cm",
            backgroundColor: snapshot.isDraggingOver ? "blue" : "white"
          },
          className: "border p-3",
          ref: provided.innerRef
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "mb-2"
        }, "Imie i nazwisko: ................................................................."), examTasks.map(function (task, index) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__["Draggable"], {
            key: "task-" + task.id + "-" + index,
            draggableId: "task-" + task.id + "-" + index,
            index: index
          }, function (provided, snapshot) {
            console.log("ELO123", task.currentDataSet);
            var answers = task.currentDataSet.examAnswers.map(function (item) {
              var answerSource = item.isCorrect ? task.currentDataSet.answers[0].correctans : task.currentDataSet.answers[0].allanswers;
              return answerSource[item.index];
            });
            var ansChar = ["A", "B", "C", "D"];
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
              ref: provided.innerRef
            }, provided.draggableProps, provided.dragHandleProps, {
              style: provided.draggableProps.style,
              className: "p-2",
              onClick: function onClick() {
                _this2.setTaskToEdit(index);
              },
              onContextMenu: function onContextMenu() {
                _this2.removeTask(index);
              }
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "text-right mb-0 pb-0"
            }, ".../" + task.maxPoints + " pkt."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "font-weight-bold"
            }, index + 1, ". "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_latex__WEBPACK_IMPORTED_MODULE_6___default.a, null, task.text)), task.currentDataSet.image.length >= 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__["MDBRow"], {
              center: true
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              src: "http://127.0.0.1:8000/api/user/image/" + task.currentDataSet.image[0],
              style: {
                maxHeight: "100px"
              }
            }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_1__["MDBRow"], {
              between: true,
              className: "pl-2 pr-2 ml-0 mr-2"
            }, answers.map(function (item, index) {
              return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
                className: "font-weight-bold"
              }, ansChar[index] + ". "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_latex__WEBPACK_IMPORTED_MODULE_6___default.a, null, item));
            })));
          });
        }), provided.placeholder);
      }))));
    }
  }]);

  return ExamEditor;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // ExamEditor.propTypes = {};


/* harmony default export */ __webpack_exports__["default"] = (ExamEditor);

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
      console.log("TE", task);
      if (!task) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Wybierz zadanie");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
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

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormikMDInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
          label: "Tre\u015B\u0107 zadania",
          errors: errors.text,
          name: "text",
          id: "text",
          touched: touched.text,
          onChange: handleChangeAndSubmit,
          onBlur: handleBlur,
          value: values.text
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "number",
          name: "maxPoints",
          value: values.maxPoints,
          onChange: handleChangeAndSubmit,
          onBlur: handleBlur,
          min: 1,
          max: 20
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "input-group"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "input-group-prepend"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "input-group-text",
          id: "inputGroupFileAddon01"
        }, "Obrazek do zadania")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "custom-file"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "file",
          className: "custom-file-input",
          id: "inputGroupFile01",
          "aria-describedby": "inputGroupFileAddon01",
          onChange: function onChange(e) {
            setFieldValue("imageToUpload", e.currentTarget.files[0]);
          },
          onBlur: handleBlur
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          className: "custom-file-label",
          htmlFor: "inputGroupFile01"
        }, "Wybierz"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBBtn"], {
          onClick: handleSubmit
        }, "Zapisz"));
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
	"./images/bee.png": "./djsr/frontend/src/components/assets/images/bee.png"
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
        className: "w-100"
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

              _this3.props.updateData(response.data);
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

/***/ })

}]);
//# sourceMappingURL=3.main.js.map