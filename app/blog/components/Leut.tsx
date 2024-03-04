import React from "react";

const Leut = () => {
  return (
    <section className="flex flex-col md:flex-row items-center mt-20">
      <div className="w-full md:w-1/2 flex flex-col mb-2 md:mb-0 md:ml-10">
        <img
          src="/leut.png"
          alt="Slika blog hero"
          className="w-full md:w-[500px] h-[500px] mx-auto md:mx-0"
        />
      </div>
      <div className="w-full md:w-1/2 px-8 md:mr-10 mt-2 md:mt-0">
        <h1 className="text-2xl mb-8 text-center md:text-left">LEUT</h1>
        <p className="text-xl">
          Leut is a larger ship with exceptional maritime characteristics. The
          length of the leut ranges from 7 to 12 m, the width is approximately
          1/3 of the length. According to the length, leuti can be divided into
          small (up to 8.5 m) and large (up to 12 m). The hull of the leuta has
          a sharp shape, with properly drawn lines on the bow and stern. In its
          main characteristics, it resembles a gajeta, but it is larger than it,
          more solidly built and with sharp underwater lines. On the bow, at the
          height of the deck, there is a built-in short bow, the so-called a
          spier that is used for going down to the shore. A leut, unlike a
          gajeta, is a closed type of ship. Its characteristic is the spire
          (beak) on the bow of the ship, which is longer in shorter ships and
          shorter in longer ships. It serves for easier disembarking and loading
          of crew and cargo, especially in places with a shallow coast. The leut
          can drive 5, 7 or 9 oarsmen, depending on the proportions of the ship.
          A Latin sail is also used as a means of propulsion. Leuti can
          withstand wind and waves well. They have a general use. In the Murter
          water area, they are used for the transport of various cargoes and
          fishing.
        </p>
      </div>
    </section>
  );
};

export default Leut;
