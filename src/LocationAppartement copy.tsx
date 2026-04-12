import useProductsStore from './context/ProductsContext';
import Products from './Products';

function LocationA() {
  const products = useProductsStore(state => state.products);

  return (
    <>
      {products.map(product => (
        <Products key={product.id} productData={product} />
      ))}
    </>
  );
}

export default LocationA;