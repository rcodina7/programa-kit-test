import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import ProTip from "src/ProTip";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Filter1Icon from "@mui/icons-material/Filter1";
import Filter2Icon from "@mui/icons-material/Filter2";
import Filter3Icon from "@mui/icons-material/Filter3";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ServicioDialog({ handleClose, open, num }) {
  const [openNestedList1, setOpenNestedList1] = React.useState(true);
  const [openNestedList2, setOpenNestedList2] = React.useState(true);
  const isMoreThan450px = useMediaQuery("(min-width:450px)");

  const handleClick1 = () => setOpenNestedList1(!openNestedList1);
  const handleClick2 = () => setOpenNestedList2(!openNestedList2);

  const dialogCardText = [
    "Con ayudas económicas que te permiten acceder a un gran catálogo de soluciones digitales y a agentes digitalizadores, como nosotros, que te ofreceremos estos servicios. Solo tienes que escoger las que mejor se adapten a las necesidades de tu empresa.",
  ];
  const dialogCardTitle = ["¿Cómo?", "Requisitos", "Pasos"];

  const requisitosList = () => {
    return (
      <List dense={false}>
        <ListItem>
          {isMoreThan450px && (
            <ListItemIcon>
              <CheckCircleIcon />
            </ListItemIcon>
          )}
          <ListItemText primary="Ser una pequeña empresa, microempresa o autónomo." />
        </ListItem>
        <ListItem>
          {isMoreThan450px && (
            <ListItemIcon>
              <CheckCircleIcon />
            </ListItemIcon>
          )}
          <ListItemText primary="Cumplir los límites financieros y efectivos que definen las categorías de empresas" />
        </ListItem>
        <ListItem>
          {isMoreThan450px && (
            <ListItemIcon>
              <CheckCircleIcon />
            </ListItemIcon>
          )}
          <ListItemText primary="Estar en situación de alta y tener la antigüedad mínima que se establece por convocatoria." />
        </ListItem>
        <ListItem>
          {isMoreThan450px && (
            <ListItemIcon>
              <CheckCircleIcon />
            </ListItemIcon>
          )}
          <ListItemText primary="No tener consideración de empresa en crisis." />
        </ListItem>
        <ListItem>
          {isMoreThan450px && (
            <ListItemIcon>
              <CheckCircleIcon />
            </ListItemIcon>
          )}
          <ListItemText primary="Estar al corriente de las obligaciones tributarias y frente a la Seguridad Social." />
        </ListItem>
        <ListItem>
          {isMoreThan450px && (
            <ListItemIcon>
              <CheckCircleIcon />
            </ListItemIcon>
          )}
          <ListItemText primary="No estar sujeta a una orden de recuperación pendiente de la Comisión Europea que haya declarado una ayuda ilegal e incompatible con el mercado común." />
        </ListItem>
        <ListItem>
          {isMoreThan450px && (
            <ListItemIcon>
              <CheckCircleIcon />
            </ListItemIcon>
          )}
          <ListItemText primary="No incurrir en ninguna de las prohibiciones previstas en el artículo 13.2 de la Ley 38/2003, de 17 de noviembre, General de Subvenciones. " />
        </ListItem>
        <ListItem>
          {isMoreThan450px && (
            <ListItemIcon>
              <CheckCircleIcon />
            </ListItemIcon>
          )}
          <ListItemText primary="No superar el límite de ayudas mínimas (de pequeña cuantía)." />
        </ListItem>
      </List>
    );
  };

  const pasosList = () => {
    return (
      <>
        {" "}
        <List
          sx={{ width: "100%" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={handleClick1}>
            <ListItemText primary="Cómo solicitar tu bono digital" />
            {openNestedList1 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openNestedList1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{
                  pl: 4,
                  cursor: "initial",
                  display: "flex",
                  flexDirection: isMoreThan450px ? "row" : "column",
                }}
                disableRipple
              >
                <ListItemIcon>
                  <Filter1Icon />
                </ListItemIcon>
                <ListItemText
                  primary="Regístrate en www.acelerapyme.es y completa el test de autodiagnóstico."
                  secondary="De esta forma, sabremos qué nivel de digitalización tiene tu empresa para poder
ayudarte mejor y recomendarte servicios ajustados a tus necesidades. "
                />
              </ListItemButton>
              <ListItemButton
                sx={{
                  pl: 4,
                  cursor: "initial",
                  display: "flex",
                  flexDirection: isMoreThan450px ? "row" : "column",
                }}
                disableRipple
              >
                <ListItemIcon>
                  <Filter2Icon />
                </ListItemIcon>
                <ListItemText
                  primary="Consulta el catálogo de soluciones digitales."
                  secondary="Donde podrás escoger una o
varias de las que ofrecen los agentes digitalizadores. Las que mejor se adapten a 02
las necesidades de tu negocio."
                />
              </ListItemButton>
              <ListItemButton
                sx={{
                  pl: 4,
                  cursor: "initial",
                  display: "flex",
                  flexDirection: isMoreThan450px ? "row" : "column",
                }}
                disableRipple
              >
                <ListItemIcon>
                  <Filter3Icon />
                </ListItemIcon>
                <ListItemText
                  primary="Solicita la ayuda Kit Digital en la sede electrónica de Red.es (sede.red.gob.es)."
                  secondary="Completa todos los pasos del formulario."
                />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        <List
          sx={{ width: "100%" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={handleClick2}>
            <ListItemText primary="Cómo emplear tu bono digital" />
            {openNestedList2 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openNestedList2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{
                  pl: 4,
                  cursor: "initial",
                  display: "flex",
                  flexDirection: isMoreThan450px ? "row" : "column",
                }}
                disableRipple
              >
                <ListItemIcon>
                  <Filter1Icon />
                </ListItemIcon>
                <ListItemText
                  primary="Accede al catálogo de agentes digitalizadores"
                  secondary="y decide con quién quieres desarrollar tu solución digital. "
                />
              </ListItemButton>
              <ListItemButton
                sx={{
                  pl: 4,
                  cursor: "initial",
                  display: "flex",
                  flexDirection: isMoreThan450px ? "row" : "column",
                }}
                disableRipple
              >
                <ListItemIcon>
                  <Filter2Icon />
                </ListItemIcon>
                <ListItemText
                  primary="Ponte en contacto con los agentes digitalizadores"
                  secondary="Suscribe el acuerdo de prestación de soluciones digitales y comienza tu cambio digital."
                />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </>
    );
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          {num === 1 && dialogCardTitle[0]}
          {num === 2 && dialogCardTitle[1]}
          {num === 3 && dialogCardTitle[2]}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {num === 1 && dialogCardText[0]}
            {num === 2 && requisitosList()}
            {num === 3 && pasosList()}
            <ProTip />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
