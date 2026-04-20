import { motion } from "motion/react";

function PageTransition({ children }) {
  return (
    <motion.div
      className="pt-32 md:pt-24 lg:pt-20 md:pt-5 lg:pt-10"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
