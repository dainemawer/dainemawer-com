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
import styles from './About.module.scss'

const Certifications = ({ title }) => (
    <section className={styles.section}>
        {title && <h3 className={styles.title}>{title}</h3>}
        <ul className={styles.list}>
            <li className={styles['certification-item']}>CS50 - Introduction to Computer Science | <a className={styles['certification-link']} href="https://www.edx.org/course/cs50s-introduction-to-computer-science" rel="noopener noreferrer">Link</a></li>
            <li className={styles['certification-item']}>AWS Certified Developer | <a className={styles['certification-link']} href="https://aws.amazon.com/certification/certified-developer-associate/" rel="noopener noreferrer">Link</a></li>
            <li className={styles['certification-item']}>Google Cloud Certificed Developer | <a className={styles['certification-link']} href="https://cloud.google.com/certification/cloud-developer" rel="noopener noreferrer">Link</a></li>
            <li className={styles['certification-item']}>Certified Agile42 Scrum Master | <a className={styles['certification-link']} href="https://www.agile42.com/en/csm-certified-scrum-master-training/" rel="noopener noreferrer">Link</a></li>
        </ul>
    </section>
);

Certifications.propTypes = {
    title: PropTypes.string,
}

Certifications.defaultProps = {
    title: '',
}

export default Certifications;