/**
 * 📡 Banner
 *
 * A special CTA that appear at the
 * bottom of page templates.
 *
 * @author Daine Mawer
 * @version 1.0
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import styles from './Banner.module.scss'

const Banner = ({ background, content, title, link, label }) => (
    <section className={styles.section} style={{ backgroundColor: background }}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {content && <p className={styles.paragraph}>{content}</p>}
        {link && (
            <p className={styles.wrap}>
                <Link href={link} passHref>
                    {label && <a className={styles.permalink}>{label}</a>}
                </Link>
            </p>
        )}
    </section>
)

Banner.propTypes = {
    background: PropTypes.string,
    content: PropTypes.string,
    label: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
}

Banner.defaultProps = {
    background: '#fff',
    content: 'Looking to get some work done? Need some advice? How about just a chat about the web in general?',
    label: 'Get in touch',
    link: '/contact',
    title: 'Lets have a [virtual] coffee.',
}

export default Banner;