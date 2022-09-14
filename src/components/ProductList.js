import Product from "./Product";

const ProductList = ({ products, productGroups }) => {
  return (
    <div className="product-list">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Product group</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => {
            return <Product key={p.id} pName={p.text} pGroup={p.group} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
