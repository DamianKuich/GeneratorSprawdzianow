import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import AddTask from "../AddTask";
import { taskParser } from "./TaskParser";
import { sampleSize, shuffle } from "lodash/collection";

const AddTaskDialog = ({ open, handleClose, indexOffset,pushTaskAtIndex ,index}) => {
  const onTaskAdd = (task) => {
    let draggedItem = taskParser(task);
    draggedItem.currentAnswers = JSON.parse(
      JSON.stringify(draggedItem.answers)
    );
    let currentDataSetAnswers = draggedItem.currentAnswers;
    console.log("dragged item", draggedItem, currentDataSetAnswers);
    let correctAnswersIndex = [
      Math.floor(Math.random() * (currentDataSetAnswers.correctans.length - 1)),
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

    draggedItem.currentAnswers.answersIndexes = answersSet;
    draggedItem.maxPoints = draggedItem.points;
    pushTaskAtIndex(draggedItem,index + indexOffset);
    handleClose()
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Dodaj zadanie</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Wybierz jakie umiejętnośći ma sprwadzać zadanie.
        </DialogContentText>
        <AddTask
          onTaskAdd={onTaskAdd}
        />
      </DialogContent>
    </Dialog>
  );
};

export default AddTaskDialog;
