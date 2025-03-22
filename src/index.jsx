import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { rootElement } from "./rootElement.jsx";

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
