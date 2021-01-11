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
import { Form, Formik,Field } from "formik";
import * as Yup from "yup";
import FormikMdInput from "./FormikMDInput";
import { Link } from "react-router-dom";
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from "./material_ui_components/CustomButtons/Button";
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
import image from "./img/genesprDark.png";
import { grey } from "@material-ui/core/colors";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import taskParser from './AutoGeneTaskParser'
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";
import ListItemText from '@material-ui/core/ListItemText';
import List from "@material-ui/core/List";
import ListSubheader from '@material-ui/core/ListSubheader';
import { MenuTwoTone } from "@material-ui/icons";
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
    backgroundColor: '#FEFEFA',

    
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
        open: false,
        generatedId: null,
        sections: null,
        ileotw: '',
        ilezamk: '',
        level: '',
        skills: '', 
        autoGenSkills:[]
        

       
        
        
        
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
      axiosInstanceNoAuth
      .get("/user/sections3/")
      .then((response) => {
        const parsed = response.data.map(section => {
          section.skill=section.skilll
          return section
        })
        this.setState({ sections: parsed });
        // const parsed= response.data.map((section)=>{
        //   section.skill=section.skilll
        //   return section
        // })
        // this.setState({ sections: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
     
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
      let sections = this.state.sections

      if (!exams || !sections) {
        return (
          <div >
     
          <CircularProgress size={250}  style={{
            'color': 'purple',
            'marginLeft': '50%',
            'marginTop': '20%',
           
        
        }}/>
        <p>
        
        </p>
        
        </div>
        );
      }
      return (
        
        <div  
        >
            
        <Paper  style={bgStyles.paperContainer}>
   
          <Box
          p={10}
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
                            size="lg"
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
                   
                    <BootstrapTooltip title="Wygeneruj sprawdzian automatycznie">
                      <IconButton onClick={() => this.setState({ open: !this.state.open, generatedId: exam.id })}>
                        <DynamicFeedIcon />
                     </IconButton>
                    </BootstrapTooltip>
                    
                  
                  </CardActions>
                
                </Card>
                <p></p>
                </Grid>
                
              );
            })}
            
         </Paper>
         <Dialog open={this.state.open} onClose={() => this.setState({ open: !this.state.open })}>
        <DialogTitle id="form-dialog-title">Wygeneruj sprawdzian automatycznie</DialogTitle>
      
        <DialogContent>
        <Box p={1}>
        <TextField  fullWidth
         onChange={(event) => this.setState({ ileotw: event.target.value })}
        id="ileotw" label="Ile zadań otwartych" />
            </Box>
        <Box p={1}>
        <TextField  fullWidth
         onChange={(event) => this.setState({ ilezamk: event.target.value })}
        id="ilezamk" label="Ile zadań zamkniętych" />
            </Box>

        <Box p={1}>
        <TextField fullWidth
          id="level"
          select
          label="Poziom trudności"
          value={this.state.level}
          onChange={(event) => this.setState({ level: event.target.value })}
          helperText="Wybierz poziom trudności"
        >
          
            
         
            <MenuItem key={"level1"} value={"1"}>
              {'Podstawowy'}
            </MenuItem>
           
                      
            <MenuItem key={"level2"} value={"2"}>
              {'Rozszerzony'}
            </MenuItem>
         
        </TextField>
        </Box>

        <Box p={1}>
       
        <Select
        fullWidth
          
          id="demo-mutiple-checkbox"
          
          multiple
          value={this.state.autoGenSkills}
          onChange={(event) => this.setState({ autoGenSkills: event.target.value })}
         
         
         
          renderValue={(selected) => 

            
            selected.join(', ')
          

          }
            
      
        >

        {sections.map((section) =>
        
        
          <ListSubheader>{section.Section}</ListSubheader>
          &&
          section.skill.map((skill) => (
            <MenuItem key={skill.id} value={skill.id}>
              <ListItemText primary={skill.Skill} secondary={"Dostępnych zadań: " + skill.taskCount}/>
            </MenuItem>
              )))}
        
              
          
        </Select>
      
        </Box>
      
      

        
            
          
          
        </DialogContent>
        
        <DialogActions>
          
          <Button 
          color="primary"      
            onClick={() => {
              
      
               axiosInstance
                .post(`/user/getrandomtasks/`, {
                ileotw: this.state.ileotw,
                ilezamk: this.state.ilezamk,
                level:  this.state.level,
                skills: this.state.autoGenSkills.join(', ')
              })
                .then((response) => {
                    
                   let randomtasks = JSON.stringify(taskParser(response.data))
                   
                   
                    axiosInstance.put(`/user/maketest/`, {
                    id:this.state.generatedId,
                    tasks:randomtasks
                  }).then((response)=>{
                    console.log(randomtasks)
                    console.log(this.state.generatedId)
                    this.props.history.push(`/editor/${this.state.generatedId}`);
                  })
 
 

                })
                .catch((error) => {

                  console.log("chngpass error", error.response);

                });
            }}>
            Generuj
          </Button>
        </DialogActions>
        
      </Dialog>
        </div>
      );
    }
  }
  
  UserExams.propTypes = {};

export default (UserExams);
