import { useNavigate } from "react-router-dom";

function ShopButton({ path, label }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(path)}
      className={`${
        label === "Men" || label === "Women"
          ? " hover:underline text-lg"
          : " bg-blue-600 focus:bg-blue-500 hover:bg-blue-500 px-3 py-2"
      } flex items-center mt-4  text-white text-sm uppercase font-medium rounded  focus:outline-none `}
    >
      <span>{label}</span>
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
    </button>
  );
}

export default ShopButton;
