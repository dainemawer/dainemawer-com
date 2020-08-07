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
import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

import styles from './Footer.module.scss'

/**
 * Footer Component
 *
 * @returns {null}
 * @constructor
 */
const Footer = () => {
    return (
        <footer className={styles.container} itemScope="" itemType="http://schema.org/WPFooter" role="contentinfo">
            <p className={styles.email}>hello@dainemawer.com</p>
            <div className={styles.grid}>
                <nav className={styles.navigation} itemScope="itemscope" itemType="https://schema.org/SiteNavigationElement" role="navigation" aria-label="Footer Social Navigation">
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
                            <a className={styles['navigation-link']} href="https://linkedin.com/in/dainemawer/" target="_blank" rel="noopener noreferrer">Resume</a>
                        </li>
                    </ul>
                </nav>
                <p className={styles.location}>🌍 <strong>&nbsp;Currently in:&nbsp;</strong> Cape Town, South Africa</p>
            </div>
            <hr className={styles.rule} />
            <div className={styles.grid}>
                <nav className={styles.navigation} itemScope="itemscope" itemType="https://schema.org/SiteNavigationElement" role="navigation" aria-label="Footer Tertiary Navigation">
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
                    </ul>
                </nav>
                <nav className={clsx(styles.navigation, styles['language-select'])}itemScope="itemscope" itemType="https://schema.org/SiteNavigationElement" role="navigation" aria-label="Language Selector">
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
        </footer>
    );
}

export default Footer;