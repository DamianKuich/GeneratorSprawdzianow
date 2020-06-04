import React, { Component } from "react";
import PropTypes from "prop-types";
import { MDBContainer } from "mdbreact";
import { Form, Formik } from "formik";
import FormikMdInput from "./FormikMDInput";

class TaskEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: null,
    };
  }

  setTask = (task) => {};

  elo = () => {
    let task = JSON.parse(JSON.stringify(this.props.task));
    task.text = task.text + "1";
    this.props.updateTask(task);
  };

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
              this.props.updateTask({...values})
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
