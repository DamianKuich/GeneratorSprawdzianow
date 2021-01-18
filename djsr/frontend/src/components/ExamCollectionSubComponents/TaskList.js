import React, { memo, useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import axiosInstance from "../axiosAPI";
import tasksParser from "../ExamEditorSubComponents/TaskParser";

const TaskList = (props) => {
  const { page, skills, setPage } = props;
  const { maxPage, setMaxPage } = useState(null);
  const { tasks, setTasks } = useState(null);
  useEffect(() => {
    const fetch = () => {
      // setMaxPage(null);
        let result = [];
              for (let key of skills.keys()) {
                // result.push(key)
                if (!!skills[key]) {
                  result.push(key);
                }
              }
      axiosInstance
        .post("/user/tasks/", {
          skill: result.join(","),
          pagenr: page,
          nroftasks: 10,
          myTasks: 1,
        })
        .then((response) => {
          // helpers.setSubmitting(false);
          console.log("response", response);
          setMaxPage(parseInt(response.data.pages));
          setTasks(tasksParser(response.data.tasks));
          // this.setState({
          //   results: response.data,
          // });
          // console.log("parsed Twat",tasksParser(response.data));
          // helpers.setFieldValue(
          //   "maxPage",
          //   parseInt(response.data.pages)
          // );
          // this.props.updateData(tasksParser(response.data.tasks));
        })
        .catch((error) => {
          setTasks(false);
          // console.log("login error", error.response);
          // const errResponse = error.response;
          // helpers.setSubmitting(false);
        });
    };
    fetch();
  }, [page, skills]);
  return (
    <Box>
      <Box>
        {page},{maxPage},{JSON.stringify(skills)}
      </Box>
      <Box>
        {!!tasks && tasks.map((task) => <Box>{JSON.stringify(task)}</Box>)}
      </Box>
    </Box>
  );
};

export default memo(TaskList);
