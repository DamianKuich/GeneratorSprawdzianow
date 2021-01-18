import React, { memo, useEffect, useState } from "react";
import axiosInstance, { axiosInstanceNoAuth } from "../axiosAPI";
import Box from "@material-ui/core/Box";
import tasksParser from "../ExamEditorSubComponents/TaskParser";
import { Form, Formik, getIn } from "formik";
import { usePagination } from "@material-ui/lab/Pagination";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "../material_ui_components/CustomCheckBox/CustomCheckbox";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Button from "../material_ui_components/CustomButtons/Button";
import CustomRadio from "../material_ui_components/CustomRadio/CustomRadio";
import Pagination from "../material_ui_components/Pagination/Pagination";

const SearchForm = (props) => {
    const {setSkills, setPage}=props
  const [sections, setSections] = useState(null);
  useEffect(() => {
    axiosInstanceNoAuth
      .get("/user/sections2/")
      .then((response) => {
        const parsed = response.data.map((section) => {
          section.skill = section.skilll;
          return section;
        });
        setSections(parsed);
      })
      .catch((error) => {
        setSections(false);
      });
  });
  if (sections === null) {
    return <div>ładowanie</div>;
  } else if (sections === false) {
    return <div>Przepraszamy wystąpił błąd, odświerz przeglądarke</div>;
  }
  return (
    <Box>
      <Formik
        initialValues={{
          skills: []
        }}
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
            if (!!this.props.allSkillsByDefault && result.length === 0) {
              sections.map((section) => {
                return section.skill.map((skill) => {
                  result.push(skill.id);
                  return skill;
                });
              });
            }
            // console.log("values",values);
            // console.log("skillsy",result.join(","));
            // axiosInstance
            //   .post("/user/tasks/", {
            //     skill: result.join(","),
            //   })
            //   .then((response) => {
            //     helpers.setSubmitting(false);
            //     console.log("response", response);
            //     // this.setState({
            //     //   results: response.data,
            //     // });
            //     // console.log("parsed Twat",tasksParser(response.data));
            //     helpers.setFieldValue("maxPage", parseInt(response.data.pages));
            //     this.props.updateData(tasksParser(response.data.tasks));
            //   })
            //   .catch((error) => {
            //     // console.log("login error", error.response);
            //     const errResponse = error.response;
            //     helpers.setSubmitting(false);
            //   });
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
                        <ListItem>
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
                        </ListItem>
                        <Collapse
                          in={"section-" + section.id === collapseId}
                          unmountOnExit
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
                                    />
                                  </ListItemIcon>
                                  <ListItemText
                                    // id={labelId}
                                    primary={skill.Skill}
                                  />
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
                  <CustomRadio
                    labelProps={{ label: "Tylko moje zadania" }}
                    radioProps={{
                      checked: values.myTasks === 1,
                      onChange: () => {
                        setFieldValue("myTasks", 1);
                      },
                    }}
                  />
                  <CustomRadio
                    labelProps={{ label: "Wszystkie" }}
                    radioProps={{
                      checked: values.myTasks === 0,
                      onChange: () => {
                        setFieldValue("myTasks", 0);
                      },
                    }}
                  />
                </Box>
                {!!values.maxPage && (
                  <Box style={{ display: "flex", justifyContent: "center" }}>
                    <Pagination
                      pages={paginationItems.map(
                        ({ page, type, selected, ...item }, index) => {
                          switch (true) {
                            case type === "start-ellipsis" ||
                              type === "end-ellipsis":
                              return {
                                text: "...",
                                disabled: isSubmitting,
                                ...item,
                              };
                            case type === "page":
                              return {
                                text: page,
                                active: selected,
                                disabled: isSubmitting,
                                ...item,
                              };
                            case type === "previous":
                              return {
                                text: "<",
                                disabled: isSubmitting,
                                ...item,
                              };
                            case type === "next":
                              return {
                                text: ">",
                                disabled: isSubmitting,
                                ...item,
                              };
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
};

export default memo(SearchForm);
