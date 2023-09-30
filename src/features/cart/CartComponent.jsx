import CartItem from "./CartItem";
import { useCart } from "../../context/cartContext";
import useClickOutside from "../../hook/useClickOutside";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { getCart } from "./cartSlice";

function CartComponent() {
  const { cartOpen, handleCartToggle } = useCart();
  const { ref } = useClickOutside();
  const cart = useSelector(getCart);
  return (
    <div
      ref={ref}
      className={`fixed right-0 top-0 max-w-md w-full flex flex-col h-full px-6 py-4 transition duration-300 transform  bg-white border-l-2 shadow-lg ${
        cartOpen ? "-translate-x-0 ease-out" : "translate-x-full ease-in"
      }`}
    >
      <div className="flex items-center justify-between mx-6">
        <h3 className="text-2xl font-custom font-medium text-gray-700">
          Your cart
        </h3>
        <button
          onClick={handleCartToggle}
          className="text-gray-600 focus:outline-none text-2xl"
          type="button"
        >
          <AiOutlineClose />
        </button>
      </div>
      <hr className="my-3" />

      <div className=" cart-item-component overflow-a">
        {cart.map((item) => (
          <CartItem item={item} key={item.img} />
        ))}
      </div>

      <div className="mt-8">
        <form className="flex items-center justify-center">
          <input
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            type="text"
            placeholder="Add promocode"
          />
          <button className="ml-3 flex items-center px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            <span>Apply</span>
          </button>
        </form>
      </div>
      <a className="flex items-center justify-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
        <span>Checkout</span>
        <svg
          className="h-5 w-5 mx-2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
      </a>
    </div>
  );
}

export default CartComponent;
