import PropTypes from "prop-types";
import { ShopContext } from "../App";
import { useContext } from "react";

export default function SortBar() {
  
  const {data,sortData}=useContext(ShopContext);

  return (
    <div>
      <label htmlFor="sort" className="text-red-800">sort: </label>
      <select
        name="sort"
        id="sort"
        className="rounded border focus:outline-0 focus:border-red-800"
        onChange={(e) => {
          const sortedData = [...data]; 
          switch (e.target.value) {
            case "a-z":
              sortedData.sort((a, b) => {
                const nameA = a.title.toLowerCase();
                const nameB = b.title.toLowerCase();
                return nameA.localeCompare(nameB);
              });
              break;
            case "z-a":
              sortedData.sort((a, b) => {
                const nameA = a.title.toLowerCase();
                const nameB = b.title.toLowerCase();
                return nameB.localeCompare(nameA);
              });
              break;
            case "high to low":
              sortedData.sort((a, b) => b.price - a.price);
              break;
            case "low to high":
              sortedData.sort((a, b) => a.price - b.price);
              break;
            default:
              break;
          }
          sortData(sortedData);
        }}
      >
        <option value="a-z">a-z</option>
        <option value="z-a">z-a</option>
        <option value="high to low">high to low</option>
        <option value="low to high">low to high</option>
      </select>
    </div>
  );
}

SortBar.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  sort: PropTypes.string,
  onChange: PropTypes.func,
  setData:PropTypes.func,
};
