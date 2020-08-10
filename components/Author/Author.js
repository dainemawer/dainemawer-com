/**
 * 📡 Author
 *
 * Renders on Author Pages
 *
 * @author Daine Mawer
 * @version 1.0
 *
 */

// Dependencies
import React from 'react'
import Link from "next/link"

// Styles
import styles from './Author.module.scss'

const Author = () => (
    <section itemScope itemType="https://schema.org/CreativeWork">
        <div className={styles.section} itemProp="author" itemScope itemType="https://schema.org/Person">
            <div className="author-card-pic">
                <img className={styles.image} src="/author.jpg" itemProp="image" alt="placeholder image" />
            </div>
            <div className={styles.info}>
                <h3 className={styles.title}>
                    <Link href="/">
                        <a className={styles.link} rel="author" itemProp="url">
                            <span itemProp="name">Daine Mawer</span>
                        </a>
                    </Link>
                </h3>
                <div className="author-card-bio" itemProp="description">
                    <p className={styles.description}>Front-end Engineer, Author, Consultant</p>
                </div>
            </div>
        </div>
    </section>
)

export default Author;