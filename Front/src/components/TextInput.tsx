import { useState, useRef } from "react";
// import { useMutation, gql } from "@apollo/client";
import { Box, Button, TextField } from "@mui/material";

// const SEND_TEXT_MUTATION = gql
//   mutation SendTextMutation($textData: String!) {
//     sendText(textData: $textData) {
//       id
//       message
//     }
//   }
// ;

function TextInput() {
  const textFieldRef = useRef<HTMLInputElement>(null);

  // const [sendText] = useMutation(SEND_TEXT_MUTATION, {
  //   onError: (error) => console.error(error),
  //   onCompleted: (data) => console.log(data),
  // });

  const handleClick = () => {
    console.log("test");
  };

  return (
    <Box sx={{ align: "center", display: "flex", mt: 10, px: 5 }}>
      <TextField
        inputRef={textFieldRef}
        fullWidth
        id="standard-primary"
        placeholder="https://www/..."
        variant="filled"
        size="small"
        color="primary"
      />
      <Button
        type="submit"
        onClick={handleClick}
        variant="contained"
        color="primary"
        sx={{
          boxShadow: "none",
          backgroundColor: "primary.main",
          borderRadius: "4px",

          ":hover ": {
            transform: "scale(1.1)",
            transition: "all 0.3s ease",
            backgroundColor: "primary.main",
          },
        }}
      >
        Submit
      </Button>
    </Box>
  );
}

export default TextInput;