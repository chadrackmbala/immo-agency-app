import useProductsStore from './context/ProductsContext';
import Products from './Products';

function VenteMaison() {
  const products = useProductsStore(state => state.products);

  return (
    <>
      {products.map(product => (
        <Products key={product.id} productData={product} />
      ))}
    </>
  );
}

export default VenteMaison;