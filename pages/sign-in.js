/**
 * 📡 Banner
 *
 * A special CTA that appear at the
 * bottom of page templates.
 *
 * @author Daine Mawer
 * @version 1.0
 *
 */
import React, { useState } from 'react'
import {signin} from "next-auth/client"

import Banner from '@components/Banner/Banner'
import Layout from '@components/Layout/Layout'
import Hero from  '@components/Hero/Hero'
import Meta from '@components/Meta/Meta'

import styles from '@components/Form/Form.module.scss'

/**
 * Banner Component
 *
 * @returns {null}
 * @constructor
 */


const SignIn = () => {
    const [inputs, setInputs] = useState({})

    const handleSubmit = e => {
        e.preventDefault();
        signin('credentials', { callbackUrl: `${process.env.NEXT_PUBLIC_DOMAIN}/projects`, password: inputs.password, username: inputs.username, })
    }

    const handleChange = e => {
        const { target } = e;
        const { name, value } = target;

        e.persist();
        setInputs(inputs => ({...inputs, [name]: value}));
    }

    return (
        <>
            <Meta
                title="Sign In | Daine Mawer"
                description="Sign in to view my work"
                url="https://dainemawer.com/auth/signin"
            />
            <Layout>
                <Hero title="Sign In." subtitle="Sign in to view work and projects." />
                <form id="signin-form" onSubmit={handleSubmit} role="form" aria-label="Sign In Form" method="post" action="/api/auth/callback/credentials" autoComplete="off">
                    <fieldset className={styles.fieldset} form="signin-form">
                        <div className={styles.group}>
                            <label htmlFor="username">
                                <span className="screen-reader-text">Username</span>
                                <input id="username" className={styles.input} name='username' defaultValue={inputs.username} type='text' onChange={handleChange} placeholder="Username"/>
                            </label>
                        </div>

                        <div className={styles.group}>
                            <label htmlFor="password">
                                <span className="screen-reader-text">Password</span>
                                <input id="password" className={styles.input} name='password' defaultValue={inputs.password} type='password' onChange={handleChange} placeholder="Password"/>
                            </label>
                        </div>

                        <button className={styles.button} type='submit'>Sign in</button>
                    </fieldset>
                </form>
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

SignIn.propTypes = {}
SignIn.defaultProps = {}

export default SignIn;