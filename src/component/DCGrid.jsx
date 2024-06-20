import React from "react";
import Grid from "@mui/material/Grid";

const DCGrid = ({ children, ...props }) => {
  return <Grid {...props}>{children}</Grid>;
};

export default DCGrid;
