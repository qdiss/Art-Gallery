"use client";

import OtherCarouselOne from "@/app/[locale]/gallery/rest/_components/otherCarouselOne";
import Navbar from "@/components/shared/navbar";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Rest() {
  const { t } = useTranslation("common");
  return (
    <div className="m-0 w-full z-20">
      <title>Edo Opanovic All Other Gallery</title>
      <Navbar />

      {/* Siva traka */}
      <div className="flex items-center justify-between mx-0 h-[44px] bg-[#656565] z-90">
        <h1 className="font-light text-2xl lg:ml-[90px] md:ml-10 ml-6 text-white">
          {t("gallery")}
        </h1>
        <div className="flex items-center justify-center gap-x-2.5 h-[60px] lg:mr-16 md:mr-8 mr-4 text-white">
          <h1 className="font-light text-white text-2xl">{t("other")}</h1>
        </div>
      </div>

      <OtherCarouselOne />
    </div>
  );
}
