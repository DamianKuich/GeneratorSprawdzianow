import React from "react";
import CollapseMenuContainer from "./CollapseMenuContainer";
import TaskSearch from "../MaterialUiTaskSearch";
import TaskSearchDndResults from "./TaskSearchDndResults";
import TaskEditor from "./TaskEditor";
const TaskEditorCollapseMenu = ({ currentTabId,updateTask,selectedTaskToEdit }) => {
  return (
    <CollapseMenuContainer currentTabId={currentTabId} id={"taskEdit"}>
      <TaskEditor updateTask={updateTask} selectedTaskToEdit={selectedTaskToEdit}/>
    </CollapseMenuContainer>
  );
};

export default TaskEditorCollapseMenu;
