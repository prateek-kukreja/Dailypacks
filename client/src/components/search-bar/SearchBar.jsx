import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";
import { items } from "../all-data/AllData";
import { Link } from "react-router-dom";

function SearchBar() {
  const [value, setvalue] = useState();
  const [filteredData, setFilteredData] = useState(items);

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setvalue(searchValue);

    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(searchValue)
    );
    setFilteredData(filtered);
  };

  const handleClick = () => {
    window.top(0, 0);
    setFilteredData([]);
    setvalue([]);
  };

  return (
    <>
      <div className="relative">
        <input
          type="text"
          className="w-auto md:w-[600px] h-10 px-10 py-3 border border-black rounded-full"
          value={value}
          onChange={handleSearch}
          placeholder="search bags..."
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer">
          <FcSearch className="h-6 w-6" />
        </div>

        {/* Dropdown Menu */}
        {value && filteredData.length > 0 && (
          <>
            <div className="absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-opacity duration-300 ">
              <ul className="py-1">
                {/* Example dropdown items */}
                {filteredData.map((item) => (
                  <Link
                    to={`categories/product/${item.id}`}
                    onClick={handleClick}
                  >
                    <li
                      key={item.id}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer z-50"
                    >
                      {item.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default SearchBar;
