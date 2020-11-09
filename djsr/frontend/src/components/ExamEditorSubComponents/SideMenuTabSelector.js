import React from 'react';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";

//todo update indicator on resize https://github.com/mui-org/material-ui/issues/9337
//todo wyglad przycisku od wygenerowania pdf zeby sie wyroznial
const SideMenuTabSelector = ({handleTabChange,currentTabId,...props}) => {
    return (
        <AppBar position="static" color="default">
              <Tabs
                value={currentTabId}
                indicatorColor={"primary"}
                textColor={"primary"}
                onChange={handleTabChange}
                variant={"fullWidth"}
              >
                <Tab
                  label={"Dodaj zadanie"}
                  value={"taskSearch"}
                  disabled={false}
                />
                <Tab
                  label={"Edycja zadania"}
                  value={"taskEdit"}
                  disabled={false}
                />
                <Tab
                  label={"Pobierz PDF"}
                  value={"generatePDF"}
                  disabled={false}
                />
              </Tabs>
            </AppBar>
    );
};

export default SideMenuTabSelector;