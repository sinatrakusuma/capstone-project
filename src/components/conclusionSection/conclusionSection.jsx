import React from "react";
import { Box, Container } from "@mui/system";
import { Typography } from "@mui/material";
import CustomButton from "../../components/CustomButton/CustomButton";

export default function ConclusionSection() {
  return (
    <Container
      sx={{
        minHeight: "400px",
        margin: "5rem 0",
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
            xs: "50%",
            md: "calc(100%/ 2)",
          },
          borderRadius: "0 200px 0 200px",
          overflow: "hidden",
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "./m.jpg"}
          alt="Recycle Waste Management Image"
          style={{
            width: "100%",
          }}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
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
          Ayo Buat Lingkungan Bersih Sampah Bersama Dausagi
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
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
          Ciptakan kebersihan lingkungan, untuk hidup yang lebih bersih dan
          nyaman.
        </Typography>
        <CustomButton
          backgroundColor="#CFFE64"
          color="#2E582C"
          textButton="Tukarkan Sampah"
          moreBtn={true}
        />
      </Box>
    </Container>
  );
}
