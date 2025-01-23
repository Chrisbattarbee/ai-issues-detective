import { motion } from "framer-motion";

const AnimatedLogo = () => {
  return (
    <div className="relative w-32 h-32 mx-auto">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-full h-full">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 0.3, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.img
            src="/lovable-uploads/85805f7a-3864-47de-ac9e-01d19b8a5178.png"
            alt="AI Logo"
            className="w-full h-full object-contain relative z-10"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
      <div className="absolute -inset-4">
        <div className="w-full h-full bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full animate-pulse" />
      </div>
    </div>
  );
};

export default AnimatedLogo;