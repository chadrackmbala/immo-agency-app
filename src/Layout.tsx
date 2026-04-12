import Footer from './Footer'
import Header from './Header'
import BackToTop from './BackToTop'
import { Outlet } from 'react-router-dom';

function Layout() {
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
