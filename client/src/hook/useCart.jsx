import axios from "axios";
import { useAuthContext } from "../hook/useAuthContext";

export const useCart = () => {
  const { user } = useAuthContext();
  const { token } = user;

  const addCartItemsToDatabase = async (
    item,
    quantity,
    totalPrice,
    userEmail
  ) => {
    try {
      await axios.post(
        "https://dailypacks.onrender.com/api/cart",
        {
          ...item,
          quantity,
          totalPrice,
          userEmail,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error("error getting cart value", error);
    }
  };

  const fetchCartByUser = async (userEmail) => {
    try {
      const response = await axios.get(
        `https://dailypacks.onrender.com/api/cart/${userEmail}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching cart", error);
    }
  };

  const deleteCartItem = async (id) => {
    try {
      await axios.delete(`https://dailypacks.onrender.com/api/cart/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error("Error deleting cart item", error);
    }
  };

  return { addCartItemsToDatabase, fetchCartByUser, deleteCartItem };
};
