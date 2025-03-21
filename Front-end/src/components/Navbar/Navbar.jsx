import React, { useEffect, useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
// import Logo from "../../assets/logo.png";
import DarkMode from "./DarkMode";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";

export const Navlinks = [
  {
    id: 1,
    name: "RESERVATION",
    link: "/#services",
  },
  {
    id: 2,
    name: "SERVICES",
    link: "/#about",
  },
  {
    id: 3,
    name: "TESTIMONIALS",
    link: "/#join",
  },
];
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const logOut = () => {
    localStorage.removeItem("token");
    window.location = "/login";
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div
      className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300
      "
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="sm:flex items-center gap-3 hidden font-semibold text-gray-500 dark:text-gray-400 group">
            <BiPhoneCall className="text-primary text-2xl animate-pulse group-hover:scale-105 duration-200" />{" "}
            +212 690815605
          </div>
          <div>
            {/* <img
                src={Logo}
                alt=""
                className="w-16 sm:w-24 absolute top-0 left-0 sm:left-1/2 sm:-translate-x-1/2 m-2 sm:m-0 "
              /> */}
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <Link
                    to={link}
                    className="inline-block text-lg font-semibold hover:text-primary duration-300"
                  >
                    {name}
                  </Link>
                </li>
              ))}
              {/* DarkMode feature implement */}
              <DarkMode />
            </ul>

          </nav>

          {/* Mobile view  */}
          <div className="flex items-center gap-4 md:hidden py-4">
            <DarkMode />
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
          <button onClick={logOut} className="bg-cyan-900 text-white m-2 px-14 py-2 rounded-2xl"> LogOut</button>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
