import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
    site: process.env.NEXTAUTH_URL,
    basePath: '/api/auth',
    session: {
        jwt: true
    },
    pages: {
        signIn: '/sign-in'
    },
    providers: [
        Providers.Credentials({
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Enter your username" },
                password: {  label: "Password", type: "password", placeholder: "Enter your password" }
            },
            authorize: async (credentials) => {
                const { username, password } = credentials
                const isUser = username === process.env.NEXT_PUBLIC_USER_NAME;
                const isPass = password === process.env.NEXT_PUBLIC_PASS;

                if (isUser && isPass) {
                    return Promise.resolve({})
                } else {
                    return Promise.resolve(false)
                }
            }
        })
    ]
}

const Auth = (req, res) => NextAuth(req, res, options)

export default Auth