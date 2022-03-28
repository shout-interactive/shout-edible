import React from "react";
import { Box, Paper, CardContent, Card, Typography, Link } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Form from "../Components/Form";
import HeaderStyle from "../Components/SideNavHeader";

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

export default function signup() {
  return (
    <ThemeProvider theme={theme}>
      <Paper
        sx={{
          minHeight: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${"/images/signup.png"})`,
          backgroundAttachment: "fixed",
        }}
      >
        <HeaderStyle>
          <Typography
            variant="body2"
            sx={{
              mt: { md: -2 },
            }}
          >
            Don't have an account? &nbsp;
            <Link
              underline="none"
              variant="subtitle2"
              sx={{ color: "white", cursor: "pointer" }}
              to="/register"
            >
              Register
            </Link>
          </Typography>
        </HeaderStyle>
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
          <svg
            width="493"
            height="100"
            viewBox="0 0 493 107"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2305_27728)">
              <path
                d="M490.81 0C413.897 34.727 330.474 52.6873 246.085 52.6873C161.696 52.6873 78.2728 34.727 1.35999 0C0.907319 1 0.45307 2.00501 -0.00292969 3.01501C77.3379 37.9361 161.225 55.9967 246.085 55.9967C330.944 55.9967 414.831 37.9361 492.172 3.01501C491.721 2.00901 491.267 1.004 490.81 0Z"
                fill="#666666"
              />
              <path
                d="M146.599 99.9781C160.132 84.7975 172.832 69.2248 184.699 53.2601C164.445 51.1729 144.31 48.0525 124.374 43.9111C130.887 62.7031 138.296 81.3921 146.599 99.9781Z"
                fill="#FF7E30"
              />
              <path
                d="M77.515 85.395C92.6737 71.7884 107.035 57.6964 120.599 43.119C100.581 38.8256 80.7967 33.5076 61.324 27.186C65.826 46.5967 71.223 65.9997 77.515 85.395Z"
                fill="#007FC5"
              />
              <path
                d="M217.168 106.996C228.935 90.4278 239.842 73.5639 249.89 56.4039C229.58 56.5337 209.277 55.6292 189.059 53.6938C197.546 71.6585 206.915 89.4258 217.168 106.996Z"
                fill="#3C98FB"
              />
              <path
                d="M288.129 106.278C298.026 88.526 307.039 70.5726 315.166 52.418C294.987 54.7627 274.702 56.0781 254.389 56.359C264.772 73.2903 276.018 89.93 288.129 106.278Z"
                fill="#B57BFF"
              />
              <path
                d="M288.129 106.278C298.026 88.526 307.039 70.5726 315.166 52.418C294.987 54.7627 274.702 56.0781 254.389 56.359C264.772 73.2903 276.018 89.93 288.129 106.278Z"
                fill="black"
                fillOpacity="0.25"
              />
              <path
                d="M358.481 97.8449C366.419 79.1169 373.459 60.2809 379.602 41.3369C359.738 45.8824 339.654 49.4104 319.43 51.9069C331.613 67.6069 344.63 82.9196 358.481 97.8449Z"
                fill="#FCEE21"
              />
              <path
                d="M426.875 81.9811C432.808 62.4851 437.84 42.9755 441.969 23.4521C422.598 30.1643 402.895 35.8752 382.937 40.5622C396.784 54.8509 411.43 68.6571 426.875 81.9811Z"
                fill="#885CBF"
              />
            </g>
            <defs>
              <clipPath id="clip0_2305_27728">
                <rect width="492.175" height="106.996" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Box>
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
      </Paper>
    </ThemeProvider>
  );
}
