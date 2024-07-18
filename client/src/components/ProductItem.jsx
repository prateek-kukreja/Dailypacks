import { items } from "./all-data/AllData";
import { Link } from "react-router-dom";

function ProductItem() {
  const filteredItems = items.filter((item) => item.id <= 8);

  return (
    <>
      {filteredItems.map((item) => (
        <div
          key={item.id}
          className="-outline-offset-2 transition-all duration-[0.15s] ease-[ease-in] cursor-pointer outline-2 outline outline-color hover:outline-hover rounded-sm"
        >
          <Link
            onClick={() => window.top(0, 0)}
            to={`/categories/product/${item.id}`}
          >
            <div>
              <img src={item.img} className="w-full" />
            </div>
            <div className="font-medium p-3">
              <p>{item.name}</p>
              <p>₹{item.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default ProductItem;
