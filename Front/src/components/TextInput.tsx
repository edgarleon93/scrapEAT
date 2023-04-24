import { useState } from "react";
// import { useMutation, gql } from "@apollo/client";
import { Box, Button, TextField } from "@mui/material";

// const SEND_TEXT_MUTATION = gql`
//   mutation SendTextMutation($textData: String!) {
//     sendText(textData: $textData) {
//       id
//       message
//     }
//   }
// `;

function TextInput() {
  // const [textFieldValue, setTextFieldValue] = useState("");

  // const [sendText] = useMutation(SEND_TEXT_MUTATION, {
  //   onError: (error) => console.error(error),
  //   onCompleted: (data) => console.log(data),
  // });

  return (
    <Box sx={{ align: "center", display: "flex", mt: 10, px: 5 }}>
      <TextField
        fullWidth
        id="standard-primary"
        label="https://www..."
        variant="outlined"
        size="small"
        color="primary"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
}

export default TextInput;
