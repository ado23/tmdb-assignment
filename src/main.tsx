import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "src/App.tsx";
import { initializeHttpInterceptors } from "src/core/api/base-api";
import "src/index.css";
import { store } from "store/store";

initializeHttpInterceptors();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
