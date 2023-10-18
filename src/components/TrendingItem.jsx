import { items } from "./AllData";
import { Link } from "react-router-dom";

function TrendingItem() {
  const filteredItems = items.filter((item) => item.id >= 8);
  return (
    <>
      {filteredItems.map((item) => (
        <div
          key={item.id}
          className="outline-2 outline outline-color hover:outline-hover cursor-pointer transition-all duration-[0.15s] ease[ease-in] max-w-[13.125rem]"
        >
          <Link
            onClick={() => window.top(0, 0)}
            to={`/categories/product/${item.id}`}
          >
            <div>
              <img src={item.img} alt="product" className="max-w-[13.125rem]" />
            </div>
            <div className="text-base font-medium p-2">
              <p>{item.name}</p>
              <p>₹{item.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default TrendingItem;
