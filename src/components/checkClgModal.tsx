import { motion } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  non_mace_link: string;
  mace_link: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, non_mace_link, mace_link}) => {
  if (!isOpen) return null;

  return (
    <div className="z-[199] fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white p-6 rounded-lg shadow-lg text-center"
      >
        <h2 className="text-lg font-semibold mb-4">Are you a MACEian?</h2>
        <div className="flex gap-4 justify-center">
          <a href={mace_link} onClick={onClose} className="px-4 py-2 bg-blue-600 text-white rounded">
            MACEian <br /><span className=" text-sm">Use college mail id</span>
          </a>
          <a href={non_mace_link} onClick={onClose} className="px-4 py-2 bg-gray-600 text-white rounded">
            Non-MACEian
          </a>
        </div>
        <button onClick={onClose} className="mt-4 text-red-500">
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;
