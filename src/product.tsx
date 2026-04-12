// import { useEffect } from "react";
// import useProductsStore from './context/ProductsContext';
// import Products from './Products';
// import type { Product } from './context/ProductsContext';

// export default function Product() {
//   const products = useProductsStore(state => state.products);
//   const getProductData = useProductsStore(state => state.getProductData);

//   useEffect(() => {
//     getProductData();
//   }, [getProductData]);

//   const productsArray = [...products].reverse();

//   return (
//     <div className="flex justify-center gap-20 flex-wrap">
//       {productsArray.map((productData: Product) => (
//         <Products productData={productData} key={productData.id} />
//       ))}
//     </div>
//   );
// }