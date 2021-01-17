import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import { primaryColor } from "../assets/jss/material-kit-react";
import makeStyles from "@material-ui/core/styles/makeStyles";
const eloColor=primaryColor
const useStyles = makeStyles((theme) => {
  selected: {
    color: "red";
  }
});

//todo update indicator on resize https://github.com/mui-org/material-ui/issues/9337
//todo wyglad przycisku od wygenerowania pdf zeby sie wyroznial
const SideMenuTabSelector = ({ handleTabChange, currentTabId, ...props }) => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="default">
      <Tabs
        value={currentTabId}
        onChange={handleTabChange}
        variant={"fullWidth"}
        // style={{color:primaryColor}}
        //   inkBarStyle={{background:primaryColor}}
        TabIndicatorProps={{ style: { background: primaryColor } }}
      >
        <Tab
          label={"Dodaj zadanie"}
          value={"taskSearch"}
          disabled={false}
          classes={{
            selected: classes.selected,
          }}
          // component={<span>elo</span>}
        />
        <Tab
          label={"Wróć do listy egzaminów"}
          value={"goToExamList"}
          disabled={false}
          classes={{
            selected: classes.selected,
          }}
        />
        <Tab
          label={"Pobierz PDF"}
          value={"generatePDF"}
          disabled={false}
          classes={{
            selected: classes.selected,
          }}
        />
      </Tabs>
    </AppBar>
  );
};

export default SideMenuTabSelector;
