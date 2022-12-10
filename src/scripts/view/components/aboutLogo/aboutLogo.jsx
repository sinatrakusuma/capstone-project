import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function AboutLogo() {
  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          md: "calc(100%/ 3)",
        },
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: {
          xs: "center",
          md: "flex-end",
        },
        alignItems: {
          xs: "center",
          md: "flex-end",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          className="about-logo-section"
          src={process.env.PUBLIC_URL + "./svg/logo.svg"}
          alt="Dausagi"
          style={{
            width: {
              xs: "50%",
              md: "100%",
            },
          }}
        />
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Manrope",
            fontWeight: "700",
            color: "#2E582C",
          }}
        >
          Dausagi
        </Typography>
      </Box>
    </Box>
  );
}
