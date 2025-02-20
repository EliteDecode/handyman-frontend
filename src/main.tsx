import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./assets/styles/index.css";
import { store } from "./store/index.ts";
import { Toaster } from "react-hot-toast";
import { MantineProvider } from "@mantine/core";

import "@mantine/core/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <Provider store={store}>
      <Toaster />
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </Provider>
  </MantineProvider>
);
