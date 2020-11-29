import React from "react";
import TaskOverlay from "./TaskOverlay";
import { Draggable } from "react-beautiful-dnd";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TaskContentWithMenu from "./TaskContentWithMenu";
import Latex from "react-latex";
import Box from "@material-ui/core/Box";

const TaskWithOverlay = ({
  index,
  droppableId,
  setTaskToEditWithPart,
  editorTaskIndex,
  editorTaskPart,
  updateTaskText,
  task,
  ...props
}) => {
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
      index={index}
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
                <div>X</div>,
                <div {...provided.dragHandleProps}>dndHandler</div>,
              ]}
            >
              <Box mb={2}>
                <Grid container alignItems="center" justify={"space-between"}>
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
            </TaskOverlay>
          </div>
        );
      }}
    </Draggable>
  );
};

export default TaskWithOverlay;
