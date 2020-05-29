import React, { Component } from "react";
import axiosInstance, { axiosInstanceNoAuth } from "./axiosAPI";
import { MDBBtn, MDBCollapse, MDBContainer, MDBIcon } from "mdbreact";
import FormikMdInput from "./FormikMDInput";
import { Form, Formik } from "formik";

class TaskSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: null,
      collapseId: null,
      results: null,
    };
  }
  componentDidMount() {
    axiosInstanceNoAuth
      .get("/user/sections/")
      .then((response) => {
        this.setState({ sections: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  toggleCollapse = (id) => {
    this.setState({ collapseId: id });
  };
  compileSections = () => {
    let sections = this.state.sections;
  };

  render() {
    let sections = this.state.sections;
    let collapseId = this.state.collapseId;
    let results = this.state.results;
    console.log("sections", sections);
    if (!sections) return <div>loading</div>;
    return (
      <div>
        <Formik
          initialValues={{ skills: [] }}
          onSubmit={(values, helpers) => {
            setTimeout(() => {
              // console.log("start 1");
              helpers.setSubmitting(true);
              // console.log("start 2");
              let skills = values.skills;
              let result = [];
              for (let key of skills.keys()) {
                // result.push(key)
                if (!!skills[key]) {
                  result.push(key);
                }
              }
              // console.log("values",values);
              // console.log("skillsy",result.join(","));
              axiosInstanceNoAuth
                .post("/user/tasks/", {
                  skill: result.join(","),
                })
                .then((response) => {
                  helpers.setSubmitting(false);
                  console.log("response", response);
                  this.setState({
                    results: response.data,
                  });
                })
                .catch((error) => {
                  // console.log("login error", error.response);
                  const errResponse = error.response;
                  helpers.setSubmitting(false);
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
            <MDBContainer>
              <MDBContainer className="md-accordion mt-5">
                <Form onSubmit={handleSubmit}>
                  {sections.map((section) => {
                    return (
                      <>
                        <div
                          className={
                            "d-flex justify-content-between " +
                            "p-2 mt-3 border-right border-top border-left " +
                                 (collapseId === "section-" + section.id
                                ? ""
                                : "border-bottom")
                          }
                          onClick={() => {
                            this.toggleCollapse("section-" + section.id);
                          }}
                        >
                          {section.Section_name}
                          <MDBIcon
                            icon={
                              collapseId === "section-" + section.id
                                ? "angle-up"
                                : "angle-down"
                            }
                          />
                        </div>
                        <MDBCollapse
                          id={"section-" + section.id}
                          isOpen={collapseId}
                          className="border-left border-right border-bottom p-2"
                        >
                          {section.skill.map((skill) => {
                            return (
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id={"skill-id-" + skill.id + "-" + section.id}
                                  value={true}
                                  name={"skills." + skill.id}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  disabled={isSubmitting}
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor={
                                    "skill-id-" + skill.id + "-" + section.id
                                  }
                                >
                                  {skill.Skill_name}
                                </label>
                              </div>
                            );
                          })}
                        </MDBCollapse>
                        {/*{console.log("values", values, values.skills.keys())}*/}
                      </>
                    );
                  })}
                  <MDBBtn onClick={handleSubmit} disabled={isSubmitting}>
                    Szukaj
                    {isSubmitting && (
                      <div
                        className="spinner-border spinner-border-sm"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                    )}
                  </MDBBtn>
                </Form>
              </MDBContainer>
            </MDBContainer>
          )}
        </Formik>
        <MDBContainer className="mt-3">
          {Array.isArray(results) &&
            results.length > 0 &&
            results.map((task) => <div>{task.text}</div>)}
          {Array.isArray(results) && results.length === 0 && (
            <div>Brak zadań o podanych kryteriach</div>
          )}
        </MDBContainer>
      </div>
    );
  }
}

export default TaskSearch;
