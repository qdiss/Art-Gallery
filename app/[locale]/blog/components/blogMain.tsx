import Navigation from "../../components/navigation";

import BlogHero from "./BlogHero";
import Leut from "./Leut";
import Pasara from "./Pasara";
import Batana from "./Batana";
import Gajeta from "./Gajeta";

export default async function Blog({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <div className="relative bg-black text-white">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navigation params={{ locale }} />
        <div className="flex items-center justify-between mx-0 h-[45px] bg-[#656565]">
          <h1 className="font-light text-2xl lg:ml-[90px] md:ml-10 ml-6 text-white">
            Blog
          </h1>
        </div>
      </div>
      <div className="my-[15px]">
        <BlogHero params={{ locale }} />
        <Leut params={{ locale }} />
        <Pasara params={{ locale }} />
        <Batana params={{ locale }} />
        <Gajeta params={{ locale }} />
      </div>
    </div>
  );
}
