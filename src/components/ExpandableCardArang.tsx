"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Events } from "@/data/events";
import Modal from "./checkClgModal";

export function ExpandableCardArang({events} : {events : Events[]}) {
  const [active, setActive] = useState<(typeof events)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    function onPopState() {
      setActive(false);
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
      window.history.pushState(null, "", window.location.href); // Prevents immediate back navigation
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("popstate", onPopState);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("popstate", onPopState);
    };
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => setActive(null));

  // MACEian and Non-MACEian Modal
  const [ isModalOpen, setIsModalOpen ] = useState(false)
  const [link, setLink] = useState({
    non_mace_link: "",
    mace_link: ""
  });


  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${active.id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${active.id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${active.id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-contain object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${active.id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${active.id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                    <motion.p
                      layoutId={`reg_fees-${active.reg_fees}-${active.id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      Reg Fees: <span className=" text-primary">{active.reg_fees}</span>
                    </motion.p>
                  </div>

                  <motion.button
                    layoutId={`button-${active.title}-${active.id}`}
                    onClick={() => {
                      setIsModalOpen(true)
                      setLink({
                        non_mace_link: active.non_mace_link,
                        mace_link: active.mace_link,
                      })
                    }}
                    className="px-4 py-3 text-sm rounded-full font-bold bg-primary text-black"
                  >
                    {active.ctaText}
                  </motion.button>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-60 max-h-60 md:h-80 md:max-h-80 pb-10 flex flex-col items-start gap-4 overflow-y-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function" ? active.content() : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="z-10 bg-neutral-800 max-w-6xl mx-auto w-full grid grid-cols-2 sm:grid-cols-4 gap-4">
        {events.map((card) => (
          <motion.div 
            layoutId={`card-${card.title}-${card.id}`}
            key={`card-${card.title}-${card.id}`}
            onClick={() => setActive(card)}
            whileInView={{ opacity: 1, scale: 1, y: 0 }} // Trigger animation in viewport
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }} // Controls when animation triggers
            className="p-4 flex flex-col justify-between items-center bg-neutral-800 hover:bg-neutral-700 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col">
              <motion.div 
                layoutId={`image-${card.title}-${card.id}`}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="flex items-center justify-center"
              >
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div>
                <motion.h3
                  layoutId={`title-${card.title}-${card.id}`}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${card.id}`}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="text-neutral-600 dark:text-neutral-400 text-center"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${card.id}`}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              viewport={{ once: false, amount: 0.2 }}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-primary text-black mt-4"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        non_mace_link={link.non_mace_link} 
        mace_link={link.mace_link}      
      />
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};