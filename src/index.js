import React, { useState } from "react";
import ReactDOM from "react-dom";
import Checkbox from "./Checkbox";
import RadioButton from "./RadioButton";

import "./styles.css";
import ToggleSwitch from "./ToggleSwitch";

function App() {
  const [value, setCheckbox] = useState(true);
  const [radioValue, setRadio] = useState(true);

  return (
    <div className="App">
      <h2>Checkbox</h2>
      <div>
        <Checkbox
          label="value"
          value={value}
          checked={value}
          onChange={({ target }) => setCheckbox(!value)}
        />
        <Checkbox
          label="disabled value"
          value={value}
          checked={value}
          disabled={true}
          onChange={({ target }) => setCheckbox(!value)}
        />
        <Checkbox
          label="!value"
          value={!value}
          checked={!value}
          onChange={({ target }) => setCheckbox(!value)}
        />
      </div>
      <div>
        <h2>Toggle switch</h2>

        <ToggleSwitch
          title="toogle switch xs"
          size="xs"
          value={value}
          checked={value}
          onChange={({ target }) => setCheckbox(!value)}
        />

        <ToggleSwitch
          title="toogle switch sm"
          size="sm"
          value={value}
          checked={value}
          onChange={({ target }) => setCheckbox(!value)}
        />

        <ToggleSwitch
          title="toogle switch default"
          value={value}
          checked={value}
          onChange={({ target }) => setCheckbox(!value)}
        />

        <ToggleSwitch
          title="toogle switch lg"
          size="lg"
          value={value}
          checked={value}
          onChange={({ target }) => setCheckbox(!value)}
        />

        <ToggleSwitch
          disabled={true}
          value={value}
          checked={value}
          onChange={({ target }) => setCheckbox(!value)}
        />
      </div>
      <div>
        <h2>Radio button</h2>
        <div>
          <RadioButton
            label="radio 1"
            name="radio"
            value={radioValue}
            checked={radioValue}
            onChange={({ target }) => {
              console.log(target.value);
              setRadio(Boolean(target.value));
            }}
          />
          <RadioButton
            label="radio 2"
            name="radio"
            value={!radioValue}
            checked={!radioValue}
            onChange={({ target }) => setRadio(!target.value)}
          />

          <RadioButton
            label="radio 3 (disabled)"
            name="radio-disabled"
            value={!radioValue}
            checked={!radioValue}
            disabled
            onChange={({ target }) => setRadio(!target.value)}
          />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
