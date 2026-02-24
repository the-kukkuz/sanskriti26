import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const fonts = [
    "'Barlow', sans-serif",
    "'Playfair Display', serif",
    "'Bungee', cursive",
    "'UnifrakturMaguntia', cursive",
    "'Monoton', cursive",
    "'Pacifico', cursive",
    "'Syncopate', sans-serif",
    "'Press Start 2P', cursive",
    "'Inter', sans-serif"
];

const AnimatedLetter = ({ letter, delay }) => {
    const [font, setFont] = useState(fonts[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
            setFont(randomFont);
        }, 200 + Math.random() * 400); // Slower font cycling

        const timeout = setTimeout(() => {
            clearInterval(interval);
            setFont("'Barlow', sans-serif");
        }, 2500 + delay * 150); // Slower stabilization

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [delay]);

    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.5, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: delay * 1.5, duration: 1, ease: "easeOut" }} // Slower reveal
            style={{ fontFamily: font }}
            className="inline-block"
        >
            {letter}
        </motion.span>
    );
};

export default function Hero() {
    const [revealTypo, setRevealTypo] = useState(false);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { amount: 0.5 }); // Trigger when 50% visible

    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => {
                setRevealTypo(true);
            }, 1000); // Snappier starting delay
            return () => clearTimeout(timer);
        } else {
            setRevealTypo(false); // Reset when scrolled away
        }
    }, [isInView]);

    const word1 = "SANSKRITI";
    const word2 = "26";

    return (
        <section
            ref={containerRef}
            className="relative w-full h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-purple-deep"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,205,4,0.1)_0%,rgba(30,11,75,1)_60%,rgba(15,5,37,1)_100%)]"></div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full">

                {/* Dancing Butterfly Logo */}
                <div className="relative mb-4 md:mb-8 flex items-center justify-center">
                    {/* Background Settlement Ripple (Large & Soft) */}
                    <AnimatePresence>
                        {revealTypo && (
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: [1, 6], opacity: [0.35, 0] }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeOut"
                                }}
                                className="absolute w-64 h-64 bg-[radial-gradient(circle,rgba(250,205,4,0.12)_0%,transparent_70%)] rounded-full blur-[100px] -z-10"
                            />
                        )}
                    </AnimatePresence>

                    {/* Butterfly Ripple Bloom (Center Focus) */}
                    <AnimatePresence>
                        {revealTypo && [1, 2].map((i) => (
                            <motion.div
                                key={`ripple-${i}`}
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: [1, 3], opacity: [0, 0.2, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    delay: i * 2,
                                    ease: "easeOut"
                                }}
                                className="absolute w-32 h-32 md:w-40 md:h-40 bg-[radial-gradient(circle,rgba(250,205,4,0.18)_0%,transparent_75%)] rounded-full blur-3xl"
                            />
                        ))}
                    </AnimatePresence>

                    <motion.div
                        layoutId="main-logo"
                        initial={{
                            x: -600,
                            y: -400,
                            rotate: -120,
                            scale: 0.4,
                            opacity: 0
                        }}
                        animate={{
                            x: revealTypo ? 0 : [-600, 400, -300, 150, 0],
                            y: revealTypo ? -90 : [-400, 300, -350, 200, 0],
                            rotate: revealTypo ? 0 : [-120, 60, -45, 30, 0],
                            scale: revealTypo ? 0.75 : 1.3,
                            opacity: 1,
                        }}
                        transition={{
                            duration: revealTypo ? 1.5 : 4,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="relative z-20"
                    >
                        <motion.img
                            src="/images/S26logo.png"
                            alt="Butterfly"
                            animate={{
                                filter: ["drop-shadow(0 0 20px rgba(250,205,4,0.4))", "drop-shadow(0 0 40px rgba(250, 205, 4, 0.8))", "drop-shadow(0 0 20px rgba(250, 205, 4, 0.4))"]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="w-28 h-28 md:w-48 md:h-48 object-contain animate-flap"
                        />
                    </motion.div>
                </div>

                {/* Typography Reveal */}
                <AnimatePresence>
                    {revealTypo && (
                        <motion.div
                            key="hero-typo"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center mt-[-20px] md:mt-0"
                        >
                            <motion.div
                                className="flex flex-nowrap justify-center text-4xl sm:text-6xl md:text-[8rem] font-bold text-gold gap-x-1 md:gap-x-3 leading-none whitespace-nowrap"
                            >
                                {word1.split("").map((char, i) => (
                                    <AnimatedLetter key={`${char}-${i}`} letter={char} delay={i * 0.08} />
                                ))}
                                <span className="mx-1 md:mx-3"></span>
                                {word2.split("").map((char, i) => (
                                    <AnimatedLetter key={`${char}-${i + 9}`} letter={char} delay={(i + 10) * 0.08} />
                                ))}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, letterSpacing: "0.1em" }}
                                animate={{ opacity: 1, letterSpacing: "0.4em" }}
                                transition={{ delay: 2.5, duration: 2, ease: "easeOut" }}
                                className="mt-8 md:mt-12 flex items-center gap-4 md:gap-6"
                            >
                                <div className="hidden md:block h-px w-16 bg-gradient-to-r from-transparent to-gold/40"></div>
                                <h4 className="text-[10px] sm:text-lg md:text-xl font-bold font-barlow text-gold uppercase tracking-[0.4em] animate-text-shimmer">
                                    #ART BEYOND AESTHETICS
                                </h4>
                                <div className="hidden md:block h-px w-16 bg-gradient-to-l from-transparent to-gold/40"></div>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 3.2, duration: 1 }}
                                className="mt-6 md:mt-8 font-inter font-medium text-[8px] sm:text-sm md:text-base text-secondary/40 tracking-[0.2em] uppercase"
                            >
                                MARCH 6 • 7 • 8 | MACE KOTHAMANGALAM
                            </motion.p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-gold/5 rounded-full blur-[120px]"
                />
            </div>
        </section>
    );
}
