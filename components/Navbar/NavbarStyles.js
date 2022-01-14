const NavbarStyles = () => ({
  box: {
    flexGrow: 1,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
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
  },
});

export default NavbarStyles;
