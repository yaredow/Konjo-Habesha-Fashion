import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/config";
import { items } from "./AllData";
import useFilterAndSort from "../hook/useFilterAndSort";

function Pagination() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const { totalCount } = useFilterAndSort(items, currentPage);

  const pageCount = Math.ceil(totalCount / PAGE_SIZE);

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
      <div className=" font-custom text-lg dark:text-gray-100">
        <p className=" mb-2 sm:mb-0">
          Showing{" "}
          <span className="font-semibold">
            {(currentPage - 1) * PAGE_SIZE + 1}
          </span>{" "}
          to{" "}
          <span className="font-semibold">
            {currentPage === pageCount ? totalCount : currentPage * PAGE_SIZE}
          </span>{" "}
          of <span className="font-semibold">{totalCount}</span> results
        </p>
      </div>

      <div className="flex gap-4 font-custom text-lg dark:text-gray-100">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={` py-2 px-2 text-base font-semibold rounded ${
            currentPage === 1
              ? " text-gray-600 cursor-not-allowed"
              : " hover:bg-blue-600 hover:text-white"
          }`}
        >
          <div className=" flex flex-row">
            <HiChevronLeft className="h-6 w-6 " />
            <span>Previous</span>
          </div>
        </button>

        <button
          onClick={nextPage}
          disabled={currentPage === pageCount}
          className={`py-2 px-2 text-base font-semibold rounded ${
            currentPage === pageCount
              ? " text-gray-200 cursor-not-allowed"
              : " hover:bg-blue-600 hover:text-white"
          }`}
        >
          <div className=" flex flex-row">
            <span>Next</span>
            <HiChevronRight className="h-6 w-6" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Pagination;
