import React, { Component } from "react";
import axiosInstance, { axiosInstanceNoAuth } from "./axiosAPI";
import FormikMdInput from "./FormikMDInput";
import { usePagination } from "@material-ui/lab/Pagination";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Pagination from "./material_ui_components/Pagination/Pagination";
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
import Checkbox from "./material_ui_components/CustomCheckBox/CustomCheckbox";
import tasksParser from "./ExamEditorSubComponents/TaskParser";
import Button from "./material_ui_components/CustomButtons/Button";
import { Container } from "@material-ui/core";
import Box from "@material-ui/core/Box";

class MaterialUiTaskSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: null,
      collapseId: null,
      results: null,
      // currentPage:null,
    };
  }
  componentDidMount() {
    axiosInstanceNoAuth
      .get("/user/sections2/")
      .then((response) => {
        const parsed = response.data.map((section) => {
          section.skill = section.skilll;
          return section;
        });
        this.setState({ sections: parsed });
        // const parsed= response.data.map((section)=>{
        //   section.skill=section.skilll
        //   return section
        // })
        // this.setState({ sections: response.data });
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
    console.log(this.props, "TaskSearch Props");
    console.log("sections", sections);
    if (!sections) return <div>loading</div>;
    return (
      <Box
        component={"div"}
        m={1}
        // display="flex" justifyContent="center"
      >
        <Formik
          initialValues={{ skills: [], currentPage: 1, maxPage: null }}
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
                  pagenr: values.currentPage,
                  nroftasks: 10,
                })
                .then((response) => {
                  helpers.setSubmitting(false);
                  console.log("response", response);
                  // this.setState({
                  //   results: response.data,
                  // });
                  // console.log("parsed Twat",tasksParser(response.data));
                  helpers.setFieldValue(
                    "maxPage",
                    parseInt(response.data.pages)
                  );
                  this.props.updateData(tasksParser(response.data.tasks));
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
            // handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue,
          }) => {
            const handleChange = (valueName) => {
              setFieldValue(valueName, !getIn(values, valueName));
            };
            const sectionBooleanValue = (parsedSection) => {
              console.log("sectionBooleanValue", parsedSection);
              const sectionSkillsValue = parsedSection.skill.map(
                (skill) => !!getIn(values, "skills." + skill.id)
              );
              return sectionSkillsValue.reduce((prevValue, nextValue) => {
                console.log("id" + parsedSection.id, prevValue, nextValue);
                return prevValue && nextValue;
              });
            };
            const handleSectionChange = (parsedSection) => {
              this.toggleCollapse("section-" + parsedSection.id);
              const newValue = !sectionBooleanValue(parsedSection);
              const skillsValueNames = parsedSection.skill.map(
                (skill) => "skills." + skill.id
              );
              for (const valueName of skillsValueNames) {
                setFieldValue(valueName, newValue);
              }
            };
            const handlePageChange = (event, page) => {
              console.log("pageChange", page);
              if (
                values.currentPage !== page &&
                page <= values.maxPage &&
                page > 0 &&
                  !isSubmitting
              ) {
                setFieldValue("currentPage", page);
                handleSubmit();
              }
            };
            const { items: paginationItems } = usePagination({
              count: values.maxPage || 1,
              page: values.currentPage,
              onChange: handlePageChange,
            });
            return (
              <>
                <Form onSubmit={handleSubmit}>
                  <List>
                    {sections.map((section) => {
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
                                checked={sectionBooleanValue(section)}
                                onChange={() => {
                                  handleSectionChange(section);
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
                  {/*<MDBBtn onClick={handleSubmit} disabled={isSubmitting}>*/}
                  {/*  Szukaj*/}
                  {/*  {isSubmitting && (*/}
                  {/*    <div*/}
                  {/*      className="spinner-border spinner-border-sm"*/}
                  {/*      role="status"*/}
                  {/*    >*/}
                  {/*      <span className="sr-only">Loading...</span>*/}
                  {/*    </div>*/}
                  {/*  )}*/}
                  {/*</MDBBtn>*/}
                  <Box
                    component={"div"}
                    m={1}
                    display="flex"
                    justifyContent="center"
                  >
                    <Button
                      color="primary"
                      size="sm"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                    >
                      Szukaj
                    </Button>
                  </Box>
                  {!!values.maxPage && (
                    <Box
                        style={{display:"flex",justifyContent:"center"}}
                    >
                      <Pagination
                        pages={paginationItems.map(
                          ({ page, type, selected, ...item }, index) => {
                            switch (true) {
                              case type === "start-ellipsis" ||
                                type === "end-ellipsis":
                                return { text: "...",disabled:isSubmitting, ...item };
                              case type === "page":
                                return {
                                  text: page,
                                  active: selected,
                                  disabled:isSubmitting,
                                  ...item,
                                };
                              case type === "previous":
                                return { text: "<",
                                  disabled:isSubmitting,...item };
                              case type === "next":
                                return { text: ">",
                                  disabled:isSubmitting,...item };
                              default:
                                return { text: "XD" };
                            }
                          }
                        )}
                      />
                    </Box>
                  )}
                </Form>
              </>
            );
          }}
        </Formik>
      </Box>
    );
  }
}

export default MaterialUiTaskSearch;
