import React from "react";

const Batana = () => {
  return (
    <section className="flex flex-col md:flex-row items-center mt-20">
      <div className="w-full md:w-1/2 flex flex-col mb-2 md:mb-0 md:ml-10">
        <img
          src="/batana.png"
          alt="Slika blog hero"
          className="w-full md:w-[500px] h-[500px] mx-auto md:mx-0"
        />
      </div>
      <div className="w-full md:w-1/2 px-8 md:mr-10 mt-2 md:mt-0">
        <h1 className="text-2xl mb-8 text-center md:text-left">BATANA</h1>
        <p className="text-xl">
          Betin&#39;s boat is a wooden boat with a flat bottom, with a wide
          wooden mirror at the stern. Compared to other naves, the Betina one
          has a mirror that is only slightly less wide than the width of the
          nave itself. The length of the smaller ships is from 4 to 5 meters,
          and the larger ones from 5 to 7 meters and are called lađuni. The flat
          bottom is curved towards the bow frame.
        </p>
        <p className="text-xl mt-2">
          Some boats are made with a V-shaped bottom. The proven loom is
          straight and slanted forward. The ratio of length to width is greater
          than 1:3, by an average of ten centimeters.
        </p>
        <p className="text-xl mt-2">
          The means of propulsion are two oars in soha, which are placed around
          the middle of the ship. On the upper edge of the transom, a shallow
          depression is made on one side for rowing with one oar. This way of
          rowing is called gungula.
        </p>
        <p className="text-xl mt-2">
          There is an open and a closed type of ship. Covered, they have a deck
          on 1/3 of the bow. Due to the flat bottom, it sails successfully in
          shallow waters. It serves mostly for fishing and leisure in the summer
          months.
        </p>
      </div>
    </section>
  );
};

export default Batana;
