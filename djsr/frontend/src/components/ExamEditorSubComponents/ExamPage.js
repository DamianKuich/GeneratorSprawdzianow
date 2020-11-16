import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Latex from "react-latex";
import { MDBRow } from "mdbreact";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

// const useStyles = makeStyles(theme => ({
//
// }));

const ExamPage = ({ exam, setTaskToEdit, removeTask }) => {
  const examTasks = exam.tasks;
  return (
    <Box
      // className="d-flex justify-content-center"
      style={{
        display: "flex",
        justifyContent: "center",
        flexGrow: "3",
        background:
          "linear-gradient(60deg, rgba(242,163,255,1) 0%, rgba(195,105,219,1) 100%)",
      }}
      p={3}
    >
      <Droppable
        droppableId="examDroppable"
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        {(provided, snapshot) => (
          <Box
            style={{
              width: "21cm",
              height: "29.7cm",
              background: "white",
              // backgroundColor: snapshot.isDraggingOver ? "blue" : "white",
            }}
            // className="border p-3"
            p={3}
            boxShadow={3}
            ref={provided.innerRef}
          >
            <h2>{exam.name}</h2>
            <div className="mb-2">
              {
                "Imie i nazwisko:................................................................."
              }
                {".../"}{examTasks.map(task=>task.maxPoints).reduce((a,b)=>(a+b))}
            </div>
            {examTasks.map((task, index) => (
              <Draggable
                key={"task-" + task.id + "-" + index}
                draggableId={"task-" + task.id + "-" + index}
                index={index}
              >
                {(provided, snapshot) => {
                  console.log("ELO123", task.currentDataSet);
                  let answers = task.currentAnswers.answersIndexes.map(
                    (item) => {
                      let answerSource = item.isCorrect
                        ? task.currentAnswers.correctans
                        : task.currentAnswers.wronganswers;
                      return answerSource[item.index];
                    }
                  );

                  const ansChar = ["A", "B", "C", "D"];
                  return (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={provided.draggableProps.style}
                      onClick={() => {
                        setTaskToEdit(index);
                      }}
                      // onContextMenu={() => {
                      //   this.removeTask(index);
                      // }}
                      // onContextMenuCapture={() => {
                      //   removeTask(index);
                      // }}
                    >
                      <Box mb={2}>
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
                          <span className="font-weight-bold">
                            {index + 1}
                            {". "}
                          </span>
                          <Latex>{task.text}</Latex>
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
                    </div>
                  );
                }}
              </Draggable>
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </Box>
  );
};

export default ExamPage;
