import React from "react";
import { Box, Container } from "@mui/system";
import { Typography } from "@mui/material";
import CustomButton from "../../components/CustomButton/CustomButton";

export default function RecycleSectionHome() {
  return (
    <Container
      sx={{
        minHeight: "400px",
        margin: "5rem auto",
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
        gap: "32px",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "calc(100%/ 2)",
          },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "./RecycleWasteManagement.svg"}
          alt="Recycle Waste Management Image"
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
          padding: "0 24px",
        }}
      >
        <Typography
          variant="h3"
          mb={2}
          sx={{
            fontSize: {
              xs: "32px",
              md: "40px",
            },
            fontWeight: "bold",
            color: "#2E582C",
            lineHeight: "40px",
            fontFamily: "Manrope",
            textAlign: {
              xs: "center",
              md: "left",
            },
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
            textAlign: {
              xs: "center",
              md: "left",
            },
          }}
        >
          Kami memberikan anda informasi mengenai cara daur ulang sampah
          berdasarkan jenisnya. Banyak produk hasil daur ulang sampah yang bisa
          menginspirasimu dalam mengolah sampah menjadi produk yang lebih
          bermanfaat.
        </Typography>
        <CustomButton
          backgroundColor="#CFFE64"
          color="#2E582C"
          textButton="Cara Daur Ulang"
          moreBtn={true}
        />
      </Box>
    </Container>
  );
}
