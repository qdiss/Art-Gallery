import React from "react";

const Gajeta = () => {
  return (
    <section className="flex flex-col md:flex-row items-center mt-20">
      <div className="w-full md:w-1/2 flex flex-col mb-2 md:mb-0 md:ml-10">
        <img
          src="/gajeta.png"
          alt="Slika blog hero"
          className="w-full md:w-[500px] h-[500px] mx-auto md:mx-0"
        />
      </div>
      <div className="w-full md:w-1/2 px-8 md:mr-10 mt-2 md:mt-0">
        <h1 className="text-2xl mb-8 text-center md:text-left">GAJETA</h1>
        <p className="text-xl">
          The Betin gajeta is a wooden boat between 5 and 8 meters long, 2 to
          2.60 meters wide, without a deck along its entire length. It is more
          robust in form and construction than Komi falkuša or Korčula gajeta.
          The Bettina shipbuilders managed to innovate on the gajeta, originally
          a fishing boat, to achieve the proportions and form of a ship that was
          perfectly adapted to the life needs and rural economy of the
          inhabitants of the island of Murter.
        </p>
        <p className="text-xl mt-2">
          The primary function of the gajeta was the transport of various types
          of cargo (food, agricultural products, animals, building materials).
          The size of the Gajeta is a family boat, and all crew members had to
          know how to operate it. Women often left on their own by boat for
          work. Gajeta was also used for fishing. A boat tailored to the
          inhabitants of the island of Murter had to be, first of all, a
          capable, safe and durable means of transport.
        </p>
        <p className="text-xl mt-2">
          Betin shipbuilding differs from other shipbuilding typologically the
          same or similar ships, and has its own recognizable specificities.
        </p>
      </div>
    </section>
  );
};

export default Gajeta;
