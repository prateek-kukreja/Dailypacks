import { items } from "../AllData";
import { Link } from "react-router-dom";

function CategoriesItemIdyll() {
  const filteredItems = items.filter((item) => item.category == "totebag");
  return (
    <div className="py-28 px-0">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="-outline-offset-2 transition-all duration-[0.15s] ease-[ease-in] cursor-pointer outline-2 outline outline-color hover:outline-hover rounded-sm"
            >
              <Link onClick={() => window.top(0, 0)} to="">
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
        </div>
      </div>
    </div>
  );
}

export default CategoriesItemIdyll;
