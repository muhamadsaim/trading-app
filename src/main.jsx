import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/Store";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
