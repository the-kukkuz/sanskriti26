import React from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
} from "framer-motion";

export const EventParallax = ({
    products,
}) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.1, 0.4]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [10, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
        springConfig
    );

    return (
        <div
            ref={ref}
            className="h-[210vh] md:h-[230vh] py-28 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-purple-deep"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className="-z-10"
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((product, idx) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                            index={idx}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row mb-20 space-x-20">
                    {secondRow.map((product, idx) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.title}
                            index={idx + 5}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((product, idx) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                            index={idx + 10}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {
    const events = [
        { name: "Music Fest", src: "/Events/1.jpg" },
        { name: "Art Expo", src: "/Events/2.JPG" },
        { name: "Tech Talk", src: "/Events/3.jpg" },
        { name: "Dance Show", src: "/Events/4.JPG" },
        { name: "Food Carnival", src: "/Events/5.JPG" },
        { name: "Fashion Parade", src: "/Events/6.JPG" },
    ];

    const rotations = [
        "-rotate-12", "rotate-6",
        "rotate-12", "rotate-12",
        "-rotate-6", "-rotate-12"
    ];

    return (
        <div className="z-10 absolute flex flex-col items-center justify-center mx-auto py-5 md:py-28 px-4 w-full">
            <div className="max-w-7xl w-full">
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-gold font-barlow uppercase tracking-tighter shadow-purple-deep break-words hyphens-auto">
                    About<br /><span className="text-white opacity-80 break-all sm:break-normal">Sanskriti'26</span>
                </h1>
                <p className="max-w-2xl text-base md:text-xl mt-12 text-secondary/60 font-courier leading-relaxed">
                    Sanskriti'26 is more than an arts fest—it's a movement, a melting pot of
                    creativity, and a pulse of inspiration at <span className="text-gold">Mar Athanasius College of Engineering</span>.
                    Here, tradition collides with innovation, and every brushstroke, beat, and
                    performance tells a story waiting to be heard.
                </p>

                <div className="mt-12 w-full max-w-lg h-px bg-gradient-to-r from-gold/50 to-transparent"></div>
            </div>

            <div className="w-full mt-20 grid place-items-center grid-cols-2 sm:grid-cols-3 gap-8 overflow-hidden">
                {events.map((event, index) => (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.8 }}
                        key={event.name}
                        className={`relative overflow-hidden rounded-[2rem] shadow-3xl shadow-purple-deep flex max-w-72 h-48 md:h-80 ${rotations[index % rotations.length]} border border-gold/10 hover:border-gold/50 transition-all duration-700 group cursor-none`}
                    >
                        <img
                            src={event.src}
                            alt={event.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-purple-deep/20 group-hover:bg-transparent transition-colors"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export const ProductCard = ({
    product,
    translate,
    index,
}) => {
    return (
        <motion.div
            style={{ x: translate }}
            key={product.title}
            className="group/product h-72 sm:h-[450px] w-96 sm:w-[550px] relative flex-shrink-0"
        >
            <div className="block h-full w-full rounded-[3rem] overflow-hidden border border-gold/5 bg-black/20">
                <motion.img
                    src={product.thumbnail}
                    className="object-contain absolute h-full w-full inset-0 p-20 grayscale-0 transition-opacity duration-1000"
                    alt={product.title}
                    animate={{
                        opacity: [0.15, 0.4, 0.15],
                        filter: ["brightness(1) blur(2px)", "brightness(1.8) blur(0px)", "brightness(1) blur(2px)"],
                    }}
                    transition={{
                        duration: 4 + (index % 3),
                        repeat: Infinity,
                        delay: index * 0.8,
                        ease: "easeInOut",
                    }}
                />
            </div>
        </motion.div>
    );
};
