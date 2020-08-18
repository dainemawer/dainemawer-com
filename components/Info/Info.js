/**
 * 🗳 Details
 *
 * Adds social and email details to
 * the /contact page template.
 *
 * @author Daine Mawer
 * @version 1.0
 *
 */

// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Styles
import styles from './Info.module.scss'

const Info = ({ client, agency, role, date }) => (
    <div>
        <h3 className={styles.heading}>Project Details</h3>
        <ul className={styles.list}>
            <li className={styles['list-item']}>
                <strong className={styles.strong}>Client: </strong>
                <span>{client}</span>
            </li>
            <li className={styles['list-item']}>
                <strong className={styles.strong}>Agency: </strong>
                <span>{agency}</span>
            </li>
            <li className={styles['list-item']}>
                <strong className={styles.strong}>Role: </strong>
                <span>{role}</span>
            </li>
            <li className={styles['list-item']}>
                <strong className={styles.strong}>Date: </strong>
                <span>{date}</span>
            </li>
        </ul>
    </div>
);

Info.propTypes = {
    agency: PropTypes.string,
    client: PropTypes.string,
    date: PropTypes.string,
    role: PropTypes.string
}

Info.defaultProps = {
    agency: '',
    client: '',
    date: '',
    role: ''
}

export default Info;