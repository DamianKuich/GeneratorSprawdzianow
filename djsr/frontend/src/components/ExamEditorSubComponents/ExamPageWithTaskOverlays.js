import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import bgImage from "../img/genspr-parralax-bg.png";
import ExamPageWithOverlay from "./ExamPageWithOverlay";
import PropTypes from "prop-types";
import FirstPageHeader from "./FirstPageHeader";

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
  const maxPoints =
    examTasks.length > 1
      ? examTasks.map((task) => task.maxPoints).reduce((a, b) => a + b)
      : examTasks.length > 0
      ? examTasks[0].maxPoints
      : 0;
  const headers = [
    <FirstPageHeader {...props} title={exam.name} maxExamPoints={maxPoints} />,
  ];
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        flexGrow: "3",
        background: `linear-gradient(60deg, rgba(242,163,255,0.5) 0%, rgba(195,105,219,0.5) 100%), url(${bgImage})`,
      }}
      p={3}
    >
      <ExamPageWithOverlay
        DroppableProps={{ droppableId: "examDroppable" }}
        tasks={examTasks}
        headers={headers}
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
