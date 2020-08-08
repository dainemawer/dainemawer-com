/**
 * 💈 Hero
 *
 * Included at the top of pages,
 * provides an introductory title and subtitle
 * which helps with SEO best practices.
 *
 * @author Daine Mawer
 * @version 1.0
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.module.scss'

const Hero = ({ title, subtitle }) => (
    <section className={styles.section}>
        {title && <h1 className={styles.title} itemProp="headline">{title}</h1>}
        {subtitle && <h2 className={styles['sub-title']}>{subtitle}</h2>}
    </section>
);

Hero.propTypes = {
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Hero;