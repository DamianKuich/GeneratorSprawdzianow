import React from "react";
import Parallax from "./material_ui_components/Parallax/Parallax";
import GridContainer from "./material_ui_components/Grid/GridContainer";
import GridItem from "./material_ui_components/Grid/GridItem";
import Button from "./material_ui_components/CustomButtons/Button";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames"
import styles from "./assets/jss/material-kit-react/views/landingPage.js";

import parallaxBgImage from "./img/genspr-parralax-bg.png";
import ShortDescription from "./ShortDescription";

const useStyles = makeStyles(styles);

const HomePage = (props) => {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <>
      <Parallax filter image={parallaxBgImage}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Generator Sprawdzianów</h1>
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
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ShortDescription/>
        </div>
      </div>
    </>
  );
};

export default HomePage;
