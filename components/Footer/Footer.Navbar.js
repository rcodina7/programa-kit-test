import { Container } from "@mui/material";
import styles from "./Footer.module.css";
import { Box } from "@mui/system";

import React from "react";

function FooterNavbar() {
  return (
    <Box
      sx={{
        height: "max-content",
        width: "100vw",
        position: "absolute",
        top: "clamp(28.125rem, calc(28.125rem + (499 - 450) * ((100vw - 375px) / (1440 - 375))), 31.188rem)",
        backgroundColor: "#3d405b",
      }}
    >
      <Box
        sx={{
          background: "rgba(69, 17, 173, 0.1)",
          height: "100%",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            paddingTop: "1rem",
          }}
        >
          <p className={styles.copyright}>
            Copyright © 2021 Logic Solutions | Todos los derechos reservados
          </p>
          <div className={styles.privacy}>
            <p className={styles.copyright}>Política de cookies</p>
            <p className={styles.copyright}>Aviso legal</p>
          </div>
        </Container>
      </Box>
    </Box>
  );
}

export default FooterNavbar;
