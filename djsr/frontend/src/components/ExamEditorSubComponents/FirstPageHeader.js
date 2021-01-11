import React from "react";
import Box from "@material-ui/core/Box";
import ExamTitleWithEdit from "./ExamTitleWithEdit";

const FirstPageHeader = (props) => {
  const { maxExamPoints, title } = props;

  return (
    <Box
      // style={{display:"flex",flexDirection:"column"}}
      display={"flex"}
      flexDirection={"column"}
    >
      <ExamTitleWithEdit {...props}/>
      <Box display={"flex"}>
        <Box flexGrow={1}>
          {
            "Imie i nazwisko:................................................................."
          }
        </Box>
        <Box flexShrink={0}>
          {".../"}
          {maxExamPoints}
        </Box>
      </Box>
    </Box>
  );
};

export default FirstPageHeader;
