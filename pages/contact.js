/**
 * ☎️️ Contact
 *
 * Renders the Contact Page Template.
 *
 * @author Daine Mawer
 * @version 1.0
 *
 */

// Dependencies
import React, { useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import clsx from 'clsx'
import {useForm} from "react-hook-form"

// Internal
import social from '@data/social'

// Components
import Banner from '@components/Banner/Banner'
import Hero from '@components/Hero/Hero'
import Layout from '@components/Layout/Layout'
import Meta from '@components/Meta/Meta'
import Details from '@components/Details/Details'
import Form from '@components/Form/Form'

// Styles
import styles from '@components/Form/Form.module.scss'

const Contact = () => {
    const recaptchaRef = useRef(null);
    const {register, errors, handleSubmit} = useForm();
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: {error: false, msg: null}
    });

    const onSubmit = async (data, event) => {
        const token = await recaptchaRef.current.executeAsync();
        const formData = {...data, token};

        const res = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const text = await res.text();
        handleResponse(res.status, text, event);
    };

    const handleResponse = (status, msg, event) => {
        if (status === 200) {
            event.target.reset();
            recaptchaRef.current.reset();
            setStatus({
                submitted: true,
                submitting: false,
                info: {error: false, msg},
            });
        } else {
            setStatus({
                info: {error: true, msg},
            });
        }
    };

    return (
        <>
            <Meta
                title="Contact | Daine Mawer"
                description="Lets create something rad. Tell me about your idea!"
                url="https://dainemawer.com/contact"
            />
            <Layout>
                <Hero title="Contact me." subtitle="Lets create something rad. Tell me about your idea!" />
                <article className={clsx(styles.article, 'page-content')} itemScope itemType="https://schema.org/BlogPosting">
                    <aside>
                        <Details social={social} />
                    </aside>
                    <div>
                        <Form submit={handleSubmit(onSubmit)}>
                            <div className={clsx(styles.group, styles['form-group'], errors.name ? styles['form-error'] : '')}>
                                <label htmlFor="name">
                                    <span className="screen-reader-text">Name</span>
                                    <input className={styles.input} id="name" type="text" placeholder="Name" name="name"
                                           ref={register({
                                               required: 'This field is required',
                                               maxLength: {
                                                   value: 20,
                                                   message: 'This field cant be longer than 20 characters. '
                                               }
                                           })}/>
                                </label>
                                {errors.name && (<p className={styles.error}>{errors.name.message}</p>)}
                            </div>
                            <div className={clsx(styles.group,  styles['form-group '], errors.email ? styles['form-error'] : '')}>
                                <label htmlFor="email">
                                    <span className="screen-reader-text">Name</span>
                                    <input className={styles.input} id="email" type="text" placeholder="Email Address" name="email"
                                           ref={register({
                                               required: 'This field is required',
                                               maxLength: {
                                                   value: 20,
                                                   message: 'This field cant be longer than 20 characters. '
                                               }
                                           })}/>
                                </label>
                                {errors.email && (<p className={styles.error}>{errors.email.message}</p>)}
                            </div>
                            <div className={clsx(styles.group, styles['form-group '], errors.subject ? styles['form-error'] : '')}>
                                <label htmlFor="subject">
                                    <span className="screen-reader-text">Subject</span>
                                    <input className={styles.input} id="subject" type="text" placeholder="Subject" name="subject"
                                           ref={register({
                                               required: 'This field is required',
                                               maxLength: {
                                                   value: 20,
                                                   message: 'This field cant be longer than 20 characters. '
                                               }
                                           })}/>
                                </label>
                                {errors.subject && (<p className={styles.error}>{errors.subject.message}</p>)}
                            </div>
                            <div className={clsx(styles.group, styles['form-group '], styles['form-group-textarea'], errors.message ? styles['form-error'] : '')}>
                                <label htmlFor="message">
                                    <span className="screen-reader-text">Message</span>
                                    <textarea className={styles.textarea} id="message" name="message" placeholder="Message" rows="15" ref={register({
                                        required: true,
                                        minLength: {
                                            value: 100,
                                            message: 'This field is required and needs to be at least 100 characters long.'
                                        }
                                    })}/>
                                </label>
                                {errors.message && (<p className={styles.error}>{errors.message.message}</p>)}
                            </div>
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                size="invisible"
                                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
                            />
                            <div className={styles.group}>
                                <button className={styles.button} type="submit">
                                    Submit
                                </button>
                            </div>
                            <div className={styles.group}>
                                {status.info.error && (
                                    <p className={styles.message}>{`🙄 There was a problem submitting the form: ${null !== status.info.msg ? status.info.msg : ''}`}</p>)}
                                {!status.info.error && status.info.msg && (
                                    <p className={styles.message}>{`✅ ${status.info.msg}. You will receive a reply shortly.`}</p>)}
                            </div>
                        </Form>
                    </div>
                </article>
                <Banner
                    background="rgba(83,175,79, 0.28)"
                    content="Why not take a look through my journal?
                            If you’re looking for corporate training / education
                            in web technologies, take a look at my courseware."
                    title="I write and teach too!"
                    label="Articles"
                    link="/articles"
                />
            </Layout>
        </>
    );
}

export default Contact;