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
import { withSnackbar } from "notistack";
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
import LoadingScreenB from "./LoadingForButtons"
import InputAdornment from '@material-ui/core/InputAdornment';
import ButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import AppBar from '@material-ui/core/AppBar';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
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
    
        checked: [],
        fullyChecked: [],
        hiddenSections: [],
        otwCount: null,
        zamkCount: null,
        autoGeneStep: '1',
        isGathering: false,
        isGenerating: false
        

       
        
        
        
      };
      this.handleToggle = this.handleToggle.bind(this);
      this.handleToggleAll = this.handleToggleAll.bind(this);
      this.hideSection = this.hideSection.bind(this);

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
  

    handleToggle = (value,otw,zamk,sectionID) => () => {
      const currentIndex = this.state.checked.indexOf(value);
      const newChecked = [...this.state.checked];

      
      
      if (currentIndex === -1) {
        newChecked.push(value);
        let sumOtw = +otw + +this.state.otwCount
        let sumZamk = +zamk + +this.state.zamkCount
        this.setState({otwCount: sumOtw,zamkCount:sumZamk})
      } else {
        newChecked.splice(currentIndex, 1);
        let sumOtw = +this.state.otwCount - +otw 
        let sumZamk = +this.state.zamkCount - +zamk 
        this.setState({otwCount: sumOtw,zamkCount:sumZamk})
        const newCheckedMain = this.state.fullyChecked;
        const currentIndexMain = this.state.fullyChecked.indexOf(sectionID);
        newCheckedMain.splice(currentIndexMain, 1);
        this.setState({ fullyChecked: newCheckedMain });
      }
  
      this.setState({ checked: newChecked });
    };

    

    
    hideSection = (section) => () => {
      if(!this.state.hiddenSections.includes(section.id)){
        const currentIndex = section.id;
        const newHiddenSections = [...this.state.hiddenSections];
        newHiddenSections.push(currentIndex);
        this.setState({ hiddenSections: newHiddenSections });
        
      }
      else{
          let indexToRemove = this.state.hiddenSections.indexOf(section.id)
          const newHiddenSections = [...this.state.hiddenSections];
          newHiddenSections.splice(indexToRemove);
          this.setState({ hiddenSections: newHiddenSections });

      }

    };

    
    handleToggleAll = (section) => () => {
      const currentIndex = this.state.fullyChecked.indexOf(section.id);
      const newChecked = [...this.state.fullyChecked];

      
      
      if (currentIndex === -1) {
        newChecked.push(section.id);
        let sumaOtwTemp = this.state.otwCount
        let sumaZamkTemp = this.state.zamkCount
        {section.skill.map((skill) => {
          
          let currentIndex2 = this.state.checked.indexOf(skill.id);
          let newChecked2 = this.state.checked
          
  


          if (currentIndex2 === -1) {
            newChecked2.push(skill.id);
            sumaOtwTemp = +skill.taskCountOtw + +sumaOtwTemp
            sumaZamkTemp = +skill.taskCountZamk + +sumaZamkTemp
            
          } 
      
          this.setState({ checked: newChecked2 });
          this.setState({otwCount: sumaOtwTemp,zamkCount:sumaZamkTemp})

          
        }
        );
        
        
      }} else {
        newChecked.splice(currentIndex, 1);
        let sumaOtwTemp = this.state.otwCount
        let sumaZamkTemp = this.state.zamkCount
        {section.skill.map((skill) => {
          
          const currentIndex2 = this.state.checked.indexOf(skill.id);
          const newChecked2 = this.state.checked


          if (currentIndex2 !== -1) {
            newChecked2.splice(currentIndex2, 1);
            sumaOtwTemp = +sumaOtwTemp - +skill.taskCountOtw 
            sumaZamkTemp = +sumaZamkTemp - +skill.taskCountZamk 

          } 
      
          this.setState({ checked: newChecked2 });
          this.setState({otwCount: sumaOtwTemp,zamkCount:sumaZamkTemp})
        }
        );
        
        
      }}
  
      this.setState({ fullyChecked: newChecked });
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
      let sections = this.state.sections

      if (!exams ) {
        return (
          <Loading  message={"Ładowanie kolekcji sprawdzianów"} ></Loading>
        );
      }
      return (
        
        <div  
        >
            
        <Paper  style={bgStyles.paperContainer}>
   
          <Box
          p={18}
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
                            this.props.enqueueSnackbar("Utworzyłeś nowy sprawdzian", { 
                              variant: 'success',
                          })
                            
                            helpers.setSubmitting(false);
                            //this.props.history.push("/editor/");
                          })
                          .catch((error) => {
                            // console.log("login error", error.response);
                            const errResponse = error.response;
                            helpers.setSubmitting(false);
                            this.props.enqueueSnackbar("Nazwa zajęta", { 
                              variant: 'error',
                          })
                           
                            helpers.setTouched(
                              {
                                name: false,
                              },
                              false
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
                            Zapisz sprawdzian
                          </Button>
                          {
                            isSubmitting &&  
                           <LoadingScreenB></LoadingScreenB>
                      
                          } 
                          <Button 
                           variant="contained" 
                            color="primary"
                            size="lg"
                            onClick={() => this.setState({ open: !this.state.open})}
                            
                          >
                            Generuj sprawdzian
                          </Button>

                        
                          
                          </CardActions>
                        
                      </Form>
                    )}
                  </Formik>
                  
                  </CardBody>
                
                </Card>
                </Grid>
                </Box>
               
            {exams.map((exam) => {
              return (
                
                <Grid 
                alignItems="center"
                justify="center"
                container
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
         {this.state.autoGeneStep=="1" ? (
           
         <Dialog 
         disableBackdropClick={true}
         fullWidth={true}
        
          titlestyle={{textAlign: "center"}}
          
         open={this.state.open} >
        <DialogTitle  id="form-dialog-title">
        <IconButton disabled={this.state.isGathering} onClick={() => this.setState({ open: !this.state.open,checked:[],autoGeneStep:"1",otwCount:null,zamkCount:null })} edge="start" color="inherit" oaria-label="close">
              <CloseIcon />
            </IconButton> 
          <Typography variant="h5" align="center">Wygeneruj sprawdzian automatycznie</Typography></DialogTitle>
          
        <DialogContent>

 

        <Box p={1}>
        <TextField fullWidth
          id="level"
          select
          label="Stopień zaawansowania"
          value={this.state.level}
          onChange={(event) => this.setState({ level: event.target.value })}
          helperText="Wybierz stopień zaawansowania"
        >
          
            
         
            <MenuItem key={"level1"} value={"1"}>
              {'Podstawowy'}
            </MenuItem>
           
                      
            <MenuItem key={"level2"} value={"2"}>
              {'Rozszerzony'}
            </MenuItem>
         
        </TextField>
        </Box>

         
        </DialogContent>
        
        <DialogActions >
          
          <Button 
          disabled={this.state.isGathering}
          color="primary"      
            onClick={() => {
              
              this.setState({isGathering: true  })
              axiosInstanceNoAuth
              .post("/user/sections3/",{

                level:this.state.level

              })
              .then((response) => {
                const parsed = response.data.map(section => {
                  section.skill=section.skilll
                  return section
                })
                this.setState({ sections: parsed });
                this.setState({autoGeneStep: "2"})
                this.setState({isGathering: false  })
                // const parsed= response.data.map((section)=>{
                //   section.skill=section.skilll
                //   return section
                // })
                // this.setState({ sections: response.data });
              })
              .catch((error) => {
                this.setState({isGathering: false  })
                this.props.enqueueSnackbar("Wybierz poziom", { 
                  variant: 'error',
              })
                console.log(error);
                
              });
            }}>
            Dalej
          </Button>
          {
            this.state.isGathering && <LoadingScreenB></LoadingScreenB>
          }
        </DialogActions>
        
      </Dialog>
              ) : (
                <>
                </>
              )}

{this.state.autoGeneStep=="2" ? (
                       <Formik
                       initialValues={{
                         examName: "",
                         ileOtw: "0",
                         groups: "",
                         ileZamk: "0",
                         
                       }}
                       validationSchema={Yup.object().shape({
                         examName: Yup.string()
                           .min(2, "Nazwa za krotka")
                           .max(50, "Nazwa za dluga")
                           .required("Pole wymagane"),
                           groups: Yup.string()
                          
                           .required("Pole wymagane"),
                           ileOtw: Yup.string()
                          
                           .required("Pole wymagane"),
                           ileZamk: Yup.string()
                           
                           .required("Pole wymagane"),
                       })}
                       onSubmit={(values, helpers) => {
                         setTimeout(() => {
                           helpers.setSubmitting(true);
                           axiosInstance
                             .post("/user/maketest/", {
                               examName: values.examName,
                               tasks: "",
                             })
                             .then((response) => {
                               console.log("UE create response", response);
                               this.addExam(response.data[0]);
                               this.props.enqueueSnackbar("Utworzyłeś nowy sprawdzian", { 
                                 variant: 'success',
                             })
                               
                               helpers.setSubmitting(false);
                               //this.props.history.push("/editor/");
                             })
                             .catch((error) => {
                               // console.log("login error", error.response);
                               const errResponse = error.response;
                               helpers.setSubmitting(false);
                               this.props.enqueueSnackbar("Nazwa zajęta", { 
                                 variant: 'error',
                             })
                              
                               helpers.setTouched(
                                 {
                                   examName: false,
                                 },
                                 false
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
                         <Form onSubmit={handleSubmit}>
                           
         <Dialog 
         disableBackdropClick={true}
         fullWidth={true}
        
          titlestyle={{textAlign: "center"}}
          
         open={this.state.open} >
        <DialogTitle  id="form-dialog-title">
        <IconButton disabled={this.state.isGenerating} onClick={() => this.setState({ open: !this.state.open,checked:[],autoGeneStep:"1",otwCount:null,zamkCount:null })} edge="start" color="inherit" oaria-label="close">
              <CloseIcon />
            </IconButton> 
          <Typography variant="h5" align="center">Wygeneruj sprawdzian automatycznie</Typography></DialogTitle>


       
        <DialogContent>



                      
        <Field
                component={MaterialFormikField}
                name={"examName"}
                formControlProps={{
                  fullWidth: true,
                }}
                labelText="Nazwa sprawdzianu"
               
              />
                     <Field
                component={MaterialFormikField}
                name={"groups"}
                formControlProps={{
                  fullWidth: true,
                }}
                labelText="Ilość grup"

               
              />
                     <Field
                component={MaterialFormikField}
                name={"ileOtw"}
                formControlProps={{
                  fullWidth: true,
                }}
                labelText="Ile zadań otwartych"
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">/{this.state.otwCount}</InputAdornment>
                  ),
                }}
               
              />
                     <Field
                component={MaterialFormikField}
                name={"ileZamk"}
                formControlProps={{
                  fullWidth: true,
                }}
                labelText="Ile zadań zamkniętych"
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">/{this.state.zamkCount}</InputAdornment>
                  ),
                }}
               
              />

            <Box p={1}>
                  <List>
                    {sections.map((section) => {
                     
                      return (
                        <>
                          <ListItem
                          button onClick={this.hideSection(section)}
                          >
                          
                            <ListItemText
                              primary={<h3>{section.Section}</h3>}
                              secondary={"Dostępnych zadań: " + section.sectionTaskCount}
                              
                          
                            />
                            {(this.state.hiddenSections.indexOf(section.id) !== -1) ? <ExpandLess /> : <ExpandMore />}
                              <ListItemSecondaryAction>
                            
                            </ListItemSecondaryAction>
                          </ListItem>

                          <Collapse in={(this.state.hiddenSections.includes(section.id))} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>


                            <ListItem button
                                  key={section.id}
                                  onClick={this.handleToggleAll(section)}
                                  
                                  >
                                    <ListItemIcon>
                                      <Checkbox
                                        edge="start"
                                        checked={this.state.fullyChecked.indexOf(section.id) !== -1}
                                        tabIndex={-1}
                                      
                                      />
                                    </ListItemIcon>
                                    <ListItemText 
                                     
                                      primary={<b>Zaznacz wszystkie</b>}
                                    />
                                 
                             
                                  </ListItem>
                            
                              {section.skill.map((skill) => {
                                return (
                                  <ListItem button
                                  key={skill.id}
                                  onClick={this.handleToggle(skill.id,skill.taskCountOtw,skill.taskCountZamk,section.id)}
                                  
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
                                      secondary={"Zadań otwartych: " + skill.taskCountOtw +" Zadań zamkniętych: " +skill.taskCountZamk}
                                    />
                                 
                             
                                  </ListItem>
                                );
                              })}
                            </List>
                          </Collapse>
                         
                        </>
                      );
                    })}
                  </List>
      
        </Box>
      
      

        
            
          
          
        </DialogContent>
        
        <DialogActions >
          
          <Button 
          color="primary"   
          disabled={this.state.isGenerating}   
            onClick={() => {
              
              this.setState({isGenerating: true  })
               axiosInstance
                .post(`/user/getrandomtasks/`, {
                ileotw: values.ileOtw,
                ilezamk: values.ileZamk,
                level:  this.state.level,
                skills: this.state.checked.join(', '),
                groups: values.groups,
              })
                .then((response) => {

                  let key = 0;
                    response.data.map((group )=> {
                      
                      
                      let randomtasks = JSON.stringify(taskParser(group))
                      ++key
                      axiosInstance.post(`/user/maketest/`, {
                        name: values.examName + ' Grupa '+ key,
                        tasks:randomtasks
                        
                      }).then((response)=>{
                        
                        console.log(randomtasks)
                        this.setState({isGenerating: false  })
                        
                       this.props.history.go(0);
                      })
                      .catch((error)=>{
                        this.setState({isGenerating: false  })
                        this.props.enqueueSnackbar("Coś poszło nie tak, spróbuj ponownie", { 
                          variant: 'error',
                      })
                      })
                    
                    })
                    
                   
                   
                   
                   
            
 
 

                })
                .catch((error) => {
                  this.setState({isGenerating: false  })
                  this.props.enqueueSnackbar("Coś poszło nie tak, spróbuj ponownie", { 
                    variant: 'error',
                })
                  console.log("chngpass error", error.response);

                });
            }}>
            Generuj
          </Button>
          {
            this.state.isGenerating && <LoadingScreenB></LoadingScreenB>
          }
        </DialogActions>
        
      </Dialog>
                              
      </Form>
                    )}
                  </Formik>
              ) : (
                <>
                </>
              )}
        </div>
      );
    }
  }
  
  UserExams.propTypes = {};

export default withSnackbar(UserExams);
