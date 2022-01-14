import { Input, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function NewScan() {
  return (
    <Box>
      <TextField
        id="outlined-basic"
        label="Introduce página"
        variant="standard"
      />
    </Box>
  );
}

export default NewScan;
