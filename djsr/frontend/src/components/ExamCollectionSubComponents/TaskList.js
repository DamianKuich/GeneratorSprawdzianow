import React, { memo, useCallback, useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import axiosInstance from "../axiosAPI";
import tasksParser from "../ExamEditorSubComponents/TaskParser";
import Paper from "@material-ui/core/Paper";
import Pagination from "../material_ui_components/Pagination/Pagination";
import {usePagination} from "@material-ui/lab/Pagination";
const TaskList = (props) => {
  const { page, skills, setPage } = props;
  const [maxPage, setMaxPage] = useState(null);
  const [tasks, setTasks] = useState(null);
  // console.log("TaskList",setMaxPage,setTasks)
  useEffect(() => {
    const fetch = () => {
        setTasks(null)
      axiosInstance
        .post("/user/tasks/", {
          skill: skills.join(","),
          pagenr: page,
          nroftasks: 10,
          myTasks: 1,
        })
        .then((response) => {
          // helpers.setSubmitting(false);
          console.log("response", response, setMaxPage, setTasks);
          setMaxPage(parseInt(response.data.pages));
          setTasks(tasksParser(response.data.tasks));
        })
        .catch((error) => {
          console.log(error);
          setTasks(false);
        });
    };
    fetch();
  }, [page, skills]);
  const handlePageChange = (event, newPageNumber) => {
              console.log("pageChange", newPageNumber);
              if (
                page !== newPageNumber &&
                newPageNumber <= maxPage &&
                newPageNumber > 0
              ) {
                  setPage(newPageNumber)
                // setFieldValue("currentPage", newPageNumber);
                // handleSubmit();
              }
            };
  const { items: paginationItems } = usePagination({
              count: maxPage || 1,
              page: page,
              onChange: handlePageChange,
            });
  if (tasks===null){
      return <div>loading</div>
  }
  return (
    <Box>
      <Paper>
        {/*{page},{maxPage},{JSON.stringify(skills)}*/}
        {!!maxPage && !!tasks && (
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Pagination
              pages={paginationItems.map(
                ({ page, type, selected, ...item }, index) => {
                  switch (true) {
                    case type === "start-ellipsis" || type === "end-ellipsis":
                      return { text: "...", disabled: !!tasks, ...item };
                    case type === "page":
                      return {
                        text: page,
                        active: selected,
                        disabled: !!tasks,
                        ...item,
                      };
                    case type === "previous":
                      return { text: "<", disabled: !!tasks, ...item };
                    case type === "next":
                      return { text: ">", disabled: !!tasks, ...item };
                    default:
                      return { text: "XD" };
                  }
                }
              )}
            />
          </Box>
        )}
      </Paper>
      <Box>
        {!!tasks &&
          tasks.map((task) => (
            <Paper key={`task-${task.id}`}>{JSON.stringify(task)}</Paper>
          ))}
      </Box>
    </Box>
  );
};

export default memo(TaskList);
