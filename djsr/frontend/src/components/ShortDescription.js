import React from "react";

import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "./material_ui_components/Grid/GridContainer.js";
import GridItem from "./material_ui_components/Grid/GridItem.js";
import InfoArea from "./material_ui_components/InfoArea/InfoArea.js";

import styles from "./assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

const ShortDescription = () => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <InfoArea
            title="Free Chat"
            description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
            icon={Chat}
            iconColor="info"
            vertical
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <InfoArea
            title="Verified Users"
            description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
            icon={VerifiedUser}
            iconColor="success"
            vertical
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <InfoArea
            title="Fingerprint"
            description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
            icon={Fingerprint}
            iconColor="danger"
            vertical
          />
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default ShortDescription;
