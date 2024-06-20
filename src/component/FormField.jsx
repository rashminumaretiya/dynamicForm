import React, { useEffect, useState } from "react";
import DCInput from "./DCInput";
import DCGrid from "./DCGrid";
import DCSelect from "./DCSelect";
import DCStack from "./DCStack";
import DCTypography from "./DCTypography";
import {
  Autocomplete,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  Radio,
  RadioGroup,
} from "@mui/material";
import DCRadio from "./DCRadio";
import { Close } from "../icons";

const FormField = ({ fields, onChange, error, value, showOption }) => {
  const [cloneField, setCloneField] = useState([]);
  // const handleOptionChange = (mainTitle, option) => {
  //   option?.main && delete selectedOption[mainTitle]?.option?.sub;
  //   setSelectedOption((prevState) => ({
  //     ...prevState,
  //     [mainTitle]: {
  //       option: { ...selectedOption[mainTitle]?.option, ...option },
  //     },
  //   }));
  // };
  useEffect(() => {
    const initialClone = fields.option
      .flatMap((field) => field.children)
      .find((el) => el.type === "multiAddTextField");

    if (initialClone) {
      setCloneField([{ ...initialClone, label: "1ST MONTH" }]);
    }
  }, [fields]);
  const radioOption = (field, child, onChange, key) => {
    return (
      <DCGrid item lg={child?.lg} sm={child?.sm} md={child?.md} xs={child?.xs}>
        <FormControl>
          <RadioGroup row name={child.name}>
            {child?.radioGroup.map((item) => {
              return (
                <FormControlLabel
                  value={item.value}
                  control={<Radio />}
                  name={item.name}
                  label={item.label}
                  onChange={(event) => {
                    onChange?.({
                      e: event,
                    });
                  }}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      </DCGrid>
    );
  };

  const multiAddTextField = (field) => {
    const clone = field.children.find((el) => el.type === "multiAddTextField");

    const handleAdd = () => {
      if (!error["month"])
        setCloneField((prev) => [
          ...prev,
          { ...clone, label: `${prev.length + 1}ST MONTH` },
        ]);
    };
    console.log("cloneField", cloneField);
    const handleDelete = (ind) => {
      const filteredArray = cloneField.filter((_, index) => index !== ind);
      const updatedArray = filteredArray.map((item, index) => ({
        ...item,
        label: `${index + 1}ST MONTH`,
      }));
      setCloneField(updatedArray);
    };
    return (
      <>
        {cloneField?.map((field, i) => {
          return (
            <>
              <DCGrid item md={9} key={i}>
                <DCStack direction="row" alignItems="center" spacing={1}>
                  {cloneField.length > 1 && (
                    <IconButton
                      sx={{ flex: "none" }}
                      onClick={() => handleDelete(i)}
                    >
                      <Close />
                    </IconButton>
                  )}
                  <DCInput
                    label={field?.label}
                    value={value[field.value]}
                    disabled={field?.disabled}
                    name={field?.name}
                    error={error[field?.name]}
                    helperText={error[field?.name]}
                    onChange={(e) =>
                      onChange({
                        e,
                        pattern: field?.pattern,
                      })
                    }
                  />
                </DCStack>
              </DCGrid>
              <DCGrid item md={3}>
                <FormGroup>
                  <FormControlLabel
                    componentsProps={{
                      typography: {
                        sx: { fontSize: 14 },
                      },
                    }}
                    control={<Checkbox />}
                    label="Free replacement"
                  />
                </FormGroup>
              </DCGrid>
            </>
          );
        })}
        <DCGrid item md={12}>
          <DCTypography
            color="primary"
            onClick={handleAdd}
            sx={{ cursor: "pointer" }}
          >
            + Add {cloneField.length + 1}th month
          </DCTypography>
        </DCGrid>
      </>
    );
  };
  return fields.option.map((item, ind) => {
    return (
      <>
        {(!item?.show || (item?.show && item?.show(value))) && (
          <DCStack key={ind} sx={{ p: 2, borderBottom: "1px solid #ddd" }}>
            <DCTypography mb={2}>{item?.mainTitle}</DCTypography>
            <DCGrid container spacing={2}>
              {item?.children?.map((child, i) => {
                if (child.show) {
                  if (!child.show(value)) {
                    return null;
                  }
                }
                if (child?.type === "text") {
                  return (
                    <DCGrid
                      item
                      lg={child?.lg}
                      sm={child?.sm}
                      md={child?.md}
                      xs={child?.xs}
                    >
                      <DCInput
                        label={child?.label}
                        value={value[child?.name]}
                        disabled={child?.disabled}
                        error={error[child?.name]}
                        onChange={(e) =>
                          onChange({ e, pattern: child?.pattern })
                        }
                        name={child?.name}
                        helperText={error[child?.name]}
                      />
                    </DCGrid>
                  );
                } else if (child?.type === "select") {
                  return (
                    <DCGrid
                      item
                      lg={child?.lg}
                      sm={child?.sm}
                      md={child?.md}
                      xs={child?.xs}
                    >
                      <DCSelect
                        label={child?.label}
                        list={child?.listItem}
                        onChange={(e) =>
                          onChange({ e, pattern: child?.pattern })
                        }
                        name={child?.name}
                        error={error[child?.name]}
                        helperText={error[child?.name]}
                        value={value[child?.name]}
                      />
                    </DCGrid>
                  );
                } else if (child?.type === "radioButton") {
                  return (
                    <DCRadio
                      child={child}
                      onChange={onChange}
                      name={child?.name}
                      error={error[child?.name]}
                      selectedOption={value[child?.name]}
                    />
                  );
                } else if (child.type === "radio") {
                  return radioOption(item, child, onChange);
                } else if (child.type === "autocomplete") {
                  return (
                    <DCGrid
                      item
                      lg={child?.lg}
                      sm={child?.sm}
                      md={child?.md}
                      xs={child?.xs}
                    >
                      <Autocomplete
                        multiple
                        options={child?.listItem || []}
                        getOptionLabel={(option) => option.title}
                        // value="ss"
                        // inputValue="ss"
                        onChange={onChange}
                        onInputChange={onChange}
                        name={child?.name}
                        renderInput={(params) => (
                          <DCInput
                            {...params}
                            variant="outlined"
                            label={child?.label}
                            error={error[child?.name]}
                            helperText={error[child?.name]}
                          />
                        )}
                      />
                    </DCGrid>
                  );
                } else if (child.type === "multiAddTextField") {
                  return multiAddTextField(item, child);
                }
              })}
            </DCGrid>
          </DCStack>
        )}
      </>
    );
  });
};

export default FormField;
