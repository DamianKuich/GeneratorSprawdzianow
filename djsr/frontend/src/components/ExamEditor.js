import React, { Component } from "react";
import PropTypes from "prop-types";
import { MDBCol, MDBCollapse, MDBContainer, MDBRow } from "mdbreact";
import TaskSearch from "./taskSearch";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TaskEditor from "./TaskEditor";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  StyleSheet, View, Font,
} from "@react-pdf/renderer";

class ExamEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exam: {
        tasks: [],
      },
      tasks: null,
      sideMenuCollapseId: "",
      editorTask: null,
    };
    // this.taskEditorRef = React.createRef();
  }

  generatedPDF = (exam) => {
    Font.register({family:"FM",fontWeight:"bold"})
    const styles = StyleSheet.create({ bold: { fontWeight: "700"} });
    let taski = exam.tasks.map((task, index) => (
      <Text>
        <Text style={styles.bold}>
          {index + 1}
          {". "}
        </Text>
        <Text>{task.text}</Text>
      </Text>
    ));
    return (
      <Document>
        <Page size="A4">
          <View style={styles.bold}>
          <Text>
            Imie i nazwisko:
            .................................................................
          </Text>
            </View>
          {taski}
        </Page>
      </Document>
    );
  };

  PDF = null;

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
      return state;
    });
  };

  dragEnd = (result) => {
    const { source, destination, draggableId } = result;
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
        return state;
      });
    } else {
      let draggedItem = JSON.parse(
        JSON.stringify(this.state.tasks[source.index])
      );
      console.log("draggedItem", draggedItem, this.state.tasks);
      this.setState((state) => {
        state.exam.tasks.splice(destination.index, 0, draggedItem);
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
  render() {
    let sideMenuCollapseId = this.state.sideMenuCollapseId;
    let searchedTasks = this.state.tasks;
    let examTasks = this.state.exam.tasks;
    let editorTask = this.state.editorTask;
    console.log("editorTask", editorTask);
    return (
      <DragDropContext onDragEnd={this.dragEnd}>
        <MDBRow>
          <MDBCol size="3">
            <MDBRow>
              <MDBCol
                className={
                  "d-flex justify-content-between " +
                  "p-2 mt-3 border-right border-top border-left " +
                  (sideMenuCollapseId === "taskSearch" ? "" : "border-bottom")
                }
                onClick={() => {
                  this.setSideMenuCollapse("taskSearch");
                }}
              >
                Dodaj zadanie
              </MDBCol>
              <MDBCol
                size={"3"}
                className={
                  "d-flex justify-content-between " +
                  "p-2 mt-3 border-right border-top border-left " +
                  (sideMenuCollapseId === "taskSearch" ? "" : "border-bottom")
                }
                onClick={() => {
                  this.setSideMenuCollapse("taskEdit");
                }}
              >
                Edycja zadania
              </MDBCol>
              <MDBCol
                size={"3"}
                className={
                  "d-flex justify-content-between " +
                  "p-2 mt-3 border-right border-top border-left "
                }
              >
                <PDFDownloadLink document={this.generatedPDF(this.state.exam)} fileName="somename.pdf">
                    {({ blob, url, loading, error }) =>
                      loading ? "Generowanie PDF" : "Pobierz PDF!"
                    }
                  </PDFDownloadLink>
              </MDBCol>
              <MDBCol
                size={"3"}
                className={
                  "d-flex justify-content-between " +
                  "p-2 mt-3 border-right border-top border-left "
                }
              >
                <span onClick={()=>{}}>Zapisz sprawdzian</span>
              </MDBCol>
            </MDBRow>
            <MDBCollapse
              id="taskSearch"
              isOpen={sideMenuCollapseId}
              className="w-100"
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
                              >
                                {task.text}
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
            </MDBCollapse>
            <MDBCollapse
              id="taskEdit"
              isOpen={sideMenuCollapseId}
              className="w-100"
            >
              <TaskEditor
                task={editorTask}
                updateTask={this.updateTaskToEdit}
              />
            </MDBCollapse>
          </MDBCol>
          <MDBCol size="6">
            <Droppable droppableId="examDroppable">
              {(provided, snapshot) => (
                <div
                  style={{
                    width: "21cm",
                    height: "29.7cm",
                    backgroundColor: snapshot.isDraggingOver ? "blue" : "white",
                  }}
                  className="border"
                  ref={provided.innerRef}
                >
                  <div>
                    Imie i nazwisko:
                    .................................................................
                  </div>
                  {examTasks.map((task, index) => (
                    <Draggable
                      key={"task-" + task.id + "-" + index}
                      draggableId={"task-" + task.id + "-" + index}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={provided.draggableProps.style}
                          onClick={() => {
                            this.setTaskToEdit(index);
                          }}
                        >
                          <span className="font-weight-bold">
                            {index + 1}
                            {". "}
                          </span>
                          <span>{task.text}</span>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </MDBCol>
        </MDBRow>
      </DragDropContext>
    );
  }
}

ExamEditor.propTypes = {};

export default ExamEditor;
