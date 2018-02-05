// be smarter about which things to polyfil
import "babel-polyfill";

import React from "react";
import { render } from "react-dom";
import App from "./components/App";

render(<App name="World" />, document.getElementById("root"));
