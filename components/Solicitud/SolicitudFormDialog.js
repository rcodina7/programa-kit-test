import React, { useState, forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Link from "next/link";
import MuiButton from "src/MuiButton";
import {
  Container,
  Grid,
  MenuItem,
  Paper,
  TextField,
  useMediaQuery,
} from "@mui/material";
import Copyright from "src/Copyright";
import { Box } from "@mui/system";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import handleContactFormValidation from "utils/contactFormValidation";
import AlertMessage from "src/AlertMessage";
import LoadingButton from "@mui/lab/LoadingButton";
import emailjs from "@emailjs/browser";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({
  currentStyles,
  handleClickOpenSolicitud,
  handleCloseSolicitud,
  openSolicitud,
  type,
}) {
  //*********************************************************** */
  const [formValues, setFormValues] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [displayError, setDisplayError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const isMoreThan500px = useMediaQuery("(min-width:500px)");

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
    const contacto = "Formulario Solicitud";
    const web = "https://kitdigital.logicsolutions.es/";
    const templateId = { ...formValues, contacto, web };

    const formElement = document.createElement("form");

    for (const el in templateId) {
      const newInput = document.createElement("input");
      newInput.setAttribute("value", templateId[el]);
      newInput.name = el;
      formElement.append(newInput);
    }

    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formElement,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        (result) => {
          setLoading(false);
          setMessageSent(true);
          validationFailed("En breves nos pondremos en contacto!");
          setFormValues("");
        },
        (e) => {
          console.log(e.text);
        }
      );
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
        <MuiButton text={"Contáctenos"} clickEvent={handleClickOpenSolicitud} />
      ) : type === "MuiButtonFullWidth" ? (
        <MuiButton
          fullWidth
          text={"Contáctenos"}
          clickEvent={handleClickOpenSolicitud}
        />
      ) : null}
      {/* TEXT NAVBAR */}
      {type === "solicitud" ? (
        <MenuItem onClick={handleClickOpenSolicitud}>
          <p>Solicitud</p>
        </MenuItem>
      ) : type === "solicitudDesktop" ? (
        <Link
          variant="button"
          color="text.primary"
          href="#"
          sx={{ ...currentStyles?.li }}
        >
          <a onClick={handleClickOpenSolicitud}> Solicitud</a>
        </Link>
      ) : null}

      {type === "solicitudService2" ? (
        <MuiButton
          fullWidth
          text="Solicitar"
          clickEvent={handleClickOpenSolicitud}
          sx={{ width: "15rem" }}
        />
      ) : type === "solicitudServiceFull2" ? (
        <MuiButton
          fullWidth
          text="Solicitar"
          opacity={0.15}
          customColor
          clickEvent={handleClickOpenSolicitud}
          sx={{ width: "15rem" }}
        />
      ) : null}

      <Dialog
        fullScreen
        open={openSolicitud}
        onClose={handleCloseSolicitud}
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
        <h2 style={{ marginTop: "5rem", marginBottom: "1rem" }}>Solicitud</h2>
        <p style={{ textAlign: "center", marginBottom: "2rem" }}>
          Déjanos tus datos y nos pondremos en contacto
        </p>
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleCloseSolicitud}
          aria-label="close"
          sx={{
            position: "absolute",
            left: isMoreThan500px ? "5rem" : "1rem",
            top: isMoreThan500px ? "3rem" : "1rem",
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
                    ¿Tienes dudas? Contáctanos
                  </p>
                  <p className="white" style={{ fontWeight: "normal" }}>
                    Orientados 100% a resultados, resolveremos tus dudas y
                    gestionaremos tu solicitud
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
