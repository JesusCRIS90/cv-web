import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Redux
import store from "./redux-toolkit/store/store.ts";
import { Provider } from "react-redux";


import { DataProvider } from "./context/DataProvider.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <React.StrictMode>
      <Provider store={store}>
        <DataProvider>
          <App />
        </DataProvider>
      </Provider>
    </React.StrictMode>
  </>
);
