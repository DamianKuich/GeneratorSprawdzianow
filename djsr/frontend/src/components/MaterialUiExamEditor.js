import React, { Component } from "react";
import ResizePanel from "react-resize-panel";
// import PropTypes from "prop-types";
import { MDBCol, MDBCollapse, MDBContainer, MDBRow } from "mdbreact";
import TaskSearch from "./MaterialUiTaskSearch";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TaskEditor from "./TaskEditor";
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
import { sampleSize, shuffle } from "lodash/collection";
// import Roboto from "./webfonts/Roboto-Regular.ttf";
// import RobotoBold from "./webfonts/Roboto-Bold.ttf";
import Latex from "react-latex";
import "./styles/katex.css";
import "./registered-files";
import examToPdf from "./ExamPDF";
import axiosInstance from "./axiosAPI";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Collapse from "@material-ui/core/Collapse";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/styles";
import ExamEditorSidePanel from "./ExamEditorSidePanel";
//todo po skasowaniu tresci zadania "zapomina" zdjecie
class ExamEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exam: null,
      //     {
      //   tasks: [],
      // }
      tasks: null,
      sideMenuCollapseId: "taskSearch",
      editorTask: null,
      timeout: null,
      saved: true,
    };
  }

  resetTimeout = (id, newID) => {
    clearTimeout(id);
    return newID;
  };
  getExam = () => {
    const id = this.props.match.params.id;
    axiosInstance.get(`/user/onetest/${id}`).then((response) => {
      console.log(response);
      this.setState((state) => {
        state.exam = response.data[0];
        if (state.exam.tasks.length > 0) {
          state.exam.tasks = JSON.parse(state.exam.tasks);
        } else {
          state.exam.tasks = [];
        }
        return state;
      });
    });
  };
  componentDidMount() {
    this.getExam();
  }

  generatedPDFV3 = examToPdf;

  setTaskToEdit = (index) => {
    this.setState((state) => {
      state.editorTask = state.exam.tasks[index];
      state.sideMenuCollapseId = "taskEdit";
      return state;
    });
  };

  updateTaskToEdit = (task) => {
    this.setState((state) => {
      Object.assign(state.editorTask, task);
      state.timeout = this.resetTimeout(
        this.state.timeout,
        setTimeout(this.saveExam, 3000)
      );
      state.saved = false;
      return state;
    });
  };

  saveExam = () => {
    axiosInstance
      .put("/user/maketest/", {
        id: this.state.exam.id,
        tasks: JSON.stringify(this.state.exam.tasks),
      })
      .then((response) => {
        this.setState({ saved: true });
      });
  };

  removeTask = (index) => {
    this.setState((state) => {
      if (index === 0) {
        state.exam.tasks.shift();
      } else {
        state.exam.tasks.splice(index, index);
      }
      state.timeout = this.resetTimeout(
        this.state.timeout,
        setTimeout(this.saveExam, 3000)
      );
      state.saved = false;
      return state;
    });
  };

  dragEnd = (result) => {
    const { source, destination, draggableId } = result;
    console.log(source, destination, draggableId);
    if (source.droppableId === "examDroppable" && !destination.droppableId) {
      this.setState((state) => {
        state.exam.tasks = state.exam.tasks.splice(source.index, source.index);
        return state;
      });
    }
    console.log("dragEnd", result);
    if (!destination || destination.droppableId === "searchDroppable") {
      return;
    }
    if (
      source.droppableId === "examDroppable" &&
      destination.droppableId === "examDroppable"
    ) {
      this.setState((state) => {
        let tasks = state.exam.tasks;
        [tasks[source.index], tasks[destination.index]] = [
          tasks[destination.index],
          tasks[source.index],
        ];
        state.saved = false;
        state.timeout = this.resetTimeout(
          this.state.timeout,
          setTimeout(this.saveExam, 3000)
        );
        return state;
      });
    } else {
      let draggedItem = JSON.parse(
        JSON.stringify(this.state.tasks[source.index])
      );
      draggedItem.currentDataSet = draggedItem.dataset[0];
      let currentDataSetAnswers = draggedItem.currentDataSet.answers[0];
      console.log("XD?", currentDataSetAnswers.allanswers.replace(/'/g, '"'));
      currentDataSetAnswers.allanswers = JSON.parse(
        currentDataSetAnswers.allanswers.replace(/'/g, '"')
      );
      currentDataSetAnswers.correctans = JSON.parse(
        currentDataSetAnswers.correctans.replace(/'/g, '"')
      );

      console.log(currentDataSetAnswers, "currentDataSetAnswers");

      let correctAnswersIndex = [
        Math.floor(
          Math.random() * (currentDataSetAnswers.correctans.length - 1)
        ),
      ];
      console.log(
        correctAnswersIndex,
        "correctAnswersIndex",
        currentDataSetAnswers.length
      );
      let incorrectAnswersIndexes = currentDataSetAnswers.allanswers.map(
        (item, index) => {
          return index;
        }
      );
      let answersSet = [];

      // [sampleSize(currentDataSetAnswers.allanswers,3).map];
      answersSet = answersSet.concat(
        sampleSize(correctAnswersIndex).map((item) => {
          return { index: item, isCorrect: true };
        })
      );
      answersSet = answersSet.concat(
        sampleSize(incorrectAnswersIndexes, 3).map((item) => {
          return { index: item, isCorrect: false };
        })
      );
      answersSet = shuffle(answersSet);

      draggedItem.currentDataSet.examAnswers = answersSet;
      draggedItem.maxPoints = 1;
      console.log("draggedItem", draggedItem, this.state.tasks);
      this.setState((state) => {
        state.exam.tasks.splice(destination.index, 0, draggedItem);
        state.saved = false;
        state.timeout = this.resetTimeout(
          this.state.timeout,
          setTimeout(this.saveExam, 3000)
        );
        return state;
      });
    }
  };
  setSearchedTasks = (tasks) => {
    this.setState((state) => {
      state.tasks = tasks;
      return state;
    });
  };

  setSideMenuCollapse = (collapseId) => {
    this.setState({ sideMenuCollapseId: collapseId });
  };

  handleSideMenuTabChange = (event, newValue) => {
    if (newValue === "generatePDF") this.generatedPDFV3(this.state.exam);
    else this.setSideMenuCollapse(newValue);
  };
  render() {
    let exam = this.state.exam;
    if (!exam) {
      return (
        <MDBContainer>
          <div>Ladowanie</div>
        </MDBContainer>
      );
    }
    let sideMenuCollapseId = this.state.sideMenuCollapseId;
    let searchedTasks = this.state.tasks;
    let examTasks = this.state.exam.tasks;
    let editorTask = this.state.editorTask;
    console.log("editorTask", editorTask);
    return (
      <DragDropContext onDragEnd={this.dragEnd}>
        <div style={{ width: "100%", minHeight: "100vh", display: "flex", flexFlow:"row nowrap"}}>
          <ExamEditorSidePanel>
            <div>{exam.name}</div>
            <div>{this.state.saved ? "Zapisano" : "Zapisywanie"}</div>
            <AppBar position="static" color="default">
              <Tabs
                value={sideMenuCollapseId}
                indicatorColor={"primary"}
                textColor={"primary"}
                onChange={this.handleSideMenuTabChange}
                variant={"fullWidth"}
              >
                <Tab
                  label={"Dodaj zadanie"}
                  value={"taskSearch"}
                  disabled={false}
                />
                <Tab
                  label={"Edycja zadania"}
                  value={"taskEdit"}
                  disabled={false}
                />
                <Tab
                  label={"Pobierz PDF"}
                  value={"generatePDF"}
                  disabled={false}
                />
              </Tabs>
            </AppBar>
            <Collapse
              in={"taskSearch" === sideMenuCollapseId}
              // isOpen={sideMenuCollapseId}
              style={{ width: "100%" }}
            >
              <TaskSearch updateData={this.setSearchedTasks} />
              <MDBContainer className="mt-3">
                {/*{Array.isArray(searchedTasks) &&*/}
                {/*  searchedTasks.length > 0 &&*/}
                {/*  searchedTasks.map((task) => <div>{task.text}</div>)}*/}
                {Array.isArray(searchedTasks) && searchedTasks.length > 0 && (
                  <Droppable droppableId="searchDroppable">
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        style={{
                          backgroundColor: snapshot.isDraggingOver
                            ? "red"
                            : "white",
                        }}
                        className="border-top"
                      >
                        {searchedTasks.map((task, index) => (
                          <Draggable
                            key={"task-" + task.id}
                            draggableId={"" + task.id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={provided.draggableProps.style}
                                className="border-right border-left border-bottom p-2"
                              >
                                <Latex>{task.text}</Latex>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                )}
                {Array.isArray(searchedTasks) && searchedTasks.length === 0 && (
                  <div>Brak zadań o podanych kryteriach</div>
                )}
                {!searchedTasks && (
                  <div className="text-truncate">
                    Wybierz umiejetnosci z listy. Aby dodać zadania do
                    sprawdzianu przeciągnij je na sprawdzian
                  </div>
                )}
              </MDBContainer>
            </Collapse>
            <Collapse
              in={"taskEdit" === sideMenuCollapseId}
              // id="taskEdit"
              // isOpen={sideMenuCollapseId}
              // className="w-100"
              style={{ width: "100%" }}
            >
              <TaskEditor
                task={editorTask}
                updateTask={this.updateTaskToEdit}
              />
            </Collapse>
          </ExamEditorSidePanel>
          <div
            // className="d-flex justify-content-center"
            style={{ display: "flex", justifyContent: "center", flexGrow:"3" }}
          >
            <Droppable
              droppableId="examDroppable"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              {(provided, snapshot) => (
                <div
                  style={{
                    width: "21cm",
                    height: "29.7cm",
                    backgroundColor: snapshot.isDraggingOver ? "blue" : "white",
                  }}
                  className="border p-3"
                  ref={provided.innerRef}
                >
                  <div className="mb-2">
                    Imie i nazwisko:
                    .................................................................
                  </div>
                  {examTasks.map((task, index) => (
                    <Draggable
                      key={"task-" + task.id + "-" + index}
                      draggableId={"task-" + task.id + "-" + index}
                      index={index}
                    >
                      {(provided, snapshot) => {
                        console.log("ELO123", task.currentDataSet);
                        let answers = task.currentDataSet.examAnswers.map(
                          (item) => {
                            let answerSource = item.isCorrect
                              ? task.currentDataSet.answers[0].correctans
                              : task.currentDataSet.answers[0].allanswers;
                            return answerSource[item.index];
                          }
                        );

                        const ansChar = ["A", "B", "C", "D"];
                        return (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={provided.draggableProps.style}
                            className="p-2"
                            onClick={() => {
                              this.setTaskToEdit(index);
                            }}
                            // onContextMenu={() => {
                            //   this.removeTask(index);
                            // }}
                            onContextMenuCapture={() => {
                              this.removeTask(index);
                            }}
                          >
                            <div
                              className="text-danger"
                              onClick={() => {
                                this.removeTask(index);
                              }}
                            >
                              X
                            </div>
                            <p className="text-right mb-0 pb-0">
                              {".../" + task.maxPoints + " pkt."}
                            </p>
                            <p>
                              <span className="font-weight-bold">
                                {index + 1}
                                {". "}
                              </span>
                              <Latex>{task.text}</Latex>
                            </p>
                            {task.currentDataSet.image.length >= 1 && (
                              <MDBRow center>
                                <div>
                                  <img
                                    src={
                                      "http://127.0.0.1:8000/api/user/image/" +
                                      task.currentDataSet.image[0]
                                    }
                                    style={{ maxHeight: "100px" }}
                                  />
                                </div>
                              </MDBRow>
                            )}
                            <MDBRow between className="pl-2 pr-2 ml-0 mr-2">
                              {answers.map((item, index) => {
                                return (
                                  <div>
                                    <span className="font-weight-bold">
                                      {ansChar[index] + ". "}
                                    </span>
                                    <Latex>{item}</Latex>
                                  </div>
                                );
                              })}
                            </MDBRow>
                          </div>
                        );
                      }}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      </DragDropContext>
    );
  }
}

// ExamEditor.propTypes = {};

export default ExamEditor;
