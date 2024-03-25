"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { navbarLink } from "@/constants";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import LanguageChanger from "./LanguageChanger";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();
  const [active, setActive] = useState(false);
  const [showGalleryOptions, setShowGalleryOptions] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setShowGalleryOptions(true);
  };

  const handleMouseLeave = () => {
    setShowGalleryOptions(false);
  };

  const handleOptionClick = () => {
    setShowGalleryOptions(false);
  };

  const handleGalleryClick = () => {
    setShowGalleryOptions(!showGalleryOptions);
  };

  const toggleSidebar = () => {
    setActive(!active);
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
            <div className="md:flex flex flex-col items-center justify-center gap-4 p-0">
              <Link href="/">
                <Button size="navigation" variant="navigation">
                  {t("home")}
                </Button>
              </Link>
              <div className="relative">
                <Link href="#">
                  <Button
                    size="navigation"
                    variant="navigation"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {t("gallery")}
                  </Button>
                </Link>
                {showGalleryOptions && (
                  <div
                    className="flex flex-col items-start absolute top-full left-0 bg-black p-1 max-h-[180px] rounded-sm text-white"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link href="/gallery/wooden-boats">
                      <Button
                        size="subNav"
                        variant="navigation"
                        onClick={handleOptionClick}
                      >
                        {t("wooden")}
                      </Button>
                    </Link>
                    <Link href="/gallery/fish">
                      <Button
                        size="subNav"
                        variant="navigation"
                        onClick={handleOptionClick}
                      >
                        {t("fish")}
                      </Button>
                    </Link>
                    <Link href="/gallery/rest">
                      <Button
                        size="subNav"
                        variant="navigation"
                        onClick={handleOptionClick}
                      >
                        {t("other")}
                      </Button>
                    </Link>
                    <Link href="/gallery/all">
                      <Button
                        size="subNav"
                        variant="navigation"
                        onClick={handleOptionClick}
                      >
                        {t("all")}
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/blog">
                <Button size="navigation" variant="navigation">
                  {t("blog")}
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="navigation" variant="navigation">
                  {t("contact")}
                </Button>
              </Link>
              <div className="mt-12">
                <LanguageChanger />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <nav className="lg:flex items-center justify-center hidden">
        <div className="flex items-center justify-center mt-1.5 mr-1">
          <LanguageChanger />
        </div>
        <Link href="/">
          <Button
            size="navigation"
            variant="navigation"
            className="hover:bg-inherit"
          >
            {t("home")}
          </Button>
        </Link>
        <div className="relative hidden lg:flex items-center p-0">
          <Link href="/gallery">
            <Button
              size="navigation"
              variant="navigation"
              className="hover:bg-inherit font-light"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {t("gallery")}
            </Button>
          </Link>
          {showGalleryOptions && (
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="flex flex-col items-start absolute top-full left-0 bg-white p-1 max-h-[300px] text-black z-50"
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
          <Button size="navigation" variant="navigation">
            {t("blog")}
          </Button>
        </Link>
        <Link href="/contact">
          <Button size="navigation" variant="navigation">
            {t("contact")}
          </Button>
        </Link>
      </nav>
    </header>
  );
}
