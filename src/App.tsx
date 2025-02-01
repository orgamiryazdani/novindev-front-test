import "./App.css";
import { RouterProvider } from "react-router-dom";
import QueryProvider from "./providers/react-query-provider";
import router from "./router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <QueryProvider>
      <Toaster />
      <RouterProvider router={router} />
    </QueryProvider>
  );
}

export default App;
