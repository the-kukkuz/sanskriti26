import { EventParallax } from "@/components/event-paralax";
import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-purple-deep"
            id="about"
        >
            <EventParallax products={products} />
        </motion.section>
    )
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
