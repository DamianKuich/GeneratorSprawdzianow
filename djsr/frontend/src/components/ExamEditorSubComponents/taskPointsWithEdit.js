import React, { useState } from "react";
import TooltipWithOverlay from "./TooltipWithOverlay";
import OverlayBorder from "./OverlayBorder";

const TaskPointsWithEdit = (props) => {
  const {
    maxPoints,
    editorTaskIndex,
    editorTaskPart,
    setTaskToEditWithPart,
    index,
  } = props;
  const isEditing = editorTaskIndex === index && editorTaskPart === "maxPoints";
  const points = maxPoints || 0;
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
      onClick={() => {
        setTaskToEditWithPart(null, null);
      }}
    >
      <input type={"number"}/>
    </OverlayBorder>
  );
};

export default TaskPointsWithEdit;
