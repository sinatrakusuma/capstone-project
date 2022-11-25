import React from "react";
import useInput from "../../hooks/useInput";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputField from "./InputField";
import FormButton from "./FormButton";
import CONFIG from "../../global/config";

export default function BiodataForm({
  handleNext,
  handleBack,
  activeStep,
  steps,
}) {
  const [name, handleNameChange] = useInput("");
  const [phoneNumber, handlePhoneNumberChange] = useInput("");
  const [address, handleAddressChange] = useInput("");
  const [email, handleEmailChange] = useInput("");
  const [cardNumber, handleCardNumberChange] = useInput("");

  const onSubmitBiodataHandler = () => {
    handleNext();
    const id = new Date().toDateString();

    const biodata = [
      {
        id,
        name,
        phoneNumber,
        address,
        email,
        cardNumber,
      },
    ];

    localStorage.setItem(CONFIG.BIODATA, JSON.stringify(biodata));
  };

  return (
    <React.Fragment>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          textAlign: "center",
          fontSize: "32px",
          fontWeight: "700",
        }}
      >
        Data Diri
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{
          padding: "32px 40px",
        }}
        component="form"
        onSubmit={onSubmitBiodataHandler}
      >
        <Grid item xs={12}>
          <InputField
            id="name"
            label="Nama"
            value={name}
            handle={handleNameChange}
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            id="address"
            label="Alamat"
            value={address}
            handle={handleAddressChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            id="email"
            label="Email"
            value={email}
            handle={handleEmailChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            id="phoneNumber"
            label="No.Telepon"
            value={phoneNumber}
            handle={handlePhoneNumberChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            id="cardNumber"
            label="No.Rekening"
            value={cardNumber}
            handle={handleCardNumberChange}
          />
        </Grid>
        <FormButton
          steps={steps}
          activeStep={activeStep}
          handleBack={handleBack}
        />
      </Grid>
    </React.Fragment>
  );
}

BiodataForm.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  activeStep: PropTypes.number.isRequired,
  steps: PropTypes.array.isRequired,
};
