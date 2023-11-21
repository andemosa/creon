"use client";
import { useState } from "react";

import { monumentExtended, satoshiMedium } from "@/utils/local-fonts";

const Profit = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="flex flex-col gap-10 justify-between my-12 md:my-16">
      <h3
        className={`${monumentExtended.className} text-lg md:text-2xl lg:text-3xl xl:text-4xl uppercase flex flex-col w-full`}
      >
        <span className="self-start">Profiting Through</span>
        <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-purple-900 text-transparent bg-clip-text text-start self-end">
          AI Innovation & Decentralization
        </span>
      </h3>
      <div className="flex flex-col lg:flex-row gap-10 justify-between lg:items-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`w-full lg:w-2/3 mx-auto h-4/6 object-cover ${
            isVideoLoaded ? "loaded" : ""
          }`}
          onLoadedData={() => setIsVideoLoaded(true)}
          preload="none"
        >
          <source src={"./videos/profit-video.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="flex flex-col gap-2 w-full lg:w-1/3">
          <h4 className={`${satoshiMedium.className} text-xl`}>
            The dynamic community driven business model of the future.
          </h4>
          <p>
            At Creon, we blend the power of AI tools with the dynamic crypto and
            NFT markets, utilizing an innovative business model to drive
            profitability. This approach empowers our community, as our NFT and
            token holders directly benefit from the growth and prosperity of the
            Creon network, creating a win-win scenario for both our community
            and for the projects we launch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profit;
