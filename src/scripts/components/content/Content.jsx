import React from "react";
import { Box, styled, Typography } from "@mui/material";
import ContentCustom from "./ContentCustom";
import { Container } from "@mui/system";
import dataContentServicesHome from "../../data/dataContentServicesHome";
import HeadingSectionText from "../headingSectionText/headingSectionText";

const Guide = () => {
  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    gap: "24px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      gap: "12px",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      flexDirection: "column",
    },
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 12px",
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(4, 0),
    },
  }));

  return (
    <Container
      sx={{
        padding: {
          xs: "40px 24px",
          md: "40px 80px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "5rem 0",
        }}
      >
        <HeadingSectionText
          headingText="Layanan Kami"
          helperText="Berikut merupakan layanan yang ada di Dausagi"
        />

        <GuidesBox>
          {dataContentServicesHome.map((data) => {
            return (
              <GuideBox key={data.id}>
                <ContentCustom Image={data.imageUrl} />
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "700",
                    fontSize: {
                      xs: "20px",
                      md: "24px",
                    },
                    color: "#2E582C",
                    my: 2,
                    textAlign: "center",
                    fontFamily: "Manrope",
                  }}
                >
                  {data.title}
                </Typography>
                <Box
                  sx={{
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "400",
                      fontSize: {
                        xs: "12px",
                        md: "14px",
                      },
                      color: "#7D7D7D",
                      textAlign: "center",
                      fontFamily: "Manrope",
                      lineHeight: "24px",
                    }}
                  >
                    {data.content}
                  </Typography>
                </Box>
              </GuideBox>
            );
          })}
        </GuidesBox>
      </Box>
    </Container>
  );
};

export default Guide;
