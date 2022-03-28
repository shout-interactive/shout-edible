import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import HeaderStyle from "../SideNavHeader";
import Footer from "../Footer";

export default function Home({ children }) {
  return (
    <Stack>
      <Box
        sx={{
          minHeight: "85vh",
          border: "2px solid red",

          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${"/images/BG.svg"})`,
          backgroundAttachment: "fixed",
          border: "none",
        }}
      >
        <HeaderStyle>
          <Box sx={{ display: "flex" }}>
            <Link href="/">
              <Typography
                sx={{
                  px: 2,
                  cursor: "pointer",
                  ":hover": { fontWeight: 700 },
                }}
                variant="body2"
              >
                Home
              </Typography>
            </Link>
            <Link href="/details">
              <Typography
                sx={{
                  px: 2,
                  cursor: "pointer",
                  ":hover": { fontWeight: 700 },
                }}
                variant="body2"
              >
                Details
              </Typography>
            </Link>
            <Link href="/congratulations">
              <Typography
                sx={{
                  px: 2,
                  cursor: "pointer",
                  ":hover": { fontWeight: 700 },
                }}
                variant="body2"
              >
                Congrats
              </Typography>
            </Link>
          </Box>
        </HeaderStyle>
        <Box
          sx={{
            p: 2,
            mb: 2,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* ----------------- Page content -------------- */}
          {children}
        </Box>
      </Box>
      <Box
        sx={{
          minHeight: 20,
          backgroundColor: "#110066",
        }}
      >
        <Footer />
      </Box>
    </Stack>
  );
}
