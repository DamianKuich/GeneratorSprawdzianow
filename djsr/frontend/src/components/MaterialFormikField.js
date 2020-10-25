import React from "react";
import PropTypes from "prop-types";
import InputAdornment from "@material-ui/core/InputAdornment";
import People from "@material-ui/icons/People";
import CustomInput from "./material_ui_components/CustomInput/CustomInput";

const MaterialFormikField = ({
  inputProps,
  type,
  labelText,
  field: { name, ...fieldProps },
    form:{errors,...formProps},
    formControlProps,
    ...props
}) => {
  const error=errors[name];
  const touched=formProps.touched[name];
  return (
    <CustomInput
      labelText={labelText}
      id={name}
      error={touched && !!error}
      success={touched && !error}
      formControlProps={formControlProps}
      // helperProps={{
      //   children: !!errors.name && touched.name ? errors.name : " ",
      //   error: true,
      // }}
        helperProps={{
            children: !!error && touched ? error : " ",
            error: !!error && touched
        }}
      inputProps={{
        type: type,
        name: name,
        // onChange: handleChange,
        // onBlur: handleBlur,
        // value: values.name,
        ...fieldProps,
        // endAdornment: (
        //   <InputAdornment position="end">
        //     <People className={classes.inputIconsColor} />
        //   </InputAdornment>
        // ),
          ...inputProps
      }}
    />
  );
};

MaterialFormikField.propTypes = {};

export default MaterialFormikField;
