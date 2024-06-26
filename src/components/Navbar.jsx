import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { TfiMenu, TfiClose } from "react-icons/tfi";
import Logo from "../images/logo/Logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [state, setState] = useState(true);

  const toggleMenu = () => {
    let navLinks = document.querySelector(".nav_links");
    navLinks.classList.toggle("top-[14%]");

    setState((prev) => !prev);
  };

  return (
    <nav className="shadow-md bg-[white] md:sticky w-full z-50 top-0">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <Link to={"/"}>
            <img src={Logo} alt="dailypacks" className="w-16" />
          </Link>
          <div className="flex items-center gap-8 md:gap-3 z-10">
            <div className="nav_links md:static duration-500 absolute flex items-center justify-center bg-white md:min-h-fit min-h-[50vh] left-0 top-[-100%] w-full px-5">
              <ul className="flex md:flex-row flex-col gap-6 md:gap-8 font-medium md:font-normal uppercase">
                <li className="cursor-pointer">
                  <Link
                    onClick={() => window.scrollTo(0, 0)}
                    className="relative no-underline before:content-[''] before:absolute before:bottom-[-0.25rem] before:h-[0.1rem] before:w-0 before:bg-black before:transition-all before:duration-[0.35s] before:ease-[ease-in-out] hover:before:w-full"
                    to="categories/all"
                  >
                    catagories
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    onClick={() => window.scrollTo(0, 0)}
                    className="relative no-underline before:content-[''] before:absolute before:bottom-[-0.25rem] before:h-[0.1rem] before:w-0 before:bg-black before:transition-all before:duration-[0.35s] before:ease-[ease-in-out] hover:before:w-full"
                    to="categories/product/6"
                  >
                    product page
                  </Link>
                </li>
                <li>
                  <Link onClick={() => window.scrollTo(0, 0)} to="sign_in">
                    sign in
                  </Link>
                </li>
              </ul>
            </div>

            <FaShoppingCart className="text-2xl" />

            {/* mobile nav */}
            <div className="relative" onClick={toggleMenu}>
              {state ? (
                <TfiMenu className="text-2xl md:hidden block" />
              ) : (
                <TfiClose className="text-2xl md:hidden block" />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
