import type { Product } from './context/ProductsContext';

type Props = {
  productData: Product;
};

function Products({ productData }: Props) {
  return (
    <div>
      <img src={productData.image} alt="" />
      <h2>{productData.title}</h2>
      <p>{productData.text}</p>
    </div>
  );
}

export default Products;