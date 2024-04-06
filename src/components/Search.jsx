import PropTypes from "prop-types";
export default function Search({showSearch, toggleSearch}) {
  return (
    <div className={showSearch?"flex":'hidden'}>
      <input
        className="w-[250px]"
        type="search"
        name="search"
        id="search"
        placeholder="search products here"
      />
      <button onClick={()=>toggleSearch()}>X</button>
    </div>
  );
}
Search.propTypes = {
  showSearch: PropTypes.bool,
  toggleSearch: PropTypes.func,
};