// import { Box } from "@mui/material";
import React from "react";
import "./cardbackground.scss";
import Cardimg from "./Cardimg";
import { Container, Box } from "@mui/system";
import { Link } from "react-router-dom";
import HeadingSectionText from "../headingSectionText/headingSectionText";

const CardBackground = () => {
  return (
    <Container
      sx={{
        width: "100%",
        minHeight: "400px",
        padding: {
          xs: "40px 24px",
          md: "40px 80px",
        },
        margin: "5rem auto",
      }}
    >
      <HeadingSectionText headingText="Hasil Daur Ulang Sampah" />
      <Container
        className="hero-section"
        sx={{
          "&.MuiContainer-root": {
            padding: "0",
          },
        }}
      >
        <Box className="card-grid">
          <Link className="card" href="#">
            <Cardimg backgroundImage=" url(./images/d.jpg)" />
            <Box className="card__content">
              <h3 className="card__heading">Celengan</h3>
            </Box>
          </Link>
          <Link className="card" href="#">
            <Cardimg backgroundImage=" url(./images/e.jpg)" />
            <Box className="card__content">
              <h3 className="card__heading">Vas Bunga</h3>
            </Box>
          </Link>
          <Link className="card" href="#">
            <Cardimg backgroundImage=" url(./images/f.jpg)" />
            <Box className="card__content">
              <h3 className="card__heading">Vas Bunga</h3>
            </Box>
          </Link>
          <Link className="card" href="#">
            <Cardimg backgroundImage=" url(./images/g.jpg)" />
            <Box className="card__content">
              <h3 className="card__heading">Piring</h3>
            </Box>
          </Link>
          <Link className="card" href="#">
            <Cardimg backgroundImage=" url(./images/h.jpg)" />
            <Box className="card__content">
              <h3 className="card__heading">Miniatur sampah</h3>
            </Box>
          </Link>
          <Link className="card" href="#">
            <Cardimg backgroundImage=" url(./images/i.jpg)" />
            <Box className="card__content">
              <h3 className="card__heading">Totbag</h3>
            </Box>
          </Link>
          <Link className="card" href="#">
            <Cardimg backgroundImage=" url(./images/l.jpg)" />
            <Box className="card__content">
              <h3 className="card__heading">Kotak Pensil</h3>
            </Box>
          </Link>
          <Link className="card" href="#">
            <Cardimg backgroundImage=" url(./images/k.jpg)" />

            <Box className="card__content">
              <h3 className="card__heading">Miniatur</h3>
            </Box>
          </Link>
        </Box>
      </Container>
    </Container>
  );
};

export default CardBackground;
