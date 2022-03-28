import React from "react";
import { Box, CardContent, Card, Typography, Link } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Form from "./Form";
import HeaderStyle from "../../Components/SideNavHeader";

const theme = createTheme({
  palette: {
    main: "#110066",
  },
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     xs2: 300,
  //     sm: 600,
  //     md: 900,
  //     md2: 1000,
  //     lg: 1200,
  //     xl: 1536,
  //     desktop: true,
  //   },
  // },
});

export default function Details() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: {
            xs: "none",
            md2: "flex",
            desktop: "flex",
            height: "40",
            justifyContent: "center",
            backgroundColor: "#110066",
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            height: "100vh",
          }}
        >
          <Card variant="outlined" sx={{ mt: 0, width: 332 }}>
            <CardContent>
              <Form />
            </CardContent>
          </Card>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
