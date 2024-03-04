import React from "react";

const BlogHero = () => {
  return (
    <section className="flex items-center flex-col md:flex md:flex-row">
      <div className="md:w-full md:mb-0">
        <img
          src="/ribar.png"
          alt="Slika blog hero"
          className="w-full h-auto mx-0 "
        />
      </div>
      <div className="w-full md:w-1/2 mx-auto px-8 md:px-4">
        <p className="text-5xl md:text-6xl mb-2 text-center uppercase">
          Traditional <br /> Dalmatian <br /> Boats
        </p>
        <img src="/traka.png" alt="Traka" className="mx-auto w-48 lg:w-72" />
      </div>
    </section>
  );
};

export default BlogHero;
