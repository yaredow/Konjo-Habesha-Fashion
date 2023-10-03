import { useEffect, useRef } from "react";

export default function useClickOutside(onClickOutside) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        if (onClickOutside) {
          onClickOutside();
        }
      }
    }

    document.addEventListener("click", handleClick, true);

    return () => document.removeEventListener("click", handleClick, true);
  }, [onClickOutside]);

  return { ref };
}
