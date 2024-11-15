import React from "react";
import Button from "@mui/material/Button";

const ReusableButton = ({
  label,
  variant = "contained",
  color = "primary",
  size = "medium",
  onClick,
  disabled = false,
  fullWidth = false,
  sx = {},
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      sx={sx}
    >
      {label}
    </Button>
  );
};

export default ReusableButton;
