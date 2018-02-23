import React from "react";
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
  RadioGroupHeader,
  NavBar,
  NavBarItem,
  NavItem,
  NavGroup,
  Link,
  UnstyledLink,
  Sidebar,
  SidebarItem,
  PasswordField,
  Textarea,
  BreadcrumbGroup,
  Breadcrumb
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
    this.handleNavChange = this.handleNavChange.bind(this);

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

  handleNavChange = (e, props) => {
    console.log("[sandbox] handleNavChange: ", props);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Breadcrumbs</h1>
            <BreadcrumbGroup>
              <Breadcrumb url="/bread1">Bread crumb 1</Breadcrumb>
              <Breadcrumb url="/bread2">Bread crumb 2</Breadcrumb>
              <Breadcrumb url="/bread3">Bread crumb 3</Breadcrumb>
              <Breadcrumb url="/bread4">Bread crumb 4</Breadcrumb>
            </BreadcrumbGroup>

            <hr />

            <h1>Order Form</h1>
            <WrappedInputLabel small label={"Name"} />
            <WrappedInputLabel label={"Email"} type={"email"} />
            <PasswordField id="my-pass-field" />
            <WrappedInputLabel
              large
              disabled
              label={"Disabled Input"}
              type={"text"}
              value={"Lollipop"}
            />

            <DatePicker
              id="select-date-id"
              label={"Select a Pick-up Date"}
              options={{ dateFormat: "m-d-Y " }}
            />

            <BasicAutocomplete
              label={"Fruit Selection"}
              items={["apple", "orange", "carrot"]}
              onChange={selectedItem =>
                console.log("Picked fruit: ", selectedItem)
              }
            />

            <h3>Protein Selection</h3>
            <Checkbox
              id={"hotdogCheck"}
              label={"Hot dog"}
              onChange={this.handleCheckboxChange.bind(this)}
            />
            <Checkbox
              id={"baconCheck"}
              label={"Bacon (recommended!)"}
              isSelected={true}
            />
            <Checkbox
              id={"disabledCheck"}
              label={"Turkey breast (Unavailable)"}
              isDisabled={true}
            />
            <Checkbox
              id={"disabledPreCheck"}
              label={"Roast beef (required for every order)"}
              isSelected={true}
              isDisabled={true}
            />
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
            <Textarea
              id="my-textarea"
              value="Tell us what you like most!"
              label="My Story"
            />

            <div className="row">
              <div className="col-4">
                <Button primary>Order</Button>
              </div>
              <div className="col-4">
                <Button secondary>Save</Button>
              </div>
              <div className="col-4">
                <Button disabled>Rush</Button>
              </div>
            </div>

            <h1>Sidebar: Animal Adoption</h1>
            <Sidebar onClick={this.handleNavChange}>
              <SidebarItem id="about">About</SidebarItem>
              <SidebarItem id="adopt" isDisabled>
                Adopt (not available)
              </SidebarItem>
              <NavGroup title="Cats" id="cats">
                <SidebarItem id="cat-blue">Blue Russian</SidebarItem>
                <SidebarItem id="cat-calico">Calico</SidebarItem>
                <SidebarItem id="cat-exotic">Exotic Short Hair</SidebarItem>
              </NavGroup>
              <NavGroup title="Dogs" id="dogs">
                <SidebarItem id="dog-aussie">Australian Shepard</SidebarItem>
                <SidebarItem id="dog-boston">Boston Terrier</SidebarItem>
                <SidebarItem id="dog-corgi">Corgi</SidebarItem>
                <SidebarItem id="dog-shibe">Shiba Inu</SidebarItem>
              </NavGroup>
              <SidebarItem id="contact">Contact Us</SidebarItem>
            </Sidebar>

            <hr />

            <h1>Links</h1>
            <p>
              We have a <UnstyledLink url="/local">Local link</UnstyledLink> and
              also an{" "}
              <UnstyledLink url="http://www.google.com" external>
                External Link
              </UnstyledLink>{" "}
              (that will open up in a new tab).
            </p>

            <hr />

            <h1>Tab Navigation</h1>
            <h3>With URLs</h3>
            <NavBar>
              <NavBarItem id="tab-one" url="/one">
                One Taco
              </NavBarItem>
              <NavBarItem id="tab-two" url="/two">
                Two Tacos
              </NavBarItem>
              <NavBarItem id="tab-three" url="/three" isDisabled>
                Three Tacos (disabled)
              </NavBarItem>
              <NavBarItem
                id="tab-external"
                url="http://www.google.com"
                external
              >
                External Tacos
              </NavBarItem>
            </NavBar>

            <h1>Tab Navigation with URLs</h1>
            <h3>With onclick on parent</h3>
            <NavBar onClick={this.handleNavChange}>
              <NavBarItem id="tab-one">One Corn</NavBarItem>
              <NavBarItem id="tab-two">Two Corns</NavBarItem>
              <NavBarItem id="tab-three">Three Corns</NavBarItem>
            </NavBar>

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
                  because you can't forget to be grumpy and not be like king
                  grumpy cat and loves cheeseburgers or yowling nonstop the
                  whole night licks paws and milk the cow.
                </p>
                <p>
                  Suddenly go on wild-eyed crazy rampage howl on top of tall
                  thing, dead stare with ears cocked but flee in terror at
                  cucumber discovered on floor for has closed eyes but still
                  sees you, for lick butt.
                </p>
                <p>
                  Fall asleep on the washing machine munch on tasty moths or
                  this cat happen now, it was too purr-fect!!!. Annoy the old
                  grumpy cat, start a fight and then retreat to wash when i lose
                  meow meow scratch the postman wake up lick paw wake up owner
                  meow meow yet climb leg, for dead stare with ears cocked but
                  throw down all the stuff in the kitchen, cat snacks.
                </p>
                <Button primary onClick={this.handleCloseModal}>
                  Close Modal
                </Button>
              </ModalBody>
            </Modal>

            <hr />
            <h1>Buttons</h1>

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
            <h1>Alerts</h1>

            <Alert
              type="info"
              dismissable
              onDismiss={() => console.log("Closed!")}
            >
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
              <p>
                Prep was at noon, and she was baked and tasted awful at two.
              </p>
            </Alert>
            <Alert type="error">
              <h3>My Littlest Cookie burned</h3>
              <p>Prep was at noon, and she was baked and burned at two.</p>
            </Alert>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
