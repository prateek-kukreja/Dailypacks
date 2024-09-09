import React, { useEffect, useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import emptyCart from "../images/empty-cart.png";
import { Link } from "react-router-dom";
import { useCart } from "../hook/useCart";
import { useAuthContext } from "../hook/useAuthContext";

function Cart({ toggleCart }) {
  const { user } = useAuthContext();
  const { fetchCartByUser, deleteCartItem } = useCart();
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      if (user.email) {
        const cart = await fetchCartByUser(user.email);
        setCartData(cart);
      }
    };

    fetchCart();
  }, [user.email]);

  const handleRemoveItem = async (id) => {
    await deleteCartItem(id);

    const updatedCart = cartData.filter((item) => item._id !== id);
    setCartData(updatedCart);
  };

  const subPrice = () => {};

  return (
    <div>
      {/* Overlay */}
      <div className="fixed inset-0 bg-[#00000080] z-40"></div>

      <div className="fixed top-0 right-0 h-screen w-full md:w-[500px] bg-white z-50">
        <div className="h-full">
          <div className="flex justify-between items-center p-6 md:p-8">
            <h2 className="font-bold text-xl md:text-2xl">
              Your Shopping Cart
            </h2>
            <LiaTimesSolid
              onClick={toggleCart}
              className="text-2xl cursor-pointer"
              aria-label="Close cart"
            />
          </div>

          {cartData.length === 0 ? (
            <div className="flex flex-col justify-center items-center my-24">
              <img src={emptyCart} alt="empty-cart" className="mb-4 h-44" />
              <h3 className="text-lg mb-4 font-bold">Your cart is empty</h3>
              <Link to="/">
                <button
                  className="text-base bg-[#efefef] hover:bg-[#e7e7e7] text-black px-4 py-2 border-2 border-[#bdbec0]"
                  onClick={toggleCart}
                >
                  Keep browsing
                </button>
              </Link>
            </div>
          ) : (
            <div className="p-6 md:p-8 w-full overflow-y-scroll h-full">
              {cartData.map((item) => (
                <div
                  key={item._id}
                  className="flex mb-4 border border-black w-full "
                >
                  <img
                    src={item.imageSrc}
                    alt={item.name}
                    className="h-28 border-black"
                  />
                  <div className="flex flex-col justify-between bg-[#f2f2f2]  w-full p-2 text-lg ">
                    <div className="flex justify-between">
                      <p className="font-medium">{item.name}</p>
                      <p className="font-bold">₹{item.totalPrice}</p>
                    </div>
                    <div className="flex justify-between px-2 pt-2">
                      <p>
                        <span className="font-bold">{item.quantity}</span>
                        {"  "} Qty
                      </p>
                      <button
                        className="text-sm border-2 py-1 px-2 rounded-lg bg-[#B6002C] text-white"
                        onClick={() => handleRemoveItem(item._id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div>
                <button className="w-full bg-[#B6002C] text-white py-2 mt-4">
                  Checkout
                </button>
                <span onClick={subPrice}></span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
