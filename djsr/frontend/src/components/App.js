import React, { Component, lazy, Suspense } from "react";
import { Switch, Link, Route } from "react-router-dom";
import MaterialUiNavbar from "./materialUiNavbar";
// import { MDBContainer } from "mdbreact";
import "./styles/mdcardfixes.css";
import "./styles/styles.css";
import axiosInstance from "./axiosAPI";
import CssBaseline from "@material-ui/core/CssBaseline";
import AddTask from "./AddTask";
import LoadingScreen from "./LoadingScreen";
import { SnackbarProvider } from "notistack";
const Login = lazy(() => import("./MaterialUiLoginPage"));
// import Login from "./MaterialUiLoginPage"
const Signup = lazy(() => import("./MaterialUiSignUpPage"));
// const Navbar = lazy(() => import("./navbar"));
const MDBContainer = lazy(() => import("./MDBLazy/MDBLazyContainer"));
const AccountActivation = lazy(() => import("./MaterialUiAccountActivation"));
const RegisterSuccess = lazy(() => import("./RegisterSuccess"));
const UserAccountManager = lazy(() => import("./MaterialUiManageAccount"));
const PasswordReset = lazy(() => import("./MaterialUiPasswordReset"));
const ExamEditor = lazy(() => import("./MaterialUiExamEditor"));
const UserExams = lazy(() => import("./MaterialUiUserExams"));

const PasswordResetRequest = lazy(() =>
  import("./MaterialUiPasswordResetRequest")
);
const HomePage = lazy(() => import("./HomePage"));

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
    document.title = "GENE-SPR";
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
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Suspense fallback={<div>ladowanie</div>}>
          <>
            <CssBaseline />
            <MDBContainer fluid className="h-100">
              <MaterialUiNavbar {...properties} />
              <Suspense fallback={<LoadingScreen />}>
                <Switch>
                  <Route
                    exact
                    path={"/login/"}
                    render={(props) => <Login {...global} {...props} />}
                  />
                  <Route
                    exact
                    path={"/signup/"}
                    render={(props) => <Signup {...global} {...props} />}
                  />
                  <Route
                    exact
                    path={"/signupsuccess/:token"}
                    render={(props) => (
                      <RegisterSuccess {...global} {...props} />
                    )}
                  />
                  <Route
                    exact
                    path="/activateaccount/:token/"
                    render={(props) => (
                      <AccountActivation {...props} {...global} />
                    )}
                  />
                  <Route
                    exact
                    path="/passreset/:token"
                    render={(props) => <PasswordReset {...props} {...global} />}
                  />
                  <Route
                    exact
                    path="/requestresetpassword/"
                    render={(props) => (
                      <PasswordResetRequest {...props} {...global} />
                    )}
                  />
                  <Route
                    exact
                    path="/addtask/"
                    render={(props) => <AddTask {...props} {...global} />}
                  />
                  <Route
                    path={"/myaccount/"}
                    render={(props) => (
                      <UserAccountManager {...props} {...global} />
                    )}
                  />
                  <Route
                    path={"/editor/:id/"}
                    render={(props) => <ExamEditor {...props} {...global} />}
                  />
                  <Route
                    path={"/userexams/"}
                    render={(props) => <UserExams {...props} {...global} />}
                  />
                  <Route
                    path={"/"}
                    render={(props) => <HomePage {...props} {...global} />}
                  />
                </Switch>
              </Suspense>
            </MDBContainer>
          </>
        </Suspense>
      </SnackbarProvider>
    );
  }
}

export default App;
