import { useState, useEffect } from "react";

import { satoshiMedium } from "@/utils/local-fonts";

import { NavMobile } from "./nav-mobile";
import { NavDesktop } from "./nav-desktop";
import LogoIcon from "../Icons/Logo";

const navItems = [
  {
    text: "Creon Pass",
    soon: false,
  },
  {
    text: "Token",
    soon: true,
  },
  {
    text: "AI Revenue",
    soon: true,
  },
  {
    text: "AI LaunchPad",
    soon: true,
  },
];

export const Topbar = () => {
  const [active, setActive] = useState(false);

  const isActive = () => {
    window.scrollY > 200 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <div
      className={`${
        active ? "bg-black" : "bg-transparent"
      } fixed top-0 left-0 right-0 z-10`}
    >
      <nav
        className={`${satoshiMedium.className} container flex items-center justify-between px-3 py-1 lg:py-5 sm:px-6 text-white`}
      >
        <span className="text-lg">
          <LogoIcon />
        </span>
        <NavMobile navItems={navItems} />
        <NavDesktop navItems={navItems} />
      </nav>
    </div>
  );
};
