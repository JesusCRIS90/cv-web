// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Redux
import store from "./redux-toolkit/store/store.ts";
import { Provider } from "react-redux";

import { ContextManagerProvider, DataInjection } from "./context"


createRoot(document.getElementById("root")!).render(
  <>
    {/* <StrictMode> */}
      <Provider store={store}>
        <ContextManagerProvider>
          <DataInjection>
            <App />
          </DataInjection>
        </ContextManagerProvider>
      </Provider>
    {/* </StrictMode> */}
  </>
);
