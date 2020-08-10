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
import '@styles/global.scss'

const App = ( { Component, pageProps } ) => <Component {...pageProps} />;

export default App;