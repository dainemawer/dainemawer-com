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

// Styles
import styles from './Article.module.scss'

const ArticleFooter = ({ published, modified }) => (
    <footer>
        <p className="screen-reader-text">
            {published && (
                <span itemProp="datePublished">
                    <time dateTime={published}>{published}</time>
                </span>
            )}
            {modified && (
                <span itemProp="dateModified">
                    <time dateTime={modified}>{modified}</time>
                </span>
            )}
        </p>
    </footer>
);

ArticleFooter.propTypes = {
    modified: PropTypes.string,
    published: PropTypes.string,
}

ArticleFooter.defaultProps = {
    modified: '',
    published: '',
}

export default ArticleFooter;