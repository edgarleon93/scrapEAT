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
  MenuList,
  Box,
  Container,
  Typography,
  ListItemIcon,
} from "@mui/material";
import { BookmarkBorder, History, Logout } from "@mui/icons-material";

interface SimpleDialogProps {
  selectedValue: string;
  open: boolean;
  onClose: (value: string) => void;
}

const options = [
  { label: "My recipes", icon: <BookmarkBorder /> },
  { label: "My history", icon: <History /> },
  { label: "Logout", icon: <Logout /> },
];

const Content: React.FC<SimpleDialogProps> = (props) => {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box sx={{ backgroundColor: "primary.main", px: 4 }}>
        <DialogTitle color="secondary" align="center" sx={{ my: 1 }}>
          <Typography variant="body2">Menu</Typography>
        </DialogTitle>
        <DialogContent>
          <List>
            {options.map((option) => (
              <ListItem
                sx={{
                  color: "secondary.main",
                  gap: 1,
                }}
                button
                onClick={() => handleListItemClick(option.label)}
                key={option.label}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <ListItemText
                    primary={option.label}
                    sx={{ textAlign: "center" }}
                  />
                  <ListItemIcon
                    sx={{ px: 2, color: "secondary.main", textAlign: "right" }}
                  >
                    {option.icon}
                  </ListItemIcon>
                </Box>
              </ListItem>
            ))}
          </List>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default Content;
