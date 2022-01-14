import Head from "next/head";
import { Box, Container, Grid, Typography } from "@mui/material";
import { AccountProfile } from "./AccountProfile";
import { AccountProfileDetails } from "./AccountProfileDetails";
import React, { useState } from "react";

const Profile = () => {
  const [updatesUserData, setUpdatedUserData] = useState();

  const handleSaveNewUserData = (newUserData) => {
    setUpdatedUserData(newUserData);
  };

  return (
    <>
      <Head>
        <title>Área Personal</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography sx={{ mb: 3 }} variant="h4">
            Área Personal
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
              <AccountProfile updatesUserData={updatesUserData} />
            </Grid>
            <Grid item lg={8} md={6} xs={12}>
              <AccountProfileDetails
                handleSaveNewUserData={handleSaveNewUserData}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Profile;
