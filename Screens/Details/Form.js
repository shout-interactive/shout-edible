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
  const [password, setPassword] = useState("");
  const [showPassword, setShowpassword] = useState(false);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value.trim());
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value.trim());
  };

  const handleClickShowPassword = () => {
    setShowpassword(!showPassword);
  };

  return (
    <Container>
      <ContentStyle>
        <Stack sx={{ mb: 5 }}>
          <Typography sx={{ fontWeight: "700" }} variant="h6" gutterBottom>
            Login to Shout Portal
          </Typography>
        </Stack>
        <FormControl>
          <Stack spacing={3}>
            <FormControl sx={{ fontWeight: "700" }} variant="standard">
              <label htmlFor="fullname">Full Name</label>

              <TextField
                id="fullname"
                value={email}
                onChange={handleChangeEmail}
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

              {/* <MuiPhoneNumber
                id="phone"
                inputProps={inputProps}
                defaultCountry={"ng"}
                onChange={(phone) => console.log(phone)}
                // native
              /> */}
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
