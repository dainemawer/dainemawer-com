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
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Info.module.scss'

const Info = ({ client, agency, role, date }) => (
    <div>
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
    client: PropTypes.string,
    agency: PropTypes.string,
    role: PropTypes.string,
    date: PropTypes.string
}

Info.defaultProps = {
    client: '',
    agency: '',
    role: '',
    date: ''
}

export default Info;