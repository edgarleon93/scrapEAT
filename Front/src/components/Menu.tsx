import { Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import SimpleDialog from "./SimpleDialog";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
      <Button variant="outlined" onClick={handleClickOpen}>
        <Typography variant="body2">Open simple dialog</Typography>
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </Container>
  );
}
