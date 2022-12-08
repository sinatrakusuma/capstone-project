import React from "react";
import { Box, Container } from "@mui/system";
import { Typography } from "@mui/material";

export default function HeroRecycle() {
  return (
    <Container
      sx={{
        position: "relative",
        minHeight: "400px",
        padding: {
          xs: "40px 24px",
          md: "40px 80px",
        },
        display: "flex",
        justifyContent: "space-between",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignItems: "center",
        gap: "24px",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "calc(100%/ 2)",
          },
          display: "flex",
          justifyContent: {
            xs: "center",
            md: "flex-start",
          },
          alignItems: "flex-start",
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "./svg/RecycleHeroImage.svg"}
          alt="Recycle Illustartion"
          style={{
            width: {
              xs: "50%",
              md: "100%",
            },
          }}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          alignSelf: "center",
        }}
      >
        <Typography
          variant="h3"
          mb={2}
          sx={{
            fontFamily: "Manrope",
            fontSize: {
              xs: "32px",
              md: "40px",
            },
            fontWeight: "800",
            color: "#2E582C",
            lineHeight: "40px",
            textAlign: "center",
          }}
        >
          Daur Ulang Sampah
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "14px",
              md: "16px",
            },
            fontWeight: "400",
            color: "#7D7D7D",
            lineHeight: "24px",
            marginBottom: "32px",
            fontFamily: "Manrope",
            textAlign: "center",
          }}
        >
          Olah sampah anda menjadi sebuah produk yang bermanfaat.
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "-100px",
          right: "-50px",
          width: "400px",
          height: "400px",
          border: "2px solid #F5F5F5",
          borderRadius: "100%",
          zIndex: -1,
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          top: "24px",
          left: "40%",
          width: "200px",
          height: "200px",
          border: "2px solid #F5F5F5",
          borderRadius: "100%",
          zIndex: -1,
        }}
      ></Box>
    </Container>
  );
}
