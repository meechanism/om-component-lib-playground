import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Alert,
  ButtonCombo,
  BasicAutocomplete,
  WrappedInputLabel
} from "@westfield/om-react-components";

const App = ({ name }) => {
  function doClick(e) {
    console.log("clicked");
  }

  function closeAlert(e) {
    console.log("close alert");
  }

  const comboOptions = ["Potato", "Corn", "Radish"];
  const comboOptions2 = ["Skittle", "Snickers", "Twix"];
  return (
    <div>
      <h1>Combo button</h1>
      <BasicAutocomplete
        items={["apple", "orange", "carrot"]}
        onChange={selectedItem => console.log(selectedItem)}
      />
      <ButtonCombo primary label="Starches" options={comboOptions} />
      <ButtonCombo secondary label="Candy Bars" options={comboOptions2} />

      <hr />
      <h1>Buttons</h1>

      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
      <Button disabled>disabled</Button>

      <Button onClick={doClick}>
        Normal Button <span className="test">(clickme)</span>
      </Button>

      <h1>Button Small</h1>
      <Button primary size="small">
        Primary Small
      </Button>
      <Button secondary size="small">
        Secondary Small
      </Button>

      <h1>Button large</h1>
      <Button primary size="large">
        Primary Large
      </Button>
      <Button secondary size="large">
        Secondary Large
      </Button>

      <h1>Inline</h1>
      <p>
        A small{" "}
        <Button size="small" inline>
          small inline
        </Button>{" "}
        button
      </p>
      <p>
        Another kind of <Button inline>inline</Button> button
      </p>
      <p>
        But then a{" "}
        <Button size="large" inline>
          large inline
        </Button>{" "}
        too
      </p>

      <h1>Others</h1>
      <Button danger>Ddddanger Zone</Button>

      <hr />
      <h1>Input/Forms</h1>
      <WrappedInputLabel
        label={"Name"}
        placeholder={"Patricia Henderson"}
        required
      />
      <WrappedInputLabel
        label={"Email"}
        placeholder={"pat.henderson@gmail.com"}
        type={"email"}
      />

      <WrappedInputLabel
        disabled
        label={"Disabled Input"}
        type={"text"}
        value={"Lollipop"}
      />

      <hr />
      <h1>Alerts</h1>

      <Alert type="info" dismissable onDismiss={() => console.log("Closed!")}>
        <h2>Closable</h2>
        <p>You can close me.</p>
      </Alert>

      <Alert type="info">
        <h2>My Littlest Cookie</h2>
        <p>Prep was at noon, and she was baked and cooled at two.</p>
      </Alert>
      <Alert type="success">
        <h2>My Littlest Cookie is yummy</h2>
        <p>Prep was at noon, and she was baked and ate quickly at two.</p>
      </Alert>
      <Alert type="warning">
        <h2>My Littlest Cookie tastes bad</h2>
        <p>Prep was at noon, and she was baked and tasted awful at two.</p>
      </Alert>
      <Alert type="error">
        <h2>My Littlest Cookie burned</h2>
        <p>Prep was at noon, and she was baked and burned at two.</p>
      </Alert>
    </div>
  );
};

App.propTypes = {
  name: PropTypes.string
};

export default App;
