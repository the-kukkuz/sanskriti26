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

const BackgroundRipple = () => {
    const [ripples, setRipples] = useState([]);

    useEffect(() => {
        const addRipple = () => {
            const newRipple = {
                id: Date.now(),
                x: Math.random() * 100,
                y: Math.random() * 100,
                word: sanskritiWords[Math.floor(Math.random() * sanskritiWords.length)]
            };
            setRipples(prev => [...prev.slice(-12), newRipple]);
            const nextDelay = 1500 + Math.random() * 2500;
            setTimeout(addRipple, nextDelay);
        };
        addRipple();
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
            <AnimatePresence>
                {ripples.map(r => (
                    <motion.div
                        key={r.id}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: [0.5, 3], opacity: [0, 0.4, 0] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 12, ease: "easeOut" }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none text-center"
                        style={{ left: `${r.x}%`, top: `${r.y}%`, willChange: "transform, opacity" }}
                    >
                        <div className="absolute w-64 h-64 bg-[radial-gradient(circle,rgba(250,205,4,0.15)_0%,transparent_70%)] rounded-full blur-3xl" />
                        <span
                            className="text-5xl md:text-8xl font-black text-gold/60 whitespace-nowrap blur-[1px] select-none tracking-widest drop-shadow-md z-0"
                            style={{ fontFamily: "sans-serif" }}
                        >
                            {r.word}
                        </span>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};



const AnimatedLetter = ({ letter, delay, isMobile }) => {
    const [font, setFont] = useState(fonts[0]);
    const [isStabilized, setIsStabilized] = useState(false);

    useEffect(() => {
        const stabilizationTime = 2500 + delay * 150;

        const interval = setInterval(() => {
            const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
            setFont(randomFont);
        }, 200 + Math.random() * 400); // Slower font cycling

        const preStabilizeTimeout = setTimeout(() => {
            clearInterval(interval);
            setFont("'Pacifico', cursive"); // Guaranteeing a distinct cursive font
        }, Math.max(0, stabilizationTime - 500)); // Show for half a second before stabilization

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

    const getFontSize = () => {
        if (!isStabilized) return "inherit";
        if (isMobile) return "15px";
        return "30px";
    };

    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.5, y: 10 }}
            animate={{
                opacity: 1,
                scale: 1,
                y: 0
            }}
            transition={{
                delay: isStabilized ? 0 : delay * 1.5,
                duration: isStabilized ? 0.8 : 1,
                ease: "easeOut"
            }}
            style={{
                fontFamily: font,
                fontSize: getFontSize(),
                transition: isStabilized ? "font-size 0.8s ease-out" : "none"
            }}
            className="inline-block"
        >
            {letter}
        </motion.span>
    );
};

export default function Hero() {
    const [revealTypo, setRevealTypo] = useState(false);
    const [isFlying, setIsFlying] = useState(false);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { amount: 0.5 }); // Trigger when 50% visible
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => {
                setRevealTypo(true);
            }, 1000); // Snappier starting delay

            const flyTimer = setTimeout(() => {
                setIsFlying(true);
            }, 2500); // 1.0s delay + 1.5s reveal transition time = seamless
            return () => { clearTimeout(timer); clearTimeout(flyTimer); };
        } else {
            setRevealTypo(false);
            setIsFlying(false); // Reset when scrolled away
        }
    }, [isInView]);

    const word1 = "SANSKRITI";
    const word2 = "'26";

    return (
        <section
            ref={containerRef}
            className="relative w-full h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-purple-deep"
        >
            {/* Background Transitions & Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,205,4,0.08)_0%,rgba(30,11,75,1)_65%,rgba(15,5,37,1)_100%)]"></div>

            {/* Continuous Movement Ripples */}
            <BackgroundRipple />

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
                            x: -600 * (isMobile ? 0.4 : 1),
                            y: -400 * (isMobile ? 0.4 : 1),
                            rotate: -120,
                            scale: 0.4,
                            opacity: 0
                        }}
                        animate={{
                            x: isFlying ? [0, 200 * (isMobile ? 0.4 : 1), 350 * (isMobile ? 0.4 : 1), 100 * (isMobile ? 0.4 : 1), -250 * (isMobile ? 0.4 : 1), -400 * (isMobile ? 0.4 : 1), -150 * (isMobile ? 0.4 : 1), 0] : (revealTypo ? 0 : [-600 * (isMobile ? 0.4 : 1), 400 * (isMobile ? 0.4 : 1), -300 * (isMobile ? 0.4 : 1), 150 * (isMobile ? 0.4 : 1), 0]),
                            y: isFlying ? [-90 * (isMobile ? 0.4 : 1), -250 * (isMobile ? 0.4 : 1), 50 * (isMobile ? 0.4 : 1), 150 * (isMobile ? 0.4 : 1), -50 * (isMobile ? 0.4 : 1), 100 * (isMobile ? 0.4 : 1), -150 * (isMobile ? 0.4 : 1), -90 * (isMobile ? 0.4 : 1)] : (revealTypo ? -90 * (isMobile ? 0.4 : 1) : [-400 * (isMobile ? 0.4 : 1), 300 * (isMobile ? 0.4 : 1), -350 * (isMobile ? 0.4 : 1), 200 * (isMobile ? 0.4 : 1), 0]),
                            rotate: isFlying ? [0, 15, -10, 20, -15, 10, -20, 0] : (revealTypo ? 0 : [-120, 60, -45, 30, 0]),
                            scale: isFlying ? [0.75, 0.8, 0.7, 0.85, 0.75, 0.8, 0.7, 0.75] : (revealTypo ? 0.75 : 1.3),
                            opacity: 1,
                        }}
                        transition={{
                            duration: isFlying ? 24 : (revealTypo ? 1.5 : 4),
                            ease: isFlying ? "easeInOut" : [0.16, 1, 0.3, 1],
                            repeat: isFlying ? Infinity : 0,
                        }}
                        className="relative z-20"
                        style={{ willChange: "transform" }}
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
                            className="flex flex-col items-center mt-[-20px] md:mt-0 gap-6 md:gap-10"
                        >
                            <motion.div
                                className="w-full max-w-[100vw] flex flex-nowrap justify-center text-[clamp(12px,7vw,4rem)] md:text-[clamp(4rem,9vw,10rem)] font-bold text-gold gap-x-0.5 md:gap-x-3 leading-none whitespace-nowrap px-2 md:px-4"
                            >
                                {word1.split("").map((char, i) => (
                                    <AnimatedLetter key={`${char}-${i}`} letter={char} delay={i * 0.08} isMobile={isMobile} />
                                ))}
                                <span className="mx-1 md:mx-3 text-[clamp(12px,7vw,4rem)] md:text-[clamp(4rem,9vw,10rem)]">&nbsp;</span>
                                {word2.split("").map((char, i) => (
                                    <AnimatedLetter key={`${char}-${i + 9}`} letter={char} delay={(i + 10) * 0.08} isMobile={isMobile} />
                                ))}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, letterSpacing: isMobile ? "0.05em" : "0.1em" }}
                                animate={{ opacity: 1, letterSpacing: isMobile ? "0.2em" : "0.4em" }}
                                transition={{ delay: 2.5, duration: 2, ease: "easeOut" }}
                                className="flex items-center gap-4 md:gap-6"
                            >
                                <div className="hidden md:block h-px w-16 bg-gradient-to-r from-transparent to-gold/40"></div>
                                <h4 className="text-[10px] sm:text-lg md:text-xl font-bold font-advercase text-gold uppercase animate-text-shimmer" style={{ letterSpacing: 'inherit' }}>
                                    #ARTBEYONDAESTHETICS
                                </h4>
                                <div className="hidden md:block h-px w-16 bg-gradient-to-l from-transparent to-gold/40"></div>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 3.2, duration: 1 }}
                                className="font-advercase font-medium text-[8px] sm:text-sm md:text-base text-secondary/40 tracking-[0.2em] uppercase"
                            >
                                MARCH 5 • 6 • 7 | MACE KOTHAMANGALAM
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
