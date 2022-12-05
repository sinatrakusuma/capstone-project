import { Button, styled } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CustomButton = ({
  backgroundColor,
  color,
  textButton,
  generalBtn,
  specialBtn,
  moreBtn,
  navigation,
}) => {
  const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: backgroundColor,
    fontFamily: "Manrope",
    color: color,
    minWidth: "104px",
    minHeight: "44px",
    fontWeight: "600",
    fontSize: "14px",
    cursor: "pointer",
    padding: "0.5rem 1.25rem",
    borderRadius: "4px",
    textTransform: "none",
    display: "block",
    transition: "all .3s ease-in-out",
    letterSpacing: "0",
    "&:hover": {
      backgroundColor: backgroundColor,
      opacity: 0.8,
    },
    "& a": {
      color: color,
    },
    [theme.breakpoints.down("md")]: {
      margin: (generalBtn || moreBtn) && theme.spacing(0, "auto", 3, "auto"),
      width: (generalBtn || moreBtn) && "90%",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: specialBtn && theme.spacing(3),
      width: specialBtn && "90%",
    },
  }));

  return (
    <CustomButton>
      <Link to={navigation}>{textButton}</Link>
    </CustomButton>
  );
};

CustomButton.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  textButton: PropTypes.string.isRequired,
  generalBtn: PropTypes.bool.isRequired,
  specialBtn: PropTypes.bool.isRequired,
  moreBtn: PropTypes.bool.isRequired,
};

export default CustomButton;
