/**
 * 📰 Header
 *
 * Global Header of the website.
 * Contains the logo and navigation.
 *
 * @author Daine Mawer
 * @version 1.0
 *
 */
import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx'
import Link from 'next/link'
import {useRouter} from 'next/router'
import FocusLock from 'react-focus-lock'
import {signout, useSession} from 'next-auth/client'
import styles from './Header.module.scss'

/**
 * Header Component
 *
 * @returns {null}
 * @constructor
 */
const Header = () => {
    const [ session, loading ] = useSession()
    const [open, setOpen] = useState(false);
    const node = useRef(null)
    const button = useRef(null)
    const menu = 'primaryNavigation';
    const router = useRouter();


    const toggleDrawer = () => {
        setOpen(!open);
    }

    const closeDrawer = () => {
        setOpen(false);
    }

    const handleKeyDown = e => {
        const { keyCode } = e;

        if(keyCode === 27 ) closeDrawer();
    }

    const handleClickOutSide = e => {
        const { target } = e;
        const { current } = node;

        if( current && !current.contains(target) && target !== button.current ) {
            closeDrawer();
        }
    }

    useEffect( () => {

        const { body } = document;
        open && body.classList.add('locked')

        document.addEventListener( 'keydown', handleKeyDown, false );
        document.addEventListener( 'mousedown', handleClickOutSide, false );

        return () => {
            document.removeEventListener( 'keydown', handleKeyDown, false );
            document.removeEventListener( 'mousedown', handleClickOutSide, false );
            body.classList.remove('locked')
        }
    }, [open] );

    return (
        <header className={styles.header} itemScope="" itemType="http://schema.org/WPHeader" role="banner">
            <div className={styles.logo} itemScope itemType="https://schema.org/Organization">
                <a className={styles['logo-link']} itemProp="url" href="/">
                    <svg width="33" height="35" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 35" role="img" aria-labelledby="logo-title">
                        <title id="logo-title">Daine Mawer Logo</title>
                        <g fill="#313131" fillRule="evenodd">
                            <path d="M33 29h-6.37V9.776L19.027 29h-5.26L6.164 10.021V29H0V0h8.466l8.013 19.592L24.082 0H33z"/>
                            <path d="M33 6h-6.37v19.224L19.027 6h-5.26L6.164 24.979V6H0v29h8.466l8.013-19.592L24.082 35H33z"/>
                        </g>
                    </svg>
                </a>
                {session && <p className={styles.welcome}>✌️ Hey, <strong>Guest</strong></p>}
            </div>
            <nav className={styles.navigation} itemScope="itemscope" itemType="https://schema.org/SiteNavigationElement" role="navigation" aria-label="Primary Site Navigation">
                <FocusLock disabled={!open}>
                    <ul className={styles.menu} id={menu} open={open} ref={node}>
                        <h2 className={styles['menu-title']}>Menu</h2>
                        <li className={styles['navigation-item']}>
                            <Link href="/" passHref>
                                <a className={clsx( styles['navigation-link'], router.pathname === `/` && styles['is-active'] )}>Home</a>
                            </Link>
                        </li>
                        <li className={styles['navigation-item']}>
                            <Link href="/articles" passHref>
                                <a className={clsx(styles['navigation-link'], router.pathname === `/articles` && styles['is-active'] )}>Articles</a>
                            </Link>
                        </li>
                        <li className={styles['navigation-item']}>
                            <Link href="/projects" passHref>
                                <a className={clsx(styles['navigation-link'], router.pathname === `/projects` && styles['is-active'] )}>Projects</a>
                            </Link>
                        </li>
                        <li className={styles['navigation-item']}>
                            <Link href="/about" passHref>
                                <a className={clsx(styles['navigation-link'], router.pathname === `/about` && styles['is-active'] )}>About</a>
                            </Link>
                        </li>
                        <li className={styles['navigation-item']}>
                            <Link href="/contact" passHref>
                                <a className={clsx(styles['navigation-link'], router.pathname === `/contact` && styles['is-active'] )}>Contact</a>
                            </Link>
                        </li>
                        {session && (
                            <li className={styles['navigation-item']}>
                                <a className={clsx( styles['navigation-link'], 'sign-out')} href={`/api/auth/signout`} onClick={(e) => {e.preventDefault(); signout()}}>
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm.707 9.707l-3.3 3.3a.997.997 0 01-1.414 0 .999.999 0 010-1.414L16.586 13H9a1 1 0 110-2h7.586l-1.593-1.593a.999.999 0 111.414-1.414l3.3 3.3a.999.999 0 010 1.414z"/>
                                    </svg>
                                </a>
                            </li>
                        )}
                    </ul>
                </FocusLock>
                <button className={styles['menu-button']} ref={button} onClick={toggleDrawer} aria-expanded={open} aria-haspopup="true" aria-controls={`#${menu}`}>
                    <svg className={styles.icon} width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-labelledby="menu-title">
                        <title id="menu-title">
                            {open ? 'Close Menu' : 'Open Menu'}
                        </title>
                        {open ? (
                            <path d="M5.99 4.99a1 1 0 00-.697 1.717L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293a1 1 0 101.414-1.414L13.414 12l5.293-5.293a1 1 0 00-.727-1.717 1 1 0 00-.687.303L12 10.586 6.707 5.293a1 1 0 00-.717-.303z"/>
                        ) : (
                            <path d="M3 5a1 1 0 100 2h18a1 1 0 100-2H3zm0 6a1 1 0 100 2h18a1 1 0 100-2H3zm0 6a1 1 0 100 2h18a1 1 0 100-2H3z"/>
                        )}
                    </svg>
                </button>
            </nav>
        </header>
    );
}

export default Header;