import React, { useState } from "react";
import TaskOverlayButton from "./TaskOverlayButton";
import Dialog from "../material_ui_components/CustomModal/CustomModal";
import Button from "../material_ui_components/CustomButtons/Button";
import { Field, Form, Formik } from "formik";
import MaterialFormikField from "../MaterialFormikField";
import InputAdornment from "@material-ui/core/InputAdornment";
import People from "@material-ui/icons/People";
import CustomRadio from "../material_ui_components/CustomRadio/CustomRadio";
import EditIcon from "@material-ui/icons/Edit";
const EditTaskAnswerSpace = (props) => {
  const { updateStateAndSaveExam, task, index } = props;
  const currentAnswers = task.currentAnswers;
  const spaceToSolve = currentAnswers.spaceToSolve || 0;
  const isOtwarte = currentAnswers.isOtwarte || false;
  const [open, setOpen] = useState(false);
  return (
    <>
      <TaskOverlayButton
          tooltip={"Zmień rodzaj odpowiedzi"}
        onClick={() => {
          setOpen(true);
        }}
      >
        <EditIcon fontSize={"small"} />
      </TaskOverlayButton>
      <Dialog
        open={open}
        dialogTitle={"Edycja miejsca pod zadaniem"}
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
          ,
        ]}
      >
        <div style={{ minHeight: "50vh" }}>
          <Formik
            enableReinitialize={true}
            initialValues={{ isOtwarte: isOtwarte, spaceToSolve: spaceToSolve }}
            onSubmit={(values, formikHelpers) => {
              updateStateAndSaveExam((state) => {
                state.exam.tasks[index].currentAnswers.spaceToSolve =
                  values.spaceToSolve;
                state.exam.tasks[index].currentAnswers.isOtwarte =
                  values.isOtwarte;
                return state;
              });
              setOpen(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              // handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setFieldValue,
            }) => {
              return (
                <Form>
                  <Field
                    component={MaterialFormikField}
                    name={"spaceToSolve"}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    labelText="Miejsce na rozwiązanie"
                  />
                  <CustomRadio
                    labelProps={{ label: "Otwarte" }}
                    radioProps={{
                      checked: !!values.isOtwarte,
                      onChange: () => {
                        setFieldValue("isOtwarte", true);
                      },
                    }}
                  />
                  <CustomRadio
                    labelProps={{ label: "Zamkniete" }}
                    radioProps={{
                      checked: !values.isOtwarte,
                      onChange: () => {
                        setFieldValue("isOtwarte", false);
                      },
                    }}
                  />
                  <Button color={"primary"} onClick={handleSubmit}>
                    Zapisz
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </Dialog>
    </>
  );
};

export default EditTaskAnswerSpace;
