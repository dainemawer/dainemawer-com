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
import styles from './Details.module.scss'

const Item = ({ permalink, label, icon }) => (
    <li className={styles['list-item']}>
        <img alt={`${label} Icon`} className={styles.image} width="20" height="20" src={icon}/>
        <a className={styles['link-item']} href={permalink} target="_blank" rel="noopener noreferrer">
            <span className="screen-reader-text">Follow me on </span>
            {label}
            <span className="screen-reader-text">(Opens in a New Tab)</span>
        </a>
    </li>
);

const Details = ({ social }) => (
    <>
        <h3 className={styles.heading}>hello@dainemawer.com</h3>
        <ul className={styles.list}>
            {social && social.map( social => <Item key={social.id} permalink={social.permalink} label={social.label} icon={social.icon} />)}
        </ul>
    </>
);

Item.propTypes = {
    permalink: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string
}

Item.defaultProps = {
    permalink: '',
    label: '',
    icon: ''
}

Details.propTypes = {
    social: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            permalink: PropTypes.string,
            label: PropTypes.string,
            icon: PropTypes.string,
        })
    ).isRequired
}

export default Details;