/**
 * 📡 Access
 *
 * Renders on Project Pages when
 * access is required
 *
 * @author Daine Mawer
 * @version 1.0
 *
 */
import React from 'react';
import Link from 'next/link'
import styles from './Access.module.scss'

/**
 * Banner Component
 *
 * @returns {null}
 * @constructor
 */

const Access = () => {
    return (
        <section className={styles.section}>
            <h2>✋ Sorry, but you&apos;ll need a login to view all of my work.</h2>
            <p className={styles.paragraph}>If I&apos;ve already provided you with a <strong>username</strong> and <strong>password</strong>, sign in below:</p>
            <Link href="/sign-in" passHref>
                <a className={styles.button}>Sign In</a>
            </Link>
        </section>
    );
}

Access.propTypes = {

}

Access.defaultProps = {

}

export default Access;