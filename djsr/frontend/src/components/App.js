import React, { Component, lazy, Suspense } from "react";
import { Switch, Link, Route } from "react-router-dom";
// import { MDBContainer } from "mdbreact";
import "./styles/mdcardfixes.css";
import "./styles/styles.css";
import axiosInstance from "./axiosAPI";
const Login = lazy(() => import("./login"));
const Signup = lazy(() => import("./signup"));
const Navbar = lazy(() => import("./navbar"));
const MDBContainer = lazy(() => import("./MDBLazy/MDBLazyContainer"));
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
  checkUser = () => {
    if (!localStorage.getItem("access_token")) {
      this.setState({ user: false });
    } else {
      axiosInstance
        .get("/hello/")
        .then((response) => {
          this.setState({ user: response.data });
        })
        .catch((error) => {
          this.setState({ user: false });
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
  render() {
    const global = {
      setAppState: this.setState,
      forceAppUpdate: this.forceUpdate,
      checkUser: this.checkUser,
      appState: this.state,
      axiosInstance: axiosInstance,
      userLogout: this.userLogout,
    };
    const properties = { ...this.props, ...global };
    console.log("Appprops", properties);
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
                render={(props) => <Login {...properties} />}
              />
              <Route
                exact
                path={"/signup/"}
                render={(props) => <Signup {...properties} />}
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
