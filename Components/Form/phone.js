import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const MuiPhoneNumber = Dynamic(() => import("mui-phone-number"), {
  ssr: false,
});

import Dynamic from "next/dynamic";
import { TextField } from "@mui/material";
const styles = (theme) => ({
  field: {
    margin: "10px 0",
  },
  countryList: {
    ...theme.typography.body1,
  },
});

export default function phone() {
  const [value, setValue] = useState("");
  return <></>;
}
