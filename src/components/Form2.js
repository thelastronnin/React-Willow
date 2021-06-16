import React from "react";

import InputField from "./InputField";
import InputFieldSelect from "./InputFieldSelect";
import InputFieldCheckbox from "./InputFieldCheckbox";
import Button from "./Button";

import {
  checkName,
  checkNumber,
  checkNumberDot,
} from "./InputFieldValidations";

// iF = INPUT FIELD
class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: "",
      mName: "",
      lName: "",
      age: "",
      studying: "",
      working: "",
      bmi: "",

      errorFName: "",
      errorMName: "",
      errorLName: "",
      errorAge: "",
      errorStudying: "",
      errorWorking: "",
      errorBmi: "",

      genderOptions: [
        {
          id: 1,
          text: "Female",
        },
        {
          id: 2,
          text: "Male",
        },
      ],
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
  };

  onChangeFName = (value) => {
    this.setState({ errorFName: checkName(value), fName: value });
  };

  onChangeMName = (value) => {
    this.setState({ errorMName: checkName(value), mName: value });
  };

  onChangeLName = (value) => {
    this.setState({ errorLName: checkName(value), lName: value });
  };

  onChangeAge = (value) => {
    this.setState({ errorAge: checkNumber(value), age: value });
  };

  onChangeBmi = (value) => {
    this.setState({ errorBmi: checkNumberDot(value), bmi: value });
  };

  render() {
    const { title, onAdd, list } = this.props;
    return (
      <>
        {list.map((count) => (
          <form className="add-form">
            <h3>
              {title} {count}
            </h3>
            {/* FIRST NAME INPUT FIELD */}
            <InputField
              iFLabel="First name"
              iFType="text"
              iFPlaceholder="First name"
              iFvalue={this.state.fName}
              onChange={(e) => this.onChangeFName(e.target.value)}
              iFErrorMessage={this.state.errorFName}
              maxlength="255"
            />

            {/* Middle NAME INPUT FIELD */}
            <InputField
              iFLabel="Middle name"
              iFType="text"
              iFPlaceholder="Middle name"
              iFvalue={this.state.mName}
              onChange={(e) => this.onChangeMName(e.target.value)}
              iFErrorMessage={this.state.errorMName}
              maxlength="255"
            />

            {/* LAST NAME INPUT FIELD */}
            <InputField
              iFLabel="Last name"
              iFType="text"
              iFPlaceholder="Last name"
              iFvalue={this.state.lName}
              onChange={(e) => this.onChangeLName(e.target.value)}
              iFErrorMessage={this.state.errorLName}
              maxlength="255"
            />

            {/* AGE INPUT FIELD */}
            <InputField
              iFLabel="Age"
              iFType="text"
              iFPlaceholder="Age"
              iFvalue={this.state.age}
              onChange={(e) => this.onChangeAge(e.target.value)}
              iFErrorMessage={this.state.errorAge}
              maxlength="3"
            />

            <InputFieldSelect
              iFLabel="Gender"
              options={this.state.genderOptions}
            />

            <br />

            {/* STUDYING INPUT FIELD */}
            <InputFieldCheckbox
              iFLabel="Studying?"
              iFChecked={this.state.studying}
              iFvalue={this.state.studying}
              onChange={(e) => this.setState({ studying: e.target.checked })}
            />

            {/* WORKING INPUT FIELD */}
            <InputFieldCheckbox
              iFLabel="Working?"
              iFChecked={this.state.working}
              iFvalue={this.state.working}
              onChange={(e) => this.setState({ working: e.target.checked })}
            />

            {/* BMI INPUT FIELD */}
            <InputField
              iFLabel="BMI"
              iFType="text"
              iFPlaceholder="BMI"
              iFvalue={this.state.bmi}
              onChange={(e) => this.onChangeBmi(e.target.value)}
              iFErrorMessage={this.state.errorBmi}
              maxlength="255"
            />
          </form>
        ))}
        <div className="btn-position">
          <Button text="Save" onClick={(e) => this.onSubmit(e)} />
        </div>
      </>
    );
  }
}

export default Form1;
