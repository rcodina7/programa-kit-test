import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ServicioDialog from "./ServicioDialog/ServicioDialog";

export default function SingleServicio({ num, card }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const servicioCardLogo = [
    "servicios_logo_1.svg",
    "servicios_logo_2.svg",
    "servicios_logo_3.svg",
  ];

  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          boxShadow: "0px 12px 12px rgba(0, 0, 0, 0.12)",
          borderRadius: "20px",
        }}
        onClick={handleClickOpen}
      >
        <CardActionArea sx={{ textAlign: "center", padding: "1rem 0" }}>
          <img
            height="65"
            width="65"
            src={`/servicios/${servicioCardLogo[num - 1]}`}
            alt="card logo"
          />
          <CardContent>
            <h4
              style={{
                fontWeight: "600",
                fontSize: "24px",
                letterSpacing: "0.5px",
                color: "#222222",
                margin: "0",
              }}
            >
              {card.title}
            </h4>
            <p>{card.text}</p>
          </CardContent>
        </CardActionArea>
        <CardActions
          sx={{ ml: "auto", mr: "auto", transform: "translateX(35%)" }}
        >
          <Button size="small" color="primary">
            Leer más
          </Button>
        </CardActions>
      </Card>
      <ServicioDialog
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        num={num}
      />
    </>
  );
}
