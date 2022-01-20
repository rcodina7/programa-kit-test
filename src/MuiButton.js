import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { alpha } from "@mui/system";
import SolicitudFormDialog from "components/Solicitud/SolicitudFormDialog";
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
    submit,
    clickEvent,
    color,
  } = props;

  //SOLICITUD FORM MODAL
  const [openSolicitud, setOpenSolicitud] = React.useState(false);
  const handleClickOpenSolicitud = () => setOpenSolicitud(true);
  const handleCloseSolicitud = () => setOpenSolicitud(false);
  //************ */

  const handleOnClickEvent = () => {
    return isDashboard && handleClickOpenSolicitud();
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
      <SolicitudFormDialog
        handleClickOpenSolicitud={handleClickOpenSolicitud}
        handleCloseSolicitud={handleCloseSolicitud}
        openSolicitud={openSolicitud}
      />
    </>
  );
}

export default MuiButton;
