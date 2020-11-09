import React from "react";
import Header from "./material_ui_components/Header/Header";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "react-router-dom";

import Button from "./material_ui_components/CustomButtons/Button.js";

import styles from "./assets/jss/material-kit-react/components/headerLinksStyle";
import CustomDropdown from "./material_ui_components/CustomDropdown/CustomDropdown";
import { Apps, CloudDownload } from "@material-ui/icons";
import PersonIcon from "@material-ui/icons/Person";
import CircularProgress from "@material-ui/core/CircularProgress";
import {MDBDropdownItem} from "mdbreact";
const useStyles = makeStyles(styles);

const HeaderLinks = (props) => {

  const classes = useStyles();
  const userInfo = props.appState.user;
  const userLogout = props.userLogout;
  return (
    <List className={classes.list}>
      {userInfo === null && (
        <ListItem className={classes.listItem} alignItems={"center"}>
          <Button
            className={classes.navLink}
            color={"transparent"}
            target="_blank"
            disabled
          >
            <CircularProgress color={"primary"} size={20} />
          </Button>
        </ListItem>
      )}
      {userInfo === false && (
        <>
          <ListItem className={classes.listItem}>
            <Link to={"/login"} className={classes.navLink}>
              Logowanie
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link to={"/signup"} className={classes.navLink}>
              Rejestracja
            </Link>
          </ListItem>
        </>
      )}
      {!!userInfo && (
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            buttonText={userInfo.name}
            buttonProps={{
              className: classes.navLink,
              color: "transparent",
            }}
            buttonIcon={PersonIcon}
            dropdownList={[
              <Link to="/userexams" className={classes.dropdownLink}>
                Moje Sprawdziany
              </Link>,
              <Link to="/myaccount" className={classes.dropdownLink}>
                Zarządzaj kontem
              </Link>,
                <span className={classes.dropdownLink} onClick={userLogout}>Wyloguj</span>
            ]}
          />
        </ListItem>
      )}
    </List>
  );
};
const MaterialUiNavbar = (props) => {
  console.log("navbarprops",props,/^\/editor\//.test(props.location.pathname))
  if (/^\/editor\//.test(props.location.pathname)){
    console.log("triggered nb");
    return null;
  }
  const user = props.appState.user;
  return (
    <Header
      brand="Generator Sprawdzianów"
      fixed
      rightLinks={<HeaderLinks {...props} />}
      color="transparent"
      changeColorOnScroll={{ height: 400, color: "white" }}
    />
  );
};

export default MaterialUiNavbar;
