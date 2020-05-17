import React, { useState } from "react";

const FormikMdInput = ({
  name,
  touched,
  value,
  errors,
  icon,
  onChange,
  onBlur,
  label,
  id,
  type,
  hideInput,
  disableAutocomplete,
  disabled,
}) => {
  const [active, setActive] = useState(false);
  // console.log("id", id, "active", active, disableAutocomplete);
  return (
    <div className="md-form form-group">
      {!!icon && (
        <i
          className={[
            "fa",
            icon,
            "prefix",
            touched ? (!errors ? "text-success" : "red-text") : "",
          ].join(" ")}
        />
      )}
      <input
        name={name}
        onChange={onChange}
        onBlur={(e) => {
          onBlur(e);
          setActive(false);
        }}
        onFocus={() => {
          setActive(true);
        }}
        value={value}
        id={id}
        type={type}
        autoComplete={disableAutocomplete ? "off" : "on"}
        // className="form-control is-invalid"
        className={[
          "form-control",
          touched ? (!errors ? "is-valid" : "is-invalid") : "",
          hideInput ? "text-password" : "",
          disabled ? "disabled":"",
        ].join(" ")}
        disabled={disabled}
      />
      <label
        htmlFor={id}
        className={[
          touched ? (!errors ? "is-valid" : "is-invalid") : "",
          active || !(value === "" || value === null) ? "active" : "",
        ].join(" ")}
      >
        {label}
      </label>
      {!!errors && !!touched && (
        <div className="invalid-feedback d-block">{errors}</div>
      )}
    </div>
  );
};

export default FormikMdInput;
