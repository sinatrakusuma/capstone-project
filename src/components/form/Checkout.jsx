import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import getStepContent from "./GetStepContent";

const steps = ["Biodata", "Data Sampah", "Konfirmasi"];

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        sx={{
          width: {
            xs: "100%",
            md: "80%",
          },
          mb: 4,
          padding: {
            xs: "24px",
            sm: "24px 0",
          },
        }}
      >
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Tukarkan Sampahmu Disini
          </Typography>
          <Stepper
            activeStep={activeStep}
            sx={{
              pt: 3,
              pb: 5,
            }}
          >
            {steps.map((label) => (
              <Step
                key={label}
                sx={{
                  "& .MuiStepLabel-root .Mui-completed": {
                    color: "#4B6F49", // circle color (COMPLETED)
                  },
                  "& .MuiStepLabel-root .Mui-active": {
                    color: "#4B6F49", // circle color (ACTIVE)
                  },
                }}
              >
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Terima kasih telah order!
              </Typography>
              <Typography variant="subtitle1">
                Nomor order kamu adalah #2001539. Tunggu dan siapkan sampah yang
                akan ditukar. Tim kami akan segera datang dan mengambil sampah
                kamu.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep, handleNext, handleBack, steps)}
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
