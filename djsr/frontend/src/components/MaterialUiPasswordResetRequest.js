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

import styles from "./assets/jss/material-kit-react/views/loginPage.js";

import image from "./img/genspr-parralax-bg.png";
import * as Yup from "yup";
import axiosInstance, { axiosInstanceNoAuth } from "./axiosAPI";
import { Formik, Field } from "formik";
import MaterialFormikField from "./MaterialFormikField";

const useStyles = makeStyles(styles);

const MaterialUiPasswordResetRequest = (props) => {
  const FRS = "Pole wymagane";
  const user = props.appState.user;
  const [editView, setEditView] = React.useState("email");


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
              {editView=="email" ? (
        
        <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          passwordConfirm: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Nieprawidłowy adres e-mail")
            .required(FRS),
        })}
        onSubmit={(values, helpers) => {
          setTimeout(() => {
            helpers.setSubmitting(true);
            axiosInstanceNoAuth
            .post("/user/resetsend/", {
                email: values.email,
              })
              .then((response) => {
                helpers.setSubmitting(false);
                this.setState({
                  token: response.data.confirmation_token,
                });
                this.props.history.push(
                  `/signupsuccess/${response.data.confirmation_token}`
                );
              })
              .catch((error) => {
                // console.log("login error", error.response);
                const errResponse = error.response;
                helpers.setSubmitting(false);
                helpers.setValues(
                  {
                    email: "",
                  },
                  false
                );
                helpers.setTouched(
                  {
                    email: false,
                   
                  },
                  false
                );
                helpers.setFieldError(
                  "general",
                  "brak maila"
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
              <h4>Przypomnij hasło</h4>
              
            </CardHeader>
            <CardBody>
                <Field
                component={MaterialFormikField}
                name={"email"}
                formControlProps={{
                  fullWidth: true,
                }}
                labelText="E-mail"
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <People className={classes.inputIconsColor} />
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
                Przypomnij hasło
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

export default MaterialUiPasswordResetRequest;
