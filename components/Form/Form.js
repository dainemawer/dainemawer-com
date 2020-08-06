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
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.scss'

/**
 * Form Component
 *
 * @returns {null}
 * @constructor
 */
const Form = ({ submit, children }) => {
    return (
        <form role="form" aria-label="Contact Form" id="contact-form" onSubmit={submit} autoComplete="off">
            <fieldset className={styles.fieldset} form="contact-form">
                <legend className="screen-reader-text">Send me a message</legend>
                {children}
            </fieldset>
        </form>
    );
}

Form.propTypes = {

}

Form.defaultProps = {

}

export default Form;