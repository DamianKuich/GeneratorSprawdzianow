import React, { Component } from "react";
import PropTypes from "prop-types";
import { MDBBtn, MDBContainer } from "mdbreact";
import { Field, Form, Formik } from "formik";
import FormikMdInput from "./FormikMDInput";
import axiosInstance from "./axiosAPI";
import MaterialFormikField from "./MaterialFormikField";
import InputAdornment from "@material-ui/core/InputAdornment";
import People from "@material-ui/icons/People";
import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

class TaskEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: null,
    };
  }

  setTask = (task) => {};

  // elo = () => {
  //   let task = JSON.parse(JSON.stringify(this.props.task));
  //   task.text = task.text + "1";
  //   this.props.updateTask(task);
  // };

  render() {
    let task = this.props.task;
    console.log("TE", task);
    //todo walidacja formularza od edycji zadania
    if (!task) return <div>Wybierz zadanie</div>;
    return (
      <div style={{minHeight:"100%"}}>
        <Formik
          enableReinitialize={true}
          initialValues={this.props.task}
          onSubmit={(values, helpers) => {
            if (!!values.imageToUpload) {
              let formData = new FormData();
              formData.append("file", values.imageToUpload);
              axiosInstance
                .post("/user/addimage/", formData, {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                })
                .then((response) => {
                  let task = { ...values };
                  task.currentDataSet.image = [response.data.id];
                  this.props.updateTask({ ...task });
                });
            } else this.props.updateTask({ ...values });
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
            submitForm,
            setFieldValue,
          }) => {
            let handleChangeAndSubmit = (e) => {
              handleChange(e);
              submitForm();
            };
            return (
              <Form>
                <Field
                  component={MaterialFormikField}
                  name={"text"}
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    onChange: handleChangeAndSubmit,
                  }}
                  labelText="Treść zadania"
                />
                <Field
                  component={MaterialFormikField}
                  name={"maxPoints"}
                  type={"number"}
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    onChange: handleChangeAndSubmit,
                  }}
                  labelText="Maksymalna ilość punktów"
                />
                <Button variant="contained" component="label">
                  Wybierz zdjęcie
                  <input
                    type="file"
                    name={"imageToUpload"}
                    style={{ display: "none" }}
                    onChange={(e) => {
                      setFieldValue("imageToUpload", e.currentTarget.files[0]);
                    }}
                  />
                </Button>
                <Button onClick={handleSubmit}>Zapisz obrazek</Button>
              </Form>
            );
          }}
        </Formik>
        {/*<div onClick={()=>{this.elo()}}>{task.text}</div>*/}
      </div>
    );
  }
}

TaskEditor.propTypes = {};

export default TaskEditor;
