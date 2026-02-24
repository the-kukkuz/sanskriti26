"use client"

import { main_events } from "@/data/events";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";

export default function Events() {
  
  const ref = useRef<HTMLDivElement>(null);

  // Framer Motion Variants for Typing Effect
  const typingVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay each letter
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <AnimatePresence>
      <section 
        className="flex flex-col justify-start w-full bg-neutral-900 text-primary min-h-[200dvh] p-5"
        ref={ref}
      >
        <h1 className=" section-heading !text-left !text-primary p-3">Events</h1>
        <div className=" w-full flex flex-col items-center justify-center gap-5">
          {main_events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ scale:0.85 }}
              whileInView={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.5 }}
              className="bg-neutral-900 overflow-y-hidden w-full rounded-xl"
            >
              <div
                className={`flex flex-col ${index % 2 == 0 ? "md:flex-row": "md:flex-row-reverse"} items-center h-fit md:h-[350px] bg-neutral-700 p-2 md:p-16`}
              >
                <div className="w-3/4 md:w-[34%] flex items-center justify-center">
                  <img src={event.event_image} alt="" className="w-96" />
                </div>
                <div className="w-full p-1 md:w-[66%] flex flex-col gap-3">
                  {/* Typing Effect for h1 using motion */}
                  <motion.h1
                    className="font-bold text-2xl md:text-5xl flex text-center md:text-left"
                    variants={typingVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                  >
                    {event.event_name.split("").map((letter, index) => (
                      <motion.span className="  text-center md:text-left" key={index} variants={letterVariants}>
                        {letter}
                      </motion.span>
                    ))}
                  </motion.h1>
                  {/* Full paragraph appearing gradually */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-white"
                  >
                    {event.event_description}
                  </motion.p>
                  {event.event_link ?
                    (<a
                      href={event.event_link}
                      className="w-fit text-neutral-900 border border-primary px-4 py-2 rounded-lg transition-all duration-300 bg-primary hover:bg-neutral-900 hover:text-primary"
                    >
                      Know More
                    </a>
                    ):
                    (<></>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </AnimatePresence>
  )
}
