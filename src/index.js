import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StateProvider } from "./context/StateProvider";
import reduer, { initialState } from "./context/reducer";
import { ChakraProvider } from "@chakra-ui/react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StateProvider initialState={initialState} reducer={reduer}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StateProvider>
);
