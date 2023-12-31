import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "../context/cartContext";
import Cart from "../features/cart/Cart";

function CartToggle() {
  const { cartOpen, handleCartToggle } = useCart();
  return (
    <div>
      <AiOutlineShoppingCart
        onClick={handleCartToggle}
        className="text-2xl cursor-pointer dark:hover:text-blue-400 dark:text-white hover:text-blue-500"
      />
      {cartOpen && <Cart />}
    </div>
  );
}

export default CartToggle;
