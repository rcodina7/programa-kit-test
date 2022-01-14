export const singleCardStyles = (service) => ({
  backgroundColor: (theme) =>
    service.service === "Pro" ? theme.palette.primary.main : "default",
  width: service.service === "Base" ? 962 : 384,
  position: service.service === "Base" ? "absolute" : "relative",
  top: service.service === "Pro" ? "-3rem" : "unset",
  right: service.service === "Pro" ? "-13rem" : "unset",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  boxShadow:
    service.service === "Pro"
      ? "0px 12px 12px rgba(82, 67, 194, 0.22)"
      : "0px 12px 12px rgba(0, 0, 0, 0.12)",
  borderRadius: "20px",
  padding: service.service === "Pro" ? "20px" : "40px",
  paddingBottom: service.service === "Pro" ? "10px" : "20px",
  paddingTop: service.service === "Pro" ? "50px" : "25px",
});

export const singleCardHeaderStyles = (service) => ({
  backgroundColor: "#79B44C",
  width: "100%",
  borderTopRightRadius: "20px",
  borderTopLeftRadius: "20px",
  position: "absolute",
  top: 0,
  right: 0,
});

export const liStyles = (service) => ({
  display: "flex",
  fontWeight: 500,
  fontSize: "18px",
  lineHeight: "22px",
  color: service.service === "Base" ? "#848199" : "white",
  "& > *": {
    marginBottom: "0.5rem",
  },
});
