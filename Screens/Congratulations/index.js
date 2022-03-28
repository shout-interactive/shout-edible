import { Paper, Typography } from "@mui/material";

export default function index() {
  return (
    <Paper
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 320,
        backgroundColor: "rgba(17,0,102,.9)",
        mt: 10,
        px: 2,
        py: 2,
      }}
    >
      <img src="/images/Congratulations.svg" alt="Congratulations" />
      <Typography
        sx={{
          fontSize: 24,
          textAlign: "center",
          mb: 2,
          color: "white",
          textTransform: "capitalize",
        }}
        variant="h1"
      >
        Congratulations!
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
        Your Coupon Code has been sent to you via E-mail and SMS{" "}
      </Typography>
    </Paper>
  );
}
