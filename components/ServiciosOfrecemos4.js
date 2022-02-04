import { Box } from "@mui/system";
import React from "react";
import { useMediaQuery } from "@mui/material";
import BeneficiosCarousel from "./BeneficiosCarousel";
import ServiciosList4 from "./ServiciosList4";

function ServiciosOfrecemos4() {
  const isMoreThan1000px = useMediaQuery("(min-width:1000px)");
  const isMoreThan900px = useMediaQuery("(min-width:900px)");

  return (
    <Box
      component="section"
      id="sobre-nosotros"
      sx={{
        mt: { xs: 5, md: 12 },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {isMoreThan1000px ? (
        <img
          src="/page/beneficios_bg.svg"
          alt="decorative blue background image"
          style={{
            width: "152",
            height: "1240",
            position: "absolute",
            top: "90rem",
            right: "0",
            zIndex: "-1",
          }}
        />
      ) : null}
      <Box
        sx={{
          alignSelf: "flex-end",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        {/* <BeneficiosCarousel /> */}
        {/* <ServiciosList /> */}
        <ServiciosList4 />
      </Box>
      <div style={{ textAlign: "center" }}>
        <h3 style={{ textAlign: isMoreThan900px ? "left" : "center" }}>
          SERVICIOS
        </h3>
        <h2 style={{ textAlign: isMoreThan900px ? "left" : "center" }}>
          ¿En qué te ayudamos?
        </h2>
        <p
          style={{
            maxWidth: "476px",
            // textAlign: isMoreThan900px ? "left" : "center",
            textAlign: "justify",
          }}
        >
          Logic Solutions proporciona todo tipo de{" "}
          <span style={{ fontWeight: 700 }}>
            servicios y soluciones técnicas
          </span>
          , no solamente te acompañamos en el proceso de selección de la
          subvención, sino que además, diseñamos y procedemos a la ejecución de
          las soluciones más acordes a cada situación empresarial.
        </p>
      </div>
    </Box>
  );
}

export default ServiciosOfrecemos4;
