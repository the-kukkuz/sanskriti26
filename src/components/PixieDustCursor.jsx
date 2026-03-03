import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PixieDustCursor = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const createParticle = (x, y) => {
            const newParticle = {
                id: Math.random(),
                x,
                y,
                size: Math.random() * 3 + 1, // Smaller, more delicate dust
                color: Math.random() > 0.5 ? '#facd04' : '#ffffff', // Gold or White
            };

            setParticles((prev) => [...prev.slice(-150), newParticle]); // Large pool for massive sparkle
        };

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollDist = Math.abs(currentScrollY - lastScrollY);

            if (scrollDist > 2) { // Extremely sensitive for constant shimmer
                // Dense burst of 20 particles across the screen
                for (let i = 0; i < 20; i++) {
                    createParticle(
                        Math.random() * window.innerWidth,
                        Math.random() * window.innerHeight
                    );
                }
                lastScrollY = currentScrollY;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999]">
            <AnimatePresence>
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        initial={{ opacity: 0.6, scale: 1 }}
                        animate={{ opacity: 0, scale: 0, y: particle.y + 20 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        style={{
                            position: 'absolute',
                            left: particle.x,
                            top: particle.y,
                            width: particle.size,
                            height: particle.size,
                            backgroundColor: particle.color,
                            borderRadius: '50%',
                            boxShadow: `0 0 8px ${particle.color}`,
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};

export default PixieDustCursor;
