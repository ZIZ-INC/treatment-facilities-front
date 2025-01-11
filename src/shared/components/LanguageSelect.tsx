import {useTranslations} from "next-intl";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {defaultLocale, Locale, locales} from "@/locales/config/locales";
import {getUserLocale, setUserLocale} from "@/locales/config/server";
import {cn} from "@/core/utils/cn";

interface LanguageSelectorProps {
    className?: string;
    labelClassName?: string;
    wrapperClassName?: string;
}

export function LanguageSelect({className, labelClassName, wrapperClassName}: LanguageSelectorProps) {
    const t = useTranslations("shared.components.LanguageSelector");
    const [currentLocale, setCurrentLocale] = useState(defaultLocale);
    const router = useRouter();

    useEffect(() => {
        (async () => {
            const locale = await getUserLocale();
            setCurrentLocale(locale);
        })();
    }, []);

    const handleLocaleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = event.target.value as Locale;
        await setUserLocale(newLocale); // Save the selected locale
        setCurrentLocale(newLocale); // Update the state
        router.refresh(); // Refresh the page to apply the new locale
    };

    return (
        <div className={cn(wrapperClassName, "flex items-center h-10 gap-2")}>
            <label
                htmlFor="language"
                className={cn("text-primaryColor font-medium",
                    labelClassName
                )}
            >
                {t("label")}
            </label>
            <select
                id="language"
                value={currentLocale}
                onChange={handleLocaleChange}
                className={cn(
                    "p-2 border rounded",
                    className
                )}
            >
                {locales.map((locale) => (
                    <option key={locale} value={locale}>
                        {t(locale)}
                    </option>
                ))}
            </select>
        </div>
    );
}
