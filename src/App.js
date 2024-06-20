import * as React from "react";
import Container from "@mui/material/Container";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import DCGrid from "./component/DCGrid";
import Card from "@mui/material/Card";
import FormField from "./component/FormField";
import { formItem } from "./description/formField.discription";
import DCStack from "./component/DCStack";
import validation from "./utils/validation";

function App() {
  const steps = [
    "JOB DESCRIPTION",
    "SKILLS",
    "CONTRACT TYPE",
    // "RECRUITMENT INFO",
    // "GENERAL REVIEW",
  ];
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [formFieldError, setFormFieldError] = React.useState({});
  const [formField, setFormField] = React.useState([]);

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handlePrev = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep - 1;
    setActiveStep(newActiveStep);
  };

  const handleNext = () => {
    formItem?.forEach((el) => {
      el?.option.forEach((elChild) => {
        elChild?.children.forEach((child) => {
          const { name, pattern, radioButtonGroup, disabled } = child;
          if (!disabled) {
            setFormFieldError((prev) => ({
              ...prev,
              [name]: validation({
                name,
                value: formField?.[name] || "",
                pattern,
                radioButtonGroup,
              }),
            }));
          }
        });
      });
    });
    // const newActiveStep =
    //   isLastStep() && !allStepsCompleted()
    //     ? steps.findIndex((step, i) => !(i in completed))
    //     : activeStep + 1;
    // setActiveStep(newActiveStep);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  const handleChange = ({ e, pattern, name: cname, cValue }) => {
    const { name, value } = e?.target || {};
    const customName = name ?? cname;
    console.log("customName", customName);
    setFormFieldError((prev) => ({
      ...prev,
      [customName]: validation({ name, value, pattern }),
    }));
    if (formField[customName] === "agencies") {
      delete formField["selectAgencies"];
    }
    setFormField((prev) => ({ ...prev, [customName]: value || cValue }));

    formItem
      ?.flatMap((el) => el?.option || [])
      .flatMap((elChild) => elChild?.children || [])
      .flatMap((child) => child?.radioButtonGroup || [])
      .forEach((el) => {
        if (el.value === cValue) {
          el.selected = true;
        }
      });
  };

  console.log("formFieldError", formFieldError);
  console.log("formField", formField);

  return (
    <Container>
      <DCGrid container>
        <DCGrid item md={4} xs={12}>
          <Stepper nonLinear activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
        </DCGrid>
        <DCGrid item md={8} xs={12}>
          <Card elevation={3}>
            <FormField
              fields={formItem[activeStep]}
              error={formFieldError}
              value={formField}
              onChange={handleChange}
            />
          </Card>
          <DCStack my={3} justifyContent="space-between" direction="row">
            {activeStep !== 0 && (
              <Button variant="contained" onClick={handlePrev}>
                Previous
              </Button>
            )}
            <Button
              variant="contained"
              onClick={
                activeStep !== steps.length - 1 ? handleNext : handleNext
              }
              sx={{ ml: "auto" }}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </DCStack>
        </DCGrid>
      </DCGrid>
    </Container>
  );
}

export default App;
