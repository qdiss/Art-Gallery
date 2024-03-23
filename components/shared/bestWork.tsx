import React, { useState } from "react";
import Navbar from "./navbar";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navbarLink } from "@/constants";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import LanguageChanger from "./LanguageChanger";

export default function BestWork() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col bg-black w-full h-full lg:w-screen">
      <div>
        <NavbarWork />
        {/* CITAVA KOMPONENTA */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:fixed lg:w-screen">
          {/* LEVA STRANA */}
          <div className="w-full lg:w-1/3 flex items-center ml-6 my-9">
            <Image
              src="/10.webp"
              alt="15"
              width={500}
              height={500}
              className="h-[600px] p-2 object-cover hidden lg:block"
            />
          </div>

          {/* DESNA STRANA */}
          <div className="w-full lg:w-2/3 mx-0 lg:ml-32">
            {/* KOLONA */}
            <div className="flex flex-col">
              {/* NASLOV */}
              <div className="flex flex-col items-center justify-center text-2xl text-white lg:text-4xl">
                <h1 className="uppercase font-light">{t("header")}</h1>
                <Image
                  src="/traka.png"
                  alt="traka"
                  width={250}
                  height={100}
                  className="flex items-center justify-center mt-2 lg:mb-4"
                />
              </div>
              {/* PRVI RED */}
              <div className="flex flex-col lg:flex-row items-center justify-center">
                <Image
                  src="/14.webp"
                  alt="11"
                  width={270}
                  height={500}
                  className="h-[250px] p-2 object-cover mt-4 lg:mt-0"
                />
                <Image
                  src="/riba2.webp"
                  alt="12"
                  width={270}
                  height={500}
                  className="h-[250px] p-2 object-cover"
                />
                <Image
                  src="/slika2.webp"
                  alt="13"
                  width={270}
                  height={500}
                  className="h-[250px] p-2 object-cover"
                />
              </div>

              {/* DRUGI RED */}
              <div className="flex flex-col lg:flex-row items-center justify-center">
                <Image
                  src="/slika5.webp"
                  alt="11"
                  width={270}
                  height={500}
                  className="h-[250px] p-2"
                />
                <Image
                  src="/11.webp"
                  alt="12"
                  width={270}
                  height={500}
                  className="h-[250px] p-2 object-cover"
                />
                <Image
                  src="/8.webp"
                  alt="13"
                  width={270}
                  height={500}
                  className="h-[250px] p-2 object-cover mb-6 lg:mb-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function NavbarWork() {
  const { t } = useTranslation("common");
  const [active, setActive] = useState(false);
  const [showGalleryOptions, setShowGalleryOptions] = useState<boolean>(false);

  const toggleSidebar = () => {
    setActive(!active);
  };

  const handleMouseEnter = () => {
    setShowGalleryOptions(true);
  };

  const handleMouseLeave = () => {
    setShowGalleryOptions(false);
  };

  const handleGalleryClick = () => {
    setShowGalleryOptions(!showGalleryOptions);
  };

  return (
    <header className="bg-black text-white flex items-center justify-between w-full px-4 md:px-8 md:py-2 z-100">
      <div className="flex items-center justify-center max-sm:p-2 max-md:p-2">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
        </Link>
        <Link href="/">
          <div className="flex items-center justify-center flex-col ml-4 font-light">
            <p className="text-2xl">{t("fineArt")}</p>
            <p className="text-lg uppercase">{t("art")}</p>
          </div>
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden ml-auto">
        <Sheet>
          <SheetTrigger>
            <Image
              src="/menu.svg"
              alt="menu"
              width={24}
              height={24}
              className="cursor-pointer md:w-8 md:h-8 w-8 h-8"
              onClick={toggleSidebar}
            />
          </SheetTrigger>
          <SheetContent className="w-52 bg-black text-white">
            <ul className="md:flex flex flex-col items-center justify-center gap-4 p-0">
              {navbarLink.map((link, index) => (
                <li
                  key={index}
                  className="font-light mr-5 relative"
                  onMouseEnter={link.subLinks ? handleMouseEnter : undefined}
                  onMouseLeave={link.subLinks ? handleMouseLeave : undefined}
                >
                  <Link href={link.route} replace>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={
                        link.label === "Gallery"
                          ? handleGalleryClick
                          : undefined
                      }
                    >
                      {link.label}
                    </Button>
                  </Link>
                  {link.subLinks &&
                    showGalleryOptions &&
                    link.label === "Gallery" && (
                      <div className="flex flex-col items-start absolute top-full left-0 bg-black p-2 max-h-[300px] text-white z-50">
                        {link.subLinks.map((subLink, subIndex) => (
                          <Link key={subIndex} href={subLink.route}>
                            <Button size="subNavSheet" variant="ghost">
                              {subLink.label}
                            </Button>
                          </Link>
                        ))}
                      </div>
                    )}
                </li>
              ))}
            </ul>
            <LanguageChanger />
          </SheetContent>
        </Sheet>
      </div>

      <nav className="z-100">
        <ul className="hidden lg:flex items-center p-0">
          <div className="flex items-center justify-center mt-1.5 mr-1">
            <LanguageChanger />
          </div>
          {navbarLink.map((link, index) => (
            <li
              key={index}
              className="font-light mr-5 relative"
              onMouseEnter={link.subLinks ? handleMouseEnter : undefined}
              onMouseLeave={link.subLinks ? handleMouseLeave : undefined}
            >
              <Link href={link.route} replace>
                <Button variant="ghost" size="navigation">
                  {link.label}
                </Button>
              </Link>
              {link.subLinks && showGalleryOptions && (
                <div className="flex flex-col items-start absolute top-full left-0 bg-white p-1 max-h-[300px] text-black z-50">
                  {link.subLinks.map((subLink, subIndex) => (
                    <Link key={subIndex} href={subLink.route}>
                      <Button size="subNav" variant="ghost">
                        {subLink.label}
                      </Button>
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
