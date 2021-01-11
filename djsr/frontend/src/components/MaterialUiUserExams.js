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
import Checkbox from "./material_ui_components/CustomCheckBox/CustomCheckbox";
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import taskParser from './AutoGeneTaskParser'
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListSubheader from '@material-ui/core/ListSubheader';
import { MenuTwoTone } from "@material-ui/icons";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Loading from "./LoadingScreen"
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
      maxWidth: 1885

     
     


     
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
        listExpand:{},
        generatedId: null,
        generatedName: null,
        sections: null,
        groups: null,
        ileotw: '',
        ilezamk: '',
        level: '',
        skills: '', 
        groups: '',
        autoGenSkills:[],
        checked: []
        

       
        
        
        
      };
      this.handleToggle = this.handleToggle.bind(this);
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
  

    handleToggle = (value) => () => {
      this.setState({ autoGenSkills: this.state.autoGenSkills.concat(value) })
      const currentIndex = this.state.checked.indexOf(value);
      const newChecked = [...this.state.checked];
      
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      this.setState({ checked: newChecked });
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
          <Loading></Loading>
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
                            size="lg"
                            type="submit"
                            
                            disabled={isSubmitting}
                          >
                            Zapisz
                          </Button>
                          <Button 
                           variant="contained" 
                            color="primary"
                            size="lg"
                            onClick={() => this.setState({ open: !this.state.open})}
                          >
                            Wygeneruj automatycznie
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
                   
                  
                    
                  
                  </CardActions>
                
                </Card>
                <p></p>
                </Grid>
                
              );
            })}
            
         </Paper>
         <Dialog 
         
         fullWidth={true}
        
          titlestyle={{textAlign: "center"}}
          
         open={this.state.open} onClose={() => this.setState({ open: !this.state.open })}>
        <DialogTitle  id="form-dialog-title"><Typography variant="h5" align="center">Wygeneruj sprawdzian automatycznie</Typography></DialogTitle>
      
        <DialogContent>
        <Box p={1}>
        <TextField  fullWidth
         onChange={(event) => this.setState({ generatedName: event.target.value })}
        id="ileotw" label="Nazwa sprawdzianu" />
            </Box>
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
   
        <TextField  fullWidth
         onChange={(event) => this.setState({ groups: event.target.value })}
        id="groups" label="Ilość grup" />
            </Box>
            <Box p={1}>
                  <List>
                    {sections.map((section) => {
                     
                      return (
                        <>
                          <ListItem
                          // onClick={() => {
                          //   this.toggleCollapse("section-" + section.id);
                          // }}
                          >
                          
                            <ListItemText
                              primary={<h3>{section.Section}</h3>}
                              secondary={"Dostępnych zadań: " + section.sectionTaskCount}
                          
                            />
                              <ListItemSecondaryAction>
                            
                            </ListItemSecondaryAction>
                          </ListItem>
                       
                            <List component="div" disablePadding>
                              {section.skill.map((skill) => {
                                return (
                                  <ListItem button
                                  key={skill.id}
                                  onClick={this.handleToggle(skill.id)}
                                  
                                  >
                                    <ListItemIcon>
                                      <Checkbox
                                        edge="start"
                                        checked={this.state.checked.indexOf(skill.id) !== -1}
                                        tabIndex={-1}
                                      
                                      />
                                    </ListItemIcon>
                                    <ListItemText 
                                     
                                      primary={skill.Skill}
                                      secondary={"Dostępnych zadań: " + skill.taskCount}
                                    />
                                 
                             
                                  </ListItem>
                                );
                              })}
                            </List>
                        
                         
                        </>
                      );
                    })}
                  </List>
      
        </Box>
      
      

        
            
          
          
        </DialogContent>
        
        <DialogActions >
          
          <Button 
          color="primary"      
            onClick={() => {
              
      
               axiosInstance
                .post(`/user/getrandomtasks/`, {
                ileotw: this.state.ileotw,
                ilezamk: this.state.ilezamk,
                level:  this.state.level,
                skills: this.state.checked.join(', '),
                groups: this.state.groups,
              })
                .then((response) => {

                  let key = 0;
                    response.data.map((group )=> {
                      
                      
                      let randomtasks = JSON.stringify(taskParser(group))
                      ++key
                      axiosInstance.post(`/user/maketest/`, {
                        name:this.state.generatedName + ' Grupa '+ key,
                        tasks:randomtasks
                        
                      }).then((response)=>{
                        
                        console.log(randomtasks)
                       // console.log(this.state.generatedId)
                       this.props.history.go(0);
                      })
                    
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
