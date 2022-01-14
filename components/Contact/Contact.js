import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import ContactFormDialog from "../Contact/ContactFormDialog";

function Contacto() {
  const isMoreThan800px = useMediaQuery("(min-width:800px)");
  const isMoreThan1000px = useMediaQuery("(min-width:1000px)");

  //CONTACT FORM MODAL
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //************ */

  return (
    <Box component="section" sx={{ mt: { xs: 15, md: 22 }, mb: "92px" }}>
      {isMoreThan1000px ? (
        <>
          {/* <img
            src="/page/contacto_bg.svg"
            alt="decorative blue background image"
            style={{
              width: "1200px",
              height: "366.49px",
              position: "absolute",
              top: "300rem",
              right: "-33.5rem",
              zIndex: "-1",
            }}
          />
          <img */}
          src="/page/contacto_circle.svg" alt="decorative green circle image"
          style=
          {{
            width: "67px",
            height: "69px",
            position: "absolute",
            top: "310rem",
            right: "1rem",
            zIndex: 200,
          }}
          />
        </>
      ) : null}
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>Hablemos de su proyecto</h2>
        <p style={{ maxWidth: "700px" }}>
          Desde el desarrollo de sitios web y aplicaciones, al diseño y la
          gestión de tus redes y servidores, y la protección y seguridad de toda
          tu infrastructura. Logic Solutions ofrece una gestión integral de
          todas las necesidades digitales de tu negocio.
        </p>
        {isMoreThan800px ? (
          <ContactFormDialog
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            open={open}
            type={"MuiButton"}
          />
        ) : (
          <ContactFormDialog
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            open={open}
            type={"MuiButtonFullWidth"}
          />
        )}
      </div>
    </Box>
  );
}

export default Contacto;
