import initTranslations from "@/app/i18n";
import React from "react";

export default async function Gajeta({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t, resources } = await initTranslations(locale, ["blog"]);
  return (
    <section className="flex flex-col md:flex-row items-center mt-20">
      <div className="w-full md:w-1/2 flex flex-col mb-2 md:mb-0 md:ml-10">
        <img
          src="/gajeta.png"
          alt="Slika blog hero"
          className="w-full md:w-[500px] h-[500px] mx-auto md:mx-0"
        />
      </div>
      <div className="w-full md:w-1/2 px-8 md:mr-10 mt-2 md:mt-0">
        <h1 className="text-2xl mb-8 text-center md:text-left">GAJETA</h1>
        <p className="text-xl">{t("blog:gajeta1")}</p>
        <p className="text-xl mt-2">{t("blog:gajeta2")}</p>
        <p className="text-xl mt-2">{t("blog:gajeta3")}</p>
      </div>
    </section>
  );
}
