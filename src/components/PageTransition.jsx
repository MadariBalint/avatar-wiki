import { motion } from "motion/react";

function PageTransition({ children }) {
  return (
    <motion.div
      className="h-dvh pt-3 md:pt-5 lg:pt-10"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
