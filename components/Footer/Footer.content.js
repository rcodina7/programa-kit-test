import React from "react";
import Image from "next/image";
import Container from "@mui/material/Container";
import styles from "./Footer.module.css";
import { Link, useMediaQuery } from "@mui/material";
import { NextLinkComposed } from "src/Link";
import { Box } from "@mui/system";

function FooterContent() {
  const isMoreThan500px = useMediaQuery("(min-width:500px)");
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        mb: isMoreThan500px ? 4 : 2,
        maxHeight: "372px",
      }}
    >
      <Container maxWidth="xl">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div className={styles.ulCompanyItemsWrapper}>
            <ul className={styles.ulCompanyItems}>
              <li>
                <div>
                  <Image
                    src="/logo_white.png"
                    height="35"
                    width="32"
                    alt="Footer logic lock logo"
                  />
                </div>
                <h5 className={styles.title}>Logic Solutions</h5>
              </li>
              <li>
                <Link
                  component={NextLinkComposed}
                  to={{
                    pathname: "https://www.logicsolutions.es/",
                  }}
                  underline="hover"
                  sx={{ color: "white" }}
                >
                  Empresa
                </Link>
              </li>
              <li>
                <Link
                  component={NextLinkComposed}
                  to={{
                    pathname: "https://www.logicsolutions.es/es/sobre-nosotros",
                  }}
                  underline="hover"
                  sx={{ color: "white" }}
                >
                  Quienes somos
                </Link>
              </li>
              <li>
                <Link
                  component={NextLinkComposed}
                  to={{
                    pathname: "https://www.logicsolutions.es/es/privacy",
                  }}
                  underline="hover"
                  sx={{ color: "white" }}
                >
                  Política de privacidad
                </Link>
              </li>
            </ul>
            <ul className={styles.ulCompanyItems}>
              <li>
                <Link
                  component={NextLinkComposed}
                  to={{
                    pathname: "https://www.logicsolutions.es/es/blog",
                  }}
                  underline="hover"
                  sx={{ color: "white" }}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  component={NextLinkComposed}
                  to={{
                    pathname: "https://www.logicsolutions.es/es/aviso",
                  }}
                  underline="hover"
                  sx={{ color: "white" }}
                >
                  Aviso legal
                </Link>
              </li>
              <li>
                <Link
                  component={NextLinkComposed}
                  to={{
                    pathname: "https://www.logicsolutions.es/es/contact",
                  }}
                  underline="hover"
                  sx={{ color: "white" }}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <ul className={styles.ulContactItems}>
            <li>Contáctenos</li>
            <li className={styles.iconContactItem}>
              <a href="https://api.whatsapp.com/send?phone=19292381922">
                <Image
                  src="/footer/whatsapp_icon.svg"
                  alt="whatsapp icon contact"
                  height={isMoreThan500px ? 50 : 40}
                  width={isMoreThan500px ? 50 : 40}
                />
              </a>
            </li>
            <li></li>
            <li className={styles.iconContactItem}>
              <Link
                component={NextLinkComposed}
                to={{
                  pathname:
                    "https://www.linkedin.com/company/logic-solutions-consulting",
                }}
              >
                <Image
                  src="/footer/linkedin_icon.svg"
                  alt="linkedin icon contact"
                  height={isMoreThan500px ? 50 : 40}
                  width={isMoreThan500px ? 50 : 40}
                />
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </Box>
  );
}

export default FooterContent;
