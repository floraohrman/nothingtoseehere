import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

document.body.style.margin = "0";
document.body.style.fontFamily = "Inter, system-ui, sans-serif";
document.body.style.background =
  "radial-gradient(circle at 20% 20%, #1b0b2e, transparent 40%), radial-gradient(circle at 80% 30%, #0e1a40, transparent 40%), #05010a";
document.body.style.color = "#eae6ff";
document.body.style.margin = "0";
document.body.style.minHeight = "100vh";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundAttachment = "fixed";
document.body.style.backgroundSize = "cover";

document.body.style.background = `
  radial-gradient(circle at 20% 20%, #2a0f4a 0%, transparent 45%),
  radial-gradient(circle at 80% 30%, #0b1c4d 0%, transparent 45%),
  radial-gradient(circle at 50% 80%, #1a0a2e 0%, transparent 50%),
  #05010a
`;
const overlay = document.createElement("div");
overlay.style.position = "fixed";
overlay.style.inset = "0";
overlay.style.pointerEvents = "none";
overlay.style.background =
  "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))";
overlay.style.zIndex = "-1";

document.body.appendChild(overlay);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);