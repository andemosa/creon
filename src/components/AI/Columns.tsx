import Image from "next/image";

import { monumentExtended } from "@/utils/local-fonts";

import crypto from "./images/crypto.webp";
import prospects from "./images/prospects.webp";
import tools from "./images/tools.webp";

const infoContent = [
  {
    title: "AI Prospects, Market Size, and Development Pace",
    img: prospects,
    content:
      "The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.",
  },
  {
    title: "AI Tools and Market",
    img: tools,
    content:
      "AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.",
  },
  {
    title: "AI, Crypto, and NFT Market",
    img: crypto,
    content:
      "Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.",
  },
];

const Columns = () => {
  return (
    <ul className="flex overflow-x-scroll no-scrollbar md:overflow-x-hidden md:flex-col gap-6 justify-between relative w-full my-12 md:my-16 py-2">
        {infoContent.map(({ content, title, img }) => (
          <li
            className="flex flex-col md:flex-row-reverse gap-10 items-center min-w-[300px]"
            key={title}
          >
            <div className="w-full md:w-1/3 flex items-center justify-center overflow-hidden">
              <Image
                src={img}
                alt={title}
                placeholder="blur"
                className="flex-1 transition-all duration-500 ease-in-out transform hover:scale-125"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3
                className={`${monumentExtended.className} text-xl md:text-2xl uppercase`}
              >
                {title}
              </h3>
              <p className="text-sm md:text-base">{content}</p>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default Columns;
