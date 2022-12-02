import React from "react";
import { Box, Container } from "@mui/system";
import { Typography } from "@mui/material";

export default function HeroWasteBank() {
  return (
    <Container
      sx={{
        minHeight: "400px",
        padding: {
          xs: "40px 24px",
          md: "40px 80px",
        },
        display: "flex",
        justifyContent: "space-between",
        flexDirection: {
          xs: "column-reverse",
          md: "row",
        },
        alignItems: "center",
        gap: 8,
      }}
    >
      <Box
        sx={{
          width: "100%",

          alignSelf: "flex-end",
        }}
      >
        <Typography
          variant="h3"
          mb={2}
          sx={{
            fontSize: "40px",
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
          Bank Sampah Dausagi
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
          Merupakan solusi bagi anda untuk menukar sampah secara mudah dan
          efisien dengan transaksi secara digital.
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "400",
            color: "#7D7D7D",
            lineHeight: "24px",
            marginBottom: "32px",
            fontFamily: "Manrope",
            backgroundColor: "#F5F5F5",
            padding: "8px 12px",
            textAlign: {
              xs: "center",
              md: "left",
            },
          }}
        >
          Daripada membuang sampah secara cuma-cuma, tukarkan sampahmu untuk
          mendapat keuntungan dan membuat lingkungan menjadi bersih.
        </Typography>
      </Box>
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "calc(100%/ 2)",
          },
          display: "flex",
          justifyContent: {
            xs: "center",
            md: "flex-end",
          },
          alignItems: "center",
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "./WasteBankIllustration.svg"}
          alt="Recycle Waste Management Image"
          style={{
            width: {
              xs: "50%",
              md: "100%",
            },
          }}
        />
      </Box>
    </Container>
  );
}
