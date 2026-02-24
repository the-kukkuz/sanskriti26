import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const navLinksLeft = [
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
];

const navLinksRight = [
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > window.innerHeight - 100;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const handleNavigation = (href) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.querySelector(href);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const element = document.querySelector(href);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AnimatePresence>
            {scrolled && (
                <motion.nav
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="fixed top-4 md:top-6 left-0 w-full z-[100] flex justify-center pointer-events-none"
                >
                    <motion.div
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        animate={{
                            width: isHovered ? 'auto' : '100px',
                            paddingLeft: isHovered ? '32px' : '0px',
                            paddingRight: isHovered ? '32px' : '0px',
                        }}
                        transition={{ duration: 0.2, ease: "circOut" }}
                        className="relative pointer-events-auto flex items-center justify-center bg-purple-deep/70 backdrop-blur-xl rounded-[3rem] border border-gold/10 shadow-[0_0_30px_rgba(15,5,37,0.5)] py-2 md:py-3 group transition-all duration-300 hover:border-gold/30 min-h-[60px] md:min-h-[70px] overflow-hidden"
                    >
                        {/* Left Links */}
                        <div className="flex items-center justify-end">
                            <AnimatePresence mode="wait">
                                {isHovered && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        transition={{ duration: 0.15 }}
                                        className="flex items-center gap-4 md:gap-8 mr-6 md:mr-10"
                                    >
                                        {navLinksLeft.map((link) => (
                                            <button
                                                key={link.name}
                                                onClick={() => handleNavigation(link.href)}
                                                className="text-[9px] md:text-[11px] font-barlow font-bold text-gold/60 hover:text-gold uppercase tracking-[0.2em] transition-colors whitespace-nowrap"
                                            >
                                                {link.name}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Center Logo Anchor */}
                        <div
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="flex flex-col items-center justify-center cursor-pointer flex-shrink-0 z-10"
                        >
                            <motion.img
                                layoutId="main-logo"
                                src="/images/S26logo.png"
                                alt="Sanskriti Logo"
                                className="w-7 h-7 md:w-10 md:h-10 object-contain animate-flap drop-shadow-[0_0_15px_rgba(250,205,4,0.4)]"
                            />
                            <span className="text-[6px] md:text-[8px] font-barlow font-bold text-gold uppercase tracking-[0.2em] mt-1 whitespace-nowrap">
                                SANSKRITI 26
                            </span>
                        </div>

                        {/* Right Links */}
                        <div className="flex items-center justify-start">
                            <AnimatePresence mode="wait">
                                {isHovered && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{ duration: 0.15 }}
                                        className="flex items-center gap-4 md:gap-8 ml-6 md:ml-10"
                                    >
                                        {navLinksRight.map((link) => (
                                            <button
                                                key={link.name}
                                                onClick={() => handleNavigation(link.href)}
                                                className="text-[9px] md:text-[11px] font-barlow font-bold text-gold/60 hover:text-gold uppercase tracking-[0.2em] transition-colors whitespace-nowrap"
                                            >
                                                {link.name}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
};

export default Navbar;
