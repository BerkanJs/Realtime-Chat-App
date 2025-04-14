import { motion } from "framer-motion";

const shimmerVariants = {
  initial: { backgroundPosition: "-200% 0" },
  animate: {
    backgroundPosition: "200% 0",
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const SidebarSkeleton = () => {
  return (
    <div className="w-full h-full p-4 space-y-4 bg-base-200">
      {/* Header Skeleton */}
      <motion.div
        className="w-3/4 h-6 rounded-md bg-gradient-to-r from-base-300 via-base-100 to-base-300 bg-[length:200%_100%]"
        variants={shimmerVariants}
        initial="initial"
        animate="animate"
      />

      {/* User Avatar Placeholder */}
      <motion.div
        className="w-10 h-10 rounded-full bg-gradient-to-r from-base-300 via-base-100 to-base-300 bg-[length:200%_100%]"
        variants={shimmerVariants}
        initial="initial"
        animate="animate"
      />

      {/* Chat Row Placeholders */}
      <div className="space-y-3 pt-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-3"
            initial="initial"
            animate="animate"
            variants={shimmerVariants}
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-r from-base-300 via-base-100 to-base-300 bg-[length:200%_100%]" />
            <div className="flex-1 space-y-2">
              <div className="w-2/3 h-3 rounded bg-gradient-to-r from-base-300 via-base-100 to-base-300 bg-[length:200%_100%]" />
              <div className="w-1/2 h-2 rounded bg-gradient-to-r from-base-300 via-base-100 to-base-300 bg-[length:200%_100%]" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SidebarSkeleton;
