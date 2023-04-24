import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Navbar from "./navbar/Navbar";
import { Box, Container } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function SimpleAccordion() {
  return (
    <div>
      <Container>
        <Accordion
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            border: "1px solid",
          }}
        >
          <AccordionSummary
            expandIcon={<MoreVertIcon sx={{ color: "primary.main" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              "&.Mui-expanded": {
                margin: 0,
              },
            }}
          >
            <Typography variant="body1" color="primary.main">
              Accordion 1
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography variant="body2" color="primary.main">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
}
