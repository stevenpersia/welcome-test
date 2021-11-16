import React from "react";
import ReactDOM from "react-dom";
import { createTheme, WuiProvider } from "@welcome-ui/core";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./store";

const theme = createTheme();

ReactDOM.render(
  <React.StrictMode>
    <WuiProvider theme={theme}>
      <AppProvider>
        <App />
      </AppProvider>
    </WuiProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
