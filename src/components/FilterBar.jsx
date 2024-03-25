import PropTypes from "prop-types";

export default function FilterBar({ data,onChange }) {
  let uniqueCategories;
  if (data) {
    const categories = data.map((item) => item.category);
    uniqueCategories = new Set(categories);
  }
  return (
    <div>
      <label htmlFor="category">category: </label>
      <select name="category" id="category" onChange={(e)=>onChange(e.target.value)}>
        <option value="all">All</option>
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
