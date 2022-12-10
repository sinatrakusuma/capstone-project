import React from "react";
import BiodataForm from "./BiodataForm";
import TrashExchangeForm from "./TrashExchangeFrom";
import Review from "./Review";
import PropTypes from "prop-types";

export default function getStepContent(orderData, setOrderData, step) {
  switch (step) {
    case 0:
      return <BiodataForm orderData={orderData} setOrderData={setOrderData} />;
    case 1:
      return (
        <TrashExchangeForm orderData={orderData} setOrderData={setOrderData} />
      );
    case 2:
      return <Review orderData={orderData} setOrderData={setOrderData} />;
    default:
      throw new Error("Unknown step");
  }
}

getStepContent.propTypes = {
  orderData: PropTypes.object.isRequired,
  setOrderData: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
};
