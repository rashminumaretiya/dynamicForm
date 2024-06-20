import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material";

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .Mui-disabled": {
    "&.MuiInputBase-input": {
      backgroundColor: "#eef0f5",
    },
  },
  "& .MuiFormHelperText-root": {
    margin: 0,
  },
}));
const DCInput = ({ ...props }) => {
  return <StyledTextField fullWidth {...props} />;
};

export default DCInput;
