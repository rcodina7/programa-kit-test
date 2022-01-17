import { Box } from "@mui/system";
import React from "react";
import { useMediaQuery } from "@mui/material";
import BeneficiosCarousel from "./BeneficiosCarousel";

function Beneficios() {
  const isMoreThan1000px = useMediaQuery("(min-width:1000px)");
  const isMoreThan900px = useMediaQuery("(min-width:900px)");

  return (
    <Box
      component="section"
      id="sobre-nosotros"
      sx={{
        mt: { xs: 15, md: 22 },
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
      <div style={{ textAlign: "center" }}>
        <h3 style={{ textAlign: isMoreThan900px ? "left" : "center" }}>
          BENEFICIOS
        </h3>
        <h2 style={{ textAlign: isMoreThan900px ? "left" : "center" }}>
          ¿Por qué Logic Solutions?
        </h2>
        <p
          style={{
            maxWidth: "376px",
            textAlign: isMoreThan900px ? "left" : "center",
          }}
        >
          Somos una empresa de{" "}
          <span style={{ fontWeight: 700 }}>consultoría informática</span> con 8
          años de experiencia en el sector tecnológico, tanto a nivel{" "}
          <span style={{ fontWeight: 700 }}>estatal como internacional</span>,
          ofrecemos desde el desarrollo de{" "}
          <span style={{ fontWeight: 700 }}>sitios web y aplicaciones</span>, al
          diseño y la gestión de tus{" "}
          <span style={{ fontWeight: 700 }}>
            redes y servidores, y la protección y seguridad de toda tu
            infrastructura.
          </span>
        </p>
        <p
          style={{
            maxWidth: "376px",
            textAlign: isMoreThan900px ? "left" : "center",
          }}
        >
          Logic Solutions ofrece una gestión integral de todas las necesidades
          digitales de tu negocio.
        </p>
      </div>
      <Box
        sx={{
          alignSelf: "flex-end",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <BeneficiosCarousel />
      </Box>
    </Box>
  );
}

export default Beneficios;
