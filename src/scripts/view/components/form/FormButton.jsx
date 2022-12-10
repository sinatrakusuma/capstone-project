import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

export default function FormButton({
  steps,
  activeStep,
  handleBack,
  handleNext,
  handleOrderSubmit,
}) {
  return (
    <Grid
      item
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      {activeStep !== 0 && (
        <Button
          onClick={handleBack}
          sx={{
            fontFamily: "Manrope",
            fontSize: "14px",
            fontWeight: "400",
            letterSpacing: "0",
            mt: 3,
            ml: 1,
            color: "#4B6F49",
            minWidth: "104px",
            minHeight: "44px",
            borderRadius: "4px",
            textTransform: "Capitalize",
            "&:hover": {
              backgroundColor: "#F5F5F5",
            },
          }}
        >
          Kembali
        </Button>
      )}
      <Button
        variant="contained"
        color="success"
        id="nextButton"
        type="submit"
        onClick={
          activeStep === steps.length - 1 ? handleOrderSubmit : handleNext
        }
        sx={{
          fontFamily: "Manrope",
          fontSize: "14px",
          letterSpacing: "0",
          fontWeight: "600",
          mt: 3,
          ml: 1,
          minWidth: "104px",
          minHeight: "44px",
          borderRadius: "4px",
          textTransform: "Capitalize",
          backgroundColor: "#CFFE64",
          color: "#2E582C",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#CFFE64",
            opacity: 0.8,
            boxShadow: "none",
          },
        }}
      >
        {activeStep === steps.length - 1 ? "Tukarkan Sampah" : "Selanjutnya"}
      </Button>
    </Grid>
  );
}

FormButton.propTypes = {
  steps: PropTypes.array.isRequired,
  activeStep: PropTypes.number.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleOrderSubmit: PropTypes.func.isRequired,
};
