import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import LockIcon from "@material-ui/icons/Lock";

import Header from "./material_ui_components/Header/Header.js";
import HeaderLinks from "./material_ui_components/Header/HeaderLinks.js";
import Footer from "./material_ui_components/Footer/Footer.js";
import GridContainer from "./material_ui_components/Grid/GridContainer.js";
import GridItem from "./material_ui_components/Grid/GridItem.js";
import Button from "././material_ui_components/CustomButtons/Button.js";
import Card from "./material_ui_components/Card/Card.js";
import CardBody from "./material_ui_components/Card/CardBody.js";
import CardHeader from "./material_ui_components/Card/CardHeader.js";
import CardFooter from "./material_ui_components/Card/CardFooter.js";
import CustomInput from "./material_ui_components/CustomInput/CustomInput.js";
import { useParams } from "react-router";
import styles from "./assets/jss/material-kit-react/views/loginPage.js";
import image from "./img/genspr-parralax-bg.png";
import * as Yup from "yup";
import axiosInstance, { axiosInstanceNoAuth } from "./axiosAPI";
import { Formik, Field } from "formik";
import MaterialFormikField from "./MaterialFormikField";
import { string } from "prop-types";
import taskParser from './AutoGeneTaskParser'
import { useHistory } from "react-router-dom";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(styles);



const Fenerator = (props) => {
  const FRS = "Pole wymagane";
  const user = props.appState.user;

  const [editView, setEditView] = React.useState("password");
  const [parsedTasks, setParsedTasks] = React.useState(null);
  const strongToken = useParams().id;
  console.log(strongToken)
  const history = useHistory();

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>

{editView=="password" ? (
        
        <Formik
        initialValues={{
            ileotw: "0",
            ilezamk: "0",
            level: "0",
            skills: "0"
        }}
        validationSchema={Yup.object().shape({
            ileotw: Yup.string()
            .required("Pole wymagane"),
             

            ilezamk: Yup.string()
              .required("Pole wymagane"),
              level: Yup.string()
              .required("Pole wymagane"),
              skills: Yup.string()
              .required("Pole wymagane"),
          })}
          onSubmit={(values, helpers) => {
            setTimeout(() => {
              helpers.setSubmitting(true);
              axiosInstance
                .post(`/user/getrandomtasks/`, {
                ileotw: values.ileotw,
                ilezamk: values.ilezamk,
                level:values.level,
                skills:values.skills
              })
                .then((response) => {
                    
                   let randomtasks = JSON.stringify(taskParser(response.data))
                    
                  console.log(randomtasks)
                  console.log(strongToken)
                   axiosInstance.put(`/user/maketest/`, {
                    id:strongToken,
                    tasks:randomtasks
                  }).then((response)=>{
                    history.push(`/editor/${strongToken}`);
                  })


                })
                .catch((error) => {
                  helpers.setStatus("Podano nieprawidłowe aktualne hasło")
                  console.log("chngpass error", error.response);
                  const errResponse = error.response;
                  helpers.setSubmitting(false);
                  this.setState({ locked: false });
                  helpers.setValues(
                    {
                      ileotw: "",
                      ilezamk:"",
                      level:"",
                      skills:"",

                    },
                    false
                  );
                  helpers.setTouched(
                    {
                      ileotw: false,

                      ilezamk:false,
                      level:false,
                      skills:false,
                    },
                    false
                  );
                  helpers.setFieldError(
                    "oldPassword",
                    "Podano nieprawidłowe stare hasło"
                  );

                });
            }, 5000);
          }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className={classes.form}>
            {console.log(touched, errors)}
            <CardHeader
              color="primary"
              className={classes.cardHeader}
            >
              <h4>Wygeneruj sprawdzian</h4>
              
            </CardHeader>
            <CardBody>

            <Field
                component={MaterialFormikField}
                name={"ileotw"}
                formControlProps={{
                  fullWidth: true,
                }}
                labelText="Ilość zadań otwartych"
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                     
                    </InputAdornment>
                  ),
                }}
              />
            <Field
                component={MaterialFormikField}
                name={"ilezamk"}
                formControlProps={{
                  fullWidth: true,
                }}
                labelText="Ilość zadań zamkniętych"
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      
                    </InputAdornment>
                  ),
                }}
              />
                          <Field as ="select"

                component={MaterialFormikField}
                name={"level"}
                formControlProps={{
                  fullWidth: true,
                }}
                labelText="poziom trudności"
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      
                    </InputAdornment>
                  ),
                }}
              >
                
                </Field>
             
              
              
                          <Field
                component={MaterialFormikField}
                name={"skills"}
                formControlProps={{
                  fullWidth: true,
                }}
                labelText="Umiejętności"
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                     
                    </InputAdornment>
                  ),
                }}
              />          
            </CardBody>
            <CardFooter className={classes.cardFooter}>
              <Button
                simple
                color="primary"
                size="lg"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Wygeneruj sprawdzian
              </Button>
            </CardFooter>
          </form>
        )}
      </Formik>
 
        ) : (
          <>
          </>
        )}
                
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

export default Fenerator;