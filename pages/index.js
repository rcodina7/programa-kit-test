/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useContext } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import FAQ from "components/FAQ";
import GlobalStyles from "@mui/material/GlobalStyles";
import Hero from "components/Hero/Hero";
import Servicios from "components/Servicios/Servicios";
import Beneficios from "components/Beneficios";
import Planes from "components/Planes/Planes";
import Testimonios from "components/Testimonios/Testimonios";
import Footer from "components/Footer/Footer";
import Contact from "components/Contact/Contact";
import Navbar from "components/Navbar/Navbar";
import { AuthContext } from "contexts/auth.context";
import ServiciosOfrecemos from "components/ServiciosOfrecemos";
import ServiciosOfrecemos2 from "components/ServiciosOfrecemos2";
import ServiciosOfrecemos3 from "components/ServiciosOfrecemos3";
import ServiciosOfrecemos4 from "components/ServiciosOfrecemos4";

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <Box
        component="header"
        sx={{
          position: "relative",
          minHeight: "90vh",
          width: "100vw",
        }}
      >
        {/* INSIDE HEADER (SVG BG IMAGE) */}
        <div
          style={{
            position: "absolute",
            width: "100vw",
            height:
              "clamp(37.5rem, calc(37.5rem + (914 - 600) * ((100vw - 375px) / (1440 - 375))), 57.125rem)",
            zIndex: -1,
          }}
        >
          <img
            src="/hero/hero_bg.svg"
            alt="decorative background"
            layout="fill"
            style={{ width: "100%", minHeight: "700px", maxHeight: "900px" }}
          />
        </div>
        {/* INSIDE HEADER (NAV & HERO) */}
        <Container maxWidth="xl">
          <nav>
            <Navbar />
          </nav>
          <Hero isUserLoggedIn={true} />
        </Container>
      </Box>
      {/* MAIN */}
      <Box component="main">
        <Container maxWidth="xl">
          <Servicios />
          <Beneficios />
          <ServiciosOfrecemos />
          <ServiciosOfrecemos2 />
          <ServiciosOfrecemos3 />
          <ServiciosOfrecemos2 test />
          <ServiciosOfrecemos4 />
          <Planes />
          <Testimonios />
          <FAQ />
          <Contact />
        </Container>
      </Box>
      {/* FOOTER */}
      <Box
        component="footer"
        sx={{
          position: "absolute",
        }}
      >
        <Footer />
      </Box>
    </>
  );
}
