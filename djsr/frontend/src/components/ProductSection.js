import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import ListAltIcon from '@material-ui/icons/ListAlt';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import PrintOutlinedIcon from '@material-ui/icons/PrintOutlined';
// core components
import GridContainer from "./material_ui_components/Grid/GridContainer.js";
import GridItem from "./material_ui_components/Grid/GridItem.js";
import InfoArea from "./material_ui_components/InfoArea/InfoArea.js";

import styles from "./assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Gen-Mat</h2>
          <h5 className={classes.description}>
            Gen-Mat to nowy serwis pozwalający na generację sprawdzianów
            Utwórz sprawdzian, a następnie utwórz sprawdziań korzystając z puli dostępnych zadań lub dodaj swoje własne zadania
            Załóż konto już teraz!





          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Wybierz działy"
              description="Wybierz działy, z których chcesz utworzyć sprawdzian."
              icon={ListAltOutlinedIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Dostosuj sprawdzian"
              description="Dodaj wybrane zadania, otwarte lub zamknięte"
              icon={EditOutlinedIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Wydrukuj i sprawdzaj"
              description=""
              icon={PrintOutlinedIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
