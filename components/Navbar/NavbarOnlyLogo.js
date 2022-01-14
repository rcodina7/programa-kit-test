import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container, GlobalStyles, useMediaQuery } from "@mui/material";
import Link from "next/Link";
import Image from "next/image";
import HomeIcon from "@mui/icons-material/Home";
import NavbarDesktopStyles from "./NavbarDesktopStyles";
import NavbarStyles from "./NavbarStyles";
import styles from "./Navbar.module.css";
import MuiButton from "src/MuiButton";

export default function NavbarOnlyLogo() {
  const [currentStyles, setCurrentStyles] = React.useState();
  const isMoreThan800px = useMediaQuery("(min-width:800px)");

  React.useEffect(
    () =>
      setCurrentStyles(
        isMoreThan800px ? NavbarDesktopStyles() : NavbarStyles()
      ),
    [isMoreThan800px]
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <AppBar position="static" sx={{ bgcolor: "transparent" }} elevation={0}>
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Link href="/" passHref>
              <a>
                <div style={{ ...currentStyles?.logo }}>
                  <Image
                    src="/register/logo.svg"
                    alt="logo corporativo"
                    width="28"
                    height="28"
                  />
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      ...currentStyles?.logoText,
                      color: (theme) => theme.palette.primary.main,
                    }}
                  >
                    LOGIC LOCK
                  </Typography>
                </div>
              </a>
            </Link>
            <Box component="ul" sx={{ ...currentStyles?.ul }}>
              <li className={styles.li}>
                <Link
                  variant="button"
                  color="text.primary"
                  href="/"
                  sx={{ ...currentStyles?.li }}
                >
                  <MuiButton
                    fullWidth
                    text={"Home"}
                    sx={{ py: "8.15px" }}
                    disableElevation
                  />
                </Link>
              </li>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
