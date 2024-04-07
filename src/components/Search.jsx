import PropTypes from "prop-types";
import Products from "./Products";
import { useState } from "react";
export default function Search({ showSearch, toggleSearch }) {
  const [searchKey, setSearchKey] = useState("");
  const [showResult, setShowResult] = useState(false);

  return (
    <div className={`${showSearch ? "flex" : "hidden"} relative`}>
      <div className="absolute flex flex-col bg-white">
        <div className="flex p-[1rem] justify-between w-[90vw] lg:w-[80vw]">
          <input
            className="p-[.25rem] focus:outline-0"
            type="text"
            name="search"
            id="search"
            placeholder="search products here"
            value={searchKey}
            onChange={(e) => {
              setSearchKey(e.target.value.toLowerCase());
              setShowResult(true);
            }}
          />
          <button
            onClick={() => {
              toggleSearch();
              setSearchKey("");
              setShowResult(false);
            }}
          >
            X
          </button>
        </div>
        <div
          className={showResult ? "block" : "hidden"}
          onClick={() => {
            toggleSearch();
            setSearchKey("");
            setShowResult(false);
          }}
        >
          <Products searchKey={searchKey} />
        </div>
      </div>
    </div>
  );
}
Search.propTypes = {
  showSearch: PropTypes.bool,
  toggleSearch: PropTypes.func,
};
