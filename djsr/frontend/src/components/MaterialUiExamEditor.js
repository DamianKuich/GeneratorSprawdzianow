import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { sampleSize, shuffle } from "lodash/collection";
import "./styles/katex.css";
import "./registered-files";
import examToPdf from "./ExamPDF";
import axiosInstance from "./axiosAPI";
import ExamEditorSidePanel from "./ExamEditorSubComponents/ExamEditorSidePanel";
import ExamPages from "./ExamEditorSubComponents/ExamPageWithTaskOverlays";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Dialog from "./material_ui_components/CustomModal/CustomModal";
import Button from "./material_ui_components/CustomButtons/Button";
import Box from "@material-ui/core/Box";
import LoadingScreen from "./LoadingScreen";
import { withSnackbar } from "notistack";
import {ImageCacheProvider} from "./ExamEditorSubComponents/ImageCache";

//todo po skasowaniu tresci zadania "zapomina" zdjecie
//todo zajrzec do draganddropahndlera
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
      editorTaskIndex: null,
      editorTaskPart: null,
      anchorEl: null,
      downloadModal: false,
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
          state.exam.tasks = JSON.parse(state.exam.tasks || []);
          // let tasks = JSON.parse(state.exam.tasks || []);
          // const {pages}=tasks.pop()
          // state.exam.tasks=tasks;
          // state.exam.pages=pages||[];
          // if (!tasks[tasks.length].text) {
          //   const { pages } = tasks.pop();
          //   state.exam.tasks = tasks;
          //   state.exam.pages = pages || [];
          // }
          // state.exam.tasks = tasks;
        } else {
          state.exam.tasks = [];
        }
        document.title = state.exam.name;
        return state;
      });
    });
  };
  componentDidMount() {
    this.getExam();
  }

  updateStateNoSave = (stateUpdater) => {
    this.setState((state) => {
      state = stateUpdater(state);
      return state;
    });
  };
  updateStateAndSaveExam = (stateUpdater) => {
    this.setState((state) => {
      state = stateUpdater(state);
      state.timeout = this.resetTimeout(
        this.state.timeout,
        setTimeout(this.saveExam, 3000)
      );
      // state.savingSnackKey =
      //   state.savingSnackKey ||
      //   this.props.enqueueSnackbar("Zapisywanie sprawdzianu", {
      //     persist: true,
      //   });
      if (!state.savingSnackKey) {
        this.props.closeSnackbar();
        state.savingSnackKey = this.props.enqueueSnackbar(
          "Zapisywanie sprawdzianu",
          {
            persist: true,
          }
        );
      }
      state.saved = false;
      return state;
    });
  };

  setTaskOnPageEditor = (index, part) => {
    this.setState((state) => {
      state.editorTaskIndex = index;
      state.editorTaskPart = part;
      state.editorTask = null;
      if (index !== null) {
        state.editorTask = state.exam.tasks[index];
      }
      state.sideMenuCollapseId = "taskEdit";
      return state;
    });
  };

  updateTaskText = (index, text) => {
    this.updateStateAndSaveExam((state) => {
      state.exam.tasks[index].text = text;
      return state;
    });
  };

  generatedPDFV3 = examToPdf;

  updatePageIndexes = (page, lastIndex) => {
    this.updateStateAndSaveExam((state) => {
      let pages = state.exam.pages || [];
      pages[page] = lastIndex;
      state.exam.pages = pages;
      return state;
    });
  };

  updateTaskHeight = (index, height) => {
    // console.log("updated height", index , height)
    this.setState((state) => {
      state.exam.tasks[index].height = height;
      return state;
    });
  };
  setTaskToEdit = (index) => {
    this.setState((state) => {
      state.editorTask = state.exam.tasks[index];
      state.sideMenuCollapseId = "taskEdit";
      return state;
    });
  };

  updateTaskToEdit = (task) => {
    this.updateStateAndSaveExam((state) => {
      Object.assign(state.editorTask, task);
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
        this.props.closeSnackbar(this.state.savingSnackKey);
        this.props.enqueueSnackbar("Zapisano sprawdzian.", {
          variant: "success",
        });
        this.setState({ saved: true, savingSnackKey: null });
      });
  };

  removeTask = (index) => {
    // console.log("usunieto" + index);
    this.updateStateAndSaveExam((state) => {
      if (index === 0) {
        state.exam.tasks.shift();
      } else {
        state.exam.tasks.splice(index, index);
      }
      return state;
    });
  };

  openPDFinNewTab = (type) => {
    if (!!this.state.downloadingPDF) {
      this.props.enqueueSnackbar(
        "Masz już PDF'a w kolejce do pobrania, prosimy poczekać",
        { variant: "info" }
      );
      return;
    }
    this.setState((state) => {
      state.downloadingPDF = true;
      return state;
    });
    let pdfBaseUrl = "";
    let pdfNameSuffix = "";
    switch (type) {
      case "exam":
        pdfBaseUrl = "/user/testpdf/";
        break;
      case "answers":
        pdfBaseUrl = "/user/answerspdf/";
        pdfNameSuffix = "- arkusz odpowiedzi";
        break;
      case "answersKeys":
        pdfBaseUrl = "/user/answerskeypdf/";
        pdfNameSuffix = "- klucz odpowiedzi";
        break;
      default:
        this.setState((state) => {
          state.downloadingPDF = false;
          return state;
        });
        return;
    }
    this.props.enqueueSnackbar("Generowanie PDF, może to potrwać 2 minuty.");
    axiosInstance
      .get(pdfBaseUrl + this.state.exam.id, {
        method: "GET",
        responseType: "blob",
        timeout: 120000,
      })
      .then((response) => {
        // console.log("pdf response" ,response.data)
        let pdfBlob = new Blob([response.data], { type: "application/pdf" });
        // pdfBlob.lastModifiedDate = new Date();
        // pdfBlob.name = this.state.exam.name;
        // const pdf = response.data;
        const fileURL = URL.createObjectURL(pdfBlob);
        let a = document.createElement("a");
        document.body.appendChild(a);
        a.style = { display: "none" };
        a.href = fileURL;
        a.download = this.state.exam.name + pdfNameSuffix;
        this.setState((state) => {
          state.downloadingPDF = false;
          return state;
        });
        a.click();
        URL.revokeObjectURL(fileURL);
        // window.open(fileURL);
      })
      .catch((e) => {
        this.props.enqueueSnackbar(
          "Nie udało się pobrać PDF, spróbuj ponownie później",
          { variant: "error" }
        );
        this.setState((state) => {
          state.downloadingPDF = false;
          return state;
        });
      });
  };

  dragEndOld = (result) => {
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
      (source.droppableId || "").substring(0, 13) === "examDroppable" &&
      (destination.droppableId || "").substring(0, 13) === "examDroppable"
    ) {
      const sourcePageIndex = source.droppableId.match(/(\d+)/)[0];
      const destinationPageIndex = destination.droppableId.match(/(\d+)/)[0];
      const sourceStartIndex =
        sourcePageIndex > 0
          ? this.state.exam.pages[sourcePageIndex - 1] + 1
          : 0;
      const destinationStartIndex =
        destinationPageIndex > 0
          ? this.state.exam.pages[destinationPageIndex - 1] + 1
          : 0;
      const sourceIndex = sourceStartIndex + source.index;
      const destinationIndex = destinationStartIndex + destination.index;
      this.updateStateAndSaveExam((state) => {
        let tasks = state.exam.tasks;
        [tasks[sourceIndex], tasks[destinationIndex]] = [
          tasks[destinationIndex],
          tasks[sourceIndex],
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
      draggedItem.currentAnswers = JSON.parse(
        JSON.stringify(draggedItem.answers)
      );
      let currentDataSetAnswers = draggedItem.currentAnswers;
      console.log("dragged item", draggedItem, currentDataSetAnswers);
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
      let incorrectAnswersIndexes = currentDataSetAnswers.wronganswers.map(
        (item, index) => {
          return index;
        }
      );
      let answersSet = [];
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

      draggedItem.currentAnswers.answersIndexes = answersSet;
      draggedItem.maxPoints = draggedItem.points;
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
  dragEnd = (result) => {
    console.log("dragend", result);
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
      (source.droppableId || "").substring(0, 13) === "examDroppable" &&
      (destination.droppableId || "").substring(0, 13) === "examDroppable"
    ) {
      const sourcePageIndex = source.droppableId.match(/(\d+)/)[0];
      const destinationPageIndex = destination.droppableId.match(/(\d+)/)[0];
      const sourceStartIndex =
        sourcePageIndex > 0
          ? this.state.exam.pages[sourcePageIndex - 1] + 1
          : 0;
      const destinationStartIndex =
        destinationPageIndex > 0
          ? this.state.exam.pages[destinationPageIndex - 1] + 1
          : 0;
      const sourceIndex = sourceStartIndex + source.index;
      const destinationIndex = destinationStartIndex + destination.index;

      this.updateStateAndSaveExam((state) => {
        let tasks = state.exam.tasks;
        [tasks[sourceIndex], tasks[destinationIndex]] = [
          tasks[destinationIndex],
          tasks[sourceIndex],
        ];
        return state;
      });
    } else {
      const destinationPageIndex = destination.droppableId.match(/(\d+)/)[0];
      const destinationStartIndex =
        destinationPageIndex > 0
          ? this.state.exam.pages[destinationPageIndex - 1] + 1
          : 0;
      const destinationIndex = destinationStartIndex + destination.index;
      let draggedItem = this.state.tasks[source.index];
      let taskWithAnswerSet = this.generateAnswerSetForTask(draggedItem);
      taskWithAnswerSet.maxPoints = taskWithAnswerSet.points || 1;
      this.pushTaskAtIndex(taskWithAnswerSet, destinationIndex);
    }
  };
  setSearchedTasks = (tasks) => {
    // console.log("Triggered Task");
    this.setState((state) => {
      state.tasks = tasks;
      return state;
    });
  };

  generateAnswerSetForTask = (
    task,
    { numberOfAnswers, numberOfCorrectAnswers, ...options } = {}
  ) => {
    numberOfAnswers = numberOfAnswers || 4;
    numberOfCorrectAnswers = numberOfCorrectAnswers || 1;
    let NewTask = JSON.parse(JSON.stringify(task));
    NewTask.currentAnswers = JSON.parse(JSON.stringify(NewTask.answers));
    let currentDataSetAnswers = NewTask.currentAnswers;
    let correctAnswersIndex = [...currentDataSetAnswers.correctans.keys()];
    let incorrectAnswersIndexes = [
      ...currentDataSetAnswers.wronganswers.keys(),
    ];
    let answersSet = [];
    answersSet = answersSet.concat(
      sampleSize(correctAnswersIndex, numberOfCorrectAnswers).map((item) => {
        return { index: item, isCorrect: true };
      })
    );
    answersSet = answersSet.concat(
      sampleSize(
        incorrectAnswersIndexes,
        numberOfAnswers - numberOfCorrectAnswers
      ).map((item) => {
        return { index: item, isCorrect: false };
      })
    );
    answersSet = shuffle(answersSet);
    NewTask.currentAnswers.answersIndexes = answersSet;
    return NewTask;
  };

  //zmiana zakladki w menu po lewej stronie
  setSideMenuCollapse = (collapseId) => {
    this.setState({ sideMenuCollapseId: collapseId });
  };

  pushTaskAtIndex = (task, index) => {
    this.updateStateAndSaveExam((state) => {
      state.exam.tasks.splice(index, 0, task);
      return state;
    });
  };
  handleSideMenuTabChange = (event, newValue) => {
    // if (newValue === "generatePDF") this.generatedPDFV3(this.state.exam);
    // if (this.state.downloadingPDF===false){
    //   this.props.enqueueSnackbar("Masz już PDF'a do pobrania w kolejce, prosimy poczekać.",{variant:"info"})
    // }
    if (newValue === "generatePDF") {
      this.updateStateNoSave((state) => {
        // state.anchorEl = event.currentTarget;
        state.downloadModal = true;
        return state;
      });
    }
    // window.open(
    //   `${window.location.origin}/api/user/testpdf/` + this.state.exam.id,
    //   "_blank"
    // );
    //window.open(url,'_blank');
    else this.setSideMenuCollapse(newValue);
  };
  handleCloseMenu = () => {
    this.updateStateNoSave((state) => {
      state.anchorEl = null;
      return state;
    });
  };

  render() {
    const exam = this.state.exam;
    if (!exam) {
      return <LoadingScreen message={"Ładowanie edytora sprawdzianu"} />;
    }
    const sideMenuCollapseId = this.state.sideMenuCollapseId;
    const searchedTasks = this.state.tasks;
    const examTasks = this.state.exam.tasks;
    const editorTask = this.state.editorTask;
    const isExamSaved = this.state.saved;
    const anchorEl = this.state.anchorEl;
    // console.log("editorTask", editorTask);
    return (
      <ImageCacheProvider>
        <DragDropContext onDragEnd={this.dragEnd}>
          <div
            style={{
              width: "100%",
              minHeight: "100vh",
              display: "flex",
              flexFlow: "row nowrap",
            }}
          >
            <ExamEditorSidePanel
              exam={exam}
              saved={isExamSaved}
              currentTabId={sideMenuCollapseId}
              handleTabChange={this.handleSideMenuTabChange}
              setTaskSearchResult={this.setSearchedTasks}
              taskSearchResult={searchedTasks}
              updateTask={this.updateTaskToEdit}
              selectedTaskToEdit={this.state.editorTask}
            />
            <ExamPages
              exam={exam}
              setTaskToEdit={this.setTaskToEdit}
              removeTask={this.removeTask}
              setTaskToEditWithPart={this.setTaskOnPageEditor}
              editorTaskIndex={this.state.editorTaskIndex}
              editorTaskPart={this.state.editorTaskPart}
              updateTaskText={this.updateTaskText}
              pushTaskAtIndex={this.pushTaskAtIndex}
              updateTaskHeight={this.updateTaskHeight}
              updatePageIndexes={this.updatePageIndexes}
              updateStateAndSaveExam={this.updateStateAndSaveExam}
              updateStateNoSave={this.updateStateNoSave}
            />
          </div>
          <Dialog
            open={!!this.state.downloadModal}
            // dialogTitle={}
            // fullWidth={true}
            // maxWidth={"lg"}

            onClose={() => {
              this.setState((state) => {
                state.downloadModal = false;
                return false;
              });
            }}
            dialogActionsChildren={[
              <Button
                color={"primary"}
                onClick={() => {
                  this.setState((state) => {
                    state.downloadModal = false;
                    return false;
                  });
                }}
              >
                Zamknij
              </Button>,
            ]}
          >
            <Box display={"flex"} flexDirection={"column"}>
              {/*<Button*/}
              {/*  color={"primary"}*/}
              {/*  onClick={() => {*/}
              {/*    this.props.enqueueSnackbar("Successfully fetched the data.");*/}
              {/*  }}*/}
              {/*>*/}
              {/*  Sprawdzian*/}
              {/*</Button>*/}
              <Button
                color={"primary"}
                onClick={() => {
                  this.openPDFinNewTab("exam");
                }}
              >
                Sprawdzian
              </Button>
              <Button
                color={"primary"}
                // onClick={() => {
                //   window.open(
                //     `${window.location.origin}/api/user/answerspdf/` +
                //       this.state.exam.id,
                //     "_blank"
                //   );
                // }}
                onClick={() => {
                  this.openPDFinNewTab("answers");
                }}
              >
                Arkusz odpowiedzi
              </Button>
              <Button
                color={"primary"}
                // onClick={() => {
                //   window.open(
                //     `${window.location.origin}/api/user/answerskeypdf/` +
                //       this.state.exam.id,
                //     "_blank"
                //   );
                // }}
                onClick={() => {
                  this.openPDFinNewTab("answersKeys");
                }}
              >
                Klucz Odpowiedzi
              </Button>
            </Box>
          </Dialog>
        </DragDropContext>
      </ImageCacheProvider>
    );
  }
}

// ExamEditor.propTypes = {};

export default withSnackbar(ExamEditor);
