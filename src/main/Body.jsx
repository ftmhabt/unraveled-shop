import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Search from "../components/Search";
export default function Body({showSearch, toggleSearch}) {

  return (
    <>
        <Search showSearch={showSearch} toggleSearch={toggleSearch} />
        <Outlet/>
    </>
  )
}
Body.propTypes = {
  showSearch: PropTypes.bool,
  toggleSearch: PropTypes.func,
};