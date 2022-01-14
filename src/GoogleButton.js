import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

function GoogleButton({ message, sx, signUpWithGoogle }) {
  return (
    <>
      <Button
        variant="outlined"
        color="success"
        startIcon={
          <img
            src="/logo_google.svg"
            alt="google icon"
            width="30px"
            height="30px"
          />
        }
        sx={{ mt: 5, ...sx }}
        onClick={signUpWithGoogle}
      >
        {message}
      </Button>
    </>
  );
}

export default GoogleButton;
