import React from "react";
import { Box } from "@mui/material";
import HeadingText from "./headingText";
import HelperText from "./helperText";
import PropTypes from "prop-types";

export default function HeadingSectionText({ headingText, helperText }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HeadingText headingText={headingText} />
      <HelperText helperText={helperText} />
    </Box>
  );
}

HeadingSectionText.propTypes = {
  headingText: PropTypes.string,
  helperText: PropTypes.string,
};
