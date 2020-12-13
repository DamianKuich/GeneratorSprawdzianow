import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdbreact";
import axiosInstance from "./axiosAPI";
import axiosInstanceNoAuth from "./axiosAPI"
import Box from '@material-ui/core/Box'
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikMdInput from "./FormikMDInput";
import { Link } from "react-router-dom";
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ExamCollectionCard from './ExamCollectionCard'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';
import MaterialFormikField from "./MaterialFormikField";
import CardBody from "./material_ui_components/Card/CardBody.js";
import CustomInput from "./material_ui_components/CustomInput/CustomInput.js";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Notification from './Notification'
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import image from "./img/genspr-parralax-bg.png";
const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: 200,
    minWidth: 575,
    maxWidth: 575,
    

  },
  marginAutoItem: {
    margin: 'auto'
  },
 
}));

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.grey,
  },
  tooltip: {
    backgroundColor: theme.palette.grey,
  },
}));

function BootstrapTooltip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
}



const bgStyles = {
  paperContainer: {
      backgroundImage: `url(${image})`,
      minHeight: 1000,

     
  },
  examCardContainer: {
    width: 700,
    backgroundColor: '#FEFEFA'
    
},

  cardTitle: {
    textAlign:'center'
  }

};

const useStylesAlert = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));



  class UserExams extends Component {
    constructor(props) {
      super(props);
      this.state = {
        exams: null,
        

       
        
        
        
      };
    }
  
    updateExams = () => {
      this.setState({ exams: null });
      axiosInstance
        .get("/user/tests/")
        .then((response) => {
          console.log("UE update response", response, "exams", response.data);
          this.setState({ exams: response.data });
        })
        .catch((error) => {
          console.log("UE update error response", error);
        });
    };
    addExam = (exam) => {
      this.setState((state) => {
        state.exams = [exam].concat(state.exams);
        return state;
      });
    };
 
    createExamCopy = (exam) => {
      axiosInstance
        .post("/user/maketest/", {
          name: exam.name + "-kopia",
          tasks: exam.tasks,
        })
        .then((response) => {
          this.addExam(response.data[0]);
        });
    };


    removeExam = (exam) => {
      axiosInstance
      .post(`/user/deletetest/`,{
      id: exam.id,
    })
              .then((response) => {
        console.log("usunięto")
        this.updateExams();
       
      });
    };
  
    // componentWillMount() {
    //
    // }
    //
    componentDidMount() {
      this.updateExams();
    }
    //
    // componentWillReceiveProps(nextProps) {
    //
    // }
    //
    // shouldComponentUpdate(nextProps, nextState) {
    //
    // }
    //
    // componentWillUpdate(nextProps, nextState) {
    //
    // }
    //
    // componentDidUpdate(prevProps, prevState) {
    //
    // }
    //
    // componentWillUnmount() {
    //
    // }
  
    render() {
      const { classes } = this.props;
      let exams = this.state.exams;
      if (!exams) {
        return (
          <MDBContainer>
            <div>Ladowanie</div>
          </MDBContainer>
        );
      }
      return (
        
        <div  
        >
        <Paper  style={bgStyles.paperContainer}>
          <Box
          p={8}
          >

              <Grid  
                alignItems="center"
                justify="center"
                container
                direction="column"
                
                

                > 
                <Card  style={bgStyles.examCardContainer}
              justify="center" 
              alignItems="center"

              
              >
                 
                    <CardHeader style={bgStyles.cardTitle}
                   title="Dodaj sprawdzian"
                   
                   />
                   
                    <CardBody 
                    >
                    <Formik
                    initialValues={{
                      name: "",
                    }}
                    validationSchema={Yup.object().shape({
                      name: Yup.string()
                        .min(2, "Nazwa za krotka")
                        .max(50, "Nazwa za dluga")
                        .required("Pole wymagane"),
                    })}
                    onSubmit={(values, helpers) => {
                      setTimeout(() => {
                        helpers.setSubmitting(true);
                        axiosInstance
                          .post("/user/maketest/", {
                            name: values.name,
                            tasks: "",
                          })
                          .then((response) => {
                            console.log("UE create response", response);
                            this.addExam(response.data[0]);
                            helpers.setSubmitting(false);
                            //this.props.history.push("/editor/");
                          })
                          .catch((error) => {
                            // console.log("login error", error.response);
                            const errResponse = error.response;
                            helpers.setSubmitting(false);
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
                            helpers.setFieldError("general", "Nazwa w uzyciu");
                           
                            
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
                      <Form onSubmit={handleSubmit}>
                        <div className="grey-text">
                        <CustomInput
                            labelText="Nazwa sprawdzianu"
                            id="name"
                            error={!!errors.name}
                            success={touched.name && !errors.name}
                            formControlProps={{
                              fullWidth: true,
                            }}
                            helperProps={{
                              children: errors.name,
                              error: true,
                            }}
                            inputProps={{
                              type: "text",
                              name: "name",
                              onChange: handleChange,
                              onBlur: handleBlur,
                              value: values.name,
                            }}
                          />
                          {!!errors.general && (
                            <div className="invalid-feedback d-block pb-4">
                              {errors.general}
                            </div>
                          )}
                        </div>

                        <CardActions style={{justifyContent: 'center'}}> 
                       
                          <Button 
                           variant="contained" 
                            color="primary"
                            type="submit"
                            disabled={isSubmitting}
                          >
                            Zapisz
                          </Button>
                          </CardActions>
                        
                      </Form>
                    )}
                  </Formik>
                  
                  </CardBody>
                
                </Card>
                </Grid>
                </Box>
                <p></p>
            {exams.map((exam) => {
              return (
                
                <Grid 
                alignItems="center"
                justify="center"
                container
                spacing={3}
                direction="column"
                
                

                > 
              
                <Card 
             
              style={bgStyles.examCardContainer}
              justify="center"  
              
              
              >
                 
                    <CardHeader
                   title={exam.name}/>
                 
                    <CardActions disableSpacing >
                    <Link to={"/editor/" + exam.id}>
                    <BootstrapTooltip title="Edytuj sprawdzian">
          
                      <IconButton  >
                      <EditIcon />
                    </IconButton>
                    </BootstrapTooltip>

                    </Link>
                
                    <BootstrapTooltip title="Skopiuj sprawdzian">
                    <IconButton  onClick={() => {
                        this.createExamCopy(exam);}} >
                      <FileCopyIcon />
                    </IconButton>
                    </BootstrapTooltip>
                    <BootstrapTooltip title="Usuń sprawdzian">
                    <IconButton onClick={() => {
                        this.removeExam(exam);}}>
                      <DeleteIcon />
                    </IconButton>
                    </BootstrapTooltip>
                    <Link to={"/fenerator/" + exam.id}>
                    <BootstrapTooltip title="Wygeneruj sprawdzian automatycznie">
                      <IconButton>
                        <DynamicFeedIcon />
                     </IconButton>
                    </BootstrapTooltip>
                    </Link>
                  
                  </CardActions>
                
                </Card>
                <p></p>
                </Grid>
                
              );
            })}
         </Paper>
        </div>
      );
    }
  }
  
  UserExams.propTypes = {};

export default (UserExams);
