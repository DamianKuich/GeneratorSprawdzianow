import React from "react";
import TaskOverlay from "./TaskOverlay";
import { Draggable } from "react-beautiful-dnd";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TaskContentWithMenu from "./TaskContentWithMenu";
import Latex from "react-latex";
import Box from "@material-ui/core/Box";
import AddTaskWithDropdownMenu from "./AddTaskWithDropdownMenu";
import ReactResizeDetector from "react-resize-detector";

const TaskWithOverlay = (props) => {
  const {
    index,
    draggableIndex,
    droppableId,
    setTaskToEditWithPart,
    editorTaskIndex,
    editorTaskPart,
    updateTaskText,
    task,
    removeTask,
    pushTaskAtIndex,
    updateTaskHeight,
  } = props;
  let answers = task.currentAnswers.answersIndexes.map((item) => {
    let answerSource = item.isCorrect
      ? task.currentAnswers.correctans
      : task.currentAnswers.wronganswers;
    return answerSource[item.index];
  });

  const ansChar = ["A", "B", "C", "D"];
  return (
    <Draggable
      key={"task-" + task.id + "-" + index}
      draggableId={"task-" + task.id + "-" + index}
      index={draggableIndex}
    >
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            style={provided.draggableProps.style}
          >
            <TaskOverlay
              menuComponents={[
                <AddTaskWithDropdownMenu
                  index={index}
                  pushTaskAtIndex={pushTaskAtIndex}
                />,
                <div
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    borderRight: "solid white",
                    borderLeft: "solid white",
                  }}
                  {...provided.dragHandleProps}
                >
                  H
                </div>,
                <div
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    borderLeft: "solid white",
                  }}
                  onClick={() => {
                    removeTask(index);
                  }}
                >
                  X
                </div>,
              ]}
            >
              <ReactResizeDetector>
                {({ width, height }) => {
                  if (task.height !== height && height > 1) {
                    updateTaskHeight(index, height);
                  }

                  // console.log("task w/h ", task);
                  return (
                    <Box>
                      <Box>
                        <Grid
                          container
                          alignItems="center"
                          justify={"space-between"}
                        >
                          <Grid item>
                            <div
                              onClick={() => {
                                removeTask(index);
                              }}
                            >
                              <Typography color={"error"}>X</Typography>
                            </div>
                          </Grid>
                          <Grid item>
                            <p className="text-right mb-0 pb-0">
                              {".../" + task.maxPoints + " pkt."}
                            </p>
                          </Grid>
                        </Grid>
                        <p>
                          <TaskContentWithMenu
                            taskIndex={index}
                            content={task.text}
                            setTaskToEditWithPart={setTaskToEditWithPart}
                            editorTaskIndex={editorTaskIndex}
                            editorTaskPart={editorTaskPart}
                            updateTaskText={updateTaskText}
                          />
                          {/*<Latex>{task.text}</Latex>*/}
                        </p>
                        {/*{task.currentDataSet.image.length >= 1 && (*/}
                        {/*  <MDBRow center>*/}
                        {/*    <div>*/}
                        {/*      <img*/}
                        {/*        src={*/}
                        {/*          "http://127.0.0.1:8000/api/user/image/" +*/}
                        {/*          task.currentDataSet.image[0]*/}
                        {/*        }*/}
                        {/*        style={{ maxHeight: "100px" }}*/}
                        {/*      />*/}
                        {/*    </div>*/}
                        {/*  </MDBRow>*/}
                        {/*)}*/}
                        <Grid
                          container
                          alignItems="center"
                          justify={"space-between"}
                          className="pl-2 pr-2 ml-0 mr-2"
                        >
                          {answers.map((item, index) => {
                            return (
                              <Grid item>
                                <div>
                                  <Typography
                                    display={"inline"}
                                    style={{
                                      fontWeight: "bold",
                                    }}
                                    className="font-weight-bold"
                                  >
                                    {ansChar[index] + ". "}
                                  </Typography>
                                  <Latex>{item}</Latex>
                                </div>
                              </Grid>
                            );
                          })}
                        </Grid>
                      </Box>
                    </Box>
                  );
                }}
              </ReactResizeDetector>
            </TaskOverlay>
          </div>
        );
      }}
    </Draggable>
  );
};

export default TaskWithOverlay;
