import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import NavbarOnlyLogo from "components/Navbar/NavbarOnlyLogo";
import MuiButton from "src/MuiButton";
import Copyright from "src/Copyright";
import GoogleButton from "src/GoogleButton";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import AlertMessage from "src/AlertMessage";
import {
  collection,
  addDoc,
  getFirestore,
  getDoc,
  doc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { firebaseApp } from "firebase.config/firebaseConfig";
import { useRouter } from "next/router";

export default function SignUp() {
  const [formValues, setFormValues] = useState();
  const [displayError, setDisplayError] = useState(false);
  const [errorMesssage, setErrorMessage] = useState();
  const [comercialInformation, setComercialInformation] = useState(false);

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const router = useRouter();

  useEffect(() => {
    getAuth(firebaseApp).onAuthStateChanged((user) => user && router.push("/"));
  }, [router]);

  useEffect(() => {
    if (displayError) {
      setTimeout(() => {
        setDisplayError(false);
      }, 6000);
    }
  }, [displayError]);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (emptyRequiredInput())
      return validationFailed("Debes rellenar los campos obligatorios.");

    if (passwordDoesntMatch())
      return validationFailed("La contraseña no es la misma");

    registerUser();
  };

  const registerUser = async () => {
    const { email, password } = formValues;

    try {
      const createdUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const newUser = createdUser.user;

      setFirestoreDbUser("email", newUser);
    } catch (error) {
      validationFailed(`${error.message}`);
    }
  };

  const signUpWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // ...
      setFirestoreDbUser("google", user);
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

  const setFirestoreDbUser = async (type, data) => {
    const db = getFirestore();
    try {
      if (type === "email") {
        await addDoc(collection(db, "users"), {
          id: data.uid,
          email: data.email,
          name: formValues.name,
          company: formValues.empresa,
          comercialInfo: comercialInformation,
          phone: formValues?.telefono ? formValues.telefono : "undefined",
        });
      } else if (type === "google") {
        const usersRef = collection(db, "users");
        const allUsers = await getDocs(usersRef);
        let existingUser = false;

        allUsers.forEach((user) => {
          if (user.data().email === data.email) {
            existingUser = true;
          }
        });

        if (existingUser) return;

        addDoc(collection(db, "users"), {
          id: data.uid,
          email: data.email,
          name: data.displayName,
        });
      }
    } catch (error) {
      validationFailed(error.message);
    }
  };

  const validationFailed = (message) => {
    setDisplayError(true);
    setErrorMessage(message);
  };

  const emptyRequiredInput = () => {
    return (
      !formValues?.name ||
      !formValues?.email ||
      !formValues.empresa ||
      !formValues.password ||
      !formValues.repetirPassword
    );
  };

  const passwordDoesntMatch = () => {
    return formValues.password !== formValues.repetirPassword;
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
          <NavbarOnlyLogo />
          <Container component="main" maxWidth="md">
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" color="inherit">
                Registro
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
                onChange={handleChange}
              >
                {displayError && (
                  <AlertMessage
                    type="error"
                    message={errorMesssage}
                    setDisplayError={setDisplayError}
                    displayError={displayError}
                  />
                )}
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="standard"
                      autoComplete="name"
                      name="name"
                      required
                      fullWidth
                      id="name"
                      label="Nombre"
                      autoFocus
                      value={formValues?.name ? formValues.name : ""}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="standard"
                      required
                      fullWidth
                      id="empresa"
                      label="Empresa"
                      name="empresa"
                      autoComplete="empresa"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="standard"
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="standard"
                      fullWidth
                      id="telefono"
                      label="Teléfono"
                      name="telefono"
                      autoComplete="telefono"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="standard"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="standard"
                      required
                      fullWidth
                      name="repetirPassword"
                      label="Repetir Password"
                      type="password"
                      id="repetirPassword"
                      autoComplete="new-Repetirpassword"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Acepto recibir información comercial de Logic Solutions"
                      checked={comercialInformation}
                      onClick={() => setComercialInformation((prev) => !prev)}
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked required />}
                      label="He leído y acepto la política de privacidad"
                    />
                  </Grid>
                </Grid>

                <GoogleButton
                  message={"Regístrate con Google"}
                  sx={{ mt: 1 }}
                  signUpWithGoogle={signUpWithGoogle}
                />
                <MuiButton
                  fullWidth
                  sx={{ mt: 3, mb: 2 }}
                  text={"Registrarme"}
                  disableElevation
                  submit
                />
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/login" variant="body2">
                      ¿Ya tienes cuenta? Entra
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright />
          </Container>
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  );
}
