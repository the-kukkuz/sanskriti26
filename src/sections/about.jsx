import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const carouselImages = [
    { src: "/Events/1.jpg", label: "Music Fest" },
    { src: "/Events/2.JPG", label: "Art Expo" },
    { src: "/Events/3.jpg", label: "Tech Talk" },
    { src: "/Events/4.JPG", label: "Dance Show" },
    { src: "/Events/5.JPG", label: "Food Carnival" },
    { src: "/Events/6.JPG", label: "Fashion Parade" },
];

function AboutCarousel() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
    const timerRef = useRef(null);
    const total = carouselImages.length;

    const goTo = (idx, dir) => {
        setDirection(dir);
        setCurrent(idx);
    };

    const next = () => goTo((current + 1) % total, 1);
    const prev = () => goTo((current - 1 + total) % total, -1);

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setCurrent(c => {
                const nxt = (c + 1) % total;
                setDirection(1);
                return nxt;
            });
        }, 4000);
        return () => clearInterval(timerRef.current);
    }, [total]);

    const variants = {
        enter: (dir) => ({
            x: dir > 0 ? "100%" : "-100%",
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (dir) => ({
            x: dir > 0 ? "-100%" : "100%",
            opacity: 0,
        }),
    };

    const img = carouselImages[current];

    return (
        <div className="relative w-full max-w-2xl mx-auto aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gold/10 border border-gold/10 group">
            {/* Blurred, darkened background */}
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={`bg-${current}`}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="absolute inset-0"
                    style={{ zIndex: 1 }}
                >
                    <img
                        src={img.src}
                        alt=""
                        className="w-full h-full object-cover"
                        style={{ filter: "blur(18px) brightness(0.35) saturate(0.7)", transform: "scale(1.12)" }}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Foreground image */}
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={`fg-${current}`}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ zIndex: 2 }}
                >
                    <img
                        src={img.src}
                        alt={img.label}
                        className="h-[85%] w-auto max-w-[85%] object-contain rounded-[1.5rem] shadow-2xl shadow-black/60"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Label */}
            <div className="absolute bottom-5 left-0 right-0 flex justify-center z-10 pointer-events-none">
                <motion.span
                    key={`label-${current}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="bg-purple-deep/70 backdrop-blur-md text-gold text-xs font-barlow font-bold uppercase tracking-[0.25em] px-6 py-2 rounded-full border border-gold/20"
                >
                    {img.label}
                </motion.span>
            </div>

            {/* Prev / Next buttons */}
            <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-purple-deep/70 backdrop-blur-sm border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-purple-deep transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Previous"
            >
                ‹
            </button>
            <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-purple-deep/70 backdrop-blur-sm border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-purple-deep transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Next"
            >
                ›
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-14 left-0 right-0 flex justify-center gap-2 z-10">
                {carouselImages.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i, i > current ? 1 : -1)}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-gold w-5" : "bg-gold/30 hover:bg-gold/60"}`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default function About() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-purple-deep py-28 px-6 md:px-20"
            id="about"
        >
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                {/* Text */}
                <div className="w-full lg:w-1/2 flex flex-col gap-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-5xl sm:text-6xl md:text-8xl font-bold text-gold font-barlow uppercase tracking-tighter break-words hyphens-auto"
                    >
                        About<br /><span className="text-white opacity-80 break-all sm:break-normal">Sanskriti'26</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="max-w-2xl text-base md:text-xl text-secondary/60 font-courier leading-relaxed"
                    >
                        Sanskriti'26 is more than an arts fest—it's a movement, a melting pot of
                        creativity, and a pulse of inspiration at <span className="text-gold">Mar Athanasius College of Engineering</span>.
                        Here, tradition collides with innovation, and every brushstroke, beat, and
                        performance tells a story waiting to be heard.
                    </motion.p>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-px w-full max-w-lg bg-gradient-to-r from-gold/50 to-transparent origin-left"
                    />
                </div>

                {/* Carousel */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2"
                >
                    <AboutCarousel />
                </motion.div>
            </div>
        </motion.section>
    );
}

export const products = [
    { title: "S26 Logo", link: "", thumbnail: "/images/S26logo.png" },
    { title: "S26 Logo", link: "", thumbnail: "/images/S26logo.png" },
    { title: "S26 Logo", link: "", thumbnail: "/images/S26logo.png" },
    { title: "S26 Logo", link: "", thumbnail: "/images/S26logo.png" },
    { title: "S26 Logo", link: "", thumbnail: "/images/S26logo.png" },
    { title: "S26 Logo", link: "", thumbnail: "/images/S26logo.png" },
    { title: "S26 Logo", link: "", thumbnail: "/images/S26logo.png" },
    { title: "S26 Logo", link: "", thumbnail: "/images/S26logo.png" },
    { title: "S26 Logo", link: "", thumbnail: "/images/S26logo.png" },
    { title: "S26 Logo", link: "", thumbnail: "/images/S26logo.png" },
    { title: "S26 Logo", link: "", thumbnail: "/images/S26logo.png" },
    { title: "S26 Logo", link: "", thumbnail: "/images/S26logo.png" },
    { title: "S26 Logo", link: "", thumbnail: "/images/S26logo.png" },
    { title: "S26 Logo", link: "", thumbnail: "/images/S26logo.png" },
    { title: "S26 Logo", link: "", thumbnail: "/images/S26logo.png" },
];
