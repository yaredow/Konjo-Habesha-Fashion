// ToggleSearchForm.jsx

import { BiSearch } from "react-icons/bi";
import { useSearchForm } from "../context/searchFormContext";
import Search from "./Search";

function ToggleSearchForm() {
  const { isSearchFormOpen, handleSearchFormToggle } = useSearchForm();

  return (
    <div>
      <button onClick={handleSearchFormToggle}>
        <BiSearch className="text-2xl hover:text-blue-500" />
      </button>

      {isSearchFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <Search handleSearchFormToggle={handleSearchFormToggle} />
        </div>
      )}
    </div>
  );
}

export default ToggleSearchForm;
