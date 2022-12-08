import React from "react";
import { Box, Container } from "@mui/system";
import HeadingSectionText from "../headingSectionText/headingSectionText";
import CardFiturInfo from "./cardFiturInfo";
import { HiOutlineTruck } from "react-icons/hi2";
import { AiFillBank } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineRecycling } from "react-icons/md";

export default function FiturInfo() {
  return (
    <Container
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "5rem auto",
        minHeight: "400px",
        "&.MuiContainer-root": {
          padding: {
            xs: "40px 24px",
            md: "40px 80px",
          },
        },
      }}
    >
      <HeadingSectionText
        headingText="Fitur Dausagi"
        helperText="Berikut merupakan fitur-fitur yang dapat memudahkan anda"
      />

      <Box
        sx={{
          width: {
            xs: "100%",
            lg: "80%",
          },
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
            },
            justifyContent: "space-between",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <CardFiturInfo icon=<AiFillBank size={24} /> content="Bank Sampah" />
          <CardFiturInfo
            icon=<HiOutlineTruck size={24} />
            content="Pick-Up Sampah"
          />
          <CardFiturInfo
            icon=<BiPhoneCall size={24} />
            content="Konsultasi Sampah"
          />
          <CardFiturInfo
            icon=<MdOutlineRecycling size={24} />
            content="Daur Ulang Sampah"
          />
        </Box>
      </Box>
    </Container>
  );
}
