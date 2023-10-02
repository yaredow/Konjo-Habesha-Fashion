import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cartContext";

function EmptyCart() {
  const navigate = useNavigate();
  const { handleCartToggle } = useCart();
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div>
        <img
          className=" h-52 w-52"
          src="/images/cart/empty-cart.png"
          alt="an image of an empty cart"
        />
      </div>
      <div className="mt-4">
        <p>Your cart is empty</p>
      </div>
      <div className="mt-6">
        <a
          onClick={() => {
            navigate("/collections");
            handleCartToggle();
          }}
          href="#"
          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
        >
          Keep Browsing
        </a>
      </div>
    </div>
  );
}

export default EmptyCart;
