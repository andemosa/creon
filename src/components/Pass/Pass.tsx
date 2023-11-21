"use client";
import { useState } from "react";

import { monumentExtended, satoshiMedium } from "@/utils/local-fonts";

const Pass = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="flex flex-col lg:flex-row gap-10 justify-between my-12 md:my-16">
      <div className="flex flex-col gap-4 lg:w-1/2">
        <h2
          className={`${monumentExtended.className} text-2xl md:text-3xl lg:text-4xl uppercase`}
        >
          creon pass nft
        </h2>
        <h4
          className={`${satoshiMedium.className} bg-gradient-to-r from-blue-500 via-purple-600 to-purple-900 text-transparent bg-clip-text md:text-lg lg:text-xl`}
        >
          The Creon NFT pass unlocks access to AI projects, the Creon launchpad,
          and a ticket to generate passive income through AI-driven tools
        </h4>
        <div className={`lg:flex flex-col gap-4 hidden`}>
          <p>
            Prospect to derive financial benefits through the redistributed
            profit generated from AI tools, but only when the majority of NFT
            holders decide to release the tool publicly.
          </p>
          <div className="flex gap-4 justify-between xl:flex-col">
            <p>
              The possibility of allocating investments into new, exceptional
              tokenized AI tools through Creon Launchpad.
            </p>
            <p>
              Early access to allocations in inspiring tokenized projects, real
              businesses based on AI.
            </p>
          </div>
        </div>
        <button className="hidden btn relative lg:inline-flex items-center justify-start overflow-hidden transition-all bg-gradient-to-r from-blue-500 via-purple-600 to-purple-900 hover:bg-white group px-2 py-2 rounded-lg">
          <span className="w-0 h-0 rounded bg-blue-500 absolute top-0 left-0 bottom-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
          <span className="w-full transition-colors duration-300 ease-in-out group-hover:text-white z-10">
            Buy Creon Pass
          </span>
        </button>
      </div>
      <div className="flex flex-col sm:flex-row-reverse gap-4 lg:w-1/2">
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`w-full sm:w-1/2 lg:w-full mx-auto object-cover ${
            isVideoLoaded ? "loaded" : ""
          }`}
          onLoadedData={() => setIsVideoLoaded(true)}
          preload="none"
        >
          <source src={"./videos/creon-pass-vid.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={`lg:hidden flex flex-col gap-4`}>
          <div className="flex flex-col gap-4 text-sm">
            <p>
              Prospect to derive financial benefits through the redistributed
              profit generated from AI tools, but only when the majority of NFT
              holders decide to release the tool publicly.
            </p>
            <div className="flex gap-4 justify-between sm:flex-col">
              <p>
                The possibility of allocating investments into new, exceptional
                tokenized AI tools through Creon Launchpad.
              </p>
              <p>
                Early access to allocations in inspiring tokenized projects,
                real businesses based on AI.
              </p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-blue-500 via-purple-600 to-purple-900 px-2 py-2 rounded-lg w-full">
            Buy Creon Pass
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pass;
