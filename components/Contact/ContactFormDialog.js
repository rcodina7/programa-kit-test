import React, { useState, forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Link from "next/link";
import MuiButton from "src/MuiButton";
import { Container, Grid, MenuItem, Paper, TextField } from "@mui/material";
import Copyright from "src/Copyright";
import { Box } from "@mui/system";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import handleContactFormValidation from "utils/contactFormValidation";
import AlertMessage from "src/AlertMessage";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({
  currentStyles,
  handleClickOpen,
  handleClose,
  open,
  type,
}) {
  //*********************************************************** */
  const [formValues, setFormValues] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [displayError, setDisplayError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  //*********************************************************** */
  const handleFormChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  //*********************************************************** */
  const handleContactFormSubmit = (e) => {
    e.preventDefault();

    setMessageSent(false);
    setErrorMessage();
    setDisplayError(false);

    if (!formValues?.name || !formValues?.email || !formValues.mensaje)
      return validationFailed("Debes rellenar los campos obligatorios.");

    const validateForm = handleContactFormValidation(formValues);

    const { success, message } = validateForm;

    success ? validationSuccess() : validationFailed(message);
  };

  //*********************************************************** */
  const validationSuccess = async () => {
    setLoading(true);

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    }).then((res) => {
      if (res.status === 200) {
        setTimeout(() => {
          setLoading(false);
          setMessageSent(true);
          validationFailed("En breves nos pondremos en contacto!");
          setFormValues("");
        }, 1000);
      }
    });
  };

  //*********************************************************** */
  const validationFailed = (message) => {
    setDisplayError(true);
    setErrorMessage(message);
  };

  //*********************************************************** */
  return (
    <div>
      {/* BUTTON CONTACT SECTION */}
      {type === "MuiButton" ? (
        <MuiButton text={"Contáctenos"} clickEvent={handleClickOpen} />
      ) : type === "MuiButtonFullWidth" ? (
        <MuiButton
          fullWidth
          text={"Contáctenos"}
          clickEvent={handleClickOpen}
        />
      ) : null}
      {/* TEXT NAVBAR */}
      {type === "contact" ? (
        <MenuItem onClick={handleClickOpen}>
          <p>Contacto</p>
        </MenuItem>
      ) : type === "contactDesktop" ? (
        <Link
          variant="button"
          color="text.primary"
          href="#"
          sx={{ ...currentStyles?.li }}
        >
          <a onClick={handleClickOpen}> Contacto</a>
        </Link>
      ) : null}

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        {displayError && (
          <AlertMessage
            type={messageSent ? "success" : "error"}
            message={errorMessage}
            setDisplayError={setDisplayError}
            displayError={displayError}
            messageSent={messageSent}
          />
        )}
        <h2 style={{ marginTop: "5rem", marginBottom: "1rem" }}>Contáctanos</h2>
        <p style={{ textAlign: "center", marginBottom: "2rem" }}>
          Comprueba si tu empresa puede acceder a las ayudas Kit Digital
        </p>
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
          sx={{
            position: "absolute",
            left: "5rem",
            top: "3rem",
          }}
        >
          <CloseIcon sx={{ fontSize: 40 }} />
        </IconButton>
        <Container sx={{ maxWidth: "1600px" }}>
          <Grid
            container
            component="main"
            sx={{
              height: "auto",
              borderRadius: "10px",
              mb: 10,
              boxShadow: "1px 2px 3px 1px rgba(0,0,0,0.2)",
            }}
          >
            <Grid
              item
              sm={false}
              md={4}
              sx={{
                backgroundRepeat: "no-repeat",
                backgroundColor: (t) =>
                  t.palette.mode === "light"
                    ? t.palette.grey[50]
                    : t.palette.grey[900],
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#3d405b",
                  margin: "1rem",
                  height: "95%",
                  borderRadius: "10px",
                  padding: "15px 40px 20px",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <img
                  src="/page/contacto_circle.svg"
                  alt="decorative green circle image"
                  style={{
                    width: "87px",
                    height: "89px",
                    position: "absolute",
                    bottom: 45,
                    right: 45,
                    zIndex: 100,
                    filter:
                      "invert(8%) sepia(100%) saturate(6481%) hue-rotate(246deg) brightness(102%) contrast(143%)",
                    opacity: "0.8",
                  }}
                />
                <img
                  src="/page/contacto_circle.svg"
                  alt="decorative green circle image"
                  style={{
                    width: "307px",
                    height: "309px",
                    position: "absolute",
                    bottom: -165,
                    right: -165,
                  }}
                />
                <div>
                  <p
                    className="white"
                    style={{ fontSize: "25px", marginBottom: "3rem" }}
                  >
                    Información de contacto
                  </p>
                  <p className="white" style={{ fontWeight: "normal" }}>
                    Si quieres saber si cumples las condiciones para poder
                    acceder al Programa Kit Digital, rellena el formulario y
                    nuestro equipo se pondrá en contacto en las siguientes 24h.
                  </p>
                </div>
                <ul
                  style={{
                    marginTop: "8rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <li>
                    <a href="https://api.whatsapp.com/send?phone=19292381922">
                      <Button
                        variant="outlined"
                        startIcon={<WhatsAppIcon />}
                        sx={{ color: "white", zIndex: 100 }}
                        size="large"
                      >
                        Whatsapp
                      </Button>
                    </a>
                  </li>
                  <li>
                    <Button
                      variant="outlined"
                      startIcon={<EmailIcon fontSize="large" />}
                      sx={{ color: "white", zIndex: 100 }}
                      size="large"
                      href="mailto:info@logicsolutions.es"
                    >
                      Email
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="outlined"
                      startIcon={<LinkedInIcon />}
                      sx={{ color: "white", zIndex: 100 }}
                      size="large"
                      href="https://www.linkedin.com/company/logic-solutions-consulting"
                    >
                      Linkedin
                    </Button>
                  </li>
                </ul>
              </Box>
            </Grid>
            <Grid
              item
              sm={12}
              md={8}
              component={Paper}
              square
              sx={{
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
                bgcolor: "#fafafa",
                boxShadow: "unset",
              }}
            >
              <Box
                sx={{
                  mt: 3,
                  mb: 8,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  component="form"
                  sx={{ width: "100%" }}
                  noValidate
                  onSubmit={handleContactFormSubmit}
                  onChange={handleFormChange}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        margin="normal"
                        fullWidth
                        id="name"
                        label="Nombre"
                        name="name"
                        autoComplete="name"
                        variant="standard"
                        required
                        value={formValues?.name ? formValues.name : ""}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        margin="normal"
                        fullWidth
                        id="phone"
                        label="Teléfono"
                        name="phone"
                        autoComplete="phone"
                        variant="standard"
                        type="number"
                        value={formValues?.phone ? formValues.phone : ""}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        variant="standard"
                        required
                        value={formValues?.email ? formValues.email : ""}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        margin="normal"
                        fullWidth
                        id="empresa"
                        label="Empresa"
                        name="empresa"
                        autoComplete="empresa"
                        variant="standard"
                        value={formValues?.empresa ? formValues.empresa : ""}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="outlined-multiline-flexible"
                        label="Mensaje"
                        name="mensaje"
                        multiline
                        minRows={8}
                        maxRows={8}
                        variant="filled"
                        fullWidth
                        required
                        value={formValues?.mensaje ? formValues.mensaje : ""}
                      />
                    </Grid>

                    <LoadingButton
                      loading={loading}
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      color="secondary"
                    >
                      {loading ? "Enviando" : "Enviar"}
                    </LoadingButton>
                  </Grid>
                </Box>
              </Box>
              <Copyright />
            </Grid>
          </Grid>
        </Container>
      </Dialog>
    </div>
  );
}
