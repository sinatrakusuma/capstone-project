import React from "react";
import TextField from "@mui/material/TextField";

export default function InputField({ value, handle, id, label }) {
  return (
    <TextField
      color="success"
      required
      id={id}
      name={id}
      label={label}
      fullWidth
      autoComplete="biodata-address"
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
