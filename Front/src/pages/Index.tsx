import React from "react";
import { Box, TextField, Typography, Button } from "@mui/material";

export function Index() {
  return (
    <>
      <Typography variant="h1" align="center" sx={{ px: 5, pt: 25 }}>
        Paste the url you want us to scrap,
      </Typography>
      <Typography variant="h1" align="center" sx={{ px: 5 }}>
        we take care of the rest
      </Typography>
      <Box sx={{ display: "flex", mt: 10, px: 5 }}>
        <TextField
          fullWidth
          id="standard-primary"
          label="Past here"
          variant="outlined"
          size="small"
          color="primary"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </>
  );
}
