import { createTranslator } from "next-intl";
import enMessages from "@/messages/en.json";
import ruMessages from "@/messages/ru.json";
import { defaultLocale, Locale } from "@/i18n/locales";
import { getUserLocale } from "@/i18n/server";

const messages = {
  en: enMessages,
  ru: ruMessages,
};

export const getTranslator = async (locale?: Locale) => {
  if (!locale) {
    locale = (await getUserLocale()) as Locale;
  }
  const translations = messages[locale] || messages[defaultLocale]; // Default to 'en' if locale is unavailable
  return createTranslator({ locale, messages: translations });
};
