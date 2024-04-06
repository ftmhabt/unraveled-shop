import PropTypes from "prop-types";
import Products from "./Products";
import { useState } from "react";
export default function Search({ showSearch, toggleSearch }) {
  const [searchKey, setSearchKey] = useState("");
  const [showResult, setShowResult] = useState(false);

  return (
    <div className={`${showSearch ? "flex flex-col" : "hidden"} relative`}>
      <div className="absolute">
        <div className="flex">
          <input
            className="w-[250px]"
            type="search"
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
