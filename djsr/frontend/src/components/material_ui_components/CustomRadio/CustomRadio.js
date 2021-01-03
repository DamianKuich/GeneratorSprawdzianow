import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import style from "../../assets/jss/material-kit-react/customCheckboxRadioSwitch";
import { makeStyles } from "@material-ui/core/styles";
import { FiberManualRecord } from "@material-ui/icons";
const useStyles = makeStyles(style);

const CustomRadio = (props) => {
  const { labelProps, radioProps } = props;
  const classes = useStyles();
  return (
    <FormControlLabel
      control={
        <Radio
          icon={<FiberManualRecord className={classes.radioUnchecked} />}
          checkedIcon={<FiberManualRecord className={classes.radioChecked} />}
          classes={{ checked: classes.radio, root: classes.radioRoot }}
          {...radioProps}
        />
      }
      classes={{ label: classes.label, root: classes.labelRoot }}
      {...labelProps}
    />
  );
};

export default CustomRadio;
