/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ImageInfo {
  src: string;
  date: string;
  name: string;
  price: string;
  width: number;
  height: number;
}

const CarouselSix = (): JSX.Element => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const imageInfoArray: ImageInfo[] = [
    {
      src: "/19.jpg",
      date: "September 2023",
      name: "batana",
      price: "On request",
      width: 600,
      height: 280,
    },
  ];

  const openFullscreen = (src: string) => {
    setFullscreenImage(src);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <div className="relative lg:fixed">
      <img
        src="/podloga1.webp"
        alt="Podloga"
        className="object-cover w-full lg:block hidden"
        height={720}
        width={1920}
      />
      <div className="flex flex-col items-center justify-center absolute top-0 left-0 right-0 mx-20 gap-x-8 lg:flex-row overflow-y-hidden">
        {imageInfoArray.map((imageInfo, index) => (
          <div
            key={index}
            className={`relative ${
              index === 0 || index === imageInfoArray.length - 1
                ? "py-11 lg:py-16"
                : "pl-0"
            }`}
          >
            <Image
              src={imageInfo.src}
              alt={`Slika ${index + 1}`}
              width={imageInfo.width}
              height={imageInfo.height}
              className="object-cover cursor-pointer drop-shadow-2xl shadow-black"
              onClick={() => openFullscreen(imageInfo.src)}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        ))}
      </div>

      {fullscreenImage && (
        <div
          className="fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-100 flex items-center justify-center p-4"
          onClick={closeFullscreen}
        >
          <div className="relative flex flex-col items-center justify-center w-full h-full text-white lg:flex lg:flex-row">
            <div className="relative w-full lg:w-3/4 h-full max-w-[100vw] max-h-[100vh]">
              <Image
                src={fullscreenImage}
                alt="Fullscreen Image"
                layout="fill"
                objectFit="contain"
                className="drop-shadow-2xl"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
            <div className="relative w-full lg:w-1/4 h-full p-4 flex flex-col items-center justify-center">
              {imageInfoArray.map((imageInfo, index) => {
                if (imageInfo.src === fullscreenImage) {
                  return (
                    <div key={index}>
                      <div className="absolute top-0 right-0 mt-4 mr-4 hidden lg:block">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={closeFullscreen}
                        >
                          <X className="w-5 h-5" />
                        </Button>
                      </div>
                      <div className="mx-0 lg:mx-0 w-full 2xl:w-96 font-light">
                        <p className="mb-2 w-full lg:mb-1 2xl:ml-[-20px] text-sm 2xl:text-xl">
                          Name: <strong>{imageInfo.name}</strong>
                        </p>
                        <p className="mb-2 w-full lg:mb-1 2xl:ml-[-20px] text-sm 2xl:text-xl">
                          Date: <strong>{imageInfo.date}</strong>
                        </p>
                        <p className="mb-2 w-full lg:mb-1 2xl:ml-[-20px] text-sm 2xl:text-xl">
                          Price: <strong>{imageInfo.price}</strong>
                        </p>
                        <p className="mb-2 w-full lg:mb-1 2xl:ml-[-20px] text-sm 2xl:text-xl">
                          Mail:{" "}
                          <strong>
                            <Link href="mailto:edo.opanovic@gmail.com">
                              edo.opanovic@gmail.com
                            </Link>
                          </strong>
                        </p>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarouselSix;
