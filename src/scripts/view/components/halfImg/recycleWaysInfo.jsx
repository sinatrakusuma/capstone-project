import React from "react";
import { Box, Typography } from "@mui/material";
import HeadingSectionText from "../headingSectionText/headingSectionText";
import { Container } from "@mui/system";
import dataRecycle from "../../../data/dataRecycle";

export default function RecycleWaysInfo() {
  return (
    <Container
      sx={{
        "&.MuiContainer-root": {
          padding: {
            xs: "40px 24px",
            md: "40px 80px",
          },
        },
        minHeight: "400px",
        margin: "5rem auto",
      }}
    >
      <HeadingSectionText
        headingText="Cara Daur Ulang Sampah"
        helperText="Berikut cara mendaur ulang sampah berdasarkan jenisnya"
      />
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Box>
          {dataRecycle.map((data) => {
            return (
              <Box
                key={data.title}
                mt={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: {
                    xs: "column",
                    md: "row",
                  },
                  gap: "24px",
                }}
              >
                <Box
                  sx={{
                    width: {
                      xs: "100%",
                      md: "calc(100%/2)",
                    },
                    minHeight: "300px",
                    borderRadius: "12px",
                    backgroundImage: `${data.image}`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></Box>
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontFamily: "Manrope",
                        fontSize: "30px",
                        fontWeight: "bold",
                        color: "#4DA247",
                        my: 1,
                      }}
                    >
                      {data.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Manrope",
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "#7D7D7D",
                        textAlign: "justify",
                        my: 2,
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      {data.content}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
}
