import { Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import SimpleDialog from "./SimpleDialog";

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
      <Typography variant="h1" align="center">
        Menu
      </Typography>

      <br />
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </Container>
  );
}
