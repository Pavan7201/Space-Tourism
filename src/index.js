import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App"; // Import your App component

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> {/* Render the App component which contains the routes */}
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
