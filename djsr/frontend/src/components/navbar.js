import React, { Component } from "react";
import {
  MDBCollapse,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBNavbar,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  // componentWillMount() {
  //
  // }
  //

  // axiosInstance.get("/hello/")

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
    // console.log("check", {} === null);
    // console.log(
    //   "token Storage",
    //   localStorage.getItem("access_token"),
    //   !localStorage.getItem("access_token")
    // );
    // console.log("navProps", this.props);
    const userInfo = this.props.appState.user;
    const userLogout = this.props.userLogout;
    // console.log("userInfo", userInfo);
    return (
      <MDBNavbar color="default-color" dark expand="md" className="mb-3">
        <MDBNavbarBrand>
          <strong className="white-text">GEN-SPR</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          {/*<MDBNavbarNav left>*/}
          {/*  <MDBNavItem active>*/}
          {/*    <MDBNavLink to="#!">Home</MDBNavLink>*/}
          {/*  </MDBNavItem>*/}
          {/*  <MDBNavItem>*/}
          {/*    <MDBNavLink to="#!">Features</MDBNavLink>*/}
          {/*  </MDBNavItem>*/}
          {/*  <MDBNavItem>*/}
          {/*    <MDBNavLink to="#!">Pricing</MDBNavLink>*/}
          {/*  </MDBNavItem>*/}
          {/*</MDBNavbarNav>*/}
          <MDBNavbarNav right>
            {/*<MDBNavItem>*/}
            {/*  <MDBNavLink className="waves-effect waves-light" to="#!">*/}
            {/*    <MDBIcon fab icon="twitter" />*/}
            {/*  </MDBNavLink>*/}
            {/*</MDBNavItem>*/}
            {/*<MDBNavItem>*/}
            {/*  <MDBNavLink className="waves-effect waves-light" to="#!">*/}
            {/*    <MDBIcon fab icon="google-plus-g" />*/}
            {/*  </MDBNavLink>*/}
            {/*</MDBNavItem>*/}
            {userInfo === false && (
              <>
                <MDBNavItem>
                  <MDBNavLink to="/login">
                    <strong>Logowanie</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/signup">
                    <strong>Rejestracja</strong>
                  </MDBNavLink>
                </MDBNavItem>
              </>
            )}
            {userInfo === null && (
              <MDBNavItem>
                <div
                  className="spinner-grow spinner-grow-sm text-white"
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              </MDBNavItem>
            )}
            {!!userInfo && (
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <MDBIcon icon="user" className="pr-1" />
                    <strong>{userInfo.username}</strong>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu right className="dropdown-default">
                    <MDBDropdownItem href="/userexams">
                      Moje sprawdziany
                    </MDBDropdownItem>
                    <MDBDropdownItem href="/myaccount">
                      Zarządzaj kontem
                    </MDBDropdownItem>
                    <MDBDropdownItem
                      onClick={() => {
                        userLogout();
                      }}
                    >
                      Wyloguj
                    </MDBDropdownItem>
                    {/*<MDBDropdownItem href="#!">*/}
                    {/*  Something else here*/}
                    {/*</MDBDropdownItem>*/}
                    {/*<MDBDropdownItem href="#!">*/}
                    {/*  Something else here*/}
                    {/*</MDBDropdownItem>*/}
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            )}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navbar;
