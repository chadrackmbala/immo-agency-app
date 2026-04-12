import React, { useContext, useEffect } from "react";
import { Appartement1 } from './images/index';
import { Appartement2 } from './images/index';
import { Appartement3 } from './images/index';
import { Appartement4 } from './images/index';
import { Appartement5 } from './images/index';
import { Appartement6 } from './images/index';
import { House1 } from './images/index';
import { House2 } from './images/index';
import { House3 } from './images/index';
import { House4 } from './images/index';
import { House5 } from './images/index';
import { House6 } from './images/index';
import { House7 } from './images/index';
import { House8 } from './images/index';
import { House9 } from './images/index';
import { House10 } from './images/index';
import { Couple } from './images/index';
import { Succes } from './images/index';
import Button from '@mui/material/Button';
import { Height } from '@mui/icons-material';
import { ScrollFadeIn } from './ScrollFadeIn';
import useProductsStore from './context/ProductsContext';

function Products() {

  const { products, getProductData } = useProductsStore();

  useEffect(() => {
    getProductData();
  }, []);

  const productsArray = [...products].reverse();

  // Vérifier les données
  // console.log(productsArray);

  // Vérifier que les données arrivent
  productsArray.map((productData, index) => {
    console.log(productData);
    return null; // map attend un return, mais ici on ne rend rien
  });

  const YellowButton = {
    backgroundColor: '#a98f4e',
    textTransform: 'none',
    color: 'black',
    border: 'none',
    width: '158px',
    height: '40px',
    '&:hover': {
      backgroundColor: '#FDD14E',
      border: 'none',
    },
    '&:focus': {
      outline: 'none',
    },
  };

  return (
    <div className='flex flex-col gap-5 items-center m-5 mt-15'>
      <div className="flex justify-center gap-20 flex-wrap">
        {/* {console.log(productsArray)
        }; */}
      </div>
      <ScrollFadeIn>
        <h2 className=' text-[30px] text-center'>Logements disponibles</h2>
      </ScrollFadeIn>
      <div className='flex flex-wrap justify-center gap-10 lg:gap-x-15'>
        <ScrollFadeIn>
          <div className='flex flex-col items-center pb-3   gap-5'>
            <div className='flex justify-center items-center p-2 bg-white rounded-[15px] shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-transform duration-300 [transition-timing-function:cubic-bezier(0.3,0.7,0.4,1.4)] [animation-fill-mode:forwards] hover:scale-105 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] hover:bg-[#ADD8E6] [animation-direction:alternate] [animation-iteration-count:infinite]'>
              <div className=''>
                <img src={House9} alt="logo" className="h-60 w-80 object-cover rounded-xl transition-transform group-hover:scale-110 duration-200" />
                <div className='flex flex-col justify-between'>
                  <div className='p-2'>
                    <h2 className='font-bold text-lg'>Ngaliema</h2>
                    <p>2 chambres salons <br />1 douche <br /> Cuisine <br /> Veranda </p>
                  </div>
                  <div className='flex justify-center'>
                    <a role="button" className='cursor-pointer text-white w-[200px] text-center bg-[#008B8B] px-3 py-1 transition-transform duration-300 rounded-md hover:scale-105 hover:bg-[#0f7880]'>Détails et images</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollFadeIn>
        <ScrollFadeIn>
          <div className='flex flex-col items-center pb-3 gap-5'>
            <div className='flex justify-center items-center p-2 bg-white rounded-[15px] shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-transform duration-300 [transition-timing-function:cubic-bezier(0.3,0.7,0.4,1.4)] [animation-fill-mode:forwards] hover:scale-105 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] hover:bg-[#ADD8E6] [animation-direction:alternate] [animation-iteration-count:infinite]'>
              <div className=''>
                <img src={House6} alt="logo" className="h-60 w-80 object-cover rounded-xl transition-transform group-hover:scale-110 duration-200" />
                <div className='flex flex-col justify-between'>
                  <div className='p-2'>
                    <h2 className='font-bold text-lg'>Limete</h2>
                    <p>2 chambres salons <br />1 douche <br /> Cuisine <br /> Veranda </p>
                  </div>
                  <div className='flex justify-center'>
                    <a role="button" className='cursor-pointer text-white w-[200px] text-center bg-[#008B8B] px-3 py-1 transition-transform duration-300 rounded-md hover:scale-105 hover:bg-[#0f7880]'>Détails et images</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <div className='flex flex-col items-center pb-3 gap-5'>
            <div className='flex justify-center items-center p-2 bg-white rounded-[15px] shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-transform duration-300 [transition-timing-function:cubic-bezier(0.3,0.7,0.4,1.4)] [animation-fill-mode:forwards] hover:scale-105 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] hover:bg-[#ADD8E6] [animation-direction:alternate] [animation-iteration-count:infinite]'>
              <div className=''>
                <img src={House1} alt="logo" className="h-60 w-80 object-cover rounded-xl transition-transform group-hover:scale-110 duration-200" />
                <div className='flex flex-col justify-between'>
                  <div className='p-2'>
                    <h2 className='font-bold text-lg'>Kitambo</h2>
                    <p>1 chambres salons <br />1 douche <br /> Cuisine <br /> Veranda </p>
                  </div>
                  <div className='flex justify-center'>
                    <a role="button" className='cursor-pointer text-white w-[200px] text-center bg-[#008B8B] px-3 py-1 transition-transform duration-300 rounded-md hover:scale-105 hover:bg-[#0f7880]'>Détails et images</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollFadeIn>
        <ScrollFadeIn>
          <div className='flex flex-col items-center pb-3 gap-5'>
            <div className='flex justify-center items-center p-2 bg-white rounded-[15px] shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-transform duration-300 [transition-timing-function:cubic-bezier(0.3,0.7,0.4,1.4)] [animation-fill-mode:forwards] hover:scale-105 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] hover:bg-[#ADD8E6] [animation-direction:alternate] [animation-iteration-count:infinite]'>
              <div className=''>
                <img src={House8} alt="logo" className="h-60 w-80 object-cover rounded-xl transition-transform group-hover:scale-110 duration-200" />
                <div className='flex flex-col justify-between'>
                  <div className='p-2'>
                    <h2 className='font-bold text-lg'>Masina</h2>
                    <p>3 chambres salons <br />1 douche <br /> Cuisine <br /> Veranda </p>
                  </div>
                  <div className='flex justify-center'>
                    <a role="button" className='cursor-pointer text-white w-[200px] text-center bg-[#008B8B] px-3 py-1 transition-transform duration-300 rounded-md hover:scale-105 hover:bg-[#0f7880]'>Détails et images</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollFadeIn>
        <ScrollFadeIn>
          <div className='flex flex-col items-center pb-3 gap-5'>
            <div className='flex justify-center items-center p-2 bg-white rounded-[15px] shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-transform duration-300 [transition-timing-function:cubic-bezier(0.3,0.7,0.4,1.4)] [animation-fill-mode:forwards] hover:scale-105 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] hover:bg-[#ADD8E6] [animation-direction:alternate] [animation-iteration-count:infinite]'>
              <div className=''>
                <img src={Couple} alt="logo" className="h-60 w-80 object-cover rounded-xl transition-transform group-hover:scale-110 duration-200" />
                <div className='flex flex-col justify-between'>
                  <div className='p-2'>
                    <h2 className='font-bold text-lg'>Masina</h2>
                    <p>3 chambres salons <br />1 douche <br /> Cuisine <br /> Veranda </p>
                  </div>
                  <div className='flex justify-center'>
                    <a role="button" className='cursor-pointer text-white w-[200px] text-center bg-[#008B8B] px-3 py-1 transition-transform duration-300 rounded-md hover:scale-105 hover:bg-[#0f7880]'>Détails et images</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollFadeIn>
        <ScrollFadeIn>
          <div className='flex flex-col items-center pb-3 gap-5'>
            <div className='flex justify-center items-center p-2 bg-white rounded-[15px] shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-transform duration-300 [transition-timing-function:cubic-bezier(0.3,0.7,0.4,1.4)] [animation-fill-mode:forwards] hover:scale-105 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] hover:bg-[#ADD8E6] [animation-direction:alternate] [animation-iteration-count:infinite]'>
              <div className=''>
                <img src={Succes} alt="logo" className="h-60 w-80 object-cover rounded-xl transition-transform group-hover:scale-110 duration-200" />
                <div className='flex flex-col justify-between'>
                  <div className='p-2'>
                    <h2 className='font-bold text-lg'>Masina</h2>
                    <p>3 chambres salons <br />1 douche <br /> Cuisine <br /> Veranda </p>
                  </div>
                  <div className='flex justify-center'>
                    <a role="button" className='cursor-pointer text-white w-[200px] text-center bg-[#008B8B] px-3 py-1 transition-transform duration-300 rounded-md hover:scale-105 hover:bg-[#0f7880]'>Détails et images</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </div>
  )
}

export default Products