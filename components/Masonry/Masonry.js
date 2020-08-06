/**
 * 🧱 Masonry
 *
 * A CSS Grid-based masonry
 * layout that shows latest content
 * on the Home page.
 *
 * @author Daine Mawer
 * @version 1.0
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import styles from './Masonry.module.scss'

/**
 * Masonry Component
 *
 * @returns {null}
 * @constructor
 */
const Masonry = ({ items }) => {

    return (
        <section className={styles.section}>
            {items && items.map( item => (
                <article className={styles.card} key={item.id}>
                    <Link as={`/${item.type}/${item.slug}`} href={{ pathname: `/${item.type}/[slug]`, query: {post: item.slug}}} passHref>
                        <a className={styles.permalink}>
                            <img className={styles.image} src={`${item.featured.url}?fm=webp&q=60`} alt={item.featured.description} />
                            <div className={styles.content}>
                                <h3 className={styles.heading}>{item.title}</h3>
                                <p className={styles.paragraph}>{item.excerpt}</p>
                            </div>
                        </a>
                    </Link>
                </article>
            ))}
        </section>
    )
}

Masonry.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({})),
}

Masonry.defaultProps = {
    items: [],
}

export default Masonry;