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
import {
  Apple,
  BookmarkBorder,
  Facebook,
  Google,
  History,
  Logout,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

interface SimpleDialogProps {
  selectedValue: string;
  open: boolean;
  onClose: (value: string) => void;
  isConnected: boolean;
}

const menuOptions = [
  { label: "My recipes", icon: <BookmarkBorder /> },
  { label: "My history", icon: <History /> },
  { label: "Logout", icon: <Logout /> },
];
const loginOptions = [
  { label: "Connect with ", icon: <Facebook /> },
  { label: "Connect with ", icon: <Google /> },
  { label: "Connect with", icon: <Apple /> },
];

const Content: React.FC<SimpleDialogProps> = (props) => {
  const { onClose, selectedValue, open, isConnected } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };
  const navigate = useNavigate();

  const handleRedirect = (label: string) => {
    console.log(label);
    handleListItemClick(label);
    if (label === "My recipes") {
      navigate("/recipe");
    } else if (label === "My history") {
      navigate("/history");
    } else if (label === "Logout") {
      navigate("/");
    }
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box
        sx={{
          backgroundColor: "primary.main",
          p: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DialogContent>
          <List>
            {(isConnected ? menuOptions : loginOptions).map((option) => (
              <ListItem
                sx={{
                  color: "secondary.main",
                  textAlign: "center",
                  mx: 2,
                }}
                button
                onClick={() => handleRedirect(option.label)}
                key={option.label}
              >
                <Box
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignText: "center",
                  }}
                >
                  <ListItemText primary={option.label} />
                </Box>
                <ListItemIcon
                  sx={{
                    color: "secondary.main",
                    textAlign: "right",
                  }}
                >
                  {option.icon}
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default Content;
