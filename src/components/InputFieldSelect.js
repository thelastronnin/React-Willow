import React from "react";

// iF = input Field

class InputFieldSelect extends React.Component {
  render() {
    const { iFLabel, options } = this.props;

    return (
      <div>
        <div>
          <label>{iFLabel}</label>
          <select className="form-select">
            <option value="">Choose: </option>
            {options.map((option) => (
              <option value={option.text}>{option.text}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default InputFieldSelect;
