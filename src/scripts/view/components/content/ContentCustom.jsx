import { Box, styled } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const ContentCustom = ({ Image }) => {
  const ContentCustom = styled(Box)(() => ({
    width: "100%",
    height: "85px",
    borderRadius: "12px",
    backgroundImage: Image,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }));

  return <ContentCustom></ContentCustom>;
};

ContentCustom.propTypes = {
  Image: PropTypes.string.isRequired,
};

export default ContentCustom;
