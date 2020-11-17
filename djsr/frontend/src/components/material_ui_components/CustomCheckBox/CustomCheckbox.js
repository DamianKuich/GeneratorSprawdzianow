import React from "react";
import stylesold from "../../assets/jss/material-kit-react/customCheckboxRadioSwitch";
import { primaryColor } from "../../assets/jss/material-kit-react";
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
const CustomCheckbox = withStyles({
  root: {
    color: primaryColor,
    "&$checked": {
      color: primaryColor,
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default CustomCheckbox;
