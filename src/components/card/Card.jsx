import { Box, styled, Typography } from "@mui/material";
import React from "react";
import Cards from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./card.scss";
import { Container } from "@mui/system";

const Card = () => {
  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    gap: "24px",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      flexDirection: "column",
    },
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "24px",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5rem",
        padding: {
          xs: "0 24px",
          md: "0 80px",
        },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: "35px",
          fontWeight: "bold",
          color: "#2E582C",
          my: 3,
          padding: "12px",
          borderTop: "3px solid #CFFE64",
        }}
      >
        Tim Kami
      </Typography>

      <GuidesBox>
        <GuideBox>
          <Cards sx={{ maxWidth: 355 }}>
            <CardMedia
              component="img"
              height="140"
              image="../../1.png"
              alt="ihsan"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ihsan
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Universitas Gunadarma | Teknik Informatika
              </Typography>
            </CardContent>
          </Cards>

          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></Box>
        </GuideBox>
        <GuideBox>
          <Cards sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="./2.png"
              alt="Sinatra"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Sinatra
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Universitas Gunadarma | Teknik Informatika
              </Typography>
            </CardContent>
          </Cards>

          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></Box>
        </GuideBox>
        <GuideBox>
          <Cards sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="./3.png"
              alt="Ervan"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ervan
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Universitas Komputer Indonesia | Sistem Informasi
              </Typography>
            </CardContent>
          </Cards>

          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></Box>
        </GuideBox>
        <GuideBox>
          <Cards sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="./4.png"
              alt="Enzi"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Enzi
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Politeknik Negeri Padang | Teknologi Informasi
              </Typography>
            </CardContent>
          </Cards>

          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></Box>
        </GuideBox>
      </GuidesBox>
    </Container>
  );
};

export default Card;
