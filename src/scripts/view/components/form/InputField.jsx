import React from "react";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

export default function InputField({
  value,
  handle,
  id,
  label,
  type,
  disabled,
}) {
  return (
    <TextField
      color="success"
      required
      id={id}
      name={id}
      label={label}
      type={type}
      disabled={disabled}
      autoComplete="biodata-address"
      fullWidth
      variant="standard"
      value={value}
      onChange={handle}
      sx={{
        "&:hover": {
          border: "disabled",
        },
      }}
    />
  );
}

InputField.propTypes = {
  value: PropTypes.string,
  handle: PropTypes.func,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};
