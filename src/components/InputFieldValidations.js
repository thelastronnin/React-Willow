// CHECK ADDRESS
export const checkAddress = (value) => {
  var output = "";
  if (value == "") {
    return (output = "Invalid Input");
  }

  if (/[^a-zA-Z 0-9 ,.-]/.test(value)) {
    return (output = "Alphanumeric and (, - .) only");
  }

  return output;
};

// CHECK NUMBER
export const checkNumber = (value) => {
  var output = "";
  if (value == "") {
    return (output = "Invalid Input");
  }

  if (/[^0-9]/.test(value)) {
    return (output = "Invalid Input");
  }

  return output;
};

// CHECK NUMBER W/ DECIMAL POINT
export const checkNumberDot = (value) => {
  var output = "";
  if (value == "") {
    return (output = "Invalid Input");
  }

  if (/[^0-9 .]/.test(value)) {
    return (output = "Invalid Input");
  }

  return output;
};

// CHECK FIRST NAME
export const checkName = (value) => {
  var output = "";

  if (value == "") {
    return (output = "Invalid Input");
  }

  if (/[^a-zA-Z ]/.test(value)) {
    return (output = "A-Z letters only");
  }

  return output;
};
