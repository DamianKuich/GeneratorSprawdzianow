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
import CircularProgress from "@material-ui/core/CircularProgress";
import DialogContentText from "@material-ui/core/DialogContentText";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Latex from "react-latex";
import AnswerDialog from "./ExamEditorSubComponents/AnswerDialog";
import EditIcon from "@material-ui/icons/Edit";
import * as Yup from "yup";
import InputAdornment from "@material-ui/core/InputAdornment";
class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: null,
      collapseId: null,
      results: null,
      addTaskResponse: null,
      openDialog: false,
      defaultValue: null,
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
    if (!sections)
      return (
        <Box display={"flex"} justifyContent={"center"}>
          <CircularProgress style={{ color: "purple" }} />
        </Box>
      );
    return (
      <>
        <DialogContentText>
          Wybierz jakie umiejętnośći ma sprwadzać zadanie.
        </DialogContentText>
        <Box
          component={"div"}
          m={1}
          // display="flex" justifyContent="center"
        >
          <Formik
            initialValues={{
              text: "",
              skills: [],
              wrongans: [],
              corrans: [],
              points: 1,
              level: 1,
              type: 1,
              private: 1,
                timetosolve:1
            }}
            validationSchema={Yup.object().shape({
              text: Yup.string().min(1, "Brak treści").required("Brak treści"),
              skills: Yup.array()
                .min(1, "Proszę podać conajmniej 1 umiejętność")
                .required("Proszę podać conajmniej 1 umiejętność"),
              wrongans: Yup.array()
                .min(1, "Proszę podać conajmniej 1 nieprawidłową odpowiedź")
                .required("Proszę podać conajmniej 1 nieprawidłową odpowiedź"),
              corrans: Yup.array()
                .min(1, "Proszę podać conajmniej 1 prawidłową odpowiedź")
                .required("Proszę podać conajmniej 1 prawidłową odpowiedź"),
              points: Yup.number()
                .required("Pole wymagane")
                .positive("Proszę podać dodatnią wartość")
                .integer("Wartość musi być liczbą całkowitą")
                .max(100, "Maksymalna liczba punktów to 100"),
              timetosolve: Yup.number()
                .required("Pole wymagane")
                .positive("Proszę podać dodatnią wartość")
                .integer("Wartość musi być liczbą całkowitą")
                .max(100, "Maksymalna czas na rozwiązanie to 120 minut"),
            })}
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
                taskData["level"] = values.level;
                taskData["points"] = values.points;
                taskData["private"] = values.private;
                taskData["timetosolve"]=values.timetosolve;
                taskData["wrong_answers"] = values.wrongans.join(";");
                taskData["correct_answers"] = values.corrans.join(";");
                console.log("ddtask", taskData);
                axiosInstance
                  .post("/user/addtask/", taskData)
                  .then((response) => {
                    helpers.setSubmitting(false);
                    console.log("response", response);
                    // this.setState({ addTaskResponse: response.data });
                    // return response;
                    this.props.onTaskAdd(response.data[0]);
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
              console.log("TaskAddVal",values)
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
                                            !!getIn(
                                              values,
                                              "skills." + skill.id
                                            )
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
                      {errors.skills && <div style={{color:"red"}}>{errors.skills}</div>}
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
                      name={"timetosolve"}
                      type={"number"}
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        onChange: handleChange,
                        startAdornment: (
                          <InputAdornment
                          // position="end"
                          >
                            Minuty:
                          </InputAdornment>
                        ),
                      }}
                      labelText="Czas na rozwiązanie"
                    />
                    {/*<Field*/}
                    {/*  component={MaterialFormikField}*/}
                    {/*  name={"wrongans"}*/}
                    {/*  formControlProps={{*/}
                    {/*    fullWidth: true,*/}
                    {/*  }}*/}
                    {/*  inputProps={{*/}
                    {/*    onChange: handleChange,*/}
                    {/*    multiline: true,*/}
                    {/*    rows: 3,*/}
                    {/*    rowsMax: 10,*/}
                    {/*  }}*/}
                    {/*  labelText="zleodp"*/}
                    {/*/>*/}
                    <Box>Nieprawidłowe odpowiedzi</Box>
                    {values.wrongans.length > 0 ? (
                      <Box>
                        {values.wrongans.map((wrongAns, ansIndex) => {
                          return (
                            <Box>
                              <DeleteForeverIcon
                                onClick={() => {
                                  console.log("remAns", ansIndex);
                                  let newValues = [...values.wrongans];
                                  newValues = newValues.filter(
                                    (_, arrIndex) => {
                                      return ansIndex !== arrIndex;
                                    }
                                  );
                                  setFieldValue(`wrongans`, newValues);
                                }}
                              />
                              <EditIcon
                                onClick={() => {
                                  this.setState((state) => {
                                    state.openDialog = true;
                                    state.defaultValue = wrongAns;
                                    state.onFinish = (newValue) => {
                                      setFieldValue(
                                        `wrongans.${ansIndex}`,
                                        newValue
                                      );
                                      this.setState({ openDialog: false });
                                    };
                                    state.onCancel = () => {
                                      this.setState({ openDialog: false });
                                    };
                                    return state;
                                  });
                                }}
                              />
                              <Latex>{wrongAns}</Latex>
                            </Box>
                          );
                        })}
                      </Box>
                    ) : (
                      <Box>Brak nieprawidłowych odpowiedzi</Box>
                    )}
                    {!!errors.wrongans && (
                      <div style={{ color: "red" }}>{errors.wrongans}</div>
                    )}
                    <Button
                      color={"primary"}
                      onClick={() => {
                        this.setState((state) => {
                          state.openDialog = true;
                          state.defaultValue = "";
                          state.onFinish = (newValue) => {
                            setFieldValue("wrongans", [
                              ...values.wrongans,
                              newValue,
                            ]);
                            this.setState({ openDialog: false });
                          };
                          state.onCancel = () => {
                            this.setState({ openDialog: false });
                          };
                          return state;
                        });
                      }}
                    >
                      Dodaj nieprawidłową odpowiedź
                    </Button>
                    <Box>Prawidłowe odpowiedzi</Box>
                    {values.corrans.length > 0 ? (
                      <Box>
                        {values.corrans.map((corrAns, ansIndex) => {
                          return (
                            <Box>
                              <DeleteForeverIcon
                                onClick={() => {
                                  console.log("remAns", ansIndex);
                                  let newValues = [...values.corrans];
                                  newValues = newValues.filter(
                                    (_, arrIndex) => {
                                      return ansIndex !== arrIndex;
                                    }
                                  );
                                  setFieldValue(`corrans`, newValues);
                                }}
                              />
                              <EditIcon
                                onClick={() => {
                                  this.setState((state) => {
                                    state.openDialog = true;
                                    state.defaultValue = corrAns;
                                    state.onFinish = (newValue) => {
                                      setFieldValue(
                                        `corrans.${ansIndex}`,
                                        newValue
                                      );
                                      this.setState({ openDialog: false });
                                    };
                                    state.onCancel = () => {
                                      this.setState({ openDialog: false });
                                    };
                                    return state;
                                  });
                                }}
                              />
                              <Latex>{corrAns}</Latex>
                            </Box>
                          );
                        })}
                      </Box>
                    ) : (
                      <Box>Brak prawidłowych odpowiedzi</Box>
                    )}
                    {!!errors.corrans && (
                      <div style={{ color: "red" }}>{errors.corrans}</div>
                    )}
                    <Button
                      color={"primary"}
                      onClick={() => {
                        this.setState((state) => {
                          state.openDialog = true;
                          state.defaultValue = "";
                          state.onFinish = (newValue) => {
                            setFieldValue("corrans", [
                              ...values.wrongans,
                              newValue,
                            ]);
                            this.setState({ openDialog: false });
                          };
                          state.onCancel = () => {
                            this.setState({ openDialog: false });
                          };
                          return state;
                        });
                      }}
                    >
                      Dodaj prawidłową odpowiedź
                    </Button>
                    {/*<Field*/}
                    {/*  component={MaterialFormikField}*/}
                    {/*  name={"corrans"}*/}
                    {/*  formControlProps={{*/}
                    {/*    fullWidth: true,*/}
                    {/*  }}*/}
                    {/*  inputProps={{*/}
                    {/*    onChange: handleChange,*/}
                    {/*    multiline: true,*/}
                    {/*    rows: 3,*/}
                    {/*    rowsMax: 10,*/}
                    {/*  }}*/}
                    {/*  labelText="prawodp"*/}
                    {/*/>*/}
                    <Box>
                      <FormControl fullWidth>
                        <InputLabel id="poziom">Poziom</InputLabel>
                        <Select
                          labelId="poziom"
                          name={"poziom"}
                          inputProps={{
                            name: "level",
                          }}
                          id="poziom-simple-select"
                          value={values.level}
                          onChange={handleChange}
                        >
                          {/*<MenuItem value={0}>Nieznany</MenuItem>*/}
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
                          value={values.type}
                          inputProps={{
                            name: "type",
                          }}
                          autoWidth
                          onChange={handleChange}
                        >
                          <MenuItem value={0}>krtk odp</MenuItem>
                          <MenuItem value={1}>Otwarte</MenuItem>
                          <MenuItem value={2}>Zamknięte</MenuItem>
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
                          <MenuItem value={0}>Publiczne</MenuItem>
                          <MenuItem value={1}>Prywatne</MenuItem>
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
                    <AnswerDialog
                      open={!!this.state.openDialog}
                      onCancel={this.state.onCancel}
                      onFinishEdit={this.state.onFinish}
                      defaultValue={this.state.defaultValue}
                    />
                  </Form>
                </>
              );
            }}
          </Formik>
        </Box>
      </>
    );
  }
}

export default AddTask;
