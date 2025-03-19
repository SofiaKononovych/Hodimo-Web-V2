import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Enable Hot Module Replacement (HMR)
if (module.hot) {
  module.hot.accept("./App", () => {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  });
}