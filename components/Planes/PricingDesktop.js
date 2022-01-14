import { Box } from "@mui/system";
import React from "react";
import getServices from "utils/getServices";
import SingleCardDesktop from "./SingleCard/SingleCardDesktop";

function PricingDesktop() {
  const services = getServices();

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
        mt: 10,
      }}
    >
      {services.map((service) => (
        <SingleCardDesktop key={service.title} service={service} />
      ))}
    </Box>
  );
}

export default PricingDesktop;
