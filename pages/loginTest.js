import React, { useState, useEffect, useContext } from "react";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import MuiButton from "src/MuiButton";
import { validateEmail, validatePassword } from "utils/authInputValidation";
import AlertMessage from "src/AlertMessage";
import Copyright from "src/Copyright";
import { handleCustomAuthRequest } from "api/customAuthAPI";
import { useRouter } from "next/router";
import { AuthContext } from "contexts/auth.context";
import GoogleButton from "src/GoogleButton";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { Button, Divider } from "@mui/material";

export default function Login({ csrfToken }) {
  const [formValues, setFormValues] = useState();
  const [remember, setRemember] = useState(false);
  const [displayError, setDisplayError] = useState(false);
  const [errorMesssage, setErrorMessage] = useState();
  const router = useRouter();
  const [isUserLoggedIn, setIsUserLoggedIn] = useContext(AuthContext);

  //   useEffect(() => {
  //     if (session) {
  //       setIsUserLoggedIn(session);
  //       router.push("/");
  //     } else setIsUserLoggedIn(false);
  //   }, [session]);

  useEffect(() => setFormValues({ ...formValues, remember }), [remember]);

  useEffect(() => {
    if (displayError) {
      setTimeout(() => {
        setDisplayError(false);
      }, 6000);
    }
  }, [displayError]);

  const handleFormChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setDisplayError(false);

    // const isEmailValid = validateEmail(formValues);
    const isEmailValid = true;
    // const isPasswordValid = validatePassword(formValues);
    const isPasswordValid = true;

    if (!isEmailValid || !isPasswordValid) {
      setErrorMessage("E-mail y/o contraseña deben contener valores correctos");
      setDisplayError(true);
    } else {
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence exitBeforeEnter>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Grid container component="main" sx={{ height: "100vh" }}>
            <Grid item xs={false} sm={4} md={5}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                }}
              >
                <Link
                  sx={{
                    position: "absolute",
                    zIndex: 1,
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                    mt: "5rem",
                  }}
                  href="/"
                  underline="none"
                >
                  <img src="/login/logo.svg" alt="company logo" />
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "35.625px",
                      lineHeight: "49px",
                    }}
                  >
                    LOGIC LOCK
                  </Typography>
                </Link>
                <Image
                  src="/login/bg.png"
                  layout="fill"
                  alt="decorative background image"
                />
                <Box
                  component="div"
                  sx={{
                    bgcolor: "rgba(131, 216, 66, 0.7)",
                    width: "100%",
                    height: "100%",
                    position: " absolute",
                  }}
                ></Box>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={8}
              md={7}
              component={Paper}
              elevation={6}
              square
            >
              <Box
                sx={{
                  mx: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: 2,
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOpenIcon />
                </Avatar>
                <Typography
                  component="h1"
                  variant="h5"
                  sx={{
                    color: "#222222",
                    fontWeight: "bold",
                    fontSize: "25px",
                    lineHeight: "54px",
                  }}
                >
                  Iniciar Sesión
                </Typography>
                {displayError && (
                  <AlertMessage
                    type="error"
                    message={errorMesssage}
                    setDisplayError={setDisplayError}
                    displayError={displayError}
                  />
                )}
                <Box component="div" sx={{ mt: 1 }}>
                  <form method="post">
                    <input
                      name="csrfToken"
                      type="hidden"
                      defaultValue={csrfToken}
                    />

                    <TextField
                      margin="normal"
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      type="email"
                      autoFocus
                      variant="standard"
                    />
                    <Button
                      type="submit"
                      variant="outlined"
                      color="secondary"
                      fullWidth
                    >
                      Inicia Sesión con EMAIL
                    </Button>
                    <Divider sx={{ opacity: 0 }} />
                    <GoogleButton
                      message={"Inicia Sesión con Google"}
                      sx={{ width: "100%" }}
                    />
                  </form>

                  <Copyright />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  );
}
