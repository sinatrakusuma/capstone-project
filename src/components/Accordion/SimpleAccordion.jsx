import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Container } from "@mui/system";
import dataWasteArticel from "../../data/dataWasteArticel";
import HeadingSection from "../headingSection/headingSection";
import HeadingHelperText from "../headingHelperText/headingHelperText";

function SimpleAccordion() {
  return (
    <Container
      sx={{
        padding: {
          xs: "40px 24px",
          md: "40px 80px",
        },
        margin: "5rem auto",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HeadingSection heading="Artikel" />
        <HeadingHelperText helperText="Berikut merupakan Beberapa artikel penting terkait sampah dan lingkungan" />

        <Box
          component="div"
          sx={{
            width: "100%",
          }}
        >
          {dataWasteArticel.map((data) => {
            return (
              <Accordion
                key={data.id}
                sx={{
                  boxShadow: "none",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
                  borderRadius: "none",
                  "&:before": {
                    display: "none",
                  },
                  "&:last-of-type": {
                    borderRadius: 0,
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={{
                      fontFamily: "Manrope",
                    }}
                  >
                    {data.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      lineHeight: "24px",
                      fontFamily: "Manrope",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {data.content}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
}
export default SimpleAccordion;
