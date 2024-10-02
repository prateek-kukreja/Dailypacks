import express from "express";
import { Cart } from "../models/cartModel.js";
const cartRouter = express.Router();
import { authenticateToken } from "../middleware/authMiddleware.js";

cartRouter.post("/cart", async (req, res) => {
  const { name, img, quantity, totalPrice, userEmail } = req.body;

  try {
    const cartValue = await Cart.create({
      name,
      imageSrc: img,
      quantity,
      totalPrice,
      userEmail,
    });

    res.status(200).json(cartValue);
  } catch (error) {
    res.status(400).json(error);
  }
});

cartRouter.get("/cart/:userEmail", authenticateToken, async (req, res) => {
  const { userEmail } = req.params;

  try {
    const cart = await Cart.find({ userEmail });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cart" });
  }
});

cartRouter.delete("/cart/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;

  try {
    const cart = await Cart.deleteOne({ _id: id });
    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error fetching cart" });
  }
});

export { cartRouter };
