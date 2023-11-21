import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { satoshiMedium } from "@/utils/local-fonts";

import {
  LaunchIcon,
  LimitlessIcon,
  ProfitabilityIcon,
  TransparentIcon,
} from "../Icons/AccordionIcons";

const accordionItems = [
  {
    title: "Profitability and Growth",
    content:
      "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.",
    Icon: <ProfitabilityIcon />,
  },
  {
    title: "Transparent & Fair Decentralized Earnings",
    content:
      "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.",
    Icon: <TransparentIcon />,
  },
  {
    title: "Launching the future",
    content:
      "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.",
    Icon: <LaunchIcon />,
  },
  {
    title: "Limitless Possibilities of AI & Crypto",
    content:
      "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.",
    Icon: <LimitlessIcon />,
  },
];

export function AccordionComp() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {accordionItems.map(({ content, title, Icon }) => (
        <AccordionItem value={`${title}`} key={title}>
          <AccordionTrigger className="hover:text-[#3D8BFF]">
            <div className="flex gap-2 md:gap-6 items-center">
              <p className="w-[60px] h-[60px] lg:w-[90px] lg:h-[90px] flex justify-center items-center">
                {Icon}
              </p>
              <p className={`${satoshiMedium.className} md:text-lg text-left`}>
                {title}
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
