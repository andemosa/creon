"use client";
import { useState } from "react";

import { monumentExtended, satoshiMedium } from "@/utils/local-fonts";

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <>
      <section className="w-full h-[760px] md:h-[840px] lg:h-[970px] flex flex-col relative bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`w-full h-4/6 object-cover ${
            isVideoLoaded ? "loaded" : ""
          }`}
          onLoadedData={() => setIsVideoLoaded(true)}
          preload="none"
        >
          <source src={"./videos/main-video.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute z-0 flex-shrink-0 text-white text-center w-full flex flex-col justify-center items-center top-96 bg-gradient-to-b from-transparent via-black to-black ">
          <div className="w-11/12 lg:w-5/6 max-w-7xl flex flex-col gap-4 justify-center items-center">
            <h2
              className={`text-2xl self-start md:text-5xl lg:text-6xl uppercase  text-start flex justify-center leading-tight ${monumentExtended.className}`}
            >
              The world&apos;s first platform for Tokenizing AI blockchain
              projects
            </h2>
            <h3
              className={`custom-border self-start py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-left text-base md:text-lg ${satoshiMedium.className}`}
            >
              Creon «Create On» confidential AI Tools for granting access
              through NFTs.
            </h3>
          </div>
        </div>
        <div className="absolute inset-0 b from-black via-blue-500 to-purple-900 mix-blend-soft-light"></div>
      </section>
    </>
  );
};

export default Hero;
