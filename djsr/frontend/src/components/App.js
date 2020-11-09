import React, { Component, lazy, Suspense } from "react";
import { Switch, Link, Route } from "react-router-dom";
import MaterialUiNavbar from "./materialUiNavbar";
// import { MDBContainer } from "mdbreact";
import "./styles/mdcardfixes.css";
import "./styles/styles.css";
import axiosInstance from "./axiosAPI";
import CssBaseline from '@material-ui/core/CssBaseline';
const Login = lazy(() => import("./MaterialUiLoginPage"));
const Signup = lazy(() => import("./MaterialUiSignUpPage"));
// const Navbar = lazy(() => import("./navbar"));
const MDBContainer = lazy(() => import("./MDBLazy/MDBLazyContainer"));
const AccountActivation = lazy(() => import("./AccountActivation"));
const RegisterSuccess = lazy(() => import("./RegisterSuccess"));
const UserAccountManager = lazy(() => import("./UserAccountManager"));
const PasswordReset = lazy(()=>import("./PasswordReset"));
const ExamEditor = lazy(()=>import("./ExamEditor"));
const UserExams = lazy(()=>import("./UserExams"));
const PasswordResetRequest = lazy(()=>import("./RemindPassword"));
const HomePage = lazy(()=>import("./HomePage"));
class App extends Component {
  constructor(props) {
    super(props);
    // this.props.setAppState = this.setState;
    // this.props.forceAppUpdate = this.forceUpdate;
    // this.props.checkUser = this.checkUser;
    this.state = {
      user: null,
    };
    // this.props.appState = this.state;
  }
  componentDidMount() {
    this.checkUser();
  }
  checkUser = (onUserCheck) => {
    if (!localStorage.getItem("access_token")) {
      this.setState({ user: false });
      if (!!onUserCheck) onUserCheck(false);
    } else {
      axiosInstance
        .get("/user/update")
        .then((response) => {
          this.setState({ user: response.data });
          if (!!onUserCheck) onUserCheck(response.data);
        })
        .catch((error) => {
          this.setState({ user: false });
          if (!!onUserCheck) onUserCheck(response.data);
        });
    }
  };

  userLogout = () => {
    const user = { ...this.state.user };
    this.setState({ user: null });

    axiosInstance
      .post("/blacklist/", {
        refresh_token: localStorage.getItem("refresh_token"),
      })
      .then(() => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        axiosInstance.defaults.headers["Authorization"] = null;
        this.setState({ user: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log("logout error", error);
        this.setState({ user: user });
      });
  };
  setUser = (user) => {
    this.setState({ user: user });
  };
  render() {
    const global = {
      setAppState: this.setState,
      forceAppUpdate: this.forceUpdate,
      checkUser: this.checkUser,
      appState: this.state,
      axiosInstance: axiosInstance,
      userLogout: this.userLogout,
      setUser: this.setUser,
    };
    const properties = { ...this.props, ...global };
    // return (<div>cyka</div>);
    return (
      <Suspense fallback={<div>ladowanie</div>}>
        <>
          <CssBaseline />
        {/*<MDBContainer fluid className="h-100">*/}
          <MaterialUiNavbar {...properties} />
          <Suspense fallback={<div>Ładowanie</div>}>
            <Switch>

            </Switch>
          </Suspense>
        {/*</MDBContainer>*/}
          </>
      </Suspense>
    );
  }
}

export default App;
