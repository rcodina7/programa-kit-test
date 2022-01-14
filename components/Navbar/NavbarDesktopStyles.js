const NavbarDesktopStyles = () => ({
  box: {
    flexGrow: 1,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    cursor: "pointer",
    display: "flex",
    gap: "1rem",
  },
  logoText: {
    color: "white",
    fontWeight: "bold",
    fontSize: "22px",
  },
  ul: {
    display: { xs: "none", md: "flex" },
    gap: "79px",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "20px",
    textAlign: "center",
    color: "#FFFFFF",
    alignItems: "center",
  },

  iconNavigation: {
    display: { xs: "flex", md: "none" },
  },
});

export default NavbarDesktopStyles;
