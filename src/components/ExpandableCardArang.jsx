import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Modal from "./checkClgModal";

export function ExpandableCardArang({ events }) {
    const [active, setActive] = useState(null);
    const ref = useRef(null);

    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        function onPopState() {
            setActive(false);
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
            window.history.pushState(null, "", window.location.href);
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

    useOutsideClick(ref, () => setActive(null));

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [link, setLink] = useState({
        non_mace_link: "",
        mace_link: ""
    });

    return (
        <div className="w-full max-w-7xl mx-auto">
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-purple-dark/80 backdrop-blur-sm h-full w-full z-50"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0 grid place-items-center z-[100] p-4">
                        <motion.button
                            key={`button-${active.title}-${active.id}`}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex absolute top-6 right-6 items-center justify-center bg-gold rounded-full h-10 w-10 z-[101] shadow-xl"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${active.id}`}
                            ref={ref}
                            className="w-full max-w-[600px] h-fit max-h-[90vh] flex flex-col bg-purple-dark border border-gold/30 rounded-[2rem] overflow-hidden shadow-2xl"
                        >
                            <motion.div layoutId={`image-${active.title}-${active.id}`} className="relative h-64 md:h-80 w-full">
                                <img
                                    src={active.src}
                                    alt={active.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-dark to-transparent"></div>
                            </motion.div>

                            <div className="p-8 md:p-10 relative">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <motion.h3
                                            layoutId={`title-${active.title}-${active.id}`}
                                            className="font-bold text-3xl text-gold font-barlow uppercase tracking-tight"
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${active.id}`}
                                            className="text-secondary/80 font-courier mt-1"
                                        >
                                            {active.description}
                                        </motion.p>
                                        <motion.p
                                            layoutId={`reg_fees-${active.reg_fees}-${active.id}`}
                                            className="text-white mt-4 font-bold"
                                        >
                                            Registration Fee: <span className="text-gold">{active.reg_fees}</span>
                                        </motion.p>
                                    </div>

                                    <motion.button
                                        layoutId={`cta-${active.title}-${active.id}`}
                                        onClick={() => {
                                            setIsModalOpen(true)
                                            setLink({
                                                non_mace_link: active.non_mace_link,
                                                mace_link: active.mace_link,
                                            })
                                        }}
                                        className="px-8 py-3 rounded-full font-bold bg-gold text-purple-dark hover:bg-white hover:scale-105 transition-all shadow-lg"
                                    >
                                        {active.ctaText}
                                    </motion.button>
                                </div>
                                <div className="relative">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-secondary text-sm md:text-base leading-relaxed h-[30vh] overflow-y-auto pr-4 custom-scrollbar font-courier"
                                    >
                                        {typeof active.content === "function" ? active.content() : active.content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {events.map((card) => (
                    <motion.div
                        layoutId={`card-${card.title}-${card.id}`}
                        key={`card-${card.title}-${card.id}`}
                        onClick={() => setActive(card)}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        whileHover={{ scale: 1.02, translateY: -5 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-purple/10 border border-gold/10 hover:border-gold/30 p-5 rounded-3xl cursor-pointer backdrop-blur-sm group flex flex-col justify-between h-full"
                    >
                        <div>
                            <motion.div
                                layoutId={`image-${card.title}-${card.id}`}
                                className="relative aspect-square w-full mb-6 overflow-hidden rounded-2xl"
                            >
                                <img
                                    src={card.src}
                                    alt={card.title}
                                    className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-purple-dark/20 group-hover:bg-transparent transition-colors"></div>
                            </motion.div>
                            <div className="text-center md:text-left">
                                <motion.h3
                                    layoutId={`title-${card.title}-${card.id}`}
                                    className="font-bold text-xl text-gold font-barlow uppercase tracking-wider"
                                >
                                    {card.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${card.description}-${card.id}`}
                                    className="text-secondary/60 text-sm mt-2 font-courier"
                                >
                                    {card.description}
                                </motion.p>
                            </div>
                        </div>
                        <motion.button
                            layoutId={`cta-${card.title}-${card.id}`}
                            className="w-full py-3 mt-6 text-sm rounded-xl font-bold bg-gold/10 text-gold border border-gold/30 group-hover:bg-gold group-hover:text-purple-dark transition-all duration-300 font-barlow uppercase tracking-widest"
                        >
                            {card.ctaText}
                        </motion.button>
                    </motion.div>
                ))}
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                non_mace_link={link.non_mace_link}
                mace_link={link.mace_link}
            />
        </div>
    );
}

export const CloseIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-purple-dark"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </svg>
    );
};
