import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import MuiButton from "src/MuiButton";
import { useMediaQuery } from "@mui/material";
import HeroDesktopStyles from "./HeroDesktopStyles";
import HeroStyles from "./HeroStyles";

function Hero({ isUserLoggedIn }) {
  const [currentStyles, setCurrentStyles] = useState();
  const isMoreThan800px = useMediaQuery("(min-width:800px)");
  const isMoreThan450px = useMediaQuery("(min-width:450px)");

  useEffect(
    () =>
      setCurrentStyles(isMoreThan800px ? HeroDesktopStyles() : HeroStyles()),
    [isMoreThan800px]
  );

  return (
    <Box sx={{ ...currentStyles?.box }}>
      <div style={{ ...currentStyles?.divWrapper }}>
        <div style={{ ...currentStyles?.imgWrapper }}>
          <img
            src="/hero/hero_logo.svg"
            height="275"
            width="275"
            alt="decorative hero logo"
          />
        </div>
        <h1 style={{ ...currentStyles?.h1 }}>
          Consigue los <span style={{ color: "#79b44c" }}>12.000€</span> del
          programa Kit Digital
        </h1>
        <p className="white" style={{ ...currentStyles?.p }}>
          En nuestro papel como{" "}
          <span style={{ color: "#79b44c", fontWeight: 700 }}>
            Empresa Digitalizadora Voluntaria
          </span>
          , te acompañamos y asesoramos durante todo el camino para aprovechar
          esta{" "}
          <span
            style={{
              color: "#79b44c",
              fontWeight: 700,
              backgroundColor: isMoreThan450px
                ? "transparent"
                : "rgba(61, 64, 91, 0.7);",
              borderRadius: "5px",
            }}
          >
            oportunidad para modernizar y hacer crecer tu negocio.
          </span>
        </p>
        {isMoreThan800px && (
          <MuiButton
            sx={{ ...currentStyles?.btn, color: "white" }}
            text={"Solicitar ahora"}
            isDashboard
            isUserLoggedIn={isUserLoggedIn}
            color="secondary"
          />
        )}
      </div>
      <img
        src="/hero/hero_image.svg"
        height="657"
        alt="decorative hero image"
        style={{ maxWidth: "553px", width: "100%" }}
      />

      {!isMoreThan800px && (
        <MuiButton
          fullWidth
          text={"Solicitar ahora"}
          isDashboard
          isUserLoggedIn={isUserLoggedIn}
        />
      )}
    </Box>
  );
}

export default Hero;
