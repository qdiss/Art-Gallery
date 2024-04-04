"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import Navbar from "@/components/shared/navbar";

import OtherCarouselOne from "@/app/[locale]/gallery/rest/_components/otherCarouselOne";
import OtherCarouselTwo from "@/app/[locale]/gallery/rest/_components/otherCarouselTwo";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Rest() {
  const { t } = useTranslation("common");
  const [activeCarousel, setActiveCarousel] =
    useState<string>("otherCarouselOne");

  const handleCarouselChange = (direction: string) => {
    setActiveCarousel((prevActive: string) => {
      const carouselMap: Record<string, string> = {
        otherCarouselOne:
          direction === "right" ? "otherCarouselTwo" : "otherCarouselOne",
        otherCarouselTwo:
          direction === "left" ? "otherCarouselOne" : "OtherCarouselTwo",
      };
      return carouselMap[prevActive];
    });
  };

  const showArrowLeft: boolean = activeCarousel !== "otherCarouselOne";
  const showArrowRight: boolean = activeCarousel !== "otherCarouselTwo";

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
          <div className="flex items-center justify-center gap-x-2.5 w-[1px] h-4 rotate-12 bg-gray-500"></div>
          <div className="flex items-center space-x-2.5">
            {showArrowLeft && (
              <ArrowLeft
                className="cursor-pointer w-4 h-4"
                onClick={() => handleCarouselChange("left")}
              />
            )}
            {showArrowRight && (
              <ArrowRight
                className="cursor-pointer w-4 h-4"
                onClick={() => handleCarouselChange("right")}
              />
            )}
          </div>
        </div>
      </div>

      <div>
        {activeCarousel === "otherCarouselOne" && <OtherCarouselOne />}
        {activeCarousel === "otherCarouselTwo" && <OtherCarouselTwo />}
      </div>
    </div>
  );
}
