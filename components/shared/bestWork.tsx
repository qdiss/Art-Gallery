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
    <div className="mx-auto flex flex-col bg-black w-full h-full lg:w-screen text-white">
      <NavbarWork />
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <Image
          src="/10.webp"
          alt="Wooden Boat"
          width={400}
          height={300}
          className="2xl:w-[500px] 2xl:h-[620px] w-[400px] h-[500px] object-cover pt-2 hidden lg:block mr-0 ml-20"
        />
        <div className="flex flex-col items-center justify-center text-2xl text-white lg:text-4xl mr-2">
          <div className="flex items-center justify-center flex-col">
            <h1 className="uppercase font-light mt-9">{t("header")}</h1>
            <Image
              src="/traka.png"
              alt="traka"
              width={350}
              height={100}
              className="flex items-center justify-center mt-2 lg:mb-4"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 w-fit gap-2">
            <Image
              src="/10.webp"
              alt="11"
              width={240}
              height={500}
              className="h-[200px] mt-4 lg:hidden"
            />
            <Image
              src="/14.webp"
              alt="11"
              width={240}
              height={500}
              className="h-[200px] object-cover w-full"
            />
            <Image
              src="/riba2.webp"
              alt="12"
              width={280}
              height={500}
              className="h-[200px]"
            />
            <Image
              src="/slika2.webp"
              alt="13"
              width={240}
              height={500}
              className="h-[200px] object-cover "
            />
            <Image
              src="/slika5.webp"
              alt="11"
              width={300}
              height={500}
              className="h-[200px] w-full object-cover"
            />
            <Image
              src="/11.webp"
              alt="12"
              width={280}
              height={500}
              className="h-[200px]"
            />
            <Image
              src="/8.webp"
              alt="13"
              width={240}
              height={500}
              className="h-[200px] object-cover mb-6 lg:mb-0"
            />
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
            <p className="text-2xl">Fine Art of Dalmatia</p>
            <p className="text-lg uppercase">Digital Art</p>
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
                <div className="flex flex-col items-start absolute top-full left-0 bg-white max-h-[300px] text-black z-50">
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
