import React, { memo, useCallback, useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import axiosInstance from "../axiosAPI";
import tasksParser from "../ExamEditorSubComponents/TaskParser";
import Paper from "@material-ui/core/Paper";
import Pagination from "../material_ui_components/Pagination/Pagination";
import { usePagination } from "@material-ui/lab/Pagination";
import CircularProgress from "@material-ui/core/CircularProgress";
import Latex from "react-latex";
import TaskToolTip from "../ExamEditorSubComponents/TaskToolTip";
import Tooltip from "@material-ui/core/Tooltip";
import TaskListElement from "./TaskListElement";

const TaskList = (props) => {
  const { page, skills, setPage } = props;
  const [maxPage, setMaxPage] = useState(null);
  const [tasks, setTasks] = useState(null);
  // console.log("TaskList",setMaxPage,setTasks)
  const fetch = useCallback(() => {
    setTasks(null);
    axiosInstance
      .post(
        "/user/tasks/",
        {
          skill: skills.join(","),
          pagenr: page,
          nroftasks: 10,
          myTasks: 1,
        }
        // { timeout: 120000 }
      )
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
  }, [skills, page]);
  useEffect(() => {
    fetch();
  }, [page, skills]);
  const handlePageChange = (event, newPageNumber) => {
    console.log("pageChange", newPageNumber);
    if (
      page !== newPageNumber &&
      newPageNumber <= maxPage &&
      newPageNumber > 0
    ) {
      setPage(newPageNumber);
      // setFieldValue("currentPage", newPageNumber);
      // handleSubmit();
    }
  };
  const { items: paginationItems } = usePagination({
    count: maxPage || 1,
    page: page,
    onChange: handlePageChange,
  });
  if (tasks === null) {
    return (
      <Box>
        <Box>
          <CircularProgress />
        </Box>
      </Box>
    );
  }
  if (tasks === false) {
    return (
      <Box>Nie udało się pobrać listy zadań :( . Odśwież przeglądarkę.</Box>
    );
  }
  return (
    <Box>
      <Box mt={3} pt={"20px"} clone>
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
                        return { text: "?" };
                    }
                  }
                )}
              />
            </Box>
          )}
        </Paper>
      </Box>
      <Box>
        {!!tasks &&
          tasks.map((task) => (
              <TaskListElement task={task} fetch={fetch}/>
            // <Tooltip title={"Kliknij aby edytować zadanie"} arrow placement={"top"}>
            // <Box mt={3} p={3} clone>
            //   <Paper
            //   // pb={3}
            //   //   p={3}
            //
            //   // borderBottom={1}
            //   // className="border-right border-left border-bottom p-2"
            //   >
            //     <Box style={{ position: "relative" }}>
            //       <Box pb={2}>
            //         <Latex>{task.text}</Latex>
            //       </Box>
            //       <Box>
            //         {task.answers.correctans.map((correctans) => {
            //           // console.log("correctans", correctans);
            //           return (
            //             <span style={{ color: "green" }}>
            //               <Latex>{correctans}</Latex>,{" "}
            //             </span>
            //           );
            //         })}
            //         {task.answers.wronganswers.map((wronganswer) => {
            //           // console.log("wronganswer", wronganswer);
            //           return (
            //             <span style={{ color: "red" }}>
            //               <Latex>{wronganswer}</Latex>,{" "}
            //             </span>
            //           );
            //         })}
            //       </Box>
            //       <TaskToolTip task={task} />
            //     </Box>
            //   </Paper>
            // </Box>
            // </Tooltip>
          ))}
      </Box>
    </Box>
  );
};

export default memo(TaskList);
