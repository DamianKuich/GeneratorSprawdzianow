import React from "react";
import Box from "@material-ui/core/Box";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TaskContentWithMenu from "./TaskContentWithMenu";
import Latex from "react-latex";
import TaskWithOverlay from "./TaskWithOverlay";

const TasksDragAndDrop = ({
  DroppableProps: { droppableId, ...DroppablePropsAnother },
  examTasks,
  ...props
}) => {
  return (
    <Droppable
      droppableId="examDroppable"
      style={{ marginLeft: "auto", marginRight: "auto" }}
      {...DroppablePropsAnother}
    >
      {(provided, snapshot) => {
        return (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {examTasks.map((task, index) => {
              return <TaskWithOverlay index={index} task={task} />;
            })}
          </div>
        );
      }}
    </Droppable>
  );
};

export default TasksDragAndDrop;
