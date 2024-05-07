import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { initializeHttpInterceptors } from "api/baseApi";
import App from "src/App.tsx";
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
