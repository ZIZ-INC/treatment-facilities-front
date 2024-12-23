"use client";
import {signOut, useSession} from "next-auth/react";
import {SignOut} from "@/components/svg/SignOut";
import {LanguageSelector} from "@/components/LanguageSelector";
import {useTranslations} from "next-intl";

export function Header() {
    const {data} = useSession();
    const t = useTranslations("uiLayout.header");

    return (
        <header className="flex justify-between items-center h-full p-4 border-b">
            <h1 className="text-xl font-bold text-gray-800">{t("title")}</h1>
            <div className="flex items-center gap-4">
                <LanguageSelector/>
                <span className="text-gray-600">{data?.user?.email || t("unknownUser")}</span>
                <button
                    onClick={() => signOut()}
                    className="flex items-center text-gray-600 hover:text-red-600"
                    aria-label={t("signOut")}
                >
                    <SignOut width={24} height={24}/>
                </button>
            </div>
        </header>
    );
}
