import React from "react";
import { Container } from "@mui/system";
import { Typography, Box, Grid } from "@mui/material";
import dataReasonInformation from "../../data/dataReasonInformation";
import HeadingSectionText from "../headingSectionText/headingSectionText";

export default function ReasonInformation() {
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
        backgroundColor: "#F5F5F5",
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
        <HeadingSectionText headingText="Mengapa Dausagi" />
        <Box mb={4}>
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
                        fontFamily: "Manrope",
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
                        width: "100%",
                        fontFamily: "Manrope",
                        fontWeight: "400",
                        fontSize: {
                          xs: "12px",
                          md: "14px",
                        },
                        color: "#7D7D7D",
                        lineHeight: "24px",
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
      </Box>
    </Container>
  );
}
