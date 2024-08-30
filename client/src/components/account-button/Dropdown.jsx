import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useLogout } from "../../hook/useLogout";

const Dropdown = ({ user_email }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const { logout } = useLogout();
  const handleClick = () => {
    logout();

    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="flex gap-1 cursor-pointer" onClick={toggleDropdown}>
        <div>Account</div>
        <div className="pt-1">
          <IoMdArrowDropdown />
        </div>
      </div>

      {isOpen && (
        <>
          <div
            className="fixed top-0 bottom-0 right-0 left-0"
            onClick={toggleDropdown}
          ></div>
          <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-2 ring-black ring-opacity-5 focus:outline-none font-size normal-case">
            <div className="p-1">
              <a
                href="#"
                className=" block px-2 py-2 text-md border-b cursor-default"
              >
                Signed in as <br />
                <span className="font-bold">{user_email}</span>
              </a>
              <a
                href="#"
                className=" block px-2 py-2 text-md text-red-500 hover:bg-[#f56565] hover:text-white rounded transition duration-500 ease-in-out"
                onClick={handleClick}
              >
                Log out
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Dropdown;
