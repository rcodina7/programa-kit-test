const HeroDesktopStyles = () => ({
  box: {
    textAlign: "left",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3rem",
    gap: "5vw",
  },
  divWrapper: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
  imgWrapper: {
    position: "absolute",
    top: "-5rem",
    left: "-3rem",
  },
  h1: {
    maxWidth: "450px",
    fontWeight: 700,
    color: "white",
  },
  p: {
    maxWidth: "500px",
  },
  btn: {
    maxWidth: "232px",
  },
});

export default HeroDesktopStyles;
