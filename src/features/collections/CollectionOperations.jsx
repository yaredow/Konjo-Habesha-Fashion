import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CollectionOperations() {
  return (
    <div className=" flex flex-row mx-auto">
      <div className=" flex-1">
        <Filter />
      </div>
      <div className=" flex-1">
        <SortBy />{" "}
      </div>
      <div className=" flex-1">52 products </div>
    </div>
  );
}

export default CollectionOperations;
