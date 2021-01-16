import React from "react";
import Dialog from "../material_ui_components/CustomModal/CustomModal";
import { Field, Formik } from "formik";
import Box from "@material-ui/core/Box";
import Latex from "react-latex";
import MaterialFormikField from "../MaterialFormikField";
import Button from "../material_ui_components/CustomButtons/Button";
const AnswerDialog = (props) => {
  const { open, onFinishEdit, defaultValue, onCancel } = props;
  console.log("Ansdial",props)
  return (
    <Formik
        enableReinitialize={true}
      initialValues={{ text: defaultValue }}
      onSubmit={(values, formikHelpers) => {
        onFinishEdit(values.text);
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
        setFieldValue,
      }) => {
          console.log("ansAddRender",values)
        return (
          <Dialog
            dialogTitle={"Edycja odpowiedzi"}
            open={open}
            onClose={onCancel}
            dialogActionsChildren={[
              <Button color={"transparent"} onClick={onCancel}>
                Anuluj
              </Button>,
              <Button color={"primary"} onClick={handleSubmit}>
                Zakończ
              </Button>,
            ]}
          >
            <Box>
              <Latex>{values.text || " "}</Latex>
              <Field
                component={MaterialFormikField}
                name={"text"}
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  onChange: handleChange,
                  multiline: true,
                  rows: 3,
                  rowsMax: 10,
                }}
                labelText="Treść zadania"
              />
            </Box>
          </Dialog>
        );
      }}
    </Formik>
  );
};

export default AnswerDialog;
