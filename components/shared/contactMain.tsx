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

          <Image
            src="/slika1.webp"
            alt="Slika1"
            width={200}
            height={100}
            className="my-2"
          />
        </div>

        <section className="bg-black flex items-center justify-between flex-col md:flex-row">
          <div className="md:w-1/2 md:mr-8 max-w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5746.102256998282!2d15.444977801147939!3d43.937615505440284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1334cacff9152fc7%3A0x8d6a7b4b2ff116bd!2sTown%20of%20Biograd!5e0!3m2!1sen!2sba!4v1707429486738!5m2!1sen!2sba"
              width="650"
              height="400"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-none mt-10 max-w-full md:ml-8 2xl:w-[750px] 2xl:h-[450px] 2xl:mt-0"
            ></iframe>
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
                  <Phone className="w-5 h-5" />
                  <p>{t("contact:phone")}</p>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <p>
                    E-mail:{" "}
                    <Link href="mailto:edo.opanovic@gmail.com">
                      edo.opanovic@gmail.com
                    </Link>
                  </p>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Globe className="w-5 h-5" />
                  <p>Web: edo-opannovic.hr</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="ml-8 absolute top-96 left-[45%] z-0 hidden md:block overflow-hidden">
          <Image
            src="/karta.png"
            alt="Karta"
            width={750}
            height={450}
            className=" border-none mt-10 max-w-full md:ml-8 2xl:w-[850px] 2xl:h-[750px] 2xl:mt-0  object-scale-down"
          />
        </div>
      </div>
    </section>
  );
}
