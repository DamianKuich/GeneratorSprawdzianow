import React, { Component } from "react";
import PropTypes from "prop-types";
import {MDBBtn, MDBContainer} from "mdbreact";
import { Form, Formik } from "formik";
import FormikMdInput from "./FormikMDInput";
import axiosInstance from "./axiosAPI";

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

    if (!task) return <div>Wybierz zadanie</div>;
    return (
      <MDBContainer>
        <Formik
          enableReinitialize={true}
          initialValues={this.props.task}
          onSubmit={(values, helpers) => {
            if (!!values.imageToUpload) {
              let formData = new FormData();
              formData.append("file", values.imageToUpload);
              axiosInstance.post("/user/addimage/", formData, {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }).then((response)=>{
                  let task = {...values};
                  task.currentDataSet.image = [response.data.id];
                  this.props.updateTask({ ...task });
              });
            }
            else this.props.updateTask({ ...values });
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
                <FormikMdInput
                  label="Treść zadania"
                  errors={errors.text}
                  name="text"
                  id="text"
                  touched={touched.text}
                  onChange={handleChangeAndSubmit}
                  onBlur={handleBlur}
                  value={values.text}
                />
                <input
                    type="number"
                    name="maxPoints"
                    value={values.maxPoints}
                    onChange={handleChangeAndSubmit}
                    onBlur={handleBlur}
                    min={1}
                    max={20}
                />
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      id="inputGroupFileAddon01"
                    >
                      Obrazek do zadania
                    </span>
                  </div>
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="inputGroupFile01"
                      aria-describedby="inputGroupFileAddon01"
                      onChange={(e) => {
                        setFieldValue(
                          "imageToUpload",
                          e.currentTarget.files[0]
                        );
                      }}
                      onBlur={handleBlur}
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="inputGroupFile01"
                    >
                      Wybierz
                    </label>
                  </div>
                </div>
                  <MDBBtn onClick={handleSubmit}>Zapisz</MDBBtn>
              </Form>
            );
          }}
        </Formik>
        {/*<div onClick={()=>{this.elo()}}>{task.text}</div>*/}
      </MDBContainer>
    );
  }
}

TaskEditor.propTypes = {};

export default TaskEditor;
