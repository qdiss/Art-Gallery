"use client";

import { useState } from "react";
import Navbar from "../../../components/shared/navbar";
import { ArrowLeft, ArrowRight } from "lucide-react";

import CarouselOne from "@/app/gallery/wooden-boats/_components/carouselOne";
import CarouselTwo from "@/app/gallery/wooden-boats/_components/carouselTwo";
import CarouselThree from "@/app/gallery/wooden-boats/_components/carouselThree";
import CarouselFour from "@/app/gallery/wooden-boats/_components/carouselFour";
import CarouselFive from "@/app/gallery/wooden-boats/_components/carouselFive";
import CarouselSix from "@/app/gallery/wooden-boats/_components/carouselSix";

const WoodenBoats: React.FC = () => {
  const [activeCarousel, setActiveCarousel] = useState<string>("carouselOne");

  const handleCarouselChange = (direction: string) => {
    setActiveCarousel((prevActive: string) => {
      const carouselMap: Record<string, string> = {
        carouselOne: direction === "right" ? "carouselTwo" : "carouselOne",
        carouselTwo: direction === "left" ? "carouselOne" : "carouselThree",
        carouselThree: direction === "left" ? "carouselTwo" : "carouselFour",
        carouselFour: direction === "left" ? "carouselThree" : "carouselFive",
        carouselFive: direction === "left" ? "carouselFour" : "carouselSix",
        carouselSix: direction === "left" ? "carouselFive" : "carouselSix",
      };
      return carouselMap[prevActive];
    });
  };

  const showArrowLeft: boolean = activeCarousel !== "carouselOne";
  const showArrowRight: boolean = activeCarousel !== "carouselSix"; // Change here to check if it's carouselSix instead of carouselFive

  return (
    <div className="m-0 w-full">
      <Navbar />
      {/* Siva traka */}
      <div className="flex items-center justify-between mx-0 h-[44px] bg-[#656565]">
        <h1 className="font-light text-2xl lg:ml-[90px] md:ml-10 ml-6 text-white">
          Gallery
        </h1>
        <div className="flex items-center justify-center gap-x-2.5 h-[60px] lg:mr-16 md:mr-8 mr-4 text-white">
          <h1 className="font-light text-white text-2xl"> Wooden Boats</h1>
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
      <div className="w-full">
        {activeCarousel === "carouselOne" && <CarouselOne />}
        {activeCarousel === "carouselTwo" && <CarouselTwo />}
        {activeCarousel === "carouselThree" && <CarouselThree />}
        {activeCarousel === "carouselFour" && <CarouselFour />}
        {activeCarousel === "carouselFive" && <CarouselFive />}
        {activeCarousel === "carouselSix" && <CarouselSix />}
      </div>
    </div>
  );
};

export default WoodenBoats;
