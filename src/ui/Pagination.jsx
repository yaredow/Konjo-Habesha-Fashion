import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/Config";
import { useSelector } from "react-redux";
import { getCart } from "../features/cart/cartSlice";
import { items } from "./AllData";

function Pagination() {
  const [searchParams, setSearchParams] = useSearchParams();
  const count = items.length;
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <div className="flex flex-row gap-4 justify-between items-center">
      <div className="">
        <p className="text-base mb-2 sm:mb-0">
          Showing{" "}
          <span className="font-semibold">
            {(currentPage - 1) * PAGE_SIZE + 1}
          </span>{" "}
          to{" "}
          <span className="font-semibold">
            {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
          </span>{" "}
          of <span className="font-semibold">{count}</span> results
        </p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={` text-base font-semibold rounded ${
            currentPage === 1
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600 hover:text-white"
          }`}
        >
          <HiChevronLeft className="h-6 w-6" />
          <span>Previous</span>
        </button>

        <button
          onClick={nextPage}
          disabled={currentPage === pageCount}
          className={`py-2 px-4 text-base font-semibold rounded ${
            currentPage === pageCount
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600 hover:text-white"
          }`}
        >
          <span>Next</span>
          <HiChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
