import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ProTip from "src/ProTip";
import SingleCard from "./SingleCard/SingleCard";
import getServices2 from "utils/getServices2";

export default function Pricing() {
  const services = getServices2();

  return (
    <Container maxWidth="md" component="main">
      <Grid
        container
        spacing={5}
        alignItems="flex-end"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {services.map((service) => (
          <SingleCard key={service.title} service={service} />
        ))}
      </Grid>
      <ProTip />
    </Container>
  );
}
