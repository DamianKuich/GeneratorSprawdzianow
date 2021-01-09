import React from "react";
import ResizeableSidePanel from "./ResizeableSidePanel";
import SideMenuTabSelector from "./SideMenuTabSelector";
import TaskSearch from "../taskSearch";
import TaskSearchCollapseMenu from "./TaskSearchCollapseMenu";
import TaskEditorCollapseMenu from "./TaskEditorCollapseMenu";

const ExamEditorSidePanel = ({
  exam,
  saved,
  currentTabId,
  handleTabChange,
  taskSearchResult,
  setTaskSearchResult,
  updateTask,
    selectedTaskToEdit,
  ...props
}) => {
  console.log("side panel props", currentTabId, props);
  return (
    <ResizeableSidePanel>
      {/*<div>{exam.name} eluwina</div>*/}
      {/*<div>{saved ? "Zapisano" : "Zapisywanie"}</div>*/}
      <SideMenuTabSelector
        handleTabChange={handleTabChange}
        currentTabId={currentTabId}
      />
      <TaskSearchCollapseMenu
        currentTabId={currentTabId}
        taskSearchResult={taskSearchResult}
        setTaskSearchResult={setTaskSearchResult}
      />
      <TaskEditorCollapseMenu
        currentTabId={currentTabId}
        updateTask={updateTask}
        selectedTaskToEdit={selectedTaskToEdit}
      />
    </ResizeableSidePanel>
  );
};

export default ExamEditorSidePanel;
