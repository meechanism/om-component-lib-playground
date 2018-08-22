import React, { Component } from "react";
import "./styles/App.css";
import {
  ThemeProvider,
  OMTheme,
  Select,
  Option,
  Header
} from "@westfield/om-react-components";

class App extends Component {
  state = {
    color: "red",
    pet: ""
  };

  petData = [
    {
      value: "hamster",
      label: "Hamster"
    },
    {
      value: "horse",
      label: "Horse"
    },
    {
      value: "dog",
      label: "Dog",
      isDisabled: true
    }
  ];

  componentWillMount() {
    this.setDelayedData();
  }

  doClick = e => {
    console.log("[sandbox] clicked");
  };

  // faking async data
  setDelayedData = () => {
    setTimeout(() => {
      this.setState({ pet: this.petData[1] });
    }, 1000);
  };

  render() {
    return (
      <ThemeProvider theme={OMTheme}>
        <div className="container">
          <Header>Test with old implementation</Header>
          <Select selectedOption={this.state.color} label="Favorite Color">
            <Option value="blue">Blue</Option>
            <Option value="red">Red</Option>
            <Option value="yellow">Yellow</Option>
          </Select>
          <hr />

          <Header>Test with new implementation (and async data)</Header>
          <Select
            selected={this.state.pet ? this.state.pet : null}
            label="Favorite Pet"
            options={this.petData}
          />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
