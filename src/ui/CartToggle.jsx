import { AiOutlineShoppingCart } from "react-icons/ai";
import CartComponent from "../features/cart/cartComponent";
import { useCart } from "../context/cartContext";

function CartToggle() {
  const { cartOpen, handleCartToggle } = useCart();
  return (
    <div>
      <AiOutlineShoppingCart
        onClick={handleCartToggle}
        className="text-2xl cursor-pointer hover:text-blue-500"
      />
      {cartOpen && <CartComponent />}
    </div>
  );
}

export default CartToggle;
