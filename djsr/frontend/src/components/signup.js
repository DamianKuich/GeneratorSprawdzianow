import React, { Component } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBInput,
  MDBRow,
} from "mdbreact";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikMdInput from "./FormikMDInput";
import { axiosInstance, axiosInstanceNoAuth } from "./axiosAPI";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
    };
  }

  render() {
    const FRS = "Pole wymagane";
    return (
      <MDBRow center>
        <MDBCol md="6" sm="8" xs="12" lg="6" xl="4">
          <MDBCard>
            <MDBCardBody className="p-md-5 p-lg-5 p-xl-5">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  password: "",
                  passwordConfirm: "",
                }}
                validationSchema={Yup.object().shape({
                  name: Yup.string()
                    .min(2, "Too Short!")
                    .max(50, "Too Long!")
                    .required(FRS),
                  password: Yup.string()
                    .min(8, "Too Short!")
                    .max(50, "Too Long!")
                    .required(FRS),
                  passwordConfirm: Yup.string()
                    .oneOf([Yup.ref("password")], "Hasła są różne")
                    .required(FRS),
                  email: Yup.string()
                    .email("Nieprawidłowy adres e-mail")
                    .required(FRS),
                })}
                onSubmit={(values, helpers) => {
                  setTimeout(() => {
                    helpers.setSubmitting(true);
                    axiosInstanceNoAuth
                      .post("/user/create/", {
                        username: values.name,
                        password: values.password,
                        email: values.email,
                      })
                      .then((response) => {
                        helpers.setSubmitting(false);
                        this.setState({
                          token: response.data.confirmation_token,
                        });
                        this.props.history.push(`/signupsuccess/${response.data.confirmation_token}`)
                      })
                      .catch((error) => {
                        // console.log("login error", error.response);
                        const errResponse = error.response;
                        helpers.setSubmitting(false);
                        helpers.setValues(
                          {
                            name: "",
                            password: "",
                            passwordConfirm: "",
                            email: "",
                          },
                          false
                        );
                        helpers.setTouched(
                          {
                            name: false,
                            password: false,
                            email: false,
                            passwordConfirm: false,
                          },
                          false
                        );
                        helpers.setFieldError(
                          "general",
                          "Nierpawidłowa nazwa użytkownika lub hasło"
                        );
                      });
                  }, 5000);
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
                    <p className="h3 text-center mb-4">Formularz rejestracji</p>
                    <div className="grey-text">
                      <FormikMdInput
                        label="Nazwa użytkownika"
                        icon="fa-user"
                        errors={errors.name}
                        name="name"
                        id="name"
                        touched={touched.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        disabled={isSubmitting}
                      />
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
                      <FormikMdInput
                        label="Hasło"
                        icon="fa-lock"
                        errors={errors.password}
                        name="password"
                        id="password"
                        touched={touched.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        hideInput
                        disabled={isSubmitting}
                      />
                      <FormikMdInput
                        label="Powtórz hasło"
                        icon="fa-lock"
                        errors={errors.passwordConfirm}
                        name="passwordConfirm"
                        id="passwordConfirm"
                        touched={touched.passwordConfirm}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.passwordConfirm}
                        hideInput
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="text-center">
                      <MDBBtn color="primary" type="submit" disabled={isSubmitting}>
                        Rejestracja
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
export default Signup;
