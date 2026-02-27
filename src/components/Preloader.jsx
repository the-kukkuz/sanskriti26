import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SmallButterfly = ({ delay }) => {
    // Generate random path starting from the center (0,0) and flying outwards
    const [path] = useState(() => ({
        x: [0, Math.random() * 400 - 200, Math.random() * 800 - 400, Math.random() * 1200 - 600],
        y: [0, Math.random() * 400 - 200, Math.random() * 800 - 400, Math.random() * 1200 - 600],
        duration: 10 + Math.random() * 10,
    }));

    return (
        <motion.div
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{
                opacity: [0, 0.8, 1, 0],
                x: path.x,
                y: path.y,
                rotate: [0, 90, -45, 90],
                scale: [0.1, 0.3, 0.4, 0.1],
            }}
            transition={{
                duration: path.duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut"
            }}
            className="absolute pointer-events-none z-20"
            style={{ willChange: "transform, opacity" }}
        >
            <motion.img
                src="/images/S26logo.png"
                className="w-12 h-12 object-contain animate-flap"
                style={{
                    filter: "drop-shadow(0 0 10px rgba(250,205,4,0.5))",
                }}
            />
        </motion.div>
    );
};

const sanskritiWords = ["SANSKRITI", "സംസ്കൃതി", "संस्कृति", "சமஸ்கிருதி", "సంస్కృతి", "ಸಂಸ್ಕೃತಿ"];

const BackgroundRipple = () => {
    const [ripples, setRipples] = useState([]);

    useEffect(() => {
        const addRipple = () => {
            // Pick a random position but avoid the center (x: 35-65%, y: 35-65%)
            let x, y;
            const side = Math.floor(Math.random() * 4);
            if (side === 0) { x = Math.random() * 100; y = Math.random() * 30; } // Top
            else if (side === 1) { x = Math.random() * 100; y = 70 + Math.random() * 30; } // Bottom
            else if (side === 2) { x = Math.random() * 30; y = Math.random() * 100; } // Left
            else { x = 70 + Math.random() * 30; y = Math.random() * 100; } // Right

            const newRipple = {
                id: Date.now(),
                x,
                y,
                word: sanskritiWords[Math.floor(Math.random() * sanskritiWords.length)]
            };
            setRipples(prev => [...prev.slice(-12), newRipple]);
            const nextDelay = 800 + Math.random() * 1000;
            setTimeout(addRipple, nextDelay);
        };
        addRipple();
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
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

const Preloader = ({ onFinish }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onFinish, 1000);
        }, 3000);

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-purple-dark overflow-hidden"
                >
                    <BackgroundRipple />

                    <div className="relative z-10 flex flex-col items-center">
                        {/* Natural Ripple Effect */}
                        {[1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: [1, 2.5], opacity: [0, 0.4, 0] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: i * 1,
                                    ease: "easeOut"
                                }}
                                className="absolute inset-[-100px] rounded-full bg-[radial-gradient(circle,rgba(250,205,4,0.3)_0%,transparent_75%)] blur-xl"
                            />
                        ))}

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
                                {[...Array(6)].map((_, i) => (
                                    <SmallButterfly key={i} delay={i * 0.5} />
                                ))}
                            </div>
                            <motion.img
                                src="/images/S26logo.png"
                                alt="Logo"
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{
                                    scale: 1,
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 1.5,
                                    ease: "easeOut",
                                }}
                                className="w-40 h-40 xs:w-48 xs:h-48 md:w-64 md:h-64 object-contain animate-flap"
                            />
                        </div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="mt-8 text-center"
                        >
                            <h2 className="flex justify-center flex-wrap text-gold text-[15px] xs:text-[30px] md:text-5xl font-normal tracking-[0.1em] xs:tracking-[0.2em] font-rockybilly uppercase leading-relaxed">
                                {"SANSKRITI'26".split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
                                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                                        className="inline-block"
                                        style={{ willChange: "transform, filter, opacity" }}
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                            </h2>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
