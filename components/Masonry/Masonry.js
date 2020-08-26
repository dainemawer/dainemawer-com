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

// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

// Styles
import styles from './Masonry.module.scss'

const Masonry = ({ items }) => (
    <section className={styles.section}>
        {items && items.map( item => (
            <article className={styles.card} key={item.id}>
                <Link as={`/${item.type}/${item.slug}`} href={{ pathname: `/${item.type}/[slug]`, query: {post: item.slug}}} passHref>
                    <a className={styles.permalink}>
                        <picture className={styles.picture}>
                            <source srcSet={`${item.featured.url}?fm=webp&q=60`} type='image/webp' />
                            <source srcSet={`${item.featured.url}?q=60`} type='image/jpg' />
                            <img className={styles.image} src={`${item.featured.url}?q=60`} loading="lazy" alt={item.featured.description} />
                        </picture>
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

Masonry.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        excerpt: PropTypes.string,
        featured: PropTypes.shape({
            description: PropTypes.string,
            url: PropTypes.string
        }),
        id: PropTypes.number,
        slug: PropTypes.string,
        title: PropTypes.string,
        type: PropTypes.string,
    })).isRequired,
}

export default Masonry;