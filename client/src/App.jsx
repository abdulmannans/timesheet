import { StrictMode, Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WebRoutes from "./routes/WebRoutes";
import AuthRoutes from "./routes/AuthRoutes";
import ReactDOM from "react-dom/client";
import { Slide, ToastContainer } from "react-toastify";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));

const auth = false;

const App = () => {
  let routes = auth ? WebRoutes : AuthRoutes;
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={""}>
        <App />
        <ToastContainer position="bottom-right" transition={Slide} />
      </Suspense>
    </QueryClientProvider>
  </StrictMode>
);
