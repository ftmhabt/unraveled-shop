import { Link } from "react-router-dom";
export default function Search() {
  return (
    <div className="w-full h-full bg-white flex flex-col text-center justify-center items-center p-[2rem]">
        <Link to='/'>X</Link>
      <input
        className="my-[10rem] w-[250px] text-center"
        type="search"
        name="search"
        id="search"
        placeholder="search products here"
      />
    </div>
  );
}
