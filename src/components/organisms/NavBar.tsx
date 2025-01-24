import { FaCartPlus } from "react-icons/fa6";
import { NavLink } from "react-router";
import { MotionPage } from "../../utils/MotionPage";
import { TopButton } from "../atoms/button/TopButton";

const navLinks = [
  { to: "/", label: "Домашняя страница" },
  { to: "/about", label: "О нас" },
  { to: "/shop", label: "Магазин" },
  { to: "/contacts", label: "Контакты" },
];

export const NavBar = () => {
  return MotionPage(
    <div className="bg-[#F5F2EC]/100 w-full">
      <div className="bg-[#F5F2EC]/30 mx-auto min-w-36 max-w-4xl text-pretty container">
        <div className="mx-auto min-w-36 max-w-4xl container">
          <div className="flex justify-around items-center p-4">
            <h1 className="flex ml-2 text-xl">Живая косметика</h1>

            <ul className="flex flex-row">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) => `
                      ${isActive ? "text-green-700 font-bold" : ""} 
                    `}
                  >
                    <TopButton>{link.label}</TopButton>
                  </NavLink>
                </li>
              ))}
            </ul>
            <NavLink to="/cart">
              <button className="flex justify-around items-center hover:border-[#076e2f] hover:bg-[#076e2f] shadow-lg hover:shadow-lg mr-2 px-4 py-2 border rounded-md text-center text-sm hover:text-white transition-all active:scale-110">
                <h2>Корзина</h2>
                <FaCartPlus />
              </button>
            </NavLink>
          </div>
          <div className="flex justify-center">
            <span className="bg-black opacity-10 w-[70%] h-0.5"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
