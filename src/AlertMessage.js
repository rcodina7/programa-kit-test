import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { AlertTitle, getAlertTitleUtilityClass } from "@mui/material";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} {...props} />;
});

export default function AlertMessage({
  type,
  message,
  displayError,
  setDisplayError,
  messageSent,
}) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;

    setDisplayError(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={displayError}
        autoHideDuration={6000}
        onClose={handleClose}
        key={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
          <AlertTitle>{messageSent ? "Enviado" : "Error"}</AlertTitle>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
