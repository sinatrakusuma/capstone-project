import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CustomButton from "../customButton/customButton";

export default function HeroHome() {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: theme.spacing(8),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
      textAlign: "center",
      gap: theme.spacing(4),
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontFamily: "Manrope",
    fontSize: "40px",
    width: "100%",
    color: "#2E582C",
    lineHeight: "52px",
    fontWeight: "800",
    margin: theme.spacing(2, 0, 2, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
    },
  }));

  return (
    <Container
      sx={{
        minHeight: "400px",
        padding: {
          xs: "0 24px",
          md: "0 80px",
        },
        fontFamily: "Manrope",
      }}
    >
      <CustomBox>
        <Box
          sx={{
            width: "100%",
            flex: "1",
          }}
        >
          <Title variant="h1" sx={{ color: "#2E582C" }}>
            Kelola Sampahmu Bersama Kami.
          </Title>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Manrope",
              fontSize: {
                xs: "14px",
                md: "16px",
              },
              color: "#7D7D7D",
              my: 2,
              marginBottom: "32px",
            }}
          >
            Jadikan lingkunganmu menjadi tempat paling nyaman dan bebas dari
            sampah. Kami siap membantu mengelola sampah disekitarmu!
          </Typography>
          <CustomButton
            backgroundColor="#CFFE64"
            color="#2E582C"
            textButton="Tukarkan Sampah"
            moreBtn={true}
            navigation="bank-sampah"
          />
        </Box>

        <Box
          sx={{
            width: {
              sx: "100%",
              lg: "calc(100% / 3)",
            },
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "./svg/heroHome.svg"}
            alt="heroImg"
            style={{
              width: "100%",
              marginBottom: "2rem",
              marginTop: "4rem",
            }}
          />
        </Box>
      </CustomBox>
    </Container>
  );
}
