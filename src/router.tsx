import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Users from "./pages/users";
import Login from "./pages/login";
import CreateUser from "./pages/create-user";
import { ProtectedLayout, PublicRoute } from "./components/auth/auth";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/",
    element: <ProtectedLayout />,
    children: [
      {
        path: "/",
        element: <AppLayout />,
        children: [
          { path: "/", element: <Users /> },
          { path: "/create-user", element: <CreateUser /> },
        ],
      },
    ],
  },
]);

export default router;
