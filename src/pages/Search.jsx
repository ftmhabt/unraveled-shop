export default function Search() {
  return (
    <div className="flex p-[2rem]">
      <input
        className="w-[250px]"
        type="search"
        name="search"
        id="search"
        placeholder="search products here"
      />
      <button>X</button>
    </div>
  );
}
