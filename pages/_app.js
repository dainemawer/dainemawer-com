/**
 * 🖲 NextJS App
 *
 * Overrides the default App component
 * from NextJS.
 *
 * @author Daine Mawer
 * @version 1.0
 *
 */
import React from 'react'
import useDarkMode from 'use-dark-mode';
import PropTypes from 'prop-types'
import NProgress from 'nprogress'
import Router from 'next/router'
import { Provider } from 'next-auth/client'

// 📇 Context
import Context from '@context/context';

import 'nprogress/nprogress.css'
import '@styles/global.scss'

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App = ( { Component, pageProps } ) => {
    const darkMode = useDarkMode(false);

    return (
        <Provider session={pageProps.session}>
            <Context.Provider
                value={{
                    isDarkMode: darkMode.value,
                    toggleDarkMode: darkMode.toggle
                }}
            >
                <Component {...pageProps} />
            </Context.Provider>
        </Provider>
    )
};

App.propTypes = {
    Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
    pageProps: PropTypes.shape({
        session: PropTypes.shape({})
    })
}

export default App;