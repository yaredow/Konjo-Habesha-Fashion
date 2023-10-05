import { RiAppleFill } from "react-icons/ri";
import CheckoutForm from "./CheckOutForm";
import CartItem from "../cart/CartItem";
import { useSelector } from "react-redux";
import { getCart } from "../cart/cartSlice";
function CheckoutOrder() {
  const cart = useSelector(getCart);
  const totalOrder = cart.length || 0;

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row mt-8">
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
          <div className="flex justify-center lg:justify-end">
            <div className="border rounded-md max-w-md w-full px-4 py-3">
              <div className="flex items-center justify-between">
                <h3 className="text-gray-700 font-medium">{`Total order ${totalOrder}`}</h3>
                <span className="text-gray-600 text-sm">Edit</span>
              </div>
              {cart.map((item) => (
                <CartItem item={item} key={item.img} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutOrder;
