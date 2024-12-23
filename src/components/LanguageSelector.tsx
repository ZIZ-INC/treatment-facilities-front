import {getUserLocale, setUserLocale} from "@/i18n/server";
import {useTranslations} from "next-intl";
import {locales, defaultLocale, Locale} from "@/i18n/locales";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

export function LanguageSelector() {
    const t = useTranslations("components.LanguageSelector");
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
        <div>
            <label htmlFor="language" className="sr-only">
                {t("label")}
            </label>
            <select
                id="language"
                value={currentLocale}
                onChange={handleLocaleChange}
                className="p-2 border rounded"
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
