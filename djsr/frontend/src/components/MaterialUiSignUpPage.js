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
import image from "./img/genesprDark.png";
import * as Yup from "yup";
import axiosInstance, { axiosInstanceNoAuth } from "./axiosAPI";
import { Formik, Field } from "formik";
import MaterialFormikField from "./MaterialFormikField";
import Paper from '@material-ui/core/Paper';
import { useSnackbar } from 'notistack';
import LoadingScreenB from "./LoadingForButtons"
import CircularProgress from '@material-ui/core/CircularProgress';
import LoadingScreen from "./LoadingScreen.js";
const useStyles = makeStyles(styles);

const MaterialUiSignUpPage = (props) => {
  const FRS = "Pole wymagane";
  const user = props.appState.user;
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
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
  if (!!user) {
    props.history.push("/");
  }
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
                <Paper
       style={bgStyles.paperContainer}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    passwordConfirm: "",
                  }}
                  validationSchema={Yup.object().shape({
                    name: Yup.string()
                      .min(2, "Too Short!")
                      .max(50, "Too Long!")
                      .required(FRS),
                    password: Yup.string()
                      .min(8, "Too Short!")
                      .max(50, "Too Long!")
                      .required(FRS),
                    passwordConfirm: Yup.string()
                      .oneOf([Yup.ref("password")], "Hasła są różne")
                      .required(FRS),
                    email: Yup.string()
                      .email("Nieprawidłowy adres e-mail")
                      .required(FRS),
                  })}
                  onSubmit={(values, helpers) => {
                    setTimeout(() => {
                      helpers.setSubmitting(true);
                      axiosInstanceNoAuth
                        .post("/user/create/", {
                          username: values.name,
                          password: values.password,
                          email: values.email,
                        })
                        .then((response) => {
                          enqueueSnackbar("Gotowe! Teraz aktywuj konto przy pomocy linku otrzymanego na adres e-mail", { 
                            variant: 'success',
                        });
                          helpers.setSubmitting(false);

                        })
                        .catch((error) => {
                          // console.log("login error", error.response);
                          const errResponse = error.response;
                          enqueueSnackbar("Email zajęty", { 
                            variant: 'error',
                        });
                          helpers.setSubmitting(false);
                          helpers.setValues(
                            {
                              name: "",
                              password: "",
                              passwordConfirm: "",
                              email: "",
                            },
                            false
                          );
                          helpers.setTouched(
                            {
                              name: false,
                              password: false,
                              email: false,
                              passwordConfirm: false,
                            },
                            false
                          );
                          helpers.setFieldError(
                            "general",
                            "Nierpawidłowa nazwa użytkownika lub hasło"
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
                        <h4>Rejestracja</h4>
                      </CardHeader>
                      <CardBody>
                        <Field
                          component={MaterialFormikField}
                          name={"name"}
                          formControlProps={{
                            fullWidth: true,
                          }}
                          labelText="Nazwa użytkownika"
                          inputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <People className={classes.inputIconsColor} />
                              </InputAdornment>
                            ),
                          }}
                        />
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
                        {/*<CustomInput*/}
                        {/*  labelText="Hasło"*/}
                        {/*  id="password"*/}
                        {/*  error={!!errors.password}*/}
                        {/*  success={touched.password && !errors.password}*/}
                        {/*  formControlProps={{*/}
                        {/*    fullWidth: true,*/}
                        {/*  }}*/}
                        {/*  helperProps={{*/}
                        {/*    children: errors.password,*/}
                        {/*    error: true,*/}
                        {/*  }}*/}
                        {/*  inputProps={{*/}
                        {/*    type: "text",*/}
                        {/*    name: "password",*/}
                        {/*    onChange: handleChange,*/}
                        {/*    onBlur: handleBlur,*/}
                        {/*    value: values.password,*/}
                        {/*    endAdornment: (*/}
                        {/*      <InputAdornment position="end">*/}
                        {/*        <LockIcon className={classes.inputIconsColor} />*/}
                        {/*      </InputAdornment>*/}
                        {/*    ),*/}
                        {/*  }}*/}
                        {/*/>*/}
                        <Field
                          component={MaterialFormikField}
                          name={"password"}
                          formControlProps={{
                            fullWidth: true,
                          }}
                          labelText="Hasło"
                          inputProps={{
                            type:"password",
                            endAdornment: (
                              <InputAdornment position="end">
                                <LockIcon className={classes.inputIconsColor} />
                              </InputAdornment>
                            ),
                          }}
                        />
                        {/*<CustomInput*/}
                        {/*  labelText="Powtórz hasło"*/}
                        {/*  id="password"*/}
                        {/*  error={!!errors.passwordConfirm}*/}
                        {/*  success={*/}
                        {/*    touched.passwordConfirm && !errors.passwordConfirm*/}
                        {/*  }*/}
                        {/*  formControlProps={{*/}
                        {/*    fullWidth: true,*/}
                        {/*  }}*/}
                        {/*  helperProps={{*/}
                        {/*    children: errors.passwordConfirm,*/}
                        {/*    error: true,*/}
                        {/*  }}*/}
                        {/*  inputProps={{*/}
                        {/*    type: "password",*/}
                        {/*    name: "passwordConfirm",*/}
                        {/*    onChange: handleChange,*/}
                        {/*    onBlur: handleBlur,*/}
                        {/*    value: values.passwordConfirm,*/}
                        {/*    endAdornment: (*/}
                        {/*      <InputAdornment position="end">*/}
                        {/*        <LockIcon className={classes.inputIconsColor} />*/}
                        {/*      </InputAdornment>*/}
                        {/*    ),*/}
                        {/*  }}*/}
                        {/*/>*/}
                        <Field
                          component={MaterialFormikField}
                          name={"passwordConfirm"}
                          formControlProps={{
                            fullWidth: true,
                          }}
                          labelText="Powtórz hasło"
                          inputProps={{
                            type:"password",
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
                          Zarejestruj   
                        </Button>
                   
                        {
                            isSubmitting &&  
                           <LoadingScreenB></LoadingScreenB>
                      
                          } 
                      </CardFooter>
                    </form>
                    
                  )}
                </Formik>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </Paper>
    </div>
  );
};

export default MaterialUiSignUpPage;
