"use client";

import Navbar from "@/components/shared/navbar";
import React from "react";
import FishCarouselOne from "./_components/fishCarouselOne";

const page = () => {
  return (
    <div className="m-0 w-full">
      <Navbar />

      {/* Siva traka */}
      <div className="flex items-center justify-between mx-0 h-[44px] bg-[#656565]">
        <h1 className="font-light text-2xl lg:ml-[90px] md:ml-10 ml-6 text-white">
          Gallery
        </h1>
        <div className="flex items-center justify-center gap-x-2.5 h-[60px] lg:mr-16 md:mr-8 mr-4 text-white">
          <h1 className="font-light text-white text-2xl">Fish</h1>
        </div>
      </div>

      <FishCarouselOne />
    </div>
  );
};

export default page;
