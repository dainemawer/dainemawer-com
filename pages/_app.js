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
import React, {useEffect} from 'react'
import useDarkMode from 'use-dark-mode';
import PropTypes from 'prop-types'
import NProgress from 'nprogress'
import Router from 'next/router'
import { Provider } from 'next-auth/client'

import 'typeface-work-sans'
import 'typeface-quattrocento-sans'

// 📇 Context
import Context from '@context/context';

import 'nprogress/nprogress.css'
import '@styles/global.scss'

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App = ( { Component, pageProps } ) => {
    const darkMode = useDarkMode(false);

    useEffect( () => {
        // Change these if you use something different in your hook.
        const storageKey = 'darkMode';
        const classNameDark = 'dark-mode';
        const classNameLight = 'light-mode';

        function setClassOnDocumentBody(darkMode) {
            document.body.classList.add(darkMode ? classNameDark : classNameLight);
            document.body.classList.remove(darkMode ? classNameLight : classNameDark);
        }

        const preferDarkQuery = '(prefers-color-scheme: dark)';
        const mql = window.matchMedia(preferDarkQuery);
        const supportsColorSchemeQuery = mql.media === preferDarkQuery;
        let localStorageTheme = null;
        try {
            localStorageTheme = localStorage.getItem(storageKey);
        } catch (err) {}
        const localStorageExists = localStorageTheme !== null;
        if (localStorageExists) {
            localStorageTheme = JSON.parse(localStorageTheme);
        }

        // Determine the source of truth
        if (localStorageExists) {
            // source of truth from localStorage
            setClassOnDocumentBody(localStorageTheme);
        } else if (supportsColorSchemeQuery) {
            // source of truth from system
            setClassOnDocumentBody(mql.matches);
            localStorage.setItem(storageKey, mql.matches);
        } else {
            // source of truth from document.body
            const isDarkMode = document.body.classList.contains(classNameDark);
            localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
        }
    });

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