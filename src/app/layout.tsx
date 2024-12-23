import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {NextIntlClientProvider} from "next-intl";
import {defaultLocale} from "@/i18n/locales";
import {ToastContainer} from "react-toastify";
import React from "react";
import {getMessages} from "next-intl/server";
import NextAuthSessionProvider from "@/providers/NextAuthSessionProvider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Рассчет бассейна",
    description: "Для создания коммерческого предложения",
};



export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const messages = await getMessages();

    return (
        <html lang={defaultLocale}>
        <head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
            />
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <NextAuthSessionProvider>
            <NextIntlClientProvider messages={messages}>
                {children}
                <ToastContainer
                    limit={3}
                    toastClassName={
                        "text-3xl font-bold text-secondaryColor flex items-center p-4 "
                    }
                />
                {/*</NextIntlClientProvider>*/}
            </NextIntlClientProvider>
        </NextAuthSessionProvider>
        </body>
        </html>
    );
}
