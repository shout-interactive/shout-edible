import React from "react";
import { Paper, CardContent, Card, Typography, Divider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Form from "./Form";

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
      <Paper
        variant="outlined"
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 360,
          backgroundColor: "rgba(17,0,102,.9)",
          mt: 10,
          px: 2,
          py: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: 24,
            textAlign: "center",
            mb: 1,
            color: "white",
            textTransform: "capitalize",
          }}
          variant="body2"
        >
          Your basic information
        </Typography>

        <Typography
          sx={{
            fontSize: 14,
            textAlign: "center",
            mb: 1,
            color: "white",
          }}
          variant="body2"
        >
          To claim your coupon, we need to get some basic information about you
        </Typography>
        <Divider
          sx={{ color: "white", backgroundColor: "white", mt: 1, mb: 2 }}
        />
        <Card variant="outlined" sx={{ mt: 1, width: 330, mx: "auto" }}>
          <CardContent>
            <Form />
          </CardContent>
        </Card>
      </Paper>
    </ThemeProvider>
  );
}
