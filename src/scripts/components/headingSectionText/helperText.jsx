import React from "react";
import Typography from "@mui/material/Typography";

export default function HelperText({ helperText }) {
  return (
    <Typography
      variant="body2"
      sx={{
        fontFamily: "Manrope",
        fontSize: {
          xs: "14px",
          md: "16px",
        },
        fontWeight: "400",
        color: "#5A6473",
        textAlign: "center",
        marginBottom: "3rem",
      }}
    >
      {helperText}
    </Typography>
  );
}
