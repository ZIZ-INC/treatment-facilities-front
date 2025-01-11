"use client"
import {useSession} from "next-auth/react";
import {useTranslations} from "next-intl";

export default function Home() {
    const {status, data} = useSession()
    const t = useTranslations("app.(ui).page");
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
        > {t("welcomeMessage", {username: data?.user.username})}
        </div>
    );
}
