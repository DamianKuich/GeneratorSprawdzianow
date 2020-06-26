import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdbreact";
import axiosInstance from "./axiosAPI";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikMdInput from "./FormikMDInput";
import { Link } from "react-router-dom";

class UserExams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exams: null,
    };
  }

  updateExams = () => {
    this.setState({ exams: null });
    axiosInstance
      .get("/user/tests/")
      .then((response) => {
        console.log("UE update response", response, "exams", response.data);
        this.setState({ exams: response.data });
      })
      .catch((error) => {
        console.log("UE update error response", error);
      });
  };
  addExam = (exam) => {
    this.setState((state) => {
      state.exams = [exam].concat(state.exams);
      return state;
    });
  };
  createExamCopy = (exam) => {
    axiosInstance
      .post("/user/maketest/", {
        name: exam.name + "-kopia",
        tasks: exam.tasks,
      })
      .then((response) => {
        this.addExam(response.data[0]);
      });
  };
  // componentWillMount() {
  //
  // }
  //
  componentDidMount() {
    this.updateExams();
  }
  //
  // componentWillReceiveProps(nextProps) {
  //
  // }
  //
  // shouldComponentUpdate(nextProps, nextState) {
  //
  // }
  //
  // componentWillUpdate(nextProps, nextState) {
  //
  // }
  //
  // componentDidUpdate(prevProps, prevState) {
  //
  // }
  //
  // componentWillUnmount() {
  //
  // }

  render() {
    let exams = this.state.exams;
    if (!exams) {
      return (
        <MDBContainer>
          <div>Ladowanie</div>
        </MDBContainer>
      );
    }
    return (
      <MDBContainer>
        <div className="w-100 h1-responsive text-center mb-5">
          Moje sprawdziany
        </div>
        <MDBRow>
          <MDBCol size={3}>
            <MDBCard className="w-100 mb-5">
              <MDBCardBody>
                <MDBCardTitle>Dodaj Sprawdzian</MDBCardTitle>
                <Formik
                  initialValues={{
                    name: "",
                  }}
                  validationSchema={Yup.object().shape({
                    name: Yup.string()
                      .min(2, "Nazwa za krotka")
                      .max(50, "Nazwa za dluga")
                      .required("Pole wymagane"),
                  })}
                  onSubmit={(values, helpers) => {
                    setTimeout(() => {
                      helpers.setSubmitting(true);
                      axiosInstance
                        .post("/user/maketest/", {
                          name: values.name,
                          tasks: "",
                        })
                        .then((response) => {
                          console.log("UE create response", response);
                          this.addExam(response.data[0]);
                          helpers.setSubmitting(false);
                          // this.props.history.push("/");
                        })
                        .catch((error) => {
                          // console.log("login error", error.response);
                          const errResponse = error.response;
                          helpers.setSubmitting(false);
                          helpers.setValues(
                            {
                              name: "",
                            },
                            false
                          );
                          helpers.setTouched(
                            {
                              name: false,
                            },
                            false
                          );
                          helpers.setFieldError("general", "Nazwa w uzyciu");
                        });
                    }, 400);
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
                  }) => (
                    <Form onSubmit={handleSubmit}>
                      <div className="grey-text">
                        <FormikMdInput
                          label="Nazwa sprawdzianu"
                          errors={errors.name}
                          name="name"
                          id="name"
                          touched={touched.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          disabled={isSubmitting}
                        />
                        {!!errors.general && (
                          <div className="invalid-feedback d-block pb-4">
                            {errors.general}
                          </div>
                        )}
                      </div>
                      <div className="text-center">
                        <MDBBtn
                          color="primary"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          Zapisz
                        </MDBBtn>
                      </div>
                    </Form>
                  )}
                </Formik>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          {exams.map((exam) => {
            return (
              <MDBCol size={3}>
                <MDBCard className="w-100 mb-5">
                  <MDBCardBody className="text-center">
                    <MDBCardTitle>{exam.name}</MDBCardTitle>
                    <Link to={"/editor/" + exam.id}>
                      <MDBBtn>Edytuj</MDBBtn>
                    </Link>
                    <MDBBtn
                      onClick={() => {
                        this.createExamCopy(exam);
                      }}
                    >
                      Utworz kopie
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            );
          })}
        </MDBRow>
      </MDBContainer>
    );
  }
}

UserExams.propTypes = {};

export default UserExams;
