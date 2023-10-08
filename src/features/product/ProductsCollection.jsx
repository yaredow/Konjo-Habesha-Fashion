import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductsItem";
import { items } from "../../ui/AllData";
function ProductsCollection() {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("category") || "all";
  let filteredItems;
  if (filterValue === "all") filteredItems = items;
  if (filterValue === "men")
    filteredItems = items.filter((item) => item.catagory === "male");
  if (filterValue === "women")
    filteredItems = items.filter((item) => item.catagory === "female");
  if (filterValue === "kids")
    filteredItems = items.filter((item) => item.catagory === "kids");

  const sortValue = searchParams.get("sortBy") || "";
  const [field, direction] = sortValue.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedItems = filteredItems.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="container mx-auto px-6">
      <h1 className=" text-xl font-bold text-stone-800">
        {capitalizeFirstLetter(filterValue)}
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {sortedItems.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
      <div className="flex justify-center">
        <div className="flex rounded-md mt-8">
          <a
            href="#"
            className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-blue-500 hover:text-white"
          >
            <span>Previous</span>
          </a>
          {/* Add pagination links */}
          <a
            href="#"
            className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 rounded-r hover:bg-blue-500 hover:text-white"
          >
            <span>Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductsCollection;
