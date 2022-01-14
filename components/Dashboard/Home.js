import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Chart from "src/dashboard/Chart";
import Deposits from "src/dashboard/Deposits";
import Orders from "src/dashboard/Orders";

function Home() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" sx={{ fontSize: "3rem" }}>
          Web Security Scan
        </Typography>
        <p
          style={{
            textAlign: "center",
            maxWidth: "50rem",
          }}
        >
          Bienvenido a tu área privada, aquí podras gestionar tus scanners,
          perfil y recibir actualizaciones sobre futuras implementaciones y
          servicios.
        </p>
      </Box>
    </Container>
  );
}

export default Home;
