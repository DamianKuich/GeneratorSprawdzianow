import React, { Component } from "react";
import PropTypes from "prop-types";
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBRow } from "mdbreact";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import axiosInstance, {axiosInstanceNoAuth} from "./axiosAPI";
import FormikMdInput from "./FormikMDInput";


class PasswordReset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSuccessFull: null,
    };
  }

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
    let isSuccessFull =this.state.isSuccessFull;
    if (isSuccessFull !== null) {
      return (
        <MDBRow center>
          <MDBCol md="6" sm="8" xs="12" lg="6" xl="4">
            <MDBCard>
              <MDBCardBody className="p-md-5 p-lg-5 p-xl-5">
                {(isSuccessFull) ? ("Resetowanie hasla zakonczono powodzeniem"):("Nie udało sie zmienic hasła")}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
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
                  password: "",
                  passwordConfirm: "",
                }}
                validationSchema={Yup.object().shape({
                  password: Yup.string()
                    .min(8, "Too Short!")
                    .max(50, "Too Long!")
                    .required("Pole wymagane"),
                  passwordConfirm: Yup.string()
                    .min(8, "Too Short!")
                    .max(50, "Too Long!")
                    .required("Pole wymagane"),
                })}
                onSubmit={(values, helpers) => {
                  setTimeout(() => {
                    helpers.setSubmitting(true);
                    let token = this.props.match.params.token;
                    axiosInstanceNoAuth
                      .post(`/user/passreset/${token}/$`, {
                        password: values.password,
                      })
                      .then((response) => {
                        // axiosInstance.defaults.headers["Authorization"] =
                        //   "JWT " + response.data.access;
                        // localStorage.setItem(
                        //   "access_token",
                        //   response.data.access
                        // );
                        // localStorage.setItem(
                        //   "refresh_token",
                        //   response.data.refresh
                        // );
                        // helpers.setSubmitting(false);
                        // this.props.checkUser();
                        // this.props.history.push("/");
                        this.setState({isSuccessFull:true})
                      })
                      .catch((error) => {
                        // console.log("login error", error.response);
                        // const errResponse = error.response;
                        // helpers.setSubmitting(false);
                        // if (
                        //   errResponse.status === 401 &&
                        //   errResponse.statusText === "Unauthorized"
                        // ) {
                        //   helpers.setValues(
                        //     {
                        //       name: "",
                        //       password: "",
                        //     },
                        //     false
                        //   );
                        //   helpers.setTouched(
                        //     {
                        //       name: false,
                        //       password: false,
                        //     },
                        //     false
                        //   );
                        //   helpers.setFieldError(
                        //     "general",
                        //     "Nieprawidłowa nazwa użytkownika lub hasło"
                        //   );
                        // }
                        this.setState({isSuccessFull:false})
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
                      <FormikMdInput
                        label="Powtorz hasło"
                        icon="fa-lock"
                        errors={errors.passwordConfirm}
                        type="password"
                        name="passwordConfirm"
                        id="passwordConfirm"
                        touched={touched.passwordConfirm}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.passwordConfirm}
                        hideInput
                        disableAutocomplete={true}
                      />
                      {/*{!!errors.general && (*/}
                      {/*  <div className="invalid-feedback d-block pb-4">*/}
                      {/*    {errors.general}*/}
                      {/*  </div>*/}
                      {/*)}*/}
                    </div>
                    <div className="text-center">
                      <MDBBtn
                        color="primary"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Zmień hasło
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

PasswordReset.propTypes = {};

export default PasswordReset;
