import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoArrowBack } from 'react-icons/io5';

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="fixed top-6 left-6 z-[110] flex items-center gap-2 px-4 py-2 bg-purple-deep/40 backdrop-blur-xl border border-gold/20 rounded-full text-gold font-advercase text-sm uppercase tracking-widest hover:bg-gold/10 hover:border-gold/40 transition-all shadow-[0_0_20px_rgba(0,0,0,0.3)]"
        >
            <IoArrowBack className="w-4 h-4" />
            <span>Back</span>
        </motion.button>
    );
};

export default BackButton;
