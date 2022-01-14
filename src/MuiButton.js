import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { alpha } from "@mui/system";
import FormDialog from "./FormDialog";
import { useRouter } from "next/router";

function MuiButton(props) {
  const {
    text,
    customColor,
    opacity,
    disableElevation,
    fullWidth,
    isDashboard,
    sx,
    variant,
    isUserLoggedIn,
    submit,
    isLogin,
    clickEvent,
    color,
  } = props;

  const [open, setOpen] = useState(false);
  const [signInId, setSignInId] = useState();

  const router = useRouter();

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);
  const handleDashboard = () => router.push("/dashboard");

  const handleOnClickEvent = () => {
    return isUserLoggedIn
      ? handleDashboard()
      : isDashboard && handleClickOpen();
  };

  return (
    <>
      <Button
        disableElevation={disableElevation ? true : false}
        color={color ? color : "secondary"}
        variant={variant ? variant : "contained"}
        fullWidth={fullWidth ? true : false}
        type={submit && "submit"}
        sx={{
          borderRadius: 10,
          padding: "1rem 2rem",
          textTransform: "unset",
          fontWeight: 600,
          fontSize: 18,
          lineHeight: "22px",
          margin: "1rem 0",
          backgroundColor: (theme) =>
            opacity ? alpha(theme.palette.success.main, opacity) : "default",
          "&:hover": {
            background: (theme) =>
              opacity ? alpha(theme.palette.success.main, 0.2) : "default",
          },
          color: (theme) =>
            customColor ? theme.palette.primary.main : "default",
          ...sx,
        }}
        onClick={clickEvent ? clickEvent : () => handleOnClickEvent()}
      >
        {text}
      </Button>
      <FormDialog handleClose={handleClose} open={open} />
    </>
  );
}

export default MuiButton;
