import { Box, styled, Typography } from "@mui/material";
import React from "react";

const Marticle = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "600px",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginTop:"5rem",
        height:"40vh",
        justifyContent:"space-evenly"
        
      }}>
        <div
        style={{
          display:"flex",
          alignItems:"center",
          justifyContent:"center"
        }}
        >
        
        <div
        style={{
           display:"flex",
           width:"85vw",
           alignItems:"center",
           flexDirection:"row",
           justifyContent:"space-around",
        }}>
        <div
        style={{
            width:"460px",
            height:"306px",
            backgroundImage: "url(https://images.unsplash.com/photo-1661783608378-a1e93dc34025?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px"
        }}></div>
        
        <div
        style={{
            width:"636px",
            height:"306px",
            display:"flex",
            alignCenter:"center",
            justifyContent:"center",
        }}>
        <div>    
        <div
        style={{
            border:"1px solid blue",
            height:"120px",
            widht:"630px",
            margin:"10px",
            borderRadius:"15px",
            display:"flex",
            alignCenter:"center",
            justifyContent:"center",
            padding:"10px"
        }}>
          <div>
          <Typography
        variant="h3"
        sx={{ fontSize: "25px", fontWeight: "bold", color: "#000339", my: 1 }}
      >
        Layanan kami
      </Typography>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#5A6473",
          }}
        >
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, eos ducimus distinctio exercitationem excepturi, illo assumenda quaerat debitis culpa, harum blanditiis minima itaque explicabo doloribus?
        </Typography>
      </CustomBox>
          </div>
        </div>
        <div
        style={{
            border:"1px solid blue",
            height:"120px",
            widht:"630px",
            margin:"10px",
            borderRadius:"15px",
            display:"flex",
            alignCenter:"center",
            justifyContent:"center",
            padding:"10px"
        }}>
          <div>
          <Typography
        variant="h3"
        sx={{ fontSize: "25px", fontWeight: "bold", color: "#000339", my: 1 }}
      >
        Layanan kami
      </Typography>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#5A6473",
          }}
        >
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, eos ducimus distinctio exercitationem excepturi, illo assumenda quaerat debitis culpa, harum blanditiis minima itaque explicabo doloribus?
        </Typography>
      </CustomBox>
          </div>
        </div>
       

        </div>
        </div>
        </div>
        </div>
    </Box>
  );
};

export default Marticle;
