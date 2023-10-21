import CheckoutForm from "./CheckOutForm";
import CartItem from "../cart/CartItem";
import { useSelector } from "react-redux";
import { getCart, getTotalCartPrice } from "../cart/cartSlice";
import { useState } from "react";
import { formatCurrency } from "../../utils/helpers";

function CheckoutOrder() {
  const [coupon, setCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const cart = useSelector(getCart);
  const totalOrder = cart.length || 0;
  const subTotal = useSelector(getTotalCartPrice);
  const tax = subTotal <= 200 ? 20 : 30;
  const discount = appliedCoupon ? 15 : 0;
  const total = tax + subTotal - discount;

  function handleApplyCoupon() {
    setAppliedCoupon(coupon);
    setCoupon("");
  }

  return (
    <div className="mx-auto px-12 py-6 bg-white dark:bg-gray-800">
      <p className=" font-custom text-2xl border-b dark:text-gray-200 mb-4">
        Konjo Habesha Fashion
      </p>
      <div className="flex gap-16 dark:bg-gray-800 flex-col md:flex-row mt-8">
        <div className="w-full md:w-1/2  order-2 flex flex-col">
          <div className="flex items-center justify-center gap-4 md:gap-2">
            <button>
              <img
                className=" h-24 w-28"
                src="/icons/PayPal.svg"
                alt="PayPal svg icon"
              />
            </button>
            <button>
              <img
                className=" h-24 w-28"
                src="/icons/Amex.svg"
                alt="PayPal svg icon"
              />
            </button>
            <button>
              <img
                className=" h-24 w-28"
                src="/icons/Discover.svg"
                alt="PayPal svg icon"
              />
            </button>
          </div>

          <div className="flex items-center justify-center pt-6">
            <div className="border-t border-gray-300 flex-grow"></div>
            <span className="mx-4 text-gray-500 dark:text-gray-200 font-medium">
              or
            </span>
            <div className="border-t border-gray-300 flex-grow"></div>
          </div>
          <CheckoutForm discount={discount} />
        </div>

        <div className="w-full mb-8 border left-0 rounded-md flex-shrink-0 bg-gray-50 dark:bg-gray-600 order-1 md:w-1/2 lg:mb-0 md:order-2 h-full overflow-hidden">
          <div className=" p-6">
            <div className=" flex flex-row justify-between pb-2">
              <h3 className="text-gray-800 dark:text-gray-200 font-medium">{`Total order ${totalOrder}`}</h3>
              <span className="text-gray-600 text-sm">Edit</span>
            </div>

            <div className="flex justify-center">
              <div className="w-full border-b px-4 py-3 max-h-[400px] overflow-y-auto">
                <div className="flex items-center justify-between"></div>
                {cart.map((item) => (
                  <CartItem showDelete={false} item={item} key={item.img} />
                ))}
              </div>
            </div>

            <div className="flex flex-col mt-4">
              <label
                className="mt-4 text-center md:text-start dark:text-gray-200 font-custom text-lg font-semibold"
                htmlFor=""
              >
                Discount code
              </label>
              <div className="w-full flex flex-col md:flex-row gap-3 items-center mt-2">
                <input
                  onChange={(e) => setCoupon(e.target.value)}
                  className="px-3 md:flex-grow py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-yellow-500 transition-colors cursor-pointer"
                  type="text"
                />
                <button
                  onClick={handleApplyCoupon}
                  className="px-4 py-2 font-custom dark:text-gray-200 font-semibold text-xl mb-[4px] bg-blue-500 rounded-md hover:bg-blue-600 transition-all duration-300"
                >
                  Apply
                </button>
              </div>

              <div className="mt-8 ">
                <div className="flex dark:text-gray-200 font-custom mb-4 flex-row justify-between">
                  <p>Subtotal</p>
                  <h3>{formatCurrency(subTotal)}</h3>
                </div>
                <div className="flex dark:text-gray-200 font-custom mb-4 flex-row justify-between">
                  <p>
                    {appliedCoupon ? `Discount (${appliedCoupon})` : "Discount"}
                  </p>
                  <h3>{appliedCoupon ? formatCurrency(-discount) : 0}</h3>
                </div>
                <div className="flex dark:text-gray-200 mb-4 flex-row justify-between">
                  <p>Taxes</p>
                  <h3>{formatCurrency(tax)}</h3>
                </div>
                <div className="border border-stone-200 mb-2"></div>
                <div className="flex dark:text-gray-200 font-custom text-lg px-6 mb-4 flex-row justify-between font-semibold">
                  <p>Total</p>
                  <h3>{formatCurrency(total)}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutOrder;
