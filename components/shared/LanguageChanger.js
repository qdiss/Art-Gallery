"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import Image from "next/image";

export default function LanguageChanger() {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const active = currentPathname === "/";

  const handleChange = (newLocale) => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <div className="inline-block relative mt-[8px] space-x-4 mr-5">
      <button
        onClick={() => handleChange("hr")}
        className={`mr-2 ${currentLocale === "hr" ? "font-bold" : ""}`}
      >
        <Image
          src="/hr.svg"
          alt="Hrvatski"
          width={24}
          height={24}
          className="rounded-sm"
        />
      </button>

      <button
        onClick={() => handleChange("en")}
        className={`mr-2 ${currentLocale === "en" ? "font-bold" : ""}`}
      >
        <Image
          src="/en.svg"
          alt="English"
          width={24}
          height={24}
          className="rounded-sm"
        />
      </button>
    </div>
  );
}
