import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      async function callBack(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", callBack);
      return () => document.removeEventListener("keydown", callBack);
    },
    [action, key]
  );
}
