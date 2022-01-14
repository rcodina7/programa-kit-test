import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MuiButton from "src/MuiButton";
import ProTip from "src/ProTip";
import SingleServicio from "./SingleServicio/SingleServicio";

function Servicios({ isUserLoggedIn }) {
  const cardContent = [
    {
      icon: "servicios_logo_1.svg",
      title: "¿En que consiste?",
      text: "Programa dirigido a pymes y autónomos del Ministerio de Asuntos Económicos y Transformación Digital que te acompaña en tu proceso de transformación digital. Para que gracias a la tecnología puedas evolucionar y mejorar tu negocio.",
    },
    {
      icon: "servicios_logo_2.svg",
      title: "Requisitos para acceder",
      text: "Los requisitos necesarios para que las Pymes y autónomos puedan solicitar la ayuda de Kit Digital son ser una pequeña empresa, microempresa o autónomo, y cumplir los límites financieros y efectivos que definen las categorías de empresas.",
    },
    {
      icon: "servicios_logo_3.svg",
      title: "Solicitar el bono digital",
      text: "El bono se solicita a  través de la web https://acelerapyme.gob.es/ y con la ayuda de un Agente Digitalizador como Logic Solutions, nosotros os ayudaremos en todo el proceso de gestión y digitalización en fución de la categoría solicitada.",
    },
  ];

  return (
    <Box component="section" sx={{ mt: { xs: 13, md: 1, lg: 20 } }}>
      <div style={{ textAlign: "center" }}>
        <h3 style={{ marginLeft: "auto", marginRight: "auto" }}>
          Para Pymes y autónomos
        </h3>
        <h2 style={{ marginLeft: "auto", marginRight: "auto" }}>
          Programa Kit Digital
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "3vw",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {cardContent.map((card, index) => (
          <SingleServicio key={index} num={index + 1} card={card} />
        ))}
      </div>
    </Box>
  );
}

export default Servicios;
