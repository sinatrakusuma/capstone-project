import React from "react";
import BiodataForm from "./BiodataForm";
import TrashExchangeForm from "./TrashExchangeFrom";
import Review from "./Review";
import PropTypes from "prop-types";

export default function getStepContent(step, handleNext, handleBack, steps) {
  switch (step) {
    case 0:
      return (
        <BiodataForm
          activeStep={step}
          handleNext={handleNext}
          handleBack={handleBack}
          steps={steps}
        />
      );
    case 1:
      return (
        <TrashExchangeForm
          activeStep={step}
          handleNext={handleNext}
          handleBack={handleBack}
          steps={steps}
        />
      );
    case 2:
      return (
        <Review
          activeStep={step}
          handleNext={handleNext}
          handleBack={handleBack}
          steps={steps}
        />
      );
    default:
      throw new Error("Unknown step");
  }
}

getStepContent.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  activeStep: PropTypes.number.isRequired,
  steps: PropTypes.array.isRequired,
};
