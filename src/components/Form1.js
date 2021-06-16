import React from "react";

import InputField from "./InputField";
import InputFieldTextArea from "./InputFieldTextArea";
import InputFieldCheckbox from "./InputFieldCheckbox";
import Form2 from "./Form2";

import { checkAddress, checkNumber } from "./InputFieldValidations";

// iF = INPUT FIELD

class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      totalPersonHousehold: "",
      cleanWater: false,
      monIncome: "",
      informalSettler: false,

      errorAddress: "",
      errorTotalPersonHousehold: "",
      errorCleanWater: "",
      errorMonIncome: "",
      errorInformalSettler: "",

      timeout: 0,
      form2TotalCount: [],
      stringForm2Count: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
  };

  onChangeAddress = (value) => {
    this.setState({ errorAddress: checkAddress(value), address: value });
  };

  onChangeTotalPersonHousehold = (value) => {
    this.setState({
      errorTotalPersonHousehold: checkNumber(value),
      totalPersonHousehold: value,
      form2TotalCount: [],
      stringForm2Count: [],
    });

    this.personPerHousehold(value);
  };

  personPerHousehold = (value) => {
    // PLEASE READ HOUSEHOLD DOCUMENTATION
    if (value != "" && value > 0) {
      if (this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        for (var x = 1; x <= value; x++) {
          if (x < value) {
            this.setState({
              stringForm2Count: (this.state.stringForm2Count += x + ","),
            });
          }
          if (x == value) {
            this.setState({
              stringForm2Count: (this.state.stringForm2Count += x),
            });
          }
        }

        this.setState({
          form2TotalCount: this.state.stringForm2Count.split(","),
        });
      }, 800);
    }
  };

  onChangeMonthlyIncome = (value) => {
    this.setState({
      errorMonIncome: checkNumber(value),
      monIncome: value,
    });
  };

  render() {
    const { title, onAdd } = this.props;
    return (
      <form className="add-form">
        <h3>{title}</h3>
        {/* ADDRESS INPUT FIELD */}
        <InputFieldTextArea
          iFLabel="Address"
          iFPlaceholder="Address"
          iFvalue={this.state.address}
          onChange={(e) => this.onChangeAddress(e.target.value)}
          iFErrorMessage={this.state.errorAddress}
        />

        {/* TOTAL HOUSEHOLD INPUT FIELD */}
        <InputField
          iFLabel="Total persons in the household"
          iFType="text"
          iFPlaceholder="Total person"
          iFvalue={this.state.totalPersonHousehold}
          onChange={(e) => this.onChangeTotalPersonHousehold(e.target.value)}
          iFErrorMessage={this.state.errorTotalPersonHousehold}
          maxlength="255"
        />

        {/* ACCESS TO CLEAN WATER INPUT FIELD */}
        <InputFieldCheckbox
          iFLabel="Access to clean water?"
          iFChecked={this.state.cleanWater}
          iFvalue={this.state.cleanWater}
          onChange={(e) => this.setState({ cleanWater: e.target.checked })}
        />

        {/* MONTHLY INCOME INPUT FIELD */}
        <InputField
          iFLabel="Monthly income"
          iFType="text"
          iFPlaceholder="Monthly income"
          iFvalue={this.state.monIncome}
          onChange={(e) => this.onChangeMonthlyIncome(e.target.value)}
          iFErrorMessage={this.state.errorMonIncome}
          maxlength="255"
        />

        {/* INFORMAL SETTLERS INPUT FIELD */}
        <InputFieldCheckbox
          iFLabel="Informal settlers?"
          iFChecked={this.state.informalSettler}
          iFvalue={this.state.informalSettler}
          onChange={(e) => this.setState({ informalSettler: e.target.checked })}
        />

        <Form2 title={"Person"} list={this.state.form2TotalCount} />
      </form>
    );
  }
}

export default Form1;
