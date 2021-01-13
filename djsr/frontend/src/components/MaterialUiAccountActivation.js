import React, { Component } from "react";
import PropTypes from "prop-types";
import { axiosInstanceNoAuth } from "./axiosAPI";
import CardHeader from "./material_ui_components/Card/CardHeader.js";
import Paper from '@material-ui/core/Paper';
import image from "./img/genesprDark.png";
import LoadingScreen from "./LoadingScreen";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "./material_ui_components/Grid/GridContainer.js";
import GridItem from "./material_ui_components/Grid/GridItem.js";
import Card from "./material_ui_components/Card/Card.js";
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


const signupPageStyle = {
  container: {
   
    zIndex: "2",
    position: "relative",
    paddingTop: "25vh",
    color: "#FFFFFF",
    paddingBottom: "200px"
  },
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)"
  },
  pageHeader: {
    minHeight: "100vh",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""'
    },
    "& footer li a,& footer li a:hover,& footer li a:active": {
      color: "#FFFFFF"
    },
    "& footer": {
      position: "absolute",
      bottom: "0",
      width: "100%"
    }
  },
  form: {
    margin: "0"
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "20px 0",
    marginBottom: "15px"
  },
  socialIcons: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px"
  },
  divider: {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center"
  },
  cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important"
  },
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0"
  },
  inputIconsColor: {
    color: "#495057"
  }
};

class AccountActivation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountConfirm: null,
    };
  }

  componentDidMount() {
    let token = this.props.match.params.token;
    if (!token) {
      this.setState({ accountConfirm: false });
    } else {
      axiosInstanceNoAuth
        .get(`/user/activate/${token}/$`, {})
        .then((response) => {
          console.log(response);
          this.setState({ accountConfirm: true });
        })
        .catch((error) => {
          console.log(error);
          this.setState({ accountConfirm: false });
        });
    }
  }

  render() {
    let accountConfirm = this.state.accountConfirm;
    return (
      <>
        {accountConfirm === null && <LoadingScreen></LoadingScreen>}
        {accountConfirm === true && (
                    <div>
                    <Paper
                       style={bgStyles.paperContainer}
                     >
              <div style={signupPageStyle.container}>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={4}>
                  
                              <CardHeader
                                color="success"
                                style={signupPageStyle.cardHeader}
                              >
                                <h4>Konto zostało aktywowane, możesz się zalogować</h4>
                              </CardHeader>
      
                  
                  </GridItem>
                </GridContainer>
              </div>
              </Paper>
                </div>
        )}
        {accountConfirm === false && (
          <div>
              <Paper
                 style={bgStyles.paperContainer}
               >
        <div style={signupPageStyle.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
            
                        <CardHeader
                          color="danger"
                          style={signupPageStyle.cardHeader}
                        >
                          <h4>Nie udało się aktywować konta, link nieaktywny</h4>
                        </CardHeader>

            
            </GridItem>
          </GridContainer>
        </div>
        </Paper>
          </div>
        )}
      </>
    );
  }
}

AccountActivation.propTypes = {};

export default AccountActivation;
