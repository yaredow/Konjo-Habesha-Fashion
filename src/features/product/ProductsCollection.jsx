import ProductItem from "./ProductsItem";
import { items } from "../../ui/AllData";
import Pagination from "../../ui/Pagination";
import useFilterAndSort from "../../hook/useFilterAndSort";
import { useSearchParams } from "react-router-dom";
function ProductsCollection() {
  const [searchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  // Adjust the page size as needed
  const { filteredAndSortedItems, filterValue } = useFilterAndSort(
    items,
    currentPage
  );

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="container mx-auto px-6">
      <h1 className=" text-2xl font-bold text-stone-800 mb-3 dark:text-gray-100">
        {capitalizeFirstLetter(filterValue)}
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredAndSortedItems.map((item, index) => (
          <ProductItem key={index} item={item} />
        ))}
      </div>
      <div className="justify-center">
        <div className="mt-8">
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default ProductsCollection;
