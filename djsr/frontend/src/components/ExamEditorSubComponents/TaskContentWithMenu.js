import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import TaskOverlay from "./TaskOverlay";
import Latex from "react-latex";
import TextArea from "react-autosize-textarea";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { axiosInstanceNoAuth } from "../axiosAPI";
import CardHeader from "../material_ui_components/Card/CardHeader";
import CardBody from "../material_ui_components/Card/CardBody";
import MaterialFormikField from "../MaterialFormikField";
import InputAdornment from "@material-ui/core/InputAdornment";
import People from "@material-ui/icons/People";
import CardFooter from "../material_ui_components/Card/CardFooter";
import Button from "../material_ui_components/CustomButtons/Button";
import TaskOverlayButton from "./TaskOverlayButton";

const TaskContentWithMenu = ({
  content,
  taskIndex,
  editorTaskIndex,
  editorTaskPart,
  setTaskToEditWithPart,
  updateTaskText,
}) => {
  const [isEditingOld, setEditingOld] = useState(false);
  const isEditing = taskIndex === editorTaskIndex && editorTaskPart === "text";
  console.log("taskoverlay",taskIndex,editorTaskIndex,editorTaskPart,isEditing)
  return (
    <TaskOverlay
        forceOverlay={isEditing}
      menuComponents={
        isEditing
          ? [
              <TaskOverlayButton
                onClick={() => {
                  setTaskToEditWithPart(null, null);
                }}
              >
                Zakończ Edycje
              </TaskOverlayButton>,
            ]
          : [
              <TaskOverlayButton
                onClick={() => {
                  setTaskToEditWithPart(taskIndex, "text");
                }}
              >
                Edytuj
              </TaskOverlayButton>,
            ]
      }
    >
      <span className="font-weight-bold">
        {taskIndex + 1}
        {". "}
      </span>
      {!isEditing ? (
        <Latex>{content}</Latex>
      ) : (
        <Formik
          initialValues={{
            "task-text": content,
          }}
          enableReinitialize={true}
          onSubmit={(values, helpers) => {
            // setTimeout(() => {}, 5000);
            updateTaskText(taskIndex, values["task-text"]);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            submitForm,
            isSubmitting,
          }) => {
            const handleChangeAndSubmit = (e) => {
              handleChange(e);
              submitForm();
            };
            return (
              <form onSubmit={handleSubmit}>
                <TextArea
                  name={"task-text"}
                  id={"task-text"}
                  onChange={handleChangeAndSubmit}
                  value={values["task-text"]}
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    display: "inline",
                    width: "100%",
                    resize: "none",
                    outline: "none",
                    overflow: "auto",
                  }}
                />
              </form>
            );
          }}
        </Formik>
      )}
    </TaskOverlay>
  );
};

export default TaskContentWithMenu;
