import { RiAppleFill } from "react-icons/ri";
import CheckoutForm from "./CheckOutForm";
import CartItem from "../cart/CartItem";
import { useSelector } from "react-redux";
import { getCart } from "../cart/cartSlice";
function CheckoutOrder() {
  const cart = useSelector(getCart);
  const totalOrder = cart.length || 0;

  return (
    <div className="container mx-auto px-6 ">
      <div className="flex gap-16 flex-col lg:flex-row mt-8">
        <div className="w-full md:w-1/2 order-2 flex flex-col">
          <div className="flex items-center">
            <div className=" px-2 py-2 bg-black w-full text-xl text-white flex flex-row items-center justify-center font-semibold rounded-lg">
              <RiAppleFill className=" " />
              <span>Pay</span>
            </div>
          </div>

          <div className="flex items-center justify-center pt-6">
            <div className="border-t border-gray-300 flex-grow"></div>
            <span className="mx-4 text-gray-500 font-medium">or</span>
            <div className="border-t border-gray-300 flex-grow"></div>
          </div>
          <CheckoutForm />
        </div>

        <div className="w-full mb-8 flex-shrink-0 order-1 md:w-1/2 lg:mb-0 md:order-2">
          <div className="flex justify-center">
            <div className="border rounded-md bg-stone-50  w-full px-4 py-3">
              <div className="flex items-center justify-between">
                <h3 className="text-gray-700 font-medium">{`Total order ${totalOrder}`}</h3>
                <span className="text-gray-600 text-sm">Edit</span>
              </div>
              {cart.map((item) => (
                <CartItem item={item} key={item.img} />
              ))}

              <div className=" border-t flex flex-col mt-4">
                <label
                  className=" mt-4 font-custom text-lg font-semibold"
                  htmlFor=""
                >
                  Discount code
                </label>
                <div className=" w-full flex flex-row gap-3 items-center mt-2">
                  <input
                    className=" px-3 flex-grow py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
                    type="text"
                  />
                  <button className=" px-4 py-2 font-custom font-semibold text-xl mb-[4px] bg-blue-500 rounded-md hover:bg-blue-600 transition-all duration-300">
                    Apply
                  </button>
                </div>
                <div className=" mt-12">
                  <div className=" flex font-custom mb-4 flex-row justify-between">
                    <p>Subtotal</p>
                    <h3>{"$53"}</h3>
                  </div>
                  <div className=" flex font-custom mb-4 flex-row justify-between">
                    <p>Discount</p>
                    <h3>{"$53"}</h3>
                  </div>
                  <div className=" flex mb-4 flex-row justify-between">
                    <p>Taxes</p>
                    <h3>{"$53"}</h3>
                  </div>
                  <div className="border border-stone-200 mb-2"></div>
                  <div className=" flex font-custom text-lg px-6 mb-4 flex-row justify-between font-semibold">
                    <hp>Total</hp>
                    <h3>$77</h3>
                  </div>
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
