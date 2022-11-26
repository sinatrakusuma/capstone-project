import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";

export default function Review({ handleNext, handleBack, activeStep, steps }) {
  const [biodata, setBiodata] = React.useState([]);
  const [trash, setTrash] = React.useState([]);

  React.useEffect(() => {
    const personalData = JSON.parse(localStorage.getItem("BIODATA_STORAGE"));
    const trashData = JSON.parse(localStorage.getItem("TRASH_STORAGE"));
    if (personalData && trashData) {
      setBiodata(personalData);
      setTrash(trashData);
    }
  }, []);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Review Order
      </Typography>
      <List disablePadding>
        {trash.map((product) => (
          <ListItem
            key={product.id}
            sx={{
              py: 1,
              px: 0,
            }}
          >
            <ListItemText
              primary="Jenis Sampah"
              secondary={product.trashType}
            />
            <ListItemText
              primary="Jumlah"
              secondary={`${product.trashQty} Kg`}
            />
            <Typography>{`Rp. ${product.price}/Kg`}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          {trash.map((product) => (
            <Typography
              key={product.id}
              variant="subtitle1"
              sx={{ fontWeight: 700 }}
            >
              Rp. {product.total}
            </Typography>
          ))}
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Alamat Pengiriman
          </Typography>
          {biodata.map((bio) => {
            return (
              <Box key={bio.id}>
                <Typography
                  gutterBottom
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  {bio.name}
                </Typography>
                <Typography gutterBottom>{bio.email}</Typography>
                <Typography gutterBottom>{bio.phoneNumber}</Typography>
                <Typography gutterBottom>{bio.address}</Typography>
              </Box>
            );
          })}
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Detail Pembayaran
          </Typography>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            {biodata.map((payment) => (
              <Box
                key={payment.name}
                sx={{
                  display: "flex",
                }}
              >
                <Grid item xs={6}>
                  <Typography gutterBottom>Transfer</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                  <Typography
                    gutterBottom
                    sx={{
                      fontWeight: "600",
                    }}
                  >
                    {payment.cardNumber}
                  </Typography>
                </Grid>
              </Box>
            ))}
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {activeStep !== 0 && (
            <Button
              onClick={handleBack}
              sx={{
                mt: 3,
                ml: 1,
                color: "#4B6F49",
                minWidth: "120px",
                minHeight: "44px",
                borderRadius: "12px",
                textTransform: "Capitalize",
              }}
            >
              Kembali
            </Button>
          )}
          <Button
            variant="contained"
            color="success"
            onClick={handleNext}
            id="nextButton"
            sx={{
              mt: 3,
              ml: 1,
              minWidth: "120px",
              minHeight: "44px",
              borderRadius: "12px",
              textTransform: "Capitalize",
            }}
          >
            {activeStep === steps.length - 1 ? "Tukar Sampah" : "Selanjutnya"}
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

Review.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  activeStep: PropTypes.number.isRequired,
  steps: PropTypes.array.isRequired,
};
