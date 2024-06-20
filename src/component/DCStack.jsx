import React from "react";
import Stack from "@mui/material/Stack";

const DCStack = ({ children, ...props }) => {
  return <Stack {...props}>{children}</Stack>;
};

export default DCStack;
