import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PixieDustCursor = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        let lastPos = { x: 0, y: 0 };

        const handleMouseMove = (e) => {
            // Distance check to throttle particle creation
            const dist = Math.hypot(e.clientX - lastPos.x, e.clientY - lastPos.y);

            if (dist > 25) { // Create particle only every 25px of movement
                const newParticle = {
                    id: Math.random(),
                    x: e.clientX,
                    y: e.clientY,
                    size: Math.random() * 4 + 2,
                    color: Math.random() > 0.5 ? '#facd04' : '#ffffff', // Gold or White
                };

                setParticles((prev) => [...prev.slice(-8), newParticle]); // Reduced pool to 8 particles
                lastPos = { x: e.clientX, y: e.clientY };
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
            <AnimatePresence>
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        initial={{ opacity: 0.6, scale: 1 }}
                        animate={{ opacity: 0, scale: 0, y: particle.y + 10 }}
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
