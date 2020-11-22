import React, { Component } from "react";
import PropTypes from "prop-types";
import { axiosInstanceNoAuth } from "./axiosAPI";

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
        {accountConfirm === null && <div>Oczekiwanie na odpowiedz</div>}
        {accountConfirm === true && (
                         <Box 
                         justifyContent="center"
                         p={1}
                         
         
                         > 
                         <Card 
                       justify="center" 
                       
                       
                       >
                          
                             <CardHeader
                            title={exam.name}/>
                          
                             <CardActions disableSpacing>
                             <Link>
                             <BootstrapTooltip title="Edytuj sprawdzian">
                   
                               <IconButton  >
                               <EditIcon />
                             </IconButton>
                             </BootstrapTooltip>
         
                             </Link>
                         
                             <BootstrapTooltip title="Skopiuj sprawdzian">
                             <IconButton  >
                               <FileCopyIcon />
                             </IconButton>
                             </BootstrapTooltip>
                             <BootstrapTooltip title="Usuń sprawdzian">
                             <IconButton >
                               <DeleteIcon />
                             </IconButton>
                             </BootstrapTooltip>
                           
                           </CardActions>
                         
                         </Card>
                         </Box>
                         
        )}
        {accountConfirm === false && (
          <div>Błąd!!! Konto nie zostało aktywowane.</div>
        )}
      </>
    );
  }
}

AccountActivation.propTypes = {};

export default AccountActivation;
