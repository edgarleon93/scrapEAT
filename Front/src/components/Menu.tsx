import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import SimpleDialog from "./Content";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Content from "./Content";

interface SimpleDialogProps {
  selectedValue: string;
  open: boolean;
  onClose: (value: string) => void;
}

export function Menu(): React.ReactElement {
  const [selectedValue, setSelectedValue] = useState<string>("None");
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <Container>
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "primary.main",
            px: 2,
            py: 1,
            m: 2,
            borderRadius: "4px",
            ":hover ": {
              transform: "scale(1.2)",
              transition: "all 0.3s ease",
              backgroundColor: "primary.main",
            },
          }}
          onClick={handleClickOpen}
        >
          <Typography variant="body2" color="secondary">
            Menu
          </Typography>
        </Button>
      </Box>
      <Content
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </Container>
  );
}
