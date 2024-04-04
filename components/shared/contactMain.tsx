import { Globe, Mail, MapPin, Phone } from "lucide-react";

import Link from "next/link";
import Image from "next/image";

import initTranslations from "@/app/i18n";

import Navigation from "@/app/[locale]/components/navigation";

export default async function Contact({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t, resources } = await initTranslations(locale, ["contact"]);
  return (
    <section className="bg-black h-full">
      <title>Contact Edo Opanovic</title>
      <div className="w-full h-full bg-black text-white relative">
        <Navigation params={{ locale }} />

        <div className="flex items-center justify-between mx-0 h-[45px] bg-[#656565]">
          <h1 className="font-light text-2xl lg:ml-[90px] md:ml-10 ml-6 text-white">
            {t("contact:contact")}
          </h1>
        </div>

        <div className="w-full flex items-center justify-center flex-col">
          <h1 className="font-normal text-white text-center mt-10 text-4xl">
            {t("contact:contact")}
          </h1>
          <img
            src="/traka.png"
            alt="Traka"
            className="mx-auto w-[30%] md:w-[14%]"
          />
        </div>

        <section className="bg-black flex items-center justify-between flex-col md:flex-row">
          <div className="md:w-1/2 md:mr-8 max-w-full ">
            <Image
              src="/edo.svg"
              alt="Edo Opanovic"
              width={450}
              height={400}
              className=" border-none max-w-full md:ml-32"
            />
          </div>
          <div className="md:w-1/2 md:ml-8 z-10">
            <div className="flex flex-col items-center md:items-start space-y-10 mt-8 mb-5 md:mt-0">
              <h1 className="font-bold text-4xl">{t("contact:artist")}</h1>
              <div className="flex flex-col items-start justify-center md:items-start space-y-10 mt-8 mb-5 md:mt-0">
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <p>{t("contact:address")}</p>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <p>Email:</p>
                  <Link href="mailto: info@fine-art-of-dalmatia.com">
                    info@fine-art-of-dalmatia.com
                  </Link>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <p>
                    E-mail:{" "}
                    <Link href="mailto:info@dalmatinske-vizure.com">
                      info@dalmatinske-vizure.com
                    </Link>
                  </p>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Globe className="w-5 h-5" />
                  <p>Web: dalmatinske-vizure.com</p>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Globe className="w-5 h-5" />
                  <p>Web: fine-art-of-dalmatia.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="ml-8 absolute top-[150px] left-[45%] z-0 hidden md:block overflow-hidden">
          <Image
            src="/karta.svg"
            alt="Karta"
            width={750}
            height={450}
            className=" border-none mt-10 max-w-full md:ml-8 2xl:mt-0  object-scale-down"
          />
        </div>
      </div>
    </section>
  );
}
