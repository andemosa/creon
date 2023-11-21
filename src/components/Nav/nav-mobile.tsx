import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";

import { Discord, Telegram, Twitter } from "../Icons/SocialIcons";

export const NavMobile = ({
  navItems,
}: {
  navItems: {
    text: string;
    soon: boolean;
  }[];
}) => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="lg:hidden ">
      <div className="flex gap-2">
        <button className="flex border-2 justify-center items-center rounded-md px-3 py-1">
          Connect
        </button>
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed flex flex-col gap-4 h-full right-0 top-0 pl-2 sm:pl-6 pr-2 pt-20 bg-neutral-950 border-b border-b-white/20 -z-10"
          >
            <ul className="grid gap-2">
              {navItems.map(({ text, soon }, idx) => {
                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={text}
                    className="flex gap-1 mx-3"
                  >
                    <span className="font-[18px]">{text}</span>
                    {soon && (
                      <span className="text-[10px] text-[#AB23FF] flex items-center bg-black rounded-full justify-center align-middle">
                        Soon
                      </span>
                    )}
                  </motion.li>
                );
              })}
            </ul>
            <ul className="flex gap-2 mt-auto ml-3 pb-3">
              <li>
                <Telegram />
              </li>
              <li>
                <Discord />
              </li>
              <li>
                <Twitter />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
