import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer'
import Header from './Header'
import BackToTop from './BackToTop'

function Layout() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, [location.pathname]);

    return (
        <>
        {/* <ScrollFadeIn>
            
        </ScrollFadeIn> */}
            <Header />
            <main className="">
                <Outlet />
            </main>
            <div className='mt-27'>
                <Footer />
            </div>
            <BackToTop />
        </>
    )
}

export default Layout
