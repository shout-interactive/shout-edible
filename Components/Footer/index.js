import React from "react";
import Image from "next/image";
import { Box, Typography, Grid, Container, Stack } from "@mui/material";

export default function Footer() {
  const options = [
    {
      title: "Contact us",
      body: "Feel free to contact us and we will get back to you as soon as we can",
    },
    {
      title: "Address",
      body: "[official address]",
    },
    {
      title: "Support",
      body: "help@shouts.com",
      tel: "+234 823 8172 949",
    },
    {
      src: "/images/Google Play.svg",
      body: "Download Shouts",
    },
  ];
  return (
    <Container sx={{ py: 2, px: 10 }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 3.3, sm: 2, md: 8 }}
        sx={{ mx: "auto" }}
      >
        <Box sx={{ display: "flex", justifyContent: "start" }}>
          <img src="/images/Shout Logo.svg" />
        </Box>
        {options.map((option, index) => (
          <Stack key={index} spacing={1} sx={{ color: "white" }}>
            <Typography sx={{ fontSize: 20 }} variant="h4">
              {option.title}
            </Typography>
            <Box sx={{ maxWidth: 200 }}>
              <Typography
                sx={{ fontSize: 12, textOverflow: "wrap" }}
                variant="body2"
              >
                {option.body}
              </Typography>
            </Box>
            {option.src && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",

                  p: 0,
                  m: 0,
                }}
              >
                <img src={option.src} />
              </Box>
            )}
          </Stack>
        ))}
      </Stack>
    </Container>
  );
}

{
  /* <Grid container sx={{ flexGrow: 1 }} columns={15} spacing={2}>
<Grid item sm={3} xs={15}>
  <Box sx={{ display: "flex", justifyContent: "start" }}>
    <img src="/images/Shout Logo.svg" />
  </Box>
</Grid>
{options.map((option, index) => (
  <Grid
    key={index}
    item
    sm={3}
    xs={15}
    sx={{
      display: {
        display: "flex",
        // justifyContent: "center",
      },
    }}
  >
    <Stack spacing={1} sx={{ color: "white" }}>
      <Typography sx={{ fontSize: 20 }} variant="h4">
        {option.title}
      </Typography>
      <Typography
        sx={{ fontSize: 12, textOverflow: "wrap" }}
        variant="body2"
      >
        {option.body}
      </Typography>
      {option.src && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",

            p: 0,
            m: 0,
          }}
        >
          <img src={option.src} />
        </Box>
      )}
    </Stack>
  </Grid>
))}
</Grid> */
}
