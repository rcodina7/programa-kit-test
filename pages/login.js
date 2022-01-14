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
import AlertMessage from "src/AlertMessage";
import Copyright from "src/Copyright";
import { handleCustomAuthRequest } from "api/customAuthAPI";
import { useRouter } from "next/router";
import GoogleButton from "src/GoogleButton";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "@firebase/auth";
import { firebaseApp } from "firebase.config/firebaseConfig";
import validator from "validator";
import { AuthContext } from "contexts/auth.context";
import { addDoc, collection, getDocs, getFirestore } from "@firebase/firestore";

export default function Login({ session }) {
  const [formValues, setFormValues] = useState();
  const [remember, setRemember] = useState(false);
  const [displayError, setDisplayError] = useState(false);
  const [errorMesssage, setErrorMessage] = useState();

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const router = useRouter();

  useEffect(() => {
    getAuth(firebaseApp).onAuthStateChanged((user) => user && router.push("/"));
  }, [router]);

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

    const { email, password } = formValues;

    const validatedInputs = validateInputs(email, password);

    if (!validatedInputs) return;

    try {
      const logedUser = await signInWithEmailAndPassword(
        getAuth(),
        email,
        password
      );
      router.push("/");
    } catch (error) {
      loginFailed(
        `${
          error.code === "auth/wrong-password"
            ? "Contraseña incorrecta"
            : error.code
        }`
      );
    }
  };

  const signUpWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // ...
      console.log("before calling fn");
      setFirestoreDbUser(user);
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    }
  };

  const setFirestoreDbUser = async (data) => {
    console.log("inside fn");
    const db = getFirestore();

    try {
      const usersRef = collection(db, "users");
      console.log(usersRef);

      const allUsers = await getDocs(usersRef);
      console.log(allUsers);

      let existingUser = false;

      allUsers.forEach((user) => {
        if (user.data().email === data.email) {
          existingUser = true;
        }
      });

      console.log(existingUser);

      if (existingUser) return;

      addDoc(collection(db, "users"), {
        id: data.uid,
        email: data.email,
        name: data.displayName,
      });
    } catch (error) {
      loginFailed(error.message);
    }
  };

  const validateInputs = (email, password) => {
    if (!email || !password)
      return loginFailed("Debes rellenar los campos obligatorios.");

    if (!validator.isEmail(email))
      return loginFailed("El Email introducido no es correcto.");

    if (!validator.isLength(formValues.password, { min: 6 }))
      return loginFailed(
        "La contraseña debe tener un mínimo de seis carácteres"
      );

    return true;
  };

  const loginFailed = (message) => {
    setErrorMessage(message);
    setDisplayError(true);
  };

  return !session ? (
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
                <Box
                  component="form"
                  onSubmit={handleLoginSubmit}
                  sx={{ mt: 1 }}
                  onChange={handleFormChange}
                  noValidate
                >
                  <TextField
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                    autoComplete="off"
                    autoFocus
                    variant="standard"
                    required
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Contraseña"
                    type="password"
                    id="password"
                    autoComplete="off"
                    variant="standard"
                    required
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Recuérdame"
                    sx={{ mt: 2 }}
                    name="remember"
                    checked={remember}
                    onChange={() => setRemember(!remember)}
                  />
                  <MuiButton
                    fullWidth
                    sx={{ mt: 3, mb: 2 }}
                    text={"Acceder"}
                    disableElevation
                    submit
                    isLogin
                  />

                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Recuperar contraseña
                      </Link>
                    </Grid>

                    <Grid item>
                      <Link href="/registro" variant="body2">
                        {"No tienes cuenta? Regístrate"}
                      </Link>
                    </Grid>
                  </Grid>
                  <GoogleButton
                    message={"Inicia Sesión con Google"}
                    sx={{ mt: 1 }}
                    signUpWithGoogle={signUpWithGoogle}
                  />
                  <Copyright />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  ) : null;
}
