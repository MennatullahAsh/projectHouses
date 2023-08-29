import React from 'react';
import {NavBar,Footer,Hero} from '../../Components'


const Layout = ({ children }) => {
    return <>
        <NavBar/>
        {/* <Hero /> */}
        {children}
        {/* <Footer /> */}
    </>
}

export default Layout