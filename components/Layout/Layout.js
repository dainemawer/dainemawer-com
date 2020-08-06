import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import styles from './Layout.module.scss'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className={styles.container} id="content" itemProp='mainContentOfPage' itemScope role='main'>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;