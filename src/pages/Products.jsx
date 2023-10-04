import ProductsOperation from "../features/product/ProductsOperation";
import ProductsCollection from "../features/product/ProductsCollection";

function Products() {
  return (
    <div>
      <div className="">
        <ProductsOperation />
        <ProductsCollection />
      </div>
    </div>
  );
}

export default Products;
