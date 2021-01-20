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
import { useSnackbar } from 'notistack';
import LoadingScreenB from "./LoadingForButtons"

const useStyles = makeStyles(styles);

const MaterialUiPasswordReset = (props) => {
  const FRS = "Pole wymagane";
  const user = props.appState.user;
  if (!!user) {
    props.history.push("/");
  }
  const [editView, setEditView] = React.useState("password");
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const strongToken = useParams().token;
  console.log(strongToken)

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
            password: "",
            passwordConfirm: "",
        }}
        validationSchema={Yup.object().shape({
            password: Yup.string()
              .min(8, "Hasło musi zawierać co najmniej 8 znaków!")
              .max(50, "Hasło może zawierać maksymalnie 50 znaków!")
              .required("Pole wymagane")
              .oneOf(
                [Yup.ref("passwordConfirm")],
                "Hasła są różne"
              ),

            passwordConfirm: Yup.string()
              .oneOf([Yup.ref("password")], "Hasła są różne")
              .required("Pole wymagane"),
          })}
          onSubmit={(values, helpers) => {
            setTimeout(() => {
              helpers.setSubmitting(true);
              axiosInstanceNoAuth
                .post(`/user/passreset/${strongToken}/$`, {
                password: values.password,
              })
                .then((response) => {

                  enqueueSnackbar("Hasło zmienione!", { 
                    variant: 'success',
                });
                  helpers.setStatus("Pomyslnie zmieniono hasło");
                  helpers.setSubmitting(false);
                  
                })
                .catch((error) => {
                  
                  const errResponse = error.response;
                  enqueueSnackbar("Coś poszło nie tak!", { 
                    variant: 'error',
                });
                  helpers.setSubmitting(false);
                  this.setState({ locked: false });
                  helpers.setValues(
                    {
                      password: "",
                      passwordConfirm:""

                    },
                    false
                  );
                  helpers.setTouched(
                    {
                      password: false,

                      passwordConfirm:false
                    },
                    false
                  );
                  helpers.setFieldError(
                    "oldPassword",
                    "Podano nieprawidłowe stare hasło"
                  );

                });
            }, 400);
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
              <h4>Wprowadź nowe hasło</h4>
              
            </CardHeader>
            <CardBody>
            <Field
                component={MaterialFormikField}
                name={"password"}
                formControlProps={{
                  fullWidth: true,
                }}
                labelText="Hasło"
                inputProps={{
                  type: "password",
                  endAdornment: (
                    <InputAdornment position="end">
                      <LockIcon className={classes.inputIconsColor} />
                    </InputAdornment>
                  ),
                }}
              />
            <Field
                component={MaterialFormikField}
                name={"passwordConfirm"}
                formControlProps={{
                  fullWidth: true,
                }}
                labelText="Powtórz hasło"
                inputProps={{
                  type: "password",
                  endAdornment: (
                    <InputAdornment position="end">
                      <LockIcon className={classes.inputIconsColor} />
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
                disabled={isSubmitting}
              >
                Zmień hasło
              </Button>
              {
                            isSubmitting &&  
                           <LoadingScreenB></LoadingScreenB>
                      
                          } 
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

export default MaterialUiPasswordReset;

