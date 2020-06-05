import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBNav,
  MDBRow,
  MDBTabContent,
  MDBTabPane,
} from "mdbreact";
import { MDBNavItem, MDBNavLink } from "./MDBLazy/MDBLazyComponents";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import axiosInstance from "./axiosAPI";
import FormikMdInput from "./FormikMDInput";

class UserAccountManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "2",
      isUserChecked: false,
      userInfo: null,
      locked: false,
    };
    this.userDataForm = React.createRef();
    this.userPasswordForm = React.createRef();
    this.userEmailForm = React.createRef();
  }

  checkUser = () => {
    this.props.checkUser((userData) => {
      this.setState({ isUserChecked: true, userInfo: userData });
    });
  };

  componentDidMount() {
    this.checkUser();
  }

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

  toggle = (id) => {
    console.log(this.userDataForm);
    this.userDataForm.current.setFieldValue(
      "name",
      this.props.appState.user.username,
      false
    );
    this.userDataForm.current.setFieldTouched("name", false, false);
    this.userPasswordForm.current.setValues(
      { password: "", passwordConfirm: "", oldPassword: "" },
      false
    );
    this.userPasswordForm.current.setTouched({
      password: false,
      passwordConfirm: false,
      oldPassword: false,
    });
    // this.userEmailForm;
    this.setState({ activeItem: id });
  };
  render() {
    let activeItem = this.state.activeItem;
    let locked = this.state.locked;
    let isUserChecked = this.state.isUserChecked;
    if (!isUserChecked) return <div>Loading</div>;
    return (
      <MDBContainer>
        <MDBCard>
          <MDBCardBody>
            <MDBRow className="w-auto">
              <MDBCol xl={"3"} className="border-right">
                <MDBNav className="nav-pills flex-column nav-justified font-weight-bold">
                  {/*<MDBNavItem>*/}
                  {/*  <MDBNavLink*/}
                  {/*    link*/}
                  {/*    to="#"*/}
                  {/*    active={this.state.activeItem === "1"}*/}
                  {/*    onClick={() => {*/}
                  {/*      this.toggle("1");*/}
                  {/*    }}*/}
                  {/*    role="tab"*/}
                  {/*    disabled={locked}*/}
                  {/*  >*/}
                  {/*    Dane podstawowe*/}
                  {/*  </MDBNavLink>*/}
                  {/*</MDBNavItem>*/}
                  <MDBNavItem>
                    <MDBNavLink
                      link
                      to="#"
                      active={this.state.activeItem === "2"}
                      onClick={() => {
                        this.toggle("2");
                      }}
                      role="tab"
                      disabled={locked}
                    >
                      Zmień hasło
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      link
                      to="#"
                      active={this.state.activeItem === "3"}
                      onClick={() => {
                        this.toggle("3");
                      }}
                      role="tab"
                      disabled={locked}
                    >
                      Zmień adres E-mail
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
              </MDBCol>
              <MDBCol xl={"9"}>
                <MDBTabContent activeItem={this.state.activeItem}>
                  <MDBTabPane tabId="1" role="tabpanel">
                    <Formik
                      // ref={this.userDataForm}
                      innerRef={this.userDataForm}
                      initialValues={{
                        name: this.state.userInfo.username,
                      }}
                      validationSchema={Yup.object().shape({
                        name: Yup.string()
                          .min(3, "Too Short!")
                          .max(50, "Too Long!")
                          .required("Pole wymagane"),
                      })}
                      onSubmit={(values, helpers) => {
                        setTimeout(() => {
                          this.setState({ locked: true });
                          helpers.setSubmitting(true);
                          axiosInstance
                            .put("/user/update/", {
                              username: values.name,
                            })
                            .then((response) => {
                              this.props.setUser(response.data);
                              helpers.setStatus("Pomyslnie zmieniono dane");
                              helpers.setSubmitting(false);
                              this.setState({ locked: false });
                            })
                            .catch((error) => {
                              // console.log("login error", error.response);
                              const errResponse = error.response;
                              helpers.setSubmitting(false);
                              this.setState({ locked: false });
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
                              helpers.setFieldError(
                                "name",
                                "Nazwa jest w użyciu lub jest nieprawidłowa."
                              );
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
                        status,
                      }) => (
                        <Form onSubmit={handleSubmit}>
                          <p className="h3 text-center mb-4">Dane podstawowe</p>
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
                              disabled={isSubmitting || locked}
                            />
                          </div>
                          {!!status && <div>Pomyslnie zmieniono dane</div>}
                          <div className="text-center">
                            <MDBBtn
                              color="primary"
                              type="submit"
                              disabled={isSubmitting || locked}
                            >
                              Zmień
                            </MDBBtn>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </MDBTabPane>
                  <MDBTabPane tabId="2" role="tabpanel">
                    <Formik
                      // ref={this.userDataForm}
                      innerRef={this.userPasswordForm}
                      initialValues={{
                        password: "",
                        passwordConfirm: "",
                        oldPassword: "",
                      }}
                      validationSchema={Yup.object().shape({
                        password: Yup.string()
                          .min(8, "Too Short!")
                          .max(50, "Too Long!")
                          .required("Pole wymagane")
                          .oneOf(
                            [Yup.ref("passwordConfirm")],
                            "Hasła są różne"
                          ),
                        oldPassword: Yup.string()
                          .min(8, "Too Short!")
                          .max(50, "Too Long!")
                          .required("Pole wymagane"),
                        passwordConfirm: Yup.string()
                          .oneOf([Yup.ref("password")], "Hasła są różne")
                          .required("Pole wymagane"),
                      })}
                      onSubmit={(values, helpers) => {
                        setTimeout(() => {
                          this.setState({ locked: true });
                          helpers.setSubmitting(true);
                          axiosInstance
                            .put("/user/update/", {
                              password: values.password,
                              oldpassword: values.oldPassword,
                            })
                            .then((response) => {
                              this.props.setUser(response.data);
                              helpers.setStatus("Pomyslnie zmieniono hasło");
                              helpers.setSubmitting(false);
                              this.setState({ locked: false });
                            })
                            .catch((error) => {
                              // console.log("login error", error.response);
                              const errResponse = error.response;
                              helpers.setSubmitting(false);
                              this.setState({ locked: false });
                              helpers.setValues(
                                {
                                  password: "",
                                  oldPassword: "",
                                  passwordConfirm:""

                                },
                                false
                              );
                              helpers.setTouched(
                                {
                                  password: false,
                                  oldPassword: false,
                                  passwordConfirm:false
                                },
                                false
                              );
                              helpers.setFieldError(
                                "oldPassword",
                                "Podano nieprawidłowe stare hasło"
                              );
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
                        status,
                      }) => (
                        <Form onSubmit={handleSubmit}>
                          {/*{console.log("pass form",values,touched,errors)}*/}
                          <p className="h3 text-center mb-4">Zmień hasło</p>
                          <div className="grey-text">
                            <FormikMdInput
                              label="Stare hasło"
                              icon="fa-lock"
                              errors={errors.oldPassword}
                              name="oldPassword"
                              id="oldPassword"
                              touched={touched.oldPassword}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.oldPassword}
                              disabled={isSubmitting || locked}
                              hideInput
                              type="password"
                            />
                            <FormikMdInput
                              label="Nowe hasło"
                              icon="fa-lock"
                              errors={errors.password}
                              name="password"
                              id="password"
                              type="password"
                              touched={touched.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.password}
                              disabled={isSubmitting || locked}
                              hideInput
                            />
                            <FormikMdInput
                              label="Powtórz nowe hasło"
                              icon="fa-lock"
                              errors={errors.passwordConfirm}
                              name="passwordConfirm"
                              id="passwordConfirm"
                              type="password"
                              touched={touched.passwordConfirm}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.passwordConfirm}
                              hideInput
                              disabled={isSubmitting || locked}
                            />
                          </div>
                          {!!status && <div>Pomyslnie zmieniono hasło</div>}
                          <div className="text-center">
                            <MDBBtn
                              color="primary"
                              type="submit"
                              disabled={isSubmitting || locked}
                            >
                              Zmień
                            </MDBBtn>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </MDBTabPane>
                  <MDBTabPane tabId="3" role="tabpanel">
                    <Formik
                      // ref={this.userDataForm}
                      innerRef={this.userEmailForm}
                      initialValues={{
                        email: this.state.userInfo.email,
                      }}
                      validationSchema={Yup.object().shape({
                        email: Yup.string()
                    .email("Nieprawidłowy adres e-mail")
                    .required("Pole wymagane"),
                      })}
                      onSubmit={(values, helpers) => {
                        setTimeout(() => {
                          this.setState({ locked: true });
                          helpers.setSubmitting(true);
                          axiosInstance
                            .put("/user/update/", {
                              email: values.email,
                            })
                            .then((response) => {
                              this.props.setUser(response.data);
                              helpers.setStatus("Pomyslnie zmieniono email");
                              helpers.setSubmitting(false);
                              this.setState({ locked: false });
                            })
                            .catch((error) => {
                              // console.log("login error", error.response);
                              const errResponse = error.response;
                              helpers.setSubmitting(false);
                              this.setState({ locked: false });
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
                                "name",
                                "E-mail jest w użyciu lub jest nieprawidłowy."
                              );
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
                        status,
                      }) => (
                        <Form onSubmit={handleSubmit}>
                          <p className="h3 text-center mb-4">Zmień adres E-mail</p>
                          <div className="grey-text">
                            <FormikMdInput
                              label="Adres e-mail"
                              icon="fa-envelope"
                              errors={errors.email}
                              name="email"
                              id="email"
                              touched={touched.name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                              disabled={isSubmitting || locked}
                            />
                          </div>
                          {!!status && <div>{status}</div>}
                          <div className="text-center">
                            <MDBBtn
                              color="primary"
                              type="submit"
                              disabled={isSubmitting || locked}
                            >
                              Zmień
                            </MDBBtn>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </MDBTabPane>
                </MDBTabContent>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    );
  }
}

UserAccountManager.propTypes = {};

export default UserAccountManager;
