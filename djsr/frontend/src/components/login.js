import React, { Component } from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBRow } from "mdbreact";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikMdInput from "./FormikMDInput";
import axiosInstance from "./axiosAPI";
import {Link} from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const user = this.props.appState.user;
    if (!!user) {
      this.props.history.goBack();
    }
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
                  password: "",
                }}
                validationSchema={Yup.object().shape({
                  password: Yup.string()
                    .min(8, "Too Short!")
                    .max(50, "Too Long!")
                    .required(FRS),
                  name: Yup.string()
                    .min(2, "Too Short!")
                    .max(50, "Too Long!")
                    .required(FRS),
                })}
                onSubmit={(values, helpers) => {
                  setTimeout(() => {
                    helpers.setSubmitting(true);
                    axiosInstance
                      .post("/token/obtain/", {
                        username: values.name,
                        password: values.password,
                      })
                      .then((response) => {
                        axiosInstance.defaults.headers["Authorization"] =
                          "JWT " + response.data.access;
                        localStorage.setItem(
                          "access_token",
                          response.data.access
                        );
                        localStorage.setItem(
                          "refresh_token",
                          response.data.refresh
                        );
                        helpers.setSubmitting(false);
                        this.props.checkUser();
                        this.props.history.push("/");
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
                            },
                            false
                          );
                          helpers.setTouched(
                            {
                              name: false,
                              password: false,
                            },
                            false
                          );
                          helpers.setFieldError(
                            "general",
                            "Nierpawidłowa nazwa użytkownika lub hasło"
                          );
                        }
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
                    <p className="h3 text-center mb-4">Zaloguj się</p>
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
                        label="Hasło"
                        icon="fa-lock"
                        errors={errors.password}
                        type="password"
                        name="password"
                        id="password"
                        touched={touched.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        hideInput
                        disableAutocomplete={true}
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
                        Zaloguj
                      </MDBBtn>
                    </div>
                  </Form>
                )}
              </Formik>
              <div className="w-100 text-center">
                <Link to={"/requestresetpassword"}>
                  <MDBBtn>Przypomnij hasło</MDBBtn>
                </Link>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    );
  }
}
export default Login;
