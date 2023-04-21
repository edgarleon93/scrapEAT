import React from "react";
import { Box, Container, TextField, Typography } from "@mui/material";

export function Index() {
  return (
    <>
      <Typography variant="h1" align="center" sx={{ px: 5, pt: 30 }}>
        Paste the url you want us to scrap,
      </Typography>
      <Typography variant="h1" align="center" sx={{ px: 5 }}>
        we take care of the rest
      </Typography>
      <Box align="center" sx={{ mt: 10, px: 5 }}>
        <TextField
          fullWidth
          id="standard-basic"
          label="Past here"
          variant="outlined"
          size="small"
        />
      </Box>
    </>
  );
}
