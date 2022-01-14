import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Typography from "@mui/material/Typography";
import Alert from "src/Alert";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mui/material";
import MuiButton from "src/MuiButton";
import FormDialog from "src/FormDialog";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://logicsolutions.es/">
        logicsolutions
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Test({ focus }) {
  const [displayAuthErr, setDisplayAuthErr] = useState(false);
  const [formValues, setFormValues] = useState();
  const isMoreThan1000px = useMediaQuery("(min-width:1000px)");
  const isMoreThan900px = useMediaQuery("(min-width:900px)");

  const router = useRouter();
  const currentUser = {
    email: "rcodina@logicsolutions.es",
    password: "root",
  };

  React.useEffect(() => {
    if (displayAuthErr) {
      setTimeout(() => setDisplayAuthErr(false), 5000);
    }
  }, [displayAuthErr]);

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const isAuthSuccess = checkCredentials(formValues);
    console.log(isAuthSuccess);
    console.log(formValues);
    if (!isAuthSuccess) return setDisplayAuthErr(true);
    router.push("/dashboard/scan");
  };
  const handleFormChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const checkCredentials = (formValues) => {
    return (
      currentUser.email === formValues.email &&
      currentUser.password === formValues.password
    );
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          component="section"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h3 style={{ textAlign: isMoreThan900px ? "left" : "center" }}>
              Pruébalo Gratis
            </h3>
            <h2 style={{ textAlign: isMoreThan900px ? "left" : "center" }}>
              Lorem ipsum dolor
            </h2>
            <p
              style={{
                maxWidth: "45vw",
                textAlign: isMoreThan900px ? "left" : "center",
              }}
            >
              Registrate para poder acceder a consectetur adipiscing elit. Nisl
              ultrices magna pellentesque consequat mauris sit metus. Sagittis,
              eleifend at aliquam fringilla pellentesque ultricies tincidunt
              tristique semper.
            </p>
            <FormDialog focus={focus} />
          </div>
        </Box>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOpenIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form
            onSubmit={handleLoginSubmit}
            style={{ marginTop: 1 }}
            onChange={handleFormChange}
          >
            <TextField
              margin="normal"
              required={true}
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoFocus
              type="email"
            />
            <TextField
              margin="normal"
              required={true}
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recuérdame"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar Sesión
            </Button>
            {displayAuthErr && (
              <div style={{ marginBottom: "1rem" }}>
                <Alert severity="error" message="Credenciales incorrectos" />
              </div>
            )}
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Recuperar Password
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Test;
