import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function ProductsOperation() {
  return (
    <div className=" flex md:flex-row flex-col mx-6 md:justify-end md:gap-8 gap-4 mb-16 justify-center">
      <div className="">
        <Filter
          filterField="category"
          options={[
            { value: "all", label: "All" },
            { value: "men", label: "Men" },
            { value: "women", label: "Women" },
            { value: "kids", label: "Kids" },
          ]}
        />
      </div>

      <div className="">
        <SortBy
          options={[
            {
              value: "name-asc",
              label: "Sort by name (A-Z)",
            },
            {
              value: "name-desc",
              label: "Sort by name (Z-A)",
            },
            {
              value: "price-asc",
              label: "Sort by price (low first)",
            },
            {
              value: "price-desc",
              label: "Sort by price (high first)",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default ProductsOperation;
