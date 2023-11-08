import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";

interface Theme {
  textColor: String;
  backgroundColor: String;
}

const lightTheme: Theme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

const darkTheme: Theme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider theme={lightTheme}>
    <App />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
