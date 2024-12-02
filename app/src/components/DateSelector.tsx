"use client";

import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";

const DateSelector = ({ value, onChange }): React.JSX.Element => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DatePicker
      label="Selecione uma Data"
      value={value}
      onChange={onChange}
      renderInput={(params) => <TextField {...params} />}
    />
  </LocalizationProvider>
);

export default DateSelector;
