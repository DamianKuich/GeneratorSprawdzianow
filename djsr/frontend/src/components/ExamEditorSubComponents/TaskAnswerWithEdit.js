import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Latex from "react-latex";
import Grid from "@material-ui/core/Grid";
import Textarea from "react-autosize-textarea";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import TooltipWithOverlay from "./TooltipWithOverlay";
import Dialog from "../material_ui_components/CustomModal/CustomModal";
import Button from "../material_ui_components/CustomButtons/Button";
import { Field, Form, Formik } from "formik";
import MaterialFormikField from "../MaterialFormikField";

const TaskAnswerWithEdit = (props) => {
  const {
    answerIndex,
    editorTaskIndex,
    editorTaskPart,
    setTaskToEditWithPart,
    index,
    updateStateAndSaveExam,
    answer,
    correctans,
    wronganswers,
    ansChar,
  } = props;
  const [open, setOpen] = useState(false);
  // const
  const isEditing =
    editorTaskIndex === index && editorTaskPart === `answer-${answerIndex}`;
  const isCorrect = answer.isCorrect;
  const answerSource = isCorrect ? correctans : wronganswers;
  const answerString = answerSource[answer.index];
  // console.log(`ans-${index}`,answer,answerSource);
  return (
    // !isEditing ? (
    <Grid item>
      <TooltipWithOverlay
        title={"Zmień odpowiedź"}
        placement={"right-start"}
        onClick={() => {
          // setTaskToEditWithPart(index, `answer-${answerIndex}`);
          setOpen(true);
        }}
      >
        <Typography
          display={"inline"}
          style={{
            fontWeight: "bold",
          }}
          // className="font-weight-bold"
        >
          {ansChar[answerIndex] + ". "}
        </Typography>
        <Latex>{answerString}</Latex>
      </TooltipWithOverlay>
      <Formik
        enableReinitialize={true}
        initialValues={{ text: answerString }}
        onSubmit={(values, helpers) => {
          // setTimeout(()=>{
          updateStateAndSaveExam((state) => {
            const saveTo = isCorrect ? "correctans" : "wronganswers";
            state.exam.tasks[index].currentAnswers[saveTo][answer.index] =
              values.text;
            return state;
          });
          setOpen(false);
          // },20)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => {
          return (
            <Dialog
              open={open}
              dialogTitle={"Edytuj treść"}
              fullWidth={true}
              maxWidth={"lg"}
              onClose={() => {
                setOpen(false);
              }}
              dialogActionsChildren={[
                <Button
                  color={"transparent"}
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  Anuluj
                </Button>,
                <Button color={"primary"} onClick={handleSubmit}>
                  Zapisz odpowiedź
                </Button>,
              ]}
              // style={{ minHeight: "80vh" }}
            >
              <Form>
                <div style={{ minHeight: "50vh" }}>
                  <Latex>{values.text}</Latex>
                  <Field
                    component={MaterialFormikField}
                    name={"text"}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 3,
                      rowsMax: 10,
                    }}
                    labelText="Treść odpowiedzi"
                  />
                </div>
              </Form>
            </Dialog>
          );
        }}
      </Formik>
    </Grid>
  );
  // )
  //     : (
  //   <Grid item>
  //     <ClickAwayListener onClickAway={() => {}}>
  //       <div style={{ width: "100%" }}>
  //         <Textarea maxRows={4} />
  //       </div>
  //     </ClickAwayListener>
  //   </Grid>
  // ),

  //   ,
  // ];
};

export default TaskAnswerWithEdit;
