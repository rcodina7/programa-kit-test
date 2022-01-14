import * as React from "react";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";

export default function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ mb: 5, mt: 5 }}
    >
      {"Copyright © "}
      <MuiLink color="inherit" href="https://www.logicsolutions.es/">
        logicsolutions
      </MuiLink>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}
