import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { PAGE_SIZE } from "../utils/config";

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
    const sortedItems = [...filteredItems].sort((a, b) => {
      if (field === "name") {
        const nameA = a[field].toUpperCase();
        const nameB = b[field].toUpperCase();
        if (direction === "asc") {
          return nameA.localeCompare(nameB);
        } else if (direction === "desc") {
          return nameB.localeCompare(nameA);
        }
      } else {
        // Default sorting for other fields
        const modifier = direction === "asc" ? 1 : -1;
        return (a[field] - b[field]) * modifier;
      }
    });

    // Shuffle the copy of sorted items randomly
    const shuffledItems = [...sortedItems].sort(() => Math.random() - 0.5);

    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const itemsForCurrentPage = shuffledItems.slice(startIndex, endIndex);

    setFilteredAndSortedItems(itemsForCurrentPage);
    setTotalCount(sortedItems.length);
  }, [originalItems, searchParams, currentPage, filterValue]);

  return { filteredAndSortedItems, totalCount, filterValue };
}

export default useFilterAndSort;
