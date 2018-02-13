import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Alert,
  BasicAutocomplete,
  WrappedInputLabel,
  DatePicker,
  Modal,
  ModalHeader,
  ModalBody,
  Close,
  Checkbox,
  Radio,
  RadioGroup,
  RadioGroupHeader
} from "@westfield/om-react-components";

import ReactModal from "react-modal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalWithHeader: false,
      showModalWithNoHeader: false,
      selected: 0
    };

    this.comboOptions = ["Potato", "Corn", "Radish"];
    this.comboOptions2 = ["Skittle", "Snickers", "Twix"];
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

    this.ramenOptions = ["Onsen Egg", "Bamboo Shoots", "Pork Belly", "Enoki"];
  }

  doClick(e) {
    console.log("[sandbox] clicked");
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  // For checkbox change events
  handleCheckboxChange(e, props) {
    console.log("[sandbox] handleCheckboxChange: ", props);
  }

  // for radio button change events
  handleOptionChange = (e, props) => {
    console.log("[sandbox] handleOptionChange: ", props);
  };

  render() {
    return (
      <div>
        <h1>Checkbox</h1>
        {/* Only the first contains state management */}
        <Checkbox
          id={"hotdogCheck"}
          label={"Hot dog"}
          onChange={this.handleCheckboxChange.bind(this)}
        />
        <Checkbox
          id={"baconCheck"}
          label={"Bacon (pre-checked)"}
          isSelected={true}
        />
        <Checkbox
          id={"disabledCheck"}
          label={"Turkey breast (Disabled)"}
          isDisabled={true}
        />
        <Checkbox
          id={"disabledPreCheck"}
          label={"Roast beef (Disabled but pre-checked)"}
          checked={true}
          isDisabled={true}
        />

        <h1>Radio</h1>
        <RadioGroup name={"veggie-option"}>
          <RadioGroupHeader>Veggies</RadioGroupHeader>
          <Radio id="veggie1" value="cabbage">
            Cabbage
          </Radio>
          <Radio id="veggie2" value="mushroom">
            Mushroom
          </Radio>
          <Radio id="veggie3" value="eggplant">
            Eggplant
          </Radio>
          <Radio id="veggie4" value="broccoli" isDisabled>
            Brocolli
          </Radio>
        </RadioGroup>

        <hr />
        <h1>Modal Lightbox Dialog</h1>
        <Button secondary onClick={this.handleOpenModal}>
          Trigger Modal with header
        </Button>
        <Modal
          ariaHideApp={false}
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          onRequestClose={this.handleCloseModal}
          contentLabel="Example Modal"
        >
          <ModalHeader onClose={this.handleCloseModal}>
            Header About cats and other relevant things
          </ModalHeader>
          <ModalBody>
            <p>
              Wake up human for food at 4am have a lot of grump in yourself
              because you can't forget to be grumpy and not be like king grumpy
              cat and loves cheeseburgers or yowling nonstop the whole night
              licks paws and milk the cow.
            </p>
            <p>
              Suddenly go on wild-eyed crazy rampage howl on top of tall thing,
              dead stare with ears cocked but flee in terror at cucumber
              discovered on floor for has closed eyes but still sees you, for
              lick butt.
            </p>
            <p>
              Fall asleep on the washing machine munch on tasty moths or this
              cat happen now, it was too purr-fect!!!. Annoy the old grumpy cat,
              start a fight and then retreat to wash when i lose meow meow
              scratch the postman wake up lick paw wake up owner meow meow yet
              climb leg, for dead stare with ears cocked but throw down all the
              stuff in the kitchen, cat snacks.
            </p>
            <Button primary onClick={this.handleCloseModal}>
              Close Modal
            </Button>
          </ModalBody>
        </Modal>

        <h1>Basic BasicAutocomplete</h1>
        <BasicAutocomplete
          label={"Favorite Fruit"}
          items={["apple", "orange", "carrot"]}
          onChange={selectedItem => console.log(selectedItem)}
        />
        <hr />

        <h1>Date Picker</h1>
        <DatePicker
          label={"Select a Date"}
          options={{ dateFormat: "m-d-Y " }}
        />

        <hr />

        <h1>Combo button</h1>

        <hr />
        <h1>Buttons</h1>

        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button disabled>disabled</Button>

        <Button onClick={this.doClick}>
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
        <WrappedInputLabel label={"Name"} required />
        <WrappedInputLabel label={"Email"} type={"email"} />

        <WrappedInputLabel
          disabled
          label={"Disabled Input"}
          type={"text"}
          value={"Lollipop"}
        />

        <hr />
        <h1>Alerts</h1>

        <Alert type="info" dismissable onDismiss={() => console.log("Closed!")}>
          <h3>Closable</h3>
          <p>You can close me.</p>
        </Alert>

        <Alert type="info">
          <h3>My Littlest Cookie</h3>
          <p>Prep was at noon, and she was baked and cooled at two.</p>
        </Alert>
        <Alert type="success">
          <h3>My Littlest Cookie is yummy</h3>
          <p>Prep was at noon, and she was baked and ate quickly at two.</p>
        </Alert>
        <Alert type="warning">
          <h3>My Littlest Cookie tastes bad</h3>
          <p>Prep was at noon, and she was baked and tasted awful at two.</p>
        </Alert>
        <Alert type="error">
          <h3>My Littlest Cookie burned</h3>
          <p>Prep was at noon, and she was baked and burned at two.</p>
        </Alert>
      </div>
    );
  }
}

// const App = ({ name }) => {

// };

// App.propTypes = {
//   name: PropTypes.string
// };

export default App;
