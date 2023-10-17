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
      <div className="mt-4 dark:text-gray-100">
        <p>Your cart is empty</p>
      </div>
      <div className="mt-6">
        <a
          onClick={() => {
            navigate("/products");
            handleCartToggle();
          }}
          href="#"
          className="flex items-center justify-center rounded-md border border-transparent bg-blue-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-600"
        >
          Keep Browsing
        </a>
      </div>
    </div>
  );
}

export default EmptyCart;
