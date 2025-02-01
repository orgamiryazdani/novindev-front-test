import { Navigate, Outlet } from "react-router-dom";

export const ProtectedLayout = () => {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return (
      <Navigate
        to='/login'
        replace
      />
    );
  }

  return <Outlet />;
};

export const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    return (
      <Navigate
        to='/'
        replace
      />
    );
  }

  return children;
};
