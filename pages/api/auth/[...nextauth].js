import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
    basePath: '/api/auth',
    pages: {
        signIn: '/sign-in'
    },
    providers: [
        Providers.Credentials({
            authorize: async (credentials) => {
                const { username, password } = credentials
                const isUser = username === process.env.NEXT_PUBLIC_USER_NAME;
                const isPass = password === process.env.NEXT_PUBLIC_PASS;

                if (isUser && isPass) {
                    return Promise.resolve({})
                } else {
                    return Promise.resolve(false)
                }
            },
            credentials: {
                password: { label: "Password", placeholder: "Enter your password", type: "password" },
                username: { label: "Username", placeholder: "Enter your username", type: "text" },
            },
        })
    ],
    session: {
        jwt: true
    },
    site: process.env.NEXTAUTH_URL,
}

const Auth = (req, res) => NextAuth(req, res, options)

export default Auth