import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FormHelperText, styled } from "@mui/material";

const StyledSelect = styled(FormControl)(({ theme }) => ({
  "& .MuiFormHelperText-root": {
    margin: 0,
  },
}));

const DCSelect = ({
  label,
  value,
  onChange,
  list,
  name,
  error,
  helperText,
}) => {
  return (
    <StyledSelect fullWidth error={error}>
      <InputLabel>{label}</InputLabel>
      <Select value={value} name={name} label={label} onChange={onChange}>
        {list.map((item, i) => {
          return (
            <MenuItem value={item} key={i}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </StyledSelect>
  );
};

export default DCSelect;
