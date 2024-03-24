"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navbarLink } from "@/constants";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import LanguageChanger from "./LanguageChanger";
import { useTranslation } from "react-i18next";
import initTranslations from "@/app/i18n";

export default function MainHero() {
  const { t } = useTranslation();
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

  const handleOptionClick = () => {
    setShowGalleryOptions(false);
  };
  return (
    <div className="relative font-extralight lg:fixed lg:w-screen">
      <div className="absolute top-0 left-0 ml-10 mt-2 z-10 pt-2 flex flex-row">
        <Image
          src="/homeLogo.png"
          alt="logo"
          width={300}
          height={140}
          loading="eager"
          className="w-[200px] md:w-[400px] md:object-contain"
        />
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden ml-auto flex justify-center absolute top-4 right-0 mr-10 z-10 space-x-4 text-3xl">
        <Sheet>
          <SheetTrigger>
            <Image
              src="/menu-black.svg"
              alt="menu"
              width={24}
              height={24}
              className="cursor-pointer"
              onClick={toggleSidebar}
            />
          </SheetTrigger>
          <SheetContent className="max-w-52 bg-black text-white">
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
            <div className="flex items-center justify-center mt-4">
              <LanguageChanger />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <nav className="flex items-center justify-between absolute top-0 right-0 mr-20 mt-2 z-10 text-3xl">
        <LanguageChanger />
        <div className="flex flex-row items-center justify-center space-x-4">
          <Link href="/">
            <Button size="custom" variant="ghost" className="hover:bg-inherit">
              {t("home")}
            </Button>
          </Link>

          <div className="relative">
            <Link href="#">
              <Button
                size="custom"
                variant="ghost"
                className="hover:bg-inherit"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {t("gallery")}
              </Button>
            </Link>
            {showGalleryOptions && (
              <div
                className="flex flex-col items-start absolute top-full left-0 bg-white p-1 max-h-[180px] rounded-sm"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link href="/gallery/wooden-boats">
                  <Button
                    size="subNav"
                    variant="ghost"
                    onClick={handleOptionClick}
                  >
                    {t("wooden")}
                  </Button>
                </Link>
                <Link href="/gallery/fish">
                  <Button
                    size="subNav"
                    variant="ghost"
                    onClick={handleOptionClick}
                  >
                    {t("fish")}
                  </Button>
                </Link>
                <Link href="/gallery/rest">
                  <Button
                    size="subNav"
                    variant="ghost"
                    onClick={handleOptionClick}
                  >
                    {t("other")}
                  </Button>
                </Link>
                <Link href="/gallery/all">
                  <Button
                    size="subNav"
                    variant="ghost"
                    onClick={handleOptionClick}
                  >
                    {t("all")}
                  </Button>
                </Link>
              </div>
            )}
          </div>

          <Link href="/blog">
            <Button size="custom" variant="ghost" className="hover:bg-inherit">
              {t("blog")}
            </Button>
          </Link>

          <Link href="/contact">
            <Button size="custom" variant="ghost" className="hover:bg-inherit">
              {t("contact")}
            </Button>
          </Link>
        </div>
      </nav>

      <Image
        src="/hero.webp"
        alt="Full-screen Image"
        width={1600} // Adjust width to a size closer to the maximum viewport width
        height={900} // Adjust height proportionally to maintain aspect ratio (16:9)
        className="w-full h-screen sm:h-[800px] object-cover object-left-top lg:h-screen lg:w-screen"
      />
    </div>
  );
}

//TODO NAPRAVITI ZA MainHero I POSEBNO DODATI USE TRANSLATIONS
