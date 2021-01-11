import React, { useState } from "react";
import TooltipWithOverlay from "./TooltipWithOverlay";
import OverlayBorder from "./OverlayBorder";
import InputNumber from "rc-input-number";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const TaskPointsWithEdit = (props) => {
  const {
    maxPoints,
    editorTaskIndex,
    editorTaskPart,
    setTaskToEditWithPart,
    index,
    updateStateAndSaveExam,
  } = props;
  const isEditing = editorTaskIndex === index && editorTaskPart === "maxPoints";
  const points = maxPoints || 0;
  const onChange = (e) => {
    const value = e.target.value;
    updateStateAndSaveExam((state) => {
      state.exam.tasks[index].maxPoints = parseInt(value);
      return state;
    });
  };
  return !isEditing ? (
    <TooltipWithOverlay
      title={"Zmień maksymalną liczbę punktów"}
      placement={"right-start"}
      onClick={() => {
        setTaskToEditWithPart(index, "maxPoints");
      }}
    >
      <p className="text-right mb-0 pb-0">{".../" + points + " pkt."}</p>
    </TooltipWithOverlay>
  ) : (
    <OverlayBorder
    // onClick={() => {
    //   setTaskToEditWithPart(null, null);
    // }}
    >
      <ClickAwayListener
        onClickAway={() => {
          console.log("clkAway");
          setTaskToEditWithPart(null, null);
        }}
      >
        <input
          type={"number"}
          min={1}
          max={100}
          maxLength={3}
          defaultValue={maxPoints}
          style={{ marginTop: "1rem", marginBottom: "1rem" }}
          onChange={onChange}
        />
      </ClickAwayListener>
    </OverlayBorder>
  );
};

export default TaskPointsWithEdit;
