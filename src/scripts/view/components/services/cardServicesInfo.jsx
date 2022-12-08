import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export default function CardInfo({ number, title, content }) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        gap: "24px",
        justifyContent: {
          sx: "center",
          sm: "flex-start",
        },
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        alignItems: "center",
        padding: "24px 0",
      }}
    >
      <Box
        sx={{
          height: "100%",
          borderRight: "2px solid #F5F5F5",
          padding: "12px 8px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Manrope",
            fontSize: "40px",
            fontWeight: "500",
            color: "#F5F5F5",
          }}
        >
          {number}
        </Typography>
      </Box>
      <Box
        sx={{
          textAlign: {
            xs: "center",
            sm: "left",
          },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Manrope",
            fontSize: "24px",
            fontWeight: "600",
            color: "#4DA247",
            lineHeight: "36px",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Manrope",
            fontSize: "16px",
            fontWeight: "400",
            color: "#7D7D7D",
            lineHeight: "24px",
          }}
        >
          {content}
        </Typography>
      </Box>
    </Box>
  );
}
