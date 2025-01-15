import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
// import App2 from "./App2.tsx";
import App3 from "./App3.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <App2 /> */}
    <App3 />
  </StrictMode>
);
