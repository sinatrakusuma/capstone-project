import React from "react";
import Typography from "@mui/material/Typography";

export default function HeadingHelperText({ helperText }) {
  return (
    <Typography
      variant="body2"
      sx={{
        fontSize: "16px",
        fontWeight: "500",
        color: "#5A6473",
        textAlign: "center",
        marginBottom: "3rem",
        fontFamily: "Manrope",
      }}
    >
      {helperText}
    </Typography>
  );
}
