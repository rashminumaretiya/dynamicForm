function splitCamelCase(input) {
  return input.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
}
const notEmpty = (name, value) => {
  if (value === "") {
    return `Please provide ${splitCamelCase(name)}`;
  }
  return "";
};
const notSelected = (name, value, radioButtonGroup) => {
  if (value === "") {
    return `Please provide ${splitCamelCase(name)}`;
  }
  if (!radioButtonGroup?.some((el) => el.selected)) {
    return `Please select ${splitCamelCase(name)}`;
  }
  return "";
};

const validation = ({ name, value, pattern, radioButtonGroup }) => {
  switch (pattern) {
    case "notEmpty":
      return notEmpty(name, value);
    case "notSelected":
      return notSelected(name, value, radioButtonGroup);
    default:
      return "";
  }
};

export default validation;
