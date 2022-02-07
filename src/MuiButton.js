import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { alpha } from "@mui/system";
import SolicitudFormDialog from "components/Solicitud/SolicitudFormDialog";
import { useRouter } from "next/router";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
// );

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
    isStripe,
    plan,
  } = props;
  const router = useRouter();

  // React.useEffect(() => {
  //   // Check to see if this is a redirect back from Checkout
  //   const query = new URLSearchParams(window.location.search);
  //   if (query.get("success")) {
  //     console.log("Order placed! You will receive an email confirmation.");
  //   }

  //   if (query.get("canceled")) {
  //     console.log(
  //       "Order canceled -- continue to shop around and checkout when you’re ready."
  //     );
  //   }
  // }, []);

  //SOLICITUD FORM MODAL
  const [openSolicitud, setOpenSolicitud] = React.useState(false);
  const handleClickOpenSolicitud = () => setOpenSolicitud(true);
  const handleCloseSolicitud = () => setOpenSolicitud(false);
  //************ */

  const handleStripePayment = () => {
    router.push(
      plan === "Base"
        ? "https://buy.stripe.com/aEUeWm5llbwd0367st"
        : "https://buy.stripe.com/aEU5lMdRR6bT5nq6oq"
    );
  };

  const handleOnClickEvent = () => {
    isDashboard && router.push("/#planes");
    isStripe && handleStripePayment();
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
