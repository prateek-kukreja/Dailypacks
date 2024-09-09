import axios from "axios";

export const useCart = () => {
  const addCartItemsToDatabase = async (
    item,
    quantity,
    totalPrice,
    userEmail
  ) => {
    try {
      await axios.post("http://localhost:3001/api/cart", {
        ...item,
        quantity,
        totalPrice,
        userEmail,
      });
    } catch (error) {
      console.error("error getting cart value", error);
    }
  };

  const fetchCartByUser = async (userEmail) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/cart/${userEmail}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching cart", error);
    }
  };

  const deleteCartItem = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/cart/${id}`);
    } catch (error) {
      console.error("Error deleting cart item", error);
    }
  };

  return { addCartItemsToDatabase, fetchCartByUser, deleteCartItem };
};
