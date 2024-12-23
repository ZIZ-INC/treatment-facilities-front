'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useTranslations } from 'next-intl';
import {LanguageSelector} from "@/components/LanguageSelector";

const RegisterPage: React.FC = () => {
    const router = useRouter();
    const t = useTranslations('register');

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const username = formData.get('username') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const confirm = formData.get('confirm') as string;

        try {
            const res = await signIn('signup', {
                redirect: false,
                username,
                email,
                password,
                confirm,
            });

            console.log({ res });

            if (res?.error) {
                toast.error(res.code || t('error'));
                return;
            }

            if (res?.ok) {
                toast.success(t('success'));
                router.push('/');
                return;
            }
        } catch (error) {
            toast.error(t('unexpectedError'));
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-lg p-10 rounded-xl border border-primaryBorderColor">
                <div className="flex justify-between">
                    <h2 className="text-3xl font-bold text-center mb-8 text-primaryColor">
                        {t("title")}
                    </h2>
                    <LanguageSelector/>
                </div>
                <form onSubmit={onSubmit}>
                    {/* Username Field */}
                    <div className="mb-6">
                        <label
                            htmlFor="username"
                            className="block text-lg font-medium text-secondaryColor mb-2"
                        >
                            {t('usernameLabel')}
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            required
                            className="block w-full px-4 py-3 border border-inactiveBorderColor rounded-lg shadow-sm focus:ring-accentColor focus:border-accentColor text-lg text-primaryColor bg-inactiveBackground"
                            placeholder={t('usernamePlaceholder')}
                        />
                    </div>

                    {/* Email Field */}
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block text-lg font-medium text-secondaryColor mb-2"
                        >
                            {t('emailLabel')}
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="block w-full px-4 py-3 border border-inactiveBorderColor rounded-lg shadow-sm focus:ring-accentColor focus:border-accentColor text-lg text-primaryColor bg-inactiveBackground"
                            placeholder={t('emailPlaceholder')}
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-lg font-medium text-secondaryColor mb-2"
                        >
                            {t('passwordLabel')}
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            required
                            className="block w-full px-4 py-3 border border-inactiveBorderColor rounded-lg shadow-sm focus:ring-accentColor focus:border-accentColor text-lg text-primaryColor bg-inactiveBackground"
                            placeholder={t('passwordPlaceholder')}
                        />
                    </div>

                    {/* Confirm Password Field */}
                    <div className="mb-6">
                        <label
                            htmlFor="confirm"
                            className="block text-lg font-medium text-secondaryColor mb-2"
                        >
                            {t('confirmPasswordLabel')}
                        </label>
                        <input
                            type="password"
                            name="confirm"
                            id="confirm"
                            required
                            className="block w-full px-4 py-3 border border-inactiveBorderColor rounded-lg shadow-sm focus:ring-accentColor focus:border-accentColor text-lg text-primaryColor bg-inactiveBackground"
                            placeholder={t('confirmPasswordPlaceholder')}
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-accentColor hover:bg-secondaryColor text-primaryBackground font-semibold rounded-lg text-lg"
                        >
                            {t('submitButton')}
                        </button>
                    </div>
                </form>
                <p className="mt-6 text-center text-lg text-secondaryColor">
                    {t('alreadyRegisteredMessage')}{' '}
                    <Link href="/login" className="text-accentColor hover:text-primaryColor font-medium">
                        {t('loginLink')}
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;
