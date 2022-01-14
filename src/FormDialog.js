import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material";
import GoogleButton from "./GoogleButton";
import { Box } from "@mui/system";

export default function FormDialog({
  focus,
  open,
  handleClickOpen,
  handleClose,
}) {
  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen} fullWidth>
        Solicitar acceso
      </Button> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Registro</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 3 }}>
            Regístrate para poder acceder a tu área privada, poder visualizar y
            gestionar tus estadísticas, gráficas y resumen de vulnerabilidades.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombre"
            type="name"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="name"
            label="Teléfono"
            type="name"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="name"
            label="Empresa"
            type="name"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
          />
          <Box sx={{ mt: 4, mb: 2 }}>
            <FormControlLabel
              control={<Checkbox />}
              label="Acepto recibir información comercial de Logic Solutions"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked required />}
              label="He leído y acepto la política de privacidad"
            />
          </Box>
        </DialogContent>

        <DialogActions
          sx={{
            flexWrap: "wrap-reverse",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <GoogleButton
            message={"Regístrate con Google"}
            sx={{ mt: 0, mb: 1 }}
          />
          <div>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button onClick={handleClose}>Enviar</Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
