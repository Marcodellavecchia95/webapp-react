import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import "./assets/css/index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);
