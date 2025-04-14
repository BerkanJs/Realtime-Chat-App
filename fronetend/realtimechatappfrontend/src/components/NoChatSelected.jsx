import {
  Smile,
  Send,
  User,
  Camera,
  Heart,
  Bell,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const icons = [Smile, Send, User, Camera, Heart, Bell];

const NoChatSelected = () => {
  return (
    <div className="relative flex items-center justify-center h-full w-full bg-base-100 text-base-content overflow-hidden">
      {/* Animated Icon Grid Background */}
      <div className="absolute inset-0 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 p-10 opacity-30 z-0 pointer-events-none">
        {Array.from({ length: 32 }).map((_, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={i}
              className="flex items-center justify-center"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4 + (i % 5),
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              <Icon className="w-6 h-6 text-base-content/50 drop-shadow-sm" />
            </motion.div>
          );
        })}
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 text-center space-y-4 p-6 rounded-xl shadow-md bg-base-200/60 backdrop-blur-md"
      >
        <motion.div
          animate={{
            y: [0, -6, 0],
            rotate: [0, 3, -3, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex justify-center"
        >
          <Sparkles className="w-10 h-10 text-primary drop-shadow-md" />
        </motion.div>

        <h2 className="text-xl font-semibold">No conversation selected</h2>
        <p className="text-sm text-base-content/70 max-w-sm mx-auto">
          Select a conversation from the sidebar to start chatting.
        </p>
      </motion.div>
    </div>
  );
};

export default NoChatSelected;
