import { BiChevronLeft } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";

function CategoriesFilter() {
  const [btnName, setBtnName] = useState("All");

  const handleBtnName = (e) => {
    setBtnName(e);
  };

  return (
    <div className="container">
      <div className="flex flex-col items-center -mb-10 pt-20">
        <div className="flex items-center w-full mb-14">
          <Link
            className="text-base no-underline text-black text-left flex items-center justify-center"
            onClick={() => window.scrollTo(0, 0)}
            to="/"
          >
            <BiChevronLeft /> Home
          </Link>
          <h3 className="text-xl font-bold uppercase text-center mx-auto my-0">
            {btnName}
          </h3>
        </div>
        <div className="justify-center flex gap-2 w-full flex-wrap items-center">
          <Link
            className="text-base no-underline text-black"
            to="all"
            onClick={() => handleBtnName("all")}
          >
            <button className="cursor-pointer bg-transparent transition-all duration-200 px-4 py-1 border-2 border-solid border-[#0000004d]">
              All
            </button>
          </Link>
          <Link className="text-base no-underline text-black" to="bask">
            <button
              className="cursor-pointer bg-transparent transition-all duration-200 px-2 py-1 border-2 border-solid border-[#0000004d]"
              onClick={() => handleBtnName("Bask")}
            >
              Bask
            </button>
          </Link>
          <Link className="text-base no-underline text-black" to="idyll">
            <button
              className="cursor-pointer bg-transparent transition-all duration-200 px-2 py-1 border-2 border-solid border-[#0000004d]"
              onClick={() => handleBtnName("Idyll")}
            >
              Idyll
            </button>
          </Link>
          <Link className="text-base no-underline text-black" to="odyssey">
            <button
              className="cursor-pointer bg-transparent transition-all duration-200 px-2 py-1 border-2 border-solid border-[#0000004d]"
              onClick={() => handleBtnName("Odyssey")}
            >
              Odyssey
            </button>
          </Link>
          <Link className="text-base no-underline text-black" to="tarp">
            <button
              className="cursor-pointer bg-transparent transition-all duration-200 px-2 py-1 border-2 border-solid border-[#0000004d]"
              onClick={() => handleBtnName("Tarp")}
            >
              Tarp
            </button>
          </Link>
          <Link className="text-base no-underline text-black" to="weekender">
            <button
              className="cursor-pointer bg-transparent transition-all duration-200 px-2 py-1 border-2 border-solid border-[#0000004d]"
              onClick={() => handleBtnName("Weekender")}
            >
              Weekender
            </button>
          </Link>
          <Link className="text-base no-underline text-black" to="way">
            <button
              className="cursor-pointer bg-transparent transition-all duration-200 px-2 py-1 border-2 border-solid border-[#0000004d]"
              onClick={() => handleBtnName("Way")}
            >
              Way
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoriesFilter;
