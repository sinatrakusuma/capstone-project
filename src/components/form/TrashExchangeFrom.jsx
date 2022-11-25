import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormButton from "./FormButton";
import MenuItem from "@mui/material/MenuItem";
import CONFIG from "../../global/config";
import trashTypeSelect from "../../data/trashTypeSelect";

export default function TrashExchangeForm({
  handleNext,
  handleBack,
  activeStep,
  steps,
}) {
  const [trashType, setTrashType] = useState("");
  const [trashQty, setTrashQty] = useState("1");
  const [price, setPrice] = useState("0");
  const [total, setTotal] = useState("0");

  function handleTrashType(event) {
    setTrashType(event.target.value);

    if (event.target.value === "Plastik") {
      setPrice("5000");
      setTotal("5000");
    } else if (event.target.value === "Kertas") {
      setPrice("2000");
      setTotal("2000");
    } else if (event.target.value === "Botol") {
      setPrice("3500");
      setTotal("3500");
    } else if (event.target.value === "Karet") {
      setPrice("6000");
      setTotal("6000");
    } else {
      setPrice("0");
      setTotal("0");
    }
  }

  function handleTrashQty(event) {
    setTrashQty(event.target.value);
    setTotal(event.target.value * price);
  }

  const onSubmitTrashDataHandler = () => {
    handleNext();
    const id = new Date().toDateString();
    const trashData = [
      {
        id,
        trashQty,
        trashType,
        price,
        total,
      },
    ];

    localStorage.setItem(CONFIG.TRASH, JSON.stringify(trashData));
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
        Data Sampah
      </Typography>
      <Grid
        container
        spacing={3}
        component="form"
        onSubmit={onSubmitTrashDataHandler}
        sx={{
          padding: "32px 40px",
        }}
      >
        <Grid item xs={12} md={6}>
          <TextField
            id="trashType"
            select
            label="Jenis Sampah"
            color="success"
            value={trashType}
            onChange={handleTrashType}
            helperText="Pilih Jenis Sampah"
            variant="standard"
            sx={{
              width: "100%",
            }}
          >
            {trashTypeSelect.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            color="success"
            id="price"
            label="Harga Per Kilo"
            fullWidth
            autoComplete="price"
            variant="standard"
            value={price}
            disabled
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            color="success"
            id="trashQty"
            label="Jumlah Sampah (Kg)"
            type="number"
            fullWidth
            variant="standard"
            value={trashQty}
            onChange={handleTrashQty}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            color="success"
            id="price"
            label="Kalukasi Harga"
            fullWidth
            autoComplete="price"
            variant="standard"
            value={total}
            disabled
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FormControlLabel
            sx={{
              width: "100%",
            }}
            control={
              <Checkbox
                name="saveAddress"
                value="yes"
                sx={{
                  color: "#2E582C",
                  "&.Mui-checked": {
                    color: "#2E582C",
                  },
                }}
              />
            }
            label={
              <Typography variant="body2" color="black">
                Data sudah benar
              </Typography>
            }
          />
          <FormButton
            steps={steps}
            activeStep={activeStep}
            handleBack={handleBack}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

TrashExchangeForm.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  activeStep: PropTypes.number.isRequired,
  steps: PropTypes.array.isRequired,
};
