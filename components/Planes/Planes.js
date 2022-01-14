import { Box } from "@mui/system";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Pricing from "./Pricing";
import PricingDesktop from "./PricingDesktop";

function Planes() {
  const isMoreThan1000px = useMediaQuery("(min-width:1000px)");

  return (
    <>
      <Box component="section" id="servicios" sx={{ mt: { xs: 15, md: 22 } }}>
        {isMoreThan1000px ? (
          <img
            src="/page/planes_bg.svg"
            alt="decorative green background image"
            style={{
              height: "1200px",
              width: "285px",
              position: "absolute",
              top: "135rem",
              left: "-5rem",
              zIndex: "-1",
            }}
          />
        ) : null}
        <div style={{ textAlign: "center" }}>
          <h3>SERVICIOS</h3>
          <h2>Soluciones digitales</h2>
        </div>
      </Box>
      <Pricing />
    </>
  );
}

export default Planes;
