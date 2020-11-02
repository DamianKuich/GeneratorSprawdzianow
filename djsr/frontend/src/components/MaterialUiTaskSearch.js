import React, { Component } from "react";
import axiosInstance, { axiosInstanceNoAuth } from "./axiosAPI";
import { MDBBtn, MDBCollapse, MDBContainer, MDBIcon } from "mdbreact";
import FormikMdInput from "./FormikMDInput";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import { Form, Formik, getIn } from "formik";
import * as Yup from "yup";
import Paper from "@material-ui/core/Paper";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";

class MaterialUiTaskSearch extends Component {
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
      <div style={{ width: "100%" }}>
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
              axiosInstance
                .post("/user/tasks/", {
                  skill: result.join(","),
                })
                .then((response) => {
                  helpers.setSubmitting(false);
                  console.log("response", response);
                  // this.setState({
                  //   results: response.data,
                  // });
                  this.props.updateData(response.data);
                })
                .catch((error) => {
                  // console.log("login error", error.response);
                  const errResponse = error.response;
                  helpers.setSubmitting(false);
                });
            }, 200);
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
            setFieldValue,
            fi,
          }) => (
              <>
                <Form onSubmit={handleSubmit}>
                  <List>
                    {sections.map((section) => {
                      const handleChange = (valueName) => {
                        setFieldValue(valueName, !getIn(values, valueName));
                      };
                      return (
                        <>
                          <ListItem
                            // onClick={() => {
                            //   this.toggleCollapse("section-" + section.id);
                            // }}
                          >
                            <ListItemSecondaryAction>
                              <Checkbox
                                edge="start"
                                checked={false}
                                onChange={() => {
                                  console.log("elochkbox");
                                }}
                              />
                            </ListItemSecondaryAction>
                            <ListItemText
                              primary={section.Section}
                              onClick={() => {
                                this.toggleCollapse("section-" + section.id);
                              }}
                            />
                            {/*{section.Section}*/}
                            {/*<MDBIcon*/}
                            {/*  icon={*/}
                            {/*    collapseId === "section-" + section.id*/}
                            {/*      ? "angle-up"*/}
                            {/*      : "angle-down"*/}
                            {/*  }*/}
                            {/*/>*/}
                          </ListItem>
                          <Collapse
                            in={"section-" + section.id === collapseId}
                            unmountOnExit
                            // isOpen={collapseId}
                            // className="border-left border-right border-bottom p-2"
                          >
                            <List component="div" disablePadding>
                              {section.skill.map((skill) => {
                                return (
                                  <ListItem
                                    onClick={() => {
                                      handleChange("skills." + skill.id);
                                    }}
                                  >
                                    <ListItemIcon>
                                      <Checkbox
                                        edge="start"
                                        checked={
                                          !!getIn(values, "skills." + skill.id)
                                        }
                                        tabIndex={-1}
                                        disableRipple
                                        // inputProps={{
                                        //   "aria-labelledby": labelId,
                                        // }}
                                      />
                                    </ListItemIcon>
                                    <ListItemText
                                      // id={labelId}
                                      primary={skill.Skill}
                                    />
                                    {/*<input*/}
                                    {/*  type="checkbox"*/}
                                    {/*  className="custom-control-input"*/}
                                    {/*  id={*/}
                                    {/*    "skill-id-" +*/}
                                    {/*    skill.id +*/}
                                    {/*    "-" +*/}
                                    {/*    section.id*/}
                                    {/*  }*/}
                                    {/*  value={true}*/}
                                    {/*  name={"skills." + skill.id}*/}
                                    {/*  onChange={handleChange}*/}
                                    {/*  onBlur={handleBlur}*/}
                                    {/*  disabled={isSubmitting}*/}
                                    {/*/>*/}
                                    {/*<label*/}
                                    {/*  className="custom-control-label"*/}
                                    {/*  htmlFor={*/}
                                    {/*    "skill-id-" +*/}
                                    {/*    skill.id +*/}
                                    {/*    "-" +*/}
                                    {/*    section.id*/}
                                    {/*  }*/}
                                    {/*>*/}
                                    {/*  {skill.Skill}*/}
                                    {/*</label>*/}
                                  </ListItem>
                                );
                              })}
                            </List>
                          </Collapse>
                          {/*{console.log("values", values, values.skills.keys())}*/}
                        </>
                      );
                    })}
                  </List>
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
              </>
          )}
        </Formik>
      </div>
    );
  }
}

export default MaterialUiTaskSearch;
