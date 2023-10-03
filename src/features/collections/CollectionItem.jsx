import { useNavigate } from "react-router-dom";
import useAddToCart from "../../hook/useAddToCart";
import { formatCurrency } from "../../utils/helpers";

function CollectionItem({ item }) {
  const navigate = useNavigate();
  const { handleAddToCart } = useAddToCart({ item });
  const { img, id, name, price } = item;

  function handleCartClick(e) {
    e.stopPropagation();
    handleAddToCart();
  }

  return (
    <div
      onClick={() => navigate(`/product/${id}`)}
      className="w-full max-w-sm mx-auto hover:scale-105 cursor-pointer z-10 rounded-md shadow-md overflow-hidden"
    >
      <div
        className="flex items-end justify-end  h-64 w-full bg-cover"
        style={{ backgroundImage: `url('${img}')` }}
      >
        <button
          onClick={handleCartClick}
          className="p-2 rounded-full bg-blue-500 text-white mx-5 -mb-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-500"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
        </button>
      </div>
      <div className="px-5 py-3">
        <h3 className="text-gray-700 uppercase font-custom">{name}</h3>
        <span className="text-stone-600 font-semibold mt-2 ">
          {formatCurrency(price)}
        </span>
      </div>
    </div>
  );
}

export default CollectionItem;
