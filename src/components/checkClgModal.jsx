import { motion } from "framer-motion";

const Modal = ({ isOpen, onClose, non_mace_link, mace_link }) => {
    if (!isOpen) return null;

    return (
        <div className="z-[999] fixed inset-0 flex items-center justify-center bg-purple-dark/80 backdrop-blur-md">
            <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 20 }}
                className="bg-purple-dark border-2 border-gold/30 p-10 rounded-[2.5rem] shadow-[0_0_50px_rgba(255,183,0,0.15)] text-center max-w-sm w-full mx-4"
            >
                <h2 className="text-3xl font-bold mb-8 text-gold font-barlow uppercase tracking-wider">Are you a MACEian?</h2>
                <div className="flex flex-col gap-4 justify-center">
                    <a
                        href={mace_link}
                        onClick={onClose}
                        className="group flex flex-col items-center justify-center px-6 py-4 bg-gold text-purple-dark rounded-2xl font-bold font-barlow uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-lg"
                    >
                        <span>Yes, I am</span>
                        <span className="text-[10px] normal-case font-inter opacity-80 mt-1">Use college mail ID</span>
                    </a>
                    <a
                        href={non_mace_link}
                        onClick={onClose}
                        className="px-6 py-4 bg-purple/20 border border-gold/30 text-gold rounded-2xl font-bold font-barlow uppercase tracking-widest hover:border-gold hover:bg-purple/10 transition-all"
                    >
                        No, I'm a Guest
                    </a>
                </div>
                <button
                    onClick={onClose}
                    className="mt-8 text-secondary/60 hover:text-white transition-colors font-inter text-sm flex items-center justify-center gap-2 mx-auto"
                >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                    Close
                </button>
            </motion.div>
        </div>
    );
};

export default Modal;
