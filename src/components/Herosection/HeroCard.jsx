import React from "react";

const HeroCard = () => {
  return (
    <section
      className="max-w-300 mx-auto relative w-full overflow-hidden rounded-2xl flex flex-col items-center text-center py-12 px-4"
      style={{
        background: "linear-gradient(120deg, #0a0f1e 60%, #1a1035 100%)",
      }}
    >
      
      <div
        className="absolute right-0 top-0 w-64 h-full opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at right, #c2410c, transparent 70%)",
        }}
      />

  
      <img
        src="https://i.ibb.co.com/k6JncHvb/image-1.png"
        alt="Cricket"
        className="w-28 object-contain drop-shadow-2xl mb-4"
      />

      <h1 className="text-white font-extrabold text-2xl md:text-3xl leading-tight max-w-2xl">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>

      <p className="text-gray-400 text-sm mt-2">
        Beyond Boundaries · Beyond Limits
      </p>

      <button className="mt-6 px-6 py-2 font-bold text-sm rounded-md border-2 border-yellow-400 text-black bg-green-300 hover:scale-105 transition-transform">
        Claim Free Credit
      </button>
    </section>
  );
};

export default HeroCard;
