import React, { useState } from "react";
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
import ExamPageWithOverlay from "./ExamPageWithOverlay";
import PropTypes from "prop-types";
// const useStyles = makeStyles(theme => ({
//
// }));

const ExamPages = (props) => {
  const {
    exam,
    setTaskToEdit,
    removeTask,
    setTaskToEditWithPart,
    editorTaskIndex,
    editorTaskPart,
    updateTaskText,
    pushTaskAtIndex,
  } = props;
  const examTasks = exam.tasks;
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection:"column",
        flexGrow: "3",
        background: `linear-gradient(60deg, rgba(242,163,255,0.5) 0%, rgba(195,105,219,0.5) 100%), url(${bgImage})`,
      }}
      p={3}
    >
      <ExamPageWithOverlay
        DroppableProps={{ droppableId: "examDroppable" }}
        tasks={examTasks}
        {...props}
      />
    </Box>
  );
};

ExamPages.propTypes = {
  setTaskToEdit: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  setTaskToEditWithPart: PropTypes.func.isRequired,
  editorTaskIndex: PropTypes.func.isRequired,
  editorTaskPart: PropTypes.func.isRequired,
  updateTaskText: PropTypes.func.isRequired,
  pushTaskAtIndex: PropTypes.func.isRequired,
  updateTaskHeight: PropTypes.func.isRequired,
};

export default ExamPages;
