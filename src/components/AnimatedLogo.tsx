import { motion } from "framer-motion";

const AnimatedLogo = () => {
  return (
    <div className="relative w-32 h-32 mx-auto">
      {/* Outer glow ring */}
      <motion.div
        className="absolute -inset-5"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full blur-md" />
      </motion.div>

      {/* Main logo container */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-full h-full">
          {/* Animated background circles */}
          <motion.div
            className="absolute -inset-5"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.2, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full" />
          </motion.div>
          
          {/* Static ring */}
          <div className="absolute -inset-5 border-2 border-primary/20 rounded-full" />

          {/* Main logo image */}
          <motion.img
            src="/lovable-uploads/85805f7a-3864-47de-ac9e-01d19b8a5178.png"
            alt="AI Logo"
            className="w-full h-full object-contain relative z-10"
            style={{ transform: 'none' }}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>

      {/* Pulse effect */}
      <div className="absolute -inset-5">
        <motion.div
          className="w-full h-full bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedLogo;