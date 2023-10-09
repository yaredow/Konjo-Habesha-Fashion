import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { PAGE_SIZE } from "../utils/Config";

function useFilterAndSort(originalItems, currentPage) {
  const [filteredAndSortedItems, setFilteredAndSortedItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("category") || "all";

  useEffect(() => {
    let filteredItems;
    if (filterValue === "all") filteredItems = originalItems;
    if (filterValue === "men")
      filteredItems = originalItems.filter((item) => item.catagory === "male");
    if (filterValue === "women")
      filteredItems = originalItems.filter(
        (item) => item.catagory === "female"
      );
    if (filterValue === "kids")
      filteredItems = originalItems.filter((item) => item.catagory === "kids");

    const sortValue = searchParams.get("sortBy") || "";
    const [field, direction] = sortValue.split("-");
    const modifier = direction === "asc" ? 1 : -1;
    const sortedItems = filteredItems.sort(
      (a, b) => (a[field] - b[field]) * modifier
    );

    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const itemsForCurrentPage = sortedItems.slice(startIndex, endIndex);

    setFilteredAndSortedItems(itemsForCurrentPage);
    setTotalCount(sortedItems.length);
  }, [originalItems, searchParams, currentPage, filterValue]);

  return { filteredAndSortedItems, totalCount, filterValue };
}

export default useFilterAndSort;
