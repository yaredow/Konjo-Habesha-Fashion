import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addItem, getCart } from "../features/cart/cartSlice";
import toast from "react-hot-toast";

export default function useAddToCart(item) {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const { img, id, name, price } = item;

  const handleAddToCart = () => {
    const isItemInCart = cart.some((it) => it.id === id);

    const newItem = {
      img,
      id,
      name,
      quantity: 1,
      price,
    };

    if (!isItemInCart) {
      dispatch(addItem(newItem));
    } else {
      toast.error("Item is already in the cart");
    }
  };

  return { handleAddToCart };
}
