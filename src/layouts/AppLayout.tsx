import { Outlet } from "react-router-dom";
import Header from "./header";

const AppLayout: React.FC = () => {
  return (
    <div className='bg-gray-900 text-white w-full min-h-screen h-auto'>
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;
