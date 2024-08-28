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
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-2 ring-black ring-opacity-5 focus:outline-none capitalize font-size">
          <div className="py-1">
            <a
              href="#"
              className="hover:bg-gray-300 block px-4 py-2 text-sm border-b"
            >
              Signed in as <br />
              <span className="font-bold lowercase">{user_email}</span>
            </a>
            <a
              href="#"
              className="hover:bg-gray-300 block px-4 py-2 text-sm text-red-500"
              onClick={handleClick}
            >
              Log out
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Dropdown;
