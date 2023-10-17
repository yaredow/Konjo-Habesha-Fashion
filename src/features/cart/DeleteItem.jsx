import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

function DeleteItem({ id }) {
  const dispatch = useDispatch();
  return (
    <div className="flex">
      <button
        onClick={() => dispatch(deleteItem(id))}
        type="button"
        className="font-medium text-blue-500 hover:text-blue-600"
      >
        Remove
      </button>
    </div>
  );
}

export default DeleteItem;
