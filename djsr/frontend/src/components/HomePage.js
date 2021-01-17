import React from "react";
import Parallax from "./material_ui_components/Parallax/Parallax";
import GridContainer from "./material_ui_components/Grid/GridContainer";
import GridItem from "./material_ui_components/Grid/GridItem";
import Button from "./material_ui_components/CustomButtons/Button";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import styles from "./assets/jss/material-kit-react/views/landingPage.js";
import Paper from "@material-ui/core/Paper";
import parallaxBgImage from "./img/genspr-parralax-bg.png";
import ShortDescription from "./ShortDescription";
import image from "./img/genesprDark.png";
import ProductSection from "./ProductSection";

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
      backgroundColor: "#FEFEFA",
    },

    cardTitle: {
      textAlign: "center",
    },
  };
  return (
    <div>
      {/*<Paper style={bgStyles.paperContainer}>*/}
        <Parallax filter image={parallaxBgImage} >
          <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Story Starts With Us.</h1>
              <h4>
                Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
        </Parallax>
      {/*</Paper>*/}
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
            <ProductSection/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
