import PropTypes from "prop-types";
import { useContext } from "react";
import { ShopContext } from "../context/Context";

export default function FilterBar({ onChange }) {
  
  const {data}=useContext(ShopContext);
  
  let uniqueCategories;
  if (data) {
    const categories = data.map((item) => item.category);
    uniqueCategories = new Set(categories);
  }
  return (
    <div>
      <label htmlFor="category" className="text-red-800">category: </label>
      <select name="category" id="category" className="rounded border focus:outline-0 focus:border-red-800" onChange={(e)=>onChange(e.target.value)}>
        <option value="all">all</option>
        {uniqueCategories &&
          Array.from(uniqueCategories).map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
      </select>
    </div>
  );
}

FilterBar.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
};
