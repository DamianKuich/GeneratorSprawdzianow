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
import axiosInstance from "./axiosAPI";
class Signup extends Component {
  constructor(props) {
    super(props);
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
                    axiosInstance
                      .post("/user/create/", {
                        username: values.name,
                        password: values.password,
                        email: values.email,
                      })
                      .then((response) => {
                        helpers.setSubmitting(false);
                      })
                      .catch((error) => {
                        // console.log("login error", error.response);
                        const errResponse = error.response;
                        helpers.setSubmitting(false);
                        if (
                          errResponse.status === 401 &&
                          errResponse.statusText === "Unauthorized"
                        ) {
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
                        }
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
                      />
                    </div>
                    <div className="text-center">
                      <MDBBtn color="primary" type="submit">
                        Rejestracja
                      </MDBBtn>
                    </div>
                  </Form>
                )}
              </Formik>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    );
  }
}
export default Signup;
