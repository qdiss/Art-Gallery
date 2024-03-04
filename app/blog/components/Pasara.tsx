import React from "react";

const Pasara = () => {
  return (
    <section className="flex flex-col md:flex-row items-center mt-20">
      <div className="w-full md:w-1/2 flex flex-col mb-2 md:mb-0 md:ml-10">
        <img
          src="/pasara.png"
          alt="Slika blog hero"
          className="w-full md:w-[500px] h-[500px] mx-auto md:mx-0"
        />
      </div>
      <div className="w-full md:w-1/2 px-8 md:mr-10 mt-2 md:mt-0">
        <h1 className="text-2xl mb-8 text-center md:text-left">PASARA</h1>
        <p className="text-xl">
          Kaić is a smaller boat with a rounded bottom. We distinguish between
          small (up to 4.80 m) and large ones (up to 8 m). The small boat is
          open along its entire length, and the large ones are covered by a deck
          on the front third. Sometimes they have a hatch with a cover for going
          down into the bow area. The bow is pointed, the stern is cut off and
          ends with a flat mirror. It is easy to handle and fast to paddle. It
          is suitable for driving in shallow areas and over shorter distances.
          It is used in small fishing, sport fishing and for recreation. In the
          past, they were used for angler fishing.
        </p>
      </div>
    </section>
  );
};

export default Pasara;
