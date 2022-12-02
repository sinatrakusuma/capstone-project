import React from "react";
import { Container } from "@mui/system";
import { Typography, Box, Grid } from "@mui/material";
import HeadingSection from "../headingSection/headingSection";
import dataReasonInformation from "../../data/dataReasonInformation";

export default function ReasonInformation() {
  return (
    <Container
      sx={{
        minHeight: "400px",
        margin: "5rem 0",
        backgroundColor: "#F5F5F5",
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
        <HeadingSection heading="Mengapa Dausagi?" />
      </Box>
      <Box my={4}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {dataReasonInformation.map((data) => {
            const { id, title, content, Icon } = data;
            return (
              <Grid
                key={id}
                item
                xs={12}
                md={3}
                sx={{
                  display: "flex",
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
                  <Icon color="#D0D0D0" size={64} strokeWidth={1} />
                </Box>
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: {
                        xs: "20px",
                        md: "24px",
                      },
                      fontWeight: "600",
                      color: "#4DA247",
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    mt={1}
                    sx={{
                      fontSize: "12px",
                      color: "#7D7D7D",
                    }}
                  >
                    {content}
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
