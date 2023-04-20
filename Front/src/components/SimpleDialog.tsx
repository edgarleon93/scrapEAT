import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

interface SimpleDialogProps {
  selectedValue: string;
  open: boolean;
  onClose: (value: string) => void;
}

const options = ["Login", "My recipes", "My history", "Logout"];

const SimpleDialog: React.FC<SimpleDialogProps> = (props) => {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Menu</DialogTitle>
      <DialogContent>
        <List>
          {options.map((option) => (
            <ListItem
              button
              onClick={() => handleListItemClick(option)}
              key={option}
            >
              <ListItemText primary={option} />
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SimpleDialog;
