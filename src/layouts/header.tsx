import { NavLink } from "react-router-dom";

const menuItems = [
  {
    id: 1,
    title: "users",
    to: "/",
  },
  {
    id: 2,
    title: "create user",
    to: "/create-user",
  },
];

const Header: React.FC = () => {
  return (
    <header className='w-full h-[9vh] flex items-center justify-between px-7 border-b border-gray-500 text-xl'>
      <div className="flex gap-x-10">
      {menuItems.map(({ id, title, to }) => (
        <NavLink
          key={id}
          className={({ isActive }) => (isActive ? "text-sky-600" : "")}
          to={to}>
          {title}
        </NavLink>
      ))}
      </div>
      <div className="text-red-500 cursor-pointer">logout</div>
    </header>
  );
};

export default Header;
