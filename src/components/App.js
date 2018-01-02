import React from 'react';
import PropTypes from 'prop-types';
import { Button, Alert } from 'om-react-components';



const App = ({ name }) => {
  function doClick(e) {
    console.log("clicked");
  }
  return (
    <div>
      <h1>Buttons</h1>
      <Button  onClick={doClick}>Normal Button (clickme)</Button>

      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
      <Button combo>combo</Button>
      <Button disabled>disabled</Button>

      <h1>Button Small</h1>
      <Button primary size="small">Primary Small</Button>
      <Button secondary size="small">Secondary Small</Button>

      <h1>Button large</h1>
      <Button primary size="large">Primary Large</Button>
      <Button secondary size="large">Secondary Large</Button>

      <h1>Inline</h1>
      <p>A small <Button size="small" inline>small inline</Button> button</p>
      <p>Another kind of <Button inline>inline</Button> button</p>
      <p>But then a <Button size="large" inline>large inline</Button> too</p>

      <h1>Others</h1>
      <Button danger>Ddddanger Zone</Button>

      <hr />
      <h1>Alerts</h1>
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
  name: PropTypes.string,
};

export default App;
