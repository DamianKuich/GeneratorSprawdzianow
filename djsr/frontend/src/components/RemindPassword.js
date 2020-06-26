import React, { Component } from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBRow } from "mdbreact";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { axiosInstanceNoAuth } from "./axiosAPI";
import FormikMdInput from "./FormikMDInput";
// import PropTypes from 'prop-types';

class RemindPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      done: null,
    };
  }
  //
  // componentWillMount() {
  //
  // }
  //
  // componentDidMount() {
  //
  // }
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
    if (this.state.done) {
      return (
        <MDBRow center>
          <MDBCol md="6" sm="8" xs="12" lg="6" xl="4">Sprawdz poczte</MDBCol>
        </MDBRow>
      );
    }
    return (
      <MDBRow center>
        <MDBCol md="6" sm="8" xs="12" lg="6" xl="4">
          <MDBCard>
            <MDBCardBody className="p-md-5 p-lg-5 p-xl-5">
              <Formik
                initialValues={{
                  email: "",
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string()
                    .email("Nieprawidłowy adres e-mail")
                    .required("Wymagany dres e-mail"),
                })}
                onSubmit={(values, helpers) => {
                  setTimeout(() => {
                    helpers.setSubmitting(true);
                    axiosInstanceNoAuth
                      .post("/user/resetsend/", {
                        email: values.email,
                      })
                      .then((response) => {
                        helpers.setSubmitting(false);
                        this.setState({
                          done: true,
                        });
                      })
                      .catch((error) => {
                        // console.log("login error", error.response);
                        const errResponse = error.response;
                        helpers.setSubmitting(false);
                        helpers.setValues(
                          {
                            email: "",
                          },
                          false
                        );
                        helpers.setTouched(
                          {
                            email: false,
                          },
                          false
                        );
                        helpers.setFieldError(
                          "general",
                          "Nie isntieje konto o takim adresie E-mail"
                        );
                      });
                  }, 500);
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
                    <p className="h3 text-center mb-4">Przypomnij hasło</p>
                    <div className="grey-text">
                      <FormikMdInput
                        label="Twój adres E-mail"
                        icon="fa-envelope"
                        errors={errors.email}
                        name="email"
                        id="email"
                        touched={touched.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="text-center">
                      <MDBBtn
                        color="primary"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Wyślij
                      </MDBBtn>
                    </div>
                  </Form>
                )}
              </Formik>
              {!!this.state.token && <div>{this.state.token}</div>}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    );
  }
}

// RemindPassword.propTypes = {};

export default RemindPassword;
