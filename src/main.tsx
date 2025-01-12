import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./assets/styles/index.css";
import { store } from "./store/index.ts";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Suspense>
    <Provider store={store}>
      <Toaster />
      <App />
    </Provider>
  </Suspense>
);
