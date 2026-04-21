import { motion } from "motion/react";

function PageTransition({ children }) {
  return (
    <motion.div
      className="mt-3 min-h-screen lg:mt-5"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
