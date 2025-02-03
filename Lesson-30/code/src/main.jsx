import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";

import { Provider } from "react-redux";

//import store
import { store } from "./store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* store is available to all the component */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
