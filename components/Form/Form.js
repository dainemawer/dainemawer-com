/**
 * 📠 Form
 *
 * Contact Form located on the /contact template.
 * Backend hooked up through SendGrid.
 *
 * @author Daine Mawer
 * @version 1.0
 *
 */

// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Styles
import styles from './Form.module.scss'

const Form = ({ submit, children }) => (
    <form className={styles.form} role="form" aria-label="Contact Form" id="contact-form" onSubmit={submit} autoComplete="off">
        <fieldset className={styles.fieldset} form="contact-form">
            <legend className="screen-reader-text">Send me a message</legend>
            {children}
        </fieldset>
    </form>
);

Form.propTypes = {
    children: PropTypes.node.isRequired,
    submit: PropTypes.func,
}

Form.defaultProps = {
    submit: () => {},
}

export default Form;