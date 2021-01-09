import React, { useState } from "react";
import PropTypes from "prop-types";
import TasksDragAndDrop from "./TaskDragAndDropWithPagination";
import Box from "@material-ui/core/Box";
import ReactResizeDetector from "react-resize-detector";

const ExamPageWithOverlay = (props) => {
  const {
    exam,
    // header,
      headers,
    tasks,
    setTaskToEdit,
    removeTask,
    setTaskToEditWithPart,
    editorTaskIndex,
    editorTaskPart,
    updateTaskText,
    pushTaskAtIndex,
      updatePageIndexes,
  } = props;
  const [divHeight, setHeight] = useState(null);
  const pageIndex = props.pageIndex || 0;
  const header= (headers||[])[pageIndex] || null
  const startIndex = props.startIndex || 0;
  const examTasks = tasks;
  // const endIndex = startIndex + 3;
  const tasksLength = tasks.length;
  const pages=exam.pages || [];
  const stateLastIndex= pages[pageIndex]
  const calculateEnd = (start, tablica, limit) => {
    let current = 0;
    let index = start;
    while (
      index < tasksLength &&
      current + (tablica[Math.min(index + 1, tasksLength - 1)].height || 0) <
        limit
    ) {
      current = current + (tablica[index].height || 0);
      index++;
    }
    console.log("cacl end", index, current, limit);
    return index-1;
  };
  const endIndex =
    divHeight > 1 ? calculateEnd(startIndex, tasks, divHeight) : tasksLength;
  if (stateLastIndex !== endIndex) {
    console.log("pg update",stateLastIndex,endIndex ,exam.pages)
    updatePageIndexes(pageIndex, endIndex)
  }
  return (
    <>
      <Box
        // className="border p-3"
        p={3}
        boxShadow={3}
        style={{
          width: "21cm",
          height: "29.7cm",
          background: "white",
          display: "flex",
          flexDirection: "column",
          // backgroundColor: snapshot.isDraggingOver ? "blue" : "white",
        }}
        mb={20}
      >
        {!!header && header}
        {/*<h2>{exam.name}</h2>*/}
        {/*<div className="mb-2">*/}
        {/*  {*/}
        {/*    "Imie i nazwisko:................................................................."*/}
        {/*  }*/}
        {/*  /!*{".../"}{examTasks.map(task=>task.maxPoints).reduce((a,b)=>(a+b))}*!/*/}
        {/*</div>*/}
        <ReactResizeDetector>
          {({ width, height }) => {
            if (divHeight !== height) setHeight(height);
            // console.log("XDDD?", divHeight, height);
            return (
              <div
                style={{
                  // flex: "1",
                  height: "100%",
                }}
              >
                <div style={{ height: "100%" }}>
                  <TasksDragAndDrop
                    {...props}
                    DroppableProps={{
                      droppableId: `examDroppable-${pageIndex}`,
                    }}
                    startIndex={startIndex}
                    endIndex={endIndex}
                    pageIndex={pageIndex}
                    examTasks={examTasks}
                  />
                </div>
              </div>
            );
          }}
        </ReactResizeDetector>
      </Box>
      {endIndex < tasksLength - 1 && (
        <ExamPageWithOverlay
          {...props}
          startIndex={endIndex + 1}
          pageIndex={pageIndex + 1}
        />
      )}
    </>
  );
};

ExamPageWithOverlay.propTypes = {
  header: PropTypes.node,
  setTaskToEdit: PropTypes.func,
  removeTask: PropTypes.func,
  setTaskToEditWithPart: PropTypes.func,
  editorTaskIndex: PropTypes.func,
  editorTaskPart: PropTypes.func,
  updateTaskText: PropTypes.func,
  pushTaskAtIndex: PropTypes.func,
};

export default ExamPageWithOverlay;
