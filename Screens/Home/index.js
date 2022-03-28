import {
  Card,
  CardMedia,
  Grid,
  Paper,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import { green } from "@mui/material/colors";
import { AccessTime, LocalOfferOutlined } from "@mui/icons-material";

// ----------------------------------------------------------------------

export default function index() {
  return (
    <Paper
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 380,
        backgroundColor: "rgba(17,0,102,.9)",
        mt: 10,
        px: 2,
        py: 2,
      }}
    >
      <Typography
        sx={{ fontSize: 24, textAlign: "center", mb: 1, color: "white" }}
        variant="body2"
      >
        Claim your Discount
      </Typography>
      <Card
        sx={{
          backgroundColor: "white",
          borderRadius: 2,
          pb: 2,
        }}
      >
        {/* Edible Image */}

        <CardMedia
          sx={{ mt: 1 }}
          component="img"
          image="/images/Right.svg"
          alt="Background"
        />
        {/* Edible content */}

        <Grid container sx={{ px: 2 }} spacing={1} columns={16}>
          <Grid item sm={8} xs={16}>
            <Stack>
              <Typography
                sx={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#110066",
                }}
                variant="h8"
              >
                Pepsi
              </Typography>
              <Typography sx={{ fontSize: 14, color: "#818FA3" }}>
                super savers discount
              </Typography>
            </Stack>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              color: green[500],
              textAlign: "center",
            }}
            item
            sm={8}
            xs={16}
          >
            <AccessTime />

            <Typography variant="body2">05d 05h 12m 43s</Typography>
          </Grid>
          {/* Discount button */}

          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              border: "3px dashed white",
              backgroundColor: "#FFBB38",
              color: "#110066",
              "&:hover": {
                backgroundColor: "#FFBB38",
              },
            }}
          >
            <LocalOfferOutlined />
            <Typography variant="body2">₦1,000 Discount</Typography>
          </Button>
        </Grid>
      </Card>
      {/* Lower button */}
      <Button
        fullWidth
        variant="contained"
        sx={{
          mt: 2,
          backgroundColor: "#FFBB38",
          color: "#110066",
          "&:hover": {
            backgroundColor: "#FFBB38",
          },
        }}
      >
        <Typography
          sx={{ p: 1, fontWeight: 600, textTransform: "capitalize" }}
          variant="body2"
        >
          Let's go
        </Typography>
      </Button>
    </Paper>
  );
}
