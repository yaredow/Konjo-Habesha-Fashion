import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartComponent from "../features/cart/cartComponent";

function CartToggle() {
  const [toggleCart, setToggleCart] = useState(false);

  function toggleTheCart() {
    setToggleCart((cart) => !cart);
  }

  return (
    <div>
      <AiOutlineShoppingCart
        onClick={() => toggleTheCart}
        className="text-2xl cursor-pointer"
      />
      {toggleCart && <CartComponent />}
    </div>
  );
}

export default CartToggle;
