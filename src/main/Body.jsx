import { Outlet } from "react-router-dom";
import Search from "../pages/Search";
export default function Body() {

  return (
    <>
        <Search/>
        <Outlet/>
    </>
  )
}
