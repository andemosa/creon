import Image from "next/image";

import { monumentExtended, satoshiMedium } from "@/utils/local-fonts";

import income from "./images/income.webp";
import launchpad from "./images/launchpad.webp";
import token from "./images/token.webp";

const comingSoonContent = [
  {
    title: "Token",
    subTitle: "Empowering NFT Holders and Shaping AI Development",
    img: token,
    content:
      "Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.",
  },
  {
    title: "Income",
    subTitle: "Harnessing AI for Profit Generation",
    img: income,
    content:
      "As an integral part of our project, AI Income offers the opportunity to benefit from a genuine, profit-generating AI-based business. This facet of our initiative leverages the power of selected exclusive AI tools to create a profit stream.",
  },
  {
    title: "Launchpad",
    subTitle: "Driving the future of AI Innovation",
    img: launchpad,
    content:
      "The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.",
  },
];

const Coming = () => {
  return (
    <ul className="flex overflow-x-scroll no-scrollbar xl:overflow-x-hidden gap-6 lg:gap-8 justify-between w-full py-8">
      {comingSoonContent.map(({ content, subTitle, title, img }) => (
        <li key={title} className={`relative w-1/3 min-w-[220px]`}>
          <p
            className={`absolute -top-4 right-0 bg-white text-xs text-black uppercase rounded-full py-1 px-2`}
          >
            Coming soon
          </p>
          <div className="p-2 min-h-[100px]">
            <h3
              className={`${monumentExtended.className} text-xl md:3xl lg:4xl uppercase`}
            >
              {title}
            </h3>
            <h4
              className={`${satoshiMedium.className} bg-gradient-to-r from-blue-500 via-purple-600 to-purple-900 text-transparent bg-clip-text`}
            >
              {subTitle}
            </h4>
          </div>
          <div className="w-full flex items-center justify-center overflow-hidden">
            <Image
              src={img}
              alt={title}
              placeholder="blur"
              className="flex-1 transition-all duration-500 ease-in-out transform hover:scale-125"
            />
          </div>
          <div className="p-2">{content}</div>
        </li>
      ))}
    </ul>
  );
};

export default Coming;
