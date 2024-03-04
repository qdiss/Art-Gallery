import React from "react";
import Navbar from "./navbar";
import Image from "next/image";

const BestWork = () => {
  return (
    <div className="flex flex-col bg-black w-full h-full overflow-y-hidden fixed">
      <div>
        <Navbar />

        {/* CITAVA KOMPONENTA */}
        <div className="flex items-center justify-center">
          {/* LEVA STRANA */}
          <div className="w-1/3 flex items-center ml-6 my-9">
            <Image
              src="/10.webp"
              alt="15"
              width={500}
              height={500}
              className="h-[600px] p-2 object-cover hidden lg:block"
            />
          </div>

          {/* DESNA STRANA */}
          <div className="w-2/3 h-fit">
            {/* KOLONA */}
            <div className="flex flex-col">
              {/* NASLOV */}
              <div className="flex flex-col items-center justify-center text-4xl text-white">
                <h1 className="uppercase font-light">Some of my best Work</h1>
                <Image
                  src="/traka.png"
                  alt="traka"
                  width={350}
                  height={100}
                  className="flex items-center justify-center"
                />
              </div>
              {/* PRVI RED */}
              <div className="flex flex-col items-center justify-center mt-2 md:flex-row">
                <Image
                  src="/14.webp"
                  alt="11"
                  width={200}
                  height={500}
                  className="h-[200px] p-2 object-cover"
                />
                <Image
                  src="/riba2.webp"
                  alt="12"
                  width={250}
                  height={500}
                  className="h-[200px] p-2 object-cover"
                />
                <Image
                  src="/slika2.webp"
                  alt="13"
                  width={270}
                  height={500}
                  className="h-[200px] p-2 object-cover"
                />
              </div>

              {/* DRUGI RED */}
              <div className="flex flex-col items-center justify-center md:flex-row">
                <Image
                  src="/slika5.webp"
                  alt="11"
                  width={200}
                  height={500}
                  className="h-[200px] p-2 object-cover"
                />
                <Image
                  src="/11.webp"
                  alt="12"
                  width={250}
                  height={500}
                  className="h-[200px] p-2 object-cover"
                />
                <Image
                  src="/8.webp"
                  alt="13"
                  width={270}
                  height={500}
                  className="h-[200px] p-2 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestWork;
