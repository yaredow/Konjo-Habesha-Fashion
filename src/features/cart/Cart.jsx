import { useSelector } from "react-redux";
import { useCart } from "../../context/cartContext";
import useClickOutside from "../../hook/useClickOutside";
import { AiOutlineClose } from "react-icons/ai";
import { getCart, getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import EmptyCart from "./EmptyCart";

function Cart() {
  const { handleCartToggle } = useCart();
  const navigate = useNavigate();
  const { ref } = useClickOutside(handleCartToggle);
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  return (
    <div
      className="relative z-10"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 left-0 md:left-auto right-0 flex max-w-full">
            <div
              ref={ref}
              className="pointer-events-auto w-screen md:max-w-md md:border-l-2 md:border-gray-500"
            >
              <div className="flex h-full flex-col overflow-y-scroll dark:bg-gray-800 bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2
                      className="text-lg font-medium dark:text-gray-100 text-gray-900"
                      id="slide-over-title"
                    >
                      Shopping cart
                    </h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        onClick={handleCartToggle}
                        className="text-2xl dark:text-gray-100"
                      >
                        <AiOutlineClose />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200"
                      >
                        {cart.map((item) => (
                          <CartItem item={item} key={item.id} />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {totalCartQuantity === 0 ? (
                  <EmptyCart />
                ) : (
                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900 dark:text-gray-100">
                      {totalCartPrice > 0 && (
                        <>
                          <p>Subtotal</p>
                          <p>{formatCurrency(totalCartPrice)}</p>
                        </>
                      )}
                    </div>
                    <p className="mt-0.5 text-sm text-gray-600 dark:text-gray-300">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div className="mt-6">
                      <button
                        onClick={() => navigate("/checkout")}
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-600"
                      >
                        Checkout
                      </button>
                    </div>
                    <div className="mt-6 dark:text-gray-200  flex justify-center text-center text-sm text-gray-600">
                      <p>
                        or
                        <button
                          onClick={() => {
                            navigate("/");
                            handleCartToggle();
                          }}
                          type="button"
                          className="font-medium mx-2 text-blue-500 hover:text-blue-600"
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
