import useProductsStore from './context/ProductsContext';

function Products() {
  const products = useProductsStore(state => state.products);

  return (
    <div className="flex gap-4 flex-wrap">
      {products.map(product => (
        <div key={product.id}>
          <img src={product.image} alt="" />
          <h2>{product.title}</h2>
          <p>{product.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;