/**
 * 🔖 Certification Component
 *
 * Outputs About Certifications
 *
 * @author Daine Mawer
 * @version 1.0
 *
 */

// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

import {formatDate} from '@lib/date'

// Styles
import styles from './Article.module.scss'

const ArticleHeader = ({ excerpt, published, hero, title, permalink }) => {
    const { description, url, width, height } = hero;

    const postTitle = title.replace(/ /g, '%20');
    const postExcerpt = excerpt.replace(/ /g, '%20');

    return (
        <header>
            <div className={styles.container}>
                <time dateTime={published}>{formatDate(published)}</time>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <a className={styles.link} href={`http://twitter.com/share?text=${postTitle}&url=${permalink}`}>
                            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                                <path d="M 24 4.300781 C 23.101563 4.699219 22.199219 5 21.199219 5.101563 C 22.199219 4.5 23 3.5 23.398438 2.398438 C 22.398438 3 21.398438 3.398438 20.300781 3.601563 C 19.300781 2.601563 18 2 16.601563 2 C 13.898438 2 11.699219 4.199219 11.699219 6.898438 C 11.699219 7.300781 11.699219 7.699219 11.800781 8 C 7.699219 7.800781 4.101563 5.898438 1.699219 2.898438 C 1.199219 3.601563 1 4.5 1 5.398438 C 1 7.101563 1.898438 8.601563 3.199219 9.5 C 2.398438 9.398438 1.601563 9.199219 1 8.898438 C 1 8.898438 1 8.898438 1 9 C 1 11.398438 2.699219 13.398438 4.898438 13.800781 C 4.5 13.898438 4.101563 14 3.601563 14 C 3.300781 14 3 14 2.699219 13.898438 C 3.300781 15.898438 5.101563 17.300781 7.300781 17.300781 C 5.601563 18.601563 3.5 19.398438 1.199219 19.398438 C 0.800781 19.398438 0.398438 19.398438 0 19.300781 C 2.199219 20.699219 4.800781 21.5 7.5 21.5 C 16.601563 21.5 21.5 14 21.5 7.5 C 21.5 7.300781 21.5 7.101563 21.5 6.898438 C 22.5 6.199219 23.300781 5.300781 24 4.300781"/>
                            </svg>
                            <span className="screen-reader-text">Share on Twitter</span>
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a className={styles.link} href={`https://www.facebook.com/sharer/sharer.php?u=${permalink}`}>
                            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                                <path d="M12,0C5.373,0,0,5.373,0,12c0,6.016,4.432,10.984,10.206,11.852V15.18H7.237v-3.154h2.969V9.927c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L16.73,15.18h-3.106v8.697 C19.481,23.083,24,18.075,24,12C24,5.373,18.627,0,12,0z"/>
                            </svg>
                            <span className="screen-reader-text">Share on Facebook</span>
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a className={styles.link} href={`https://www.linkedin.com/shareArticle?mini=true&url=${permalink}&title=${postTitle}&summary=${postExcerpt}`}>
                            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                                <path d="M 21.800781 0 L 2.199219 0 C 1 0 0 1 0 2.199219 L 0 21.800781 C 0 23 1 24 2.199219 24 L 21.800781 24 C 23 24 24 23 24 21.800781 L 24 2.199219 C 24 1 23 0 21.800781 0 Z M 7 20 L 3 20 L 3 9 L 7 9 Z M 5 7.699219 C 3.800781 7.699219 3 6.898438 3 5.898438 C 3 4.800781 3.800781 4 5 4 C 6.199219 4 7 4.800781 7 5.800781 C 7 6.898438 6.199219 7.699219 5 7.699219 Z M 21 20 L 17 20 L 17 14 C 17 12.398438 15.898438 12 15.601563 12 C 15.300781 12 14 12.199219 14 14 C 14 14.199219 14 20 14 20 L 10 20 L 10 9 L 14 9 L 14 10.601563 C 14.601563 9.699219 15.601563 9 17.5 9 C 19.398438 9 21 10.5 21 14 Z"/>
                            </svg>
                            <span className="screen-reader-text">Share on LinkedIn</span>
                        </a>
                    </li>
                </ul>
            </div>
            {url && (
                <>
                    <picture>
                        <source srcSet={`${url}?fm=webp&q=60`} type='image/webp' />
                        <source srcSet={`${url}?q=60`} type='image/jpg' />
                        <img src={`${url}?q=60`} loading="lazy" alt={description} />
                    </picture>
                    <meta itemProp="url" content={url} />
                    <meta itemProp="width" content={width} />
                    <meta itemProp="height" content={height} />
                </>
            ) }
        </header>
    )
};

ArticleHeader.propTypes = {
    excerpt: PropTypes.string,
    hero: PropTypes.shape({
        description: PropTypes.string,
        height: PropTypes.number,
        url: PropTypes.string,
        width: PropTypes.number
    }),
    permalink: PropTypes.string,
    published: PropTypes.string,
    title: PropTypes.string
}

ArticleHeader.defaultProps = {
    excerpt: '',
    hero: {
        description: '',
        height: 0,
        url: PropTypes.string,
        width: 0,
    },
    permalink: '',
    published: '',
    title: '',
}

export default ArticleHeader;