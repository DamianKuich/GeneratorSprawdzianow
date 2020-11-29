import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Latex from "react-latex";
import { MDBRow } from "mdbreact";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TaskContentWithMenu from "./TaskContentWithMenu";
import bgImage from "../img/genspr-parralax-bg.png";
import TasksDragAndDrop from "./TasksDragAndDrop";
// const useStyles = makeStyles(theme => ({
//
// }));

const ExamPage = ({
  exam,
  setTaskToEdit,
  removeTask,
  setTaskToEditWithPart,
  editorTaskIndex,
  editorTaskPart,
  updateTaskText,
  ...props
}) => {
  const examTasks = exam.tasks;
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        flexGrow: "3",
        background: `linear-gradient(60deg, rgba(242,163,255,0.5) 0%, rgba(195,105,219,0.5) 100%), url(${bgImage})`,
      }}
      p={3}
    >
      <Box
        style={{
          width: "21cm",
          height: "29.7cm",
          background: "white",
          // backgroundColor: snapshot.isDraggingOver ? "blue" : "white",
        }}
        // className="border p-3"
        p={3}
        boxShadow={3}
      >
        <h2>{exam.name}</h2>
        <div className="mb-2">
          {
            "Imie i nazwisko:................................................................."
          }
          {/*{".../"}{examTasks.map(task=>task.maxPoints).reduce((a,b)=>(a+b))}*/}
        </div>
        <TasksDragAndDrop
          DroppableProps={{ droppableId: "examDroppable" }}
          examTasks={examTasks}
          setTaskToEditWithPart={setTaskToEditWithPart}
          editorTaskIndex={editorTaskIndex}
          editorTaskPart={editorTaskPart}
          updateTaskText={updateTaskText}
        />
      </Box>
    </Box>
  );
};

export default ExamPage;
