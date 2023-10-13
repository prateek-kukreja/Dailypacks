import ProductItem from "./ProductItem";

function ProudProducts() {
  return (
    <div className="py-28 px-0">
      <h2 className="container text-2xl font-semibold !mb-10">
        Products we are proud of
      </h2>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <ProductItem />
        </div>
      </div>
    </div>
  );
}

export default ProudProducts;
