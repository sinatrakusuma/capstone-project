import React from "react";
import { Container, Box } from "@mui/system";
import HeadingSection from "../../components/headingSection/headingSection";
import HeadingHelperText from "../../components/headingHelperText/headingHelperText";
import { Grid, Typography } from "@mui/material";

export default function SectionWasteInfo({
  dataInfo,
  direction,
  heading,
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HeadingSection heading={heading} />
          <HeadingHelperText helperText={helperText} />
        </Box>

        <Grid
          container
          sx={{
            display: "flex",

            justifyContent: {
              xs: "space-between",
              sm: "center",
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
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      minWidth: "80px",
                      fontSize: {
                        xs: "18px",
                        md: "20px",
                      },
                      fontWeight: "600",
                      color: "#4DA247",
                    }}
                  >
                    {data.category}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#7D7D7D",
                      textAlign: {
                        xs: "center",
                        sm: "left",
                      },
                    }}
                  >
                    {data.info}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}
