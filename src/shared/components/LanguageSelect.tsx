"use client";

import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { defaultLocale, Locale, locales } from "@/locales/config/locales";
import { getUserLocale, setUserLocale } from "@/locales/config/server";
import { cn } from "@/shared/lib/utils";
import { Label } from "@/shared/components/ui/label";
import {
    Select as ShadCnSelect,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
} from "@/shared/components/ui/select";

interface LanguageSelectorProps {
    className?: string;
    labelClassName?: string;
    wrapperClassName?: string;
}

export function LanguageSelect({
    className,
    labelClassName,
    wrapperClassName,
}: LanguageSelectorProps) {
    const t = useTranslations("shared.components.LanguageSelect");
    const [currentLocale, setCurrentLocale] = useState(defaultLocale);
    const router = useRouter();

    useEffect(() => {
        (async () => {
            const locale = await getUserLocale();
            setCurrentLocale(locale);
        })();
    }, []);

    const handleLocaleChange = async (locale: Locale) => {
        await setUserLocale(locale); // Save the selected locale
        setCurrentLocale(locale); // Update the state
        router.refresh(); // Refresh the page to apply the new locale
    };

    return (
        <div className={cn(wrapperClassName, "flex items-center h-10 gap-2")}>
            <Label
                htmlFor="language"
                className={cn("text-primaryColor font-medium", labelClassName)}
            >
                {t("label")}
            </Label>
            <ShadCnSelect value={currentLocale} onValueChange={handleLocaleChange}>
                <SelectTrigger
                    className={cn(
                        "p-2 border rounded text-sm",
                        className
                    )}
                >
                    <SelectValue placeholder={t(currentLocale)} />
                </SelectTrigger>
                <SelectContent>
                    {locales.map((locale) => (
                        <SelectItem key={locale} value={locale}>
                            {t(locale)}
                        </SelectItem>
                    ))}
                </SelectContent>
            </ShadCnSelect>
        </div>
    );
}
