import { Outlet } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="relative h-36 bg-opacity-50 bg-mobile md:h-32 md:bg-desktop">
      <Outlet />
    </div>
  );
};
