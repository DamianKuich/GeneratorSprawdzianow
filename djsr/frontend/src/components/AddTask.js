import React, { Component } from "react";
import AxiosInstance, { axiosInstanceNoAuth } from "./axiosAPI";
import Box from "@material-ui/core/Box";
import { Field, Form, Formik, getIn } from "formik";
import axiosInstance from "./axiosAPI";
import tasksParser from "./ExamEditorSubComponents/TaskParser";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "./material_ui_components/CustomCheckBox/CustomCheckbox";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Button from "./material_ui_components/CustomButtons/Button";
import MaterialFormikField from "./MaterialFormikField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: null,
      collapseId: null,
      results: null,
      addTaskResponse: null,
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
          initialValues={{ skills: [] }}
          onSubmit={(values, helpers) => {
            setTimeout(() => {
              // console.log("start 1");
              helpers.setSubmitting(true);
              // console.log("start 2");
              let taskData = {};
              let ansData = {};
              let skills = values.skills;
              let result = [];
              for (let key of skills.keys()) {
                // result.push(key)
                if (!!skills[key]) {
                  result.push(key);
                }
              }
              taskData["skills_id"] = result.join(",");
              taskData["text"] = values.text;
              // taskData["answer_id"] = 1;
              taskData["type"] = values.type;
              taskData["level"] = values.poziom;
              taskData["points"] = values.points;
              taskData["private"] = values.private;
              taskData["wrong_answers"] = values.wrongans;
              taskData["correct_answers"] = values.corrans;
              axiosInstance
                .post("/user/addtask/", taskData)
                .then((response) => {
                  helpers.setSubmitting(false);
                  console.log("response", response);
                  // this.setState({ addTaskResponse: response.data });
                  // return response;
                  this.props.onTaskAdd(response.data[0])
                })
                // .then((answerset) => {
                //     console.log("ansset",answerset)
                //     let newtaskdata = {...taskData,"answer_id":answerset.data[0].id}
                //         // taskData["answer_id"] = answerset.id
                //     // newtaskdata["answer_id"]=answerset.data.id
                //   axiosInstance
                //     .post("/user/addtask/", newtaskdata)
                //     .then((response) => {
                //       helpers.setSubmitting(false);
                //       console.log("response", response);
                //       this.props.onTaskAdd(response.data[0])
                //       // this.setState({ addTaskResponse: response.data });
                //     });
                // });
              // console.log("values",values);
              // console.log("skillsy",result.join(","));
              // axiosInstance
              //   .post("/user/addtask/", taskData)
              //   .then((response) => {
              //     helpers.setSubmitting(false);
              //     console.log("response", response);
              //     // this.setState({
              //     //   results: response.data,
              //     // });
              //     // console.log("parsed Twat",tasksParser(response.data));
              //     // this.props.updateData(tasksParser(response.data));
              //     this.setState({ addTaskResponse: response.data });
              //   });
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
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue,
          }) => {
            console.log(values);
            const handleChange1 = (valueName) => {
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
                                      handleChange1("skills." + skill.id);
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
                                    <ListItemText primary={skill.Skill} />
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
                  <Field
                    component={MaterialFormikField}
                    name={"text"}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      onChange: handleChange,
                      multiline: true,
                      rows: 3,
                      rowsMax: 10,
                    }}
                    labelText="Treść zadania"
                  />
                  <Field
                    component={MaterialFormikField}
                    name={"points"}
                    type={"number"}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      onChange: handleChange,
                    }}
                    labelText="Maksymalna ilość punktów"
                  />
                  <Field
                    component={MaterialFormikField}
                    name={"wrongans"}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      onChange: handleChange,
                      multiline: true,
                      rows: 3,
                      rowsMax: 10,
                    }}
                    labelText="zleodp"
                  />
                  <Field
                    component={MaterialFormikField}
                    name={"corrans"}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      onChange: handleChange,
                      multiline: true,
                      rows: 3,
                      rowsMax: 10,
                    }}
                    labelText="prawodp"
                  />
                  <Box>
                    <FormControl fullWidth>
                      <InputLabel id="poziom">Poziom</InputLabel>
                      <Select
                        labelId="poziom"
                        name={"poziom"}
                        inputProps={{
                          name: "poziom",
                        }}
                        id="poziom-simple-select"
                        value={values.level}
                        onChange={handleChange}
                      >
                        <MenuItem value={0}>Nieznany</MenuItem>
                        <MenuItem value={1}>Podstawowy</MenuItem>
                        <MenuItem value={2}>Rosrzerzony</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl fullWidth>
                      <InputLabel id="type">Typ</InputLabel>
                      <Select
                        labelId="type"
                        id="type-simple-select"
                        value={values.level}
                        inputProps={{
                          name: "type",
                        }}
                        autoWidth
                        onChange={handleChange}
                      >
                        <MenuItem value={0}>krtk odp</MenuItem>
                        <MenuItem value={2}>Otw</MenuItem>
                        <MenuItem value={2}>Zamkn</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl fullWidth>
                      <InputLabel id="pp">Prywatne/publiczne</InputLabel>
                      <Select
                        labelId="pp"
                        id="pp-simple-select"
                        value={values.private}
                        inputProps={{
                          name: "private",
                        }}
                        onChange={handleChange}
                      >
                        <MenuItem value={0}>publiczne</MenuItem>
                        <MenuItem value={1}>prywatne</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
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
                      Dodaj
                    </Button>
                  </Box>
                </Form>
              </>
            );
          }}
        </Formik>
      </Box>
    );
  }
}

export default AddTask;
