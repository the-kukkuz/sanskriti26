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

const sanskritiWords = ["SANSKRITI", "സംസ്കൃതി", "संस्कृति", "சமஸ்கிருதி", "సంస్కృతి", "ಸಂಸ್ಕೃತಿ"];

const BackgroundRipple = React.memo(() => {
    const [ripples, setRipples] = useState([]);

    useEffect(() => {
        let isMounted = true;
        const addRipple = () => {
            if (!isMounted) return;
            const newRipple = {
                id: Date.now(),
                x: Math.random() * 100,
                y: Math.random() * 100,
                word: sanskritiWords[Math.floor(Math.random() * sanskritiWords.length)]
            };
            setRipples(prev => [...prev.slice(-8), newRipple]);
            const nextDelay = 2000 + Math.random() * 3000;
            setTimeout(addRipple, nextDelay);
        };
        addRipple();
        return () => { isMounted = false; };
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
            <AnimatePresence>
                {ripples.map(r => (
                    <motion.div
                        key={r.id}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: [0.5, 2.5], opacity: [0, 0.3, 0] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 15, ease: "linear" }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none text-center"
                        style={{ left: `${r.x}%`, top: `${r.y}%`, willChange: "transform, opacity" }}
                    >
                        <div className="absolute w-48 h-48 bg-[radial-gradient(circle,rgba(250,205,4,0.1)_0%,transparent_70%)] rounded-full blur-3xl" />
                        <span
                            className="text-4xl md:text-7xl font-black text-gold/40 whitespace-nowrap blur-[2px] select-none tracking-widest z-0"
                            style={{ fontFamily: "sans-serif" }}
                        >
                            {r.word}
                        </span>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
});

const AnimatedLetter = React.memo(({ letter, delay }) => {
    const [font, setFont] = useState(fonts[0]);
    const [isStabilized, setIsStabilized] = useState(false);

    useEffect(() => {
        const stabilizationTime = 2000 + delay * 120;

        const interval = setInterval(() => {
            const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
            setFont(randomFont);
        }, 300 + Math.random() * 300);

        const preStabilizeTimeout = setTimeout(() => {
            clearInterval(interval);
            setFont("'Pacifico', cursive");
        }, Math.max(0, stabilizationTime - 400));

        const timeout = setTimeout(() => {
            setFont("'Rockybilly', sans-serif");
            setIsStabilized(true);
        }, stabilizationTime);

        return () => {
            clearInterval(interval);
            clearTimeout(preStabilizeTimeout);
            clearTimeout(timeout);
        };
    }, [delay]);

    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                delay: isStabilized ? 0 : delay * 1.2,
                duration: isStabilized ? 0.6 : 0.8,
                ease: "linear"
            }}
            style={{
                fontFamily: font,
                willChange: isStabilized ? "auto" : "font-family, opacity"
            }}
            className="inline-block"
        >
            {letter === " " ? "\u00A0" : letter}
        </motion.span>
    );
});



export default function Hero() {
    const [revealTypo, setRevealTypo] = useState(false);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { amount: 0.5 });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => setRevealTypo(true), 1000);
            return () => clearTimeout(timer);
        } else {
            setRevealTypo(false);
        }
    }, [isInView]);

    const word1 = "Sanskriti";
    const word2 = "'26";

    return (
        <section
            ref={containerRef}
            className="relative w-full h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-purple-deep"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,205,4,0.08)_0%,rgba(30,11,75,1)_65%,rgba(15,5,37,1)_100%)]" />

            {/* Ripple words */}
            <BackgroundRipple />

            {/* ── All content centred ── */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full gap-4 md:gap-6">

                {/* ── Logo + orbiting butterfly ── */}
                <div className="relative flex items-center justify-center">

                    {/* Soft glow rings behind logo */}
                    <AnimatePresence>
                        {revealTypo && (
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: [1, 6], opacity: [0.35, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeOut" }}
                                className="absolute w-48 h-48 md:w-64 md:h-64 bg-[radial-gradient(circle,rgba(250,205,4,0.12)_0%,transparent_70%)] rounded-full blur-[80px]"
                            />
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {revealTypo && [1, 2].map(i => (
                            <motion.div
                                key={`ripple-${i}`}
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: [1, 3], opacity: [0, 0.2, 0] }}
                                transition={{ duration: 4, repeat: Infinity, delay: i * 2, ease: "easeOut" }}
                                className="absolute w-28 h-28 md:w-40 md:h-40 bg-[radial-gradient(circle,rgba(250,205,4,0.18)_0%,transparent_75%)] rounded-full blur-3xl"
                            />
                        ))}
                    </AnimatePresence>


                    {/* Main logo — stationary, centred, always on top of butterfly */}
                    <motion.div
                        layoutId="main-logo"
                        initial={{ opacity: 0, scale: 0.6, y: 40 }}
                        animate={{
                            opacity: 1,
                            scale: [0.6, 1.1, 1],
                            y: [40, -10, 0]
                        }}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                            delay: 0.5 // Snappy appearance after preloader ends
                        }}
                        style={{ zIndex: 20, willChange: "transform" }}
                    >
                        <motion.img
                            src="/images/S26logo.png"
                            alt="Sanskriti 26 logo"
                            animate={{
                                filter: [
                                    "drop-shadow(0 0 20px rgba(250,205,4,0.4))",
                                    "drop-shadow(0 0 40px rgba(250,205,4,0.8))",
                                    "drop-shadow(0 0 20px rgba(250,205,4,0.4))"
                                ]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="w-28 h-28 md:w-48 md:h-48 object-contain animate-flap"
                        />
                    </motion.div>
                </div>

                {/* ── Typography ── */}
                <AnimatePresence>
                    {revealTypo && (
                        <motion.div
                            key="hero-typo"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center gap-10 md:gap-14"
                        >
                            {/* SANSKRITI '26 */}
                            <div className="w-full max-w-[100vw] flex flex-nowrap justify-center text-[clamp(1.2rem,6vw,2.2rem)] md:text-[clamp(2.5rem,8vw,5.5rem)] text-gold gap-x-0.5 md:gap-x-1.5 leading-none whitespace-nowrap px-2 md:px-4">
                                {word1.split("").map((char, i) => (
                                    <AnimatedLetter key={`${char}-${i}`} letter={char} delay={i * 0.08} />
                                ))}
                                <span className="mx-1 md:mx-3">&nbsp;</span>
                                {word2.split("").map((char, i) => (
                                    <AnimatedLetter key={`${char}-${i + 9}`} letter={char} delay={(i + 10) * 0.09} />
                                ))}
                            </div>

                            {/* Tagline */}
                            <motion.div
                                initial={{ opacity: 0, letterSpacing: isMobile ? "0.05em" : "0.1em" }}
                                animate={{ opacity: 1, letterSpacing: isMobile ? "0.2em" : "0.4em" }}
                                transition={{ delay: 2.5, duration: 1, ease: "easeOut" }}
                                className="flex items-center gap-4 md:gap-6"
                            >
                                <div className="hidden md:block h-px w-16 bg-gradient-to-r from-transparent to-gold/40" />
                                <h4
                                    className="text-[10px] sm:text-lg md:text-xl font-bold font-advercase text-gold animate-text-shimmer"
                                    style={{ letterSpacing: "inherit" }}
                                >
                                    #ArtBeyondAesthetics
                                </h4>
                                <div className="hidden md:block h-px w-16 bg-gradient-to-l from-transparent to-gold/40" />
                            </motion.div>

                            {/* Date & Venue */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 3.2, duration: 1 }}
                                className="font-advercase font-medium text-[8px] sm:text-sm md:text-base text-secondary/40 tracking-[0.2em] uppercase animate-text-shimmer"
                            >
                                MARCH 5 • 6 • 7 | MACE KOTHAMANGALAM
                            </motion.p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Ambient glow */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-gold/5 rounded-full blur-[120px]"
                />
            </div>
            {/* Easter Egg */}
            <div className="absolute bottom-2 right-2 text-[3px] text-white/1 select-none pointer-events-none opacity-[0.1]" aria-hidden="true">
                have a good sanskriti, Sian!
            </div>
        </section>
    );
}
