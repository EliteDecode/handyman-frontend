import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./assets/styles/index.css";
import { store } from "./store/index.ts";
import { Toaster } from "react-hot-toast";
import { MantineProvider } from "@mantine/core";

import "@mantine/core/styles.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Provider store={store}>
        <Toaster />
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </Provider>
    </LocalizationProvider>
  </MantineProvider>
);
