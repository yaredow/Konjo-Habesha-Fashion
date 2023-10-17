import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";
import DeleteItem from "./DeleteItem";

function CartItem({ item, showDelete = true }) {
  const { img, id, name, totalPrice, material } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(id));

  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={img}
          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base dark:text-gray-100 font-medium text-gray-900">
            <h3>
              <a href="#">{name}</a>
            </h3>
            <p className="ml-4">{formatCurrency(totalPrice)}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
            {material}
          </p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex items-center space-x-2">
            <UpdateItemQuantity id={id} currentQuantity={currentQuantity} />
          </div>

          {showDelete && <DeleteItem id={id} />}
        </div>
      </div>
    </li>
  );
}

export default CartItem;
