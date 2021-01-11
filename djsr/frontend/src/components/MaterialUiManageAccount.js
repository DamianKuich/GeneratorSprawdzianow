import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import LockIcon from "@material-ui/icons/Lock";
import Paper from '@material-ui/core/Paper';
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
import ToggleButton from '@material-ui/lab/ToggleButton';
import ButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const useStyles = makeStyles(styles);

const MaterialUiManageAccount = (props) => {
  const FRS = "Pole wymagane";
  const user = props.appState.user;
  const [editView, setEditView] = React.useState("email");
  
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
              {editView=="email" ? (
        
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
            .put("/user/update/", {
                username: values.name,
                password: values.password,
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
              <h4>Edytuj dane</h4>
              
            </CardHeader>
            <CardBody>
            
            <ButtonGroup
                        orientation="vertical"
                        color="primary"
                        aria-label="vertical contained primary button group"
                        variant="text"
                      >
              <Button variant="contained" color="primary" onClick={(e)=>setEditView("email")}  >
                   Zmień e-mail
              </Button>
              <Button variant="contained" color="primary" onClick={(e)=>setEditView("name")}  >
                   Zmień nazwę użytkownika
              </Button>
              <Button variant="contained" color="primary" onClick={(e)=>setEditView("password")}  >
                   Zmień hasło
              </Button>
            </ButtonGroup>



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
                Zmień dane
              </Button>
            </CardFooter>
          </form>
        )}
      </Formik>
 
        ) : (
          <>
          </>
        )}
         {editView=="name" ? (
        
        <Formik
        initialValues={{
          name: "",
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required(FRS),
        })}
        onSubmit={(values, helpers) => {
            setTimeout(() => {
              
              helpers.setSubmitting(true);
              axiosInstance
                .put("/user/update/", {
                  username: values.name,
                })
                .then((response) => {
                  this.props.setUser(response.data);
                  helpers.setStatus("Pomyslnie zmieniono dane");
                  helpers.setSubmitting(false);
                  this.setState({ locked: false });
                })
                .catch((error) => {
                  // console.log("login error", error.response);
                  const errResponse = error.response;
                  helpers.setSubmitting(false);
                  this.setState({ locked: false });
                  helpers.setValues(
                    {
                      name: "",
                    },
                    false
                  );
                  helpers.setTouched(
                    {
                      name: false,
                    },
                    false
                  );
                  helpers.setFieldError(
                    "name",
                    "Nazwa jest w użyciu lub jest nieprawidłowa."
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
              <h4>Edytuj dane</h4>
              
            </CardHeader>
            <CardBody>
            
            <ButtonGroup
                        orientation="vertical"
                        color="primary"
                        aria-label="vertical contained primary button group"
                        variant="text"
                      >
              <Button variant="contained" color="primary" onClick={(e)=>setEditView("email")}  >
                   Zmień e-mail
              </Button>
              <Button variant="contained" color="primary" onClick={(e)=>setEditView("name")}  >
                   Zmień nazwę użytkownika
              </Button>
              <Button variant="contained" color="primary" onClick={(e)=>setEditView("password")}  >
                   Zmień hasło
              </Button>
            </ButtonGroup>
              

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
                Zmień dane
              </Button>
            </CardFooter>
          </form>
        )}
      </Formik>
 
        ) : (
          <>
          </>
        )}

{editView=="password" ? (
        
        <Formik
        initialValues={{
            password: "",
            passwordConfirm: "",
            oldPassword: "",
        }}
        validationSchema={Yup.object().shape({
            password: Yup.string()
              .min(8, "Too Short!")
              .max(50, "Too Long!")
              .required("Pole wymagane")
              .oneOf(
                [Yup.ref("passwordConfirm")],
                "Hasła są różne"
              ),
            oldPassword: Yup.string()
              .min(8, "Too Short!")
              .max(50, "Too Long!")
              .required("Pole wymagane"),
            passwordConfirm: Yup.string()
              .oneOf([Yup.ref("password")], "Hasła są różne")
              .required("Pole wymagane"),
          })}
          onSubmit={(values, helpers) => {
            setTimeout(() => {
              helpers.setSubmitting(true);
              axiosInstance
                .put("/user/update/", {
                  password: values.password,
                  oldpassword: values.oldPassword,
                })
                .then((response) => {
                  this.props.setUser(response.data);
                  helpers.setStatus("Pomyslnie zmieniono hasło");
                  helpers.setSubmitting(false);
                  this.setState({ locked: false });
                })
                .catch((error) => {
                  helpers.setStatus("Podano nieprawidłowe aktualne hasło")
                  console.log("chngpass error", error.response);
                  const errResponse = error.response;
                  helpers.setSubmitting(false);
                  this.setState({ locked: false });
                  helpers.setValues(
                    {
                      password: "",
                      oldPassword: "",
                      passwordConfirm:""

                    },
                    false
                  );
                  helpers.setTouched(
                    {
                      password: false,
                      oldPassword: false,
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
              <h4>Edytuj dane</h4>
              
            </CardHeader>
            <CardBody>
            <ButtonGroup
                        orientation="vertical"
                        color="primary"
                        aria-label="vertical contained primary button group"
                        variant="text"
                      >
              <Button variant="contained" color="primary" onClick={(e)=>setEditView("email")}  >
                   Zmień e-mail
              </Button>
              <Button variant="contained" color="primary" onClick={(e)=>setEditView("name")}  >
                   Zmień nazwę użytkownika
              </Button>
              <Button variant="contained" color="primary" onClick={(e)=>setEditView("password")}  >
                   Zmień hasło
              </Button>
            </ButtonGroup>

            
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

            <Field
                component={MaterialFormikField}
                name={"oldPassword"}
                formControlProps={{
                  fullWidth: true,
                }}
                labelText="Podaj stare hasło"
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
              >
                Zmień dane
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
      </Paper>
    </div>
  );
};

export default MaterialUiManageAccount;
