"use client";

import BestWork from "@/components/shared/bestWork";
import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import MainHero from "./hero";

export default function Carousel() {
  const [activeCarousel, setActiveCarousel] = useState<string>("hero");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCarousel((prevActive: string) => {
        return prevActive === "hero" ? "bestWork" : "hero";
      });
    }, 5000); //Promenite broj u milisekundama prema potrebi (ovde svakih 10 sekundi)

    return () => clearInterval(interval);
  }, []); //Prazno polje kao zavisnost osigurava da se useEffect izvršava samo prilikom montiranja komponente

  return (
    <div className="relative">
      <div className="w-full h-full">
        <Transition
          show={activeCarousel === "hero"}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <MainHero />
        </Transition>
        <Transition
          show={activeCarousel === "bestWork"}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <BestWork />
        </Transition>
      </div>
    </div>
  );
}
