import { getRequestConfig } from "next-intl/server";

import { defaultLocale } from "./locales";
import { getUserLocale } from "@/i18n/server";

export default getRequestConfig(async () => {
  const locale = (await getUserLocale()) || defaultLocale;

  try {
    return {
      locale,
      messages: (await import(`@/messages/${locale}.json`)).default,
    };
  } catch (error) {
    console.error(
      `Missing translation file for locale: ${locale}. Falling back to ${defaultLocale}.`,
    );
    return {
      locale: defaultLocale,
      messages: (await import(`@/messages/${defaultLocale}.json`)).default,
    };
  }
});
