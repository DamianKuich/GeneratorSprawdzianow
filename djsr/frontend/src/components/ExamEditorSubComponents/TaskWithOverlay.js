import React ,{memo} from "react";
import TaskOverlay from "./TaskOverlay";
import { Draggable } from "react-beautiful-dnd";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TaskContentWithMenu from "./TaskContentWithMenu";
import Latex from "react-latex";
import Box from "@material-ui/core/Box";
import AddTaskWithDropdownMenu from "./AddTaskWithDropdownMenu";
import ReactResizeDetector from "react-resize-detector";
import getLayoutParams from "./getImageLayotRowsCols";
import TaskPointsWithEdit from "./taskPointsWithEdit";
import TaskOverlayButton from "./TaskOverlayButton";
import TaskAnswerWithEdit from "./TaskAnswerWithEdit";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditTaskImages from "./EditTaskImages";
import EditTaskAnswerSpace from "./EditTaskAnswerSpace";
import AuthImage from "./AuthImage";
import {pick} from "lodash/object";
import {isEqual} from "lodash/lang"

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
    updateStateAndSaveExam,
  } = props;
  let answers = task.currentAnswers.answersIndexes.map((item) => {
    let answerSource = item.isCorrect
      ? task.currentAnswers.correctans
      : task.currentAnswers.wronganswers;
    return answerSource[item.index];
  });
  const wronganswers = task.currentAnswers.wronganswers;
  const correctans = task.currentAnswers.correctans;
  const answersIndexes = task.currentAnswers.answersIndexes;
  const taskImage = task.currentAnswers.image || [];
  const imageLayout = getLayoutParams(task.currentAnswers.imageLayout || "");
  const imageWidth = 12 / imageLayout.cols;
  const ansChar = ["A", "B", "C", "D"];
  console.log("rerenderTask",index)
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
                <EditTaskImages
                  task={task}
                  updateTask={(updatedTask) => {
                    updateStateAndSaveExam((state) => {
                      state.exam.tasks[index] = updatedTask;
                      return state;
                    });
                  }}
                />,
                <AddTaskWithDropdownMenu
                  index={index}
                  pushTaskAtIndex={pushTaskAtIndex}
                />,
                <TaskOverlayButton tooltip={"Przytrzymaj lewy przycisk myszy i przeciągnij zadanie na sprawdzianie, aby zmienić kolejność"} {...provided.dragHandleProps}>
                  <DragIndicatorIcon fontSize={"small"} />
                </TaskOverlayButton>,
                <TaskOverlayButton
                    tooltip={"Usuń zadanie"}
                  onClick={() => {
                    removeTask(index);
                  }}
                >
                  <DeleteForeverIcon fontSize={"small"} />
                </TaskOverlayButton>,
                  <EditTaskAnswerSpace {...props}/>
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
                            {/*<p className="text-right mb-0 pb-0">*/}
                            {/*  {".../" + task.maxPoints + " pkt."}*/}
                            {/*</p>*/}
                            <TaskPointsWithEdit
                              {...props}
                              maxPoints={task.maxPoints}
                            />
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
                        {
                          <Box
                          // style={{ maxHeight: "5cm", width: "100%" }}
                          >
                            {taskImage.length >= 1 && (
                              <Grid container spacing={2}>
                                {taskImage.map((image) => {
                                  return (
                                    <Grid
                                      item
                                      xs={imageWidth}
                                      // xs={1}
                                      // sm={1}
                                      // md={1}
                                      // xl={1}
                                      // lg={1}
                                    >
                                      {/*<img*/}
                                      {/*  src={`${window.location.origin}/api/user/image/${image}`}*/}
                                      {/*  style={{*/}
                                      {/*    maxHeight: "5cm",*/}
                                      {/*    maxWidth: "100%",*/}
                                      {/*    margin: "0 auto",*/}
                                      {/*    display: "block",*/}
                                      {/*  }}*/}
                                      {/*/>*/}
                                      <AuthImage
                                        src={image}
                                        style={{
                                          maxHeight: "5cm",
                                          maxWidth: "100%",
                                          margin: "0 auto",
                                          display: "block",
                                        }}
                                      />
                                    </Grid>
                                  );
                                })}
                              </Grid>
                            )}
                          </Box>
                        }
                        {!task.currentAnswers.isOtwarte && (
                          <Grid
                            container
                            alignItems="center"
                            justify={"space-between"}
                            // className="pl-2 pr-2 ml-0 mr-2"
                          >
                            {answersIndexes.map((ans, answerIndex) => {
                              return (
                                <TaskAnswerWithEdit
                                  {...props}
                                  answer={ans}
                                  wronganswers={wronganswers}
                                  correctans={correctans}
                                  answerIndex={answerIndex}
                                  ansChar={ansChar}
                                />
                              );
                            })}
                          </Grid>
                        )}
                        {!!task.currentAnswers.isOtwarte && (
                          <div style={{ border: "1px solid black", height:`${task.currentAnswers.spaceToSolve ||0}cm` }}></div>
                        )}
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

export default memo(TaskWithOverlay,(prev,next)=>{
  // const toCompare=["task","index","draggableIndex","editorTaskIndex","editorTaskPart"]
  // const prevProps=pick(prev,toCompare)
  // const nextProps=pick(next,toCompare)
  // console.log("rerender",prev,prevProps,nextProps,isEqual(prevProps,nextProps));
  // return isEqual(prevProps,nextProps);
  return false
});
