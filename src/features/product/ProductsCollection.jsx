import ProductCard from "./ProductsItem";
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
  const { filteredAndSortedItems, totalCount, filterValue } = useFilterAndSort(
    items,
    currentPage
  );

  console.log(filteredAndSortedItems);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="container mx-auto px-6">
      <h1 className=" text-xl font-bold text-stone-800">
        {capitalizeFirstLetter(filterValue)}
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {filteredAndSortedItems.map((item, index) => (
          <ProductCard key={index} item={item} />
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
