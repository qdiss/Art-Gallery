"use server";

import React from "react";
import Image from "next/image";
import initTranslations from "@/app/i18n";

export default async function BlogHero({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t, resources } = await initTranslations(locale, ["blog"]);

  return (
    <section className="flex items-center flex-col md:flex md:flex-row mt-24 lg:mt-8">
      <div className="md:w-full md:mb-0">
        <img
          src="/ribar.png"
          alt="Slika blog hero"
          className="w-full h-auto mx-0 "
        />
      </div>
      <div className="w-full md:w-1/2 mx-auto px-8 md:px-4">
        <p className="text-5xl md:text-6xl mb-2 text-center uppercase">
          {t("blog:blogHero1")} <br />
        </p>
        <p className="text-5xl md:text-6xl mb-2 text-center uppercase">
          {t("blog:blogHero2")} <br />
        </p>
        <p className="text-5xl md:text-6xl mb-2 text-center uppercase">
          {t("blog:blogHero3")}
        </p>
        <img src="/traka.png" alt="Traka" className="mx-auto w-48 lg:w-72" />
      </div>
    </section>
  );
}
