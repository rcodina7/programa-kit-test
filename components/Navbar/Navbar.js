import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { Divider, useMediaQuery } from "@mui/material";
import NavbarDesktopStyles from "./NavbarDesktopStyles";
import NavbarStyles from "./NavbarStyles";
import ListTest from "src/ListTest";
import ContactFormDialog from "components/Contact/ContactFormDialog";
import SolicitudFormDialog from "components/Solicitud/SolicitudFormDialog";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [currentStyles, setCurrentStyles] = useState();
  const isMoreThan800px = useMediaQuery("(min-width:800px)");
  const isMoreThan380px = useMediaQuery("(min-width:380px)");

  //CONTACT FORM MODAL
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //************ */

  useEffect(
    () =>
      setCurrentStyles(
        isMoreThan800px ? NavbarDesktopStyles() : NavbarStyles()
      ),
    [isMoreThan800px]
  );

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (e) => setMobileMoreAnchorEl(e.currentTarget);

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <ListTest />
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link href="#servicios">
        <MenuItem>
          <p style={{ width: 220 }}>Servicios</p>
        </MenuItem>
      </Link>
      <Divider />

      <Link href="#sobre-nosotros">
        <MenuItem>
          <p>Sobre nosotros</p>
        </MenuItem>
      </Link>
      <ContactFormDialog
        currentStyles={currentStyles?.li}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        open={open}
        type={"contact"}
      />
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        color="transparent"
        elevation={0}
        position="static"
        sx={{ pt: 2 }}
      >
        <Toolbar>
          <Link href="#" passHref>
            <div style={{ ...currentStyles?.logo }}>
              <img
                src="/logo_white.png"
                alt="logo corporativo"
                width="32"
                height="35"
              />
              <Typography
                variant={isMoreThan380px ? "h6" : "h5"}
                component="div"
                sx={{
                  ...currentStyles?.logoText,
                  fontSize: isMoreThan380px ? "22px" : "18px",
                }}
              >
                LOGIC SOLUTIONS
              </Typography>
            </div>
          </Link>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Box component="ul" sx={{ ...currentStyles?.ul }}>
              <li className={styles.li}>
                <Link
                  variant="button"
                  color="text.primary"
                  href="#servicios"
                  sx={{ ...currentStyles?.li }}
                >
                  Servicios
                </Link>
              </li>

              <li className={styles.li}>
                <Link
                  variant="button"
                  color="text.primary"
                  href="#sobre-nosotros"
                  sx={{ ...currentStyles?.li }}
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li className={styles.li}>
                <ContactFormDialog
                  currentStyles={currentStyles?.li}
                  handleClickOpen={handleClickOpen}
                  handleClose={handleClose}
                  open={open}
                  type={"contactDesktop"}
                />
              </li>
            </Box>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              sx={{ color: "white" }}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
