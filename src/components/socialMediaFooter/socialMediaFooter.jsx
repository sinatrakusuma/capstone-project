import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

export default function SocialMediaFooter() {
  return (
    <Box>
      <Typography
        sx={{
          marginBottom: "12px",
          fontSize: "16px",
          fontWeight: 600,
        }}
      >
        Temukan Kami
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Link to="/" className="media-icon">
          <FaFacebook size={18} />
        </Link>
        <Link to="/" className="media-icon">
          <FaInstagram size={18} />
        </Link>
        <Link to="/" className="media-icon">
          <FaYoutube size={18} />
        </Link>
        <Link to="/" className="media-icon">
          <FaTelegram size={18} />
        </Link>
        <Link to="/" className="media-icon">
          <FaWhatsapp size={18} />
        </Link>
      </Box>
    </Box>
  );
}
