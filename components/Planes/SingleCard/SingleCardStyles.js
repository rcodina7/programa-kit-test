export const singleCardHeaderStyles = () => ({
  backgroundColor: (theme) =>
    theme.palette.mode === "light"
      ? theme.palette.grey[200]
      : theme.palette.grey[700],
  width: "100%",
  borderTopRightRadius: "20px",
  borderTopLeftRadius: "20px",
  position: "absolute",
  top: 0,
  right: 0,
});
