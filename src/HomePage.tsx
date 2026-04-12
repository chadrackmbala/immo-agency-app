import './App.css'
import HeroSection from './HeroSection';
import Products from './Products';
import useProductsStore from './context/ProductsContext';

function HomePage() {
    const products = useProductsStore(state => state.products);
    return (
        <>
            <HeroSection />
            {products.map(product => (
                <Products key={product.id} productData={product} />
            ))}
        </>
    )
}

export default HomePage;