import React from "react";
import Parallax from "./material_ui_components/Parallax/Parallax";
import GridContainer from "./material_ui_components/Grid/GridContainer";
import GridItem from "./material_ui_components/Grid/GridItem";
import Button from "./material_ui_components/CustomButtons/Button";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames"
import styles from "./assets/jss/material-kit-react/views/landingPage.js";
import Paper from '@material-ui/core/Paper';
import parallaxBgImage from "./img/genspr-parralax-bg.png";
import ShortDescription from "./ShortDescription";
import image from "./img/genesprDark.png";

const useStyles = makeStyles(styles);

const HomePage = (props) => {
  const classes = useStyles();
  const { ...rest } = props;
  
const bgStyles = {
  paperContainer: {
      backgroundImage: `url(${image})`,
      
      minHeight: 1000,

     
     


     
  },
  examCardContainer: {
    width: 700,
    backgroundColor: '#FEFEFA',

    
},

  cardTitle: {
    textAlign:'center'
  }

};
  return (
    <div>
      <Paper style={bgStyles.paperContainer}>
      <Parallax >
        
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Generator Sprawdzianów</h1>
              <h4>
              “Gen-Mat” jest to nowy serwis do generowania sprawdzianów z matematyki.
Zalety serwisu:
- wybór zadań z naszej bazy
- możliwość dodania własnego zadania
- możliwość pobrania sprawdzianu w formacie PDF
              </h4>
              <br />
          
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      </Paper>

    </div>
  );
};

export default HomePage;
