/**
 * 👟 Footer
 *
 * Global Footer of the site.
 * Houses tertiary menus for social, translation
 * and other secondary nick-nacks.
 *
 * @author Daine Mawer
 * @version 1.0
 *
 */

// Dependencies
import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'

// Styles
import styles from './Footer.module.scss'

const Footer = () => (
    <footer className={styles.container} itemScope="" itemType="http://schema.org/WPFooter" role="contentinfo">
        <div className={styles.grid}>
            <div>
                <h4>Welcome</h4>
                <p>Description</p>
            </div>
            <nav className={styles.navigation} itemScope="itemscope" itemType="https://schema.org/SiteNavigationElement" role="navigation" aria-label="Footer Social Navigation">
                <h4>Social</h4>
                <ul className={styles.menu}>
                    <li className={styles['navigation-item']}>
                        <a className={styles['navigation-link']} href="https://twitter.com/dainemawer" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </li>
                    <li className={styles['navigation-item']}>
                        <a className={styles['navigation-link']} href="https://github.com/dainemawer" target="_blank" rel="noopener noreferrer">Github</a>
                    </li>
                    <li className={styles['navigation-item']}>
                        <a className={styles['navigation-link']} href="https://linkedin.com/in/dainemawer/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                    <li className={styles['navigation-item']}>
                        <a className={styles['navigation-link']} href="https://linkedin.com/in/dainemawer/" target="_blank" rel="noopener noreferrer">Quora</a>
                    </li>
                </ul>
            </nav>
            <nav className={styles.navigation} itemScope="itemscope" itemType="https://schema.org/SiteNavigationElement" role="navigation" aria-label="Footer Tertiary Navigation">
                <h4>Links</h4>
                <ul className={styles.menu}>
                    <li className={styles['navigation-item']}>
                        <Link href="/privacy" passHref>
                            <a className={styles['navigation-link']}>Privacy</a>
                        </Link>
                    </li>
                    <li className={styles['navigation-item']}>
                        <Link href="/cookies" passHref>
                            <a className={styles['navigation-link']}>Cookies</a>
                        </Link>
                    </li>
                    <li className={styles['navigation-item']}>
                        <Link href="/terms" passHref>
                            <a className={styles['navigation-link']}>Terms</a>
                        </Link>
                    </li>
                    <li className={styles['navigation-item']}>
                        <Link href="/uses" passHref>
                            <a className={styles['navigation-link']}>Uses</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <nav className={clsx(styles.navigation, styles['language-select'])}itemScope="itemscope" itemType="https://schema.org/SiteNavigationElement" role="navigation" aria-label="Language Selector">
                <h4>Language</h4>
                <ul className={styles.menu}>
                    <li className={styles['navigation-item']}>
                        <button type="button" className={clsx(styles['navigation-button'], styles['is-active'])}>English</button>
                    </li>
                    <li className={styles['navigation-item']}>
                        <button type="button" className={styles['navigation-button']}>Afrikaans</button>
                    </li>
                </ul>
            </nav>

        </div>
        <hr className={styles.rule} />
        <p className={styles.location}>🌍 Cape Town, South Africa</p>
        <div className={clsx(styles.grid, styles.colophon)}>


        </div>
    </footer>
);

export default Footer;