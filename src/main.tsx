import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "src/App.tsx";
import { initializeHttpInterceptors } from "src/core/api/base-api";

import "src/index.css";

initializeHttpInterceptors();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
