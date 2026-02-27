import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Gallery = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [-10, 10]);
    const opacityLogo = useTransform(scrollYProgress, [0, 0.5, 1], [0.05, 0.15, 0.05]);

    return (
        <motion.section
            ref={sectionRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
            className="relative py-32 bg-purple-deep overflow-hidden"
            id="gallery"
        >
            <h2 className="section-heading text-center !text-gold mb-24 opacity-20">Artistic Archive</h2>

            {/* Parallax Background Logo */}
            <motion.div
                style={{ y: y1, rotate, opacity: opacityLogo, willChange: "transform" }}
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center -z-10 pointer-events-none"
            >
                <img
                    src="/images/S26logo.png"
                    alt="Background Logo"
                    className="w-[100%] max-w-5xl object-contain grayscale blur-xl"
                    loading="lazy"
                />
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {[1, 2, 3, 4, 5, 6].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="group relative aspect-square bg-purple-dark/20 rounded-[2.5rem] overflow-hidden border border-gold/5 hover:border-gold/30 transition-all duration-700 shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-deep via-purple-deep/40 to-transparent z-10 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                        <img
                            src="/images/sanskriti-logo.png"
                            alt={`Gallery ${item}`}
                            loading="lazy"
                            className="w-full h-full object-contain p-20 opacity-30 group-hover:scale-110 group-hover:opacity-60 transition-all duration-1000"
                        />
                        <div className="absolute bottom-10 left-10 z-20">
                            <p className="text-gold/50 font-advercase font-bold text-sm uppercase tracking-[0.3em] group-hover:text-gold transition-colors">Frame 00{item}</p>
                            <h3 className="item-heading mt-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 !text-xl md:!text-2xl">Capture the pulse</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Gallery;
