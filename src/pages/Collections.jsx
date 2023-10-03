import { Outlet } from "react-router-dom";
import CollectionOperations from "../features/collections/CollectionOperations";

function Collections() {
  return (
    <div>
      <Outlet />
      <CollectionOperations />
    </div>
  );
}

export default Collections;
