import React from "react";
import { render } from "react-dom";
import { BrowserRouter, withRouter } from "react-router-dom";
import App from "./components/App";

const AppContainer = withRouter((props) => <App {...props} />);
render(
  <BrowserRouter>
    <AppContainer />
  </BrowserRouter>,
  document.getElementById("root")
);
