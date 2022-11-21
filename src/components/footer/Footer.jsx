import { styled, Typography } from "@mui/material";
import { Box, Container} from "@mui/system";
import React from "react";
import "./footer.scss"
import fbIcon from "../../media/fbicon.png";
import twitterIcon from "../../media/twittericon.png";
import linkedinIcon from "../../media/linkedinicon.png";

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const DeskLink = styled("p")(() => ({
    fontSize: "16px",
    color: "#FFFFFF",
    fontWeight: "400",
    width:"350px"
  }));

  return (
    <Box sx={{ py: 10 }}>
      <CustomContainer>
        <CustomContainer>
          <Box>
            <div className="brand">
            <div className="icon"></div>
            <div className="typo-center">
            <Typography
              sx={{
                fontSize: "20px",
                color: "#FFFFFF",
                fontWeight: "700",
                fontFamily:"Manrope, sans-serif"
              }}
              >
              DAUSAGI
            </Typography>
            </div>
            </div>

            <DeskLink>DAUSAGI merupakan Platform Bank sampah digital untuk membantu dan memudahkan masyarakat dalam pengelolaan sampah.</DeskLink>
            <DeskLink>Jl. Soerkarno Hatta, No.12</DeskLink>
            <DeskLink>Jam 08.00 - 17.00</DeskLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#FFFFFF",
                fontWeight: "700",
                mb: 2,
                fontFamily:"Manrope, sans-serif"
              }}
            >
              Link
            </Typography>
            <ul>
            <li><a href="#">beranda</a></li>
            <li><a href="#">bank sampah</a></li>
            <li><a href="#">daur ulang</a></li>
            <li><a href="#">layanan</a></li>
            <li><a href="#">tentang kami</a></li>
            </ul>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#FFFFFF",
                fontWeight: "700",
                mb: 2,
                fontFamily:"Manrope, sans-serif"
              }}
            >
              Temukan Kami
            </Typography>


            <IconBox>
              <img src={fbIcon} alt="fbIcon" style={{ cursor: "pointer" }} />
              <img
                src={twitterIcon}
                alt="twitterIcon"
                style={{ cursor: "pointer" }}
              />
              <img
                src={linkedinIcon}
                alt="linkedinIcon"
                style={{ cursor: "pointer" }}
              />
            </IconBox>
          </Box>
        </CustomContainer>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
