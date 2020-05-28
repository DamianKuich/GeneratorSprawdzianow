import React, { Component, lazy, Suspense } from "react";
import { Switch, Link, Route } from "react-router-dom";
// import { MDBContainer } from "mdbreact";
import "./styles/mdcardfixes.css";
import "./styles/styles.css";
import axiosInstance from "./axiosAPI";
import TaskSearch from "./taskSearch";
const Login = lazy(() => import("./login"));
const Signup = lazy(() => import("./signup"));
const Navbar = lazy(() => import("./navbar"));
const MDBContainer = lazy(() => import("./MDBLazy/MDBLazyContainer"));
const AccountActivation = lazy(() => import("./AccountActivation"));
const RegisterSuccess = lazy(() => import("./RegisterSuccess"));
const UserAccountManager = lazy(() => import("./UserAccountManager"));
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
      setUser:this.setUser,
    };
    const properties = { ...this.props, ...global };
    return (
      <Suspense fallback={<div>ladowanie</div>}>
        <MDBContainer fluid className="h-100">
          <Navbar {...properties} />
          <Link to={"/login/"}>ELO</Link>
          <Suspense fallback={<div>CZEKAJ KURWO</div>}>
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
                render={(props) => <RegisterSuccess {...global} {...props} />}
              />
              <Route
                exact
                path="/activateaccount/:token/"
                render={(props) => <AccountActivation {...props} {...global} />}
              />
              <Route
                path={"/myaccount/"}
                render={(props) => (
                  <UserAccountManager {...props} {...global} />
                )}
              />
              <Route
                path={"/search/"}
                render={(props) => (
                  <TaskSearch {...props} {...global} />
                )}
              />
              <Route path={"/"} render={(props) => <div>Home again</div>} />
            </Switch>
          </Suspense>
        </MDBContainer>
      </Suspense>
    );
  }
}

export default App;
