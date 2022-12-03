import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import HeadingSection from "../headingSection/headingSection";

const Article = ({ dataInfo, textHeading }) => {
  return (
    <Container
      sx={{
        "&.MuiContainer-root": {
          padding: "0",
        },
        minHeight: "400px",
        margin: "5rem auto",
      }}
    >
      <Box
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
          }}
        >
          <HeadingSection heading={textHeading} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          {dataInfo.map((data) => {
            return (
              <Box
                key={data.title}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  alignItems: "center",
                  padding: "24px 12px",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "Manrope",
                    fontSize: {
                      xs: "20px",
                      md: "24px",
                    },
                    fontWeight: "700",
                    color: "#2E582C",
                    my: 1,
                    padding: "12px",
                  }}
                >
                  {data.title}
                </Typography>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Manrope",
                      fontSize: {
                        xs: "14px",
                        md: "16px",
                      },
                      lineHeight: "24px",
                      fontWeight: "400",
                      color: "#7D7D7D",
                      textAlign: "center",
                    }}
                  >
                    {data.content}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default Article;
