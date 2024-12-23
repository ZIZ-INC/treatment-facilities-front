import NextAuth, {CredentialsSignin} from "next-auth"
import Credentials from "next-auth/providers/credentials";

import {createSignUpSchema, createSignInSchema} from "@/lib/zod";
import {getTranslator} from "@/i18n/translation";
import {loginUser, registerUser} from "@/services/authService";
import {z} from "zod";
import {jwtDecode} from "jwt-decode";
import {CustomJwtPayload} from "@/types/user";

class InvalidLoginError extends CredentialsSignin {
    constructor(message: string) {
        super(message);
        this.name = "InvalidLoginError";
        this.code = message; // You can define a custom code if needed
    }
}


export const {handlers, signIn, signOut, auth} = NextAuth({
    providers: [
        Credentials({
            id: "signup",
            name: "signup",
            credentials: {
                username: {},
                email: {},
                password: {},
                confirm: {},
            },
            async authorize(credentials, req) {
                console.log({credentials})
                const t = await getTranslator();
                const {success, data, error} = await (await createSignUpSchema()).safeParseAsync(credentials);

                if (!success) {
                    if (error instanceof z.ZodError) {
                        const firstError = error.errors[0];
                        throw new InvalidLoginError(firstError.message || t("auth.unknownError"));
                    }

                    // Fallback for unexpected errors
                    throw new InvalidLoginError(t("auth.unknownError"));
                }
                const {username, email, password, confirm} = data

                if (password !== confirm) {
                    throw new InvalidLoginError(t("auth.passwordAndConfirmMismatch"))
                }

                let result = await registerUser(username, email, password);

                if (!result.success) {
                    throw new InvalidLoginError(result.error);
                }
                const decodedAccessToken = jwtDecode(result.data.access) as CustomJwtPayload
                if (!decodedAccessToken) {
                    throw new InvalidLoginError(t("auth.invalidToken"));
                }

                console.log({in: 'signup', decodedAccessToken});
                return decodedAccessToken.user
            },
        }),
        Credentials({
            id: "login",
            name: "login",
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials, req) {
                const t = await getTranslator();
                const {success, data, error} = await (await createSignInSchema()).safeParseAsync(credentials);

                if (!success) {
                    if (error instanceof z.ZodError) {
                        const firstError = error.errors[0];
                        throw new InvalidLoginError(firstError.message || t("auth.unknownError"));
                    }

                    // Fallback for unexpected errors
                    throw new InvalidLoginError(t("auth.unknownError"));
                }
                const {email, password} = data

                let result = await loginUser(email, password);

                if (!result.success) {
                    throw new InvalidLoginError(result.error);
                }
                const decodedAccessToken = jwtDecode(result.data.access) as CustomJwtPayload
                if (!decodedAccessToken) {
                    throw new InvalidLoginError(t("auth.invalidToken"));
                }

                console.log({in: 'login', decodedAccessToken});
                return decodedAccessToken.user
            },
        })
    ],
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({token, user, account}) {
            if (account && user) {
                token.user = user;
            }
            return token;
        },
        async session({session, token}) {
            if (token) {
                session.user = token.user as any;
            }
            // console.log({ in: 'session', session });
            return session;
        },
    },
    pages: {
        signIn: '/login',
    },
})
