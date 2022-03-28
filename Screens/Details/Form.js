import { useState } from "react";
import Dynamic from "next/dynamic";
import { styled } from "@mui/material/styles";
import {
  FormControl,
  Stack,
  Container,
  Typography,
  TextField,
  Button,
} from "@mui/material";

const MuiPhoneNumber = Dynamic(() => import("mui-phone-number"), {
  ssr: false,
});

// ----------------------------------------------------------------------

const ContentStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(1, 0),
  color: "#110066",
}));

const inputProps = {
  borderColor: "#110066",
  variant: "outlined",
};

// ----------------------------------------------------------------------

export default function Form() {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [number, setNumber] = useState(false);

  const handleChangeFullname = (e) => {
    setFullname(e.target.value.trim());
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value.trim());
  };

  const handleSetNumber = (e) => {
    setNumber(e.target.value.trim());
  };

  return (
    <Container>
      <ContentStyle>
        <FormControl>
          <Stack spacing={3}>
            <FormControl sx={{ fontWeight: "700" }} variant="standard">
              <label htmlFor="fullname">Full Name</label>

              <TextField
                id="fullname"
                value={fullname}
                onChange={handleChangeFullname}
                fullWidth
                variant="outlined"
                size="small"
                placeholder="e.g Mike Aderonke"
              />
            </FormControl>
            <FormControl sx={{ fontWeight: "700" }} variant="standard">
              <label htmlFor="email">E-mail</label>

              <TextField
                id="email"
                value={email}
                onChange={handleChangeEmail}
                fullWidth
                variant="outlined"
                size="small"
                placeholder="e.g mike@gmail.com"
              />
            </FormControl>
            <FormControl
              sx={{ fontWeight: "700", borderRadius: 4 }}
              variant="standard"
            >
              <label htmlFor="phone">Phone Number</label>

              <MuiPhoneNumber
                id="phone"
                inputProps={inputProps}
                defaultCountry={"ng"}
                onChange={handleSetNumber}
                // native
              />
            </FormControl>
          </Stack>
          <Button
            color="primary"
            sx={{ mt: 2, "&:hover": "", backgroundColor: "#110066" }}
            variant="contained"
          >
            <Typography variant="body2">Submit</Typography>
          </Button>
        </FormControl>
      </ContentStyle>
    </Container>
  );
}
