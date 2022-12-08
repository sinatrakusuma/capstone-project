import React from "react";
import { Box } from "@mui/material";
import navbarLinkItem from "../../../data/navbarLinkItem";
import { Link, useLocation } from "react-router-dom";
import CustomButton from "../customButton/customButton";
import { useState, useEffect } from "react";

export default function NavbarLink() {
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  return (
    <Box
      sx={{
        fontWeight: 500,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        gap: "24px",
        position: {
          xs: "absolute",
          md: "static",
        },
        top: "100%",
        right: 0,
        zIndex: 100,
        backgroundColor: "#FFFFFF",
        width: "100%",
        padding: {
          xs: "24px",
          md: 0,
        },
        boxShadow: {
          xs: "-1px 10px 12px -2px rgba(0,0,0,0.08)",
          md: 0,
        },
        margin: {
          xs: "24 auto",
          md: 0,
        },
      }}
    >
      {navbarLinkItem.map((navigation, index) => {
        return (
          <Link
            to={navigation.to}
            key={index}
            className={url === navigation.to ? "link-active link" : "link"}
          >
            {navigation.link}
          </Link>
        );
      })}
      <CustomButton
        backgroundColor="#CFFE64"
        color="#2E582C"
        textButton="Kontak"
        moreBtn={true}
        navigation="tentang-kami"
      />
    </Box>
  );
}
