import { useEffect, useRef } from "react";
import { useKey } from "./useKey";
export default function SearchBar({ query, setQuery }) {
  // using useRef hook to select dom elemnts
  // step 1 decalare a useRef  with initial null value
  const inputEl = useRef(null);
  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });
  //step 3 : use the ref inside an effect (inputEl.cuurent is the dom elemnt)

  // useEffect(function () {
  //   const el = document.querySelector(".search");
  //   el.focus();
  //   console.log(el);
  // }, []);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl} // step 2: use ref property, pass the created ref
    />
  );
}
