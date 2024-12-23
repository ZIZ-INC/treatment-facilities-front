import {useTranslations} from "next-intl";

export function Footer() {
    const t = useTranslations("uiLayout.footer");

    return (
        <div className="flex items-center justify-center gap-2 h-full border-t">
            <span>{t("createdBy")}</span>
            <span>{new Date().getFullYear()}</span>
        </div>
    )
}
