import React from "react";
import { Container, Box } from "@mui/system";
import HeadingSectionText from "../headingSectionText/headingSectionText";
import { Grid, Typography } from "@mui/material";

export default function SectionWasteInfo({
  dataInfo,
  direction,
  headingText,
  helperText,
  background,
}) {
  return (
    <Container
      sx={{
        maxWidth: {
          xs: "100%",
          lg: "100%",
          xl: "1200px",
        },
        minHeight: "400px",
        margin: "5rem auto",
        backgroundColor: `${background}`,
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            lg: "1200px",
          },
          margin: "0 auto",
          padding: {
            xs: "40px 24px",
            md: "40px 80px",
          },
        }}
      >
        <HeadingSectionText headingText={headingText} helperText={helperText} />

        <Grid
          container
          sx={{
            display: "flex",

            justifyContent: {
              xs: "space-between",
              sm: "space-around",
              md: "space-between",
            },
            alignItems: "center",
            gap: "24px",
          }}
        >
          {dataInfo.map((data) => {
            return (
              <Grid
                key={data.category}
                item
                xs={12}
                sm={4}
                md={3}
                mt={2}
                sx={{
                  maxWidth: "100%",
                  minHeight: {
                    xs: "auto",
                    md: "140px",
                  },
                  display: "flex",
                  flexDirection: `${direction}`,
                  justifyContent: {
                    xs: "center",
                    sm: "flex-start",
                  },
                  alignItems: {
                    xs: "center",
                    sm: "flex-start",
                  },
                  gap: "12px",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "Manrope",
                    minWidth: "80px",
                    fontSize: {
                      xs: "18px",
                      md: "20px",
                    },
                    fontWeight: "600",
                    color: "#4DA247",
                    alignSelf: "start",
                  }}
                >
                  {data.category}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Manrope",
                    fontSize: {
                      xs: "12px",
                      md: "14px",
                    },
                    fontWeight: 400,
                    color: "#7D7D7D",
                    textAlign: "left",
                    alignSelf: "start",
                  }}
                >
                  {data.info}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}
