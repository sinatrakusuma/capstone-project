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
        minHeight: "400px",
        margin: "5rem 0",
        backgroundColor: `${background}`,
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
          justifyContent: "space-between",
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
              md={3}
              mt={2}
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: `${direction}`,
                justifyContent: {
                  xs: "center",
                  md: "flex-start",
                },
                alignItems: {
                  xs: "center",
                  md: "flex-start",
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
                      md: "left",
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
    </Container>
  );
}