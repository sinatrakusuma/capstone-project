import { Box } from "@mui/material";
// import { Box, styled, Typography } from "@mui/material";
import React from "react";

const Marticle = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginTop: "5rem",
        height: "40vh",
        justifyContent: "space-evenly",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "85vw",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            width: "460px",
            height: "306px",
            backgroundImage: "url(./7.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
          }}
        ></div>
        <div
          style={{
            width: "576px",
            height: "306px",
            display: "flex",
            alignCenter: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <div
              style={{
                border: "1px solid red",
                height: "135px",
                widht: "235px",
                margin: "10px",
                borderRadius: "15px",
              }}
            ></div>
            <div
              style={{
                border: "1px solid red",
                height: "135px",
                width: "235px",
                margin: "10px",
                borderRadius: "15px",
              }}
            ></div>
          </div>
          <div>
            <div
              style={{
                border: "1px solid red",
                height: "135px",
                widht: "235px",
                margin: "10px",
                borderRadius: "15px",
              }}
            ></div>
            <div
              style={{
                border: "1px solid red",
                height: "135px",
                width: "235px",
                margin: "10px",
                borderRadius: "15px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Marticle;
