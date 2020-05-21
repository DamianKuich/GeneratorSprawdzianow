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
      activeItem: "1",
      isUserChecked: false,
      userInfo: null,
      locked: false,
    };
  }

  componentDidMount() {
    this.props.checkUser((userData) => {
      this.setState({ isUserChecked: true, userInfo: userData });
    });
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
    this.setState({ activeItem: id });
  };
  render() {
    let activeItem = this.state.activeItem;
    let locked = this.state.locked;
    let isUserChecked=this.state.isUserChecked;
    if (!isUserChecked) return <div>Loading</div>
    return (
      <MDBContainer>
        <MDBCard>
          <MDBCardBody>
            <MDBRow className="w-auto">
              <MDBCol xl={"3"} className="border-right">
                <MDBNav className="nav-pills flex-column nav-justified font-weight-bold">
                  <MDBNavItem>
                    <MDBNavLink
                      link
                      to="#"
                      active={this.state.activeItem === "1"}
                      onClick={() => {
                        this.toggle("1");
                      }}
                      role="tab"
                      disabled={locked}
                    >
                      Home
                    </MDBNavLink>
                  </MDBNavItem>
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
                      Profile
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
                      Profile
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
              </MDBCol>
              <MDBCol xl={"9"}>
                <MDBTabContent activeItem={this.state.activeItem}>
                  <MDBTabPane tabId="1" role="tabpanel">
                    <p className="mt-2">
                      <Formik
                        initialValues={{
                          name: this.state.userInfo.username,
                        }}
                        validationSchema={Yup.object().shape({
                          password: Yup.string()
                            .min(8, "Too Short!")
                            .max(50, "Too Long!")
                            .required("Pole wymagane"),
                        })}
                        onSubmit={(values, helpers) => {
                          setTimeout(() => {
                            helpers.setSubmitting(true);
                            axiosInstance
                              .post("/token/obtain/", {
                                username: values.name,
                              })
                              .then((response) => {
                                axiosInstance.defaults.headers[
                                  "Authorization"
                                ] = "JWT " + response.data.access;
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
                                    "general",
                                    "Nazwa jest w użyciu lub jest nieprawidłowa."
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
                            <p className="h3 text-center mb-4">
                              Dane podstawowe
                            </p>
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
                    </p>
                  </MDBTabPane>
                  <MDBTabPane tabId="2" role="tabpanel">
                    <p className="mt-2">
                      Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                      voluptate odit minima. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Nihil odit magnam minima,
                      soluta doloribus reiciendis molestiae placeat unde eos
                      molestias.
                    </p>
                    <p>
                      Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                      voluptate odit minima. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Nihil odit magnam minima,
                      soluta doloribus reiciendis molestiae placeat unde eos
                      molestias.
                    </p>
                  </MDBTabPane>
                  <MDBTabPane tabId="3" role="tabpanel">
                    <p className="mt-2">
                      Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                      voluptate odit minima. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Nihil odit magnam minima,
                      soluta doloribus reiciendis molestiae placeat unde eos
                      molestias.
                    </p>
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
