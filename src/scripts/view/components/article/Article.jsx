import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import HeadingSectionText from "../headingSectionText/headingSectionText";

const Article = ({ dataInfo, textHeading, helperText }) => {
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
        <HeadingSectionText headingText={textHeading} helperText={helperText} />
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
                  padding: {
                    xs: "24px 0",
                    md: "24px 12px",
                  },
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
                    color: "#4DA247",
                    my: 1,
                    padding: "12px",
                    textAlign: "center",
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

Article.propTypes = {
  dataInfo: PropTypes.array.isRequired,
  textHeading: PropTypes.string.isRequired,
  helperText: PropTypes.string,
};

export default Article;
