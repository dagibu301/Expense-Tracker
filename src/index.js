import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";

import { Provider } from "./context/context";
import App from "./App";
import "./index.scss";

ReactDOM.render(
  <SpeechProvider appId='1a6aa8e9-3e4d-4cf4-aba3-f61dc5330465' language='en-US'>
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
