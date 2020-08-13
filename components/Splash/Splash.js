import React from 'react'
import styles from './Splash.module.scss'

const Splash = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container} itemScope itemType="https://schema.org/Organization">
                <svg className={styles.logo} width="33" height="35" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 35" role="img" aria-labelledby="logo-title">
                    <title id="logo-title">Daine Mawer Logo</title>
                    <g fill="#313131" fillRule="evenodd">
                        <path d="M33 29h-6.37V9.776L19.027 29h-5.26L6.164 10.021V29H0V0h8.466l8.013 19.592L24.082 0H33z"/>
                        <path d="M33 6h-6.37v19.224L19.027 6h-5.26L6.164 24.979V6H0v29h8.466l8.013-19.592L24.082 35H33z"/>
                    </g>
                </svg>
            </div>
        </section>
    );
}

export default Splash