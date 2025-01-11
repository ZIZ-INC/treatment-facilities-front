"use client"
import React, {useState} from "react";
import {signOut, useSession} from "next-auth/react";
import {LanguageSelect} from "@/shared/components/LanguageSelect";
import {useTranslations} from "next-intl";
import {Menu, X, LogOut} from "lucide-react";

export function Header() {
    const {data} = useSession();
    const t = useTranslations("app.(ui)._components.Header");

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="flex justify-between items-center p-4 border-b bg-white relative">
            {/* Title */}
            <h1 className="text-lg md:text-xl font-bold text-primaryColor">
                {t("title")}
            </h1>

            {/* Mobile: Language Selector and Hamburger Menu */}
            <div className="flex items-center gap-4 md:hidden">
                <LanguageSelect
                    wrapperClassName="flex items-center"
                    className="w-auto"
                />
                <button
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className="text-gray-600"
                    aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
                >
                    {menuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4 text-primaryColor">
                <LanguageSelect/>
                <span className="text-gray-600">{data?.user?.email || t("unknownUser")}</span>
                <button
                    onClick={() => signOut()}
                    className="flex items-center text-gray-600 hover:text-red-600"
                    aria-label={t("signOut")}
                >
                    <LogOut className="w-5 h-5 md:w-6 md:h-6 mr-1"/>
                    <span>{t("signOut")}</span>
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div
                    className="absolute top-16 right-4 w-64 bg-primaryBackgroundColor border border-gray-300 rounded-lg shadow-lg p-4 flex flex-col gap-4"
                >
                    <div className="flex flex-col gap-2">
                        {/* User Info */}
                        <div className="text-lg text-gray-600 text-center">
                            {data?.user?.email || t("unknownUser")}
                        </div>

                        {/* Logout Button */}
                        <div className="flex justify-end">
                            <button
                                onClick={() => signOut()}
                                className="flex w-32 items-center p-2 rounded-lg border border-red-500 justify-center text-red-500"
                                aria-label={t("signOut")}
                            >
                                <LogOut className="w-6 h-6 mr-2"/>
                                <span>{t("signOut")}</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
