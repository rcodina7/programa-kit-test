import { Box } from "@mui/system";
import React from "react";
import getServices2 from "utils/getServices2";
import SingleCardDesktop from "./SingleCard/SingleCardDesktop";

function PricingDesktop() {
  const services = getServices2();

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
        mt: 20,
      }}
    >
      {services.map((service) => (
        <SingleCardDesktop key={service.title} service={service} />
      ))}
    </Box>
  );
}

export default PricingDesktop;
