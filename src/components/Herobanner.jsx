import Image from "next/image";
import React from "react";

function Herobanner({ imgUri, title }) {
  return (
    <div className="w-full h-80 relative ">
      <Image
        src={imgUri}
        alt="pandit JIii"
        className="w-full h-full object-cover -z-10 "
        width={100}
        height={200}
        placeholder="blur"
        blurDataURL={imgUri}
        style={{
          filter: "brightness(50%) blur(2px)",
        }}
      />
      <div className="absolute top-32 left-[25%] md:left-[35%]">
        <h2 className="text-3xl md:text-6xl text-white font-bold z-10">
          {title}
        </h2>
      </div>
    </div>
  );
}

export default Herobanner;
