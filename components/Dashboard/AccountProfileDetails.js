import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import CountrySelect from "./CountrySelect";
import validator from "validator";
import AlertMessage from "src/AlertMessage";

export const AccountProfileDetails = (props) => {
  const [inputValue, setInputValue] = useState();
  const [message, setMessage] = useState();
  const [displayError, setDisplayError] = useState(false);

  const { handleSaveNewUserData } = props;

  useEffect(() => {
    if (displayError) {
      setTimeout(() => {
        setDisplayError(false);
      }, 6000);
    }
  }, [displayError]);

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setMessage();
    setDisplayError(false);

    const inputValidation = validateInputs();
    if (inputValidation) {
      handleSaveNewUserData(inputValue);
    }
  };

  const validateInputs = () => {
    let validationSuccess = true;
    if (
      !inputValue?.name ||
      !inputValue?.lastName ||
      !inputValue?.email ||
      !inputValue?.country
    ) {
      validationSuccess = false;
      displayMessage("Por favor, llena los campos requeridos");
      return validationSuccess;
    }

    if (!validator.isEmail(inputValue?.email)) {
      validationSuccess = false;
      displayMessage("El Email introducido no es correcto");
    }

    return validationSuccess;
  };

  const displayMessage = (msg) => {
    setMessage(msg);
    setDisplayError(true);
  };

  return (
    <form autoComplete="off" noValidate {...props}>
      {displayError && (
        <AlertMessage
          type="error"
          message={message}
          setDisplayError={setDisplayError}
          displayError={displayError}
        />
      )}
      <Card>
        <CardHeader
          subheader="Es necesario rellenar los campos requeridos para poder acceder a todas las funcionalidades"
          title="Perfil"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3} component="form" onChange={handleChange}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Nombre"
                name="name"
                required
                value={inputValue?.name ? inputValue.name : ""}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Apellido"
                name="lastName"
                required
                value={inputValue?.lastName ? inputValue.lastName : ""}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              {/* <TextField
                fullWidth
                label="Email Address"
                name="email"
                required
                value={inputValue?.email ? inputValue.email : ""}
                variant="outlined"
              /> */}
              <TextField
                fullWidth
                label="Empresa"
                name="empresa"
                required
                value={inputValue?.empresa ? inputValue.empresa : ""}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Teléfono"
                name="phone"
                type="number"
                value={inputValue?.phone ? inputValue.phone : ""}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <CountrySelect handleChange={handleChange} />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Ciudad"
                name="city"
                value={inputValue?.city ? inputValue.city : ""}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button
            color="warning"
            variant="outlined"
            onClick={handleSave}
            sx={{ mr: "auto" }}
            helperText="Please specify the first name"
          >
            Cambiar Datos de Acceso
          </Button>

          <Button color="primary" variant="contained" onClick={handleSave}>
            Guardar
          </Button>
        </Box>
      </Card>
    </form>
  );
};
