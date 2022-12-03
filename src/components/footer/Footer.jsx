import React from "react";
import { styled } from "@mui/material";
import { Box, Container } from "@mui/system";
import { FaMapMarkerAlt } from "react-icons/fa";
import FooterLink from "../footerLink/footerLink";
import NavbarBrand from "../navbarBrand/navbarBrand";
import SocialMediaFooter from "../socialMediaFooter/socialMediaFooter";

export default function Footer() {
  const TextWithIcon = styled("div")(() => ({
    fontFamily: "Manrope",
    fontWeight: 400,
    fontSize: "12px",
    color: "#E7E7E7",
  }));

  const FooterTextLink = styled("p")(() => ({
    fontWeight: 400,
    fontSize: "14px",
  }));

  return (
    <Container
      component="footer"
      sx={{
        maxWidth: {
          xs: "100%",
          lg: "100%",
          xl: "1200px",
        },
        padding: {
          xs: "32px 24px",
          md: "32px 80px",
        },
        backgroundColor: "#2E582C",
        color: "#FFFFFF",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignItems: "flex-start",
        gap: {
          xs: "32px",
          md: "24px",
        },
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "40%",
          },
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <NavbarBrand />
        <FooterTextLink
          sx={{
            fontFamily: "manrope",
            fontWeight: "300",
            fontSize: "14px",
            color: "#E7E7E7",
            lineHeight: "24px",
          }}
        >
          DAUSAGI merupakan Platform Bank sampah digital untuk membantu dan
          memudahkan masyarakat dalam pengelolaan sampah.
        </FooterTextLink>
        <TextWithIcon
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <FaMapMarkerAlt />
          <FooterTextLink>Jl. Soerkarno Hatta, No.12</FooterTextLink>
        </TextWithIcon>
        <TextWithIcon
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <FaMapMarkerAlt />
          <FooterTextLink>Jam 08.00 - 17.00</FooterTextLink>
        </TextWithIcon>
      </Box>
      <FooterLink />
      <SocialMediaFooter />
    </Container>
  );
}
