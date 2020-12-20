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
  setTaskToEditWithPart,
  editorTaskIndex,
  editorTaskPart,
  updateTaskText,
  pushTaskAtIndex,
    removeTask,
startIndex,
    pageIndex,
    endIndex,
  ...props
}) => {
  const tasksToRender=examTasks.slice(startIndex,endIndex+1)
  return (
    <Droppable
      droppableId={`examDroppable-${pageIndex}`}
      style={{ marginLeft: "auto", marginRight: "auto" }}
      {...DroppablePropsAnother}
    >
      {(provided, snapshot) => {
        return (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {tasksToRender.map((task, index) => {
              return (
                <TaskWithOverlay
                  setTaskToEditWithPart={setTaskToEditWithPart}
                  editorTaskIndex={editorTaskIndex}
                  editorTaskPart={editorTaskPart}
                  updateTaskText={updateTaskText}
                  pushTaskAtIndex={pushTaskAtIndex}
                  index={index+startIndex}
                  draggableIndex={index}
                  task={task}
                  removeTask={removeTask}
                  {...props}
                />
              );
            })}
          </div>
        );
      }}
    </Droppable>
  );
};

export default TasksDragAndDrop;
