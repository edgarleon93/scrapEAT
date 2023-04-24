import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useMutation, gql } from "@apollo/client";

const CREATE_ITEM_MUTATION = gql`
  mutation CreateItem($text: String!) {
    createItem(text: $text) {
      id
      text
    }
  }
`;

const MyForm = () => {
  const [text, setText] = useState("");

  const [createItem, { loading, error }] = useMutation(CREATE_ITEM_MUTATION);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    createItem({
      variables: {
        text: text,
      },
    }).then(() => {
      setText("");
      console.log("Item created successfully");
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <Box align="center" sx={{ mt: 10, px: 5 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="standard-primary"
          label="Past here"
          variant="outlined"
          size="small"
          color="primary"
          value={text}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Box>
  );
};
