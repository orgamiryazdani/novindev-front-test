import { Outlet } from "react-router-dom";
import Header from "./header";

const AppLayout: React.FC = () => {
  return (
    <div className='bg-gray-900 text-white w-full min-h-screen overflow-y-auto h-auto'>
      <Header />
      <div className='h-[91vh]'>
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
