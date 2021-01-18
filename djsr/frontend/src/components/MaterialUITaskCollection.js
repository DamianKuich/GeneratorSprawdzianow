import React, { useCallback, useEffect, useState } from "react";
import { axiosInstanceNoAuth } from "./axiosAPI";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "./material_ui_components/CustomCheckBox/CustomCheckbox";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Form, getIn } from "formik";
import TaskList from "./ExamCollectionSubComponents/TaskList";
import { flatten } from "lodash/array";

const MaterialUiTaskCollection = (props) => {
  const [page, setPage] = useState(1);
  const [sections, setSections] = useState(null);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [collapse, setCollapse] = useState(null);
  const setSkill = useCallback((index, value) => {
    setSelectedSkills((prev) => {
      let next = [...prev];
      next[index] = value;
      return next;
    });
  }, []);
  const sectionBooleanValue = useCallback(
    (parsedSection) => {
      console.log("sectionBooleanValue", parsedSection);
      const sectionSkillsValue = parsedSection.skill.map(
        // (skill) => !!getIn(values, "skills." + skill.id)
        (skill) => !!selectedSkills[skill.id]
      );
      return sectionSkillsValue.reduce((prevValue, nextValue) => {
        console.log("id" + parsedSection.id, prevValue, nextValue);
        return prevValue && nextValue;
      }, true);
    },
    [selectedSkills]
  );
  const handleSectionChange = useCallback(
    (parsedSection) => {
      // this.toggleCollapse("section-" + parsedSection.id);
      setCollapse("section-" + parsedSection.id);
      const newValue = !sectionBooleanValue(parsedSection);
      const skillsValueIndexes = parsedSection.skill.map((skill) => skill.id);
      setSelectedSkills((prev) => {
        let next = [...prev];
        for (const valueIndex of skillsValueIndexes) {
          // setFieldValue(valueName, newValue);
          next[valueIndex] = newValue;
        }
        return next;
      });
      setPage(1);
    },
    [sectionBooleanValue, selectedSkills]
  );
  useEffect(() => {
    const fetchSections = () => {
      console.log("useeffect");
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
    };
    fetchSections();
  }, []);
  const allPossibleSkills =!!sections && flatten(
    sections.map((section) => {
      return section.skill.map((skill) => {
        return skill.id;
      });
    })
  );
  let selectedAllSkills = [];
  for (let index in allPossibleSkills) {
    selectedAllSkills[index] = true;
  }

  const skills = selectedSkills.length > 0 ? selectedSkills : selectedAllSkills;
  if (sections === null) {
    return <Box>ładowanie</Box>;
  } else if (sections === false) {
    return <Box>Przepraszamy wystąpił błąd, odświerz strone</Box>;
  }
  return (
    <Box mt={10}>
      <Box>
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
                      setCollapse("section-" + section.id);
                    }}
                  />
                </ListItem>
                <Collapse
                  in={"section-" + section.id === collapse}
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {section.skill.map((skill) => {
                      return (
                        <ListItem
                          onClick={() => {
                            // handleChange("skills." + skill.id);
                            setSkill(skill.id, !selectedSkills[skill.id]);
                            setPage(1);
                          }}
                        >
                          <ListItemIcon>
                            <Checkbox
                              edge="start"
                              // checked={!!getIn(values, "skills." + skill.id)}
                              checked={!!selectedSkills[skill.id]}
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
      </Box>
      <TaskList skills={skills} page={page} />
    </Box>
  );
};

export default MaterialUiTaskCollection;
