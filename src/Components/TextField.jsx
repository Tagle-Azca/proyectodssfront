import React from "react";
import TextField from "@mui/material/TextField";
import { SxProps, Theme } from "@mui/system";

const ReusableTextField = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
  fullWidth = true,
  multiline = false,
  rows = 1,
  error = false,
  helperText = "",
  sx = {},
}) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      fullWidth={fullWidth}
      multiline={multiline}
      rows={rows}
      error={error}
      helperText={helperText}
      sx={sx}
      variant="outlined"
    />
  );
};

export default ReusableTextField;
