import PropTypes from "prop-types";

export default function Products({ data, error, loading, category }) {
  return (
    <div className="flex justify-center flex-wrap gap-20 items-end">
      {(loading && (
        <div className="text-xl font-medium">loading posts...</div>
      )) ||
        (error && <div className="text-red-700">{error}</div>) ||
        (data &&
          data
            .filter((product) =>
              category === "all" ? product : product.category === category
            )
            .map((product) => (
              <div
                className="flex flex-col w-[250px] h-[350px] gap-5"
                key={product.id}
              >
                <div className="flex items-center w-[200px] h-[250px]">
                  <img
                    className="max-w-[200px] max-h-[250px]"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="overflow-hidden max-h-[70px]">
                  {product.title}
                </div>
              </div>
            )))}
    </div>
  );
}

Products.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.string,
  loading: PropTypes.bool,
  category: PropTypes.string,
};
