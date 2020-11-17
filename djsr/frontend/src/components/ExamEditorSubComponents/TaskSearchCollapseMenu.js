import React from 'react';
import Collapse from "@material-ui/core/Collapse";
import ExamEditorSidePanel from "../ExamEditorSidePanel";
import CollapseMenuContainer from "./CollapseMenuContainer";
import TaskSearch from "../MaterialUiTaskSearch";
import TaskSearchDndResults from "./TaskSearchDndResults";
//todo paginacja
const TaskSearchCollapseMenu = ({currentTabId,taskSearchResult,setTaskSearchResult}) => {
    return (
         <CollapseMenuContainer
              currentTabId={currentTabId}
              id={"taskSearch"}
         >
             <TaskSearch updateData={setTaskSearchResult}/>
             <TaskSearchDndResults taskSearchResult={taskSearchResult}/>
         </CollapseMenuContainer>
    );
};

export default TaskSearchCollapseMenu;