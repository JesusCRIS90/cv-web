import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Redux
import store from "./redux-toolkit/store/store.ts";
import { Provider } from "react-redux";

import { MyClass } from "./utils/test.ts";

// --------------------------------------------------------------------
// Usage
const obj1 = new MyClass("First Instance");
const obj2 = new MyClass("Second Instance");

console.log(obj1.getName()); // Output: First Instance
console.log(obj2.getName()); // Output: First Instance
console.log(obj1 === obj2); // Output: true

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
