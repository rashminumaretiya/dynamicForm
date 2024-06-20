import { FormHelperText, Typography, styled } from "@mui/material";
import React from "react";
import DCStack from "./DCStack";
import { Check } from "../icons";
import DCGrid from "./DCGrid";

const RadioButton = styled(DCStack)(({ theme, disabled, active, icon }) => ({
  backgroundColor: disabled
    ? "#E6E9F0"
    : active && !icon
    ? "#353154"
    : "#EEF0F5",
  padding: 20,
  borderRadius: 12,
  color: disabled
    ? "rgba(101, 110, 128, 0.50)"
    : active && !icon
    ? "#fff"
    : "#353154",
  textAlign: "center",
  pointerEvents: disabled || active ? "none" : "auto",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  "& span": {
    display: "flex",
    alignItems: "center",
    minHeight: 31,
    margin: "0 auto 10px",
  },
  "& .MuiStack-root": {
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 1,
    "&:before": {
      content: "''",
      width: 0,
      height: 0,
      borderStyle: "solid",
      borderWidth: "40px 40px 0 0",
      borderColor: "#343C4F transparent transparent transparent",
      position: "absolute",
      left: 0,
      top: 0,
      zIndex: -1,
    },
    "& svg": {
      color: "#FFF",
    },
  },
}));
const DCRadio = ({ onChange, name, error, child, pattern, selectedOption }) => {
  return (
    <>
      {child?.radioButtonGroup?.map((radioItem) => {
        return (
          <DCGrid
            item
            lg={radioItem?.lg}
            sm={radioItem?.sm}
            md={radioItem?.md}
            xs={radioItem?.xs}
          >
            <RadioButton
              onClick={(e) => {
                onChange({
                  e,
                  pattern,
                  name,
                  cValue: radioItem.value,
                });
              }}
              active={selectedOption === radioItem.value}
              disabled={radioItem?.disabled}
              value={radioItem?.value}
              icon={radioItem?.icon}
              name={name}
            >
              {radioItem?.icon && selectedOption === radioItem.value && (
                <DCStack>
                  <Check />
                </DCStack>
              )}
              {radioItem?.icon && (
                <Typography component="span">{radioItem?.icon}</Typography>
              )}
              {radioItem?.label}
            </RadioButton>
          </DCGrid>
        );
      })}

      <FormHelperText sx={{ px: 2.5, color: "#d32f2f", width: "100%" }}>
        {error}
      </FormHelperText>
    </>
  );
};

export default DCRadio;
