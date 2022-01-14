import {
  Button,
  Container,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Verify() {
  const isMoreThan1100px = useMediaQuery("(min-width:1100px)");

  return (
    <Container>
      <Paper elevation={0} sx={{ boxShadow: "1px 2px 3px 0 rgba(0,0,0,0.1)" }}>
        <Box
          component="section"
          sx={{
            height: "30rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            gap: "1rem",
            my: 5,
            position: "relative",
          }}
        >
          <Typography variant="h4">Comprueba tu Email</Typography>
          <p>Te hemos enviado un link para que puedas acceder a la página</p>
          <Button href="/" variant="contained">
            Volver
          </Button>

          <img
            src="/contact/email_woman_desktop.svg"
            alt="decorative email  image"
            style={{
              width: "152",
              height: "1240",
              position: "absolute",
              right: isMoreThan1100px ? "-50px" : "50%",
              bottom: isMoreThan1100px ? "-50px" : "-60%",
              transform: !isMoreThan1100px && "translateX(50%)",
              zIndex: "1",
            }}
          />
        </Box>
      </Paper>
    </Container>
  );
}

export default Verify;
