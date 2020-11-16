import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import withStyles from "@material-ui/core/styles/withStyles";
import HelpIcon from "@material-ui/icons/Help";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: "absolute",
    top: 0,
    right: 0,
  },
}));

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

const TaskToolTip = (task) => {
  const classes = useStyles();
  console.log("tasktt",task)
  return (
    <HtmlTooltip
      title={
        <React.Fragment>
          <Typography color="inherit">
            {"Zadanie na poziomie: "}{" "}
            {task.level === 1 ? "podstawowym" : "rozszerzonym"}
          </Typography>
          <Typography color="inherit">
            {"Typ: "}
            {task.type === 2 ? "Zamknięte" : "Otwarte"}
          </Typography>
          <Typography color="inherit">
            {"Proponowana liczba punktów: "}
            {task.points}
          </Typography>
          <Typography color="inherit">
            {"Maks odp. prawidłowych/nieprawidłowych: "}
            {task.answers.correctans.length}
            {"/"}
            {task.answers.wronganswers.length}
          </Typography>

          {/*<em>{"And here's"}</em> <b>{"some"}</b> <u>{"amazing content"}</u>.{" "}*/}
          {/*{"It's very engaging. Right?"}*/}
        </React.Fragment>
      }
    >
      {/*<Fab color="secondary" size={"small"} className={classes.absolute}>*/}
      {/*  ?*/}
      {/*</Fab>*/}
      <Box p={0} m={0} className={classes.absolute}>
        <HelpIcon fontSize={"small"} style={{ color: "green" }} />
      </Box>
    </HtmlTooltip>
  );
};

export default TaskToolTip;
