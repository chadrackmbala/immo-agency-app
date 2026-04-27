import { useEffect } from "react";
import { ScrollFadeIn } from './ScrollFadeIn';
import useProductsStore from './context/ProductsContext';

function Products() {
  const { products, getProductData } = useProductsStore();

  useEffect(() => {
    getProductData();
  }, []);

  // const productsArray = [...products].reverse();
  // console.log(productsArray);

  return (
    <div className='flex flex-col gap-5 items-center m-5 mt-15'>
      <ScrollFadeIn>
        <h2 className='text-[30px] text-center'>Logements disponibles</h2>
      </ScrollFadeIn>

      <div className='flex flex-wrap lg:flex-row justify-center gap-10 lg:gap-x-15'>
        {products.map((productData, index) => (
          <ScrollFadeIn key={index}>
            <div className='flex flex-col items-center pb-3 gap-5 lg:pb-3 '>
              <div className='flex justify-center items-center p-2 bg-white rounded-[15px] shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] hover:bg-[#ADD8E6] lg:w-80 lg:h-100'>
                <div className="flex flex-col gap-5">
                  {/* Image du produit */}
                  <img
                    src={productData.image}
                    alt={productData.title}
                    className="h-60 w-80 object-cover rounded-xl transition-transform group-hover:scale-110 duration-200"
                  />

                  <div className='flex flex-col justify-between'>
                    <div className='p-2'>
                      <h2 className='font-bold text-lg'>{productData.title}</h2>
                      <p>
                        {productData.text} chambre(s) salon <br />
                      </p>
                    </div>

                    <div className='flex justify-center'>
                      <a
                        role="button"
                        className='cursor-pointer text-white w-[200px] text-center bg-[#008B8B] px-3 py-1 transition-transform duration-300 rounded-md hover:scale-105 hover:bg-[#0f7880]'
                      >
                        Détails et images
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </div>
  );
}

export default Products;