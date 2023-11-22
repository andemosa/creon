"use client";
import Image from "next/image";

import { monumentExtended } from "@/utils/local-fonts";

import { AccordionComp } from "./AccordionComp";

import vision from "./images/creon-vision.webp";

const Mission = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-6 justify-between mb-4">
      <div className="flex flex-col w-full lg:w-1/2 relative">
        <p
          className={`${monumentExtended.className} text-lg md:text-2xl lg:text-3xl xl:text-4xl uppercase`}
        >
          Our vision is to
          <br className="hidden md:block" /> support the innovation of AI
          blockchain projects&nbsp;
          <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-purple-900 text-transparent bg-clip-text">
            while prioritizing communities and democratizing
            <br className="hidden md:block" /> profits
          </span>
        </p>
        <div className="w-full flex items-center justify-center sm:hidden lg:flex">
          <Image src={vision} alt="mission" placeholder="blur" className="w-3/4 ml-auto sm:w-full" />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex ">
        <div className="w-full sm:1/2">
          <AccordionComp />
        </div>
        <div className="hidden sm:flex w-1/2 justify-center items-end lg:hidden">
          <Image src={vision} alt="mission" placeholder="blur" className="w-full h-1/2" />
        </div>
      </div>
    </section>
  );
};

export default Mission;
