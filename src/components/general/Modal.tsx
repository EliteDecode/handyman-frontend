import { motion } from "framer-motion";
interface modalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
const Modal = ({ isOpen, onClose, children }: modalProps) => {
  if (!isOpen) return null;
  return (
    <div className="h-full w-full fixed flex items-center justify-center top-0 left-0 z-50">
      <div
        onClick={onClose}
        className="bg-black opacity-60 fixed top-0 w-full bottom-0 cursor-pointer"
      ></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="border border-borderColor rounded-2xl bg-white px-6 pt-4 pb-7 shadow-lg relative w-[90%] md:max-w-[670px] "
      >
        <div className="mt-4">{children}</div>
      </motion.div>
    </div>
  );
};

export default Modal;
