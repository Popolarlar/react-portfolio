import React, { Suspense } from "react";
import { render } from "react-dom";

import "./styles/main.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./i18n";

render(
  // <Provider store={configureStore()}>
  //   <App />
  // </Provider>,
  <React.StrictMode>
    <Suspense fallback="loading">
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
