import { main_events } from "@/data/events";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";

export default function Events() {
    const ref = useRef(null);

    const typingVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <section
            className="flex flex-col justify-start w-full bg-purple-deep text-white min-h-screen py-32 px-6 md:px-20"
            id="events"
            ref={ref}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="w-full"
            >
                <h1 className="section-heading !text-center md:!text-left !text-gold mb-24">Core Experiences</h1>
                <div className="w-full flex flex-col items-center justify-center gap-32">
                    {main_events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="w-full max-w-7xl"
                        >
                            <div
                                className={`flex flex-col ${index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12 md:gap-24`}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="w-full md:w-2/5 flex items-center justify-center relative group"
                                >
                                    {/* Subtle Glow */}
                                    <div className="absolute inset-0 bg-gold/5 rounded-full blur-[100px] group-hover:bg-gold/10 transition-all duration-700"></div>
                                    <img
                                        src={event.event_image}
                                        alt={event.event_name}
                                        className="w-full max-w-[300px] md:max-w-full relative z-10 drop-shadow-[0_0_50px_rgba(250,205,4,0.15)] group-hover:drop-shadow-[0_0_80px_rgba(250,205,4,0.3)] transition-all duration-700 animate-float"
                                    />
                                </motion.div>

                                <div className="w-full md:w-3/5 flex flex-col gap-8 text-center md:text-left">
                                    <motion.h1
                                        className="item-heading"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.7, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                    >
                                        {event.event_name}
                                    </motion.h1>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        viewport={{ once: true }}
                                        className="text-secondary/60 text-lg md:text-xl leading-relaxed font-advercase"
                                    >
                                        {event.event_description}
                                    </motion.p>

                                    {event.event_link && (
                                        <motion.a
                                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.8 }}
                                            viewport={{ once: true }}
                                            href={event.event_link}
                                            className="w-fit mx-auto md:mx-0 text-purple-deep font-bold font-barlow uppercase tracking-[0.3em] px-10 py-4 rounded-full bg-gold hover:bg-white hover:scale-105 transition-all duration-500 shadow-2xl shadow-gold/20"
                                        >
                                            Dive into {event.event_name}
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
