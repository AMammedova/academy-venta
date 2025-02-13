"use client";

import React from "react";
import { useParams, usePathname, useRouter } from "next/navigation";

export type Locale = "en" | "ru" | "az";

export default function LanguageSwitcher({ t }: { t: Record<string, string> }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const currentLang = (params?.lang ?? "en") as Locale;

  const handleLanguageChange = (newLang: Locale) => {
    if (!pathname) return;
    const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <div className="h-[50px] flex items-center justify-between border border-gray-100 shadow-md p-1 rounded-full">
      {(["az", "en", "ru"] as Locale[])?.map((lang) => (
        <button
          key={lang}
          onClick={() => handleLanguageChange(lang)}
          className={`px-[12px] py-1 rounded-full text-sm font-medium transition-colors ${
            currentLang === lang
              ? "bg-orange-500 text-white-500 shadow-md"
              : "text-black"
          }`}
        >
          {t[lang]}
        </button>
      ))}
    </div>
  );
}
