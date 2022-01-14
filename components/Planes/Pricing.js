import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ProTip from "src/ProTip";
import SingleCard from "./SingleCard/SingleCard";
import getServices from "utils/getServices";

export default function Pricing() {
  const services = getServices();

  return (
    <Container maxWidth="md" component="main">
      <Grid container spacing={5} alignItems="flex-end">
        {services.map((service) => (
          <SingleCard key={service.title} service={service} />
        ))}
      </Grid>
      <ProTip />
    </Container>
  );
}
