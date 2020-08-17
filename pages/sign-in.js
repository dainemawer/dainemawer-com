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

import Layout from '@components/Layout/Layout'
import Hero from  '@components/Hero/Hero'
import Meta from '@components/Meta/Meta'

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
        signin('credentials', { username: inputs.username, password: inputs.password, callbackUrl: `${process.env.NEXT_PUBLIC_DOMAIN}/projects` })
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
                <form onSubmit={handleSubmit} method="post" action="/api/auth/callback/credentials">
                    <label>
                        Username
                        <input name='username' defaultValue={inputs.username} type='text' onChange={handleChange}/>
                    </label>
                    <label>
                        Password
                        <input name='password' defaultValue={inputs.password} type='password' onChange={handleChange}/>
                    </label>
                    <button type='submit'>Sign in</button>
                </form>
            </Layout>
        </>
    );
}

SignIn.propTypes = {}
SignIn.defaultProps = {}

export default SignIn;