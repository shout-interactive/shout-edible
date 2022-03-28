import { styled } from "@mui/material/styles";

const HeaderStyle = styled("header")(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: "100%",
  display: "flex",
  justifyContent: "end",
  color: "white",
  position: "absolute",
  padding: theme.spacing(10, 3, 0, 7),
}));

export default function ({ children }) {
  return <HeaderStyle>{children}</HeaderStyle>;
}
