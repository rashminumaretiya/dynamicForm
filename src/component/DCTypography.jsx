import React from "react";
import Typography from "@mui/material/Typography";

const DCTypography = ({ children, ...props }) => {
  return <Typography {...props}>{children}</Typography>;
};

export default DCTypography;
