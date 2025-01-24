import { Outlet } from "react-router";
import { NavBar } from "../organisms/NavBar";
import { Footer } from "../organisms/Footer";

export const MainLayout = () => {
  return (
    <div className="bg-[#F5F2EC]/100 w-full select-none">
      <div className="bg-[#F5F2EC]/30 mx-auto min-w-36 max-w-4xl min-h-screen text-pretty container">
        <span className="top-0 z-50 sticky">
          <NavBar />
        </span>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
