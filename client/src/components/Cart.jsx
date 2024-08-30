import React from "react";
import { LiaTimesSolid } from "react-icons/lia";
import emptyCart from "../images/empty-cart.png";

function Cart({ toggleCart }) {
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
            />
          </div>

          <div className="flex flex-col justify-center items-center my-24">
            <img src={emptyCart} alt="empty-cart" className="mb-4 h-44" />
            <h3 className="text-lg mb-4 font-bold">Your cart is empty</h3>
            <button className="text-base bg-[#efefef] hover:bg-[#e7e7e7] text-black px-4 py-2 border-2 border-[#bdbec0]">
              Keep browsing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
