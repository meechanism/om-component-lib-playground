import React, { Component } from "react";
import "./styles/App.css";
import {
  Button,
  Alert,
  BasicAutocomplete,
  WrappedInputLabel,
  DatePicker,
  Modal,
  ModalHeader,
  ModalBody,
  Checkbox,
  Radio,
  RadioGroup,
  NavBar,
  NavBarItem,
  NavGroup,
  Link,
  UnstyledLink,
  Sidebar,
  SidebarItem,
  PasswordField,
  Textarea,
  BreadcrumbGroup,
  Breadcrumb,
  Table,
  Caption,
  Tbody,
  Thead,
  Th,
  Td,
  Tr,
  Header,
  DisplayText,
  Card,
  MenuButton,
  MenuItem,
  IconLabelNav
} from "@westfield/om-react-components";

class App extends Component {
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
    this.menuOptions = ["Account", "Settings", "Logout"];
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
            <IconLabelNav
              label="Administration"
              onIconClick={() => console.log("clicked icon")}
              iconAriaLabel="View applications"
            >
              <NavBar onClick={this.handleNavChange}>
                <NavBarItem id="product">Product Management</NavBarItem>
                <NavBarItem id="partner">Partner Management</NavBarItem>
                <NavBarItem id="group">Group Management</NavBarItem>
                <NavBarItem id="user">User Management</NavBarItem>
              </NavBar>
            </IconLabelNav>

            <h1>Buttons</h1>

            <div className="row">
              <div className="col-4">
                <h3>Inline button menu</h3>

                <MenuButton id="my-menu3" type="inline" label="Menu">
                  <MenuItem
                    menuButtonType="inline"
                    onClick={() => console.log("Button menu: Clicked account")}
                  >
                    Account Information
                  </MenuItem>
                  <MenuItem
                    menuButtonType="inline"
                    onClick={() => console.log("Button menu: Clicked settings")}
                  >
                    Settings
                  </MenuItem>
                  <MenuItem
                    menuButtonType="inline"
                    onClick={() => console.log("Button menu: Clicked logout")}
                  >
                    Logout
                  </MenuItem>
                </MenuButton>
                <p>
                  Note: The max width of the menu is going to be the width of
                  the sibling, which in this case is the button label. If you
                  want to control the min-width of the menu, pass in a
                  `menuMinWidth` prop. See below for example
                </p>

                <div style={{ border: "1px dashed pink" }}>
                  <h3>Render from right</h3>
                  <p>
                    This will render out starting from the farthest right of the
                    button's width. For exageration, we put a dashed border
                    around the parent container to clarify that it doesn't
                    render based on parent container.
                  </p>
                  <MenuButton
                    id="my-menu4"
                    type="inline"
                    label="Menu"
                    renderFrom="right"
                    menuMinWidth="200px"
                  >
                    <MenuItem
                      menuButtonType="inline"
                      onClick={() =>
                        console.log("Button menu: Clicked account")
                      }
                    >
                      Account Information
                    </MenuItem>
                    <MenuItem
                      menuButtonType="inline"
                      onClick={() =>
                        console.log("Button menu: Clicked settings")
                      }
                    >
                      Settings
                    </MenuItem>
                    <MenuItem
                      menuButtonType="inline"
                      onClick={() => console.log("Button menu: Clicked logout")}
                    >
                      Logout
                    </MenuItem>
                  </MenuButton>
                </div>
              </div>
              <div className="col-4">
                <h3>Primary button menu</h3>
                <MenuButton id="my-menu" label="Menu">
                  <MenuItem
                    onClick={() => console.log("Button menu: Clicked account")}
                  >
                    Account
                  </MenuItem>
                  <MenuItem
                    disabled
                    onClick={() => console.log("Button menu: Clicked settings")}
                  >
                    Settings (disabled)
                  </MenuItem>
                  <MenuItem
                    onClick={() => console.log("Button menu: Clicked logout")}
                  >
                    Logout
                  </MenuItem>
                </MenuButton>
              </div>
              <div className="col-4">
                <h3>Secondary button menu</h3>
                <MenuButton id="my-menu2" type="secondary" label="Menu">
                  <MenuItem
                    onClick={() => console.log("Button menu: Clicked account")}
                  >
                    Account
                  </MenuItem>
                  <MenuItem
                    onClick={() => console.log("Button menu: Clicked settings")}
                  >
                    Settings
                  </MenuItem>
                  <MenuItem
                    onClick={() => console.log("Button menu: Clicked logout")}
                  >
                    Logout
                  </MenuItem>
                </MenuButton>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3">
                <h3>Default Button</h3>
                <p>
                  The props to this button are pretty much non-existant, sans
                  the onClick callback for an example. It is using a lot of the
                  default settings.
                </p>
                <Button onClick={this.doClick}>Default Button (clickme)</Button>

                <h3>Others</h3>
                <Button type="danger">Ddddanger Zone</Button>
              </div>
              <div className="col-lg-3">
                <h3>Button Small</h3>

                <Button size="small">Primary Small</Button>
                <Button type="secondary" size="small">
                  Secondary Small
                </Button>

                <Button type="disabled" size="small">
                  Disabled Small
                </Button>
              </div>
              <div className="col-lg-3">
                <h3>Button Large</h3>
                <Button size="large">Primary Large</Button>
                <Button type="secondary" size="large">
                  Secondary Large
                </Button>
                <Button type="disabled" size="large">
                  Disabled Large
                </Button>
              </div>
              <div className="col-lg-3">
                <h3>Inline</h3>
                <p>
                  A small{" "}
                  <Button size="small" type="inline">
                    small inline
                  </Button>{" "}
                  button
                </p>
                <p>
                  Another kind of <Button type="inline">inline</Button> button
                </p>
                <p>
                  But then a{" "}
                  <Button size="large" type="inline">
                    large inline
                  </Button>{" "}
                  too
                </p>
              </div>
            </div>

            <hr />
            <h1>Card</h1>

            <div className="row">
              <div className="col-6">
                <Card>
                  <Header divider="muted" element="h3">
                    Adopt Today
                  </Header>
                  <DisplayText>
                    We have many kittens available for adoption. Please call
                    1-800-Kittens for more information.
                  </DisplayText>
                  <Link url="./learn-more">Contact Now</Link>
                </Card>
              </div>
              <div className="col-6">
                <Card
                  type="linked"
                  renderArrow
                  onClick={() => console.log("Clicked card")}
                >
                  <Header centered divider="primary" element="h3">
                    Puppies are back!
                  </Header>
                  <DisplayText>
                    We got a new shipment of puppies! Come see!
                  </DisplayText>
                </Card>
              </div>
            </div>

            <hr />

            <h1>Typography: Display Text + Headers</h1>
            <div className="row">
              <div className="col-6">
                <h3>p-tag + muted</h3>
                <DisplayText>
                  Scenester ramps vaporware man{" "}
                  <strong>braid cronut swag</strong>. Polaroid trust fund cred,
                  iPhone church-key gentrify leggings lomo cloud bread echo park
                  flexitarian brooklyn tumblr selvage. Palo santo copper mug
                  messenger bag next level authentic food truck iPhone
                  gluten-free poke butcher. Ethical live-edge tacos XOXO
                  portland twee. Quinoa hell of freegan, art party farm-to-table
                  cred pabst irony photo booth banh mi trust fund copper mug.
                  Austin celiac paleo ramps street art.
                </DisplayText>

                <DisplayText color="muted">
                  Ethical live-edge tacos XOXO portland twee. Quinoa hell of
                  freegan, art party farm-to-table cred pabst irony photo booth
                  banh mi trust fund copper mug. Austin celiac paleo ramps
                  street art.
                </DisplayText>
              </div>

              <div className="col-6">
                <h3>span-tag + muted</h3>

                <DisplayText element="span">
                  Scenester ramps vaporware man braid cronut swag. Polaroid
                  trust fund cred, iPhone <strong>church-key</strong> gentrify
                  leggings lomo cloud bread echo park flexitarian brooklyn
                  tumblr selvage.
                </DisplayText>

                <DisplayText element="span" color="muted">
                  Palo santo copper mug messenger bag next level authentic food
                  truck iPhone gluten-free poke butcher.
                </DisplayText>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <Header>Header - default</Header>
                <Header element="h1">Header 1 - Large</Header>
                <Header element="h2">Header 2 - Medium</Header>
                <Header element="h2" weight="400">
                  Header 2 - Medium - Regular
                </Header>
                <Header element="h3">Header 3 - small</Header>
                <Header element="h4">Header 4 - extra small</Header>
              </div>
              <div className="col-lg-4">
                <Header centered divider="primary">
                  Header - default
                </Header>
                <Header centered divider="primary" element="h1">
                  Header 1 - Large
                </Header>
                <Header centered divider="primary" element="h2">
                  Header 2 - Medium
                </Header>
                <Header centered divider="primary" element="h2" weight="400">
                  Header 2 - Medium - Regular
                </Header>
                <Header centered divider="primary" element="h3">
                  Header 3 - small
                </Header>
                <Header centered divider="primary" element="h4">
                  Header 4 - extra small
                </Header>
              </div>
              <div className="col-lg-4">
                <Header centered divider="muted">
                  Header - default
                </Header>
                <Header centered divider="muted" element="h1">
                  Header 1 - Large
                </Header>
                <Header centered divider="muted" element="h2">
                  Header 2 - Medium
                </Header>
                <Header centered divider="muted" element="h2" weight="400">
                  Header 2 - Medium - Regular
                </Header>
                <Header centered divider="muted" element="h3">
                  Header 3 - small
                </Header>
                <Header centered divider="muted" element="h4">
                  Header 4 - extra small
                </Header>
              </div>
            </div>

            <hr />

            <Table>
              <Caption>Pat Thompson / Customer #19583</Caption>
              <Thead>
                <Tr>
                  <Th>Transaction Id</Th>
                  <Th>Date</Th>
                  <Th>Store</Th>
                  <Th>Item Count</Th>
                  <Th align="right">Transaction Total</Th>
                  <Th>Actions</Th>
                  <Th>Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td dataLabel="Transaction Id">345829</Td>
                  <Td dataLabel="Date">02/12/2018</Td>
                  <Td dataLabel="Store">
                    The longest food name emporium for all of the puppies and
                    kittens that need foodstuffs
                  </Td>
                  <Td dataLabel="Item Count">3</Td>
                  <Td dataLabel="Transaction Total" align="right">
                    $157.89
                  </Td>
                  <Td dataLabel="Actions">
                    <Link>Download</Link> | <Link>Return</Link>
                  </Td>
                  <Td dataLabel="Status">
                    <DisplayText element="span" color="danger">
                      Disabled
                    </DisplayText>
                  </Td>
                </Tr>
                <Tr>
                  <Td dataLabel="Transaction Id">245333</Td>
                  <Td dataLabel="Date">02/10/2018</Td>
                  <Td dataLabel="Store">Express</Td>
                  <Td dataLabel="Item Count">5</Td>
                  <Td dataLabel="Transaction Total" align="right">
                    $80.77
                  </Td>
                  <Td dataLabel="Actions">
                    <MenuButton
                      id="express-menu"
                      type="inline"
                      label="Actions"
                      extraWrap
                    >
                      <MenuItem
                        menuButtonType="inline"
                        onClick={() =>
                          console.log("Button menu: Clicked Download")
                        }
                      >
                        Download
                      </MenuItem>
                      <MenuItem
                        menuButtonType="inline"
                        onClick={() =>
                          console.log("Button menu: Clicked Return")
                        }
                      >
                        Return
                      </MenuItem>
                      <MenuItem
                        menuButtonType="inline"
                        onClick={() =>
                          console.log("Button menu: Clicked Delete")
                        }
                      >
                        Delete
                      </MenuItem>
                    </MenuButton>
                  </Td>
                  <Td dataLabel="Status">Active</Td>
                </Tr>
                <Tr>
                  <Td dataLabel="Transaction Id">125832</Td>
                  <Td dataLabel="Date">01/9/2018</Td>
                  <Td dataLabel="Store">Nordstrom</Td>
                  <Td dataLabel="Item Count">12</Td>
                  <Td dataLabel="Transaction Total" align="right">
                    $1,901.21
                  </Td>
                  <Td dataLabel="Actions">
                    <Link>Download</Link> | <Link>Return</Link>
                  </Td>
                  <Td dataLabel="Status">Active</Td>
                </Tr>
              </Tbody>
            </Table>

            <hr />
            <h1>Breadcrumbs</h1>
            <BreadcrumbGroup>
              <Breadcrumb url="/bread1">Bread crumb 1</Breadcrumb>
              <Breadcrumb url="/bread2">Bread crumb 2</Breadcrumb>
              <Breadcrumb url="/bread3">Bread crumb 3</Breadcrumb>
              <Breadcrumb url="/bread4">Bread crumb 4</Breadcrumb>
            </BreadcrumbGroup>
            <hr />

            <h1>Order Form</h1>
            <div className="row">
              <div className="col-md-6">
                <WrappedInputLabel
                  small
                  label="Name"
                  onChange={e => console.log("Changed:", e)}
                />
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
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-sm-6">
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
                  </div>
                  <div className="col-sm-6">
                    <h3>Cheese Selection</h3>
                    <Checkbox
                      id={"havarti"}
                      label={"Havarti"}
                      onChange={this.handleCheckboxChange.bind(this)}
                      style={{ bottomBorder: true }}
                    />
                    <Checkbox
                      id={"cheddar"}
                      label={"Cheddar"}
                      isSelected={true}
                      style={{ bottomBorder: true }}
                    />
                    <Checkbox
                      id={"goatmilk"}
                      label={"Goat Milk (Unavailable)"}
                      isDisabled={true}
                      style={{ bottomBorder: true }}
                    />
                    <Checkbox
                      id={"pepperjack"}
                      label={"Pepperjack (required for every order)"}
                      isSelected={true}
                      isDisabled={true}
                      style={{ bottomBorder: true }}
                    />
                  </div>
                </div>

                <RadioGroup label="Veggies" name={"veggie-option"}>
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
                    <Button>Order</Button>
                  </div>
                  <div className="col-4">
                    <Button type="secondary">Save</Button>
                  </div>
                  <div className="col-4">
                    <Button type="disabled">Rush</Button>
                  </div>
                </div>
              </div>
            </div>

            <hr />

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
            <Button type="secondary" onClick={this.handleOpenModal}>
              Trigger Modal with header
            </Button>
            <Modal
              ariaHideApp={false}
              isOpen={this.state.showModal}
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
