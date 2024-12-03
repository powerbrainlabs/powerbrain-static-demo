import React from "react";
import ReactDOM from "react-dom/client";
import { Analytics } from "@vercel/analytics/react"
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Analytics/>
    <App />
  </React.StrictMode>
);
