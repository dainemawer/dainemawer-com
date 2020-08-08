/**
 * 🗳 Layout
 *
 * Handles Header and Footer
 * components across templates.
 *
 * @author Daine Mawer
 * @version 1.0
 *
 */
import React from 'react'
import PropTypes from 'prop-types'
import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import styles from './Layout.module.scss'

const Layout = ({ children }) => (
    <>
        <a href="#content" className="screen-reader-text">Skip to Content</a>
        <Header />
        <main className={styles.container} id="content" itemProp='mainContentOfPage' itemScope role='main'>
            {children}
        </main>
        <Footer />
    </>
);

Layout.propTypes = {
   children: PropTypes.node.isRequired,
};

export default Layout;