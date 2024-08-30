import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { TfiMenu, TfiClose } from "react-icons/tfi";
import Logo from "../images/logo/Logo.png";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hook/useAuthContext";
import SearchBar from "./search-bar/SearchBar";
import Dropdown from "./account-button/Dropdown";
import Cart from "./Cart";

function Navbar() {
  const [state, setState] = useState(true);
  const [openCart, setOpenCart] = useState(false);

  const toggleMenu = () => {
    let navLinks = document.querySelector(".nav_links");
    navLinks.classList.toggle("top-[13%]");

    setState((prev) => !prev);
  };

  const cart = () => {
    setOpenCart(!openCart);
  };

  const { user } = useAuthContext();

  return (
    <nav className="shadow-md bg-[white] md:sticky w-full z-50 top-0">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <Link to={"/"}>
            <img src={Logo} alt="dailypacks" className="w-16" />
          </Link>
          <div className="flex items-center gap-8 md:gap-3 z-10">
            <div className="nav_links  md:static duration-500 absolute flex items-center justify-center bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] w-full px-5">
              <ul className="flex md:flex-row flex-col gap-6 md:gap-8 font-medium md:font-normal uppercase items-center">
                {/* search bar */}
                <li>
                  <SearchBar />
                </li>
                {/* search bar */}

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

                {/* {!user && (
                  <li className="bg-black text-white text-base md:text-lg font-medium px-2 md:px-3 py-1 uppercase cursor-pointer border-2 border-black rounded-lg">
                    <Link onClick={() => window.scrollTo(0, 0)} to="sign_in">
                      sign in
                    </Link>
                  </li>
                )} */}

                {user && (
                  <li className="relative inline-block text-left">
                    <Dropdown user_email={user.email} />
                  </li>
                )}
              </ul>
            </div>

            <FaShoppingCart
              className="text-2xl cursor-pointer"
              onClick={cart}
            />

            {openCart && <Cart toggleCart={cart} />}

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
